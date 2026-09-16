# 4. Estratégias de Engenharia de Software

A partir das informações apresentadas nas seções 1 e 2 deste documento, foram tomadas as decisões a
respeito das estratégias de engenharia de software a serem utilizadas.

## 4.1 Estratégia Priorizada

**Abordagem de Desenvolvimento de Software:** Ágil.

**Ciclo de vida:** Incremental e Iterativo.

**Processo de Engenharia de Software:** ScrumXP.

## 4.2 Quadro Comparativo

O quadro a seguir compara características do OpenUP e do ScrumXP, os dois processos considerados
para o desenvolvimento da solução da Associação Mães Guerreiras. O OpenUP é, ele próprio, uma versão
leve, iterativa e incremental do Processo Unificado, com documentação enxuta e colaboração contínua
com as partes interessadas; a comparação abaixo busca diferenças reais entre os dois processos, e não
tratar o OpenUP como uma variante pesada do RUP tradicional.

| Característica | OpenUP | ScrumXP |
| :--- | :--- | :--- |
| Abordagem geral | Iterativa e incremental, organizada em quatro fases (Iniciação, Elaboração, Construção, Transição), cada uma com uma ou mais iterações curtas que entregam incrementos testados e integrados. | Iterativa e incremental, organizada em ciclos curtos (sprints) de duração fixa, sem fases formais predefinidas, com entregas funcionais a cada sprint. |
| Estrutura do processo | Papéis, artefatos e marcos definidos, mas propositalmente enxutos e escaláveis para equipes pequenas. | Papéis, eventos e artefatos do Scrum somados às práticas técnicas do XP (programação em pares, integração contínua, testes automatizados, refatoração), com poucos artefatos obrigatórios. |
| Documentação | Documentação mínima e focada no essencial, adaptável ao tamanho do projeto. | Documentação mínima, com foco em comunicação direta e no funcionamento do produto. |
| Colaboração com o cliente | Colaboração contínua com stakeholders ao longo de cada iteração, com validação recorrente, não apenas no início e no fim das fases. | Feedback do cliente a cada sprint, favorecendo ajustes rápidos de prioridade. |
| Práticas técnicas | Recomenda boas práticas de engenharia, mas não prescreve um conjunto fixo de práticas técnicas. | Incorpora explicitamente práticas do XP (pares, TDD/testes automatizados, integração contínua, design simples, propriedade coletiva do código) como parte do processo. |
| Indicado para | Equipes pequenas a médias que querem uma estrutura mínima de fases e marcos para orientar o planejamento, mantendo a agilidade. | Equipes pequenas, prazos curtos e cenários em que o aprendizado técnico e o feedback do cliente acontecem durante o próprio desenvolvimento. |

## 4.3 Justificativa

Com base nas características do projeto e nos desafios enfrentados pela Associação Mães Guerreiras, o
ScrumXP é o processo mais adequado pelos seguintes motivos:

1. **Validação frequente com usuários reais:** um dos principais riscos do projeto é o de adoção: se a
   ferramenta não for mais simples que o caderno, ela não será usada. O ScrumXP coloca o cliente ao
   final de cada sprint, permitindo que as coordenadoras testem cada funcionalidade e que a equipe
   corrija o rumo em poucas semanas, e não no fim do semestre. Isso não significa que o projeto não
   tenha riscos técnicos relevantes: segurança dos dados pessoais das famílias, a curva de
   aprendizado da equipe nas tecnologias escolhidas e a continuidade da plataforma após o fim do
   semestre também são riscos centrais, tratados na seção [2.6](../02-solucao/index.md#26-viabilidade-da-proposta).
2. **Flexibilidade e entregas rápidas:** com uma equipe de 6 integrantes, o ScrumXP permite entregas
   incrementais a cada sprint de 2 semanas, com ajustes rápidos de prioridade.
3. **Adaptação ao nível de conhecimento da equipe:** como parte da equipe ainda está aprendendo
   Nuxt.js e Supabase (seção [2.4](../02-solucao/index.md#24-tecnologias-a-serem-utilizadas)), as
   práticas técnicas do XP favorecem um aprendizado mais seguro: integração contínua e testes
   automatizados reduzem o risco de regressões enquanto a equipe ainda está se familiarizando com a
   stack, e a programação em pares permite que quem já tem mais domínio de uma tecnologia apoie
   diretamente quem está aprendendo.
4. **Simplicidade de documentação:** como o projeto é conduzido em regime pro bono e sem
   orçamento (seção [1.5](../01-cenario/index.md#15-desafios-do-projeto)), o ScrumXP minimiza a
   documentação formal exigida, mantendo o foco da equipe na comunicação e nas entregas
   funcionais, mais compatível com o tempo disponível de uma equipe estudantil e de uma
   coordenação voluntária.

## 4.4 Práticas de XP Adotadas

Para que o processo seja de fato ScrumXP, e não apenas Scrum, a equipe adota as seguintes práticas
técnicas do eXtreme Programming ao longo das sprints:

- **Integração contínua:** toda alteração enviada ao repositório passa por build e checagens
  automatizadas antes de ser integrada à branch principal.
- **Testes automatizados:** funcionalidades críticas (registro de doações, chamada, controle de acesso)
  recebem testes automatizados, priorizados pela Analista de QA junto ao critério de aceitação de
  cada história.
- **Design simples:** cada história é implementada da forma mais simples que atenda ao critério de
  aceitação, evitando abstrações antecipadas para necessidades futuras não confirmadas.
- **Refatoração contínua:** o código é reorganizado sempre que necessário para manter a simplicidade,
  sem alterar o comportamento observável, com apoio dos testes automatizados.
- **Programação em pares, quando possível:** priorizada nas tarefas de maior risco técnico ou nas que
  envolvem alguém ainda aprendendo a tecnologia, dada a disponibilidade parcial de uma equipe
  estudantil.
- **Propriedade coletiva do código:** qualquer integrante pode alterar qualquer parte do sistema
  quando necessário, em vez de módulos isolados por pessoa.
