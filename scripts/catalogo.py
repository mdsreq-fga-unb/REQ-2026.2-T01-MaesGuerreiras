"""Verifica e atualiza o catálogo integrado de requisitos (docs/08-requisitos/index.md).

Uso:
    python scripts/catalogo.py verificar   # aponta problemas; termina com erro se houver
    python scripts/catalogo.py atualizar   # recalcula o campo "Necessário para" de cada ficha

O que é verificado:
1. "Necessário para" de cada ficha corresponde ao inverso dos "Depende de" das outras fichas.
2. "Depende de" só aponta para fichas que existem.
3. O campo "Evolução" de uma ficha não cita critérios de aceitação de outro RF
   (ex.: CA-RF10-06 dentro da ficha do RF14), o que indica nota copiada para o lugar errado.
"""

import re
import sys
from pathlib import Path

CATALOGO = Path(__file__).resolve().parent.parent / "docs" / "08-requisitos" / "index.md"

FICHA = re.compile(r'<details class="ficha" id="(rf\d\d)".*?</details>', re.S)
CONDICOES = re.compile(r"^(\| Condições \|)(.*?)( \|)$", re.M)
DEPENDE = re.compile(r"\*\*Depende de:\*\*(.*?)(?=<br>\*\*Necessário para:\*\*|$)")
NECESSARIO = re.compile(r"<br>\*\*Necessário para:\*\*.*$")
LINK_RF = re.compile(r"\]\(#(rf\d\d)\)")
EVOLUCAO = re.compile(r"^\| Evolução \|(.*)\|$", re.M)
CA_CITADO = re.compile(r"CA-RF(\d\d)")


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
    if problemas:
        print("Problemas no catálogo:")
        for p in problemas:
            print(" -", p)
        sys.exit(1)
    print(f"Catálogo sem problemas ({len(todas)} fichas verificadas).")


if __name__ == "__main__":
    comando = sys.argv[1] if len(sys.argv) > 1 else "verificar"
    {"verificar": verificar, "atualizar": atualizar}.get(comando, verificar)()
