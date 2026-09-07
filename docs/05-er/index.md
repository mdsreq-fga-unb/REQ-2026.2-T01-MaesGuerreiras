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
  Cleide) para entender como funcionam hoje o registro das doações em caderno, o cadastro das
  famílias e a chamada em papel.
- **Observação in loco:** acompanhar uma entrega da Sacola Verde e uma chamada do Reforço Escolar
  na sede permite ver como o atendimento por senha e o registro de presença acontecem na prática,
  revelando necessidades que não aparecem em entrevista.
- **Análise Documental:** analisar os cadernos de doações, o cadastro existente no computador da
  sede e as listas de chamada em papel ajuda a identificar quais dados já são coletados e em que
  formato.
- **Brainstorming:** sessões com a equipe e a coordenação para levantar ideias sobre o portal
  institucional, o registro de doações e os relatórios desejados pelos parceiros.

**Análise e Consenso:**

- **Priorização MoSCoW:** classificar as funcionalidades em Must have, Should have, Could have e
  Won't have, considerando que o registro das doações e a agenda pública são as dores mais urgentes
  relatadas.
- **Análise de Custo/Benefício:** avaliar o esforço de desenvolvimento e o aprendizado necessário
  frente ao benefício de cada funcionalidade, já que o projeto é pro bono e o prazo é de um semestre.

**Declaração:**

- **Temas, Épicos e User Stories:** organizar os requisitos em temas (portal institucional, doações,
  cadastro e presença, relatórios e acessos), usando os termos que a associação já emprega, como
  Sacola Verde, senha, rodízio e Domingo Recreativo.

### Planejamento da Sprint

**Elicitação e Descoberta:**

- **Entrevistas:** conversas pontuais com a coordenadora responsável pela frente tratada na sprint,
  para detalhar regras como a dos cinco faltas sem justificativa e o rodízio mensal do Domingo
  Recreativo.
- **Análise Documental:** revisar os registros existentes daquela frente (caderno de doações, lista de
  chamada) para detalhar campos e formatos antes de implementar.

**Análise e Consenso:**

- **Discussões em Equipe:** reuniões da equipe para discutir dependências técnicas, como o controle
  de perfis de acesso das coordenadoras e o armazenamento seguro dos dados das famílias.
- **Análise de Tarefas:** detalhar as atividades de cada integrante, garantindo que as dependências
  sejam compreendidas e o trabalho distribuído de forma equilibrada.

**Declaração:**

- **Critérios de Aceitação Detalhados, Definition of Ready (DoR):** definir critérios objetivos para cada
  user story, incluindo o tempo máximo aceitável para registrar uma doação, requisito crítico, já que a
  falta de tempo é a principal causa dos registros perdidos hoje.

**Organização e Atualização:**

- **Grooming do Backlog:** refinar o backlog com a equipe e com Daiane, ajustando prioridades
  conforme as necessidades que surgem no dia a dia da associação.

### Execução da Sprint

**Representação:**

- **Protótipos, Wireframes:** criar protótipos das telas do painel administrativo e do portal e validá-los
  com as coordenadoras antes de programar, já que a simplicidade da interface é condição para que a
  ferramenta substitua o caderno.

**Verificação e Validação:**

- **Checklist, Revisão de Critérios de Aceitação:** revisar checklists e critérios de aceitação de cada
  funcionalidade, com atenção especial à proteção dos dados pessoais das famílias e à correção dos
  relatórios gerados.

**Organização e Atualização:**

- **Revisão do Backlog da Sprint, DEEP:** manter o backlog da sprint DEEP (Detalhado, Emergente,
  Estimável, Priorizado), permitindo ajustes rápidos diante de obstáculos técnicos ou de novas
  demandas da coordenação.

### Revisão da Sprint

**Verificação e Validação:**

- **Coleta de Feedback, Teste com Usuário Real:** apresentar as funcionalidades a Daiane e às demais
  coordenadoras e pedir que elas próprias executem a tarefa (registrar uma doação, fazer uma
  chamada), verificando se conseguem fazê-la sem ajuda.

**Declaração:**

- **Incorporar Feedback, Negociação:** ajustar as user stories a partir do feedback, respeitando o
  escopo do MVP definido na seção [2.6](../02-solucao/index.md#26-viabilidade-da-proposta) e
  negociando o que entra nas próximas sprints.

### Retrospectiva da Sprint

**Análise e Organização:**

- **Discussões em Grupo, Análise de Causas:** discutir o que funcionou e o que travou no ciclo,
  incluindo as dificuldades de aprendizado das tecnologias escolhidas e a disponibilidade das
  voluntárias para validar as entregas.

**Atualização do Processo:**

- **Atualização do Workflow, Resolução de Conflito:** ajustar o fluxo de trabalho da equipe conforme a
  realidade do projeto, inclusive a forma e o momento de buscar validação com a coordenação, que
  atua de forma voluntária.

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

- **Revisão do Backlog da Release, DEEP:** revisar o backlog da release aplicando o conceito DEEP,
  garantindo requisitos preparados e priorizados para o próximo ciclo.

## 5.2 Engenharia de Requisitos e o ScrumXP

O quadro a seguir apresenta o mapeamento das atividades, práticas e técnicas da ER às fases do
processo ScrumXP definido para a condução do projeto.

| Fases do ScrumXP | Atividades da ER | Prática | Técnica | Resultados Esperados |
| :--- | :--- | :--- | :--- | :--- |
| Planejamento da Release | Elicitação e Descoberta | Levantamento de Requisitos | Entrevistas, Observação in loco, Análise Documental, Brainstorming | Rotinas manuais da associação compreendidas e requisitos de alto nível identificados. |
| Planejamento da Release | Análise e Consenso | Priorização de Requisitos | Priorização MoSCoW, Análise de Custo/Benefício | Escopo do MVP (CP1 e CP2) priorizado e acordado com a coordenação. |
| Planejamento da Release | Declaração | Registro dos Requisitos | Temas, Épicos e User Stories | User stories registradas com o vocabulário usado pela associação. |
| Planejamento da Sprint | Elicitação e Descoberta | Refinamento de Requisitos | Entrevistas, Análise Documental | Requisitos refinados e específicos para o desenvolvimento da sprint. |
| Planejamento da Sprint | Análise e Consenso | Análise de Dependências | Discussões em Equipe, Análise de Tarefas | Consenso sobre viabilidade técnica e priorização das tarefas. |
| Planejamento da Sprint | Declaração | Definição de Critérios de Aceitação | Critérios de Aceitação Detalhados, Definition of Ready (DoR) | User stories com critérios de aceitação claros e bem definidos. |
| Planejamento da Sprint | Organização e Atualização | Refinamento dos Requisitos | Grooming do Backlog | Backlog refinado com a coordenação antes do início da sprint. |
| Execução da Sprint | Representação | Criação de Protótipos | Protótipos, Wireframes | Protótipos validados com usuárias de baixa familiaridade digital. |
| Execução da Sprint | Verificação e Validação | Validação de Requisitos | Checklist, Revisão de Critérios de Aceitação | Validação de que os requisitos atendem aos critérios de aceitação. |
| Execução da Sprint | Organização e Atualização | Revisão do Backlog | Revisão do Backlog da Sprint, DEEP | Backlog atualizado e alinhado com os objetivos da sprint em andamento. |
| Revisão da Sprint | Verificação e Validação | Demonstração ao Cliente | Coleta de Feedback, Teste com Usuário Real | Funcionalidades verificadas com a coordenação e feedback coletado. |
| Revisão da Sprint | Declaração | Atualização de User Stories | Incorporar Feedback, Negociação | User stories ajustadas conforme o feedback recebido durante a revisão. |
| Retrospectiva da Sprint | Análise e Organização | Revisão do Processo | Discussões em Grupo, Análise de Causas | Melhorias identificadas e aplicáveis ao processo de engenharia de requisitos. |
| Retrospectiva da Sprint | Atualização do Processo | Ajustes no Workflow de Requisitos | Atualização do Workflow, Resolução de Conflito | Ajustes implementados para melhorar a qualidade do processo de ER. |
| Planejamento da Próxima Release | Elicitação e Descoberta | Identificação de Novos Requisitos | Workshops, Análise de Domínio de Negócio | Requisitos revisados e atualizados com base no uso real da plataforma. |
| Planejamento da Próxima Release | Análise e Consenso | Priorização Estratégica | Priorização MoSCoW, Mapeamento de Valor | Requisitos priorizados para atender às necessidades da próxima release. |
| Planejamento da Próxima Release | Declaração | Definição de Épicos e User Stories | Criação de Épicos, User Stories, INVEST | User stories claramente definidas e vinculadas aos objetivos da próxima release. |
| Planejamento da Próxima Release | Organização e Atualização | Revisão do Backlog | Revisão do Backlog da Release, DEEP | Backlog da release atualizado e preparado para a próxima fase. |
