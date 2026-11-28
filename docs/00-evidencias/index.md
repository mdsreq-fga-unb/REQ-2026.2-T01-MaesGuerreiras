# Evidências e Gravações

## Apresentação de 08/09/2026

Primeira apresentação do projeto, referente à Unidade 1 da disciplina.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/E2AdUEvNK94" title="Apresentação Mães Guerreiras, 08/09/2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Reunião de análise de feedbacks - 28/09/2026

Reunião da equipe para analisar os feedbacks recebidos sobre os Requisitos Funcionais e Não Funcionais.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/4JEa_iDmdDwc" title="Reunião de análise de feedbacks, 28/09/2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Registro da revisão por pares

Registro dos apontamentos recebidos, das decisões da equipe e dos ajustes realizados ou justificativas.

O documento preserva a numeração e as decisões da época da revisão. A versão vigente dos requisitos está no [catálogo integrado](../08-requisitos/index.md).

<iframe
  src="../assets/evidencias/revisao-por-pares.pdf"
  width="100%"
  height="650"
  title="Registro da revisão por pares">
</iframe>

[Abrir o PDF](../assets/evidencias/revisao-por-pares.pdf) · [Abrir a planilha original](https://unbbr-my.sharepoint.com/:x:/g/personal/241025944_aluno_unb_br/IQCbSpTTKq4_QYSLvXP93hPDAS0wmCFgCMQMZj8bRtR4hm4?e=mpUoMl)

## Avaliação do valor de negócio - 25/09/2026

Reunião com Makio para avaliação do valor de negócio dos requisitos, como parte da priorização do
MVP.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/G1tmrxZk-PI" title="Avaliação do valor de negócio, 25/09/2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Validação do MVP - 28/09/2026

Reunião com Makio para validação do escopo do MVP definido pela equipe.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/0LL0tytCAfM" title="Validação do MVP, 28/09/2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Sprint 6 — back-end de acesso, consentimentos e doações (issue #33)

Registro das verificações locais realizadas em 31/10/2026. As informações abaixo descrevem aquele conjunto de evidências e não devem ser interpretadas como a situação atual de todos os requisitos.

- Migrations:
    - `sistema/supabase/migrations/20261031000000_acesso_consentimentos_doacoes.sql`
    - `sistema/supabase/migrations/20261031100000_integridade_sprint6.sql`
    - `sistema/supabase/migrations/20261031120000_restringir_rpc_de_acesso.sql`
    - `sistema/supabase/migrations/20261031130000_restringir_saida_sintetica.sql`
- Testes automatizados: `sistema/test/acesso.test.ts`, `consentimentos.test.ts` e `doacoes.test.ts` — 29 testes passaram localmente em 31/10/2026.
- Verificações locais em 31/10/2026: `npm run typecheck`, `npm run lint`, `npm run build`, migrations aplicadas ao Supabase local e `supabase db lint --local` sem erros.
- Essas verificações locais, isoladamente, não comprovam deploy em homologação, execução do CI, validação com a coordenação nem teste HTTP/RLS ponta a ponta.
- RNF03 — laboratório: o teste `RNF03 consulta de saldo` calcula 50 categorias com entradas e saídas em menos de 3 segundos no runner do Vitest. A consulta HTTP envia `Server-Timing`.
- RNF03 — conexão móvel: o protocolo de medição está no `sistema/README.md`. Este registro local não apresenta uma medição de atendimento integral ao RNF03 em conexão 3G/4G.

**Alcance da evidência de desempenho:** o teste local do cálculo de saldo e o valor de `Server-Timing`, isoladamente, não comprovam o tempo até o resultado aparecer no navegador. Uma medição de atendimento ao RNF03 deve identificar a versão avaliada, a conexão 3G/4G utilizada, o conjunto de consultas e os resultados, verificando o limite de 3 segundos em pelo menos 95% das requisições.

### Pendências e referências de preparação da Sprint 6

O registro original remete à [aplicação da DoR](../13-dor-dod/index.md#136-aplicacao-da-dor-aos-requisitos-da-sprint-6), que documenta a confirmação dos perfis pela coordenação, a validação dos protótipos e dos comportamentos detalhados e a definição dos campos de cadastro de usuário, com as atualizações e pendências ali identificadas.

### Impedimentos e limites de escopo do registro original

- A possibilidade de doação anônima, mencionada no CA-RF08-06, aguardava confirmação da coordenação.
- Famílias, participantes e destinação real de doações (RF10) estavam fora da implementação apresentada neste registro da Sprint 6 e pertenciam ao planejamento da Sprint 7.

As decisões posteriores e a situação atual dos requisitos devem ser consultadas no [catálogo integrado](../08-requisitos/index.md) e no [Histórico de evolução](../14-historico/index.md). As validações posteriores estão registradas nas atas de [02/11/2026](../00-atas/index.md#ata-de-02112026) e [15/11/2026](../00-atas/index.md#ata-de-15112026).

**Registro posterior:** a [issue #35](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-MaesGuerreiras/issues/35) relata, em 02/11/2026, 20 medições da consulta HTTP de saldo com Fast 3G simulado, máximo de 2,05 segundos, na versão indicada como `main @ 36a37ed`. Essa evidência se refere à requisição HTTP; não comprova, isoladamente, o tempo até a apresentação completa do resultado na tela.

## Apresentação da Unidade 2 - 12/10/2026

Gravação da apresentação do projeto referente à Unidade 2 da disciplina.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/yLagJ1zh3Kw" title="Apresentação da Unidade 2, 12/10/2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Priorização de requisitos, versão 2 - outubro de 2026

Planilha em que a cliente avaliou o valor de negócio de cada requisito (RF01 a RF45), com critério e
justificativa, e a equipe avaliou esforço, complexidade e lacuna de capacidade. Substitui a avaliação
por característica de produto e é a base da matriz do [MVP](../10-mvp/index.md#104-matriz-que-leva-a-escolha-do-mvp).

[Abrir a planilha de priorização v2](https://docs.google.com/spreadsheets/d/1k2YFjudQxFV-SecOvGi2Ta5RNQU3BmGNQqUgQscksvA/edit?usp=sharing)

## Avaliação do protótipo - 26/10/2026

Reunião com Makio para apresentação e avaliação do protótipo do MVP. Os ajustes solicitados estão na [ata de 26/10/2026](../00-atas/index.md#ata-de-26102026).

<iframe width="100%" height="480" src="https://www.youtube.com/embed/EPVsBDcXRdI" title="Avaliação do protótipo com Makio, 26/10/2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Protótipo no Figma

Versão apresentada ao Makio em 26/10/2026, com os ajustes pedidos na reunião:
[abrir o protótipo no Figma](https://www.figma.com/design/0qX1e0oO6JqhROswfk3oyI/Prot%C3%B3tipo---M%C3%A3es-Guerreiras?node-id=91-98){target="_blank"}.

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="480" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F0qX1e0oO6JqhROswfk3oyI%2FProt%25C3%25B3tipo---M%25C3%25A3es-Guerreiras%3Fnode-id%3D91-98" allowfullscreen title="Protótipo do MVP no Figma"></iframe>

<h3 id="feedback-complementar-pelo-whatsapp">Feedback complementar pelo WhatsApp</h3>

<p>
  Após a apresentação, Makio explorou o protótipo e enviou sua avaliação
  e os ajustes solicitados pelo WhatsApp. As capturas também incluem
  a resposta da equipe.
</p>

<p><small>Clique em uma imagem para ampliar.</small></p>

<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-start;">

  <figure style="flex: 1 1 180px; min-width: 0; max-width: 260px; margin: 0;">
    <a href="../assets/evidencias/feedback-makio-01.jpg" target="_blank" rel="noopener">
      <img
        src="../assets/evidencias/feedback-makio-01.jpg"
        alt="Avaliação geral do protótipo por Makio"
        style="display: block; width: 100%; border-radius: 12px; box-shadow: 0 3px 12px rgba(0,0,0,0.15);">
    </a>
    <figcaption style="margin-top: 10px; text-align: center; font-size: 0.85em;">
      <strong>1. Avaliação geral</strong><br>
      Impressões sobre o protótipo.
    </figcaption>
  </figure>

  <figure style="flex: 1 1 180px; min-width: 0; max-width: 260px; margin: 0;">
    <a href="../assets/evidencias/feedback-makio-02.jpg" target="_blank" rel="noopener">
      <img
        src="../assets/evidencias/feedback-makio-02.jpg"
        alt="Ajustes solicitados por Makio"
        style="display: block; width: 100%; border-radius: 12px; box-shadow: 0 3px 12px rgba(0,0,0,0.15);">
    </a>
    <figcaption style="margin-top: 10px; text-align: center; font-size: 0.85em;">
      <strong>2. Ajustes solicitados</strong><br>
      Pontos levantados pelo cliente.
    </figcaption>
  </figure>

  <figure style="flex: 1 1 180px; min-width: 0; max-width: 260px; margin: 0;">
    <a href="../assets/evidencias/feedback-makio-03.jpg" target="_blank" rel="noopener">
      <img
        src="../assets/evidencias/feedback-makio-03.jpg"
        alt="Resposta da equipe aos feedbacks de Makio"
        style="display: block; width: 100%; border-radius: 12px; box-shadow: 0 3px 12px rgba(0,0,0,0.15);">
    </a>
    <figcaption style="margin-top: 10px; text-align: center; font-size: 0.85em;">
      <strong>3. Resposta da equipe</strong><br>
      Ajustes informados e encaminhamentos.
    </figcaption>
  </figure>

</div>

## Validação da Sprint 6 com Makio - 02/11/2026

Gravação da reunião de 02/11/2026, em que Makio testou em homologação as funcionalidades da
Sprint 6. Resumo na [ata de 02/11](../00-atas/index.md#ata-de-02112026).

<iframe width="100%" height="480" src="https://www.youtube.com/embed/3ikTwwXo4gc" title="Validação da Sprint 6 com Makio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Validação da Sprint 7 com Makio - 15/11/2026

Gravação da reunião de 15/11/2026, em que Makio validou as funcionalidades da Sprint 7 em um teste
de usabilidade baseado em tarefas. Resumo na [ata de 15/11](../00-atas/index.md#ata-de-15112026).

<iframe width="100%" height="480" src="https://www.youtube.com/embed/xxa7t4qYJCY" title="Validação da Sprint 7 com Makio, 15/11/2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Retrospectiva da Sprint 6 - 10/11/2026

Gravação da retrospectiva da Sprint 6, feita pela equipe.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/7EWACGZe6H4" title="Retrospectiva da Sprint 6, 10/11/2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Apresentação da Unidade 3 - 16/11/2026

Gravação da apresentação do projeto referente à Unidade 3 da disciplina.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/7XBCg7caKd0" title="Apresentação da Unidade 3, 16/11/2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Rastreabilidade das verificações automatizadas por versão

As execuções abaixo identificam o commit avaliado. Elas comprovam a execução bem-sucedida dos
workflows e dos testes que estavam incluídos naquela versão; não significam, isoladamente, que todos
os critérios de aceitação ou RNFs do MVP foram atendidos.

| Data | Incremento/escopo | Commit na `main` | Resultado e alcance |
| :--- | :--- | :--- | :--- |
| 16/11/2026 | Merge do PR #82; versão de fechamento da Sprint 7 | [`a2fcea6`](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-MaesGuerreiras/commit/a2fcea6) | Workflow `sistema` concluído com sucesso; inclui as verificações da aplicação e do banco. [Execução do CI](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-MaesGuerreiras/actions/runs/43969005599). |
| 24/11/2026 | Merge do PR #90; correção do saldo por categoria | [`7b6b1f9`](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-MaesGuerreiras/commit/7b6b1f9) | Workflow `sistema` concluído com sucesso; a reconciliação registra 42/42 testes pgTAP de controle de acesso. [Execução do CI](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-MaesGuerreiras/actions/runs/45305751683). |

**Limite da evidência:** o CI demonstra que os testes presentes no commit passaram naquele ambiente.
A cobertura de cada RF deve continuar ligada aos seus critérios e RNFs na [DoD](../13-dor-dod/index.md),
e resultados ausentes devem permanecer como pendência, não como aprovação presumida.

