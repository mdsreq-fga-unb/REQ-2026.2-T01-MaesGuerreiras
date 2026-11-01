# Evidências e Gravações

## Apresentação de 08/09/2026

Primeira apresentação do projeto, referente à Unidade 1 da disciplina.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/E2AdUEvNK94" title="Apresentação Mães Guerreiras, 08/09/2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Reunião de análise de feedbacks - 28/09/2026

Reunião da equipe para analisar os feedbacks recebidos sobre os Requisitos Funcionais e Não Funcionais.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/4JEa_iDmdDwc" title="Reunião de análise de feedbacks, 28/09/2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Avaliação do valor de negócio - 25/09/2026

Reunião com Makio para avaliação do valor de negócio dos requisitos, como parte da priorização do
MVP.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/G1tmrxZk-PI" title="Avaliação do valor de negócio, 25/09/2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Validação do MVP - 28/09/2026

Reunião com Makio para validação do escopo do MVP definido pela equipe.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/0LL0tytCAfM" title="Validação do MVP, 28/09/2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Sprint 6 — back-end de acesso, consentimentos e doações (issue #33)

- Migrations:
  - `sistema/supabase/migrations/20261031000000_acesso_consentimentos_doacoes.sql`
  - `sistema/supabase/migrations/20261031100000_integridade_sprint6.sql`
  - `sistema/supabase/migrations/20261031120000_restringir_rpc_de_acesso.sql`
  - `sistema/supabase/migrations/20261031130000_restringir_saida_sintetica.sql`
- Testes automatizados: `sistema/test/acesso.test.ts`, `consentimentos.test.ts`,
  `doacoes.test.ts` (29 testes passaram localmente em 31/10/2026).
- Verificações locais em 31/10/2026: `npm run typecheck`, `npm run lint`, `npm run build`,
  migrations aplicadas ao Supabase local e `supabase db lint --local` sem erros.
- As verificações acima são locais; não comprovam deploy em homologação, execução do CI,
  validação com a coordenação nem teste HTTP/RLS ponta a ponta.
- RNF03 (laboratório): o teste `RNF03 consulta de saldo` calcula 50 categorias com entradas e
  saídas em menos de 3 s no runner do Vitest. A consulta HTTP envia `Server-Timing`.
- RNF03 (3G/4G): protocolo no `sistema/README.md`; medição e resultado em campo continuam
  pendentes na issue de verificação (#35), não são declarados concluídos aqui.
- Pendências da DoR registradas na seção 9.6: confirmação dos perfis pela coordenação,
  protótipos validados, confirmação de comportamentos detalhados e campos de cadastro de usuário.
- Impedimentos/escopo futuro: doação anônima (CA-US08-06) aguarda confirmação; famílias,
  participantes e destinação real (RF10) pertencem à Sprint 7.

## Apresentação da Unidade 2 - 12/10/2026

Gravação da apresentação do projeto referente à Unidade 2 da disciplina.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/yLagJ1zh3Kw" title="Apresentação da Unidade 2, 12/10/2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Priorização de requisitos, versão 2 - outubro de 2026

Planilha em que a cliente avaliou o valor de negócio de cada requisito (RF01 a RF45), com critério e
justificativa, e a equipe avaliou esforço, complexidade e lacuna de capacidade. Substitui a avaliação
por característica de produto e é a base da matriz do [MVP](../10-mvp/index.md#104-matriz-que-leva-a-escolha-do-mvp).

[Abrir a planilha de priorização v2](https://docs.google.com/spreadsheets/d/1k2YFjudQxFV-SecOvGi2Ta5RNQU3BmGNQqUgQscksvA/edit?usp=sharing)
