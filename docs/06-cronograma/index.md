# 6. Cronograma e Entregas

> **Situação em 27/10/2026 (Sprint 6, de 20/10 a 02/11).** RFs concluídos pela DoD: **0 de 45**.
> Próxima atualização: revisão da Sprint 6, em 02/11/2026. A ordem das entregas segue o
> [backlog ordenado](../10-backlog/index.md#104-backlog-ordenado) (seção 10.4), que é a única fonte
> do trabalho da equipe.

O cronograma parte do processo ScrumXP definido na seção [4](../04-estrategias/index.md), das
atividades de Engenharia de Requisitos descritas na seção [5](../05-er/index.md) e do backlog
ordenado da seção [10.4](../10-backlog/index.md#104-backlog-ordenado). O calendário da disciplina
(Unidades 1 a 4, de 11/08/2026 a 10/12/2026) é tratado como restrição externa (seção 6.8).

## 6.1 Como ler este cronograma

- **Prazo e escopo fixos:** os 45 RFs devem estar concluídos até 10/12/2026. O backlog ordenado
  define a ordem e quais itens ficam mais expostos a risco.
- **Só a sprint atual tem compromisso.** As seguintes têm objetivo e previsão, recalculada em cada
  revisão de sprint com a velocidade medida.
- **Previsto × Realizado:** cada sprint registra o que foi planejado, o que de fato aconteceu e a
  evidência que comprova. Item sem evidência não conta como realizado.
- **Nenhuma história entra em sprint sem passar pela DoR** (seção [9](../09-dor-dod/index.md)), nem
  é dada como concluída sem passar pela DoD.

## 6.2 Sprints: previsto × realizado

**Situação:** Concluída · Em andamento · Não realizada · Prevista.

| Sprint | Período | Objetivo | Previsto | Realizado | Situação | Evidência |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Sprint 1 | 11/08 a 24/08 | Conhecer o cliente e o negócio | Entrevistas com Makio e Daiane; proposta v0.1 | Entrevistas e proposta realizadas *(confirmar)* | Concluída | |
| Sprint 2 | 25/08 a 07/09 | Visão do Produto e Projeto (Entrega Parcial 1) | Questionário com Daiane; documento v0.3; site no GitHub Pages | Documento e site publicados | Concluída | |
| Sprint 3 | 08/09 a 21/09 | Backlog detalhado e planejamento técnico | Backlog detalhado; protótipos de baixa fidelidade validados | Backlog detalhado. Protótipos não realizados | Não realizada (protótipos) | |
| Sprint 4 | 22/09 a 05/10 | Priorizar o MVP e preparar o ambiente (Entrega Parcial 2) | Matriz 4x4; validação do MVP; ambiente e autenticação inicial | Matriz 4x4 e valor de negócio com Makio (25/09); MVP validado (28/09). Ambiente não configurado | Não realizada (ambiente) | |
| Sprint 5 | 06/10 a 19/10 | Doações com acesso seguro (Entrega Parcial 3) | US39 a US42, US08 a US12 | Critérios de aceitação de US08 a US12 e US39 a US42; replanejamento em 17/10. Nenhuma história implementada | Não realizada (produto) | |
| Sprint 6 | 20/10 a 02/11 | **Compromisso:** a coordenadora registra doações com acesso seguro | T01, US41, US39, US40, US42, US11, US08, US09, US12 | T01: esqueleto do sistema integrado (PR #31); Supabase e deploy *(confirmar)*. Histórias em andamento *(confirmar)* | Em andamento | |
| Sprint 7 | 03/11 a 16/11 | **Previsão:** fechar a R1 (a doação chega à família) e o núcleo da R2 (chamada) | US14, US10, US16, US18, US20, US23, US25, US19, US26, US27, US28, US21, US22. Trilha CP1: US01, US02, US03, US04 | — | Prevista | |
| Sprint 8 | 17/11 a 30/11 | **Previsão:** fechar R2, R3 e relatórios. Sprint reduzida pela apresentação (24/11 a 26/11) | US29, US30a, US30b, US31, US24, US17a, US17b, US15a, US15b, US33, US34, US36, US38, US32, US37, US35; T02. Trilha CP1: US05, US13, US06, US07 | — | Prevista | |
| Fechamento | 01/12 a 10/12 | Homologar e transferir o sistema (seção 6.5) | Mínimo: homologação, T03, T04. Adicional: US43, US45, US44 | — | Prevista | |

## 6.3 Velocidade necessária

| Período | RFs previstos | Acumulado | Realizado (DoD) |
| :--- | :---: | :---: | :---: |
| Sprint 6 | 8 + T01 | 8 de 45 | |
| Sprint 7 | 13 + 4 da trilha = 17 | 25 de 45 | |
| Sprint 8 | 13 + 4 da trilha = 17 | 42 de 45 | |
| Fechamento | 3 | 45 de 45 | |

Se o realizado de uma sprint ficar abaixo do previsto, os itens do fim do backlog ordenado (R4:
relatórios, painel e LGPD avançada) são comunicados ao professor e ao cliente na mesma revisão.

## 6.4 Portão de liberação para uso real

Nenhum dado real (doadores, famílias, participantes) entra no sistema antes de todas as condições
abaixo serem verificadas e registradas. A verificação é feita ao final da Sprint 6 (antes dos dados
reais de doadores) e repetida ao final da Sprint 7 (antes dos dados reais de famílias e crianças).

| Condição | Como verificar | Sprint 6 | Sprint 7 | Evidência |
| :--- | :--- | :---: | :---: | :--- |
| Backup testado | Restauração de uma cópia de segurança feita com sucesso em ambiente de teste (RNF05) | ☐ | ☐ | |
| Controle de acesso | Testes automatizados das políticas de acesso por perfil passando (RNF07, tabela 8.4) | ☐ | ☐ | |
| Consentimento | US42 concluída pela DoD (RN19) | ☐ | ☐ | |
| Autorização institucional | Autorização da coordenação para uso de dados reais registrada em ata | ☐ | ☐ | |

Até o portão ser liberado, os testes usam apenas dados sintéticos.

## 6.5 Fechamento: mínimo e adicional

**Data de corte de código: 04/12/2026.** Depois dela, nenhuma funcionalidade nova entra; o tempo
restante é só da transição.

| Compromisso mínimo (protegido) | Adicional (só se a Sprint 8 fechar o previsto) |
| :--- | :--- |
| Homologação de todos os RFs concluídos, com a coordenação | US43 – Solicitação de exclusão de dados |
| T03 – Treinamento e manual de uso | US45 – Consultar autorização de imagem |
| T04 – Titularidade das contas (Supabase, deploy, domínio) e backup final conferido | US44 – Histórico de alterações |
| Aceite formal da transição | |

Se a revisão da Sprint 8 (30/11) mostrar que o adicional não cabe até 04/12, isso é comunicado ao
professor e ao cliente nessa revisão.

## 6.6 Complementos de Prioridade 2

Os complementos dos fluxos do MVP, classificados como Prioridade 2 na validação de 28/09, estão
distribuídos assim:

| RF | História | Sprint prevista |
| :--- | :--- | :--- |
| RF21, RF22 | US21, US22 – Atualizar e encerrar turma | Sprint 7 |
| RF25 | US25 – Lista de espera | Sprint 7 |
| RF29, RF30, RF31 | US29, US30a, US30b, US31 – Ajustes e consulta de frequência | Sprint 8 |
| RF24 | US24 – Cancelar inscrição | Sprint 8 |
| RF15, RF17 | US15a, US15b, US17a, US17b – Atualizar e inativar cadastros | Sprint 8 |
| RF38 | US38 – Exportar relatório | Sprint 8 |
| RF13, RF07 | US13, US07 – Itens necessários e consulta de contatos (trilha CP1) | Sprint 8 |

## 6.7 Dependências tratadas

- **US10 (destinação)** depende de família (US14) e de saldo (US12): fica na Sprint 7, depois da
  US14. A destinação para atividade usa a turma (US20), também na Sprint 7.
- **US13 (itens necessários)** depende da área pública (US01) e das categorias (US11).
- **US17b (inativar participante)** depende do cancelamento de inscrição (US24), pela RN07.
- **US37 (painel)** depende da sinalização de faltas (US32) e dos relatórios US33 e US34.

## 6.8 Marcos da disciplina (restrição externa)

Os marcos acadêmicos não são entregas do produto. Eles aparecem aqui porque limitam o tempo
disponível da equipe:

- Apresentação dos trabalhos: 24/11 a 26/11 (Sprint 8) e 01/12 a 03/12 (Fechamento).
- Revisão de notas e menções: 08/12 a 10/12 (Fechamento).
