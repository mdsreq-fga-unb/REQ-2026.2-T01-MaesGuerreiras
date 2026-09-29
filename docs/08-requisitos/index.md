# 8. Requisitos de Software

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

- RNF15 - Segurança (acesso e sessão): O acesso à área restrita deve exigir senha de pelo menos 8 caracteres, encerrar a sessão após 30 minutos sem atividade e bloquear novas tentativas de autenticação por 15 minutos após 5 tentativas consecutivas incorretas. A verificação deve testar a rejeição de senhas mais curtas, a expiração da sessão e o bloqueio na quinta tentativa. Os valores definidos para senha, sessão e bloqueio são preliminares e devem ser validados pela equipe.

- RNF16 - Confiabilidade (conexão instável): Se a conexão cair durante uma chamada ou um cadastro, os dados já preenchidos não devem ser perdidos e devem ser enviados quando a conexão for restabelecida. A verificação deve interromper a conexão por 5 minutos durante cada uma dessas rotinas e confirmar que nenhum registro preenchido foi perdido nem duplicado após a reconexão.

- RNF17 – Requisito de Manutenibilidade : O código deve ficar versionado no GitHub, com README que explique como instalar e rodar, e com testes automatizados para as regras de doação, inscrição e frequência, para que outra pessoa dê continuidade. Alguém de fora da equipe roda o projeto só com o README em até 1 hora. Os testes passam a cada entrega.

- RNF18 – Requisito de Acessibilidade : As telas principais (chamada, cadastro, doação e agenda pública) devem atender à WCAG 2.1, nível AA. Auditoria automática (Lighthouse ou axe) sem violação crítica, mais checklist manual: contraste mínimo 4,5:1, navegação por teclado e rótulo em todo campo.

- RNF19 – Requisito de Segurança : Toda alteração em dados pessoais, em frequência (inclusive RF29) e em registros de doação guarda autor, data, hora, valor anterior e valor novo por, no mínimo, 12 meses (prazo a validar). Uma alteração de teste em cada tipo de dado aparece no histórico do RF44.


## 8.3 Glossário

| Termo | Definição |
| --- | --- |
| Atividade | Oficina ou evento oferecido pela associação, como crochê, bordado, Carimbó ou Domingo Criativo. É o mesmo termo na agenda (RF03) e nas turmas (RF19). |
| Turma | Grupo de participantes que faz uma atividade durante um período, com dias de encontro e quantidade de vagas. |
| Encontro | Cada dia em que a turma se reúne. |
| Chamada | Registro de quem veio e de quem faltou em um encontro. |
| Inscrição | Vínculo de um participante ativo com uma turma. |
| Lista de espera | Fila de participantes que aguardam vaga em uma turma cheia, na ordem em que foram registrados. |
| Frequência | Conjunto de presenças e faltas de um participante. |
| Falta justificada | Falta em que foi informado o motivo. Ela não conta para o limite de faltas do RF31. |
| Categoria de item | Grupo de itens doados, como alimentos, roupas, higiene e material escolar, com sua unidade de medida (RF10). |
| Doação recebida | Entrada de itens na associação, vinda de um doador. |
| Destinação | Saída de itens doados para uma família ou atividade. |
| Saldo | Quantidade atual de uma categoria: o que entrou menos o que saiu. |
| Família | Grupo atendido pela associação, com um responsável familiar. |
| Participante | Pessoa atendida que faz atividades, ligada a uma família. |
| Responsável legal | Pessoa que responde por um participante menor de 18 anos, como pais ou tutor. |
| Titular | Pessoa a quem os dados pessoais pertencem (termo da LGPD). |
| Consentimento | Autorização do titular, ou do responsável legal, para usar seus dados em uma finalidade específica. |
| Autorização de uso de imagem | Permissão, separada por meio (site, redes sociais, impresso), para divulgar a imagem da pessoa. |
| Solicitação de contato | Mensagem enviada por um Visitante pela área pública. |
| Sinalização | Aviso automático de que um participante passou do limite de faltas não justificadas. |
| Perfil de acesso | Conjunto de permissões de um usuário: Voluntário ou Coordenação. |
| Visitante | Quem usa a área pública sem fazer login. |

## 8.4 Perfis, agentes e rastreabilidade

Há três agentes: o Visitante (sem login), o Voluntário e a Coordenação (ambos com login). A divisão abaixo é uma proposta e precisa da confirmação da Daiane.

### Permissões por perfil

| Área (RFs) | Visitante | Voluntário | Coordenação |
| --- | --- | --- | --- |
| Conteúdo institucional e agenda (RF01 a RF05) | Consulta agenda e conteúdo público | Consulta | Publica e atualiza |
| Contato (RF06, RF07) | Envia solicitação | Sem acesso | Consulta e marca como atendida |
| Doações (RF08 a RF10, RF12) | Sem acesso | Registra e consulta | Registra e consulta |
| Categorias e lista de itens necessários (RF11, RF13) | Vê a lista pública | Sem acesso | Cadastra e publica |
| Famílias e participantes (RF14 a RF19) | Sem acesso | Cadastra, atualiza e consulta | Tudo do Voluntário, mais inativar |
| Turmas (RF20 a RF22) | Sem acesso | Sem acesso | Cadastra, atualiza e encerra |
| Inscrições e espera (RF23 a RF26) | Sem acesso | Sim | Sim |
| Chamada e frequência (RF27 a RF29, RF31) | Sem acesso | Sim | Sim |
| Corrigir frequência (RF30) | Sem acesso | Só as suas, até o fim do dia | Qualquer uma, com motivo |
| Sinalização, relatórios e painel (RF32 a RF38) | Sem acesso | Sem acesso | Sim |
| Usuários e perfis (RF39 a RF41) | Sem acesso | Sem acesso | Cadastra, atribui perfil e acessa |
| Consentimento e imagem (RF42, RF43, RF46) | Sem acesso | Registra e consulta | Registra e consulta |
| Exclusão de dados e histórico (RF44, RF45) | Sem acesso | Sem acesso | Sim |

### Matriz de rastreabilidade

CP é a característica de produto de cada RF. Valem para todos os RFs: RNF05, RNF06, RNF08, RNF09, RNF11, RNF12, RNF17 e RNF18. A coluna de RNFs lista só os que se aplicam de forma específica.

| RF | CP | Agente | RNFs específicos |
| --- | --- | --- | --- |
| RF01 | CP1 | Coordenação | |
| RF02 | CP1 | Coordenação | |
| RF03 | CP1 | Coordenação | |
| RF04 | CP1 | Coordenação | |
| RF05 | CP1 | Visitante | RNF03 |
| RF06 | CP1 | Visitante | RNF13 |
| RF07 | CP1 | Coordenação | RNF07, RNF13 |
| RF08 | CP2 | Voluntário, Coordenação | RNF01 |
| RF09 | CP2 | Voluntário, Coordenação | RNF01, RNF19 |
| RF10 | CP2 | Voluntário, Coordenação | RNF19 |
| RF11 | CP2 | Coordenação | |
| RF12 | CP2 | Voluntário, Coordenação | RNF03 |
| RF13 | CP2 | Coordenação | RNF03 |
| RF14 | CP3 | Voluntário, Coordenação | RNF07, RNF13, RNF16, RNF19 |
| RF15 | CP3 | Voluntário, Coordenação | RNF07, RNF13, RNF19 |
| RF16 | CP3 | Voluntário, Coordenação | RNF07, RNF13, RNF16, RNF19 |
| RF17 | CP3 | Voluntário, Coordenação | RNF07, RNF13, RNF19 |
| RF18 | CP3 | Voluntário, Coordenação | RNF07, RNF13 |
| RF19 | CP3 | Voluntário, Coordenação | RNF03, RNF07 |
| RF20 | CP4 | Coordenação | |
| RF21 | CP4 | Coordenação | |
| RF22 | CP4 | Coordenação | |
| RF23 | CP4 | Voluntário, Coordenação | |
| RF24 | CP4 | Voluntário, Coordenação | |
| RF25 | CP4 | Voluntário, Coordenação | |
| RF26 | CP4 | Voluntário, Coordenação | RNF03, RNF07 |
| RF27 | CP5 | Voluntário, Coordenação | RNF01, RNF10, RNF16 |
| RF28 | CP5 | Voluntário, Coordenação | RNF01, RNF10, RNF16 |
| RF29 | CP5 | Voluntário, Coordenação | RNF01, RNF16 |
| RF30 | CP5 | Voluntário (mesmo dia), Coordenação | RNF19 |
| RF31 | CP5 | Voluntário, Coordenação | RNF03, RNF07 |
| RF32 | CP5 | Sistema, vista pela Coordenação | RNF07 |
| RF33 | CP6 | Coordenação | RNF03 |
| RF34 | CP6 | Coordenação | RNF03, RNF07 |
| RF35 | CP6 | Coordenação | RNF03, RNF07 |
| RF36 | CP6 | Coordenação | RNF03, RNF07 |
| RF37 | CP6 | Coordenação | RNF03 |
| RF38 | CP6 | Coordenação | RNF03 |
| RF39 | CP7 | Coordenação | RNF07, RNF15 |
| RF40 | CP7 | Coordenação | RNF07 |
| RF41 | CP7 | Voluntário, Coordenação | RNF07, RNF15 |
| RF42 | CP7 | Voluntário, Coordenação | RNF13 |
| RF43 | CP7 | Voluntário, Coordenação | RNF14 |
| RF44 | CP7 | Coordenação | RNF13 |
| RF45 | CP7 | Coordenação | RNF07, RNF19 |
| RF46 | CP7 | Voluntário, Coordenação | RNF14 |

## 8.5 Matriz 4x4

| Valor de negócio ↓ / Esforço técnico → | 1 — Baixo | 2 — Moderado | 3 — Alto | 4 — Muito alto |
|---|---|---|---|---|
| **4 — Muito alto** | — | RF25 | RF07, RF08, RF09, RF10, RF11, RF12, RF13, RF14, RF15, RF16, RF17, RF18, RF19, RF20, RF21, RF22, RF23, RF24, RF26, RF27, RF28, RF29, RF30, RF31, RF38, RF39, RF40 | — |
| **3 — Alto** | — | — | RF41, RF42, RF43, RF44, RF46 | — |
| **2 — Moderado** | — | — | RF01, RF02, RF03, RF04, RF05, RF06, RF45 | RF32, RF33, RF34, RF35, RF36, RF37 |
| **1 — Baixo** | — | — | — | — |