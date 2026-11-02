# Atas de Reunião

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
cancelamento). RF19 e RF20 (turma) ficaram pendentes, por dúvida sobre até onde o apontamento
cruza para regra de negócio em vez de requisito funcional. RF12 e RF29 dependem de validação com
a coordenação da associação. Isabella vai consolidar e reenviar o texto revisado para a equipe.

### 2. Requisitos Não Funcionais

Por falta de tempo, os Requisitos Não Funcionais não foram revisados em conjunto nesta reunião;
Isabella vai dividir essa parte entre a equipe.

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

**Evidências:** [gravação da reunião](../00-evidencias/index.md#avaliacao-do-prototipo-26102026).