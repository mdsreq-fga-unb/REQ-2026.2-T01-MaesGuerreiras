# 5. Engenharia de Requisitos

A partir das informações apresentadas nas seções anteriores, foram estabelecidas as atividades da
Engenharia de Requisitos (ER), suas práticas e técnicas, em alinhamento ao processo ScrumXP definido
na seção [4](../04-estrategias/index.md). Como a operação da associação é predominantemente manual
e conduzida por voluntárias com pouco tempo disponível, foram priorizadas técnicas de contato direto
(entrevistas e brainstorming) e de análise dos registros já existentes, viáveis dentro da disponibilidade
real da equipe e da coordenação.

Ao longo desta seção, distingue-se **prática** (o objetivo exercido, ex.: priorizar requisitos), **técnica**
(o método concreto usado para isso, ex.: MoSCoW) e **artefato/resultado** (o produto gerado pela
técnica, ex.: backlog priorizado). O backlog, os épicos, as user stories, os critérios de aceitação e os
wireframes citados abaixo são tratados como artefatos — resultado de uma técnica — e não como
técnicas em si.

## 5.1 Atividades e Técnicas da ER e ScrumXP

### Planejamento da Release

**Elicitação e Descoberta:**

- **Entrevistas:** entrevistas com Daiane e com as demais coordenadoras (Maria Guerra, Luzia, Liz e
  Cleide) para entender como funcionam hoje o registro das doações de itens em caderno, o cadastro das
  famílias e a chamada em papel.
- **Análise Documental:** analisar os cadernos de doações, o cadastro existente no computador da
  sede e as listas de chamada em papel ajuda a identificar quais dados já são coletados e em que
  formato, a partir de cópias ou fotografias dos registros compartilhadas por Daiane ou Makio.
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
  Sacola Verde, senha, rodízio e Domingo Recreativo. Os temas, épicos e histórias resultantes são, ao
  mesmo tempo, a declaração do requisito e a estrutura usada para organizar o backlog.

### Planejamento da Sprint

**Elicitação e Descoberta:**

- **Entrevistas:** conversas pontuais com a coordenadora responsável pela frente tratada na sprint,
  para detalhar regras como a das cinco faltas sem justificativa e o rodízio mensal do Domingo
  Recreativo.
- **Análise de Tarefas:** analisar as etapas realizadas pelas coordenadoras para registrar uma doação de itens, realizar a chamada ou organizar o atendimento, identificando dificuldades, decisões e oportunidades de simplificação.
- **Análise Documental:** revisar os registros existentes daquela frente (caderno de doações, lista de
  chamada) para detalhar campos e formatos antes de implementar.

**Análise e Consenso:**

- **Spike Técnico:** investigação técnica curta e prática, conduzida pela dupla envolvida na história,
  para resolver dependências técnicas antes da sprint começar, como o controle de perfis de acesso
  das coordenadoras e o armazenamento seguro dos dados das famílias.

**Declaração:**

- **Especificação de Critérios de Aceitação (Given-When-Then):** definir critérios objetivos para cada
  user story, incluindo o tempo máximo aceitável para registrar uma doação, requisito crítico, já que a
  falta de tempo é a principal causa dos registros perdidos hoje. Os critérios de aceitação são o
  artefato produzido por essa técnica.

**Organização e Atualização:**

- **Refinamento do Backlog (Backlog Grooming):** refinar o backlog com a equipe e com Daiane, ajustando
  prioridades conforme as necessidades que surgem no dia a dia da associação. O backlog atualizado é
  o artefato gerido por essa técnica.

### Execução da Sprint

**Representação:**

- **Prototipação de Baixa Fidelidade (Wireframing):** criar protótipos das telas do painel administrativo
  e do portal e validá-los com as coordenadoras antes de programar, já que a simplicidade da interface
  é condição para que a ferramenta substitua o caderno. Os wireframes são o artefato produzido por
  essa técnica.

**Verificação e Validação:**

- **Checklist, Revisão de Critérios de Aceitação e Critério INVEST:** verificar se os requisitos estão
  claros, consistentes, completos e testáveis, utilizando checklists, critérios de aceitação e o modelo
  INVEST (Independente, Negociável, Valiosa, Estimável, Pequena, Testável) como critério de qualidade
  das histórias, com atenção especial à proteção dos dados pessoais e ao desempenho do registro de
  doações de itens.

**Organização e Atualização:**

- **Acompanhamento do Backlog da Sprint:** manter os requisitos atualizados e alinhados aos
  objetivos da sprint, permitindo ajustes rápidos diante de obstáculos técnicos ou de novas demandas
  da coordenação. Realizado por meio de reuniões diárias curtas (daily) entre a equipe, com
  atualização do quadro de tarefas.

### Revisão da Sprint

**Verificação e Validação:**

- **Teste com Usuárias Reais:** apresentar as funcionalidades a Daiane e às demais coordenadoras e
  pedir que elas próprias executem a tarefa (registrar uma doação de itens, fazer uma chamada),
  verificando se conseguem fazê-la sem ajuda.

**Análise e Consenso:**

- **Negociação das Alterações:** analisar o feedback recebido e negociar com a coordenação quais
  mudanças serão incorporadas, adiadas ou retiradas do escopo.

**Organização e Atualização:**

- **Revisão das Histórias, Critérios de Aceitação e Prioridades:** revisar as histórias de usuário, os
  critérios de aceitação e as prioridades a partir do feedback, respeitando o escopo do MVP definido na
  seção [2.6](../02-solucao/index.md#26-viabilidade-da-proposta).

### Retrospectiva da Sprint

**Análise e Consenso:**

- **Análise de Causas e Resolução de Conflitos:** analisar problemas relacionados à compreensão,
  declaração e validação dos requisitos, identificando ambiguidades, conflitos e dificuldades de
  comunicação com a coordenação. Conduzida no formato Start/Stop/Continue, por ser simples de
  aplicar em um grupo pequeno e rápido de repetir a cada sprint.

**Organização e Atualização:**

- **Ações de Melhoria do Processo de Requisitos:** ajustar a forma de registrar, priorizar, rastrear e
  atualizar os requisitos com base nas melhorias identificadas durante a retrospectiva.

### Planejamento da Próxima Release

**Elicitação e Descoberta:**

- **Entrevistas de Acompanhamento e Análise de Domínio de Negócio:** conversas de acompanhamento
  com a coordenação para identificar novas necessidades a partir do uso real da plataforma e de
  frentes que voltarem a funcionar, como a Informática Básica e o Crochê e Bordado.

**Análise e Consenso:**

- **Priorização MoSCoW, Mapeamento de Valor:** priorizar as funcionalidades da próxima release
  considerando o valor para a associação e para seus parceiros institucionais.

**Declaração:**

- **Criação de Épicos e User Stories:** criar épicos e user stories detalhando os novos requisitos
  levantados. A qualidade das histórias criadas é verificada posteriormente pelo critério INVEST,
  já aplicado na atividade de Verificação e Validação da Execução da Sprint.

**Organização e Atualização:**

- **Revisão do Backlog da Release:** revisar os requisitos da release, mantendo suas prioridades,
  fontes, dependências e critérios de aceitação atualizados para o próximo ciclo.

## 5.2 Rastreabilidade dos Requisitos

Para que cada requisito possa ser rastreado desde sua origem estratégica até sua validação, a equipe
adota a seguinte cadeia de rastreabilidade, ligando artefatos já definidos nas demais seções do projeto:

Objetivo Específico (OE) → Característica de Produto (CP) → Requisito Funcional/Não Funcional
(RF/RNF) → Épico → User Story → Critério de Aceitação → Evidência de Validação

- Cada Objetivo Específico (seção [2.2](../02-solucao/index.md#22-objetivos-especificos-oe-do-produto))
  se conecta a uma ou mais Características de Produto (CP1 a CP7, seção
  [2.3](../02-solucao/index.md#23-caracteristicas-de-produto)). A priorização e as dependências determinam
  se o requisito compõe o MVP: CP2 e partes mínimas de CP6 e CP7, com CP1 condicionada à confirmação
  da prioridade pela coordenação, conforme a seção [2.6](../02-solucao/index.md#26-viabilidade-da-proposta).
- Cada característica de produto origina requisitos funcionais e não funcionais, incluindo RNFs
  decorrentes dos efeitos emergentes identificados na seção [3](../03-intervencao-social/index.md), como
  privacidade e proteção de dados pessoais.
- Cada requisito é declarado como parte de um épico e detalhado em uma ou mais user stories, que
  por sua vez possuem critérios de aceitação no formato Given-When-Then.
- Cada critério de aceitação é validado por uma evidência concreta — teste automatizado, teste com
  usuária real ou registro da homologação com Makio ou Daiane.

A tabela a seguir exemplifica essa cadeia com CP1 e CP2, sem representar todo o escopo do MVP, como
ponto de partida da matriz de rastreabilidade a ser mantida pela equipe (planilha ou quadro no board do
projeto) e atualizada a cada sprint:

| OE | CP | RF/RNF (exemplo) | Épico → User Story | Critério de Aceitação | Evidência de Validação |
| :--- | :--- | :--- | :--- | :--- | :--- |
| OE2 | CP2 — Registro de doações de itens | RF: registrar entrada e saída de itens doados (tipo, quantidade, data); RNF: meta preliminar de concluir o registro em até dois minutos, pendente de validação conforme a seção 2.7 | Registro de Doações → "Como coordenadora, quero registrar uma doação digitalmente, para não perder o registro por falta de tempo" | Dada uma doação fictícia e uma coordenadora autorizada, quando ela informa os dados e confirma o registro, então os dados ficam disponíveis para consulta; medir o tempo total da tarefa para avaliar a meta preliminar da seção 2.7 | Teste com Cleide, Luzia ou Liz usando dados fictícios, sem apoio da equipe, com registro do tempo da tarefa |
| OE1 | CP1 — Portal institucional e agenda de atividades | RF: exibir a agenda com a situação de cada atividade (ativa, suspensa ou dependente de doação) | Portal Institucional → "Como visitante, quero ver quais atividades estão ativas, para saber como participar ou ajudar" | Dado que uma atividade está suspensa, quando o visitante acessa a agenda, então essa situação aparece de forma clara | Homologação com Makio antes da publicação da página |

As demais características seguem o mesmo modelo de rastreabilidade. As partes mínimas de CP6 e CP7
necessárias ao MVP devem ser detalhadas no backlog junto à CP2; as demais capacidades serão
priorizadas nas releases seguintes.

## 5.3 Engenharia de Requisitos e o ScrumXP

O quadro a seguir apresenta o mapeamento das atividades, práticas e técnicas da ER aos momentos do
processo ScrumXP definido para a condução do projeto.

| Momentos do ScrumXP | Atividades da ER | Prática | Técnica | Resultados Esperados |
| :--- | :--- | :--- | :--- | :--- |
| Planejamento da Release | Elicitação e Descoberta | Levantamento de Requisitos | Entrevistas, Análise Documental, Brainstorming | Rotinas manuais da associação compreendidas e requisitos de alto nível identificados. |
| Planejamento da Release | Análise e Consenso | Priorização de Requisitos | Priorização MoSCoW, Análise de Custo/Benefício | Escopo do MVP priorizado e acordado com a coordenação: CP2, controle de acesso mínimo (parte da CP7) e consulta/exportação (parte da CP6); CP1 condicionada à confirmação de sua prioridade. |
| Planejamento da Release | Declaração | Especificação dos Requisitos | Temas, Épicos e User Stories | Temas, épicos e histórias registrados com o vocabulário usado pela associação, servindo também como estrutura de organização do backlog. |
| Planejamento da Sprint | Elicitação e Descoberta | Refinamento de Requisitos | Entrevistas, Análise Documental, Análise de Tarefas | Requisitos refinados a partir das rotinas reais das coordenadoras e preparados para a sprint. |
| Planejamento da Sprint | Análise e Consenso | Análise de Dependências e Viabilidade | Spike Técnico | Consenso sobre dependências, viabilidade técnica e prioridades da sprint. |
| Planejamento da Sprint | Declaração | Definição de Critérios de Aceitação | Especificação Given-When-Then | User stories com critérios de aceitação — o artefato produzido — claros e bem definidos. |
| Planejamento da Sprint | Organização e Atualização | Refinamento dos Requisitos | Backlog Grooming | Backlog refinado com a coordenação antes do início da sprint. |
| Execução da Sprint | Representação | Criação de Protótipos | Prototipação de Baixa Fidelidade (Wireframing) | Wireframes — o artefato produzido — validados com usuárias de baixa familiaridade digital. |
| Execução da Sprint | Verificação e Validação | Verificação dos Requisitos | Checklist, Revisão de Critérios de Aceitação, Critério INVEST | Requisitos e histórias verificados quanto à clareza, consistência, completude e testabilidade. |
| Execução da Sprint | Organização e Atualização | Acompanhamento do Backlog | Reuniões Diárias (Daily) | Backlog atualizado e alinhado com os objetivos da sprint em andamento. |
| Revisão da Sprint | Verificação e Validação | Validação com a Coordenação | Coleta de Feedback, Teste com Usuárias Reais | Requisitos e funcionalidades validados pelas coordenadoras em situações reais de uso, com feedback coletado. |
| Revisão da Sprint | Análise e Consenso | Negociação das Alterações | Análise do Feedback, Negociação | Alterações analisadas e classificadas como incorporadas, adiadas ou retiradas do escopo. |
| Revisão da Sprint | Organização e Atualização | Atualização dos Requisitos | Revisão das Histórias de Usuário, Critérios de Aceitação e Prioridades | Requisitos e backlog atualizados conforme o feedback, respeitando o escopo do [MVP](../02-solucao/index.md#26-viabilidade-da-proposta). |
| Retrospectiva da Sprint | Análise e Consenso | Análise de Problemas da ER | Retrospectiva Start/Stop/Continue | Problemas relacionados aos requisitos e à comunicação identificados e analisados. |
| Retrospectiva da Sprint | Organização e Atualização | Atualização da Organização dos Requisitos | Ações de Melhoria Contínua | Melhorias incorporadas à organização e atualização dos requisitos. |
| Planejamento da Próxima Release | Elicitação e Descoberta | Identificação de Novos Requisitos | Entrevistas de Acompanhamento, Análise de Domínio de Negócio | Novos requisitos identificados e requisitos existentes revisados a partir do uso real da plataforma. |
| Planejamento da Próxima Release | Análise e Consenso | Priorização Estratégica | Priorização MoSCoW, Mapeamento de Valor | Requisitos priorizados para atender às necessidades da próxima release. |
| Planejamento da Próxima Release | Declaração | Definição de Épicos e User Stories | Criação de Épicos e User Stories | User stories claramente definidas e vinculadas aos objetivos da próxima release. |
| Planejamento da Próxima Release | Organização e Atualização | Revisão do Backlog | Revisão e Reordenação do Backlog | Backlog da release atualizado e preparado para o próximo ciclo. |

## 5.4 Integração da ER com as Práticas de XP

Além dos eventos do Scrum mapeados acima, a ER se conecta às seis práticas de XP já adotadas pela
equipe (seção [4.4](../04-estrategias/index.md#44-praticas-de-xp-adotadas)):

- **Testes automatizados:** os critérios de aceitação definidos na Declaração da Sprint alimentam a
  escrita dos testes automatizados das funcionalidades críticas.
- **Integração contínua:** o pipeline de CI verifica os critérios de aceitação (RF) e os requisitos não
  funcionais críticos antes de qualquer entrega ser considerada concluída.
- **Design simples:** cada história é implementada da forma mais simples que atenda ao seu critério de
  aceitação, sem antecipar requisitos especulativos.
- **Refatoração contínua:** mudanças de requisito identificadas na Revisão ou Retrospectiva da Sprint
  podem disparar refatorações no código já existente.
- **Programação em pares:** as user stories e seus critérios de aceitação orientam a dupla durante a
  implementação, especialmente nas tarefas de maior risco técnico.
- **Propriedade coletiva do código:** a rastreabilidade descrita na seção [5.2](#52-rastreabilidade-dos-requisitos)
  permite que qualquer integrante entenda o requisito por trás de um trecho de código que não
  escreveu.
