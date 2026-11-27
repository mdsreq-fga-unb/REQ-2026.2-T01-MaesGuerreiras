# Atas de Reunião

!!! note "Caráter histórico"
    As atas registram o estado das decisões **no momento em que foram tomadas**. Pendências e encaminhamentos descritos aqui podem ter sido resolvidos posteriormente. O estado vigente de cada requisito, regra ou decisão está no [Catálogo de requisitos](../08-requisitos/index.md) e no [Histórico de evolução](../14-historico/index.md), não nas atas.

## Ata de 15/11/2026

**Participantes:** Isabella, Luan, Luis, Ian, Pedro, Vitor e Makio (representante do cliente).

**Pauta:**

- Validação das funcionalidades da Sprint 7 com Makio.
- Próximos passos.

### 1. Técnica usada: teste de usabilidade baseado em tarefas

A validação seguiu um **teste de usabilidade com protótipo**, também chamado de teste baseado em
tarefas. Na verificação e validação de requisitos, ele é uma forma de validação por prototipação:
o cliente usa a tela para confirmar se o requisito representado é o certo. O roteiro teve três
partes:

- **Cenários de tarefa:** Makio recebeu objetivos, como "cadastre a família da Maria José" e "faça
  a chamada de hoje", e não instruções de onde clicar.
- **Pensar em voz alta (think-aloud):** Makio dizia o que estava pensando enquanto usava a tela.
  Quem conduziu não explicou nada e só perguntou "o que você faria agora?".
- **Entrevista de encerramento (debriefing):** perguntas finais sobre as palavras usadas nas telas,
  campos que faltam e regras.

### 2. Resultado

Cada tarefa correspondia a um requisito da Sprint 7. Makio fez todas na versão para celular, sem
precisar de instrução de onde clicar:

| Tarefa | Requisitos | Resultado |
| :--- | :--- | :--- |
| Cadastrar a família da Maria José, começando pelo consentimento | RF42, RF14 | Concluída. Perguntado por que o consentimento vem antes do cadastro, Makio respondeu que é pela proteção de dados. |
| Cadastrar a Ana Clara, de 9 anos, como nova participante | RF16, RF18 | Concluída. |
| Criar uma turma de crochê com 20 vagas | RF20 | Concluída. |
| Inscrever a Ana Clara no crochê, que estava lotado (20 de 20), e depois em uma turma com vaga | RF23 | A inscrição na turma cheia ficou bloqueada; na turma com vaga, foi feita. |
| Entregar 12 pacotes de leite à Maria José | RF10 | Concluída; a tela mostrou o saldo atualizado. |
| Fazer a chamada do crochê de hoje | RF27, RF28 | Concluída. |
| Ver as faltas da Ana Clara no reforço | RF19, RF31 | Concluída; a ficha mostrou o cadastro, as turmas e os encontros com presença e falta. |

Na entrevista de encerramento, Makio disse que as telas são intuitivas e "super fáceis de
entender". Nenhum ajuste foi pedido na reunião. A justificativa de falta (RF29) e a correção de
frequência (RF30) não entraram nas tarefas.

### 3. Próximos passos

- Makio vai testar também a versão para computador e avisar a equipe se encontrar algum problema.
- A validação não substitui a DoD: os RFs da Sprint 7 só são concluídos depois da verificação da
  DoD ([issue #65](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-MaesGuerreiras/issues/65)).

**Evidências:** [gravação da reunião](../00-evidencias/index.md#validacao-da-sprint-7-com-makio-15112026).

## Ata de 02/11/2026

**Participantes:** Isabella, Luan, Luis, Ian, Pedro, Vitor e Makio (representante do cliente).

**Pauta:**

- Teste, em homologação, das funcionalidades da Sprint 6.
- Próximos passos.

### 1. Teste das funcionalidades da Sprint 6

Makio testou em homologação todas as funcionalidades da Sprint 6: login (RF41), cadastro de
usuários e atribuição de perfil (RF39 e RF40), consentimentos e autorização de uso de imagem
(RF42), cadastro de categorias (RF11), cadastro e correção de doador (RF08), entrada de doação
(RF09) e consulta de saldo (RF12). As funcionalidades foram validadas sem ajustes novos: os
ajustes pedidos em 26/10 já tinham entrado na versão 2 do protótipo e nas telas.

Makio também testou e validou a tela de categorias.

### 2. Próximos passos

A próxima reunião com Makio será ao final da Sprint 7 (até 16/11/2026).

**Resultado da verificação de 02/11/2026:** a validação de Makio não substituiu a DoD. Naquela data, nenhum dos oito RFs da Sprint 6 havia sido concluído pela DoD, conforme a issue #35. Permaneciam pendentes testes automatizados por regra, CI vinculado ao commit, correção do aviso de doador duplicado e teste de registro de doação pela coordenadora sem ajuda. As verificações e mudanças posteriores estão no [Histórico de evolução](../14-historico/index.md) e nas fichas do [catálogo](../08-requisitos/index.md).

**Evidências:** [gravação da reunião](../00-evidencias/index.md#validacao-da-sprint-6-com-makio-02112026).

## Ata de 28/09/2026

**Participantes:** Isabella Lacerda Lima, Luan Ludry Souza, Luis Gustavo Lopes Oliveira, Ian
Pedersoli Barbosa, Pedro Henrique Gomes Rodrigues

**Pauta:**

1. Revisão do feedback recebido sobre os Requisitos Funcionais
2. Divisão do trabalho nos Requisitos Não Funcionais
3. Alinhamento da reunião do dia seguinte com o cliente (Makio)

### 1. Revisão do feedback dos Requisitos Funcionais

A equipe revisou o feedback recebido sobre os RFs, item por item, decidindo aceitar, aceitar
parcialmente ou não aceitar cada apontamento, e já ajustou o texto de boa parte dos requisitos
(agentes por RF, campos de cadastro, terminologia, glossário, regras de encerramento e
cancelamento). RF19 e RF20 (turma) ficaram pendentes, por dúvida sobre até onde o apontamento cruza para regra de negócio em vez de requisito funcional. RF12 e RF29 dependem de validação com a coordenação da associação. Isabella vai consolidar e reenviar o texto revisado para a equipe.
**Atualização posterior:** as pendências acima correspondem ao entendimento registrado nesta reunião. A evolução posterior dos requisitos está nas fichas do [RF12](../08-requisitos/index.md#rf12), [RF19](../08-requisitos/index.md#rf19), [RF20](../08-requisitos/index.md#rf20) e [RF29](../08-requisitos/index.md#rf29), com as decisões e suas datas no [Histórico de evolução](../14-historico/index.md).

### 2. Requisitos Não Funcionais

Por falta de tempo, os Requisitos Não Funcionais não foram revisados em conjunto nesta reunião; Isabella vai dividir essa parte entre a equipe.
*(Situação vigente: os RNFs foram revisados e estão publicados em [8.1 Requisitos não funcionais](../08-requisitos/rnf.md).)*

Os apontamentos da revisão por pares sobre RFs e RNFs, as decisões da equipe e os ajustes realizados ou justificativas estão no
[registro da revisão por pares](../00-evidencias/index.md#registro-da-revisao-por-pares).
A versão vigente dos requisitos está no [catálogo integrado](../08-requisitos/index.md).

### 3. Reunião com o cliente (Makio)

A avaliação do valor de negócio dos requisitos com Makio foi realizada em **25/09/2026**, e a
validação do escopo do MVP ocorreu em **28/09/2026**. As gravações estão disponíveis na página
de Evidências e Gravações: [avaliação do valor de negócio](../00-evidencias/index.md#avaliacao-do-valor-de-negocio-25092026)
e [validação do MVP](../00-evidencias/index.md#validacao-do-mvp-28092026).

## Ata de 22/09/2026

**Participantes:** Luan, Isabella, Vitor, Pedro, Luis, Ian

**Pauta:**

1. Revisão das correções apontadas pelo monitor
2. Mudanças no cronograma para a semana

### 1. Revisão das correções do monitor

A equipe revisou as correções apontadas pelo monitor. Os Requisitos Funcionais e Não Funcionais
(seção 8) já foram atualizados com as correções discutidas: separação de regras de negócio do
texto dos RFs, divisão do consentimento de dados e de uso de imagem em requisitos distintos,
reclassificação do RNF07 como Segurança e inclusão de um RNF específico para direito de imagem.

### 2. Mudanças de cronograma

A equipe discutiu, em conversa, as mudanças necessárias no cronograma para atender à issue #8,
sem decisões definitivas nesta reunião. A PR #12 já propõe essas correções (unificação da
cadência em sprints de 2 semanas, antecipação da CP7 para antes do registro de doações e do
cadastro de famílias, e inclusão de artefatos de Engenharia de Requisitos em cada sprint) e
segue aberta, pendente de revisão.
*(Situação vigente: o cronograma foi reestruturado nas sprints subsequentes. O planejamento atual está no [catálogo integrado de requisitos](../08-requisitos/index.md), com releases e sprints alinhadas à nova matriz de priorização.)*

## Ata de 26/10/2026

**Participantes:** Isabella, Luan, Luis, Ian, Pedro, Vitor e Makio (representante do cliente).

**Pauta:**

- Apresentação e validação do protótipo do MVP.
- Levantamento de ajustes e feedback complementar pelo WhatsApp.

### 1. Apresentação e avaliação do protótipo

A equipe apresentou o protótipo do MVP a Makio, que o aprovou com ajustes, detalhados nesta ata. Além da reunião, Makio explorou o protótipo e encaminhou feedbacks pelo WhatsApp.

Foram avaliados positivamente a identidade visual da associação, o fluxo de registro de doações em três passos, a unidade de medida vinculada à categoria e a apresentação das entradas, saídas e saldo. Makio também destacou a separação dos consentimentos por finalidade e a restrição da gestão de usuários e categorias à Coordenação.

### 2. Ajustes solicitados

Nos feedbacks enviados pelo WhatsApp, Makio solicitou:

- Disponibilizar uma forma de a Coordenação redefinir a senha de usuários.
- Apresentar os formulários de criação de usuário, doador e categoria.
- Mostrar mensagens de erro, incluindo senha incorreta e campos obrigatórios vazios.
- Apresentar a interface do perfil Voluntário e o comportamento ao tentar acessar uma área restrita à Coordenação.
- Apresentar um aviso para evitar cadastros duplicados de doadores e o registro de quem corrigiu seus dados.
- Posicionar o consentimento antes do cadastro de dados pessoais.
- Disponibilizar o registro de revogação da autorização de uso de imagem.
- Retirar o selo “Baixo” do saldo caso não exista uma regra definida para essa classificação.
- Preencher a data do registro de doação com o dia atual, incluir um botão de incremento (“+”) e não iniciar a quantidade em zero.
- Retirar da tela inicial os atalhos “Fazer chamada” e “Registrar saída” enquanto essas funcionalidades não estiverem disponíveis, evitando confusão durante os testes.

*(Situação vigente, 03/11/2026: os ajustes de tela foram aplicados na versão 2 do protótipo e nas telas da Sprint 6 (issue #32): formulários de usuário, doador e categoria; mensagens de erro; tela do Voluntário e aviso de acesso negado; aviso de doador duplicado e histórico de correções; consentimento antes do cadastro; revogação da imagem; saldo sem o selo "Baixo"; data de hoje, botão "+" e quantidade vazia na entrada; Início sem os atalhos de chamada e de saída. A redefinição de senha pela Coordenação virou o critério [CA-RF39-04](../08-requisitos/index.md#rf39), ainda a validar; o serviço correspondente não existe no back-end. O protótipo validado passa a contar no item D4 da [DoR da Sprint 6](../13-dor-dod/index.md).)*

**Evidências:** [vídeo da reunião e feedbacks pelo WhatsApp](../00-evidencias/index.md#avaliacao-do-prototipo-26102026) · [protótipo no Figma](../00-evidencias/index.md#prototipo-no-figma).
