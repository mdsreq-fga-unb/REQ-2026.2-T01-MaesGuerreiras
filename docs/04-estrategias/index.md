# 4. Estratégias de Engenharia de Software

A partir das informações apresentadas nas seções 1 e 2 deste documento, foram tomadas as decisões a
respeito das estratégias de engenharia de software a serem utilizadas.

## 4.1 Estratégia Priorizada

**Abordagem de Desenvolvimento de Software:** Ágil.

**Ciclo de vida:** Incremental e Iterativo.

**Processo de Engenharia de Software:** ScrumXP.

## 4.2 Quadro Comparativo

O quadro a seguir compara características do OpenUP e do ScrumXP, os dois processos considerados
para o desenvolvimento da solução da Associação Mães Guerreiras.

| Característica | OpenUP | ScrumXP |
| :--- | :--- | :--- |
| Abordagem geral | Iterativa e incremental, com forte base em uma arquitetura definida desde o início do projeto. | Iterativa e incremental, organizada em ciclos curtos (sprints) com entregas funcionais frequentes. |
| Estrutura do processo | Dividido em fases formais (Iniciação, Elaboração, Construção, Transição), com papéis e artefatos bem definidos. | Mais leve: backlog priorizado, sprints de duração fixa e poucos artefatos obrigatórios. |
| Documentação | Requer documentação mais formal ao longo das fases, o que demanda mais tempo da equipe. | Documentação mínima, com foco em comunicação direta e no funcionamento do produto. |
| Colaboração com o cliente | Validações concentradas principalmente no início e no fim de cada fase. | Feedback do cliente a cada sprint, favorecendo ajustes rápidos de prioridade. |
| Curva de aprendizado da equipe | Exige mais familiaridade prévia com o processo e com a definição de arquitetura. | Mais acessível para equipes iniciantes, com aprendizado incremental ao longo dos ciclos. |
| Indicado para | Projetos maiores, com equipes experientes e necessidade de arquitetura robusta desde o início. | Equipes pequenas, prazos curtos e cenários em que o aprendizado e o feedback do cliente acontecem durante o próprio desenvolvimento. |

## 4.3 Justificativa

Com base nas características do projeto e nos desafios enfrentados pela Associação Mães Guerreiras, o
ScrumXP é o processo mais adequado pelos seguintes motivos:

1. **Validação frequente com usuários reais:** o principal risco do projeto não é técnico, e sim de
   adoção: se a ferramenta não for mais simples que o caderno, ela não será usada. O ScrumXP coloca
   o cliente ao final de cada sprint, permitindo que as coordenadoras testem cada funcionalidade e
   que a equipe corrija o rumo em uma semana, e não no fim do semestre.
2. **Flexibilidade e entregas rápidas:** com uma equipe de 6 integrantes, o ScrumXP permite entregas
   incrementais a cada sprint de 1 semana, com ajustes rápidos de prioridade.
3. **Adaptação ao nível de conhecimento da equipe:** como parte da equipe ainda está aprendendo
   Nuxt.js e Supabase (seção [2.4](../02-solucao/index.md#24-tecnologias-a-serem-utilizadas)), o
   ScrumXP favorece um processo colaborativo e iterativo, com aprendizado contínuo, diferente de
   uma abordagem mais estruturada e formal como o OpenUP.
4. **Simplicidade de documentação:** como o projeto é conduzido em regime pro bono e sem
   orçamento (seção [1.5](../01-cenario/index.md#15-desafios-do-projeto)), o ScrumXP minimiza a
   documentação formal exigida, mantendo o foco da equipe na comunicação e nas entregas
   funcionais, mais compatível com o tempo disponível de uma equipe estudantil e de uma
   coordenação voluntária.
