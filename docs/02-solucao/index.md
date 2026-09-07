# 2. Solução Proposta

Esta seção apresenta a solução proposta para a Associação Mães Guerreiras: Seus objetivos, as
características de produto que a compõem, as tecnologias escolhidas, a análise competitiva, a
viabilidade da proposta e os benefícios esperados para o cliente e para os usuários.

## 2.1 Objetivo Geral do Produto

O objetivo do produto é substituir os controles manuais da Associação Mães Guerreiras (cadernos de
doações, cadastro isolado no computador da sede e listas de chamada em papel) por uma plataforma
web simples, que registre em poucos cliques as doações de itens recebidas e distribuídas, o cadastro das
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
| CP1 | Portal institucional e agenda de atividades | A solução deverá apresentar a história da associação, seus parceiros e a agenda das atividades com dias, horários e situação atual (ativa, suspensa ou dependente de doação), além de exibir as formas de doar já divulgadas pela associação, incluindo o endereço da sede. | VN1 | Informação sempre acessível à comunidade e aos apoiadores, sem depender de destaques do Instagram, de panfletos ou do grupo de WhatsApp. |
| CP2 | Registro de doações de itens | A solução deverá permitir registrar, de forma rápida, as doações de itens recebidas (alimentos, roupas, brinquedos, cestas básicas) e sua distribuição, substituindo os cadernos usados atualmente. | VN2 | Fim da perda de registros por falta de tempo e visibilidade sobre o que entra e o que é distribuído. |
| CP3 | Cadastro de famílias e participantes | A solução deverá centralizar o cadastro das famílias (nome, idade, endereço e telefone), permitindo que uma mesma família participe de várias atividades e que esse histórico fique registrado em conjunto. | VN3 | Substituição do cadastro isolado no computador da sede por um registro único, consultável por todas as coordenadoras. |
| CP4 | Inscrição em atividades e organização do atendimento | A solução deverá apoiar a inscrição nas atividades e a organização do atendimento da Sacola Verde, hoje feita por ordem de chegada com entrega de senhas, registrando quem foi atendido em cada distribuição. | VN4 | Atendimento mais organizado e justo, com registro de quem foi atendido em cada entrega. |
| CP5 | Chamada digital e controle de frequência | A solução deverá permitir o registro de presença nas atividades que fazem chamada (Reforço Escolar, futebol e Domingo Recreativo) e sinalizar à coordenação quando uma criança atingir cinco faltas sem justificativa, conforme a regra já praticada pela associação. | VN5 | Fim da conferência manual em papel e aplicação consistente da regra de faltas, liberando vagas para outras crianças. |
| CP6 | Relatórios e indicadores de impacto | A solução deverá gerar relatórios simples a partir dos dados registrados: doações recebidas por período e por tipo de item, famílias atendidas, presença nas atividades e número de voluntários envolvidos. | VN6 | Prestação de contas a parceiros como CEASA-DF, ASFA e UDF e argumento concreto para captar novos apoiadores. |
| CP7 | Perfis de acesso e proteção de dados | A solução deverá oferecer acesso ao painel administrativo por perfil, conforme a responsabilidade de cada coordenadora, protegendo os dados pessoais das famílias atendidas. | VN7 | Segurança dos dados das famílias em situação de vulnerabilidade e conformidade com a LGPD. |

O quadro a seguir apresenta a contribuição de cada característica para os Objetivos Específicos (OE1 a
OE6) definidos na seção anterior.

| ID | Característica de Produto (CP) | Contribuição principal (OE) | Contribuição secundária (OE) |
| :--- | :--- | :--- | :--- |
| CP1 | Portal institucional e agenda de atividades | OE1 | OE5 |
| CP2 | Registro de doações de itens | OE2 | OE5 |
| CP3 | Cadastro de famílias e participantes | OE3 | OE6 |
| CP4 | Inscrição em atividades e organização do atendimento | OE3 | OE4 |
| CP5 | Chamada digital e controle de frequência | OE4 | OE5 |
| CP6 | Relatórios e indicadores de impacto | OE5 | OE1 |
| CP7 | Perfis de acesso e proteção de dados | OE6 | OE3 |

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

A associação não utiliza hoje nenhum sistema de gestão. Suas ferramentas atuais são as redes sociais, os
grupos de WhatsApp, os cadernos de anotação e um cadastro isolado no computador da sede. O quadro
a seguir compara essas alternativas com o que a solução proposta pretende resolver.

| Alternativa | O que resolve hoje | Limitações para a associação |
| :--- | :--- | :--- |
| Instagram e Facebook | Divulgação das ações, alcance da comunidade e captação de novos apoiadores. | Conteúdo temporário e de difícil navegação; não organiza agenda nem situação das atividades; nenhuma ferramenta de gestão. |
| Cadernos, papel e cadastro isolado no computador | Registro das doações, do cadastro das famílias e da chamada das crianças. | Registros se perdem por falta de tempo; dados não se conectam; nenhum relatório; consulta depende de quem está com o caderno. |
| Grupos de WhatsApp | Comunicação interna entre voluntárias e aviso rápido de distribuições e novas turmas. | Informação se perde no histórico; não gera registro nem relatório; não organiza inscrição nem presença. |
| Ferramentas genéricas gratuitas (formulários e planilhas online) | Coleta de dados e planilhas simples, sem custo. | Exigem montagem e manutenção técnica; vocabulário genérico; não tratam senhas, rodízio nem a regra de faltas da associação; dados pessoais espalhados em planilhas sem controle de acesso. |

A solução proposta se diferencia por três aspectos:

- **Feita para a operação real da associação:** Trabalha com o vocabulário e as regras que já existem
  (rodízio mensal do Domingo Recreativo e a regra de cinco faltas), em vez de exigir que a associação
  se adapte a um sistema genérico;
- **Registro rápido no lugar do caderno:** O registro é desenhado para levar menos tempo do que a
  anotação manual, que é a causa direta das doações não registradas hoje;
- **Dados que viram prestação de contas:** Os mesmos registros do dia a dia geram automaticamente
  os relatórios de impacto que a associação hoje não consegue produzir para seus parceiros.

## 2.6 Viabilidade da Proposta

A proposta é viável no contexto da disciplina, considerando o prazo disponível, a equipe de 6 integrantes
e o acesso real ao cliente, que mantém contato frequente por WhatsApp. Ainda que parte da equipe
esteja em processo de aprendizado das tecnologias escolhidas, a proposta foi estruturada de forma
compatível com essa realidade, com entregas incrementais, priorização das funcionalidades essenciais e
validações frequentes com a coordenação.

Para organizar o trabalho, serão utilizadas sprints de 1 semana, totalizando 12 sprints. Esse ritmo
permite ajustar o escopo a cada ciclo, reservar a primeira sprint também para o aprendizado das
tecnologias e garantir a entrega de um MVP (Produto Mínimo Viável) funcional.

O MVP será composto pelo portal institucional com a agenda das atividades (CP1) e pelo registro digital
das doações de itens (CP2), por serem as duas frentes que atacam as dores mais imediatas relatadas pela
associação: a informação dispersa e as doações que se perdem por não serem registradas. As demais
características (CP3 a CP7) seguem nos ciclos posteriores, conforme a priorização do backlog.

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

Assim, a proposta é considerada viável, desde que o escopo do MVP permaneça controlado, as
prioridades sejam mantidas ao longo das sprints e a equipe reserve tempo na primeira sprint para o
aprendizado das tecnologias escolhidas.

## 2.7 Benefícios Esperados

- **Para o cliente:** Fim da perda de registros de doações por falta de tempo; visibilidade sobre o que a
  associação recebe e distribui; relatórios prontos para prestação de contas a CEASA-DF, ASFA, UDF e
  demais parceiros, hoje inexistentes; redução do trabalho manual da coordenação com cadernos e
  listas de chamada; acesso organizado por perfil entre as cinco coordenadoras; e um canal
  institucional próprio que mostra o trabalho realizado de forma permanente, apoiando a captação de
  novos apoiadores.
- **Para os usuários:** Famílias beneficiárias com informação clara sobre o que está ativo, em que dias e
  horários, e como participar; voluntárias e voluntários com um canal claro para saber onde ajudar; e
  doadores com informação objetiva sobre o que a associação precisa e como entregar suas doações.
