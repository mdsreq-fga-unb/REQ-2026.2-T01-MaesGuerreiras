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
5. Ligação entre as fichas e o Histórico de evolução (docs/14-historico/index.md):
   - cada nota da Evolução (exceto "Pendente") termina com o código da mudança, ex.: (MUD-020),
     com link para a linha exata do histórico;
   - o código existe no histórico e a data da nota é a mesma da linha;
   - a ficha está entre os afetados da linha (RF com link na coluna Afetados, ou "Todas as fichas");
   - todo RF com link na coluna Afetados tem nota na própria ficha ("atualizar" cria a que faltar).

6. Permissões por perfil: o campo "Agentes" de cada ficha segue o formato
   "Voluntário: cadastra · Coordenação: cadastra e inativa"; o atributo data-perfis (usado no
   filtro Perfil do catálogo) é gerado a partir dele e não é editado à mão.

O histórico é a fonte: para registrar uma mudança, acrescente a linha no 14.2 (código seguinte,
RFs afetados com link) e rode "atualizar". A nota nas fichas é criada com o resumo da linha; ela pode
ser reescrita na ficha com o detalhe daquele RF, desde que mantenha o código.

Regra da situação (seção 13.7 da documentação):
- Uma issue liga-se a um RF pela linha "Requisitos: RF08, RF09" ou pela caixa "- [ ] DoD RF09".
- Em andamento: há issue ligada, mas falta marcar a DoD ou fechar alguma issue do RF.
- Concluída: todas as caixas de DoD do RF marcadas e as demais issues dele fechadas.
- RF sem issue ligada mantém o que a equipe escreveu.
- Só contam issues abertas pela equipe (EQUIPE_NO_GITHUB ou integrante reconhecido pelo GitHub).
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
HISTORICO = Path(__file__).resolve().parent.parent / "docs" / "14-historico" / "index.md"

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
LINHA_MUD = re.compile(r'^\| <span class="mud" id="mud-(\d{3})">MUD-(\d{3})</span> \| (\d\d/\d\d/\d{4}) \|(.*)\|\s*$', re.M)
NOTA_MUD = re.compile(r"\[MUD-(\d{3})\]\(\.\./14-historico/index\.md#mud-(\d{3})\)")
LINK_FICHA = re.compile(r"\]\(\.\./08-requisitos/index\.md#(rf\d\d)\)")
FAIXA = re.compile(r"index\.md#rf(\d\d)\) a \[RF\d\d\]\(\.\./08-requisitos/index\.md#rf(\d\d)\)")
PERFIS = {"Visitante": "visitante", "Voluntário": "voluntario", "Coordenação": "coordenacao", "Sistema": "sistema"}
AGENTES = re.compile(r"^\| Agentes \|(.*)\|$", re.M)
# Só quem participa do repositório muda o site; qualquer pessoa pode abrir issue em repositório público.
AUTORES_DA_EQUIPE = {"OWNER", "MEMBER", "COLLABORATOR"}
# O GitHub marca os integrantes como CONTRIBUTOR (a participação na organização não é pública), então
# a equipe também é reconhecida pelo login. Ao entrar alguém novo na equipe, acrescente o login aqui.
EQUIPE_NO_GITHUB = {"isall24", "luanludry", "ianpedersoli", "pedrogomes-phgr", "vitorlustosa", "luiskr34"}


def da_equipe(issue):
    login = ((issue.get("user") or {}).get("login") or "").lower()
    return issue.get("author_association") in AUTORES_DA_EQUIPE or login in EQUIPE_NO_GITHUB


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


def ler_historico():
    return HISTORICO.read_text(encoding="utf-8")


def mudancas_do_historico(texto_historico):
    """Linhas do 14.2: código → data, texto, afetados e se vale para todas as fichas."""
    linhas = {}
    for m in LINHA_MUD.finditer(texto_historico):
        celulas = [c.strip() for c in m.group(4).split(" | ")]
        mudou, afetados = celulas[0], celulas[3] if len(celulas) > 3 else ""
        rfs = set(LINK_FICHA.findall(afetados))
        for a, b in FAIXA.findall(afetados):
            rfs |= {f"rf{n:02d}" for n in range(int(a), int(b) + 1)}
        linhas[m.group(1)] = {
            "id_ok": m.group(1) == m.group(2),
            "data": m.group(3),
            "mudou": mudou,
            "rfs": rfs,
            "todas": "todas as fichas" in afetados.lower(),
        }
    return linhas


def link_mud(codigo):
    return f"[MUD-{codigo}](../14-historico/index.md#mud-{codigo})"


def resumo(texto):
    """Primeira frase de "O que mudou", sem marcação, para a nota criada na ficha."""
    limpo = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", texto).replace("**", "").replace("*", "")
    limpo = re.sub(r"\s*\([^)]*\)", "", limpo)
    frase = re.split(r"(?<=[.;])\s", limpo, maxsplit=1)[0].rstrip(" .;")
    return frase if len(frase) <= 160 else frase[:157].rstrip() + "…"


def notas(bloco):
    evolucao = EVOLUCAO.search(bloco)
    if not evolucao:
        return []
    return [n.strip() for n in evolucao.group(1).split("<br>") if n.strip()]


def chave_nota(nota):
    data = re.match(r"(\d\d)/(\d\d)/(\d{4})", nota)
    codigo = NOTA_MUD.search(nota)
    if not data:
        return ("9999", "99", "99", "999")
    return (data.group(3), data.group(2), data.group(1), codigo.group(1) if codigo else "000")


def completar_evolucao(texto, linhas):
    """Cria nas fichas a nota que falta para cada RF afetado e ordena as notas por data."""
    def trocar_ficha(m):
        rf, bloco = m.group(1), m.group(0)
        atuais = notas(bloco)
        citados = {c for n in atuais for c, _ in NOTA_MUD.findall(n)}
        for codigo, linha in linhas.items():
            if rf in linha["rfs"] and codigo not in citados:
                atuais.append(f"{linha['data']} · {resumo(linha['mudou'])}. ({link_mud(codigo)})")
        atuais.sort(key=chave_nota)
        if not EVOLUCAO.search(bloco) or not atuais:
            return bloco
        return EVOLUCAO.sub(lambda e: "| Evolução | " + "<br>".join(atuais) + " |", bloco, count=1)

    return FICHA.sub(trocar_ficha, texto)


def agentes(bloco):
    """Campo Agentes → {perfil: ação}. Perfil desconhecido volta como chave sem tradução."""
    campo = AGENTES.search(bloco)
    if not campo:
        return {}
    resultado = {}
    for parte in campo.group(1).split(" · "):
        perfil, _, acao = parte.strip().partition(":")
        resultado[perfil.strip()] = acao.strip()
    return resultado


def perfis_da_ficha(bloco):
    return " ".join(PERFIS[p] for p in PERFIS if p in agentes(bloco) and PERFIS[p] != "sistema")


def marcar_perfis(texto):
    def trocar(m):
        bloco = m.group(0)
        valor = perfis_da_ficha(bloco)
        abertura = re.match(r"<details [^>]*>", bloco).group(0)
        nova = re.sub(r' data-perfis="[^"]*"', "", abertura).replace(' markdown="1">', f' data-perfis="{valor}" markdown="1">')
        return nova + bloco[len(abertura):]
    return FICHA.sub(trocar, texto)


def atualizar():
    texto = marcar_perfis(completar_evolucao(ler(), mudancas_do_historico(ler_historico())))
    necessario = inverso(fichas(texto))

    def trocar_ficha(m):
        rf, bloco = m.group(1), m.group(0)

        def trocar_condicoes(c):
            corpo = NECESSARIO.sub("", c.group(2))
            return c.group(1) + corpo + texto_necessario(necessario[rf]) + c.group(3)

        return CONDICOES.sub(trocar_condicoes, bloco, count=1)

    novo = FICHA.sub(trocar_ficha, texto)
    CATALOGO.write_text(novo, encoding="utf-8")
    print(f"Campo 'Necessário para' e notas da Evolução atualizados em {len(necessario)} fichas.")


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
    problemas += problemas_do_historico(todas, mudancas_do_historico(ler_historico()))
    for rf, bloco in todas.items():
        ag = agentes(bloco)
        if not ag:
            problemas.append(f"{rf.upper()}: campo Agentes vazio ou ausente.")
        for perfil, acao in ag.items():
            if perfil not in PERFIS or not acao:
                problemas.append(f"{rf.upper()}: Agentes deve ser 'Perfil: ação' com Visitante, Voluntário, Coordenação ou Sistema (achado: '{perfil}').")
        marcado = re.search(r'data-perfis="([^"]*)"', bloco)
        if not marcado or marcado.group(1) != perfis_da_ficha(bloco):
            problemas.append(f"{rf.upper()}: data-perfis não bate com Agentes. Rode: python scripts/catalogo.py atualizar")
    if problemas:
        print("Problemas no catálogo:")
        for p in problemas:
            print(" -", p)
        sys.exit(1)
    print(f"Catálogo sem problemas ({len(todas)} fichas verificadas).")


def problemas_do_historico(todas, linhas):
    problemas = []
    codigos = sorted(linhas)
    for i, codigo in enumerate(codigos, start=1):
        if not linhas[codigo]["id_ok"]:
            problemas.append(f"MUD-{codigo}: o código não bate com a âncora da linha no histórico.")
        if codigo != f"{i:03d}":
            problemas.append(f"Histórico: esperado MUD-{i:03d}, encontrado MUD-{codigo} (código pulado ou repetido).")
            break
    for rf, bloco in todas.items():
        citados = set()
        for nota in notas(bloco):
            if nota.startswith("Pendente"):
                continue
            achados = NOTA_MUD.findall(nota)
            if not achados:
                problemas.append(f"{rf.upper()}: nota da Evolução sem código de mudança: \"{nota[:60]}…\".")
                continue
            for codigo, ancora in achados:
                citados.add(codigo)
                linha = linhas.get(codigo)
                if codigo != ancora:
                    problemas.append(f"{rf.upper()}: o texto MUD-{codigo} aponta para a âncora mud-{ancora}.")
                if not linha:
                    problemas.append(f"{rf.upper()}: cita MUD-{codigo}, que não existe no histórico.")
                    continue
                if not nota.startswith(linha["data"]):
                    problemas.append(f"{rf.upper()}: nota com MUD-{codigo} tem data diferente da linha ({linha['data']}).")
                if not linha["todas"] and rf not in linha["rfs"]:
                    problemas.append(
                        f"{rf.upper()}: cita MUD-{codigo}, mas não está entre os afetados dessa mudança. "
                        "A nota pode ter sido copiada para o lugar errado.")
        for codigo, linha in linhas.items():
            if rf in linha["rfs"] and codigo not in citados:
                problemas.append(f"{rf.upper()}: afetado por MUD-{codigo} sem nota na ficha. Rode: python scripts/catalogo.py atualizar")
    return problemas


def proximo_codigo(linhas):
    return f"{max((int(c) for c in linhas), default=0) + 1:03d}"


def linha_da_automacao(codigo, data, mudancas):
    itens = [m for m in mudancas if re.match(r"RF\d\d:", m)]
    rfs = sorted({m[:4].lower() for m in itens})
    afetados = ", ".join(f"[{rf.upper()}](../08-requisitos/index.md#{rf})" for rf in rfs)
    return (f'| <span class="mud" id="mud-{codigo}">MUD-{codigo}</span> | {data} | '
            f'Situação atualizada pela automação: {"; ".join(itens)}. | '
            "As issues ligadas aos requisitos mudaram de estado (seção 13.7). | "
            f"Automação a partir das issues | {afetados} | Equipe, no commit automático |")


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
        if not da_equipe(issue):
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


def aplicar_situacoes(texto, situacoes, data, codigo=None):
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
        if codigo:
            nota += f" ({link_mud(codigo)})"
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
    texto, historico = ler(), ler_historico()
    codigo = proximo_codigo(mudancas_do_historico(historico))
    novo, mudancas = aplicar_situacoes(texto, calcular_situacoes(buscar_issues()), data, codigo)
    if gravar and novo != texto:
        CATALOGO.write_text(novo, encoding="utf-8")
        if any(re.match(r"RF\d\d:", m) for m in mudancas):
            HISTORICO.write_text(historico.rstrip("\n") + "\n" + linha_da_automacao(codigo, data, mudancas) + "\n",
                                 encoding="utf-8")
    print("\n".join(mudancas) if mudancas else "Nenhuma situação mudou.")


if __name__ == "__main__":
    comando = sys.argv[1] if len(sys.argv) > 1 else "verificar"
    {
        "verificar": verificar,
        "atualizar": atualizar,
        "situacao": situacao,
        "previa": lambda: situacao(gravar=False),
    }.get(comando, verificar)()
