# 10. Backlog de Produto

*(a ser entregue na Unidade 2)*

Esta seção apresentará o backlog de produto (preliminar ou completo, dependendo do estágio do
projeto), a lista priorizada de todas as funcionalidades e melhorias planejadas para o software, além da
priorização dessas funcionalidades e da definição do escopo do MVP.

## 10.1 Backlog Geral

*(preencher na Unidade 2)*

## 10.2 Priorização do Backlog Geral e MVP

##  10.  Validação do MVP
Participantes: Makio(Cliente), Vitor, Isabella, Luan, Luis, Ian e Pedro


Data: 28/09

### Quais RFs foram aprovados para o MVP:
Foram validados e aprovados 18 Requisitos Funcionais (Prioridade 4) que compõem o núcleo do sistema:

- Acesso e proteção de dados : RF39 (Cadastrar usuário), RF40 (Atribuir perfil), RF41 (Autenticar usuário) e RF42 (Registrar consentimentos).

- Doações: RF08 (Cadastrar/atualizar doador), RF09 (Registrar entrada), RF10 (Registrar saída/destinação), RF11 (Cadastrar categoria de item) e RF12 (Consultar saldo).

- Famílias e Participantes: RF14 (Cadastrar família), RF16 (Cadastrar participante), RF18 (Vincular participante à família) e RF19 (Consultar participantes).

- Turmas e Chamada: RF20 (Cadastrar turma), RF23 (Inscrever participante), RF26 (Consultar inscritos/lista de espera), RF27 (Abrir chamada) e RF28 (Registrar frequência).

### Quais RNFs (Requisitos Não Funcionais) serão aplicáveis ao MVP:
Com base no roteiro levantado, aplicam-se ao MVP:

- Segurança e Controle de Acesso: O sistema deve garantir restrição por perfis (Voluntário e Coordenação), limitando ações críticas (ex.: inativar cadastro, corrigir chamadas retroativas e criar turmas) apenas à Coordenação.

- Auditoria e Rastreabilidade: O sistema deve registrar o motivo/justificativa quando a Coordenação alterar uma chamada em dias posteriores. O registro de consentimentos (RF42) deve gravar a data em que foi concedido.

- Privacidade e Proteção de Dados (LGPD): O sistema deve estar preparado para tratar solicitações de exclusão de dados com um SLA de resposta de 15 dias. Os termos de consentimento devem ser segregados em 4 finalidades específicas.

- Backup e Recuperação: O processo de restauração e contingência de banco de dados ficará sob responsabilidade técnica da equipe de hospedagem, sem necessidade de interface nativa de restauração para o cliente no MVP.

### Quais requisitos ficaram para entregas futuras:
Os módulos classificados com prioridade 1, 2 e 3 foram postergados para as próximas versões do sistema:

- Portal e agenda: (RF01 a RF06 e RF45) - Proposta: 2
- Relatórios: (RF32 a RF37) - Proposta: 2
- Fluxos avançados de LGPD: Pedido de exclusão pelo usuário final (RF43 e RF44 - Proposta 3, sujeito a confirmação) e autorizações complementares de imagem (RF46 - Proposta 3, sujeito a confirmação).

### Quais ajustes foram solicitados (Regras de Negócio):
Obrigatoriedade de Campos:

- Família: Obrigatórios apenas Nome do responsável, Telefone e Endereço. (Número de moradores e observações são opcionais).
- Participante: Obrigatórios apenas Nome completo e Data de nascimento. (Telefone e observações são opcionais).
- Correção de Chamada: O perfil "Voluntário" só pode editar uma chamada até o fim do mesmo dia. Após essa data, o bloqueio deve ser feito e a edição passa a ser exclusiva da "Coordenação", exigindo informação do motivo.
- Regra de Frequência: Parametrizar o alerta de contato com a família para ser acionado após 3 faltas seguidas sem justificativa.

### Quais decisões ou divergências foram registradas:

- Decisão sobre LGPD: A autorização da família será explicitamente fracionada em 4 usos distintos (cadastro/atendimento, frequência, contato com a família e relatório a apoiador).
- Decisão sobre Estoque: Optou-se pela gestão 100% manual (adição e remoção de itens) da lista de faltas pela Coordenação, mantendo a simplicidade do MVP.
- Pendente (Divergência de Informação): O volume atual de famílias/participantes atendidos e o fluxo mensal de doações ainda não foram definidos e serão validados junto à coordenação para fins de dimensionamento do banco de dados e infraestrutura.
- Pendente (Priorização): Confirmar com a coordenação a prioridade exata do bloco de consentimentos avançados/imagem e processos automatizados de pedido de exclusão, para fechar se algum componente adicional precisa subir para o MVP.