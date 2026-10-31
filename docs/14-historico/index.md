# 14. Histórico de evolução

Esta página guarda **o que mudou no escopo, por quê e de onde veio a mudança**. Ela preserva a
memória suficiente para entender o estado vigente: as fichas do
[catálogo](../08-requisitos/index.md) mostram só o que vale hoje e apontam para cá. A evolução do
documento como um todo, por versão, está em [Evolução da Proposta](../00-evolucao/index.md); as
decisões tomadas com o cliente estão nas [Atas de Reunião](../00-atas/index.md).

## 14.1 Como registrar uma mudança

1. Atualize a ficha do requisito no catálogo (declaração, condições, critérios, prioridade, entrega
   ou situação).
2. Acrescente uma linha na tabela 14.2: data, o que mudou, por quê, origem e requisitos afetados.
3. Se a decisão foi tomada com o cliente, registre também na ata da reunião.

## 14.2 Registro de mudanças

Até 27/10/2026, as histórias tinham ID próprio (US09, US15a…). A partir de 29/10/2026 elas fazem
parte da ficha do RF de mesmo número. As linhas antigas mantêm a redação da época.

| Data | O que mudou | Por quê | Origem | Afetados |
| :--- | :--- | :--- | :--- | :--- |
| 28/09/2026 | Priorização com a matriz 4x4 e validação do MVP (18 RFs). | Primeira priorização com o cliente. | Reunião com Makio | Todos |
| 17/10/2026 | Replanejamento: escopo e prazo fixos (45 RFs até 10/12); RF29–31 no MVP; RF12 e RF26 na Fatia 2. | Nenhuma funcionalidade implementada até a Sprint 5. | Cronograma replanejado | RF12, RF26, RF29, RF30, RF31 |
| 27/10/2026 | Criadas personas, objetivos e jornadas; mapa de histórias reorganizado por atividades e releases. | Issue #27. | Revisão do professor | Mapa |
| 27/10/2026 | US15, US17 e US30 divididas por ator (a e b); fim da regra "um RF, uma US". | Issue #26. | Revisão do professor | RF15, RF17, RF30 |
| 27/10/2026 | Backlog ordenado com valor, risco, entrega e dependências; US06 antes da US07, US01 antes da US13, relatórios antes da US38. | Issue #26. | Revisão do professor | RF01, RF06, RF07, RF13, RF38 |
| 27/10/2026 | Critérios de aceitação da US08 ampliados com dados obrigatórios e exceções (propostas a validar). | Issue #26. | Revisão do professor | RF08 |
| 27/10/2026 | Regras de negócio movidas para seção própria. | Issue #26. | Revisão do professor | RN01–RN20 |
| 27/10/2026 | Itens técnicos e de lançamento (T01–T04) incluídos no backlog; coluna de situação acrescentada. | Backlog como única fonte do trabalho; issue #26. | Revisão do professor | T01–T04 |
| 29/10/2026 | Criado o **catálogo integrado**: um registro por RF com declaração, intenção, origem, condições, critérios, prioridade, entrega, situação e evolução. | O mesmo requisito aparecia em até 13 trechos de 12 seções, e a repetição já gerava divergências. | Aula de Organização e Atualização (Cap. 12), caso do projeto | Todos |
| 29/10/2026 | Histórias deixam de ter ID próprio: a intenção "Como…, quero…, para…" passa a fazer parte da ficha do RF; desdobramentos por ator viram a) e b) na mesma ficha. Critérios renomeados de CA-US##-nn para CA-RF##-nn. | Evitar um nível extra de rastreabilidade (RF e história com relação um para um). | Aula de 29/10/2026 | Todos |
| 29/10/2026 | Priorização, MVP e rastreabilidade passam a explicar método, critério e tipos de vínculo, e consultam o catálogo em vez de repetir listas. Matriz de rastreabilidade RF × CP × RNF e listas por quadrante e por release removidas. | Uma mudança passa a ser feita em um só lugar. | Aula de 29/10/2026 | Páginas 8 a 12 |
| 29/10/2026 | Fichas com divergência sobre o MVP marcadas com **verificar**. | Tornar visível a pendência entre a validação de 28/09 e o cronograma de 17/10. | Aula de 29/10/2026 | RF12, RF21, RF22, RF25, RF26, RF29, RF30, RF31 |
| 29/10/2026 | Seções 1 a 7 (cenário, solução, intervenção social, estratégias, ER, cronograma e equipe) reunidas em uma página, Visão do Produto. Repetições removidas: papéis dos stakeholders, descrição da gestão manual, riscos que repetiam desafios e efeitos emergentes, benefícios que repetiam os impactos sociais, lista do MVP, atividades da ER descritas duas vezes, práticas de XP descritas duas vezes, reuniões descritas duas vezes, dependências que já estão nas fichas. | Reduzir redundância e deixar a visão do produto em um só lugar. | Decisão da equipe após a aula de 29/10/2026 | Visão do Produto |
| 29/10/2026 | Nova matriz 4×4: valores e esforços atualizados nas 45 fichas; o MVP passa a ter 19 RFs (entram RF29, RF30 e RF31; saem RF12 e RF26). A matriz que leva à escolha foi incluída na página do MVP (10.4). | A primeira avaliação perguntou o valor por característica de produto, nível de abstração errado. A cliente refez a avaliação por requisito, com justificativa. | [Planilha de priorização v2](https://docs.google.com/spreadsheets/d/1k2YFjudQxFV-SecOvGi2Ta5RNQU3BmGNQqUgQscksvA/edit?usp=sharing) | Todos; ver a evolução de cada ficha |
| 31/10/2026 | Fichas passam a mostrar a justificativa da cliente e o detalhe do esforço (esforço, complexidade e lacuna). Escalas e quadrantes da priorização alinhados à planilha v2. | Deixar a origem de cada prioridade recuperável na ficha. | Planilha de priorização v2 | Todos |
| 31/10/2026 | DoR: exemplo de regra passa a ser o RF09 (RN02); item de confirmação do comportamento pelo cliente; aplicação da DoR aos requisitos da Sprint 6 (13.6). | Incorporar o commit 60a3653 do repositório (30/10/2026). | Equipe (Refs #24) | RF08, RF09, RF11, RF12, RF39 a RF42 |
| 31/10/2026 | Releases e sprints alinhadas à nova matriz (opção 1): R1 e R2 com exatamente os 19 RFs do MVP; RF29, RF30 e RF31 para a Sprint 7; RF21, RF22, RF25 e RF26 para a R3, Sprint 8; RF12 fora do MVP, mantido na Sprint 6 como antecipação; RF43 e RF45 para a Sprint 8; portal (RF01 a RF05) e RF44 para o adicional do fechamento; RF06 e RF07 não planejados. Ordem do catálogo refeita. | O MVP passa a fechar na Sprint 7 e a ordem do trabalho segue o valor dado pela cliente, sem perder o que já está em andamento na Sprint 6. | Decisão da equipe; [planilha de priorização v2](https://docs.google.com/spreadsheets/d/1k2YFjudQxFV-SecOvGi2Ta5RNQU3BmGNQqUgQscksvA/edit?usp=sharing) | RF01 a RF07, RF12, RF21, RF22, RF25, RF26, RF29 a RF31, RF43, RF45 |
