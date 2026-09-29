# 6. Cronograma e Entregas

O cronograma parte do processo ScrumXP definido na seção [4](../04-estrategias/index.md), das
atividades de Engenharia de Requisitos descritas na seção [5](../05-er/index.md) e do escopo e das
dependências do produto estabelecidos na seção [2.3](../02-solucao/index.md#23-caracteristicas-de-produto).
O calendário da disciplina de Requisitos de Software (Unidades 1 a 4, de 11/08/2026 a 10/12/2026)
é tratado como restrição externa: os marcos acadêmicos estão indicados na última coluna apenas
para referência, não como origem das entregas do produto.

A cadência adotada é de **sprints de 2 semanas**, totalizando 8 sprints de desenvolvimento mais
um período de fechamento. O núcleo do MVP foi definido com Makio em 29/09/2026, a partir da
classificação de obrigatoriedade dos RNFs (seção [8.2](../08-requisitos/index.md#82-lista-de-requisitos-nao-funcionais-rnfs)):
doações (CP2), cadastro de famílias e participantes (CP3), inscrição em turma e consulta de
inscritos (parte do CP4), chamada digital (CP5) e o consentimento de tratamento de dados (parte
do CP7). Portal institucional e agenda pública (CP1) e relatórios de impacto (CP6) ficam fora do
núcleo e passam para depois do MVP. A autenticação e os perfis de acesso necessários ao núcleo
entram junto com as sprints que tratam dados pessoais, não mais como uma sprint isolada anterior
a todas as outras.

| Sprint | Período | Objetivo Principal | Entregas do Produto | Artefatos de ER | Validação do Cliente / Marco da Disciplina |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Sprint 1 | 11/08 a 24/08 | Levantamento inicial do cliente e do negócio | Primeiro contato com Makio; levantamento inicial da associação; proposta de projeto v0.1. | Roteiro de entrevistas; registro das entrevistas com Daiane e Makio; primeiras histórias de usuário de alto nível; análise documental dos cadernos e registros existentes. | Validação do escopo inicial com Makio. |
| Sprint 2 | 25/08 a 07/09 | Aprofundamento do levantamento e Visão do Produto e Projeto | **Entrega Parcial 1 (este documento):** questionário aplicado à coordenadora Daiane; refinamento do cenário, da solução e das demais seções da Visão do Produto e Projeto (v0.3); site do projeto (GitHub Pages) estruturado. | Backlog inicial (épicos e user stories); priorização MoSCoW acordada com a coordenação; rastreabilidade preliminar OE → CP → US; critérios de aceitação de alto nível para CP1 e CP7. | Revisão do documento com Makio e Daiane. |
| Sprint 3 | 08/09 a 21/09 | Planejamento técnico e backlog detalhado | Planejamento do ambiente de desenvolvimento (Nuxt.js, Supabase); backlog detalhado de CP1 e CP7; protótipos de baixa fidelidade (wireframes) do portal e do painel de acesso, sem código implementado. | Histórias de usuário de CP1 e CP7 com critérios de aceitação detalhados (modelo INVEST); protótipos de baixa fidelidade validados com a coordenação; decisões da revisão registradas; rastreabilidade atualizada. | Revisão do backlog e dos protótipos com a coordenação. |
| Sprint 4 | 22/09 a 05/10 | Ambiente e início do desenvolvimento | **Entrega Parcial 2:** ambiente de desenvolvimento configurado (Nuxt.js, Supabase, deploy); projeto inicializado; esqueleto de autenticação. CP1 (portal institucional e agenda) passa a ser entregue na Sprint 8, para manter o foco do desenvolvimento no núcleo do MVP (Sprints 5 a 7). | Backlog e rastreabilidade atualizados com o escopo do núcleo do MVP. | Comunicar à coordenação o cronograma de entregas. |
| Sprint 5 | 06/10 a 19/10 | Base administrativa mínima (autenticação, perfis e consentimento) e doações (CP2) | **Entrega Parcial 3 (núcleo do MVP, parte 1):** autenticação e perfis de acesso mínimos; registro de consentimento de tratamento de dados; cadastro de doador, registro de doação recebida e consulta de saldo de itens. Primeiros testes com dados sintéticos; dados reais após autorização institucional confirmada. | Histórias de usuário de CP2 e da base de acesso com critérios de aceitação; checklist de verificação de autenticação e consentimento; evidências de testes; decisões da revisão; rastreabilidade atualizada. | Teste de usabilidade: uma coordenadora registra doações sem ajuda da equipe. |
| Sprint 6 | 20/10 a 02/11 | Cadastro de famílias e participantes (CP3) e turma/inscrição (parte do CP4) | **Entrega Parcial 4 (núcleo do MVP, parte 2):** cadastro e vínculo de famílias e participantes; cadastro de turma, inscrição de participante e consulta de inscritos, protegidos pela base de acesso da Sprint 5. | Histórias de usuário de CP3 e da parte usada do CP4 com critérios de aceitação; protótipos validados; checklist de verificação; evidências de testes; decisões da revisão; rastreabilidade atualizada; práticas XP aplicadas (pair programming, TDD). | Validação presencial durante uma entrega da Sacola Verde. |
| Sprint 7 | 03/11 a 16/11 | Chamada digital e frequência (CP5), fechamento do núcleo do MVP | **Entrega Parcial 5 (MVP completo):** abertura de chamada, registro de frequência e sinalização de faltas, encerrando o núcleo definido com Makio. | Histórias de usuário de CP5 com critérios de aceitação; checklist de verificação; evidências de testes automatizados e de integração; decisões da revisão; rastreabilidade atualizada; práticas XP aplicadas. | Conferência da chamada no Reforço Escolar com a coordenação. |
| Sprint 8 | 17/11 a 30/11 | Fora do núcleo: portal institucional (CP1) | **Entrega Parcial 6:** publicação e edição de conteúdo institucional, agenda pública com situação das atividades. Escopo reduzido caso a sprint sobreponha a apresentação da equipe (24/11 a 26/11). | Histórias de usuário de CP1 verificadas; checklist de verificação; evidências de testes; rastreabilidade atualizada; registro de decisões da revisão. | Apresentação dos trabalhos em equipe (24/11 a 26/11). |
| Fechamento | 01/12 a 10/12 | Relatórios de impacto (CP6), transição para a associação e encerramento acadêmico | **Entrega Parcial 7:** relatórios de doações, famílias atendidas e frequência; painel de indicadores, priorizados conforme o tempo disponível. Testes gerais de integração e usabilidade; homologação do sistema com a coordenação. **Transição:** treinamento das coordenadoras; documentação operacional (manual de uso); transferência da titularidade das contas (Supabase, Vercel/Netlify, domínio); exportação e backup final dos dados; definição de responsabilidade pela manutenção após o semestre. | Histórias de usuário de CP6 verificadas conforme o que for entregue; rastreabilidade final consolidada; registro de decisões de homologação; documentação operacional entregue. | Apresentação dos trabalhos em equipe (01/12 a 03/12) e Revisão de Notas e Menções (08/12 a 10/12). |

## Considerações importantes

1. **Base do cronograma:** o ponto de partida é o processo ScrumXP, as atividades de ER e o
   escopo do produto. As datas das sprints são compatíveis com o calendário oficial da disciplina
   (Unidades 1 a 4), que pode ser ajustado pelo professor ao longo do semestre.
2. **Cadência única de 2 semanas:** todas as sprints de desenvolvimento (1 a 8) têm duração de 2
   semanas. O Fechamento é mais curto e concentrado na transição operacional para a associação e
   nos marcos finais da disciplina.
3. **Núcleo do MVP definido com o cliente:** a partir da classificação de obrigatoriedade dos
   RNFs (seção 8.2), o núcleo do MVP é doações (CP2), famílias e participantes (CP3), inscrição em
   turma e consulta de inscritos (parte do CP4) e chamada digital (CP5), com a base de
   autenticação, perfis e consentimento de dados entrando junto com essas sprints (Sprint 4 fica
   dedicada só a ambiente e infraestrutura). Portal institucional (CP1) e relatórios de impacto
   (CP6) ficam fora do núcleo: CP1 na Sprint 8 e CP6 no Fechamento, separados para não empilhar os
   dois no mesmo período de 2 semanas que também contém a apresentação da equipe (24/11 a 26/11).
   Se a Sprint 8 for comprometida pela apresentação, CP1 pode encolher para o mínimo (institucional
   sem agenda) e CP6 assume o que sobrar.
4. **Dados sintéticos até a base de acesso verificada:** os testes anteriores à Sprint 5 utilizam
   dados fictícios ou anonimizados. O primeiro teste com dados reais ocorre a partir da Sprint 5,
   após autenticação, perfis de acesso e autorização institucional confirmados.
5. **Artefatos de ER em todas as sprints:** cada sprint produz e atualiza histórias de usuário,
   critérios de aceitação, registros de verificação, decisões da revisão e a rastreabilidade do projeto.
6. **Validações ao final de cada sprint:** cada sprint encerra com revisão de sprint junto a Daiane
   e, quando a funcionalidade envolver outra frente, com a coordenadora responsável. As decisões
   resultantes são registradas e refletem no backlog da sprint seguinte.
7. **Validação em uso real:** sempre que possível e seguro (após a base de acesso verificada), a
   validação é feita durante a própria operação da associação, para verificar se a ferramenta
   funciona nas condições reais de uso.
8. **Transição planejada:** o Fechamento não é apenas homologação técnica. Inclui treinamento,
   documentação operacional, titularidade das contas, exportação de dados, backup final e
   definição clara de responsabilidade pela manutenção após o semestre.
