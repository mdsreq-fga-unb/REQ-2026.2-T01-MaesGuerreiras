# 8.1 Requisitos não funcionais

Cada RNF tem um registro próprio, com o critério verificável e a classificação para o MVP. Quais RNFs
se aplicam a cada RF está **na ficha do RF**, no [catálogo](index.md).

## RNFs gerais {#rnfs-gerais}

Valem para todos os RFs e não são repetidos nas fichas: [RNF02](#rnf02), [RNF04](#rnf04), [RNF05](#rnf05), [RNF06](#rnf06), [RNF08](#rnf08), [RNF09](#rnf09), [RNF11](#rnf11), [RNF12](#rnf12), [RNF17](#rnf17), [RNF18](#rnf18).
Os RNFs que não dependem do código de uma história (como o RNF12, custo zero, e o RNF05, cópia de
segurança) são conferidos uma vez por sprint, no fechamento.

## Registros

### RNF01 · Usabilidade (Usability) {#rnf01}

A solução deve ser operável por voluntárias e voluntários sem formação técnica. O formulário de registro de uma doação recebida e a tela de chamada devem ser alcançáveis em até três passos a partir da tela inicial da área restrita, sem apoio de terceiros. *Definição de passo:* cada tela ou estado distinto que o usuário precisa abrir ou navegar conta como um passo; ações e campos dentro da mesma tela não contam como passos adicionais. **O resultado medido por este RNF é o acesso à funcionalidade (formulário/tela), não a conclusão operacional da tarefa:** preenchimento, salvamento, envio e marcação de presença são avaliados pelos critérios funcionais correspondentes. Essa definição deve ser usada igualmente nos CA-RF09-03 e CA-RF28-04.

- **Escopo:** Específico (ver fichas no catálogo)
- **No MVP:** Obrigatório para o MVP. Cobre o acesso ao formulário de doação (RF09) e à tela de chamada (RF27/RF28), ambos no núcleo do MVP.
- **Situação da evidência em 27/11/2026:** RF09 passou na contagem de acesso (1 passo), registrada na [seção 13.5 da DoD](../13-dor-dod/index.md#135-exemplo-de-aplicacao-rf09-registrar-doacao-recebida). RF27 e RF28 ainda não têm contagem verificada; permanecem em andamento por falta de evidência do RNF16.

### RNF02 · Usabilidade (Usability) {#rnf02}

A solução deve ser acompanhada de guia de uso em linguagem simples, cobrindo as rotinas de doação, cadastro, inscrição e chamada, validado pela coordenação da associação antes da entrega final.

- **Escopo:** Geral (todos os RFs)
- **No MVP:** Obrigatório para o MVP. O guia de uso cobre doação, cadastro, inscrição e chamada, rotinas incluídas no MVP.

### RNF03 · Desempenho (Performance) {#rnf03}

As telas de consulta devem apresentar o resultado completo ao usuário em até 3 segundos para pelo menos 95% das consultas, em conexão móvel 3G/4G. **A medida principal é o tempo percebido no navegador**, contado da ação que dispara a consulta até os dados atualizados estarem visíveis na tela; `Server-Timing` ou a duração isolada da requisição HTTP podem ser registrados como diagnóstico, mas não substituem essa medida. Para cada tela consultada, registrar versão/commit, navegador, perfil de rede (3G ou 4G), estado do cache, número de amostras e tempos individuais. Com 20 amostras, pelo menos 19 devem terminar em até 3 segundos.

- **Escopo:** Específico (ver fichas no catálogo)
- **No MVP:** Obrigatório para o MVP. Aplica-se às consultas de participantes (RF19) e de frequência (RF31) do MVP proposto. Na versão de 28/09, valia também para o saldo (RF12) e os inscritos da turma (RF26), que passaram para a Fatia 2.
- **Situação da evidência em 27/11/2026:** RF12 teve 20 medições HTTP em Fast 3G, com máximo de 2,05 s, mas essa evidência não mede o tempo completo até a apresentação na tela. RF19 e RF31 não foram medidos. Ver [reconciliação da DoD](../13-dor-dod/index.md#138-reconciliacao-da-dod-27112026) e [evidências da Sprint 6](../00-evidencias/index.md#sprint-6-back-end-de-acesso-consentimentos-e-doacoes-issue-33).

### RNF04 · Desempenho (Performance) {#rnf04}

O sistema deve suportar 30 acessos simultâneos nos dias de maior movimento, como distribuição de itens e início de turmas, mantendo o tempo de resposta definido no RNF03.

- **Escopo:** Geral (todos os RFs)
- **No MVP:** Obrigatório para o MVP. Complementa o tempo de resposta do RNF03 durante os acessos simultâneos previstos para a operação.

### RNF05 · Confiabilidade (Reliability) {#rnf05}

Em caso de falha, o serviço deve ser restaurado em até 4 horas, com perda máxima de 24 horas de dados (RTO ≤ 4 h e RPO ≤ 24 h), a partir de cópia de segurança diária automatizada pela infraestrutura (Supabase). A conformidade não é demonstrada apenas pela existência ou configuração do backup: exige um exercício de restauração em ambiente isolado, com registro da versão/configuração utilizada, horário de início e fim, ponto/data dos dados recuperados e conferência de integridade. A restauração deve ser concluída em até 4 horas e os dados recuperados não podem estar defasados em mais de 24 horas.

- **Escopo:** Geral (todos os RFs)
- **No MVP:** Obrigatório para o MVP. Protege os dados de doações, famílias e participantes registrados pelo MVP. A restauração fica sob responsabilidade técnica da infraestrutura, conforme definido na validação.
- **Situação da evidência em 27/11/2026:** não há registro de exercício de restauração concluído. O backup diário, por si só, não comprova o prazo de recuperação; o portão de liberação para uso real permanece condicionado a uma restauração testada ([seção 6.4](../01-visao-produto/index.md#64-portao-de-liberacao-para-uso-real)).

### RNF06 · Confiabilidade (Reliability) {#rnf06}

O sistema deve apresentar disponibilidade mensal de 99% no intervalo de 8h às 18h, período em que a associação recebe e atende o público.

- **Escopo:** Geral (todos os RFs)
- **No MVP:** Obrigatório para o MVP. Define a disponibilidade mínima do sistema durante o atendimento da associação.

### RNF07 · Segurança (Security) {#rnf07}

Os dados pessoais das famílias e dos participantes devem trafegar cifrados, ser acessíveis somente conforme o perfil do usuário e ter as credenciais armazenadas de forma irreversível. O sistema deve manter trilha dos acessos a dados pessoais. Classificação: Sommerville – requisito de produto (segurança).

- **Escopo:** Específico (ver fichas no catálogo)
- **No MVP:** Obrigatório para o MVP. Protege os dados de famílias e participantes (RF14, RF16, RF18 e RF19), os dados de doadores pessoa física (RF08 e RF09) e os consentimentos (RF42).

### RNF08 · Suportabilidade (Supportability) {#rnf08}

O sistema deve funcionar corretamente em Google Chrome (versão 90 ou superior), Mozilla Firefox (versão 88 ou superior), Safari (versão 14 ou superior), Android (versão 10 ou superior) e iOS (versão 14 ou superior). “Funcionar corretamente” significa concluir os fluxos principais de registrar doação, cadastrar família, inscrever participante, realizar chamada e consultar agenda sem erros e sem elementos cortados ou inoperantes.

- **Escopo:** Geral (todos os RFs)
- **No MVP:** Obrigatório para o MVP. Cobre os fluxos de doação, cadastro de família, inscrição e chamada. A consulta à agenda, também citada no RNF original, fica fora da verificação do MVP.

### RNF09 · Usabilidade (Usability) {#rnf09}

Todas as funcionalidades devem ser operadas em telas a partir de 360 px de largura, sem rolagem horizontal, uma vez que o uso principal ocorre em celular durante o atendimento.

- **Escopo:** Geral (todos os RFs)
- **No MVP:** Obrigatório para o MVP. As telas de doação, cadastro e chamada do MVP precisam funcionar em celular.

### RNF10 · Desempenho (Performance) {#rnf10}

O sistema deve executar as rotinas de chamada e cadastro em aparelhos com 2 GB de memória sem exceder a memória disponível. A conformidade é verificada pela execução de 10 chamadas seguidas nesse aparelho, sem travamentos ou encerramento inesperado.

- **Escopo:** Específico (ver fichas no catálogo)
- **No MVP:** Obrigatório para o MVP. Aplica-se às rotinas de chamada (RF27/RF28) e cadastro de doador, família e participante (RF08/RF14/RF16).

### RNF11 · Requisitos de Interface {#rnf11}

A comunicação entre a interface e o serviço de dados deve ocorrer por meio de contrato documentado, com trocas realizadas em formato JSON sobre HTTPS.

- **Escopo:** Geral (todos os RFs)
- **No MVP:** Obrigatório para o MVP. A comunicação entre interface e serviço de dados é necessária às funções da área restrita incluídas no MVP.

### RNF12 · Requisito Organizacional {#rnf12}

O projeto é conduzido sem orçamento e a associação não pode assumir custo de operação. A hospedagem e os serviços de apoio devem implicar custo mensal igual a zero para a associação. O custo mensal de R$ 0,00 é conferido no fim de cada sprint.

- **Escopo:** Geral (todos os RFs)
- **No MVP:** Obrigatório para o MVP. A associação não pode assumir custo mensal de operação; a restrição vale para todo o MVP.

### RNF13 · Requisito Externo Legislativo (LGPD) {#rnf13}

O tratamento de dados pessoais deve estar em conformidade com a Lei nº 13.709/2018, com registro de consentimento por titular, finalidade declarada para cada dado coletado e atendimento às solicitações de exclusão no prazo definido pela associação.

- **Escopo:** Específico (ver fichas no catálogo)
- **No MVP:** Obrigatório para o MVP. O MVP cadastra famílias e participantes (RF14, RF16 e RF18) e registra consentimentos (RF42). Como o RF43 ficou fora do MVP, as solicitações de exclusão seguem um procedimento provisório, a validar com a associação antes de qualquer uso de dados reais: a Coordenação recebe o pedido, registra a data e acompanha as etapas (recebida, em análise, atendida ou negada com justificativa), responde ao titular em até 15 dias e, quando o pedido é atendido, pede à equipe de desenvolvimento a exclusão dos dados do titular no sistema.

### RNF14 · Requisito Externo Legislativo (Direito de Imagem) {#rnf14}

A solução deve estar em conformidade com a legislação de proteção ao direito de imagem: Constituição Federal (art. 5º, X), Código Civil (art. 20) e, para crianças e adolescentes, Estatuto da Criança e do Adolescente (arts. 17 e 18). A conformidade é verificada pela existência de autorização registrada (RF42) para cada pessoa identificável nas imagens publicadas pela associação.

- **Escopo:** Específico (ver fichas no catálogo)
- **No MVP:** Obrigatório para o MVP. O RF42 registra a autorização de imagem junto com o consentimento, e esse registro está entre os 19 RFs do MVP proposto. A consulta da autorização vigente (RF45) fica fora do MVP.

### RNF15 · Segurança (acesso e sessão) {#rnf15}

O acesso à área restrita deve exigir senha de pelo menos 8 caracteres, encerrar a sessão após 30 minutos sem atividade e bloquear novas tentativas de autenticação por 15 minutos após 5 tentativas consecutivas incorretas. **Estes são os parâmetros adotados pela equipe para o MVP.** A verificação deve testar a rejeição de senhas com menos de 8 caracteres, a expiração da sessão após 30 minutos de inatividade e o bloqueio após a quinta tentativa consecutiva incorreta. A execução manual em homologação, com contas dos dois perfis, foi registrada em 02/11/2026 na [issue #35](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-MaesGuerreiras/issues/35) e reconciliada em 27/11/2026 na [seção 13.8 da DoD](../13-dor-dod/index.md#138-reconciliacao-da-dod-27112026).

- **Escopo:** Específico (ver fichas no catálogo)
- **No MVP:** Obrigatório para o MVP. Cadastro de usuários, perfis e autenticação (RF39–RF41) estão no MVP.

### RNF16 · Confiabilidade (conexão instável) {#rnf16}

Se a conexão cair durante um cadastro ou uma chamada, os dados já preenchidos devem permanecer disponíveis durante pelo menos 5 minutos sem conexão e ser enviados após a reconexão, sem perda nem duplicidade. A verificação deve ser executada separadamente para cadastro e chamada, registrando RF, dispositivo, navegador, versão/commit, dados preenchidos antes da queda, duração da interrupção, estado após a reconexão e contagem final de registros no banco. O teste só passa se todos os dados preenchidos forem recuperados e houver exatamente um registro por operação. **Situação em 27/11/2026: não implementado e não verificado**; a reconciliação da DoD registra que o sistema ainda não preserva os dados nem os reenvia após a reconexão ([seção 13.8](../13-dor-dod/index.md#138-reconciliacao-da-dod-27112026)).

- **Escopo:** Específico (ver fichas no catálogo)
- **No MVP:** Associado a RFs do MVP. Aplica-se aos cadastros RF14/RF16 e à chamada RF27/RF28; portanto, entra no MVP.

### RNF17 · Requisito de Manutenibilidade {#rnf17}

Outra pessoa deve conseguir dar continuidade ao sistema depois da disciplina. A exigência tem três partes:

- **No produto:** testes automatizados das regras de doação, inscrição e frequência, entregues junto com o código.
- **Na prática da equipe:** código versionado no GitHub e testes passando a cada entrega, conferidos pelo CI.
- **Na transição:** README que explica como instalar e rodar. Alguém de fora da equipe roda o projeto só com o README em até 1 hora.

- **Escopo:** Geral (todos os RFs)
- **No MVP:** Obrigatório para o MVP. O MVP inclui doação, inscrição e frequência, rotinas cobertas pelo README e pelos testes previstos no RNF.

### RNF18 · Requisito de Acessibilidade {#rnf18}

As telas principais (chamada, cadastro, doação e agenda pública) devem atender à WCAG 2.1, nível AA. Auditoria automática (Lighthouse ou axe) sem violação crítica, mais checklist manual: contraste mínimo 4,5:1, navegação por teclado e rótulo em todo campo.

- **Escopo:** Geral (todos os RFs)
- **No MVP:** Obrigatório para o MVP. A verificação de acessibilidade abrange as telas selecionadas de cadastro, doação e chamada. A agenda pública, citada no RNF original, ficou fora desse recorte.

### RNF19 · Requisito de Segurança {#rnf19}

Toda alteração em dados pessoais, em frequência (inclusive justificativa de falta, RF29, e correção de chamada, RF30) e em registros de doação guarda autor, data, hora, valor anterior e valor novo por, no mínimo, 12 meses (prazo a validar). Uma alteração de teste em cada tipo de dado aparece no histórico do [RF44](index.md#rf44).

- **Escopo:** Específico (ver fichas no catálogo)
- **No MVP:** Associado a RFs do MVP. No MVP, as correções de dados do doador (RF08) exigem registro de alteração, verificável no log sem depender da tela RF44. As correções de frequência (RF30), que entraram no MVP proposto em 29/10/2026, também exigem esse registro. As demais alterações fora dos RFs selecionados ficam para versões futuras. Em 16/11/2026 a equipe decidiu permitir a correção de registros de doação, com o histórico gravado; ela entra depois do MVP ([MUD-052](../14-historico/index.md#mud-052)).


!!! note "Pendências registradas na validação de 28/09/2026"
    Foram registrados o prazo de resposta de 15 dias para solicitações de exclusão e as quatro
    finalidades de consentimento. O procedimento provisório de recebimento e atendimento dessas solicitações
    sem o RF43 está no [RNF13](#rnf13) e ainda precisa ser validado com a associação.
