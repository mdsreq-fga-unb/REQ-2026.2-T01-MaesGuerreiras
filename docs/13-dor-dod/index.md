# 13. DoR e DoD

Esta seção apresenta a Definition of Ready (DoR) e a Definition of Done (DoD) adotadas pela
equipe. A DoR verifica se um requisito está maduro o suficiente para entrar em uma sprint; a DoD
verifica se o que foi construído a partir dele cumpre os critérios de qualidade da equipe antes
de ser mostrado à coordenação na Revisão da Sprint. As duas são **verificação** feita pela
equipe — a validação com o cliente (seção [7.3](../01-visao-produto/index.md#73-processo-de-validacao))
é uma etapa posterior e separada. Há uma única DoR e uma única DoD para o projeto inteiro,
aplicadas a cada história de usuário. Cada item tem um de três resultados — **passou**, **não
passou** ou **não se aplica**, este sempre com justificativa —, nunca um percentual. A história
está pronta quando nenhum item ficou como "não passou".

## 13.1 Definition of Ready (DoR)

**O requisito tem os dados mínimos necessários para ser implementado sem reunião extra?**

O texto do RF precisa listar os campos obrigatórios e opcionais, não só citar que "dados são
cadastrados". O RF14 (Cadastrar família) é o modelo: lista nome do responsável, telefone e
endereço como obrigatórios, e número de moradores e observações como opcionais. O RF11 (Cadastrar categoria de item) é um exemplo de lacuna que essa pergunta revelou: a primeira versão não dizia se unidade de medida era texto livre ou lista fechada, e por isso não estava pronta para sprint. A lacuna foi fechada com a lista fechada "unidade, quilo ou pacote" (RN02 e critério CA-RF11-01).

**As regras de negócio do requisito estão identificadas e separadas do texto do RF?**

Regra de negócio embutida no meio da descrição do RF atrasa a implementação, porque muda sem
avisar quem está codando. O RF09 (Registrar doação recebida) depende da regra de que a quantidade
usa a unidade de medida da categoria ([RN02](../08-requisitos/regras.md#rn02)); essa regra precisa estar registrada nas
[regras de negócio](../08-requisitos/regras.md) e ligada na ficha do RF,
não só mencionada de passagem no RF.

**O agente que executa o requisito está definido na tabela de permissões?**

Nenhum RF entra em sprint sem perfil de acesso definido na
[tabela de permissões](../08-requisitos/glossario.md#permissoes-por-perfil) e na ficha do RF. RF39 (Cadastrar usuário do
sistema) é exclusivo da Coordenação; RF41 (Autenticar usuário) é Voluntário ou Coordenação. Se o
RF ainda estiver com o agente em aberto, ele não está pronto.

**Existe protótipo de baixa fidelidade validado com o cliente ou com a coordenação, quando o
requisito tiver interface?**

Requisitos de tela — como RF20 (Cadastrar turma de atividade) ou RF27 (Abrir chamada do
encontro) — só entram em sprint depois de um wireframe revisado com o cliente (Makio) ou com a
coordenação (Daiane), registrado como evidência. Requisitos sem interface própria (ex.: RF32, sinalização automática) não dependem
desse critério.

**Os RNFs aplicáveis ao requisito estão listados?**

A ficha do RF no [catálogo](../08-requisitos/index.md) (campo *Condições*) e a classificação de
cada [RNF](../08-requisitos/rnf.md) para o MVP precisam apontar quais RNFs
valem para o RF antes dele entrar em sprint. RF09 (Registrar doação recebida) está ligado ao
RNF01 (registro em até três passos) e ao RNF19 (histórico de alterações em registros de doação);
implementar RF09 sem saber disso tende a deixar esses atributos de fora.

**O critério de aceitação está escrito como condições de satisfação verificáveis?**

Sem uma lista objetiva do que precisa ser verdade para o requisito estar correto, como nos
critérios das fichas do [catálogo](../08-requisitos/index.md#rf09), a equipe de teste
não tem o que automatizar e a Revisão de Sprint vira debate de opinião sobre "se ficou bom".

**As dependências com outros requisitos estão mapeadas?**

RF26 (Consultar inscritos da turma) depende de RF20 (turma já cadastrada) e de RF23 (inscrição já
registrada). Planejar RF26 numa sprint anterior à de RF20 e RF23 é sinal de que a DoR não foi
checada.

**O esforço técnico já foi estimado e cabe na sprint de 2 semanas?**

A estimativa de esforço, complexidade e lacuna de capacidade (campo *Priorização* da ficha; escalas na seção
[9](../09-priorizacao/index.md)) precisa existir antes do planejamento da sprint,
não ser feita de improviso na reunião de planejamento.

**O comportamento do requisito foi confirmado por Makio ou Daiane, com a decisão registrada em ata ou gravação?**

Mencionar o requisito em uma reunião não basta: nenhum requisito entra em sprint sem que o cliente
tenha confirmado o comportamento esperado, com a decisão registrada nas
[Atas de Reunião](../00-atas/index.md) ou nas [Evidências e Gravações](../00-evidencias/index.md).

**Se o requisito envolve dado pessoal de família ou criança, o consentimento (RF42) já está
coberto?**

Requisitos como RF14 (Cadastrar família) ou RF16 (Cadastrar participante) só entram em sprint com
dados reais depois que a base de consentimento e controle de acesso estiver pronta, conforme a
seção [6](../01-visao-produto/index.md#64-portao-de-liberacao-para-uso-real). Antes disso, só com dados
sintéticos.

## 13.2 Definition of Done (DoD)

**O comportamento implementado corresponde exatamente ao que está declarado na ficha do RF (seção 8)?**

Sem funcionalidade "a mais" nem "a menos" do que o RF descreve. Se o comportamento mudou durante
o desenvolvimento, a ficha do RF é atualizada (e a mudança registrada no [histórico](../14-historico/index.md)) antes de o requisito ser considerado pronto, não depois.

**As regras de negócio foram implementadas, não só o caminho feliz?**

RF23 precisa realmente recusar a inscrição quando a turma não tem vaga e informar que ela está
cheia (RN12) — não só inscrever sempre e ignorar o limite de vagas definido em RF20. A DoD de cada
requisito cobre só os critérios dele: o encaminhamento à lista de espera é critério do RF25 (RF25).
Quando o RF25 for concluído, o teste de regressão garante que o bloqueio do RF23 continua
funcionando.

**Os critérios de aceitação passam integralmente, incluindo os cenários de exceção?**

RF18 (Vincular participante a família) tem dois cenários: responsável legal informado, e a
exceção de criança em acolhimento com motivo registrado. Os dois precisam passar, não só o
principal.

**O código segue os padrões definidos pela equipe?**

Lint do Nuxt.js sem erros, nomes de entidades do domínio em português (família, doação, turma),
sem código comentado ou `console.log` esquecido no commit.

**Os testes automatizados das regras críticas foram escritos e estão verdes?**

Conforme a prática de XP da seção [4.4](../01-visao-produto/index.md#44-praticas-de-xp-adotadas),
requisitos como RF09 (registro de doação), RF23 (inscrição) e RF28 (registro de frequência) têm
teste automatizado cobrindo a regra, não só o CRUD básico.

**A suíte de testes de regressão inteira passa, não só os testes novos do requisito?**

Um requisito novo que quebra teste de outro já entregue não está pronto, mesmo que os testes
dele próprio passem.

**A funcionalidade está implantada no ambiente de homologação, não só rodando local?**

Deploy feito em Vercel ou Netlify, com o pipeline de integração contínua executado com sucesso no
commit final.

**Os RNFs aplicáveis ao requisito foram verificados de fato, não assumidos?**

Cada RNF é verificado com a medida que ele mesmo declara. RF12 (Consultar saldo) é uma tela de
consulta: precisa apresentar o resultado em até 3 segundos em 95% das requisições, com conexão
3G/4G simulada (RNF03), não só "parecer rápido" no teste manual de um desenvolvedor. RF09
(Registrar doação) é uma gravação, e o RNF03 não se aplica a ela: o que se verifica é o RNF01,
contando com uma voluntária os passos até concluir o registro (no máximo três).

**Dados pessoais envolvidos respeitam a LGPD?**

Consentimento (RF42) registrado antes do uso, acesso restrito por perfil, e nenhum dado real de
família ou criança usado em teste sem anonimização — conforme o RNF07 e o RNF13.

**O que não está concluído aparece como "em andamento", e não como pronto?**

Uma história "quase pronta" não conta como concluída nem entra na velocidade da sprint: ela fica
registrada como em andamento e volta ao backlog da sprint seguinte. Isso não impede a equipe de
mostrar na Revisão de Sprint um impedimento, uma tela incompleta ou um protótipo para obter
feedback da coordenação, desde que fique claro o que está concluído e o que continua em
desenvolvimento.

## 13.3 Itens que não se aplicam

Nem todo item da DoR ou da DoD faz sentido para toda história. Quando um item não se aplica, ele
é marcado como **não se aplica**, com a justificativa ao lado, e não conta como falha. Exemplos:

| Item | História | Justificativa |
| :--- | :--- | :--- |
| Protótipo validado (DoR) | RF32 – Sinalizar faltas | Não tem tela própria; a sinalização aparece no painel do RF37. |
| Dados pessoais respeitam a LGPD (DoD) | RF11 – Cadastrar categoria | A categoria não contém dado pessoal. |
| RNF03 – tempo de consulta (DoD) | RF09 – Registrar doação | É gravação, não tela de consulta. |
| Comportamento igual à ficha (DoD) | T01 – Ambiente | Item técnico, sem RF; verificado pelo CI e pelo deploy. |

Os RNFs que valem para o projeto inteiro e não dependem do código de uma história — como o RNF12
(custo mensal zero) e o RNF05 (cópia de segurança diária) — não são verificados história por
história. Eles são conferidos uma vez por sprint, no fechamento, e registrados na revisão.

## 13.4 Checklists da DoR e da DoD

A DoR é preenchida no planejamento da sprint e a DoD ao final, antes da Revisão, para cada
história. Em cada item, marque **passou**, **não passou** ou **não se aplica** (com justificativa,
seção 13.3).

### DoR

| Verificado | Pergunta |
| :---: | :--- |
| ☐ | O requisito tem os dados mínimos (campos obrigatórios/opcionais) descritos? |
| ☐ | As regras de negócio estão separadas do texto do RF, registradas em 8.2 e ligadas na ficha? |
| ☐ | O perfil de acesso está definido na tabela de permissões (8.3) e na ficha, e confirmado pela Daiane ou Makio? |
| ☐ | Existe protótipo validado com o cliente ou com a coordenação (quando aplicável)? |
| ☐ | Os RNFs aplicáveis estão listados? |
| ☐ | O critério de aceitação está escrito como condições de satisfação verificáveis? |
| ☐ | As dependências com outros RFs estão mapeadas? |
| ☐ | O esforço técnico foi estimado e cabe na sprint? |
| ☐ | O comportamento do requisito foi confirmado por Makio ou Daiane, com a decisão registrada? |
| ☐ | Se envolve dado pessoal, o consentimento (RF42) está coberto antes de dados reais? |

### DoD

| Verificado | Pergunta |
| :---: | :--- |
| ☐ | O comportamento implementado corresponde à ficha do RF? |
| ☐ | A ficha foi atualizada (situação, entrega e evolução) e a mudança registrada no histórico? |
| ☐ | As regras de negócio foram implementadas, não só o caminho feliz? |
| ☐ | O critério de aceitação passa integralmente, incluindo exceções? |
| ☐ | O código segue os padrões da equipe, sem código morto? |
| ☐ | Os testes automatizados das regras críticas foram escritos e estão verdes? |
| ☐ | A suíte de regressão inteira continua passando? |
| ☐ | A funcionalidade está implantada no ambiente de homologação? |
| ☐ | Os RNFs aplicáveis foram verificados de fato? |
| ☐ | Os dados pessoais envolvidos respeitam a LGPD? |
| ☐ | O que não está concluído aparece como "em andamento", e não como pronto? |

## 13.5 Exemplo de aplicação: RF09 – Registrar doação recebida

O exemplo mostra, para uma história do MVP (Sprint 6), como cada item da DoD se liga aos critérios
de aceitação (ficha do [RF09](../08-requisitos/index.md#rf09) no catálogo),
à forma de verificação e à evidência registrada. A coluna de evidência é preenchida pela equipe
quando a história é verificada.

| Item da DoD | Critério ou requisito | Como é verificado | Resultado | Evidência |
| :--- | :--- | :--- | :--- | :--- |
| Comportamento igual à ficha | RF09; CA-RF09-01 | Revisão do PR conferindo os campos categoria, quantidade, data e doador com o RF09 | | |
| Regras de negócio | RN02; CA-RF09-02 | Teste automatizado: a quantidade usa a unidade da categoria e soma ao saldo | | |
| Critérios, incluindo exceções | CA-RF09-04, CA-RF09-05, CA-RF09-06 | Testes automatizados: campo faltando, quantidade zero ou negativa, categoria fora da lista | | |
| Padrões de código | — | Lint sem erros no CI | | |
| Testes das regras críticas | RN02; CA-RF09-02, 04, 05 | Testes acima passando no CI | | |
| Regressão | — | Suíte inteira passando no CI | | |
| Implantado em homologação | — | Deploy publicado a partir do commit final | | |
| RNFs aplicáveis | RNF01; CA-RF09-03 | Uma voluntária registra uma doação fictícia sem ajuda, com contagem de passos (no máximo três) | | |
| RNFs aplicáveis | RNF19 | Uma alteração de teste em um registro de doação aparece com autor, data, hora, valor anterior e novo | | |
| RNFs aplicáveis | RNF03 | Não se aplica: gravação, não tela de consulta | Não se aplica | — |
| Dados pessoais e LGPD | RNF07 | Doador pode ser pessoa física: acesso só para os perfis da tabela de permissões; apenas dados sintéticos até o portão de uso real (seção [6.4](../01-visao-produto/index.md#64-portao-de-liberacao-para-uso-real)) | | |
| Em andamento × pronto | — | Se qualquer linha acima não passar, o RF09 fica "em andamento" e não entra na velocidade | | |

## 13.6 Aplicação da DoR aos requisitos da Sprint 6

Situação em 28/10/2026. Os oito requisitos da Sprint 6 (filtro [Sprint 6](../08-requisitos/index.md#sprint-6) do catálogo) passaram pela DoR abaixo. Legenda: ✔ passou · ✖ não passou · — não se aplica · ? a confirmar pela equipe.

| Requisito | D1 | D2 | D3 | D4 | D5 | D6 | D7 | D8 | D9 | D10 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [RF41](../08-requisitos/index.md#rf41) – Autenticar usuário | ✔ | — | ? | ✖ | ✔ | ✔ | ✔ | ✔ | ? | — |
| [RF39](../08-requisitos/index.md#rf39) – Cadastrar usuário | ? | ✔ | ? | ✖ | ✔ | ✔ | ✔ | ✔ | ? | — |
| [RF40](../08-requisitos/index.md#rf40) – Atribuir perfil | ✔ | ✔ | ? | ✖ | ✔ | ✔ | ✔ | ✔ | ? | — |
| [RF42](../08-requisitos/index.md#rf42) – Registrar consentimentos | ✔ | ✔ | ? | ✖ | ✔ | ✔ | ✔ | ✔ | ✔ | — |
| [RF11](../08-requisitos/index.md#rf11) – Cadastrar categoria | ✔ | ✔ | ? | ✖ | ✔ | ✔ | ✔ | ✔ | ? | — |
| [RF08](../08-requisitos/index.md#rf08) – Cadastrar doador | ✔ | — | ? | ✖ | ✔ | ✔ | ✔ | ✔ | ? | — |
| [RF09](../08-requisitos/index.md#rf09) – Registrar doação recebida | ✔ | ✔ | ? | ✖ | ✔ | ✔ | ✔ | ✔ | ? | — |
| [RF12](../08-requisitos/index.md#rf12) – Consultar saldo | — | ✔ | ? | ✖ | ✔ | ✔ | ✔ | ✔ | ? | — |

Itens (na ordem da seção 13.4): D1 dados mínimos · D2 regras de negócio em 8.2 · D3 perfil na tabela de permissões, confirmado pela Daiane · D4 protótipo validado · D5 RNFs listados · D6 critérios de aceitação · D7 dependências · D8 esforço estimado · D9 comportamento confirmado pelo cliente · D10 consentimento antes de dados reais.

**Justificativas dos "não se aplica":** RF41 e RF08 não têm regra de negócio própria (D2). O RF12 é uma consulta, sem campos de entrada (D1). Nenhum requisito da Sprint 6 trata dado de família ou criança, e os testes usam dados sintéticos (D10).

**Pendências desta sprint:**

- **D4:** nenhum dos oito requisitos tem wireframe validado registrado como evidência.
- **D3:** a tabela de permissões ainda é proposta, à espera da confirmação da Daiane.
- **D9:** só o consentimento (RF42) tem decisão do cliente registrada em ata ou gravação; nos demais, a validação de 28/09 aprovou o requisito, e falta registrar a confirmação do comportamento detalhado (no RF08, os critérios CA-RF08-04 a 06 ainda são propostas).
- **D1:** os campos do cadastro de usuário (RF39) ainda não estão definidos na declaração nem nos critérios.

**Pendências que impedem a entrada dos requisitos da Sprint 7:** os critérios de aceitação ainda não foram escritos; falta protótipo validado; RF19 e RF20 têm texto pendente desde a ata de 28/09; e o consentimento (RF42) precisa estar pronto antes do cadastro de famílias e participantes (RF14, RF16).
