# 10. Backlog de Produto

*(a ser entregue na Unidade 2)*

Esta seção apresentará o backlog de produto (preliminar ou completo, dependendo do estágio do
projeto), a lista priorizada de todas as funcionalidades e melhorias planejadas para o software, além da
priorização dessas funcionalidades e da definição do escopo do MVP.

## 10.1 Backlog Geral

*(preencher na Unidade 2)*

## 10.2 Priorização do Backlog Geral e MVP

A priorização considerou duas perspectivas complementares: o **valor de negócio**, avaliado com a
participação do cliente, e o **esforço técnico**, avaliado pela equipe. Os resultados foram
cruzados na matriz 4 × 4 (seção [8.5](../08-requisitos/index.md#85-matriz-4x4)).

### Critérios e escala de avaliação do valor de negócio

A equipe adotou o método MoSCoW, associado a uma escala numérica de 1 a 4:

| Pontuação | Classificação | Interpretação |
| :--- | :--- | :--- |
| 4 | Must have | Indispensável para resolver o problema central ou viabilizar o produto |
| 3 | Should have | Muito importante, mas o produto ainda pode operar temporariamente sem o requisito |
| 2 | Could have | Agrega valor, mas pode ser adiado sem comprometer o objetivo principal |
| 1 | Won't have now | Não é prioritário para a versão atual |

### Critérios e escala de avaliação do esforço técnico

A avaliação técnica considerou três critérios, cada um em uma escala de 1 a 4: esforço de
implementação, complexidade técnica e lacuna de capacidade da equipe (domínio das tecnologias
envolvidas). O esforço técnico consolidado de cada RF é a média dos três critérios, arredondada
para a escala de 1 a 4.

| Pontuação | Esforço | Complexidade | Lacuna de capacidade |
| :--- | :--- | :--- | :--- |
| 1 | Até 2 horas | Baixa | A equipe domina plenamente os conhecimentos necessários |
| 2 | Entre 2 e 6 horas | Moderada | A equipe possui conhecimento suficiente, com pouca aprendizagem adicional |
| 3 | Entre 6 e 12 horas | Alta | A equipe precisa desenvolver conhecimentos relevantes |
| 4 | Mais de 12 horas | Muito alta | A equipe ainda não possui os conhecimentos ou recursos necessários |

### Avaliação consolidada dos RFs

A tabela abaixo agrupa os RFs pela combinação de valor de negócio e esforço técnico consolidado
que resultou na matriz 4 × 4. As justificativas de negócio e as decisões de regra associadas a
cada bloco estão detalhadas na validação do MVP, adiante.

| Valor de negócio | Esforço técnico | RFs |
| :--- | :--- | :--- |
| 4 — Must have | 2 — Moderado | RF25 |
| 4 — Must have | 3 — Alto | RF07 a RF24, RF26 a RF31, RF38, RF39, RF40 |
| 3 — Should have | 3 — Alto | RF41, RF42, RF43, RF44, RF46 |
| 2 — Could have | 3 — Alto | RF01 a RF06, RF45 |
| 2 — Could have | 4 — Muito alto | RF32 a RF37 |

### Validação do MVP com o cliente

**Participantes:** Makio (cliente), Vitor, Isabella, Luan, Luis, Ian e Pedro

**Data:** 28/09/2026

**Evidência:** gravação da reunião disponível na página de [Evidências e Gravações](../00-evidencias/index.md).

### Quais RFs foram aprovados para o MVP:
Foram validados e aprovados 18 Requisitos Funcionais (Prioridade 4) que compõem o núcleo do sistema:

| Módulo / Categoria | Códigos | Descrição dos Requisitos |
| :--- | :--- | :--- |
| **Acesso e proteção de dados** | RF39, RF40, RF41, RF42 | Cadastrar usuário, Atribuir perfil, Autenticar usuário, Registrar consentimentos |
| **Doações** | RF08, RF09, RF10, RF11, RF12 | Cadastrar/atualizar doador, Registrar entrada, Registrar saída/destinação, Cadastrar categoria de item, Consultar saldo |
| **Famílias e Participantes** | RF14, RF16, RF18, RF19 | Cadastrar família, Cadastrar participante, Vincular participante à família, Consultar participantes |
| **Turmas e Chamada** | RF20, RF23, RF26, RF27, RF28 | Cadastrar turma, Inscrever participante, Consultar inscritos/lista de espera, Abrir chamada, Registrar frequência |

### Quais RNFs (Requisitos Não Funcionais) serão aplicáveis ao MVP:

A classificação completa dos RNF01 a RNF19 está na seção [8.7 — RNFs aplicáveis ao MVP](../08-requisitos/index.md#87-rnfs-aplicaveis-ao-mvp).
Dos 19 RNFs analisados, 16 são obrigatórios, dois estão associados a RFs selecionados e um
não se aplica ao MVP.

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
