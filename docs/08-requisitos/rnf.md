# 8.1 Requisitos não funcionais

Cada RNF tem um registro próprio, com o critério verificável e a classificação para o MVP. Quais RNFs
se aplicam a cada RF está **na ficha do RF**, no [catálogo](index.md).

## RNFs gerais {#rnfs-gerais}

Valem para todos os RFs e não são repetidos nas fichas: [RNF02](#rnf02), [RNF04](#rnf04), [RNF05](#rnf05), [RNF06](#rnf06), [RNF08](#rnf08), [RNF09](#rnf09), [RNF11](#rnf11), [RNF12](#rnf12), [RNF17](#rnf17), [RNF18](#rnf18).
Os RNFs que não dependem do código de uma história (como o RNF12, custo zero, e o RNF05, cópia de
segurança) são conferidos uma vez por sprint, no fechamento.

## Registros

### RNF01 · Usabilidade (Usability) {#rnf01}

A solução deve ser operável por voluntárias e voluntários sem formação técnica. O registro de uma doação recebida e a conclusão de uma chamada devem ser alcançáveis em até três passos a partir da tela inicial da área restrita, sem apoio de terceiros. *Definição de passo:* cada tela ou estado distinto que o usuário precisa navegar conta como um passo; o preenchimento de campos dentro de uma mesma tela não conta como passo adicional. Os três passos referem-se à navegação até o formulário (alcançar a funcionalidade), não ao preenchimento e envio (concluir a tarefa).

- **Escopo:** Específico (ver fichas no catálogo)
- **No MVP:** Obrigatório para o MVP. Cobre o registro de doação (RF09) e a conclusão de chamada (RF27/RF28), ambos no núcleo do MVP.

### RNF02 · Usabilidade (Usability) {#rnf02}

A solução deve ser acompanhada de guia de uso em linguagem simples, cobrindo as rotinas de doação, cadastro, inscrição e chamada, validado pela coordenação da associação antes da entrega final.

- **Escopo:** Geral (todos os RFs)
- **No MVP:** Obrigatório para o MVP. O guia de uso cobre doação, cadastro, inscrição e chamada, rotinas incluídas no MVP.

### RNF03 · Desempenho (Performance) {#rnf03}

As telas de consulta devem apresentar resultados em até 3 segundos para 95% das requisições, em conexão móvel 3G/4G.

- **Escopo:** Específico (ver fichas no catálogo)
- **No MVP:** Obrigatório para o MVP. Aplica-se às consultas de participantes (RF19) e de frequência (RF31) do MVP proposto. Na versão de 28/09, valia também para o saldo (RF12) e os inscritos da turma (RF26), que passaram para a Fatia 2.

### RNF04 · Desempenho (Performance) {#rnf04}

O sistema deve suportar 30 acessos simultâneos nos dias de maior movimento, como distribuição de itens e início de turmas, mantendo o tempo de resposta definido no RNF03.

- **Escopo:** Geral (todos os RFs)
- **No MVP:** Obrigatório para o MVP. Complementa o tempo de resposta do RNF03 durante os acessos simultâneos previstos para a operação.

### RNF05 · Confiabilidade (Reliability) {#rnf05}

Em caso de falha, o sistema deve ser restaurado em até 4 horas, com perda máxima de 24 horas de dados, a partir de cópia de segurança diária automatizada pela infraestrutura (Supabase).

- **Escopo:** Geral (todos os RFs)
- **No MVP:** Obrigatório para o MVP. Protege os dados de doações, famílias e participantes registrados pelo MVP. A restauração fica sob responsabilidade técnica da infraestrutura, conforme definido na validação.

### RNF06 · Confiabilidade (Reliability) {#rnf06}

O sistema deve apresentar disponibilidade mensal de 99% no intervalo de 8h às 18h, período em que a associação recebe e atende o público.

- **Escopo:** Geral (todos os RFs)
- **No MVP:** Obrigatório para o MVP. Define a disponibilidade mínima do sistema durante o atendimento da associação.

### RNF07 · Segurança (Security) {#rnf07}

Os dados pessoais das famílias e dos participantes devem trafegar cifrados, ser acessíveis somente conforme o perfil do usuário e ter as credenciais armazenadas de forma irreversível. O sistema deve manter trilha dos acessos a dados pessoais. Classificação: Sommerville – requisito de produto (segurança).

- **Escopo:** Específico (ver fichas no catálogo)
- **No MVP:** Obrigatório para o MVP. Protege os dados de famílias e participantes (RF14, RF16, RF18 e RF19) e os consentimentos (RF42).

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
- **No MVP:** Obrigatório para o MVP. O MVP cadastra famílias e participantes (RF14, RF16 e RF18) e registra consentimentos (RF42). Como o RF43 ficou fora do MVP, a equipe precisa definir e validar com a associação como serão recebidas e atendidas as solicitações de exclusão.

### RNF14 · Requisito Externo Legislativo (Direito de Imagem) {#rnf14}

A solução deve estar em conformidade com a legislação de proteção ao direito de imagem: Constituição Federal (art. 5º, X), Código Civil (art. 20) e, para crianças e adolescentes, Estatuto da Criança e do Adolescente (arts. 17 e 18). A conformidade é verificada pela existência de autorização registrada (RF42) para cada pessoa identificável nas imagens publicadas pela associação.

- **Escopo:** Específico (ver fichas no catálogo)
- **No MVP:** Obrigatório para o MVP. O RF42 registra a autorização de imagem junto com o consentimento, e esse registro está entre os 19 RFs do MVP proposto. A consulta da autorização vigente (RF45) fica fora do MVP.

### RNF15 · Segurança (acesso e sessão) {#rnf15}

O acesso à área restrita deve exigir senha de pelo menos 8 caracteres, encerrar a sessão após 30 minutos sem atividade e bloquear novas tentativas de autenticação por 15 minutos após 5 tentativas consecutivas incorretas. A verificação deve testar a rejeição de senhas mais curtas, a expiração da sessão e o bloqueio na quinta tentativa. Os valores definidos para senha, sessão e bloqueio são preliminares e devem ser validados pela equipe.

- **Escopo:** Específico (ver fichas no catálogo)
- **No MVP:** Obrigatório para o MVP. Cadastro de usuários, perfis e autenticação (RF39–RF41) estão no MVP.

### RNF16 · Confiabilidade (conexão instável) {#rnf16}

Se a conexão cair durante uma chamada ou um cadastro, os dados já preenchidos não devem ser perdidos e devem ser enviados quando a conexão for restabelecida. A verificação deve interromper a conexão por 5 minutos durante cada uma dessas rotinas e confirmar que nenhum registro preenchido foi perdido nem duplicado após a reconexão.

- **Escopo:** Específico (ver fichas no catálogo)
- **No MVP:** Associado a RFs do MVP. Aplica-se aos cadastros RF14/RF16 e à chamada RF27/RF28; portanto, entra no MVP.

### RNF17 · Requisito de Manutenibilidade {#rnf17}

O código deve ficar versionado no GitHub, com README que explique como instalar e rodar, e com testes automatizados para as regras de doação, inscrição e frequência, para que outra pessoa dê continuidade. Alguém de fora da equipe roda o projeto só com o README em até 1 hora. Os testes passam a cada entrega.

- **Escopo:** Geral (todos os RFs)
- **No MVP:** Obrigatório para o MVP. O MVP inclui doação, inscrição e frequência, rotinas cobertas pelo README e pelos testes previstos no RNF.

### RNF18 · Requisito de Acessibilidade {#rnf18}

As telas principais (chamada, cadastro, doação e agenda pública) devem atender à WCAG 2.1, nível AA. Auditoria automática (Lighthouse ou axe) sem violação crítica, mais checklist manual: contraste mínimo 4,5:1, navegação por teclado e rótulo em todo campo.

- **Escopo:** Geral (todos os RFs)
- **No MVP:** Obrigatório para o MVP. A verificação de acessibilidade abrange as telas selecionadas de cadastro, doação e chamada. A agenda pública, citada no RNF original, ficou fora desse recorte.

### RNF19 · Requisito de Segurança {#rnf19}

Toda alteração em dados pessoais, em frequência (inclusive justificativa de falta, RF29, e correção de chamada, RF30) e em registros de doação guarda autor, data, hora, valor anterior e valor novo por, no mínimo, 12 meses (prazo a validar). Uma alteração de teste em cada tipo de dado aparece no histórico do 44.

- **Escopo:** Específico (ver fichas no catálogo)
- **No MVP:** Associado a RFs do MVP. No MVP, as correções de dados do doador (RF08) exigem registro de alteração, verificável no log sem depender da tela RF44. As correções de frequência (RF30), que entraram no MVP proposto em 29/10/2026, também exigem esse registro. As demais alterações fora dos RFs selecionados ficam para versões futuras.


!!! note "Pendências registradas na validação de 28/09/2026"
    Foram registrados o prazo de resposta de 15 dias para solicitações de exclusão e as quatro
    finalidades de consentimento. O procedimento de recebimento e atendimento dessas solicitações
    sem o RF43 ainda precisa ser definido com a associação.
