# 3. Intervenção Social

A solução proposta para a Associação Mães Guerreiras tende a produzir uma intervenção social voltada
ao fortalecimento institucional de uma organização comunitária que já atende mais de mil famílias,
transformando um trabalho hoje invisível nos registros em informação capaz de sustentar parcerias,
organizar o atendimento e ampliar o alcance das atividades.

## Impactos pretendidos

- preservar o registro do que a associação recebe e distribui, hoje perdido por falta de tempo das
  voluntárias;
- dar à associação argumentos concretos (número de famílias atendidas, doações recebidas,
  frequência nas atividades) para prestar contas a parceiros e conquistar novos apoiadores;
- reduzir o trabalho manual da coordenação, liberando tempo de voluntárias para o atendimento
  direto à comunidade;
- tornar visível para a comunidade o que está ativo, em que dias e horários, incluindo atividades hoje
  pouco divulgadas, como o futebol de domingo;
- organizar o atendimento das distribuições, tornando mais justo e transparente o critério de quem é
  atendido;
- apoiar a aplicação consistente da regra de frequência, permitindo que vagas ociosas sejam ocupadas
  por outras crianças da comunidade;
- preservar a identidade e a narrativa da associação em um canal próprio e permanente.

## Efeitos emergentes a observar

Ao mesmo tempo, a solução pode gerar efeitos emergentes, não totalmente previstos, que precisam ser
observados, como:

- dependência da associação em relação a uma plataforma que exigirá manutenção após o fim do
  projeto acadêmico, em uma organização sem equipe técnica própria;
- risco de que o registro digital seja abandonado e conviva com o caderno, gerando informação
  duplicada e menos confiável do que antes;
- possível exclusão de famílias, doadores e voluntárias com menor acesso ou familiaridade com
  tecnologia, razão pela qual WhatsApp, redes sociais e panfletos devem ser mantidos como canais
  complementares;
- maior exposição de dados pessoais de famílias em situação de vulnerabilidade, exigindo controle de
  acesso, coleta mínima e cuidado permanente com a LGPD;
- riscos ligados à publicação de fotos e depoimentos de crianças e famílias, que só devem ir ao ar
  mediante autorização de uso de imagem por escrito;
- possibilidade de que a formalização do atendimento (senhas, cadastro, registro de faltas) seja
  percebida como controle ou burocracia por parte da comunidade, afastando quem hoje é atendido
  de forma informal.

Assim, a intervenção social da solução não é apenas "digitalizar os cadernos" da associação. Ela consiste
em alterar a forma como a comunidade acessa informações sobre as atividades, como o atendimento é
organizado, como o trabalho voluntário é registrado e como a associação se relaciona com seus parceiros
institucionais, exigindo que os requisitos considerem tanto os benefícios esperados quanto os efeitos
não previstos do uso real do sistema, especialmente os riscos de exclusão digital e de exposição de
dados em uma comunidade marcada por vulnerabilidade social.

## Dos efeitos emergentes a requisitos e ações

Cada efeito emergente identificado acima foi convertido em um requisito ou ação concreta do projeto,
para que não permaneça apenas como uma preocupação registrada, mas oriente decisões técnicas:

| Efeito identificado | Resposta esperada |
| :--- | :--- |
| Dependência tecnológica da associação | Plano de transição, documentação operacional e definição de um responsável institucional pela manutenção após o fim do projeto (seção [2.6](../02-solucao/index.md#26-viabilidade-da-proposta)) |
| Abandono da plataforma em favor do caderno | Testes de adoção com as coordenadoras e acompanhamento do uso real a cada sprint (seção [7.3](../07-interacao/index.md#73-processo-de-validacao)) |
| Exclusão digital de famílias, doadores e voluntárias | Manutenção de WhatsApp, redes sociais e panfletos como canais complementares, e requisitos de acessibilidade na interface |
| Exposição de dados pessoais de famílias em vulnerabilidade | Requisitos não funcionais de segurança, privacidade e retenção de dados, e perfis de acesso por responsabilidade (CP7) |
| Duplicidade entre caderno e sistema | Estratégia de migração gradual e definição clara de qual registro passa a ser o oficial a partir de cada entrega |
| Formalização percebida como controle ou burocracia | Validação das telas e fluxos diretamente com famílias e voluntários antes de tornar o registro obrigatório |
