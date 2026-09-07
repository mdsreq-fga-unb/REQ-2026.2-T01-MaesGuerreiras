# 5. Engenharia de Requisitos

A partir das informações apresentadas nas seções anteriores, foram estabelecidas as atividades da
Engenharia de Requisitos (ER), suas práticas e técnicas, em alinhamento ao processo ScrumXP definido
na seção [4](../04-estrategias/index.md). Como a operação da associação é predominantemente manual
e conduzida por voluntárias com pouco tempo disponível, foram priorizadas técnicas de contato direto e
observação, e não apenas de documentação.

## 5.1 Atividades e Técnicas da ER e ScrumXP

### Planejamento da Release

**Elicitação e Descoberta:**

- **Entrevistas:** entrevistas com Daiane e com as demais coordenadoras (Maria Guerra, Luzia, Liz e
  Cleide) para entender como funcionam hoje o registro das doações de itens em caderno, o cadastro das
  famílias e a chamada em papel.
- **Observação in loco:** se possível, acompanhar uma entrega da Sacola Verde e uma chamada do Reforço Escolar
  na sede permite ver como o atendimento por senha e o registro de presença acontecem na prática,
  revelando necessidades que não aparecem em entrevista.
- **Análise Documental:** se possível, analisar os cadernos de doações, o cadastro existente no computador da
  sede e as listas de chamada em papel ajuda a identificar quais dados já são coletados e em que
  formato.
- **Brainstorming:** sessões com a equipe e a coordenação para levantar ideias sobre o portal
  institucional, o registro de doações de itens e os relatórios desejados pelos parceiros.

**Análise e Consenso:**

- **Priorização MoSCoW:** classificar as funcionalidades em Must have, Should have, Could have e
  Won't have, considerando que o registro das doações de itens e a agenda pública são as dores mais urgentes
  relatadas.
- **Análise de Custo/Benefício:** avaliar o esforço de desenvolvimento e o aprendizado necessário
  frente ao benefício de cada funcionalidade, já que o projeto é pro bono e o prazo é de um semestre.

**Declaração:**

- **Temas, Épicos e User Stories:** organizar os requisitos em temas (portal institucional, doações de itens,
  cadastro e presença, relatórios e acessos), usando os termos que a associação já emprega, como
  Sacola Verde, senha, rodízio e Domingo Recreativo.

### Planejamento da Sprint

**Elicitação e Descoberta:**

- **Entrevistas:** conversas pontuais com a coordenadora responsável pela frente tratada na sprint,
  para detalhar regras como a das cinco faltas sem justificativa e o rodízio mensal do Domingo
  Recreativo.
- **Análise de Tarefas:** analisar as etapas realizadas pelas coordenadoras para registrar uma doação de itens, realizar a chamada ou organizar o atendimento, identificando dificuldades, decisões e oportunidades de simplificação.
- **Análise Documental:** revisar os registros existentes daquela frente (caderno de doações, lista de
  chamada) para detalhar campos e formatos antes de implementar.

**Análise e Consenso:**

- **Discussões em Equipe:** reuniões da equipe para discutir dependências técnicas, como o controle
  de perfis de acesso das coordenadoras e o armazenamento seguro dos dados das famílias.

**Declaração:**

- **Critérios de Aceitação Detalhados:** definir critérios objetivos para cada
  user story, incluindo o tempo máximo aceitável para registrar uma doação de itens, requisito crítico, já que a
  falta de tempo é a principal causa dos registros perdidos hoje.

**Organização e Atualização:**

- **Refinamento e Atualização do Backlog:** refinar o backlog com a equipe e com Daiane, ajustando prioridades
  conforme as necessidades que surgem no dia a dia da associação.

### Execução da Sprint

**Representação:**

- **Protótipos, Wireframes:** criar protótipos das telas do painel administrativo e do portal e validá-los
  com as coordenadoras antes de programar, já que a simplicidade da interface é condição para que a
  ferramenta substitua o caderno.

**Verificação e Validação:**

- **Checklist, Revisão de Critérios de Aceitação:** verificar se os requisitos estão claros, consistentes, completos e testáveis, utilizando checklists e critérios de aceitação, com atenção especial à proteção dos dados pessoais e ao desempenho do registro de doações de itens.

**Organização e Atualização:**

- **Revisão, Priorização e Atualização do Backlog da Sprint:** manter os requisitos atualizados e alinhados aos objetivos da sprint, permitindo ajustes rápidos diante de obstáculos técnicos ou de novas
  demandas da coordenação.

### Revisão da Sprint

**Verificação e Validação:**

- **Coleta de Feedback, Teste com Usuárias Reais:** apresentar as funcionalidades a Daiane e às demais
  coordenadoras e pedir que elas próprias executem a tarefa (registrar uma doação de itens, fazer uma
  chamada), verificando se conseguem fazê-la sem ajuda.

**Análise e Consenso:**

- **Negociação das Alterações:** analisar o feedback recebido e negociar com a coordenação quais mudanças serão incorporadas, adiadas ou retiradas do escopo.

**Organização e Atualização:**

- **Atualização dos Requisitos e do Backlog:** revisar as histórias de usuário, os critérios de aceitação e as prioridades a partir do feedback, respeitando o
  escopo do MVP definido na seção [2.6](../02-solucao/index.md#26-viabilidade-da-proposta).

### Retrospectiva da Sprint

**Análise e Consenso:**

- **Discussões em Grupo, Análise de Causas e Resolução de Conflitos:** analisar problemas relacionados à compreensão, declaração e validação dos requisitos, identificando ambiguidades, conflitos e dificuldades de comunicação com a coordenação.

**Organização e Atualização:**

- **Atualização da Organização dos Requisitos:** ajustar a forma de registrar, priorizar, rastrear e atualizar os requisitos com base nas melhorias identificadas durante a retrospectiva.

### Planejamento da Próxima Release

**Elicitação e Descoberta:**

- **Workshops, Análise de Domínio de Negócio:** workshops com a coordenação para identificar novas
  necessidades a partir do uso real da plataforma e de frentes que voltarem a funcionar, como a
  Informática Básica e o Crochê e Bordado.

**Análise e Consenso:**

- **Priorização MoSCoW, Mapeamento de Valor:** priorizar as funcionalidades da próxima release
  considerando o valor para a associação e para seus parceiros institucionais.

**Declaração:**

- **Criação de Épicos, User Stories, INVEST:** criar épicos e user stories seguindo o modelo INVEST
  (Independente, Negociável, Valiosa, Estimável, Pequena, Testável).

**Organização e Atualização:**

- **Revisão, Priorização e Atualização do Backlog da Release:** revisar os requisitos da release, mantendo suas prioridades, fontes, dependências e critérios de aceitação atualizados para o próximo ciclo.

## 5.2 Engenharia de Requisitos e o ScrumXP

O quadro a seguir apresenta o mapeamento das atividades, práticas e técnicas da ER aos momentos do
processo ScrumXP definido para a condução do projeto.

| Momentos do ScrumXP | Atividades da ER | Prática | Técnica | Resultados Esperados |
| :--- | :--- | :--- | :--- | :--- |
| Planejamento da Release | Elicitação e Descoberta | Levantamento de Requisitos | Entrevistas, Observação in loco, Análise Documental, Brainstorming | Rotinas manuais da associação compreendidas e requisitos de alto nível identificados. |
| Planejamento da Release | Análise e Consenso | Priorização de Requisitos | Priorização MoSCoW, Análise de Custo/Benefício | Escopo do MVP (CP1 e CP2) priorizado e acordado com a coordenação. |
| Planejamento da Release | Declaração | Registro dos Requisitos | Temas, Épicos e User Stories | User stories registradas com o vocabulário usado pela associação. |
| Planejamento da Sprint | Elicitação e Descoberta | Refinamento de Requisitos | Entrevistas, Análise Documental, Análise de Tarefas | Requisitos refinados a partir das rotinas reais das coordenadoras e preparados para a sprint. |
| Planejamento da Sprint | Análise e Consenso | Análise de Dependências e Viabilidade | Discussões em Equipe | Consenso sobre dependências, viabilidade técnica e prioridades da sprint. |
| Planejamento da Sprint | Declaração | Definição de Critérios de Aceitação | Critérios de Aceitação Detalhados | User stories com critérios de aceitação claros e bem definidos. |
| Planejamento da Sprint | Organização e Atualização | Refinamento dos Requisitos | Refinamento e atualização do Backlog | Backlog refinado com a coordenação antes do início da sprint. |
| Execução da Sprint | Representação | Criação de Protótipos | Protótipos, Wireframes | Protótipos validados com usuárias de baixa familiaridade digital. |
| Execução da Sprint | Verificação e Validação | Verificação dos Requisitos | Checklist, Revisão de Critérios de Aceitação | Requisitos verificados quanto à clareza, consistência, completude e testabilidade. |
| Execução da Sprint | Organização e Atualização | Revisão do Backlog | Revisão, priorização e atualização do backlog | Backlog atualizado e alinhado com os objetivos da sprint em andamento. |
| Revisão da Sprint | Verificação e Validação | Validação com a Coordenação | Coleta de Feedback, Teste com Usuárias Reais | Requisitos e funcionalidades validados pelas coordenadoras em situações reais de uso, com feedback coletado. |
| Revisão da Sprint | Análise e Consenso | Negociação das Alterações | Análise do Feedback, Negociação | Alterações analisadas e classificadas como incorporadas, adiadas ou retiradas do escopo. |
| Revisão da Sprint | Organização e Atualização | Atualização dos Requisitos | Revisão das Histórias de Usuário, Critérios de Aceitação e Prioridades | Requisitos e backlog atualizados conforme o feedback, respeitando o escopo do [MVP](../02-solucao/index.md#26-viabilidade-da-proposta). |
| Retrospectiva da Sprint | Análise e Consenso | Análise de Problemas da ER | Discussões em Grupo, Análise de Causas e Resolução de Conflitos | Problemas relacionados aos requisitos e à comunicação identificados e analisados. |
| Retrospectiva da Sprint | Organização e Atualização | Atualização da Organização dos Requisitos | Revisão da forma de registrar, priorizar e rastrear requisitos | Melhorias incorporadas à organização e atualização dos requisitos. |
| Planejamento da Próxima Release | Elicitação e Descoberta | Identificação de Novos Requisitos | Workshops, Análise de Domínio de Negócio | Novos requisitos identificados e requisitos existentes revisados a partir do uso real da plataforma. |
| Planejamento da Próxima Release | Análise e Consenso | Priorização Estratégica | Priorização MoSCoW, Mapeamento de Valor | Requisitos priorizados para atender às necessidades da próxima release. |
| Planejamento da Próxima Release | Declaração | Definição de Épicos e User Stories | Criação de Épicos, User Stories, INVEST | User stories claramente definidas e vinculadas aos objetivos da próxima release. |
| Planejamento da Próxima Release | Organização e Atualização | Revisão do Backlog | Revisão, priorização e atualização do backlog | Backlog da release atualizado e preparado para o próximo ciclo. |
