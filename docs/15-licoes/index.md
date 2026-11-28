# 15. Lições Aprendidas

Esta seção registra, ao final de cada unidade da disciplina, o que a equipe aprendeu com o processo de
Engenharia de Requisitos, com o ScrumXP e com o contato real com a Associação Mães Guerreiras. Cada
bloco abaixo deve ser preenchido pela equipe logo após a Retrospectiva da unidade correspondente
(seção [5.1](../01-visao-produto/index.md#51-atividades-e-tecnicas-da-er-e-scrumxp)).

## Unidade 1

**1. Comunicação e Validação de Requisitos com Stakeholders**

- **Desafio:** A coleta de requisitos dependeu de um questionário assíncrono. As respostas das coordenadoras foram enviadas muito próximo ao prazo de entrega, revelando necessidades que não estavam mapeadas. Isso gerou um grande desalinhamento tardio, forçando a equipe a refatorar quase todo o projeto de última hora para adequar o sistema. 


- **Ação de melhoria:** Para as próximas unidades, a equipe mudará a forma de extrair essas informações. Substituiremos os questionários longos por reuniões síncronas curtas (ciclos rápidos de feedback) para validação direta. Além disso, estabeleceremos um acordo formal de prazos com as coordenadoras, definindo datas-limite claras para a aprovação de protótipos e requisitos, garantindo que qualquer mudança seja absorvida no início do ciclo de desenvolvimento, evitando o retrabalho na véspera da entrega.

- **Resultado (10/11/2026):** as conversas com o cliente passaram a ser reuniões síncronas, gravadas: 25/09, 28/09, 26/10 e 02/11 ([Evidências](../00-evidencias/index.md)). A entrega do MVP foi fixada em 16/11/2026.

**2. Distribuição de Tarefas e Adoção de Metodologia**

- **Desafio:** No início da Unidade 1, a equipe teve dificuldades para distribuir as tarefas de forma equilibrada e eficiente, pois ainda não tínhamos domínio sobre qual metodologia de trabalho utilizar e como aplicá-la na prática. Isso gerou momentos de desorganização e falta de clareza sobre as responsabilidades de cada membro.

- **Ação de melhoria:** Para as próximas unidades, a equipe decidiu adotar formalmente práticas do framework Scrum. Passaremos a organizar nosso trabalho em ciclos fixos (Sprints) e utilizaremos um Product Backlog para listar e priorizar as tarefas. Além disso, definiremos responsáveis claros para cada história de usuário durante as reuniões de planejamento (Sprint Planning), garantindo que todos saibam exatamente o que precisam fazer e evitando sobrecarga ou ociosidade.

- **Resultado (10/11/2026):** a equipe trabalha em sprints de 2 semanas, com o catálogo integrado como backlog e o [quadro do GitHub Projects](https://github.com/orgs/mdsreq-fga-unb/projects/131) com um responsável por issue. Ainda falta registrar o planejamento de cada sprint em ata (seção [7.2](../01-visao-produto/index.md#72-comunicacao)).

**3.Alinhamento de Expectativas e Prevenção do Excesso de Automação**

- **Desafio:** Através do questionário, a stakeholder expressou o desejo de uma automação completa de diversos processos físicos, como a criação de um sistema de senhas para a entrega quinzenal da "sacola verde". A equipe analisou o contexto sociotécnico e concluiu que essa automação era inviável e desnecessária. Ela criaria uma barreira tecnológica para um processo humano esporádico, dificultando a usabilidade, gerando sobrecarga cognitiva para as usuárias e prejudicando a adesão ao produto principal.

- **Ação de melhoria:** A equipe assumiu seu papel de mediadora, focando em orientar o projeto para a geração de valor real, e não apenas para a entrega de funcionalidades solicitadas. Para as próximas etapas, mitigaremos essas divergências aplicando técnicas de priorização colaborativa com o cliente, como o método MoSCoW (para separar o que é essencial do que é apenas desejável) ou a Matriz de Valor de Negócio × Esforço Técnico. Assim, garantimos que os requisitos negociados tragam benefícios concretos sem complicar a rotina do projeto Mães Guerreiras.

- **Resultado (10/11/2026):** MoSCoW e a matriz valor × esforço foram aplicadas com a cliente, requisito por requisito, na planilha de priorização v2 (29/10/2026); a escolha do MVP segue essa matriz ([seção 10](../10-mvp/index.md)).


## Unidade 2

**1. Tratamento do feedback da outra equipe na revisão por pares**

- **Desafio:** A equipe que fez nossa correçāo de requisitos estava em um nível de abstraçāo diferente da nossa, implicando que deveriamos adicionar aos requisitos detalhes que nāo tinham prioridade no momento.

- **Ação de melhoria:** Após o feedback do professor ficou definido que antes das correçōes com outra equipe é necessario entender em que nível de abstraçāo cada uma esta trabalhando, evitando retralhado.

**2. Fronteira entre requisito funcional e regra de negócio**

- **Desafio:** Os RFs foram escritos com regras de negócio misturadas ao texto, como campos obrigatórios, limite de vagas e prazo para corrigir a chamada. O monitor apontou o problema, e a equipe ficou em dúvida sobre até onde um apontamento era RF ou regra (RF19 e RF20 ficaram pendentes na ata de 28/09).

- **Ação de melhoria:** As regras de negócio passam a ficar numa lista própria (RN01, RN02, ...), registrada na seção 8.2 e ligada às fichas dos RFs que as aplicam. O RF descreve só a capacidade (verbo + objeto). Separar as regras também virou item da Definição de Preparado (seção 13).

**3. Priorização com o cliente**

- **Desafio:** Na avaliação de valor de negócio, a maioria dos RFs recebeu nota 4 (Must have), o que dificultou separar o que era de fato essencial. O MVP acabou exigindo uma segunda escolha, e ficaram RFs "Must" fora dele sem uma justificativa registrada.

- **Ação de melhoria:** Nas próximas priorizações, a equipe vai limitar a quantidade de itens "Must" por rodada, ou pedir ao cliente que escolha os N mais importantes de cada característica. A justificativa de cada item que ficar fora do MVP será registrada na ata.


**4. Organização do escopo no site**

- **Desafio:** O mesmo requisito aparecia em várias seções (declaração, matriz de rastreabilidade,
  matriz 4×4, lista do MVP, backlog geral, backlog ordenado, critérios, regras e releases). Para
  entender um requisito era preciso abrir até 13 trechos, e a repetição já gerava divergências,
  como duas composições diferentes do MVP e links para seções que tinham mudado de número. O
  professor usou o nosso site como exemplo em aula (29/10/2026).

- **Ação de melhoria:** Criamos um catálogo integrado com uma ficha por RF, que reúne declaração,
  história de usuário, origem, condições, critérios, prioridade, entrega, situação e evolução. As páginas de
  priorização, MVP e rastreabilidade passaram a explicar o método e a consultar o catálogo. Toda
  mudança agora é feita na ficha e registrada no histórico de evolução.

## Unidade 3

**1. Mudanças que não alcançaram todos os registros afetados**

- **Desafio:** Na avaliação de organização e atualização (03/11/2026), três falhas apareceram. Uma
  nota sobre o RF10 foi copiada para outras 10 fichas numa substituição em lote. Mudanças de 31/10
  (RF10, RF23, RF26, RF30 e RN21) estavam nas fichas, mas não no histórico. E a validação do
  protótipo em 26/10 estava na ata, mas a DoR continuava dizendo que nenhum protótipo tinha sido
  validado. Também não havia registro de a quem cada mudança tinha sido comunicada.

- **Ação de melhoria:** O histórico ganhou a coluna *Comunicado a* e um passo de comunicação
  proporcional ao impacto (14.1). As fichas ganharam o campo *Necessário para*, gerado a partir dos
  *Depende de*, e o script `scripts/catalogo.py` verifica o catálogo antes de cada publicação do
  site. Ao registrar uma decisão de reunião, a equipe confere também a DoR, as fichas e o histórico
  afetados.

**2. Mudanças paralelas sobrescrevendo o site**

- **Desafio:** Um commit feito a partir de uma cópia desatualizada desfez a atualização da
  automação e quebrou o CI (corrigido no PR #72). Um PR com erro de formatação no catálogo foi
  aceito com o CI falhando (PR #55). PRs abertos ao mesmo tempo disputaram o mesmo código de
  mudança (MUD-044).

- **Ação de melhoria:** Antes de editar, a branch parte do main atualizado. O commit lista os
  arquivos um a um, nunca `git add .`. O merge só acontece com o CI verde, e PRs que mexem no
  histórico entram no mesmo dia.

**3. Automação que parecia não funcionar**

- **Desafio:** Issues movidas no GitHub Projects não mudavam a situação dos requisitos no site. A
  automação só reage quando a issue é editada, fechada ou reaberta, e o GitHub mostrava todos os
  integrantes como "contributor", então as issues da equipe não eram reconhecidas.

- **Ação de melhoria:** A regra ficou escrita na seção 13.7, a equipe passou a ser reconhecida pelo
  login (PR #69) e as issues usam a linha `Requisitos:` e as caixas `DoD RFxx`. Um modelo de issue
  com essas linhas prontas evita que elas sejam esquecidas.

**4. Representação desligada dos requisitos**

- **Desafio:** O site apontava para o protótipo da Sprint 6, enquanto as telas da Sprint 7 estavam
  em outra página do Figma. Telas cortadas esconderam um campo pedido nos critérios (as vagas da
  turma, CA-RF20-01). E as regras da chamada estavam espalhadas em quatro fichas e três regras de
  negócio, sem um modelo que as juntasse.

- **Ação de melhoria:** A Visão do Produto ganhou a seção 5.5, sobre as representações usadas; as
  fichas da chamada ganharam o campo *Representações*, com o diagrama de estados da chamada. Cada
  tela do protótipo cita os critérios de aceitação que atende e é conferida contra eles antes da
  validação com o Makio.


## Unidade 4

## Unidade 4 — Retrospectiva da Sprint 6 (10/11/2026)

A retrospectiva foi organizada em **Começar, Parar e Continuar**. O ponto de partida foi a diferença entre a validação funcional feita por Makio em 02/11 e a verificação da Definição de Pronto: embora as oito funcionalidades da Sprint 6 tenham sido validadas em homologação, **0 de 8 RFs estavam concluídos pela DoD naquela data**. A validação com o cliente, portanto, não foi tratada como sinônimo de conclusão.

### Começar

- **Isabella — contratos entre front-end e back-end:** combinar durante o planejamento os contratos das rotas, incluindo o que cada API recebe e devolve, para que as telas possam avançar sem esperar a integração.
- **Ian — preparação antecipada e automação:** abrir as issues das sprints com mais antecedência e incluir desde o início as caixas da DoD para que a automação possa atuar.
- **Luis — aplicar a DoR antes de puxar histórias:** conferir se o protótipo está validado e se as permissões estão confirmadas.
- **Luan — acompanhamento do trabalho:** definir metas diárias ou semanais para evitar acúmulo e aproveitar mais os componentes do Nuxt.
- **Vitor — integração frequente:** fazer commits com frequência.
- **Pedro — integração contínua desde o início:** abrir o PR das telas junto com o back-end, já conectado ao CI e ao `db:test`.

### Parar

- **Isabella:** esperar o back-end ficar pronto para começar a integrar as telas.
- **Ian:** deixar o refinamento das histórias de usuário para a véspera da sprint seguinte.
- **Luis:** tratar “validado pelo Makio” como “pronto”, sem conferir os testes e as evidências exigidos pela DoD.
- **Luan:** deixar sprints abertas e terminar as sprints em cima da hora.
- **Vitor:** acumular mudanças locais sem fazer commit e abrir PR.
- **Pedro:** deixar decisões registradas em issues em aberto e sem responsável.

### Continuar

- **Isabella e Pedro:** validar o protótipo com o cliente antes de programar.
- **Ian:** registrar cada mudança no histórico.
- **Luis:** manter as reuniões com Makio gravadas.
- **Luan:** validar o andamento com Makio e organizar as issues por participante.
- **Vitor:** seguir o protótipo do Figma.

### Relação com os resultados da Sprint 7

| Encaminhamento da retrospectiva | Evidência ou resultado posterior registrado | Leitura |
|---|---|---|
| Não confundir validação do cliente com DoD | Em 15/11, Makio concluiu as tarefas do roteiro da Sprint 7 em celular sem instrução; a ata registra expressamente que isso não substitui a DoD. Em 16/11, 6 dos 12 RFs da Sprint 7 estavam concluídos pela DoD; os demais voltaram para “em andamento” por falta de evidências de RNF03/RNF16. | **Princípio mantido.** A validação e a conclusão pela DoD foram registradas separadamente. |
| Preparar issues e caixas da DoD desde o início; integrar telas com CI e `db:test` | O processo passou a usar linhas `Requisitos:` e caixas `DoD RFxx` nos modelos de issue, conforme a seção 13.7. Os workflows `sistema` associados aos commits `a2fcea6` (16/11) e `7b6b1f9` (24/11) terminaram com sucesso. | **Há evidência de automação e CI por versão.** Isso não demonstra, por si só, que todos os RFs ou RNFs passaram pela DoD. |
| Combinar contratos de API e iniciar a integração sem esperar todo o back-end | A documentação disponível registra PRs e verificações de integração, mas não apresenta um registro explícito dos contratos de rota acordados no planejamento nem uma comparação que prove que as telas passaram a ser integradas em paralelo. | **Sem comprovação suficiente.** Não afirmar que a ação foi concluída. |
| Aplicar a DoR antes de iniciar histórias | A DoR da Sprint 6 passou a considerar o protótipo validado em 26/10; a validação foi registrada na ata e incorporada ao item D4. | **Evidência parcial de aplicação**, especialmente quanto ao protótipo; a retrospectiva também citou a confirmação de permissões. |
| Definir metas diárias/semanais, fazer commits frequentes e atribuir responsáveis | O quadro do GitHub Projects passou a registrar responsável por issue, e os registros de PR/CI mostram integração por commits. Não há, nas evidências consultadas, uma série de metas diárias/semanais que permita avaliar seu cumprimento. | **Responsáveis e integração rastreáveis; metas periódicas sem comprovação específica.** |
| Refinar histórias antes da sprint e encerrar sprints no prazo | O catálogo e o backlog foram organizados, mas as evidências consultadas não permitem concluir que o refinamento ocorreu sempre antes da sprint ou que todas as sprints foram encerradas sem atraso. | **Sem comprovação suficiente.** |
| Continuar prototipação validada, reuniões gravadas e histórico de mudanças | A validação do protótipo ocorreu antes da implementação; as reuniões com Makio e a retrospectiva têm gravações; as mudanças seguem registradas no histórico. Na validação de 15/11, Makio concluiu as tarefas previstas sem orientação e não pediu ajustes naquele encontro. | **Práticas mantidas e documentadas.** |

**Síntese:** a Sprint 7 mostra avanço na separação entre validação com o cliente, integração contínua e verificação da DoD. Também há evidências de issues com critérios automatizáveis, responsáveis e histórico. Entretanto, os registros disponíveis não comprovam todos os combinados — especialmente contratos de API, metas diárias/semanais e refinamento antecipado — e não autorizam declarar que todos os RFs foram concluídos. As referências são a [ata de 02/11](../00-atas/index.md#ata-de-02112026), a [ata de 15/11](../00-atas/index.md#ata-de-15112026), a [Definição de Pronto](../13-dor-dod/index.md) e as [evidências de CI](../00-evidencias/index.md#rastreabilidade-das-verificacoes-automatizadas-por-versao).

