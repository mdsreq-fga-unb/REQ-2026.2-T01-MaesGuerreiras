# Evolução da Proposta (v0.1 → v0.3)

A proposta de projeto passou por uma mudança relevante de escopo entre a primeira versão (v0.1,
14/08/2026) e a versão atual (v0.3, 04/09/2026), depois que a equipe aplicou um questionário mais
aprofundado à associação e recebeu material institucional adicional. Esta página registra o que mudou
e por quê.

## O que motivou a mudança

Na v0.1, o levantamento inicial havia sido feito a partir de uma visão mais geral da associação, trazida
por Makio Augusto Cândido, voluntário que já era o principal ponto de contato da equipe. Na v0.3, com
o apoio do próprio Makio, a equipe conseguiu conversar diretamente com a coordenadora Daiane e
mapear com mais precisão a operação interna: as cinco coordenadoras, as frentes de atuação com dias e
horários específicos, e os problemas concretos do dia a dia (cadernos de doações, chamada em papel,
atendimento por senha na Sacola Verde). Esse contato mais próximo revelou que a dor mais urgente da
associação não era a arrecadação financeira, e sim a perda de registros do trabalho manual já realizado.

Makio segue com papel central no projeto: é ele quem primeiro recebe e avalia o que a equipe produz,
antes de levar para validação da coordenação (Daiane e as demais coordenadoras). Por isso, ele
participa diretamente de todas as revisões de sprint (seção [7.2](../07-interacao/index.md#72-comunicacao)) e
segue com influência alta no mapa de stakeholders (seção [1.6](../01-cenario/index.md#16-mapa-de-stakeholders)).

## Principais mudanças

| Aspecto | v0.1 (proposta inicial) | v0.3 (versão atual) |
| :--- | :--- | :--- |
| Representante do cliente | Makio Augusto Cândido, voluntário de apoio, como único ponto de contato | Makio segue como principal ponte com a equipe, agora ao lado de Daiane (coordenadora), Maria Guerra (presidente) e as coordenadoras Luzia, Liz e Cleide, mapeadas com mais detalhe |
| Identificação institucional | Nome e tipo da associação, sem CNPJ nem data de fundação | CNPJ, data de fundação e endereço da sede formalizados |
| Problema central | Dependência do Instagram para comunicação e taxas cobradas pela Vakinha.com.br nas doações financeiras | Registros manuais (cadernos, chamada em papel, cadastro isolado) que se perdem e não geram relatórios |
| Natureza das doações tratadas | Doações financeiras via PIX/QR code, sem taxas de intermediação | Doações de itens (alimentos, roupas, brinquedos, cestas básicas) recebidas e distribuídas pela associação |
| Objetivos específicos | Visibilidade institucional, doação sem taxas, inscrições e presença, trilhas de conteúdo educativo, indicadores de impacto | Agenda de atividades, registro digital de doações de itens, cadastro de famílias e inscrições, chamada digital com regra de frequência, relatórios para prestação de contas, perfis de acesso e LGPD |
| Tecnologias | Ainda não definidas | Nuxt.js, Supabase e hospedagem em Vercel ou Netlify |
| Segmentação de usuários | Doadores individuais, parceiros institucionais, famílias beneficiárias, voluntárias | Coordenação (5 perfis distintos), voluntárias e voluntários, famílias beneficiárias, doadores de itens, parceiros institucionais |

## O que se manteve

Apesar da mudança de foco, alguns pontos identificados já na v0.1 seguem válidos na v0.3: a associação
já tinha alcance real na comunidade e múltiplas frentes de atuação consolidadas; a equipe de
coordenação tem baixa familiaridade com ferramentas digitais além das redes sociais e do WhatsApp,
o que continua exigindo uma interface simples; o projeto segue sendo conduzido em regime pro
bono, sem orçamento, restringindo hospedagem e serviços a alternativas gratuitas; e o escopo
levantado continua ambicioso para um semestre, exigindo priorização rigorosa do MVP.
