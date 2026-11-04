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