# 6. Cronograma e Entregas

O cronograma parte do processo ScrumXP definido na seção [4](../04-estrategias/index.md), das
atividades de Engenharia de Requisitos descritas na seção [5](../05-er/index.md) e do escopo e das
dependências do produto estabelecidos na seção [2.3](../02-solucao/index.md#23-características-de-produto).
O calendário da disciplina de Requisitos de Software (Unidades 1 a 4, de 11/08/2026 a 10/12/2026)
é tratado como restrição externa: os marcos acadêmicos estão indicados na última coluna apenas
para referência, não como origem das entregas do produto.

A cadência adotada é de **sprints de 2 semanas**, totalizando 7 sprints de desenvolvimento mais
um período de fechamento. A segurança do produto (CP7 — perfis de acesso e proteção de dados)
é entregue como **condição transversal**: entra antes de qualquer sprint que manipule dados
pessoais de famílias (CP2, CP3). Os primeiros testes de funcionalidades administrativas utilizam
dados sintéticos ou anonimizados até que CP7 esteja verificado e o ambiente esteja protegido.

| Sprint | Período | Objetivo Principal | Entregas do Produto | Artefatos de ER | Validação do Cliente / Marco da Disciplina |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Sprint 1 | 11/08 a 24/08 | Levantamento inicial do cliente e do negócio | Primeiro contato com Makio; levantamento inicial da associação; proposta de projeto v0.1. | Roteiro de entrevistas; registro das entrevistas com Daiane e Makio; primeiras histórias de usuário de alto nível; análise documental dos cadernos e registros existentes. | Validação do escopo inicial com Makio. |
| Sprint 2 | 25/08 a 07/09 | Aprofundamento do levantamento e Visão do Produto e Projeto | **Entrega Parcial 1 (este documento):** questionário aplicado à coordenadora Daiane; refinamento do cenário, da solução e das demais seções da Visão do Produto e Projeto (v0.3); site do projeto (GitHub Pages) estruturado. | Backlog inicial (épicos e user stories); priorização MoSCoW acordada com a coordenação; rastreabilidade preliminar OE → CP → US; critérios de aceitação de alto nível para CP1 e CP7. | Revisão do documento com Makio e Daiane. ¹ |
| Sprint 3 | 08/09 a 21/09 | Planejamento técnico, ambiente e backlog detalhado | Ambiente de desenvolvimento configurado (Nuxt.js, Supabase); backlog detalhado de CP1 e CP7; primeiros protótipos das telas do portal e do painel de acesso. | Histórias de usuário de CP1 e CP7 com critérios de aceitação detalhados (modelo INVEST); protótipos de baixa fidelidade validados com a coordenação; decisões da revisão registradas; rastreabilidade atualizada. | Revisão do backlog e dos protótipos com a coordenação. ¹ |
| Sprint 4 | 22/09 a 05/10 | Portal institucional e agenda de atividades (CP1) | **Entrega Parcial 2:** portal com história da associação, parceiros, agenda das atividades com dias, horários e situação atual, e formas de doar. Sem dados pessoais de famílias. | Histórias de usuário de CP1 verificadas (checklist de critérios de aceitação); evidências de testes; registro das decisões da revisão de sprint; backlog e rastreabilidade atualizados. | Validação do conteúdo institucional e da agenda com a coordenação. |
| Sprint 5 | 06/10 a 19/10 | Perfis de acesso e proteção de dados (CP7) — condição para dados pessoais | **Entrega Parcial 3:** autenticação das coordenadoras no painel; perfis de acesso por responsabilidade; proteção do ambiente (HTTPS, RLS no Supabase); backup inicial configurado. **Nenhum dado real de família é inserido até esta entrega ser verificada.** | Histórias de usuário de CP7 com critérios de aceitação de segurança; checklist de verificação de controle de acesso (RLS, autenticação, backup); evidências de testes automatizados; decisões da revisão registradas; rastreabilidade atualizada. ¹ | Conferência dos perfis de acesso com a presidente Makio. ¹ |
| Sprint 6 | 20/10 a 02/11 | Registro de doações de itens (CP2), MVP administrativo | **Entrega Parcial 4 (MVP):** registro digital das doações de itens recebidas e distribuídas, substituindo o caderno. Operação protegida por CP7. Primeiros testes com coordenadoras usam dados sintéticos ou de período anterior; dados reais apenas após autorização institucional confirmada. | Histórias de usuário de CP2 com critérios de aceitação (incluindo tempo máximo de registro); protótipos de CP2 validados antes da implementação; checklist de verificação; evidências de testes; decisões da revisão; rastreabilidade atualizada; práticas XP aplicadas (pair programming, TDD). ¹ | Teste de usabilidade: uma coordenadora registra doações sem ajuda da equipe. ¹ |
| Sprint 7 | 03/11 a 16/11 | Cadastro de famílias, inscrições, chamada digital e controle de frequência (CP3, CP4, CP5) | **Entrega Parcial 5:** cadastro das famílias (dados pessoais agora protegidos por CP7); inscrição nas atividades; organização do atendimento da Sacola Verde por senha; chamada digital com alerta da regra de cinco faltas. | Histórias de usuário de CP3, CP4 e CP5 com critérios de aceitação; protótipos validados; checklist de verificação; evidências de testes automatizados e de integração; decisões da revisão; rastreabilidade atualizada; práticas XP aplicadas. | Validação presencial durante uma entrega da Sacola Verde e conferência da chamada no Reforço Escolar. ¹ |
| Fechamento | 17/11 a 10/12 | Relatórios de impacto (CP6), testes gerais e transição para a associação | **Entrega Parcial 6:** relatórios de doações, famílias atendidas e frequência; testes gerais de integração e usabilidade; ajustes finais e homologação do sistema com a coordenação. **Transição:** treinamento das coordenadoras no sistema; documentação operacional (manual de uso); transferência da titularidade das contas (Supabase, Vercel/Netlify, domínio); exportação e backup final dos dados; definição de responsabilidade pela manutenção após o semestre. | Histórias de usuário de CP6 verificadas; checklist de verificação final; evidências de testes de integração; rastreabilidade final consolidada; registro de decisões de homologação; documentação operacional entregue. | Apresentação dos trabalhos em equipe (24/11 a 26/11 e 01/12 a 03/12). ¹ |

> ¹ Marco da disciplina registrado apenas como referência de prazo externo; não define nem substitui as entregas do produto.

## Considerações importantes

1. **Base do cronograma:** o ponto de partida é o processo ScrumXP, as atividades de ER e o
   escopo do produto. As datas das sprints são compatíveis com o calendário oficial da disciplina
   (Unidades 1 a 4), que pode ser ajustado pelo professor ao longo do semestre.
2. **Cadência única de 2 semanas:** todas as sprints têm duração de 2 semanas. O período de
   Fechamento é mais longo por incluir, além das entregas de produto, toda a transição operacional
   para a associação.
3. **CP7 como condição transversal:** o controle de acesso e a proteção de dados (CP7) são
   entregues antes de qualquer sprint que manipule dados pessoais de famílias. Nenhum dado real
   de pessoa identificável é inserido no sistema antes de CP7 estar verificado, o ambiente estar
   protegido e a autorização institucional confirmada.
4. **Dados sintéticos até CP7 verificado:** testes anteriores à entrega de CP7 utilizam dados
   fictícios ou anonimizados. O primeiro teste com dados reais pode ocorrer a partir da Sprint 6,
   somente após CP7 verificado e backup configurado.
5. **Artefatos de ER em todas as sprints:** cada sprint produz e atualiza histórias de usuário,
   critérios de aceitação, registros de verificação, decisões da revisão e a rastreabilidade do projeto.
6. **Validações ao final de cada sprint:** cada sprint encerra com revisão de sprint junto a Daiane
   e, quando a funcionalidade envolver outra frente, com a coordenadora responsável. As decisões
   resultantes são registradas e refletem no backlog da sprint seguinte.
7. **Validação em uso real:** sempre que possível e seguro (após CP7 verificado), a validação é
   feita durante a própria operação da associação, para verificar se a ferramenta funciona nas
   condições reais de uso.
8. **Transição planejada:** o Fechamento não é apenas homologação técnica. Inclui treinamento,
   documentação operacional, titularidade das contas, exportação de dados, backup final e
   definição clara de responsabilidade pela manutenção após o semestre.
