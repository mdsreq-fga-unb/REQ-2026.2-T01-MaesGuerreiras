# Evolução da Proposta

Esta página registra como a proposta mudou ao longo da disciplina e por quê. Cada versão corresponde
ao estado do documento ao final de uma unidade.

| Versão | Data | Unidade | Resumo |
| :--- | :--- | :--- | :--- |
| v0.1 | 14/08/2026 | Unidade 1 | Proposta inicial, focada em visibilidade institucional e doações financeiras |
| v0.3 | 04/09/2026 | Unidade 1 | Mudança de foco para a perda dos registros manuais (doações de itens, cadastro e chamada) |
| v0.4 | 13/10/2026 | Unidade 2 | Requisitos declarados, MVP validado com o cliente, backlog com critérios de aceitação, rastreabilidade, DoR e DoD |
| v0.5 | 29/10/2026 | Unidade 2 | Escopo reorganizado em catálogo integrado, com uma ficha por requisito |

## Unidade 2: v0.4 → v0.5

### O que motivou as mudanças

Na aula de Organização e Atualização de Requisitos (29/10/2026), o professor usou o nosso site
como caso. A estrutura lógica (problema → objetivos → características → requisitos) estava adequada,
mas a apresentação repetia cada requisito em várias páginas: declaração, priorização, MVP e
rastreabilidade. Uma mudança exigia conferir vários lugares, e algumas informações já estavam
divergentes. A orientação foi refazer a estrutura antes de continuar, com um catálogo único.

### Principais mudanças

| Aspecto | v0.4 | v0.5 |
| :--- | :--- | :--- |
| Requisitos (8) | Lista de RFs, matriz RF × CP × RNF, matriz 4×4 com os RFs em cada célula, lista do MVP | Catálogo integrado: uma ficha por RF, com filtros por característica, MVP, release, sprint e situação |
| Histórias de usuário | 48 histórias com ID próprio (US01 a US45, com a e b), uma camada a mais sobre os RFs | Intenção "Como…, quero…, para…" dentro da ficha do RF, sem ID próprio |
| Critérios de aceitação | Seção 10.5, separados dos requisitos | Dentro da ficha do RF (CA-RF##-nn) |
| Priorização e MVP | Repetiam a lista de RFs em quadrantes e releases | Explicam método, critério do recorte e validação; o resultado está na ficha |
| Rastreabilidade | Cadeia na seção 5.2 e matrizes em 8.4 | Tipos de vínculo e onde cada um é mantido (seção 11); vínculos na ficha |
| Histórico | Refinamentos ao fim do backlog | Página própria (seção 14), ligada às fichas |
| Visão do produto e processo | Sete páginas (1 a 7), com papéis, riscos, benefícios, práticas e reuniões descritos em mais de um lugar | Uma página, Visão do Produto, com as sete seções e cada assunto em um só lugar |

## Unidade 2: v0.3 → v0.4

### O que motivou as mudanças

Na Unidade 2, a proposta deixou de descrever apenas o produto em nível de negócio e passou a
declarar os requisitos em nível de produto. Quatro fontes de feedback orientaram as mudanças:

- *Correções do monitor e do professor:* pediram a separação das regras de negócio do texto dos
  RFs, a divisão do consentimento de dados e da autorização de imagem, a reclassificação de RNFs e
  ajustes na cadência e nos entregáveis do cronograma (ata de [22/09/2026](../00-atas/index.md) e
  issue #8 do repositório).
- *Revisão por pares:* outra equipe avaliou nossos RFs e RNFs. A equipe analisou cada apontamento e
  decidiu aceitar, aceitar parcialmente ou não aceitar (ata de 28/09/2026).
- *Reuniões com o cliente:* em vez do questionário assíncrono da Unidade 1, a equipe fez reuniões
  gravadas com Makio para avaliar o valor de negócio dos requisitos e validar o MVP (página de
  [Evidências e Gravações](../00-evidencias/index.md)).
- *Conteúdo da disciplina:* as aulas sobre elicitação, análise e consenso, declaração e
  verificação e validação de requisitos levaram à criação da DoR, da DoD, do backlog com user
  stories e dos critérios de aceitação sem Given-When-Then.

### Principais mudanças

| Aspecto | v0.3 (fim da Unidade 1) | v0.4 (fim da Unidade 2) |
| :--- | :--- | :--- |
| Características de produto (2.3) | Descritas como "A solução deverá…", com detalhes de produto misturados (campos, tempos, telas) | Descritas em nível de usuário, cada uma com seu valor de negócio (VN1 a VN7); a ligação CP × OE foi simplificada |
| Requisitos (8) | Ainda não declarados | 45 RFs no formato verbo + objeto, com agente definido, e 19 RNFs com critério verificável; glossário, tabela de permissões e matriz de rastreabilidade RF × CP × RNF |
| Regras de negócio | Misturadas ao texto dos requisitos | Separadas dos RFs e registradas na lista RN01 a RN20 (10.2), ligadas às histórias que as aplicam |
| Consentimento e imagem | Proteção dos dados por perfil de acesso (CP7), sem detalhar consentimento nem uso de imagem | Consentimento fracionado em 4 finalidades (cadastro e atendimento, frequência, contato com a família e relatórios a apoiadores) e autorização de imagem por meio de divulgação, registrados no mesmo fluxo (RF42) |
| Regra de faltas | Sinalizar a criança ao atingir 5 faltas sem justificativa | 3 faltas sem justificativa, validado com o cliente, com sinalização para contato com a família |
| Priorização | Prevista com MoSCoW, ainda não aplicada | Valor de negócio (MoSCoW, 1 a 4) avaliado com o cliente e esforço técnico (esforço, complexidade e lacuna de capacidade) avaliado pela equipe, cruzados na matriz 4 × 4 (8.5) |
| Escopo do MVP | Restrito a CP1, CP7 e CP2, com CP1 condicionada à confirmação da coordenação | 18 RFs validados com Makio: doações (CP2), famílias e participantes (CP3), turma e inscrição (parte do CP4), chamada (CP5) e acesso e consentimento (parte do CP7). Portal (CP1) e relatórios (CP6) ficam para depois do MVP |
| Lista de itens necessários | Não detalhada | Publicada e mantida manualmente pela Coordenação (RF13), decisão tomada com o cliente para simplificar o MVP |
| Rastreabilidade (5.2) | Tabela de exemplo com CP1 e CP2 | Cadeia completa do problema à evidência: problema → objetivo geral → OE → CP → RF/RNF → tema e épico → user story → regra de negócio → critério de aceitação → evidência |
| Cronograma (6) | Cadências diferentes entre as sprints; perfis de acesso em uma sprint isolada | Sprints de 2 semanas; autenticação, perfis e consentimento entram junto com a primeira sprint que trata dados pessoais; entregáveis de ER e de qualidade definidos para toda sprint de desenvolvimento |
| Backlog (10) | Apenas previsto no processo | 45 user stories (uma por RF) em 4 temas e 7 épicos, priorizadas em 4 níveis, com mapa de histórias, linha do MVP e critérios de aceitação das primeiras histórias do MVP |
| Qualidade dos requisitos (9) | Sem critérios formais | Definição de Preparado (DoR) e Definição de Pronto (DoD), com checklists aplicados antes e depois de cada sprint |
| Registro do processo | Gravação da apresentação | Página de Atas de Reunião e gravações das reuniões de feedback, de avaliação de valor e de validação do MVP |

### O que se manteve

O problema central (registros manuais que se perdem), o objetivo geral, os seis objetivos
específicos e as sete características de produto continuam os mesmos da v0.3. A pilha tecnológica
(Nuxt.js, Supabase e hospedagem em Vercel ou Netlify), o processo ScrumXP, o regime pro bono sem
orçamento e o papel de Makio como principal ponte com a coordenação também se mantiveram.

## Unidade 1: v0.1 → v0.3

A proposta de projeto passou por uma mudança relevante de escopo entre a primeira versão (v0.1,
14/08/2026) e a v0.3 (04/09/2026), depois que a equipe aplicou um questionário mais aprofundado à
associação e recebeu material institucional adicional.

### O que motivou a mudança

Na v0.1, o levantamento inicial havia sido feito a partir de uma visão mais geral da associação, trazida
por Makio Augusto Cândido, voluntário que já era o principal ponto de contato da equipe. Na v0.3, com
o apoio do próprio Makio, a equipe conseguiu conversar diretamente com a coordenadora Daiane e
mapear com mais precisão a operação interna: as cinco coordenadoras, as frentes de atuação com dias e
horários específicos, e os problemas concretos do dia a dia (cadernos de doações, chamada em papel,
atendimento por senha na Sacola Verde). Esse contato mais próximo revelou que a dor mais urgente da
associação não era a arrecadação financeira, e sim a perda de registros do trabalho manual já realizado.

Makio segue com papel central no projeto: é ele quem primeiro recebe e avalia o que a equipe produz,
antes de levar para validação da coordenação (Daiane e as demais coordenadoras). Por isso, ele
participa diretamente de todas as revisões de sprint (seção [7.2](../01-visao-produto/index.md#72-comunicacao)) e
segue com influência alta no mapa de stakeholders (seção [1.6](../01-visao-produto/index.md#16-mapa-de-stakeholders)).

### Principais mudanças

| Aspecto | v0.1 (proposta inicial) | v0.3 |
| :--- | :--- | :--- |
| Representante do cliente | Makio Augusto Cândido, voluntário de apoio, como único ponto de contato | Makio segue como principal ponte com a equipe, agora ao lado de Daiane (coordenadora), Maria Guerra (presidente) e as coordenadoras Luzia, Liz e Cleide, mapeadas com mais detalhe |
| Identificação institucional | Nome e tipo da associação, sem CNPJ nem data de fundação | CNPJ, data de fundação e endereço da sede formalizados |
| Problema central | Dependência do Instagram para comunicação e taxas cobradas pela Vakinha.com.br nas doações financeiras | Registros manuais (cadernos, chamada em papel, cadastro isolado) que se perdem e não geram relatórios |
| Natureza das doações tratadas | Doações financeiras via PIX/QR code, sem taxas de intermediação | Doações de itens (alimentos, roupas, brinquedos, cestas básicas) recebidas e distribuídas pela associação |
| Objetivos específicos | Visibilidade institucional, doação sem taxas, inscrições e presença, trilhas de conteúdo educativo, indicadores de impacto | Agenda de atividades, registro digital de doações de itens, cadastro de famílias e inscrições, chamada digital com regra de frequência, relatórios para prestação de contas, perfis de acesso e LGPD |
| Tecnologias | Ainda não definidas | Nuxt.js, Supabase e hospedagem em Vercel ou Netlify |
| Segmentação de usuários | Doadores individuais, parceiros institucionais, famílias beneficiárias, voluntárias | Coordenação (5 perfis distintos), voluntárias e voluntários, famílias beneficiárias, doadores de itens, parceiros institucionais |

### O que se manteve

Apesar da mudança de foco, alguns pontos identificados já na v0.1 seguem válidos na v0.3: a associação
já tinha alcance real na comunidade e múltiplas frentes de atuação consolidadas; a equipe de
coordenação tem baixa familiaridade com ferramentas digitais além das redes sociais e do WhatsApp,
o que continua exigindo uma interface simples; o projeto segue sendo conduzido em regime pro
bono, sem orçamento, restringindo hospedagem e serviços a alternativas gratuitas; e o escopo
levantado continua ambicioso para um semestre, exigindo priorização rigorosa do MVP.
