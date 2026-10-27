# 9. DoR e DoD

Esta seção apresenta a Definition of Ready (DoR) e a Definition of Done (DoD) adotadas pela
equipe. A DoR verifica se um requisito está maduro o suficiente para entrar em uma sprint; a DoD
verifica se o que foi construído a partir dele cumpre os critérios de qualidade da equipe antes
de ser mostrado à coordenação na Revisão da Sprint. As duas são **verificação** feita pela
equipe — a validação com o cliente (seção [7.3](../07-interacao/index.md#73-processo-de-validacao))
é uma etapa posterior e separada. Há uma única DoR e uma única DoD para o projeto inteiro,
aplicadas a todo RF ou RNF, com resultado binário — passou ou não passou — nunca um percentual.

## 9.1 Definition of Ready (DoR)

**O requisito tem os dados mínimos necessários para ser implementado sem reunião extra?**

O texto do RF precisa listar os campos obrigatórios e opcionais, não só citar que "dados são
cadastrados". O RF14 (Cadastrar família) é o modelo: lista nome do responsável, telefone e
endereço como obrigatórios, e número de moradores e observações como opcionais. O RF11 (Cadastrar categoria de item) é um exemplo de lacuna que essa pergunta revelou: a primeira versão não dizia se unidade de medida era texto livre ou lista fechada, e por isso não estava pronta para sprint. A lacuna foi fechada com a lista fechada "unidade, quilo ou pacote" (RN02 e critério CA-US11-01).

**As regras de negócio do requisito estão identificadas e separadas do texto do RF?**

Regra de negócio embutida no meio da descrição do RF atrasa a implementação, porque muda sem
avisar quem está codando. O RF23 (Inscrever participante em turma) depende da regra "sem vaga,
oferece encaminhamento à lista de espera (RF25)"; essa regra precisa estar registrada na lista de
regras de negócio da seção [10.2](../10-backlog/index.md#102-priorizacao-do-backlog-geral-e-mvp),
não só mencionada de passagem no RF.

**O agente que executa o requisito está definido na tabela de permissões?**

Nenhum RF entra em sprint sem perfil de acesso confirmado na seção
[8.4](../08-requisitos/index.md#84-perfis-agentes-e-rastreabilidade). RF39 (Cadastrar usuário do
sistema) é exclusivo da Coordenação; RF41 (Autenticar usuário) é Voluntário ou Coordenação. Se o
RF ainda estiver com o agente em aberto, ele não está pronto.

**Existe protótipo de baixa fidelidade validado com a coordenação, quando o requisito tiver
interface?**

Requisitos de tela — como RF20 (Cadastrar turma de atividade) ou RF27 (Abrir chamada do
encontro) — só entram em sprint depois de um wireframe revisado com Daiane, registrado como
evidência. Requisitos sem interface própria (ex.: RF32, sinalização automática) não dependem
desse critério.

**Os RNFs aplicáveis ao requisito estão listados?**

A matriz de rastreabilidade (seção 8.4) e a classificação de obrigatoriedade para o MVP (seção
[8.7](../08-requisitos/index.md#87-rnfs-aplicaveis-ao-mvp)) precisam apontar quais RNFs
valem para o RF antes dele entrar em sprint. RF09 (Registrar doação recebida) está ligado ao
RNF01 (usabilidade, até três passos) e ao RNF07 (segurança); implementar RF09 sem saber disso
tende a deixar esses atributos de fora.

**O critério de aceitação está escrito como condições de satisfação verificáveis?**

Sem uma lista objetiva do que precisa ser verdade para o requisito estar correto, como nos
exemplos da seção [5.2](../05-er/index.md#52-rastreabilidade-dos-requisitos), a equipe de teste
não tem o que automatizar e a Revisão de Sprint vira debate de opinião sobre "se ficou bom".

**As dependências com outros requisitos estão mapeadas?**

RF26 (Consultar inscritos da turma) depende de RF20 (turma já cadastrada) e de RF23 (inscrição já
registrada). Planejar RF26 numa sprint anterior à de RF20 e RF23 é sinal de que a DoR não foi
checada.

**O esforço técnico já foi estimado e cabe na sprint de 2 semanas?**

A estimativa de esforço, complexidade e lacuna de capacidade (seção 10.2 e matriz 4×4, seção
[8.5](../08-requisitos/index.md#85-matriz-4x4)) precisa existir antes do planejamento da sprint,
não ser feita de improviso na reunião de planejamento.

**O requisito já foi apresentado a Makio ou Daiane, com registro em ata ou gravação?**

Nenhum requisito entra em sprint sem pelo menos uma menção prévia ao cliente, registrada nas
[Atas de Reunião](../00-atas/index.md) ou nas [Evidências e Gravações](../00-evidencias/index.md).

**Se o requisito envolve dado pessoal de família ou criança, o consentimento (RF42) já está
coberto?**

Requisitos como RF14 (Cadastrar família) ou RF16 (Cadastrar participante) só entram em sprint com
dados reais depois que a base de consentimento e controle de acesso estiver pronta, conforme a
seção [6](../06-cronograma/index.md#64-portao-de-liberacao-para-uso-real). Antes disso, só com dados
sintéticos.

## 9.2 Definition of Done (DoD)

**O comportamento implementado corresponde exatamente ao que está declarado na seção 8?**

Sem funcionalidade "a mais" nem "a menos" do que o RF descreve. Se o comportamento mudou durante
o desenvolvimento, a seção 8 é atualizada antes de o requisito ser considerado pronto, não depois.

**As regras de negócio foram implementadas, não só o caminho feliz?**

RF23 precisa realmente bloquear a inscrição quando não há vaga e oferecer o encaminhamento à
lista de espera (RF25) — não só inscrever sempre e ignorar o limite de vagas definido em RF20.

**Os critérios de aceitação passam integralmente, incluindo os cenários de exceção?**

RF18 (Vincular participante a família) tem dois cenários: responsável legal informado, e a
exceção de criança em acolhimento com motivo registrado. Os dois precisam passar, não só o
principal.

**O código segue os padrões definidos pela equipe?**

Lint do Nuxt.js sem erros, nomes de entidades do domínio em português (família, doação, turma),
sem código comentado ou `console.log` esquecido no commit.

**Os testes automatizados das regras críticas foram escritos e estão verdes?**

Conforme a prática de XP da seção [4.4](../04-estrategias/index.md#44-praticas-de-xp-adotadas),
requisitos como RF09 (registro de doação), RF23 (inscrição) e RF28 (registro de frequência) têm
teste automatizado cobrindo a regra, não só o CRUD básico.

**A suíte de testes de regressão inteira passa, não só os testes novos do requisito?**

Um requisito novo que quebra teste de outro já entregue não está pronto, mesmo que os testes
dele próprio passem.

**A funcionalidade está implantada no ambiente de homologação, não só rodando local?**

Deploy feito em Vercel ou Netlify, com o pipeline de integração contínua executado com sucesso no
commit final.

**Os RNFs aplicáveis ao requisito foram verificados de fato, não assumidos?**

RF09 precisa responder em até 3 segundos sob carga simulada (RNF03), não só "parecer rápido" no
teste manual de um desenvolvedor.

**Dados pessoais envolvidos respeitam a LGPD?**

Consentimento (RF42) registrado antes do uso, acesso restrito por perfil, e nenhum dado real de
família ou criança usado em teste sem anonimização — conforme o RNF07 e o RNF13.

**Não há entrega parcial: se um critério falhar, o requisito inteiro volta ao backlog?**

Um requisito "quase pronto" não é levado à Revisão de Sprint como se estivesse concluído. Ele
fica registrado como em andamento e retorna ao backlog da sprint seguinte.

## 9.3 Checklist de fechamento

Usado ao final de cada sprint, antes da Revisão, para decidir rapidamente se um requisito pode
avançar.

### DoR

| Verificado | Pergunta |
| :---: | :--- |
| ☐ | O requisito tem os dados mínimos (campos obrigatórios/opcionais) descritos? |
| ☐ | As regras de negócio estão separadas do texto do RF e registradas na seção 10.2? |
| ☐ | O perfil de acesso está definido na tabela de permissões (8.4)? |
| ☐ | Existe protótipo validado com a coordenação (quando aplicável)? |
| ☐ | Os RNFs aplicáveis estão listados? |
| ☐ | O critério de aceitação está escrito como condições de satisfação verificáveis? |
| ☐ | As dependências com outros RFs estão mapeadas? |
| ☐ | O esforço técnico foi estimado e cabe na sprint? |
| ☐ | O requisito já foi apresentado a Makio ou Daiane, com registro? |
| ☐ | Se envolve dado pessoal, o consentimento (RF42) está coberto antes de dados reais? |

### DoD

| Verificado | Pergunta |
| :---: | :--- |
| ☐ | O comportamento implementado corresponde ao texto da seção 8? |
| ☐ | As regras de negócio foram implementadas, não só o caminho feliz? |
| ☐ | O critério de aceitação passa integralmente, incluindo exceções? |
| ☐ | O código segue os padrões da equipe, sem código morto? |
| ☐ | Os testes automatizados das regras críticas foram escritos e estão verdes? |
| ☐ | A suíte de regressão inteira continua passando? |
| ☐ | A funcionalidade está implantada no ambiente de homologação? |
| ☐ | Os RNFs aplicáveis foram verificados de fato? |
| ☐ | Os dados pessoais envolvidos respeitam a LGPD? |
| ☐ | Não há entrega parcial — o que falhou volta ao backlog, não é mostrado como pronto? |
