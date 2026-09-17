# 2. Solução Proposta

Esta seção apresenta a solução proposta para a Associação Mães Guerreiras: Seus objetivos, as
características de produto que a compõem, as tecnologias escolhidas, a análise competitiva, a
viabilidade da proposta e os benefícios esperados para o cliente e para os usuários.

## 2.1 Objetivo Geral do Produto

O objetivo do produto é substituir os controles manuais da Associação Mães Guerreiras (cadernos de
doações, cadastro isolado no computador da sede e listas de chamada em papel) por uma plataforma
web simples, que registre as doações de itens recebidas e distribuídas, o cadastro das
famílias e a presença nas atividades, e que transforme esses registros em relatórios de impacto capazes
de sustentar a prestação de contas aos parceiros. A plataforma oferece ainda um canal institucional
próprio, onde a comunidade encontra a agenda atualizada das atividades, sua situação atual e as formas
de apoiar a associação.

## 2.2 Objetivos Específicos (OE) do Produto

- **OE1:** Apresentar de forma permanente e acessível as atividades da associação, com dias, horários e
  situação atual, além das formas de doar e de fazer parte;
- **OE2:** Substituir o registro em caderno por um registro digital rápido das doações de itens recebidas
  e distribuídas;
- **OE3:** Centralizar o cadastro das famílias e as inscrições nas atividades, permitindo que uma mesma
  família participe de várias frentes;
- **OE4:** Digitalizar a chamada das atividades e apoiar a regra de frequência já praticada pela
  coordenação;
- **OE5:** Gerar relatórios de impacto para prestação de contas aos parceiros e captação de novos
  apoiadores;
- **OE6:** Organizar o acesso ao painel administrativo por perfil, protegendo os dados pessoais das
  famílias atendidas.

## 2.3 Características de Produto

A solução proposta para a Associação Mães Guerreiras deverá contemplar, de forma preliminar, as
seguintes características, mapeadas com os Objetivos Específicos do Produto:

| ID | Característica de Produto (CP) | Descrição resumida | VN | Valor de negócio (VN) principal |
| :--- | :--- | :--- | :--- | :--- |
| CP1 | Portal institucional e agenda de atividades | Disponibilização das informações institucionais e das atividades da associação. | VN1 | Centralização das informações destinadas à comunidade e aos apoiadores. |
| CP2 | Registro de doações de itens | Gestão das doações de itens recebidas e distribuídas. | VN2 | Redução de registros de doações não realizados e maior visibilidade sobre os itens recebidos e distribuídos. |
| CP3 | Cadastro de famílias e participantes | Gestão dos dados das famílias e participantes atendidos. | VN3 | Centralização dos dados atualmente mantidos de forma isolada. |
| CP4 | Inscrição em atividades e organização do atendimento | Gestão das inscrições e dos atendimentos nas atividades. | VN4 | Organização e rastreabilidade dos atendimentos realizados. |
| CP5 | Chamada digital e controle de frequência | Gestão da frequência dos participantes nas atividades. | VN5 | Redução da conferência manual de presença e apoio à aplicação da regra de faltas. |
| CP6 | Relatórios e indicadores de impacto | Acompanhamento dos resultados e indicadores da associação. | VN6 | Apoio à prestação de contas e à captação de novos apoiadores. |
| CP7 | Perfis de acesso e proteção de dados | Controle de acesso e proteção dos dados tratados pela solução. | VN7 | Proteção dos dados das famílias atendidas e conformidade com a LGPD. |

O quadro a seguir apresenta a contribuição de cada característica para os Objetivos Específicos (OE1 a
OE6) definidos na seção anterior.

| ID | Característica de Produto (CP) | Contribuição principal (OE) | Contribuição secundária (OE) |
| :--- | :--- | :--- | :--- |
| CP1 | Portal institucional e agenda de atividades | OE1 | OE5 |
| CP2 | Registro de doações de itens | OE2 | OE5 |
| CP3 | Cadastro de famílias e participantes | OE3 | OE6 |
| CP4 | Inscrição em atividades e organização do atendimento | OE3 | — |
| CP5 | Chamada digital e controle de frequência | OE4 | OE5 |
| CP6 | Relatórios e indicadores de impacto | OE5 | — |
| CP7 | Perfis de acesso e proteção de dados | OE6 | — |

## 2.4 Tecnologias a Serem Utilizadas

A tabela a seguir apresenta a stack tecnológica definida para a construção da plataforma.

| Camada | Tecnologia | Função |
| :--- | :--- | :--- |
| Frontend + parte do backend | **Nuxt.js** | Interface pública, painel administrativo, server routes (Nitro) para API |
| Banco de dados + autenticação | **Supabase** | PostgreSQL, login da coordenação, storage de imagens |
| Hospedagem | **Vercel** ou **Netlify** | Deploy automático via GitHub, subdomínio grátis |

**Doações:** o sistema tratará apenas doações de itens.

**Controle de versão e documentação:** Git e GitHub, com o site do projeto publicado via GitHub Pages,
conforme exigido pela disciplina.

## 2.5 Pesquisa de Mercado e Análise Competitiva

Foram pesquisadas soluções disponíveis no mercado destinadas à gestão de organizações sociais,
beneficiários, doações e indicadores de impacto.

| Solução similar | Recursos relacionados à proposta | Limitações em relação ao contexto da associação |
| :--- | :--- | :--- |
| [Bússola Social](https://www.bussolasocial.com.br/) | Gestão de projetos, beneficiários, indicadores, evidências, inscrições e relatórios de impacto. | Não apresenta foco específico no controle de doações de itens, na chamada das atividades ou nas regras próprias da associação. |
| [Ongsys](https://site.ongsys.com.br/) | Gestão financeira por projeto, doadores, voluntários, documentos, relatórios e prestação de contas. | Possui maior foco financeiro, contábil e administrativo do que no acompanhamento cotidiano das famílias e atividades oferecidas. |
| [Trackmob](https://trackmob.com.br/) | Gestão de doadores, doações financeiras, relacionamento e captação de recursos. | É orientada principalmente à captação e ao processamento de doações financeiras, enquanto a proposta trata doações de itens. |

As soluções analisadas centralizam dados e apoiam a produção de relatórios, mas não reúnem, no mesmo
fluxo, o registro de doações de itens, a gestão das famílias, as inscrições e a frequência conforme as
regras praticadas pelas Mães Guerreiras. A solução proposta busca atender esse contexto específico.

## 2.6 Viabilidade da Proposta

A proposta é viável no contexto da disciplina, considerando o prazo disponível, a equipe de 6 integrantes
e o acesso real ao cliente, que mantém contato frequente por WhatsApp. Ainda que parte da equipe
esteja em processo de aprendizado das tecnologias escolhidas, a proposta foi estruturada de forma
compatível com essa realidade, com entregas incrementais, priorização das funcionalidades essenciais e
validações frequentes com a coordenação.

Para organizar o trabalho, serão utilizadas sprints de 2 semanas, totalizando 7 sprints. Esse ritmo
permite ajustar o escopo a cada ciclo, reservar a primeira sprint também para o aprendizado das
tecnologias e garantir a entrega de um MVP (Produto Mínimo Viável) funcional.

O MVP será composto pelo portal institucional com a agenda das atividades (CP1), pelo registro digital
das doações de itens (CP2), por autenticação administrativa mínima (parte da CP7) e por consulta ou
exportação simples dos registros de doações (parte da CP6). Esse recorte permite que o registro seja
utilizado com controle de acesso básico e que os dados possam apoiar a prestação de contas. Os
relatórios completos e os perfis de acesso detalhados permanecem nos ciclos posteriores.

### Riscos e mitigação

- **Risco de não adoção:** Se o registro digital não for mais rápido do que anotar no caderno, a
  coordenação voltará ao papel. *Mitigação:* protótipos validados antes de programar e teste da
  funcionalidade com as próprias coordenadoras, sem ajuda da equipe, ao final de cada sprint.
- **Escopo ambicioso frente ao prazo:** A associação tem muitas frentes. *Mitigação:* MVP restrito a
  CP1 e CP2, com as demais características priorizadas ciclo a ciclo.
- **Tratamento de dados pessoais de famílias em vulnerabilidade:** *Mitigação:* Perfis de acesso (CP7),
  coleta mínima de dados e publicação de fotos e depoimentos apenas após a obtenção das
  autorizações de uso de imagem.
- **Disponibilidade da coordenação:** Todas atuam voluntariamente e têm agenda cheia. *Mitigação:*
  validações curtas.
- **Manutenção após o semestre:** A associação pode não dispor de equipe técnica para manter a
  solução. *Mitigação:* entrega do código-fonte, da documentação e de orientações básicas de manutenção.
- **Responsabilidade pelas contas e hospedagem:** As contas do Supabase e da hospedagem não devem
  permanecer vinculadas somente a um integrante. *Mitigação:* criação ou transferência das contas
  para um endereço institucional indicado pela associação antes da entrega final.
- **Backup e recuperação dos dados:** Falhas ou exclusões podem comprometer os registros.
  *Mitigação:* definição de uma rotina de exportação e teste de recuperação antes da entrega.
- **Treinamento das coordenadoras:** A falta de familiaridade pode prejudicar a adoção. *Mitigação:*
  realização de treinamento e entrega de um guia de uso.
- **Limites dos serviços gratuitos:** O crescimento do uso pode gerar custos futuros. *Mitigação:*
  acompanhamento dos limites gratuitos e comunicação à associação antes da adoção de plano pago.
- **Dados pessoais durante os testes:** Dados de adultos e crianças podem ser expostos indevidamente.
  *Mitigação:* uso de dados fictícios ou anonimizados nos testes e restrição do acesso aos dados reais.

Assim, a proposta é considerada viável, desde que o escopo do MVP permaneça controlado, as
prioridades sejam mantidas ao longo das sprints e a equipe reserve tempo na primeira sprint para o
aprendizado das tecnologias escolhidas.

## 2.7 Benefícios Esperados

- **Para o cliente:** Redução do percentual de doações sem registro; visibilidade sobre o que a
  associação recebe e distribui; apoio à prestação de contas a CEASA-DF, ASFA, UDF e
  demais parceiros, hoje inexistentes; redução do trabalho manual da coordenação com cadernos e
  listas de chamada; acesso organizado por perfil entre as cinco coordenadoras; e um canal
  institucional próprio que mostra o trabalho realizado de forma permanente, apoiando a captação de
  novos apoiadores.
- **Para os usuários:** Famílias beneficiárias com informação clara sobre o que está ativo, em que dias e
  horários, e como participar; voluntárias e voluntários com um canal claro para saber onde ajudar; e
  doadores com informação objetiva sobre o que a associação precisa e como entregar suas doações.

Como metas iniciais verificáveis, a equipe pretende permitir o registro de uma doação em até dois
minutos durante o teste com as coordenadoras e reduzir em pelo menos 80% a quantidade de doações sem
registro em comparação com a linha de base levantada antes da implantação. As metas serão confirmadas
com a cliente durante a validação do MVP.
