# 15. Lições Aprendidas

Esta seção registra, ao final de cada unidade da disciplina, o que a equipe aprendeu com o processo de
Engenharia de Requisitos, com o ScrumXP e com o contato real com a Associação Mães Guerreiras. Cada
bloco abaixo deve ser preenchido pela equipe logo após a Retrospectiva da unidade correspondente
(seção [5.1](../01-visao-produto/index.md#51-atividades-e-tecnicas-da-er-e-scrumxp)).

## Unidade 1

**1. Comunicação e Validação de Requisitos com Stakeholders**

- **Desafio:** A coleta de requisitos dependeu de um questionário assíncrono. As respostas das coordenadoras foram enviadas muito próximo ao prazo de entrega, revelando necessidades que não estavam mapeadas. Isso gerou um grande desalinhamento tardio, forçando a equipe a refatorar quase todo o projeto de última hora para adequar o sistema. 


- **Ação de melhoria:** Para as próximas unidades, a equipe mudará a forma de extrair essas informações. Substituiremos os questionários longos por reuniões síncronas curtas (ciclos rápidos de feedback) para validação direta. Além disso, estabeleceremos um acordo formal de prazos com as coordenadoras, definindo datas-limite claras para a aprovação de protótipos e requisitos, garantindo que qualquer mudança seja absorvida no início do ciclo de desenvolvimento, evitando o retrabalho na véspera da entrega.

**2. Distribuição de Tarefas e Adoção de Metodologia**

- **Desafio:** No início da Unidade 1, a equipe teve dificuldades para distribuir as tarefas de forma equilibrada e eficiente, pois ainda não tínhamos domínio sobre qual metodologia de trabalho utilizar e como aplicá-la na prática. Isso gerou momentos de desorganização e falta de clareza sobre as responsabilidades de cada membro.

- **Ação de melhoria:** Para as próximas unidades, a equipe decidiu adotar formalmente práticas do framework Scrum. Passaremos a organizar nosso trabalho em ciclos fixos (Sprints) e utilizaremos um Product Backlog para listar e priorizar as tarefas. Além disso, definiremos responsáveis claros para cada história de usuário durante as reuniões de planejamento (Sprint Planning), garantindo que todos saibam exatamente o que precisam fazer e evitando sobrecarga ou ociosidade.

**3.Alinhamento de Expectativas e Prevenção do Excesso de Automação**

- **Desafio:** Através do questionário, a stakeholder expressou o desejo de uma automação completa de diversos processos físicos, como a criação de um sistema de senhas para a entrega quinzenal da "sacola verde". A equipe analisou o contexto sociotécnico e concluiu que essa automação era inviável e desnecessária. Ela criaria uma barreira tecnológica para um processo humano esporádico, dificultando a usabilidade, gerando sobrecarga cognitiva para as usuárias e prejudicando a adesão ao produto principal.

- **Ação de melhoria:** A equipe assumiu seu papel de mediadora, focando em orientar o projeto para a geração de valor real, e não apenas para a entrega de funcionalidades solicitadas. Para as próximas etapas, mitigaremos essas divergências aplicando técnicas de priorização colaborativa com o cliente, como o método MoSCoW (para separar o que é essencial do que é apenas desejável) ou a Matriz de Valor de Negócio × Esforço Técnico. Assim, garantimos que os requisitos negociados tragam benefícios concretos sem complicar a rotina do projeto Mães Guerreiras.


## Unidade 2

**1. Tratamento do feedback da outra equipe na revisão por pares**

- **Desafio:** A equipe que fez nossa correçāo de requisitos estava em um nível de abstraçāo diferente da nossa, implicando que deveriamos adicionar aos requisitos detalhes que nāo tinham prioridade no momento.

- **Ação de melhoria:** Após o feedback do professor ficou definido que antes das correçōes com outra equipe é necessario entender em que nível de abstraçāo cada uma esta trabalhando, evitando retralhado.

**2. Fronteira entre requisito funcional e regra de negócio**

- **Desafio:** Os RFs foram escritos com regras de negócio misturadas ao texto, como campos obrigatórios, limite de vagas e prazo para corrigir a chamada. O monitor apontou o problema, e a equipe ficou em dúvida sobre até onde um apontamento era RF ou regra (RF19 e RF20 ficaram pendentes na ata de 28/09).

- **Ação de melhoria:** As regras de negócio passam a ficar numa lista própria (RN01, RN02, ...), registrada na seção 10.2 e ligada às user stories que as aplicam. O RF descreve só a capacidade (verbo + objeto). Separar as regras também virou item da Definição de Preparado (seção 9).

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

**5. Mudanças que não alcançaram todos os registros afetados**

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

### Avaliação de organização e atualização (03/11/2026)

Exercícios propostos na aula (Cap. 12), aplicados ao site:

| Exercício | Achado | Evidência | Situação | Encaminhamento |
| :--- | :--- | :--- | :--- | :--- |
| Consultar uma amostra | A ficha do RF09 reúne origem, condições, critérios, situação e sprint. | [Ficha do RF09](../08-requisitos/index.md#rf09) | Atende | — |
| Percorrer uma relação | O caminho problema → OE2 → CP2 → RF09 → RN02, RNF01 e RNF19 → critérios → DoD se recupera pelos links. | [11.4](../11-rastreabilidade/index.md#114-exemplo-percorrendo-o-rf09) | Atende | — |
| Simular uma mudança | Trocar a unidade de uma categoria (RN02) afeta RF09, RF10, RF11 e RF12; antes, só era possível achar quem dependia do RF12 abrindo as outras fichas. | Campo *Necessário para* das fichas | Atendido nesta correção | Manter o campo com `python scripts/catalogo.py atualizar` |
| Reconstruir uma mudança real | Opção 1 de 31/10 (releases seguindo a matriz): decisão, justificativa e atualização recuperáveis; a comunicação ao cliente e ao professor não estava registrada. | [Histórico 14.2](../14-historico/index.md#142-registro-de-mudancas) | Parcial | Registrar o aviso ao cliente e ao professor na coluna *Comunicado a* |

## Unidade 3


## Unidade 4

