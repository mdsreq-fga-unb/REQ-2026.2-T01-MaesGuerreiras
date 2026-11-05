"""Verifica e atualiza o catálogo integrado de requisitos (docs/08-requisitos/index.md).

Uso:
    python scripts/catalogo.py verificar   # aponta problemas; termina com erro se houver
    python scripts/catalogo.py atualizar   # recalcula o campo "Necessário para" de cada ficha
    python scripts/catalogo.py situacao    # recalcula a situação das fichas a partir das issues
    python scripts/catalogo.py previa      # mostra o que "situacao" mudaria, sem gravar

O que é verificado:
1. "Necessário para" de cada ficha corresponde ao inverso dos "Depende de" das outras fichas.
2. "Depende de" só aponta para fichas que existem.
3. O campo "Evolução" de uma ficha não cita critérios de aceitação de outro RF
   (ex.: CA-RF10-06 dentro da ficha do RF14), o que indica nota copiada para o lugar errado.
4. A posição na ordem do backlog é a mesma no atributo data-ordem, no número antes do ID e no
   campo Priorização ("Posição N na ordem"), e nenhuma posição se repete.

Regra da situação (seção 13.7 da documentação):
- Uma issue liga-se a um RF pela linha "Requisitos: RF08, RF09" ou pela caixa "- [ ] DoD RF09".
- Em andamento: há issue ligada, mas falta marcar a DoD ou fechar alguma issue do RF.
- Concluída: todas as caixas de DoD do RF marcadas e as demais issues dele fechadas.
- RF sem issue ligada mantém o que a equipe escreveu.
"""

import json
import os
import re
import sys
import urllib.request
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

CATALOGO = Path(__file__).resolve().parent.parent / "docs" / "08-requisitos" / "index.md"

FICHA = re.compile(r'<details class="ficha" id="(rf\d\d)".*?</details>', re.S)
CONDICOES = re.compile(r"^(\| Condições \|)(.*?)( \|)$", re.M)
DEPENDE = re.compile(r"\*\*Depende de:\*\*(.*?)(?=<br>\*\*Necessário para:\*\*|$)")
NECESSARIO = re.compile(r"<br>\*\*Necessário para:\*\*.*$")
LINK_RF = re.compile(r"\]\(#(rf\d\d)\)")
EVOLUCAO = re.compile(r"^\| Evolução \|(.*)\|$", re.M)
CA_CITADO = re.compile(r"CA-RF(\d\d)")
LINHA_REQUISITOS = re.compile(r"^\s*(?:\*\*)?Requisitos:(?:\*\*)?(.*)$", re.M | re.I)
CAIXA_DOD = re.compile(r"^\s*[-*]\s*\[([ xX])\]\s*DoD\s+(RF\d\d)\b", re.M | re.I)
RF_CITADO = re.compile(r"\bRF\d\d\b", re.I)
AVISO = re.compile(r"^> \*\*Situação em .*(?:\n> .*)*", re.M)
CONTAGEM = re.compile(r"\*\*(\d+) de (\d+)\*\*")
ROTULOS = {"em-andamento": "Em andamento", "concluida": "Concluída"}
# Só quem participa do repositório muda o site; qualquer pessoa pode abrir issue em repositório público.
AUTORES_DA_EQUIPE = {"OWNER", "MEMBER", "COLLABORATOR"}


def ler():
    return CATALOGO.read_text(encoding="utf-8")


def fichas(texto):
    return {m.group(1): m.group(0) for m in FICHA.finditer(texto)}


def dependencias(bloco):
    condicoes = CONDICOES.search(bloco)
    if not condicoes:
        return []
    depende = DEPENDE.search(condicoes.group(2))
    return LINK_RF.findall(depende.group(1)) if depende else []


def inverso(todas):
    necessario = {rf: [] for rf in todas}
    for rf, bloco in todas.items():
        for alvo in dependencias(bloco):
            if alvo in necessario and rf not in necessario[alvo]:
                necessario[alvo].append(rf)
    return {rf: sorted(lista) for rf, lista in necessario.items()}


def texto_necessario(lista):
    if not lista:
        return "<br>**Necessário para:** nenhum requisito"
    return "<br>**Necessário para:** " + ", ".join(f"[{rf.upper()}](#{rf})" for rf in lista)


def atualizar():
    texto = ler()
    necessario = inverso(fichas(texto))

    def trocar_ficha(m):
        rf, bloco = m.group(1), m.group(0)

        def trocar_condicoes(c):
            corpo = NECESSARIO.sub("", c.group(2))
            return c.group(1) + corpo + texto_necessario(necessario[rf]) + c.group(3)

        return CONDICOES.sub(trocar_condicoes, bloco, count=1)

    novo = FICHA.sub(trocar_ficha, texto)
    CATALOGO.write_text(novo, encoding="utf-8")
    print(f"Campo 'Necessário para' atualizado em {len(necessario)} fichas.")


def verificar():
    texto = ler()
    todas = fichas(texto)
    necessario = inverso(todas)
    problemas = []
    for rf, bloco in todas.items():
        for alvo in dependencias(bloco):
            if alvo not in todas:
                problemas.append(f"{rf.upper()}: 'Depende de' aponta para {alvo.upper()}, que não tem ficha.")
        condicoes = CONDICOES.search(bloco)
        if condicoes:
            atual = re.search(r"\*\*Necessário para:\*\*(.*)$", condicoes.group(2))
            esperado = necessario[rf]
            encontrado = sorted(LINK_RF.findall(atual.group(1))) if atual else None
            if encontrado != esperado:
                problemas.append(
                    f"{rf.upper()}: 'Necessário para' desatualizado "
                    f"(esperado: {', '.join(x.upper() for x in esperado) or 'nenhum'}). "
                    "Rode: python scripts/catalogo.py atualizar")
        evolucao = EVOLUCAO.search(bloco)
        if evolucao:
            outros = {n for n in CA_CITADO.findall(evolucao.group(1)) if f"rf{n}" != rf}
            for n in sorted(outros):
                problemas.append(
                    f"{rf.upper()}: o campo 'Evolução' cita CA-RF{n}, critério de outra ficha. "
                    "A nota pode ter sido copiada para o lugar errado.")
    posicoes = {}
    for bloco in re.findall(r'<details class="ficha[^"]*" id="[a-z]+\d\d".*?</details>', texto, re.S):
        ident = re.search(r'id="([a-z]+\d\d)"', bloco).group(1).upper()
        atributo = re.search(r'data-ordem="(\d+)"', bloco)
        if not atributo:
            continue
        n = atributo.group(1)
        numero = re.search(r'class="ficha__ordem"[^>]*>(\d+)º<', bloco)
        texto_pos = re.search(r"Posição \*\*(\d+)\*\* na ordem", bloco)
        if not numero or numero.group(1) != n:
            problemas.append(f"{ident}: o número antes do ID não bate com data-ordem={n}.")
        if texto_pos and texto_pos.group(1) != n:
            problemas.append(f"{ident}: Priorização diz posição {texto_pos.group(1)}, mas data-ordem={n}.")
        posicoes.setdefault(n, []).append(ident)
    for n, ids in sorted(posicoes.items(), key=lambda x: int(x[0])):
        if len(ids) > 1:
            problemas.append(f"Posição {n} repetida em: {', '.join(ids)}.")
    if problemas:
        print("Problemas no catálogo:")
        for p in problemas:
            print(" -", p)
        sys.exit(1)
    print(f"Catálogo sem problemas ({len(todas)} fichas verificadas).")


def buscar_issues():
    repositorio = os.environ.get("GITHUB_REPOSITORY", "mdsreq-fga-unb/REQ-2026.2-T01-MaesGuerreiras")
    cabecalhos = {"Accept": "application/vnd.github+json", "Authorization": f"Bearer {os.environ['GH_TOKEN']}"}
    issues, pagina = [], 1
    while True:
        url = f"https://api.github.com/repos/{repositorio}/issues?state=all&per_page=100&page={pagina}"
        with urllib.request.urlopen(urllib.request.Request(url, headers=cabecalhos)) as resposta:
            lote = json.load(resposta)
        issues += [i for i in lote if "pull_request" not in i]
        if len(lote) < 100:
            return issues
        pagina += 1


def calcular_situacoes(issues):
    ligacoes = {}
    for issue in issues:
        if issue.get("author_association") not in AUTORES_DA_EQUIPE:
            continue
        corpo = issue.get("body") or ""
        caixas = {rf.lower(): marca != " " for marca, rf in CAIXA_DOD.findall(corpo)}
        citados = {rf.lower() for linha in LINHA_REQUISITOS.findall(corpo) for rf in RF_CITADO.findall(linha)}
        for rf in caixas.keys() | citados:
            ligacoes.setdefault(rf, []).append((issue, caixas.get(rf)))

    situacoes = {}
    for rf, ligadas in ligacoes.items():
        caixas = [marcada for _, marcada in ligadas if marcada is not None]
        demais = [issue for issue, marcada in ligadas if marcada is None]
        concluida = bool(caixas) and all(caixas) and all(i["state"] == "closed" for i in demais)
        situacoes[rf] = ("concluida" if concluida else "em-andamento", sorted(i["number"] for i, _ in ligadas))
    return situacoes


def lista_de_issues(numeros):
    itens = [f"#{n}" for n in numeros]
    if len(itens) == 1:
        return f"issue {itens[0]}"
    return "issues " + ", ".join(itens[:-1]) + f" e {itens[-1]}"


def aplicar_situacoes(texto, situacoes, data):
    mudancas = []

    def trocar_ficha(m):
        rf, bloco = m.group(1), m.group(0)
        if rf not in situacoes:
            return bloco
        nova, numeros = situacoes[rf]
        if f'data-situacao="{nova}"' in bloco:
            return bloco
        rotulo = ROTULOS[nova]
        anterior = re.search(r'chip--sit-[a-z-]+">([^<]*)<', bloco).group(1)
        nota = f"{data} · Situação: {anterior} → {rotulo} ({lista_de_issues(numeros)})."
        bloco = re.sub(r'data-situacao="[^"]*"', f'data-situacao="{nova}"', bloco, count=1)
        bloco = re.sub(r'<span class="chip chip--sit-[a-z-]+">[^<]*</span>',
                       f'<span class="chip chip--sit-{nova}">{rotulo}</span>', bloco, count=1)
        bloco = re.sub(r"^\| Situação \|.*\|$", f"| Situação | {rotulo} |", bloco, count=1, flags=re.M)
        bloco = EVOLUCAO.sub(lambda e: f"| Evolução |{e.group(1).rstrip()}<br>{nota} |", bloco, count=1)
        mudancas.append(f"{rf.upper()}: {anterior} → {rotulo} ({lista_de_issues(numeros)})")
        return bloco

    novo = FICHA.sub(trocar_ficha, texto)
    todas = fichas(novo)
    concluidas = sum('data-situacao="concluida"' in b for b in todas.values())
    planejadas = sum('data-sprint="nao-planejado"' not in b for b in todas.values())
    aviso = AVISO.search(novo)
    contagem = CONTAGEM.search(aviso.group(0)) if aviso else None
    if aviso and (not contagem or (int(contagem.group(1)), int(contagem.group(2))) != (concluidas, planejadas)):
        texto_aviso = (f"> **Situação em {data}.** RFs concluídos pela DoD: **{concluidas} de {planejadas}**. "
                       "Atualizado a partir das issues ([como funciona](../13-dor-dod/index.md#137-como-a-situacao-e-atualizada)).")
        novo = novo[:aviso.start()] + texto_aviso + novo[aviso.end():]
        mudancas.append(f"Aviso do catálogo: {concluidas} de {planejadas} concluídos")
    return novo, mudancas


def situacao(gravar=True):
    data = datetime.now(ZoneInfo("America/Sao_Paulo")).strftime("%d/%m/%Y")
    texto = ler()
    novo, mudancas = aplicar_situacoes(texto, calcular_situacoes(buscar_issues()), data)
    if gravar and novo != texto:
        CATALOGO.write_text(novo, encoding="utf-8")
    print("\n".join(mudancas) if mudancas else "Nenhuma situação mudou.")


if __name__ == "__main__":
    comando = sys.argv[1] if len(sys.argv) > 1 else "verificar"
    {
        "verificar": verificar,
        "atualizar": atualizar,
        "situacao": situacao,
        "previa": lambda: situacao(gravar=False),
    }.get(comando, verificar)()
