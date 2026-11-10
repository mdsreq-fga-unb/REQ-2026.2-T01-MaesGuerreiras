import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import catalogo


def issue(numero, estado, corpo, autor="MEMBER", login=None):
    return {"number": numero, "state": estado, "body": corpo, "author_association": autor, "user": {"login": login}}


def ficha(rf, situacao="nao-iniciada", rotulo="Não iniciada", sprint="6"):
    return (
        f'<details class="ficha" id="{rf}" data-sprint="{sprint}" data-situacao="{situacao}" markdown="1">\n'
        f'<summary><span class="chip chip--sit-{situacao}">{rotulo}</span></summary>\n\n'
        f"| Situação | {rotulo} (a confirmar) |\n"
        "| Evolução | 29/10/2026 · Nota antiga. |\n\n"
        "</details>\n"
    )


AVISO = "> **Situação em 27/10/2026 (Sprint 6).** RFs concluídos pela DoD: **0 de 45**\n> (última medição: 17/10).\n\n"


class CalcularSituacoes(unittest.TestCase):
    def test_issue_aberta_deixa_em_andamento(self):
        s = catalogo.calcular_situacoes([issue(32, "open", "Requisitos: RF09 e RF12.")])
        self.assertEqual(s["rf09"], ("em-andamento", [32]))
        self.assertEqual(s["rf12"], ("em-andamento", [32]))

    def test_issues_fechadas_sem_dod_nao_concluem(self):
        s = catalogo.calcular_situacoes([issue(33, "closed", "Requisitos: RF09.")])
        self.assertEqual(s["rf09"][0], "em-andamento")

    def test_dod_marcada_com_issues_fechadas_conclui_mesmo_com_a_issue_de_dod_aberta(self):
        s = catalogo.calcular_situacoes([
            issue(33, "closed", "Requisitos: RF09."),
            issue(35, "open", "- [x] DoD RF09\n- [ ] DoD RF12"),
        ])
        self.assertEqual(s["rf09"], ("concluida", [33, 35]))
        self.assertEqual(s["rf12"][0], "em-andamento")

    def test_bug_aberto_segura_o_rf_com_dod_marcada(self):
        s = catalogo.calcular_situacoes([
            issue(33, "closed", "Requisitos: RF08."),
            issue(35, "open", "- [x] DoD RF08"),
            issue(47, "open", "Requisitos: RF08"),
        ])
        self.assertEqual(s["rf08"][0], "em-andamento")

    def test_caixa_comum_que_cita_rf_nao_conta_como_dod(self):
        s = catalogo.calcular_situacoes([issue(32, "closed", "Requisitos: RF41\n- [x] Completar o login (RF41)")])
        self.assertEqual(s["rf41"][0], "em-andamento")

    def test_rf_citado_fora_da_linha_nao_liga(self):
        self.assertEqual(catalogo.calcular_situacoes([issue(36, "open", "Prazo. Ver RF10 na Sprint 7.")]), {})

    def test_issue_de_quem_nao_e_da_equipe_e_ignorada(self):
        s = catalogo.calcular_situacoes([issue(99, "closed", "- [x] DoD RF09", autor="NONE")])
        self.assertEqual(s, {})

    def test_integrante_marcado_como_contributor_conta_pelo_login(self):
        s = catalogo.calcular_situacoes([issue(62, "open", "Requisitos: RF14", autor="CONTRIBUTOR", login="IanPedersoli")])
        self.assertEqual(s, {"rf14": ("em-andamento", [62])})

    def test_contributor_fora_da_equipe_continua_ignorado(self):
        s = catalogo.calcular_situacoes([issue(28, "open", "Requisitos: RF14", autor="CONTRIBUTOR", login="marsicanogeorge")])
        self.assertEqual(s, {})

    def test_corpo_vazio_nao_quebra(self):
        self.assertEqual(catalogo.calcular_situacoes([issue(1, "open", None)]), {})


class AplicarSituacoes(unittest.TestCase):
    def test_muda_atributo_selo_situacao_evolucao_e_aviso(self):
        texto = AVISO + ficha("rf09")
        novo, mudancas = catalogo.aplicar_situacoes(texto, {"rf09": ("concluida", [33, 35])}, "05/11/2026")
        self.assertIn('data-situacao="concluida"', novo)
        self.assertIn('<span class="chip chip--sit-concluida">Concluída</span>', novo)
        self.assertIn("| Situação | Concluída |", novo)
        self.assertIn("Nota antiga.<br>05/11/2026 · Situação: Não iniciada → Concluída (issues #33 e #35). |", novo)
        self.assertIn("**Situação em 05/11/2026.** RFs concluídos pela DoD: **1 de 1**", novo)
        self.assertNotIn("última medição", novo)
        self.assertEqual(len(mudancas), 2)

    def test_mesma_situacao_nao_muda_o_texto_da_equipe(self):
        texto = "> **Situação em 01/11/2026.** RFs concluídos pela DoD: **0 de 1**.\n\n" + ficha(
            "rf09", "em-andamento", "Em andamento")
        novo, mudancas = catalogo.aplicar_situacoes(texto, {"rf09": ("em-andamento", [32])}, "05/11/2026")
        self.assertEqual(novo, texto)
        self.assertEqual(mudancas, [])

    def test_rf_sem_issue_fica_como_esta_e_nao_planejado_nao_conta(self):
        texto = AVISO + ficha("rf01", "a-refinar", "A refinar") + ficha("rf06", sprint="nao-planejado")
        novo, _ = catalogo.aplicar_situacoes(texto, {}, "05/11/2026")
        self.assertIn('id="rf01" data-sprint="6" data-situacao="a-refinar"', novo)
        self.assertIn("**0 de 1**", novo)

    def test_reabrir_volta_para_em_andamento(self):
        texto = "> **Situação em 01/11/2026.** RFs concluídos pela DoD: **1 de 1**.\n\n" + ficha(
            "rf09", "concluida", "Concluída")
        novo, _ = catalogo.aplicar_situacoes(texto, {"rf09": ("em-andamento", [32])}, "05/11/2026")
        self.assertIn("Situação: Concluída → Em andamento (issue #32).", novo)
        self.assertIn("**0 de 1**", novo)



def linha_mud(codigo, data, mudou, afetados):
    return (f'| <span class="mud" id="mud-{codigo}">MUD-{codigo}</span> | {data} | {mudou} | Motivo. | '
            f"Origem | {afetados} | Equipe |\n")


def link(rf):
    return f"[{rf.upper()}](../08-requisitos/index.md#{rf})"


def ficha_com_notas(rf, *notas):
    return (f'<details class="ficha" id="{rf}" markdown="1">\n<summary>x</summary>\n\n'
            f"| Evolução | {'<br>'.join(notas)} |\n\n</details>\n")


class HistoricoDeMudancas(unittest.TestCase):
    def setUp(self):
        self.historico = (linha_mud("001", "29/10/2026", "Nova matriz.", "Todas as fichas")
                          + linha_mud("002", "31/10/2026", "RF10 muda o destinatário; detalhe.",
                                      f"{link('rf10')}, {link('rf20')}")
                          + linha_mud("003", "31/10/2026", "Releases.", f"{link('rf01')} a {link('rf03')}"))
        self.linhas = catalogo.mudancas_do_historico(self.historico)

    def test_le_links_faixas_e_todas(self):
        self.assertEqual(self.linhas["002"]["rfs"], {"rf10", "rf20"})
        self.assertEqual(self.linhas["003"]["rfs"], {"rf01", "rf02", "rf03"})
        self.assertTrue(self.linhas["001"]["todas"])

    def test_nota_copiada_para_ficha_nao_afetada_e_apontada(self):
        todas = {"rf14": ficha_com_notas("rf14", f"31/10/2026 · Nota do RF10. ({catalogo.link_mud('002')})")}
        problemas = catalogo.problemas_do_historico(todas, self.linhas)
        self.assertTrue(any("copiada para o lugar errado" in p for p in problemas))

    def test_nota_sem_codigo_e_data_diferente_sao_apontadas(self):
        todas = {"rf10": ficha_com_notas("rf10", "31/10/2026 · Sem código.",
                                         f"30/10/2026 · Data errada. ({catalogo.link_mud('002')})")}
        problemas = " ".join(catalogo.problemas_do_historico(todas, self.linhas))
        self.assertIn("sem código", problemas)
        self.assertIn("data diferente", problemas)

    def test_completar_cria_nota_que_falta_e_ordena(self):
        texto = ficha_com_notas("rf20", f"29/10/2026 · Matriz. ({catalogo.link_mud('001')})")
        novo = catalogo.completar_evolucao(texto, self.linhas)
        self.assertIn(f"31/10/2026 · RF10 muda o destinatário. ({catalogo.link_mud('002')})", novo)
        self.assertLess(novo.index("29/10/2026"), novo.index("31/10/2026"))
        todas = {"rf20": catalogo.FICHA.search(novo).group(0)}
        self.assertEqual(catalogo.problemas_do_historico(todas, {k: self.linhas[k] for k in ("001", "002")}), [])

    def test_situacao_com_codigo_liga_a_nota_e_gera_linha(self):
        texto = AVISO + ficha("rf09", "em-andamento", "Em andamento")
        novo, mudancas = catalogo.aplicar_situacoes(texto, {"rf09": ("concluida", [33, 35])}, "05/11/2026", "031")
        self.assertIn(catalogo.link_mud("031"), novo)
        linha = catalogo.linha_da_automacao("031", "05/11/2026", mudancas)
        self.assertEqual(catalogo.mudancas_do_historico(linha)["031"]["rfs"], {"rf09"})


class PermissoesPorPerfil(unittest.TestCase):
    def ficha(self, rf, cp, nome, agentes):
        return (f'<details class="ficha" id="{rf}" data-cp="{cp}" markdown="1">\n'
                f'<summary><span class="ficha__nome">{nome}</span></summary>\n\n| Agentes | {agentes} |\n\n</details>\n')

    def test_le_perfis_e_acoes(self):
        b = self.ficha("rf30", "cp5", "Corrigir", "Voluntário: corrige no dia · Coordenação: corrige com motivo")
        self.assertEqual(catalogo.agentes(b), {"Voluntário": "corrige no dia", "Coordenação": "corrige com motivo"})
        self.assertEqual(catalogo.perfis_da_ficha(b), "voluntario coordenacao")

    def test_marca_perfis(self):
        texto = ("## CP7 · Perfis {#cp7}\n\n" + self.ficha("rf41", "cp7", "Autenticar", "Voluntário: autentica · Coordenação: autentica")
                 + self.ficha("rf32", "cp7", "Sinalizar", "Sistema: sinaliza · Coordenação: consulta"))
        marcado = catalogo.marcar_perfis(texto)
        self.assertIn('data-perfis="voluntario coordenacao"', marcado)
        self.assertIn('data-perfis="coordenacao"', marcado)


if __name__ == "__main__":
    unittest.main()
