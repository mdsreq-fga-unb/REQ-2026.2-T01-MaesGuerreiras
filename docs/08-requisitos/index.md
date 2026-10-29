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

- RF08 – Cadastrar ou atualizar doador: Permitir que Voluntário ou Coordenação cadastrem e, se necessário, corrijam os dados de pessoas e organizações que doam itens à associação.

- RF09 – Registrar doação recebida: Permitir que Voluntário ou Coordenação registrem a entrada de itens doados, com categoria de item, quantidade, data e doador de origem.

- RF10 – Registrar destinação de doação: Permitir que Voluntário ou Coordenação registrem a saída de itens doados, com categoria de item, quantidade, data e a família ou atividade que os recebeu.

- RF11 – Cadastrar categoria de item: Permitir o cadastro de categorias para classificar os itens doados, como alimentos, roupas, produtos de higiene e material escolar, informando o nome da categoria e a unidade de medida usada na contagem dos itens (unidade, quilo ou pacote). 

- RF12 – Consultar saldo de itens doados: Permitir que Voluntário ou Coordenação consultem a quantidade atual de cada item doado, por categoria.

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

- RF21 – Atualizar turma de atividade: Permitir que a Coordenação altere período, dias de encontro e vagas de uma turma em andamento. Se as novas vagas forem menos que os inscritos, o sistema recusa e informa o total de inscritos. Se aumentarem e houver lista de espera, o sistema avisa (RF25).

- RF22 – Encerrar turma de atividade: Permitir que a Coordenação encerre uma turma, registrando a data. O encerramento antes do fim do período exige o motivo.

- RF23 – Inscrever participante em turma: Permitir que Voluntário ou Coordenação inscrevam um participante ativo em uma turma com vaga. Sem vaga, o sistema não inscreve e oferece o encaminhamento à lista de espera (RF25).

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

- RF40 – Atribuir perfil de acesso ao usuário: Permitir que a Coordenação atribua a cada usuário o perfil Voluntário ou Coordenação, conforme a tabela de permissões (seção 8.4).

- RF41 – Autenticar usuário: Permitir que Voluntário ou Coordenação acessem a área restrita mediante autenticação do usuário cadastrado.

- RF42 – Registrar consentimentos e autorizações (LGPD e Imagem): Permitir que Voluntário ou Coordenação registrem, em um único fluxo, o consentimento do titular, ou do responsável legal, para cada finalidade de tratamento de dados pessoais (cadastro e atendimento, registro de frequência, contato com a família e relatórios a apoiadores) e a autorização ou recusa de uso de imagem em materiais de divulgação da associação, indicando os meios autorizados (site, redes sociais, materiais impressos) e a eventual revogação. Cada consentimento e autorização leva a data do registro.

- RF43 – Registrar e acompanhar solicitação de exclusão de dados: Permitir que a Coordenação registre a solicitação do titular e acompanhe as etapas: recebida, em análise, atendida ou negada com justificativa. Cada etapa guarda a data, e a resposta guarda a data em que o titular foi avisado.

- RF44 – Consultar histórico de alterações de cadastro: Permitir que a Coordenação consulte quem alterou dados pessoais ou registros de frequência, o que foi alterado e quando.

- RF45 – Consultar autorização de uso de imagem vigente: Permitir que Voluntário ou Coordenação consultem, por titular, a autorização em vigor para cada meio (site, redes sociais, material impresso) e se ela foi revogada, antes de divulgar a imagem.



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

- RNF14 - Requisito Externo Legislativo (Direito de Imagem): A solução deve estar em conformidade com a legislação de proteção ao direito de imagem: Constituição Federal (art. 5º, X), Código Civil (art. 20) e, para crianças e adolescentes, Estatuto da Criança e do Adolescente (arts. 17 e 18). A conformidade é verificada pela existência de autorização registrada (RF42) para cada pessoa identificável nas imagens publicadas pela associação. 

- RNF15 - Segurança (acesso e sessão): O acesso à área restrita deve exigir senha de pelo menos 8 caracteres, encerrar a sessão após 30 minutos sem atividade e bloquear novas tentativas de autenticação por 15 minutos após 5 tentativas consecutivas incorretas. A verificação deve testar a rejeição de senhas mais curtas, a expiração da sessão e o bloqueio na quinta tentativa. Os valores definidos para senha, sessão e bloqueio são preliminares e devem ser validados pela equipe.

- RNF16 - Confiabilidade (conexão instável): Se a conexão cair durante uma chamada ou um cadastro, os dados já preenchidos não devem ser perdidos e devem ser enviados quando a conexão for restabelecida. A verificação deve interromper a conexão por 5 minutos durante cada uma dessas rotinas e confirmar que nenhum registro preenchido foi perdido nem duplicado após a reconexão.

- RNF17 – Requisito de Manutenibilidade : O código deve ficar versionado no GitHub, com README que explique como instalar e rodar, e com testes automatizados para as regras de doação, inscrição e frequência, para que outra pessoa dê continuidade. Alguém de fora da equipe roda o projeto só com o README em até 1 hora. Os testes passam a cada entrega.

- RNF18 – Requisito de Acessibilidade : As telas principais (chamada, cadastro, doação e agenda pública) devem atender à WCAG 2.1, nível AA. Auditoria automática (Lighthouse ou axe) sem violação crítica, mais checklist manual: contraste mínimo 4,5:1, navegação por teclado e rótulo em todo campo.

- RNF19 – Requisito de Segurança: Toda alteração em dados pessoais, em frequência (inclusive justificativa de falta, RF29, e correção de chamada, RF30) e em registros de doação guarda autor, data, hora, valor anterior e valor novo por, no mínimo, 12 meses (prazo a validar). Uma alteração de teste em cada tipo de dado aparece no histórico do 44.

## 8.3 Glossário

| Termo | Definição |
| --- | --- |
| Atividade | Oficina ou evento oferecido pela associação, como crochê, bordado, Carimbó ou Domingo Criativo. É o mesmo termo na agenda (RF03) e nas turmas (RF20). |
| Turma | Grupo de participantes que faz uma atividade durante um período, com dias de encontro e quantidade de vagas. |
| Encontro | Cada dia em que a turma se reúne. |
| Chamada | Registro de quem veio e de quem faltou em um encontro. |
| Inscrição | Vínculo de um participante ativo com uma turma. |
| Lista de espera | Fila de participantes que aguardam vaga em uma turma cheia, na ordem em que foram registrados. |
| Frequência | Conjunto de presenças e faltas de um participante. |
| Falta justificada | Falta em que foi informado o motivo. Ela não conta para o limite de faltas do RF32. |
| Categoria de item | Grupo de itens doados, como alimentos, roupas, higiene e material escolar, com sua unidade de medida (RF11). |
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
| Consentimento e imagem (RF42, RF45) | Sem acesso | Registra e consulta | Registra e consulta |
| Exclusão de dados e histórico (RF43, RF44) | Sem acesso | Sem acesso | Sim |

### Matriz de rastreabilidade

CP é a característica de produto de cada RF. Valem para todos os RFs: RNF02, RNF04, RNF05, RNF06, RNF08, RNF09, RNF11, RNF12, RNF17 e RNF18. A coluna de RNFs lista só os que se aplicam de forma específica.

| RF | CP | Agente | RNFs específicos |
| --- | --- | --- | --- |
| RF01 | CP1 | Coordenação | |
| RF02 | CP1 | Coordenação | |
| RF03 | CP1 | Coordenação | |
| RF04 | CP1 | Coordenação | |
| RF05 | CP1 | Visitante | RNF03 |
| RF06 | CP1 | Visitante | RNF13 |
| RF07 | CP1 | Coordenação | RNF07, RNF13 |
| RF08 | CP2 | Voluntário, Coordenação | RNF01, RNF19 |
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
| RF42 | CP7 | Voluntário, Coordenação | RNF13, RNF14 |
| RF43 | CP7 | Coordenação | RNF13 |
| RF44 | CP7 | Coordenação | RNF07, RNF19 |
| RF45 | CP7 | Voluntário, Coordenação | RNF14 |

## 8.5 Matriz 4x4

<div class="matriz" markdown="0">
<table>
<thead>
<tr><th>Valor de negócio ↓ / Esforço técnico →</th><th>1 — Baixo</th><th>2 — Moderado</th><th>3 — Alto</th><th>4 — Muito alto</th></tr>
</thead>
<tbody>
<tr>
<th>4 — Muito alto</th>
<td><div class="chips"><span class="rf mvp">RF11</span><span class="rf mvp">RF20</span><span class="rf mvp">RF28</span><span class="rf mvp">RF39</span></div></td>
<td><div class="chips"><span class="rf mvp">RF08</span><span class="rf mvp">RF09</span><span class="rf mvp">RF10</span><span class="rf mvp">RF14</span><span class="rf mvp">RF16</span><span class="rf mvp">RF18</span><span class="rf mvp">RF19</span><span class="rf mvp">RF23</span><span class="rf mvp">RF27</span><span class="rf mvp">RF40</span><span class="rf mvp">RF41</span><span class="rf mvp">RF42</span></div></td>
<td class="vazio">—</td>
<td class="vazio">—</td>
</tr>
<tr>
<th>3 — Alto</th>
<td><div class="chips"><span class="rf">RF29</span><span class="rf">RF30</span><span class="rf">RF31</span></div></td>
<td><div class="chips"><span class="rf mvp">RF12</span><span class="rf">RF13</span><span class="rf">RF24</span><span class="rf">RF25</span><span class="rf mvp">RF26</span><span class="rf">RF32</span><span class="rf">RF33</span><span class="rf">RF34</span><span class="rf">RF36</span><span class="rf">RF38</span><span class="rf">RF43</span><span class="rf">RF45</span></div></td>
<td><div class="chips"><span class="rf">RF15</span><span class="rf">RF17</span></div></td>
<td class="vazio">—</td>
</tr>
<tr>
<th>2 — Moderado</th>
<td><div class="chips"><span class="rf">RF02</span><span class="rf">RF22</span></div></td>
<td><div class="chips"><span class="rf">RF01</span><span class="rf">RF03</span><span class="rf">RF04</span><span class="rf">RF35</span><span class="rf">RF37</span><span class="rf">RF44</span></div></td>
<td><div class="chips"><span class="rf">RF05</span><span class="rf">RF21</span></div></td>
<td class="vazio">—</td>
</tr>
<tr>
<th>1 — Baixo</th>
<td class="vazio">—</td>
<td><div class="chips"><span class="rf">RF06</span><span class="rf">RF07</span></div></td>
<td class="vazio">—</td>
<td class="vazio">—</td>
</tr>
</tbody>
</table>
</div>

<p class="matriz-legenda"><span class="rf mvp">RF20</span> selecionado para o MVP (18 RFs) · <span class="rf">RF21</span> fora do núcleo, para a Fatia 2 ou entregas futuras.</p>

Notas de cada RF (esforço em horas, complexidade e lacuna de capacidade, de 1 a 4). O esforço técnico consolidado é a média das três notas, com uma casa decimal, e a coluna da matriz é esse valor arredondado para o inteiro mais próximo.

| RF | Requisito | Esforço | Complexidade | Lacuna | Consolidado | Coluna | Valor | MVP |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| RF01 | Publicar conteúdo institucional | 2 | 2 | 2 | 2,0 | 2 | 2 | — |
| RF02 | Atualizar conteúdo institucional | 1 | 1 | 1 | 1,0 | 1 | 2 | — |
| RF03 | Cadastrar atividade na agenda | 3 | 2 | 2 | 2,3 | 2 | 2 | — |
| RF04 | Atualizar atividade na agenda | 2 | 2 | 2 | 2,0 | 2 | 2 | — |
| RF05 | Consultar agenda de atividades | 3 | 2 | 3 | 2,7 | 3 | 2 | — |
| RF06 | Registrar solicitação de contato | 2 | 3 | 2 | 2,3 | 2 | 1 | — |
| RF07 | Consultar solicitações de contato | 2 | 2 | 1 | 1,7 | 2 | 1 | — |
| RF08 | Cadastrar ou atualizar doador | 2 | 3 | 1 | 2,0 | 2 | 4 | Sim |
| RF09 | Registrar doação recebida | 2 | 2 | 2 | 2,0 | 2 | 4 | Sim |
| RF10 | Registrar destinação de doação | 2 | 3 | 2 | 2,3 | 2 | 4 | Sim |
| RF11 | Cadastrar categoria de item | 1 | 1 | 1 | 1,0 | 1 | 4 | Sim |
| RF12 | Consultar saldo de itens doados | 1 | 2 | 2 | 1,7 | 2 | 3 | Sim |
| RF13 | Publicar lista de itens necessários | 2 | 1 | 2 | 1,7 | 2 | 3 | — |
| RF14 | Cadastrar família | 3 | 2 | 2 | 2,3 | 2 | 4 | Sim |
| RF15 | Atualizar ou inativar cadastro de família | 3 | 3 | 2 | 2,7 | 3 | 3 | — |
| RF16 | Cadastrar participante | 2 | 2 | 2 | 2,0 | 2 | 4 | Sim |
| RF17 | Atualizar ou inativar cadastro de participante | 3 | 3 | 3 | 3,0 | 3 | 3 | — |
| RF18 | Vincular participante a família | 2 | 2 | 2 | 2,0 | 2 | 4 | Sim |
| RF19 | Consultar cadastro de participantes | 2 | 2 | 2 | 2,0 | 2 | 4 | Sim |
| RF20 | Cadastrar turma de atividade | 2 | 1 | 1 | 1,3 | 1 | 4 | Sim |
| RF21 | Atualizar turma de atividade | 3 | 3 | 2 | 2,7 | 3 | 2 | — |
| RF22 | Encerrar turma de atividade | 2 | 1 | 1 | 1,3 | 1 | 2 | — |
| RF23 | Inscrever participante em turma | 2 | 2 | 2 | 2,0 | 2 | 4 | Sim |
| RF24 | Cancelar inscrição de participante | 2 | 2 | 1 | 1,7 | 2 | 3 | — |
| RF25 | Registrar participante em lista de espera | 3 | 2 | 2 | 2,3 | 2 | 3 | — |
| RF26 | Consultar inscritos da turma | 2 | 2 | 1 | 1,7 | 2 | 3 | Sim |
| RF27 | Abrir chamada do encontro | 2 | 2 | 2 | 2,0 | 2 | 4 | Sim |
| RF28 | Registrar frequência do participante | 1 | 1 | 1 | 1,0 | 1 | 4 | Sim |
| RF29 | Justificar falta | 1 | 1 | 1 | 1,0 | 1 | 3 | — |
| RF30 | Corrigir registro de frequência | 1 | 1 | 1 | 1,0 | 1 | 3 | — |
| RF31 | Consultar frequência do participante | 2 | 1 | 1 | 1,3 | 1 | 3 | — |
| RF32 | Sinalizar participante com faltas acima do limite | 2 | 2 | 1 | 1,7 | 2 | 3 | — |
| RF33 | Gerar relatório de doações recebidas | 3 | 2 | 2 | 2,3 | 2 | 3 | — |
| RF34 | Gerar relatório de doações distribuídas | 3 | 2 | 2 | 2,3 | 2 | 3 | — |
| RF35 | Gerar relatório de frequência por turma | 3 | 2 | 2 | 2,3 | 2 | 2 | — |
| RF36 | Gerar relatório de famílias atendidas | 3 | 2 | 2 | 2,3 | 2 | 3 | — |
| RF37 | Consultar painel de indicadores | 3 | 2 | 2 | 2,3 | 2 | 2 | — |
| RF38 | Exportar relatório gerado | 2 | 2 | 1 | 1,7 | 2 | 3 | — |
| RF39 | Cadastrar usuário do sistema | 2 | 1 | 1 | 1,3 | 1 | 4 | Sim |
| RF40 | Atribuir perfil de acesso ao usuário | 2 | 2 | 2 | 2,0 | 2 | 4 | Sim |
| RF41 | Autenticar usuário | 3 | 3 | 1 | 2,3 | 2 | 4 | Sim |
| RF42 | Registrar consentimentos e autorizações (LGPD e Imagem) | 2 | 2 | 2 | 2,0 | 2 | 4 | Sim |
| RF43 | Registrar e acompanhar solicitação de exclusão de dados | 3 | 2 | 2 | 2,3 | 2 | 3 | — |
| RF44 | Consultar histórico de alterações de cadastro | 3 | 2 | 2 | 2,3 | 2 | 2 | — |
| RF45 | Consultar autorização de uso de imagem vigente | 2 | 2 | 2 | 2,0 | 2 | 3 | — |

A capacidade da equipe veio da autoavaliação de domínio técnico de cada integrante (1 = domina, 4 = nunca usou), que embasou a nota de lacuna. As áreas com maior lacuna são as de requisitos não funcionais: funcionamento com conexão instável (RNF16, média 2,8), testes automatizados (RNF17, 2,5), acessibilidade (RNF18, 2,5) e hospedagem na Vercel (RNF12, 2,5). Por isso o trabalho dos RNFs entra na conta do MVP, avaliado nas mesmas escalas. O RNF15 (login, expiração de sessão e bloqueio por tentativas) já está contado na nota do RF41.

| RNF | Trabalho | Esforço | Complexidade | Lacuna | Consolidado |
| :--- | :--- | :---: | :---: | :---: | :---: |
| RNF12 | Hospedagem sem custo (Vercel) | 1 | 1 | 3 | 1,7 |
| RNF16 | Funcionamento com conexão instável (não perder dados de chamada e cadastro) | 3 | 3 | 3 | 3,0 |
| RNF17 | Testes automatizados das regras de doação, inscrição e frequência | 3 | 2 | 3 | 2,7 |
| RNF18 | Acessibilidade (contraste, navegação por teclado e rótulos de campo) | 2 | 2 | 3 | 2,3 |

Somando as faixas de horas da escala de esforço, os 18 RFs do MVP somam entre 38 e 108 horas (3 RFs de até 2 horas, 13 de 2 a 6 horas e 2 de 6 a 12 horas), e os quatro RNFs somam entre 14 e 32 horas, num total de 52 a 140 horas. Com 6 integrantes e 3 sprints (5 a 7), isso equivale a cerca de 3 a 8 horas por pessoa por sprint, valor reconferido no planejamento de cada sprint (seção 5.3).

### 8.5.1 Leitura dos quadrantes

| Quadrante | Requisitos | Encaminhamento |
| :--- | :--- | :--- |
| **Prioridade máxima** (valor 4 · esforço 1) | RF11, RF20, RF28, RF39 | Todos entraram no MVP. |
| **Forte candidato ao MVP** (valor 4 · esforço 2, e valor 3 · esforço 1) | RF08, RF09, RF10, RF14, RF16, RF18, RF19, RF23, RF27, RF40, RF41, RF42 (valor 4); RF29, RF30, RF31 (valor 3) | Os 12 RFs de valor 4 entraram no MVP. RF29, RF30 e RF31 (frequência) ficaram para depois dele, com procedimento provisório (ver abaixo). |
| **Candidato ao MVP** (valor 3 · esforço 2) | RF12, RF13, RF24, RF25, RF26, RF32, RF33, RF34, RF36, RF38, RF43, RF45 | RF12 e RF26 entraram no MVP, por serem consultas de baixo esforço dos fluxos de doação e de inscrição. Os demais ficaram para depois (ver abaixo). |
| **Avaliar contexto** (valor 3 · esforço 3) | RF15, RF17 | Ficaram fora do MVP; a correção de telefone e endereço segue o procedimento provisório (ver abaixo). |
| **Avaliar oportunidade** (valor 2 · esforço 1) | RF02, RF22 | Adiados para depois do MVP. |
| **Entrega futura** (valor 2 · esforço 2 ou 3) | RF01, RF03, RF04, RF35, RF37, RF44 (esforço 2); RF05, RF21 (esforço 3) | Portal, agenda, relatório de frequência, painel, histórico de alterações e atualização de turma: adiados para depois do MVP. |
| **Baixa prioridade** (valor 1 · esforço 2) | RF06, RF07 | Formulário de contato e sua consulta: adiados. |

> **A matriz orienta, não decide.** Todos os 16 RFs de valor 4 entraram no MVP, mas só 2 dos 17 RFs
> de valor 3 (RF12 e RF26). No total, o MVP tem **18 RFs: 16 de valor 4 e 2 de valor 3**. A tabela a
> seguir explica por que os outros 15 RFs de valor 3 ficaram fora.

#### Por que RF12 e RF26 (valor 3) entraram no MVP

| RF | Motivo |
| :--- | :--- |
| RF12 – Consultar saldo de itens doados | Esforço baixo (1,7) e mostra o saldo calculado a partir das entradas (RF09) e das saídas (RF10) registradas no MVP. |
| RF26 – Consultar inscritos da turma | Esforço baixo (1,7) e permite conferir quem está inscrito na turma, base da chamada (RF27). |

#### Por que 15 RFs de valor 3 ficaram fora do MVP

O critério de corte foi manter, em cada frente, apenas o fluxo mínimo que substitui o registro em
papel (cadastrar, registrar e consultar), dentro da capacidade de desenvolvimento do semestre (notas
e capacidade, seção 8.5). Os RFs abaixo completam esses fluxos ou dependem de partes que ficaram
fora do MVP, e ficam para depois dele. Até lá, os ajustes que dependem deles são pedidos pela
Coordenação à equipe de desenvolvimento, que os aplica diretamente no banco e anota o motivo
(procedimento provisório, a validar com a associação).

| RF | Motivo |
| :--- | :--- |
| RF13 – Publicar lista de itens necessários | É publicada na área pública do portal (CP1), fora do MVP. Até lá, a lista segue sendo divulgada pelos canais atuais, de forma manual, como decidido com o cliente. |
| RF15 e RF17 – Atualizar ou inativar família e participante | Completam o ciclo de vida do cadastro. A inativação é rara no início do uso; os dados registrados no MVP continuam disponíveis para atualização quando esses RFs entrarem. Até lá, telefone e endereço podem ser corrigidos pela equipe a pedido da Coordenação. |
| RF24 – Cancelar inscrição | Complementa a inscrição (RF23); no início do uso, as desistências podem ser tratadas pela Coordenação fora do sistema. Quem desiste continua inscrito e aparece na chamada, mas o MVP não sinaliza faltas (RF32 fica fora) nem gera relatórios (CP6 fica fora), então a ausência a mais não gera alerta nem relatório incorreto. A Coordenação pede à equipe o cancelamento da inscrição para liberar a vaga. |
| RF25 – Registrar lista de espera | O RF23 já impede a inscrição em turma sem vaga (RN12). A lista de espera é necessária só quando as turmas lotarem, e até lá pode ser mantida como hoje. |
| RF29 – Justificar falta | A justificativa só muda o cálculo do limite de faltas, feito pelo RF32, que ficou fora do MVP. |
| RF30 – Corrigir registro de frequência | Complementa o registro da chamada (RF28). A regra de correção (RN17) já está validada e entra junto com a Fatia 2. Até lá, um erro de chamada é corrigido pela equipe a pedido da Coordenação, com o motivo anotado. |
| RF31 – Consultar frequência do participante | O MVP já registra a frequência (RF27 e RF28); o histórico acumulado poderá ser consultado quando o RF31 entrar, sem perda de dados. Até lá, a Coordenação pede à equipe o histórico de um participante. |
| RF32 – Sinalizar participante com faltas acima do limite | Depende do RF29 (para não sinalizar quem justificou a falta) e exibe os sinalizados no painel (RF37); os dois ficaram fora do MVP. |
| RF33, RF34 e RF36 – Relatórios de doações recebidas, de doações distribuídas e de famílias atendidas | Dependem dos registros que o MVP passa a fazer (doações, destinações e famílias) e fazem parte do CP6, fora do núcleo. |
| RF38 – Exportar relatório gerado | Só exporta relatórios gerados pelos RF33 a RF37, que ficaram fora do MVP. |
| RF43 – Registrar e acompanhar solicitação de exclusão de dados | Aguarda a confirmação da coordenação sobre o bloco avançado de LGPD. Até lá, as solicitações seguem o procedimento provisório descrito na seção 8.7. |
| RF45 – Consultar autorização de uso de imagem vigente | O RF42 já registra as autorizações no MVP; a consulta por titular e meio aguarda a confirmação da coordenação sobre o bloco avançado de LGPD. |

## 8.6 RFs selecionados para o MVP

Na validação registrada em [10.2](../10-backlog/index.md#102-priorizacao-do-backlog-geral-e-mvp),
foram selecionados 18 RFs para o núcleo do MVP:

| Área | RFs selecionados |
| :--- | :--- |
| Acesso e proteção de dados | RF39, RF40, RF41, RF42 |
| Doações de itens | RF08, RF09, RF10, RF11, RF12 |
| Famílias e participantes | RF14, RF16, RF18, RF19 |
| Turmas e chamada | RF20, RF23, RF26, RF27, RF28 |

## 8.7 RNFs aplicáveis ao MVP

Os RNFs foram classificados conforme sua aplicação aos 18 RFs selecionados. Os obrigatórios e os
associados a RFs do MVP integram o escopo, mesmo sem posição individual na matriz de valor de
negócio × esforço técnico.

| RNF | Classificação | Justificativa |
| :--- | :--- | :--- |
| RNF01 | Obrigatório para o MVP | Cobre o registro de doação (RF09) e a conclusão de chamada (RF27/RF28), ambos no núcleo do MVP. |
| RNF02 | Obrigatório para o MVP | O guia de uso cobre doação, cadastro, inscrição e chamada, rotinas incluídas no MVP. |
| RNF03 | Obrigatório para o MVP | Aplica-se às consultas de saldo (RF12), cadastro de participantes (RF19) e inscritos da turma (RF26). |
| RNF04 | Obrigatório para o MVP | Complementa o tempo de resposta do RNF03 durante os acessos simultâneos previstos para a operação. |
| RNF05 | Obrigatório para o MVP | Protege os dados de doações, famílias e participantes registrados pelo MVP. A restauração fica sob responsabilidade técnica da infraestrutura, conforme definido na validação. |
| RNF06 | Obrigatório para o MVP | Define a disponibilidade mínima do sistema durante o atendimento da associação. |
| RNF07 | Obrigatório para o MVP | Protege os dados de famílias e participantes (RF14, RF16, RF18 e RF19) e os consentimentos (RF42). |
| RNF08 | Obrigatório para o MVP | Cobre os fluxos de doação, cadastro de família, inscrição e chamada. A consulta à agenda, também citada no RNF original, fica fora da verificação do MVP. |
| RNF09 | Obrigatório para o MVP | As telas de doação, cadastro e chamada do MVP precisam funcionar em celular. |
| RNF10 | Obrigatório para o MVP | Aplica-se às rotinas de chamada (RF27/RF28) e cadastro de doador, família e participante (RF08/RF14/RF16). |
| RNF11 | Obrigatório para o MVP | A comunicação entre interface e serviço de dados é necessária às funções da área restrita incluídas no MVP. |
| RNF12 | Obrigatório para o MVP | A associação não pode assumir custo mensal de operação; a restrição vale para todo o MVP. |
| RNF13 | Obrigatório para o MVP | O MVP cadastra famílias e participantes (RF14, RF16 e RF18) e registra consentimentos (RF42). Como o RF43 ficou fora do MVP, a equipe precisa definir e validar com a associação como serão recebidas e atendidas as solicitações de exclusão. |
| RNF14 | Obrigatório para o MVP | O RF42 registra a autorização de imagem junto com o consentimento, e esse registro está entre os 18 RFs do MVP. A consulta da autorização vigente (RF45) fica fora do MVP. |
| RNF15 | Obrigatório para o MVP | Cadastro de usuários, perfis e autenticação (RF39–RF41) estão no MVP. |
| RNF16 | Associado a RFs do MVP | Aplica-se aos cadastros RF14/RF16 e à chamada RF27/RF28; portanto, entra no MVP. |
| RNF17 | Obrigatório para o MVP | O MVP inclui doação, inscrição e frequência, rotinas cobertas pelo README e pelos testes previstos no RNF. |
| RNF18 | Obrigatório para o MVP | A verificação de acessibilidade abrange as telas selecionadas de cadastro, doação e chamada. A agenda pública, citada no RNF original, ficou fora desse recorte. |
| RNF19 | Associado a RFs do MVP | No MVP, as correções de dados do doador (RF08) exigem registro de alteração, verificável no log sem depender da tela RF44. As correções de frequência (RF30) e as demais alterações fora dos RFs selecionados ficam para versões futuras. |

Na validação de 28/09, foram registrados o prazo de resposta de 15 dias para solicitações de exclusão
e as quatro finalidades de consentimento. Sem o RF43, as solicitações de exclusão seguem um procedimento provisório, que será validado com a associação antes de qualquer uso de dados reais: a Coordenação recebe o pedido, registra a data e acompanha as etapas (recebida, em análise, atendida ou negada com justificativa), responde ao titular em até 15 dias e, quando o pedido é atendido, pede à equipe de desenvolvimento a exclusão dos dados do titular no sistema. A classificação do RNF19
delimita o que será verificado no MVP; o texto completo desse RNF também cobre alterações de
frequência e de doações em versões posteriores.
