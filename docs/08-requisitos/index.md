# 8. Requisitos de Software

Esta seção descreve os requisitos necessários para o desenvolvimento do software, divididos em
requisitos funcionais e não funcionais, conforme a Atividade 1 (prazo 22/09, 12h) proposta pelo
professor George Marsicano Correa.

## 8.1 Lista de Requisitos Funcionais (RFs)

**CP1 – Portal institucional e agenda de atividades**

- RF01 – Publicar conteúdo institucional: Permitir a publicação das informações da associação, como histórico, missão, endereço e formas de contato, na área pública.

- RF02 – Atualizar conteúdo institucional: Permitir que a Coordenação altere o histórico, a missão, o endereço e as formas de contato publicados (os mesmos campos do RF01).

- RF03 – Cadastrar atividade na agenda: Permitir o cadastro de uma atividade com data, horário, local e público a que se destina.

- RF04 – Atualizar atividade na agenda: Permitir a alteração dos dados de uma atividade já divulgada, incluindo seu cancelamento.

- RF05 – Consultar agenda de atividades: Permitir a consulta pública às atividades divulgadas, com filtro por período e por tipo de atividade.

- RF06 – Registrar solicitação de contato: Permitir que o Visitante envie uma solicitação de contato a coordenação informando nome*, telefone ou e-mail* (ao menos um) e mensagem*. Registrando-a para atendimento posterior.

- RF07 – Consultar solicitações de contato: Permitir que a Coordenação consulte as solicitações registradas no RF06 e marque cada uma como atendida.


**CP2 – Registro de doações de itens**

- RF08 – Cadastrar ou atualizar doador: Permitir que Voluntário ou Coordenação cadastrem e, se necessário, corrijam os dados de pessoas e organizações que doam itens à associação..

- RF09 – Registrar doação recebida: Permitir que Voluntário ou Coordenação registrem a entrada de itens doados, com categoria de item, quantidade, data e doador de origem.

- RF10 – Registrar destinação de doação: Permitir que Voluntário ou Coordenação registrem a saída de itens doados, com categoria de item, quantidade, data e a família ou atividade que os recebeu.

- RF11 – Cadastrar categoria de item: Permitir o cadastro de categorias para classificar os itens doados, como alimentos, roupas, produtos de higiene e material escolar, informando o nome da categoria e a unidade de medida usada na contagem dos itens (unidade, quilo ou pacote). 

- RF12 – Permitir que Voluntário ou Coordenação consultem a quantidade atual de cada item doado, por categoria.

- RF13 – Publicar lista de itens necessários: Permitir que a Coordenação inclua e remova manualmente, na área pública, os itens de que a associação precisa no momento, com a categoria e, se quiser, a quantidade desejada.

**CP3 – Cadastro de famílias e participantes**

- RF14 – Cadastrar família: Permitir que Voluntário ou Coordenação cadastrem uma família atendida com nome do responsável familiar*, telefone*, endereço* (logradouro, complemento e cidade), número de moradores e observações. O sistema registra a data do cadastro e a situação "ativa". 

- RF15 – Atualizar ou inativar cadastro de família: Permitir que Voluntário ou Coordenação alterem os dados da família, e que a Coordenação a inative. A família inativa some das buscas padrão, mas o histórico de atendimento e os relatórios do período continuam.

- RF16 – Cadastrar participante: Permitir que Voluntário ou Coordenação cadastrem uma pessoa atendida com nome completo*, data de nascimento*, telefone e observações. O sistema registra a data do cadastro e a situação "ativo".

- RF17 – Atualizar ou inativar cadastro de participante: Permitir que Voluntário ou Coordenação alterem os dados do participante, e que a Coordenação o inative, mantendo o histórico. Ao inativar, as inscrições em turmas em andamento são canceladas com o motivo "desligamento da associação".

- RF18 – Vincular participante a família: Permitir que Voluntário ou Coordenação associem o participante à sua família e indiquem o responsável legal. Para menor de 18 anos o responsável legal é obrigatório; a exceção (ex.: criança em acolhimento) exige motivo registrado.

- RF19 – Consultar cadastro de participantes: Permitir que Voluntário ou Coordenação busquem participantes cadastrados por nome, família e atividade em que estão inscritos.

**CP4 – Inscrição em atividades e organização do atendimento**

- RF20 – Cadastrar turma de atividade: Permitir que a Coordenação cadastre uma turma com atividade*, período (data de início e de término, com término depois do início), dias de encontro (dias da semana e horário) e quantidade de vagas.

- RF21 – Atualizar turma de atividade: Permitir que a Coordenação altere período, dias de encontro e vagas de uma turma em andamento. Se as novas vagas forem menos que os inscritos, o sistema recusa e informa o total de inscritos. Se aumentarem e houver lista de espera, o sistema avisa (RF24).

- RF22 – Encerrar turma de atividade: Permitir que a Coordenação encerre uma turma, registrando a data. O encerramento antes do fim do período exige o motivo.

- RF23 – Inscrever participante em turma: Permitir que Voluntário ou Coordenação inscrevam um participante ativo em uma turma com vaga. Sem vaga, o sistema não inscreve e oferece o encaminhamento à lista de espera (RF24).

- RF24 – Cancelar inscrição de participante: Permitir que Voluntário ou Coordenação cancelem uma inscrição, com motivo obrigatório escolhido em lista: desistência, mudança de endereço, conflito de horário, desligamento da associação ou outro (texto livre obrigatório só nesse caso).

- RF25 – Registrar participante em lista de espera: Permitir que Voluntário ou Coordenação registrem o participante em lista de espera quando a turma não tiver vaga. A ordem é a de registro. Quando abrir vaga, o sistema avisa a Coordenação, que confirma a inscrição manualmente (RF23).

- RF26 – Consultar inscritos da turma: Permitir que Voluntário ou Coordenação consultem os inscritos e os participantes em espera de cada turma, esses na ordem da lista.

**CP5 – Chamada digital e controle de frequência**

- RF27 – Abrir chamada do encontro: Permitir que Voluntário ou Coordenação abram a chamada de um encontro de turma, na data do encontro, listando os participantes inscritos.

- RF28 – Registrar frequência do participante: Permitir que Voluntário ou Coordenação registrem, para cada participante listado em uma chamada aberta, se esteve presente ou ausente.

- RF29 – Justificar falta: Permitir que Voluntário ou Coordenação informem o motivo de uma falta já registrada, que passa a constar como falta justificada.

- RF30 – Corrigir registro de frequência: Permitir que o Voluntário que fez a chamada corrija um registro até o fim do mesmo dia, e que a Coordenação corrija a qualquer momento, informando o motivo. O registro anterior é preservado.

- RF31 – Consultar frequência do participante: Permitir que Voluntário ou Coordenação consultem o histórico de presenças e faltas de um participante por turma e por período.

- RF32 – Sinalizar participante com faltas acima do limite: Permitir que o sistema sinalize automaticamente o participante que atingir o limite de faltas não justificadas definido pela Coordenação. A sinalização aparece na seção "Participantes sinalizados" do painel (RF37), com nome, turma e telefone da família.

**CP6 – Relatórios e indicadores de impacto**

- RF33 – Gerar relatório de doações recebidas: Permitir que a Coordenação gere relatório dos itens recebidos por período, categoria e doador.

- RF34 – Gerar relatório de doações distribuídas: Permitir que a Coordenação gere relatório dos itens destinados por período, categoria e família atendida.

- RF35 – Gerar relatório de frequência por turma: Permitir que a Coordenação gere o relatório de presenças e faltas de uma turma por período, ou de um encontro específico.

- RF36 – Gerar relatório de famílias atendidas: Permitir que a Coordenação gere relatório das famílias com atendimento registrado no período consultado.

- RF37 –  Consultar painel de indicadores: Permitir que a Coordenação consulte os indicadores de atendimento da associação, como famílias atendidas, participantes ativos, itens recebidos e itens distribuídos no período, incluindo a seção de participantes sinalizados (RF32).

- RF38 – Exportar relatório gerado: Permitir que a Coordenação exporte um relatório gerado em PDF (envio a apoiadores e prestação de contas) ou CSV (planilha).

**CP7 – Perfis de acesso e proteção de dados**

- RF39 – Cadastrar usuário do sistema: Permitir que a Coordenação cadastre Voluntários e outros membros da Coordenação. A primeira conta de Coordenação é criada pela equipe de desenvolvimento na implantação.

- RF40 – Atribuir perfil de acesso ao usuário: Permitir que a Coordenação atribua a cada usuário o perfil Voluntário ou Coordenação, conforme a tabela de permissões (seção 8.3).

- RF41 – Autenticar usuário: Permitir que Voluntário ou Coordenação acessem a área restrita mediante autenticação do usuário cadastrado.

- RF42 – Registrar consentimento de tratamento de dados pessoais: Permitir que Voluntário ou Coordenação registrem o consentimento do titular, ou do responsável legal, para cada finalidade: cadastro e atendimento, registro de frequência, contato com a família e relatórios a apoiadores. Cada consentimento leva a data do registro.

- RF43 – Registrar autorização de uso de imagem: Permitir que Voluntário ou Coordenação registrem a autorização ou a recusa do titular, ou de seu responsável legal, para o uso de sua imagem em materiais de divulgação da associação, indicando os meios autorizados (site, redes sociais, materiais impressos) e a eventual revogação.

- RF44 – Registrar e acompanhar solicitação de exclusão de dados: Permitir que a Coordenação registre a solicitação do titular e acompanhe as etapas: recebida, em análise, atendida ou negada com justificativa. Cada etapa guarda a data, e a resposta guarda a data em que o titular foi avisado.

- RF45 – Consultar histórico de alterações de cadastro: Permitir que a Coordenação consulte quem alterou dados pessoais ou registros de frequência, o que foi alterado e quando.

- RF46 - Consultar autorização de uso de imagem vigente: Permitir que Voluntário ou Coordenação consultem, por titular, a autorização em vigor para cada meio (site, redes sociais, material impresso) e se ela foi revogada, antes de divulgar a imagem.



## 8.2 Lista de Requisitos Não Funcionais (RNFs)

- RNF01 - Usabilidade (Usability): A solução deve ser operável por voluntárias e voluntários sem formação técnica. O registro de uma doação recebida e a conclusão de uma chamada devem ser alcançáveis em até três passos a partir da tela inicial da área restrita, sem apoio de terceiros.

- RNF02 - Usabilidade (Usability): A solução deve ser acompanhada de guia de uso em linguagem simples, cobrindo as rotinas de doação, cadastro, inscrição e chamada, validado pela coordenação da associação antes da entrega final.

- RNF03 - Desempenho (Performance): As telas de consulta devem apresentar resultados em até 3 segundos para 95% das requisições, em conexão móvel 3G/4G.
  
- RNF04 - Desempenho (Performance): O sistema deve suportar 30 acessos simultâneos nos dias de maior movimento, como distribuição de itens e início de turmas, mantendo o tempo de resposta definido no RNF03.

- RNF05 - Confiabilidade (Reliability): Em caso de falha, o sistema deve ser restaurado em até 4 horas, com perda máxima de 24 horas de dados, a partir de cópia de segurança diária automatizada pela infraestrutura (Supabase).

- RNF06 - Confiabilidade (Reliability): O sistema deve apresentar disponibilidade mensal de 99% no intervalo de 8h às 18h, período em que a associação recebe e atende o público.

- RNF07 - Segurança (Security): Os dados pessoais das famílias e dos participantes devem trafegar cifrados, ser acessíveis somente conforme o perfil do usuário e ter as credenciais armazenadas de forma irreversível. O sistema deve manter trilha dos acessos a dados pessoais. Classificação: Sommerville – requisito de produto (segurança).

- RNF08 - Suportabilidade (Supportability): O sistema deve funcionar corretamente em Google Chrome (versão 90 ou superior), Mozilla Firefox (versão 88 ou superior), Safari (versão 14 ou superior), Android (versão 10 ou superior) e iOS (versão 14 ou superior). “Funcionar corretamente” significa concluir os fluxos principais de registrar doação, cadastrar família, inscrever participante, realizar chamada e consultar agenda sem erros e sem elementos cortados ou inoperantes.
  
- RNF09 - Usabilidade (Usability): Todas as funcionalidades devem ser operadas em telas a partir de 360 px de largura, sem rolagem horizontal, uma vez que o uso principal ocorre em celular durante o atendimento.

- RNF10 - Desempenho (Performance): O sistema deve executar as rotinas de chamada e cadastro em aparelhos com 2 GB de memória sem exceder a memória disponível. A conformidade é verificada pela execução de 10 chamadas seguidas nesse aparelho, sem travamentos ou encerramento inesperado.
    
- RNF11 - Requisitos de Interface: A comunicação entre a interface e o serviço de dados deve ocorrer por meio de contrato documentado, com trocas realizadas em formato JSON sobre HTTPS.

- RNF12 - Requisito Organizacional: O projeto é conduzido sem orçamento e a associação não pode assumir custo de operação. A hospedagem e os serviços de apoio devem implicar custo mensal igual a zero para a associação. O custo mensal de R$ 0,00 é conferido no fim de cada sprint.
  
- RNF13 - Requisito Externo Legislativo (LGPD): O tratamento de dados pessoais deve estar em conformidade com a Lei nº 13.709/2018, com registro de consentimento por titular, finalidade declarada para cada dado coletado e atendimento às solicitações de exclusão no prazo definido pela associação.

- RNF14 - Requisito Externo Legislativo (Direito de Imagem): A solução deve estar em conformidade com a legislação de proteção ao direito de imagem: Constituição Federal (art. 5º, X), Código Civil (art. 20) e, para crianças e adolescentes, Estatuto da Criança e do Adolescente (arts. 17 e 18). A conformidade é verificada pela existência de autorização registrada (RF41) para cada pessoa identificável nas imagens publicadas pela associação. 
