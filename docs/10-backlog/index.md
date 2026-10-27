# 10. Backlog de Produto

> **Situação em 27/10/2026 (Sprint 6, de 20/10 a 02/11).** RFs concluídos pela DoD: **0 de 45** (última medição: 17/10). A próxima atualização acontece na revisão da Sprint 6, em 02/11/2026. O registro de cada mudança está em [10.8 Refinamentos do backlog](#108-refinamentos-do-backlog).

O backlog é a **única fonte do trabalho** da equipe: requisitos funcionais, itens técnicos (ambiente, deploy, CI) e tarefas de lançamento (transição, treinamento). O que não está aqui não é trabalho da equipe.

O backlog é **emergente**. Ele é refinado em toda sprint, por cerca de 10% do tempo da equipe, e segue o modelo do **iceberg**:

- **Topo:** os itens da sprint atual e da próxima ficam em histórias pequenas, com critérios de aceitação e protótipo.
- **Meio:** os itens seguintes ficam em histórias escritas, ainda sem todos os critérios.
- **Base:** o restante fica em épicos (atividades do mapa), com detalhe suficiente só para estimar e priorizar.

**Abordagem de granularidade (User Story):**

| Nível | Neste backlog | Exemplo |
|---|---|---|
| Tema | Jornada de uma persona | Jornada A – Fazer a doação chegar às famílias |
| Épico | Atividade da jornada (um verbo) | A2 – Receber doações |
| História | User story, com um único ator | US09 – Registrar doação recebida |
| Task | Tarefa técnica na sprint (quadro) | Criar tabela `doacao` no Supabase |

A rastreabilidade RF → US continua valendo, mas **um RF pode gerar mais de uma história** quando envolve atores ou comportamentos diferentes. As histórias divididas recebem letra: US15 vira US15a e US15b.

O acompanhamento diário (responsável, situação e tasks) fica no quadro do GitHub Projects: **[link do quadro – a incluir]**.

---

## 10.1 Personas e objetivos

As personas foram definidas a partir das entrevistas com a coordenação e da validação de 28/09/2026. **Hipóteses a confirmar com a coordenação** na revisão da Sprint 6: quem registra as doações no dia a dia e quem faz a chamada.

| Persona | Perfil no sistema (seção 8.4) | Quem é | Objetivos |
|---|---|---|---|
| **Coordenadora** | Coordenação | Responsável pela associação; decide quem usa o sistema e presta contas aos apoiadores. | Saber o que entrou, o que há disponível e para onde foi cada doação. Garantir que nenhum dado de família seja usado sem consentimento. Mostrar o impacto da associação aos apoiadores. |
| **Voluntária de atendimento** | Voluntário | Recebe as doações e atende as famílias (por exemplo, na Sacola Verde). | Registrar o recebimento sem atrasar o atendimento. Encontrar a família rapidamente. Entregar só o que está disponível. |
| **Educadora voluntária** | Voluntário | Conduz oficinas e o Reforço Escolar. | Fazer a chamada no próprio dia, pelo celular, sem lista em papel. Saber quem está faltando para avisar a coordenação a tempo. |
| **Visitante ou apoiador** | Público (sem login) | Comunidade, doadores e parceiros. | Saber o que a associação faz, quando há atividades e o que doar. Falar com a associação sem precisar ir até lá. |

---

## 10.2 Mapa de histórias

O mapa é organizado por **jornada**. Na horizontal ficam as **atividades** de cada persona, na ordem em que acontecem no trabalho. Embaixo de cada atividade ficam as histórias que a apoiam. Na vertical, as **releases** recortam conjuntos de histórias que permitem concluir um objetivo da persona de ponta a ponta.

Legenda das releases:

- **R1 – A doação chega à família:** a coordenadora e a voluntária registram uma doação e a entregam a uma família cadastrada com consentimento.
- **R2 – A educadora faz a chamada:** uma educadora faz a chamada de uma turma e as faltas ficam registradas e justificadas.
- **R3 – Manter os cadastros em dia:** atualizações, inativações e cancelamentos, sem perder histórico.
- **R4 – Prestar contas e proteger dados:** relatórios, painel e LGPD avançada.
- **Trilha paralela (CP1):** portal institucional, que não depende dos outros módulos.

R1 e R2 formam o **MVP**.

### Jornada A – Fazer a doação chegar às famílias

*Personas: Coordenadora e Voluntária de atendimento*

| Release | A1 Dar acesso à equipe | A2 Receber doações | A3 Acolher a família | A4 Distribuir itens | A5 Manter cadastros | A6 Prestar contas |
|---|---|---|---|---|---|---|
| **R1** | US41 Autenticar<br>US39 Cadastrar usuário<br>US40 Atribuir perfil | US11 Cadastrar categoria<br>US08 Cadastrar doador<br>US09 Registrar entrada | US42 Registrar consentimento<br>US14 Cadastrar família | US12 Consultar saldo<br>US10 Registrar destinação | | |
| **R2** | | | US16 Cadastrar participante<br>US18 Vincular à família | | | |
| **R3** | | | | | US15a Atualizar família<br>US15b Inativar família<br>US17a Atualizar participante<br>US17b Inativar participante | |
| **R4** | | | | | | US33 Relatório de doações recebidas<br>US34 Relatório de doações distribuídas<br>US36 Relatório de famílias<br>US38 Exportar relatório<br>US37 Painel de indicadores |

### Jornada B – Garantir que as crianças frequentem as atividades

*Personas: Educadora voluntária e Coordenadora*

| Release | B1 Montar turmas | B2 Inscrever participantes | B3 Fazer a chamada | B4 Ajustar a chamada | B5 Acompanhar faltas |
|---|---|---|---|---|---|
| **R2** | US20 Cadastrar turma<br>US21 Atualizar turma<br>US22 Encerrar turma | US23 Inscrever<br>US25 Lista de espera<br>US19 Buscar participante<br>US26 Consultar inscritos | US27 Abrir chamada<br>US28 Registrar frequência | US29 Justificar falta<br>US30a Corrigir no mesmo dia<br>US30b Corrigir com motivo | US31 Consultar frequência |
| **R3** | | US24 Cancelar inscrição | | | |
| **R4** | | | | | US32 Sinalizar faltas<br>US35 Relatório de frequência |

### Jornada C – Conhecer e apoiar a associação (trilha paralela)

*Persona: Visitante ou apoiador; a Coordenadora mantém o conteúdo*

| Release | C1 Conhecer a associação | C2 Ver a agenda | C3 Saber o que doar | C4 Falar com a associação |
|---|---|---|---|---|
| **Trilha CP1** | US01 Publicar conteúdo<br>US02 Atualizar conteúdo | US03 Cadastrar atividade<br>US04 Atualizar atividade<br>US05 Consultar agenda | US13 Publicar itens necessários | US06 Enviar contato<br>US07 Consultar contatos |

### Jornada D – Proteger os dados das famílias

*Persona: Coordenadora*

| Release | D1 Responder ao titular | D2 Auditar alterações |
|---|---|---|
| **R4** | US43 Solicitação de exclusão<br>US45 Consultar autorização de imagem | US44 Histórico de alterações |

O registro do consentimento (US42) fica na Jornada A, em "Acolher a família", porque acontece no momento do cadastro (RN19).

---

## 10.3 Backlog geral

Histórias no formato "Como [persona], quero [ação], para [objetivo]". Os RNF02, RNF04, RNF05, RNF06, RNF08, RNF09, RNF11, RNF12, RNF17 e RNF18 valem para todas as histórias (seção 8.4); a coluna "RNFs" lista só os específicos.

### Itens técnicos e de lançamento

| ID | Item | Por que é necessário | Sprint |
|---|---|---|---|
| T01 | Ambiente de desenvolvimento: Nuxt.js, Supabase, deploy e CI | Sem ele nenhuma história passa na DoD (precisa estar publicada e testada). | 6 |
| T02 | Plano de transição | A associação precisa assumir o sistema ao fim da disciplina. | 8 |
| T03 | Treinamento e manual de uso | A coordenação e as voluntárias precisam usar o sistema sem a equipe. | Fechamento |
| T04 | Titularidade das contas e backup | As contas (Supabase, deploy, domínio) precisam ficar em nome da associação. | Fechamento |

Defeitos encontrados nas revisões entram nesta tabela com o prefixo D (D01, D02…), no topo do backlog.

### Jornada A – Fazer a doação chegar às famílias

| ID | RF | User story | RNFs |
|---|---|---|---|
| US41 | RF41 | Como **voluntária de atendimento**, quero entrar na área restrita com meu usuário e senha, para usar as funções do meu perfil com segurança. | RNF07, RNF15 |
| US39 | RF39 | Como **coordenadora**, quero cadastrar voluntárias e outros membros da coordenação, para que só pessoas autorizadas usem a área restrita. | RNF07, RNF15 |
| US40 | RF40 | Como **coordenadora**, quero atribuir a cada usuário o perfil Voluntário ou Coordenação, para que cada pessoa acesse apenas o que sua função permite. | RNF07 |
| US11 | RF11 | Como **coordenadora**, quero cadastrar categorias de item com nome e unidade de medida, para que entradas e saídas sejam contadas sempre da mesma forma. | — |
| US08 | RF08 | Como **voluntária de atendimento**, quero cadastrar e corrigir os dados de pessoas e organizações que doam, para saber de onde veio cada doação. | RNF01, RNF19 |
| US09 | RF09 | Como **voluntária de atendimento**, quero registrar a entrada de itens doados com categoria, quantidade, data e doador, para registrar o recebimento sem atrasar o atendimento. | RNF01, RNF19 |
| US42 | RF42 | Como **voluntária de atendimento**, quero registrar o consentimento do titular (ou responsável legal) para cada finalidade e a autorização de uso de imagem, para que nenhum dado da família seja usado sem permissão. | RNF13, RNF14 |
| US14 | RF14 | Como **voluntária de atendimento**, quero cadastrar uma família com nome do responsável, telefone e endereço, para poder destinar doações e inscrever seus membros. | RNF07, RNF13, RNF16, RNF19 |
| US12 | RF12 | Como **voluntária de atendimento**, quero consultar a quantidade atual de cada item por categoria, para entregar só o que está disponível. | RNF03 |
| US10 | RF10 | Como **voluntária de atendimento**, quero registrar a saída de itens com a família ou atividade que os recebeu, para que a coordenadora saiba para onde foi cada doação. | RNF19 |
| US16 | RF16 | Como **voluntária de atendimento**, quero cadastrar um participante com nome completo e data de nascimento, para registrar cada pessoa atendida. | RNF07, RNF13, RNF16, RNF19 |
| US18 | RF18 | Como **voluntária de atendimento**, quero vincular o participante à família e indicar o responsável legal, para saber quem responde por cada criança ou adolescente. | RNF07, RNF13 |
| US15a | RF15 | Como **voluntária de atendimento**, quero atualizar os dados de uma família, para manter o contato em dia. | RNF07, RNF13, RNF19 |
| US15b | RF15 | Como **coordenadora**, quero inativar uma família que deixou de ser atendida, para tirá-la das buscas sem perder o histórico de atendimento. | RNF07, RNF19 |
| US17a | RF17 | Como **voluntária de atendimento**, quero atualizar os dados de um participante, para manter o cadastro em dia. | RNF07, RNF13, RNF19 |
| US17b | RF17 | Como **coordenadora**, quero inativar um participante, para liberar as vagas que ele ocupava e preservar o histórico. | RNF07, RNF19 |
| US33 | RF33 | Como **coordenadora**, quero gerar o relatório dos itens recebidos por período, categoria e doador, para prestar contas aos apoiadores. | RNF03 |
| US34 | RF34 | Como **coordenadora**, quero gerar o relatório dos itens destinados por período, categoria e família, para mostrar como as doações foram distribuídas. | RNF03, RNF07 |
| US36 | RF36 | Como **coordenadora**, quero gerar o relatório das famílias atendidas no período, para demonstrar o alcance da associação. | RNF03, RNF07 |
| US38 | RF38 | Como **coordenadora**, quero exportar um relatório em PDF ou CSV, para enviá-lo a apoiadores e usá-lo em planilhas. | RNF03 |
| US37 | RF37 | Como **coordenadora**, quero um painel com famílias atendidas, participantes ativos, itens recebidos e distribuídos e participantes sinalizados, para acompanhar o impacto em um só lugar. | RNF03 |

### Jornada B – Garantir que as crianças frequentem as atividades

| ID | RF | User story | RNFs |
|---|---|---|---|
| US20 | RF20 | Como **coordenadora**, quero cadastrar uma turma com atividade, período, dias de encontro e vagas, para organizar a oferta das oficinas. | — |
| US21 | RF21 | Como **coordenadora**, quero alterar período, dias de encontro e vagas de uma turma em andamento, para ajustar a oferta sem prejudicar quem já está inscrito. | — |
| US22 | RF22 | Como **coordenadora**, quero encerrar uma turma registrando a data, para manter o histórico das turmas realizadas. | — |
| US23 | RF23 | Como **educadora voluntária**, quero inscrever um participante ativo em uma turma com vaga, para saber quem frequenta cada atividade. | — |
| US25 | RF25 | Como **educadora voluntária**, quero registrar o participante na lista de espera de uma turma cheia, para que ele seja chamado na ordem quando abrir vaga. | — |
| US19 | RF19 | Como **educadora voluntária**, quero buscar participantes por nome, família ou atividade, para encontrar o cadastro rapidamente durante o atendimento. | RNF03, RNF07 |
| US26 | RF26 | Como **educadora voluntária**, quero consultar os inscritos e a lista de espera de cada turma, para saber quem participa e quem aguarda vaga. | RNF03, RNF07 |
| US27 | RF27 | Como **educadora voluntária**, quero abrir a chamada do encontro com a lista de inscritos, para registrar a presença no próprio dia, sem papel. | RNF01, RNF10, RNF16 |
| US28 | RF28 | Como **educadora voluntária**, quero marcar cada participante como presente ou ausente, para acabar com a conferência manual da presença. | RNF01, RNF10, RNF16 |
| US29 | RF29 | Como **educadora voluntária**, quero informar o motivo de uma falta, para que a falta justificada não conte para o limite de faltas. | RNF01, RNF16 |
| US30a | RF30 | Como **educadora voluntária**, quero corrigir a chamada que eu fiz até o fim do mesmo dia, para consertar um erro de marcação. | RNF19 |
| US30b | RF30 | Como **coordenadora**, quero corrigir qualquer registro de frequência informando o motivo, para resolver erros depois do dia sem perder o registro anterior. | RNF19 |
| US31 | RF31 | Como **educadora voluntária**, quero consultar o histórico de presenças e faltas de um participante por turma e período, para acompanhar a participação dele. | RNF03, RNF07 |
| US24 | RF24 | Como **educadora voluntária**, quero cancelar uma inscrição informando o motivo, para liberar a vaga e saber por que o participante saiu. | — |
| US32 | RF32 | Como **coordenadora**, quero que o sistema sinalize quem atingiu o limite de faltas sem justificativa, para entrar em contato com a família a tempo. | RNF07 |
| US35 | RF35 | Como **coordenadora**, quero gerar o relatório de presenças e faltas de uma turma por período ou encontro, para acompanhar a participação nas atividades. | RNF03, RNF07 |

### Jornada C – Conhecer e apoiar a associação

| ID | RF | User story | RNFs |
|---|---|---|---|
| US01 | RF01 | Como **coordenadora**, quero publicar o histórico, a missão, o endereço e os contatos da associação, para que a comunidade e os apoiadores encontrem essas informações em um só lugar. | — |
| US02 | RF02 | Como **coordenadora**, quero alterar as informações institucionais publicadas, para mantê-las corretas. | — |
| US03 | RF03 | Como **coordenadora**, quero cadastrar uma atividade com data, horário, local e público, para divulgar oficinas e eventos. | — |
| US04 | RF04 | Como **coordenadora**, quero alterar ou cancelar uma atividade divulgada, para que ninguém compareça com base em informação desatualizada. | — |
| US05 | RF05 | Como **visitante**, quero consultar as atividades divulgadas por período e tipo, para saber quando e onde posso participar. | RNF03 |
| US13 | RF13 | Como **coordenadora**, quero incluir e remover na área pública os itens de que a associação precisa, para orientar os apoiadores sobre o que doar. | RNF03 |
| US06 | RF06 | Como **visitante**, quero enviar meu nome, um telefone ou e-mail e uma mensagem, para ser atendido sem precisar ir até a associação. | RNF13 |
| US07 | RF07 | Como **coordenadora**, quero consultar as solicitações de contato e marcar cada uma como atendida, para que nenhum pedido fique sem resposta. | RNF07, RNF13 |

### Jornada D – Proteger os dados das famílias

| ID | RF | User story | RNFs |
|---|---|---|---|
| US43 | RF43 | Como **coordenadora**, quero registrar e acompanhar as etapas de uma solicitação de exclusão de dados, para responder ao titular conforme a LGPD. | RNF13 |
| US45 | RF45 | Como **voluntária de atendimento**, quero consultar a autorização de imagem em vigor de uma pessoa para cada meio, para não divulgar uma imagem sem permissão. | RNF14 |
| US44 | RF44 | Como **coordenadora**, quero consultar quem alterou dados pessoais ou registros de frequência, o que mudou e quando, para ter controle sobre as alterações. | RNF07, RNF19 |

---

## 10.4 Backlog ordenado

A ordem considera os **quatro fatores** de priorização: **valor** (com a fonte que o justifica), **risco** (incerteza técnica ou de negócio, que deve ser atacada cedo), **capacidade de entrega** (cada release precisa fechar um objetivo da persona) e **dependências** (o item do qual outros dependem vem antes).

Sprints 7, 8 e Fechamento são **previsão**, recalculada em cada revisão com a velocidade medida. Só a Sprint 6 é compromisso.

**Escalas.** Valor: 4 Must, 3 Should, 2 Could, 1 Won't now (MoSCoW, seção 8.5). Risco: Alto, Médio ou Baixo, proposto pela equipe. Nível no iceberg: **Topo** (pronta pela DoR ou em refinamento final), **Meio** (história escrita, critérios em rascunho), **Base** (épico, só estimado).

**Situação:** Concluída (passou na DoD) · Em andamento · Pronta (passou na DoR) · A refinar · Não iniciada.

| # | Item | Atividade | Valor | Fonte do valor | Risco | Depende de | Release | Nível | Sprint | Situação (27/10) |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | T01 Ambiente | — | 4 | Condição para a DoD | **Alto**: stack nova para a equipe | — | R1 | Topo | 6 | Em andamento *(confirmar)* |
| 2 | US41 Autenticar | A1 | 3 | Validação 28/09 | **Alto**: segurança (RNF15) | T01 | R1 | Topo | 6 | Em andamento *(confirmar)* |
| 3 | US39 Cadastrar usuário | A1 | 4 | Validação 28/09 | Médio | US41 | R1 | Topo | 6 | Em andamento *(confirmar)* |
| 4 | US40 Atribuir perfil | A1 | 4 | Validação 28/09 | **Alto**: permissões por perfil | US39 | R1 | Topo | 6 | Em andamento *(confirmar)* |
| 5 | US42 Consentimento | A3 | 3 | Validação 28/09; RN19 | **Alto**: LGPD | US41 | R1 | Topo | 6 | Em andamento *(confirmar)* |
| 6 | US11 Categoria | A2 | 4 | Validação 28/09 | Baixo | US40 | R1 | Topo | 6 | Em andamento *(confirmar)* |
| 7 | US08 Doador | A2 | 4 | Validação 28/09 | Baixo | US41 | R1 | Topo | 6 | Em andamento *(confirmar)*; critérios refinados em 27/10 |
| 8 | US09 Entrada | A2 | 4 | Validação 28/09 | Médio: até 3 passos (RNF01) | US08, US11 | R1 | Topo | 6 | Em andamento *(confirmar)* |
| 9 | US12 Saldo | A4 | 4 | Validação 28/09 | Médio: 3 s em 3G (RNF03) | US09 | R1 | Topo | 6 | Em andamento *(confirmar)* |
| 10 | US14 Cadastrar família | A3 | 4 | Validação 28/09; RN04 | Médio: dados pessoais | US42 | R1 | Topo | 7 | A refinar |
| 11 | US10 Destinação | A4 | 4 | Validação 28/09 | Médio | US12, US14 | R1 | Topo | 7 | Pronta pela DoR, exceto protótipo |
| 12 | US16 Participante | A3 | 4 | Validação 28/09; RN05 | Médio | US42 | R2 | Topo | 7 | A refinar |
| 13 | US18 Vincular à família | A3 | 4 | Validação 28/09; RN08 | Baixo | US14, US16 | R2 | Topo | 7 | A refinar |
| 14 | US20 Cadastrar turma | B1 | 4 | Validação 28/09 | Baixo | US40 | R2 | Topo | 7 | A refinar (texto pendente na ata de 28/09) |
| 15 | US23 Inscrever | B2 | 4 | Validação 28/09; RN12 | Médio | US16, US20 | R2 | Topo | 7 | A refinar |
| 16 | US25 Lista de espera | B2 | 4 | Validação 28/09; RN14 | Baixo | US23 | R2 | Topo | 7 | A refinar |
| 17 | US19 Buscar participante | B2 | 4 | Validação 28/09 | Baixo | US23 | R2 | Topo | 7 | A refinar (texto pendente na ata de 28/09) |
| 18 | US26 Consultar inscritos | B2 | 4 | Validação 28/09 | Baixo | US23, US25 | R2 | Topo | 7 | A refinar |
| 19 | US27 Abrir chamada | B3 | 4 | Validação 28/09; RN15 | **Alto**: uso no celular (RNF10) | US26 | R2 | Topo | 7 | A refinar |
| 20 | US28 Registrar frequência | B3 | 4 | Validação 28/09 | Médio | US27 | R2 | Topo | 7 | A refinar |
| 21 | US21 Atualizar turma | B1 | 4 | Ata 28/09; RN10 | Baixo | US20 | R2 | Meio | 7 | Não iniciada |
| 22 | US22 Encerrar turma | B1 | 4 | Ata 28/09; RN11 | Baixo | US20 | R2 | Meio | 7 | Não iniciada |
| 23 | US29 Justificar falta | B4 | 4 | Validação 28/09; no MVP pelo cronograma de 17/10 *(confirmar)* | Baixo | US28 | R2 | Meio | 8 | Não iniciada |
| 24 | US30a Corrigir no mesmo dia | B4 | 4 | Validação 28/09; RN17 | Médio | US28 | R2 | Meio | 8 | Não iniciada |
| 25 | US30b Corrigir com motivo | B4 | 4 | Validação 28/09; RN17 | Médio | US30a | R2 | Meio | 8 | Não iniciada |
| 26 | US31 Consultar frequência | B5 | 4 | Validação 28/09; no MVP pelo cronograma de 17/10 *(confirmar)* | Baixo | US28 | R2 | Meio | 8 | Não iniciada |
| 27 | US24 Cancelar inscrição | B2 | 4 | RN13 | Baixo | US23 | R3 | Meio | 8 | Não iniciada |
| 28 | US17a Atualizar participante | A5 | 4 | Validação 28/09 | Baixo | US16 | R3 | Meio | 8 | Não iniciada |
| 29 | US17b Inativar participante | A5 | 4 | RN06, RN07 | Médio | US24 | R3 | Meio | 8 | Não iniciada |
| 30 | US15a Atualizar família | A5 | 4 | Validação 28/09 | Baixo | US14 | R3 | Meio | 8 | Não iniciada |
| 31 | US15b Inativar família | A5 | 4 | RN06 | Baixo | US14 | R3 | Meio | 8 | Não iniciada |
| 32 | US33 Relatório de recebidas | A6 | 2 | Validação 28/09 | **Alto**: esforço 4 | US09 | R4 | Base | 8 | Não iniciada |
| 33 | US34 Relatório de distribuídas | A6 | 2 | Validação 28/09 | **Alto**: esforço 4 | US10 | R4 | Base | 8 | Não iniciada |
| 34 | US36 Relatório de famílias | A6 | 2 | Validação 28/09 | Médio | US14 | R4 | Base | 8 | Não iniciada |
| 35 | US38 Exportar relatório | A6 | 4 | Validação 28/09 | Médio | US33 | R4 | Base | 8 | Não iniciada |
| 36 | US32 Sinalizar faltas | B5 | 2 | Validação 28/09; RN18 | Médio | US29 | R4 | Base | 8 | Não iniciada |
| 37 | US37 Painel de indicadores | A6 | 2 | Validação 28/09 | **Alto**: esforço 4 | US32, US33, US34 | R4 | Base | 8 | Não iniciada |
| 38 | US35 Relatório de frequência | B5 | 2 | Validação 28/09 | Médio | US28 | R4 | Base | 8 | Não iniciada |
| 39 | US43 Exclusão de dados | D1 | 3 | Aguarda a coordenação | Médio: LGPD | US42 | R4 | Base | Fechamento | Não iniciada |
| 40 | US45 Autorização de imagem | D1 | 3 | Aguarda a coordenação | Baixo | US42 | R4 | Base | Fechamento | Não iniciada |
| 41 | US44 Histórico de alterações | D2 | 2 | Validação 28/09 | Médio | log do RNF19 | R4 | Base | Fechamento | Não iniciada |

**Trilha paralela (CP1)**, ordem própria:

| # | Item | Atividade | Valor | Depende de | Nível | Sprint | Situação (27/10) |
|---|---|---|---|---|---|---|---|
| P1 | US01 Publicar conteúdo | C1 | 2 | T01 | Topo | 7 | A refinar |
| P2 | US02 Atualizar conteúdo | C1 | 2 | US01 | Topo | 7 | A refinar |
| P3 | US03 Cadastrar atividade | C2 | 2 | US01 | Topo | 7 | A refinar |
| P4 | US04 Atualizar atividade | C2 | 2 | US03 | Topo | 7 | A refinar |
| P5 | US05 Consultar agenda | C2 | 2 | US03 | Meio | 8 | Não iniciada |
| P6 | US13 Itens necessários | C3 | 4 | US01, US11 | Meio | 8 | Não iniciada |
| P7 | US06 Enviar contato | C4 | 2 *(rever)* | US01 | Meio | 8 | Não iniciada |
| P8 | US07 Consultar contatos | C4 | 4 *(rever)* | US06 | Meio | 8 | Não iniciada |

**Contagem por sprint (RFs):** Sprint 6 = 8; Sprint 7 = 13 + 4 da trilha = 17; Sprint 8 = 13 + 4 da trilha = 17; Fechamento = 3. Total: 45.

**Itens em risco.** Se a velocidade da Sprint 6 ficar abaixo de 8 RFs, os itens do fim da ordem (R4: relatórios, painel e LGPD avançada) são comunicados ao professor e ao cliente na revisão de 02/11, conforme a seção [6.3](../06-cronograma/index.md#63-velocidade-necessaria) do cronograma.

---

## 10.5 Critérios de aceitação (topo do iceberg)

Só os itens do topo têm critérios completos. Os do meio recebem critérios durante a sprint anterior à sua entrada, pela parte da equipe dedicada à ER.

#### US08 — Cadastrar ou corrigir doador

**Origem:** RF08; RNF01 e RNF19 (seção 8.7). **Regras:** nenhuma RN específica.

- **CA-US08-01:** Voluntário e Coordenação cadastram doadores do tipo **pessoa** ou **organização**, informando nome e pelo menos um meio de contato (telefone ou e-mail).
- **CA-US08-02:** A correção feita por um desses perfis é persistida no cadastro do doador.
- **CA-US08-03:** As correções registram autor, data, hora, valor anterior e valor novo (RNF19); o registro pode ser verificado no log sem a tela RF44.
- **CA-US08-04 (exceção, proposta a validar):** Um doador sem nome não é salvo, e o sistema indica o campo que falta.
- **CA-US08-05 (exceção, proposta a validar):** Se já existir um doador com o mesmo nome e o mesmo telefone ou e-mail, o sistema avisa e oferece usar o cadastro existente.
- **CA-US08-06 (exceção, proposta a validar):** É possível registrar doação anônima sem cadastrar um doador. *(Confirmar com a coordenação se doações anônimas existem.)*

*Evidência prevista:* teste de cadastro, correção, recusa por campo faltante, aviso de duplicidade e consulta do log. Validação: uma coordenadora cadastra e corrige um doador fictício sem ajuda.

#### US09 — Registrar doação recebida

**Origem:** RF09; RNF01 e RNF19. **Regras:** RN02.

- **CA-US09-01:** O registro feito por Voluntário ou Coordenação contém categoria, quantidade, data e doador.
- **CA-US09-02:** A quantidade usa a unidade de medida da categoria (RN02), e a entrada soma a quantidade ao saldo da US12.
- **CA-US09-03:** O registro é concluído em até três passos a partir da tela inicial da área restrita, sem ajuda (RNF01).
- **CA-US09-04 (exceção):** Se faltar categoria, quantidade, data ou doador, a entrada não é salva e o sistema indica o campo que falta.
- **CA-US09-05 (exceção):** Quantidade igual a zero ou negativa é recusada, com mensagem, e o saldo não muda.
- **CA-US09-06 (exceção):** A categoria é escolhida entre as cadastradas na US11, sem texto livre.

*Evidência prevista:* teste do registro, da unidade, da soma no saldo e das recusas. Validação: uma voluntária registra uma doação fictícia sem ajuda, com contagem de passos.

#### US10 — Registrar destinação de doação

**Origem:** RF10; RNF19. **Regras:** RN02.

- **CA-US10-01:** O registro feito por Voluntário ou Coordenação contém categoria, quantidade, data e a família ou atividade destinatária.
- **CA-US10-02:** A quantidade usa a unidade da categoria (RN02), e a saída subtrai a quantidade do saldo da US12.
- **CA-US10-03 (exceção):** Se faltar categoria, quantidade, data ou destinatário, a saída não é salva e o sistema indica o campo que falta.
- **CA-US10-04 (exceção):** Quantidade igual a zero ou negativa é recusada, com mensagem, e o saldo não muda.
- **CA-US10-05 (exceção):** Saída maior que o saldo da categoria é recusada, e o sistema mostra o saldo disponível.
- **CA-US10-06 (exceção):** O destinatário é escolhido entre as famílias e atividades cadastradas, sem texto livre.

*Evidência prevista:* teste do registro, da subtração e das recusas. Validação: a coordenação registra uma saída fictícia para uma família cadastrada.

#### US11 — Cadastrar categoria de item

**Origem:** RF11. **Regras:** RN02.

- **CA-US11-01:** A Coordenação cadastra uma categoria com nome e unidade de medida, escolhida entre unidade, quilo ou pacote (RN02), sem texto livre.
- **CA-US11-02:** Entradas, saídas e saldo usam a unidade cadastrada para a categoria.
- **CA-US11-03 (exceção):** O perfil Voluntário não consegue cadastrar categorias, inclusive por acesso direto à função.
- **CA-US11-04 (exceção):** Categoria sem nome ou sem unidade não é salva, e o sistema indica o campo que falta.
- **CA-US11-05 (exceção):** Não é possível cadastrar duas categorias com o mesmo nome.

*Evidência prevista:* teste com as três unidades, recusa para Voluntário e recusa de categoria incompleta ou duplicada. Validação: revisão das categorias com a coordenação.

#### US12 — Consultar saldo de itens doados

**Origem:** RF12; RNF03. **Regras:** RN02.

- **CA-US12-01:** Voluntário e Coordenação consultam o saldo por categoria (entradas menos saídas), na unidade correspondente.
- **CA-US12-02:** A consulta responde em até 3 segundos em pelo menos 95% das requisições em conexão móvel 3G/4G (RNF03).

*Evidência prevista:* teste do cálculo com movimentações fictícias e medição de tempo em 3G/4G. Validação: conferência dos saldos com a coordenação.

#### US39 — Cadastrar usuário do sistema

**Origem:** RF39; RNF07 e RNF15. **Regras:** RN20.

- **CA-US39-01:** A primeira conta de Coordenação é criada pela equipe na implantação; as demais são criadas pela Coordenação (RN20).
- **CA-US39-02:** A Coordenação cadastra Voluntários e outros membros da Coordenação; o Voluntário não cria contas, inclusive por acesso direto.
- **CA-US39-03:** Senhas com menos de 8 caracteres são recusadas, e as credenciais são armazenadas de forma irreversível (RNF15 e RNF07).

*Evidência prevista:* teste de cadastro, recusa para Voluntário, rejeição de senha curta e inspeção do armazenamento. Validação: a coordenação cadastra uma conta de teste.

#### US40 — Atribuir perfil de acesso

**Origem:** RF40; RNF07. **Regras:** tabela de permissões da seção 8.4.

- **CA-US40-01:** A Coordenação atribui o perfil Voluntário ou Coordenação; o Voluntário não atribui perfis.
- **CA-US40-02:** Operações e dados respeitam o perfil e a tabela da seção 8.4; operações não autorizadas são recusadas, inclusive por acesso direto (RNF07).

*Evidência prevista:* teste dos dois perfis e das recusas. Validação: revisão das permissões com contas de teste.

#### US41 — Autenticar usuário

**Origem:** RF41; RNF07 e RNF15.

- **CA-US41-01:** Voluntário e Coordenação entram com credenciais válidas; credenciais incorretas não dão acesso.
- **CA-US41-02:** Funções restritas exigem autenticação, e as credenciais trafegam cifradas (RNF07).
- **CA-US41-03:** A sessão termina após 30 minutos sem atividade (RNF15).
- **CA-US41-04:** Após cinco tentativas incorretas seguidas, novas tentativas ficam bloqueadas por 15 minutos (RNF15).

*Evidência prevista:* testes de credenciais, acesso sem login, bloqueio, expiração e cifragem. Validação: entrada e acesso às funções do perfil com a coordenação.

#### US42 — Registrar consentimentos e autorizações

**Origem:** RF42; RNF13 e RNF14. **Regras:** RN19.

- **CA-US42-01:** Voluntário e Coordenação registram separadamente, por titular ou responsável legal, os consentimentos para cadastro e atendimento, frequência, contato com a família e relatórios a apoiadores, com a data de cada um (RN19).
- **CA-US42-02:** No mesmo fluxo, a autorização ou recusa de uso de imagem é registrada à parte, com data e meios autorizados (site, redes sociais, materiais impressos).
- **CA-US42-03:** A revogação da autorização de imagem pode ser registrada.
- **CA-US42-04:** No fluxo com US14 e US16, dados reais só entram no sistema depois do consentimento (RN19).

*Evidência prevista:* testes por finalidade, de autorização e recusa de imagem, de revogação e de integração com o cadastro. Validação: revisão do fluxo com a coordenação, com dados fictícios.

---

## 10.6 Regras de negócio

As regras ficam separadas do texto das histórias (DoR, seção 9). Os critérios de aceitação das histórias indicadas precisam cobrir cada regra, inclusive as exceções.

| Código | Regra de negócio | Histórias | Origem |
|---|---|---|---|
| RN01 | A solicitação de contato exige nome, mensagem e ao menos um meio de retorno (telefone ou e-mail). | US06 | RF06 |
| RN02 | Cada categoria de item tem uma unidade de medida (unidade, quilo ou pacote), usada em todas as entradas, saídas e no saldo. | US09, US10, US11, US12 | RF11 |
| RN03 | A lista pública de itens necessários é mantida manualmente pela Coordenação; o sistema não a calcula a partir do saldo. | US13 | Validação 28/09 |
| RN04 | No cadastro de família, são obrigatórios só o nome do responsável, o telefone e o endereço. | US14 | Validação 28/09 |
| RN05 | No cadastro de participante, são obrigatórios só o nome completo e a data de nascimento. | US16 | Validação 28/09 |
| RN06 | Só a Coordenação inativa famílias e participantes. O cadastro inativo sai das buscas padrão, mas o histórico e os relatórios do período continuam disponíveis. | US15b, US17b | RF15, RF17 |
| RN07 | Ao inativar um participante, as inscrições em turmas em andamento são canceladas com o motivo "desligamento da associação". | US17b, US24 | RF17 |
| RN08 | Participante menor de 18 anos precisa de responsável legal; a exceção (por exemplo, acolhimento) exige motivo registrado. | US18 | RF18 |
| RN09 | A data de término da turma deve ser posterior à de início. | US20, US21 | RF20 |
| RN10 | As vagas não podem ser reduzidas para menos que o número de inscritos; o sistema recusa e informa o total. | US21 | RF21 |
| RN11 | Encerrar uma turma antes do fim do período exige motivo. | US22 | RF22 |
| RN12 | Só participante ativo é inscrito, e só em turma com vaga. Sem vaga, o sistema oferece a lista de espera. | US23, US25 | RF23 |
| RN13 | O cancelamento de inscrição exige motivo de uma lista (desistência, mudança de endereço, conflito de horário, desligamento ou outro); texto livre só para "outro". | US24 | RF24 |
| RN14 | A lista de espera segue a ordem de registro. Quando abre vaga ou as vagas aumentam, o sistema avisa a Coordenação, que confirma a inscrição. | US21, US25, US26 | RF21, RF25 |
| RN15 | A chamada só é aberta na data do encontro e lista apenas os inscritos na turma. | US27, US28 | RF27 |
| RN16 | Falta com motivo informado vira falta justificada e não conta para o limite. | US29, US32 | RF29 |
| RN17 | A Educadora (Voluntário) só corrige a chamada que fez, até o fim do mesmo dia. Depois, só a Coordenação corrige, com motivo. O registro anterior é sempre preservado. | US30a, US30b | RF30; validação 28/09 |
| RN18 | O participante é sinalizado ao atingir 3 faltas seguidas sem justificativa. O limite é definido pela Coordenação. | US32, US37 | RF32; validação 28/09 |
| RN19 | O consentimento é registrado separadamente para quatro finalidades (cadastro e atendimento, frequência, contato com a família, relatórios a apoiadores), cada uma com data. No mesmo fluxo, registra-se a autorização ou recusa de imagem, com meios e data. Dados reais só entram depois do consentimento. | US14, US16, US42 | RF42; validação 28/09; seção 9 |
| RN20 | A primeira conta de Coordenação é criada pela equipe na implantação; as demais, pela Coordenação. | US39 | RF39 |

---

## 10.7 Priorização e MVP

### Critérios

A priorização usa quatro fatores:

1. **Valor de negócio**, avaliado com o cliente na escala MoSCoW de 1 a 4. Cada valor indica a **fonte** que o justifica (ata, validação, questionário).
2. **Risco**, avaliado pela equipe: itens com tecnologia nova, segurança ou LGPD vêm cedo, para que um eventual fracasso aconteça enquanto ainda dá tempo de mudar a arquitetura.
3. **Capacidade de entrega**: as histórias são agrupadas em releases que fecham um objetivo da persona (seção 10.2), para gerar feedback útil da coordenação.
4. **Dependências**: o item do qual outros dependem vem antes. Quando possível, a dependência é resolvida combinando histórias ou extraindo a parte comum.

O esforço técnico continua avaliado de 1 a 4 (esforço, complexidade e lacuna de capacidade, seção 8.5) e é usado no planejamento da sprint.

### Validação do MVP

**Participantes:** Makio (cliente), Vitor, Isabella, Luan, Luis, Ian e Pedro. **Data:** 28/09/2026. **Evidência:** gravação na página [Evidências e Gravações](https://mdsreq-fga-unb.github.io/REQ-2026.2-T01-MaesGuerreiras/00-evidencias/).

O MVP corresponde às releases **R1** (a doação chega à família) e **R2** (a educadora faz a chamada).

| Release | Histórias |
|---|---|
| R1 | US41, US39, US40, US42, US11, US08, US09, US12, US14, US10 |
| R2 | US16, US18, US20, US21, US22, US23, US25, US19, US26, US27, US28, US29, US30a, US30b, US31 |

> **Divergência a resolver:** a validação de 28/09 aprovou 18 RFs, incluindo RF12 e RF26 e sem RF29, RF30 e RF31. O cronograma de 17/10 incluiu RF29, RF30 e RF31 no MVP e moveu RF12 e RF26 para a Fatia 2. A recomposição por releases precisa ser confirmada com Makio na revisão da Sprint 6 e registrada em ata.

### Decisões e pendências

- **LGPD e imagem:** o consentimento é dividido em 4 finalidades. A autorização ou recusa de imagem, com meios e revogação, fica no fluxo do RF42. O RF43 trata da solicitação de exclusão de dados.
- **Itens necessários:** a lista pública é 100% manual pela Coordenação (RN03).
- **Pendente:** volume de famílias e participantes e fluxo mensal de doações, para dimensionar banco e infraestrutura.
- **Pendente:** prioridade do bloco de LGPD avançada (US43, US45), a confirmar com a coordenação.
- **Pendente:** valor do RF06 (2) e do RF07 (4) é contraditório; rever com a coordenação qual dado justifica cada um.

---

## 10.8 Refinamentos do backlog

Cada refinamento registra o que mudou, por quê e de onde veio a mudança.

| Data | O que mudou | Por quê | Origem |
|---|---|---|---|
| 28/09/2026 | Priorização com a matriz 4x4 e validação do MVP (18 RFs). | Primeira priorização com o cliente. | Reunião com Makio |
| 17/10/2026 | Replanejamento: escopo e prazo fixos (45 RFs até 10/12); RF29–31 no MVP; RF12 e RF26 na Fatia 2. | Nenhuma funcionalidade implementada até a Sprint 5. | Cronograma replanejado |
| 27/10/2026 | Criadas personas, objetivos e jornadas; mapa de histórias reorganizado por atividades e releases. | Issue #27. | Revisão do professor |
| 27/10/2026 | US15, US17 e US30 divididas por ator (a e b); fim da regra "um RF, uma US". | Issue #26. | Revisão do professor |
| 27/10/2026 | Backlog ordenado com valor, risco, entrega e dependências; US06 antes da US07, US01 antes da US13, relatórios antes da US38. | Issue #26. | Revisão do professor |
| 27/10/2026 | Critérios de aceitação da US08 ampliados com dados obrigatórios e exceções (propostas a validar). | Issue #26. | Revisão do professor |
| 27/10/2026 | Regras de negócio movidas para seção própria (10.6). | Issue #26. | Revisão do professor |
| 27/10/2026 | Itens técnicos e de lançamento (T01–T04) incluídos no backlog; coluna de situação acrescentada. | Backlog como única fonte do trabalho; issue #26. | Revisão do professor |

### Verificação DEEP (27/10/2026)

| Característica | Situação |
|---|---|
| **D**etalhado adequadamente | Topo com critérios de aceitação (US08–US12, US39–US42); falta protótipo validado. Sprint 7 ainda sem critérios. |
| **E**stimado | Esforço de 1 a 4 por RF; velocidade ainda não medida (primeira medição em 02/11). |
| **E**mergente | Refinamentos registrados nesta seção a partir de 27/10. |
| **P**riorizado | Ordem única com os quatro fatores (seção 10.4). |