# 8. Requisitos de Software

Esta seção descreve os requisitos necessários para o desenvolvimento do software, divididos em
requisitos funcionais e não funcionais, conforme a Atividade 1 (prazo 22/09, 12h) proposta pelo
professor George Marsicano Correa.

## 8.1 Lista de Requisitos Funcionais (RFs)

**CP1 – Portal institucional e agenda de atividades**

- RF01 – Publicar conteúdo institucional: Permitir a publicação das informações da associação, como histórico, missão, endereço e formas de contato, na área pública.

- RF02 – Atualizar conteúdo institucional: Permitir a alteração das informações institucionais já publicadas.

- RF03 – Cadastrar atividade na agenda: Permitir o cadastro de uma atividade com data, horário, local e público a que se destina.

- RF04 – Atualizar atividade na agenda: Permitir a alteração dos dados de uma atividade já divulgada, incluindo seu cancelamento.

- RF05 – Consultar agenda de atividades: Permitir a consulta pública às atividades divulgadas, com filtro por período e por tipo de atividade.

- RF06 – Registrar solicitação de contato: Permitir que um visitante envie uma solicitação de contato à associação, registrando-a para atendimento posterior.

**CP2 – Registro de doações de itens**

- RF07 – Cadastrar doador: Permitir o cadastro de pessoas e organizações que doam itens à associação.

- RF08 – Registrar doação recebida: Permitir o registro da entrada de itens doados, com tipo de item, quantidade, data e doador de origem.

- RF09 – Registrar destinação de doação: Permitir o registro da saída de itens doados, indicando quantidade, data e a família ou atividade que os recebeu.

- RF10 – Cadastrar categoria de item: Permitir o cadastro de categorias para classificar os itens doados, como alimentos, roupas, produtos de higiene e material escolar, informando o nome da categoria e a unidade de medida usada na contagem dos itens (unidade, quilo ou pacote). 

- RF11 – Consultar saldo de itens: Permitir a consulta à quantidade atual de cada item doado, por categoria.

- RF12 – Publicar lista de itens necessários: Permitir a divulgação dos itens de que a associação precisa no momento, na área pública.

**CP3 – Cadastro de famílias e participantes**

- RF13 – Cadastrar família: Permitir o cadastro de uma família atendida, com dados de identificação, endereço e contato.

- RF14 – Atualizar cadastro de família: Permitir a alteração dos dados de uma família já cadastrada.

- RF15 – Cadastrar participante: Permitir o cadastro de uma pessoa atendida, com dados de identificação e data de nascimento.

- RF16 – Atualizar cadastro de participante: Permitir a alteração dos dados de um participante já cadastrado.

- RF17 – Vincular participante a família: Permitir a associação de um participante à família a que pertence, registrando o responsável legal quando houver.

- RF18 – Consultar cadastro de participantes: Permitir a busca de participantes cadastrados por nome, família e atividade em que estão inscritos.

**CP4 – Inscrição em atividades e organização do atendimento**

- RF19 – Cadastrar turma de atividade: Permitir o cadastro de uma turma, com atividade, período de realização, dias de encontro e quantidade de vagas.

- RF20 – Atualizar turma de atividade: Permitir a alteração dos dados de uma turma em andamento, como período de realização, dias de encontro e quantidade de vagas.

- RF21 – Encerrar turma de atividade: Permitir o encerramento de uma turma, ao fim de seu período ou por decisão da coordenação, registrando a data de encerramento.

- RF22 – Inscrever participante em turma: Permitir a inscrição de um participante cadastrado em uma turma. 

- RF23 – Cancelar inscrição de participante: Permitir o cancelamento de uma inscrição, registrando o motivo informado.

- RF24 – Registrar participante em lista de espera: Permitir o registro de um participante em lista de espera quando a turma não tiver vaga disponível.

- RF25 – Consultar inscritos da turma: Permitir a consulta à relação de participantes inscritos e em espera em cada turma.

**CP5 – Chamada digital e controle de frequência**

- RF26 – Abrir chamada de atividade: Permitir a abertura da chamada de um encontro de turma, listando os participantes inscritos. (Esses termos devem estar no glossário)

- RF27 – Registrar presença do participante: Permitir o registro da presença de cada participante no encontro em chamada.

- RF28 – Registrar falta justificada: Permitir o registro de falta com justificativa, informando o motivo apresentado.

- RF29 – Corrigir registro de frequência: Permitir a correção de um registro de presença ou falta já efetuado, preservando o registro anterior.

- RF30 – Consultar frequência do participante: Permitir a consulta ao histórico de presenças e faltas de um participante por turma e por período.

- RF31 – Sinalizar participante: O sistema deve sinalizar automaticamente, a partir dos registros de frequência, o participante que atingir o limite de faltas não justificadas definido pela associação, tornando-o visível à coordenação para contato. 

**CP6 – Relatórios e indicadores de impacto**

- RF32 – Gerar relatório de doações recebidas: Permitir a geração de relatório dos itens recebidos por período, categoria e doador.

- RF33 – Gerar relatório de doações distribuídas: Permitir a geração de relatório dos itens destinados por período, categoria e família atendida.

- RF34 – Gerar relatório de frequência por turma: Permitir a geração de relatório com presenças e faltas registradas em cada turma por período.

- RF35 – Gerar relatório de famílias atendidas: Permitir a geração de relatório das famílias com atendimento registrado no período consultado.

- RF36 – Consultar painel de indicadores: Permitir a consulta aos indicadores de atendimento da associação, como famílias atendidas, participantes ativos, itens recebidos e itens distribuídos no período.

- RF37 – Exportar relatório gerado: Permitir a exportação de um relatório gerado em formato adequado ao envio a apoiadores e a órgãos de prestação de contas.

**CP7 – Perfis de acesso e proteção de dados**

- RF38 – Cadastrar usuário do sistema: Permitir o cadastro das pessoas da associação que operarão a solução.

- RF39 – Atribuir perfil de acesso ao usuário: Permitir a atribuição de perfil a um usuário, delimitando as funcionalidades e os dados a que ele tem acesso.

- RF40 – Autenticar usuário: Permitir o acesso à área restrita mediante autenticação do usuário cadastrado.

- RF41 – Registrar consentimento de tratamento de dados pessoais: Permitir o registro do consentimento do titular, ou de seu responsável legal quando o titular for criança ou adolescente, para a coleta e o uso de seus dados pessoais nas finalidades informadas pela associação, com a data do registro.

- RF42 – Registrar autorização de uso de imagem: Permitir o registro da autorização ou da recusa do titular, ou de seu responsável legal, para o uso de sua imagem em materiais de divulgação da associação, indicando os meios autorizados (site, redes sociais, materiais impressos) e a eventual revogação.

- RF43 – Registrar solicitação de exclusão de dados: Permitir o registro e o acompanhamento das solicitações de exclusão de dados feitas pelos titulares.

- RF44 – Consultar histórico de alterações de cadastro: Permitir a consulta ao registro de quem alterou dados pessoais, o que foi alterado e quando.



## 8.2 Lista de Requisitos Não Funcionais (RNFs)

- RNF01 - Usabilidade (Usability): A solução deve ser operável por voluntárias e voluntários sem formação técnica. O registro de uma doação recebida e a conclusão de uma chamada devem ser alcançáveis em até três passos a partir da tela inicial da área restrita, sem apoio de terceiros.

- RNF02 - Usabilidade (Usability): A solução deve ser acompanhada de guia de uso em linguagem simples, cobrindo as rotinas de doação, cadastro, inscrição e chamada, validado pela coordenação da associação antes da entrega final.

- RNF03 - Desempenho (Performance): As telas de consulta devem apresentar resultados em até 3 segundos para 95% das requisições, com até 30 acessos simultâneos em conexão móvel 3G/4G.
RNF04 - Desempenho (Performance): O sistema deve suportar 30 acessos simultâneos nos dias de maior movimento, como distribuição de itens e início de turmas, mantendo o tempo de resposta definido no RNF03.

- RNF05 - Confiabilidade (Reliability): O sistema deve realizar cópia de segurança diária dos dados, com restauração concluída em até 4 horas após uma falha, sem perda dos registros de doações, cadastros e frequência.

- RNF06 - Confiabilidade (Reliability): O sistema deve apresentar disponibilidade mensal de 99% no intervalo de 8h às 18h, período em que a associação recebe e atende o público.

- RNF07 - Segurança (Security): Os dados pessoais das famílias e dos participantes devem trafegar sob conexão cifrada e ser acessíveis apenas conforme o perfil do usuário. As credenciais devem ser armazenadas de forma irreversível, e o sistema deve manter trilha de auditoria dos acessos a dados pessoais.
 Classificação: Sommerville – requisito de produto (segurança).

- RNF08 - Suportabilidade (Supportability): O sistema deve funcionar corretamente em Google Chrome (versão 90 ou superior), Mozilla Firefox (versão 88 ou superior) e Safari (versão 14 ou superior), além de ser compatível com Android (versão 10 ou superior) e iOS (versão 13 ou superior).
RNF09 - Suportabilidade (Supportability): Todas as funcionalidades devem ser operadas em telas a partir de 360 px de largura, sem rolagem horizontal, uma vez que o uso principal ocorre em celular durante o atendimento.

- RNF10 - Requisitos Físicos: O sistema deve executar as rotinas de chamada e cadastro sem travamentos ou encerramento inesperado em aparelhos com 2 GB de memória.

- RNF11 - Requisitos de Interface: A comunicação entre a interface e o serviço de dados deve ocorrer por meio de contrato documentado, com trocas realizadas em formato JSON sobre HTTPS.

- RNF12 - Restrições de Design: O projeto é conduzido sem orçamento e a associação não pode assumir custo de operação. A hospedagem e os serviços de apoio devem implicar custo mensal igual a zero para a associação.

- RNF13 - Requisito Externo Legislativo (LGPD): O tratamento de dados pessoais deve estar em conformidade com a Lei nº 13.709/2018, com registro de consentimento por titular, finalidade declarada para cada dado coletado e atendimento às solicitações de exclusão no prazo definido pela associação.

- RNF14 - Requisito Externo Legislativo (Direito de Imagem): A solução deve estar em conformidade com a legislação de proteção ao direito de imagem: Constituição Federal (art. 5º, X), Código Civil (art. 20) e, para crianças e adolescentes, Estatuto da Criança e do Adolescente (arts. 17 e 18). A conformidade é verificada pela existência de autorização registrada (RF41) para cada pessoa identificável nas imagens publicadas pela associação. 
