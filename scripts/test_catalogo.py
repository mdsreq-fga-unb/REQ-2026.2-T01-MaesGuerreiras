import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import catalogo


def issue(numero, estado, corpo, autor="MEMBER"):
    return {"number": numero, "state": estado, "body": corpo, "author_association": autor}


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


if __name__ == "__main__":
    unittest.main()
