# 11. Rastreabilidade

A rastreabilidade aqui é **memória suficiente**: a equipe mantém só os vínculos que respondem às
perguntas do projeto. O que é vigente, de onde veio, o que condiciona, como se avalia, quando entra e
o que mudou. Esta página define **os tipos de vínculo** e **onde cada um é mantido**. Os vínculos
de cada requisito ficam na ficha dele, no [catálogo](../08-requisitos/index.md).

## 11.1 Estrutura do escopo

```text
Problema (1.4)
  └─ Objetivos específicos OE1–OE6 (2.2)
       └─ Características de produto CP1–CP7 (2.3)
            └─ Catálogo integrado (8): um registro por RF
                 ├─ RNFs (8.1) ............. aplicam-se ao RF
                 ├─ Regras de negócio (8.2) . condicionam o RF
                 ├─ Critérios de aceitação .. avaliam o RF (dentro da ficha)
                 ├─ Dependências ............ outros RFs (dentro da ficha)
                 └─ Decisões e evidências ... explicam mudanças (histórico, atas)
                 Atributos: prioridade · entrega (MVP, release, sprint) · situação
```

## 11.2 Tipos de vínculo

| Vínculo | Liga | Onde é mantido | Pergunta que responde |
| :--- | :--- | :--- | :--- |
| Problema → objetivo | Problema identificado e OE | Tabela 11.3, nesta página | Por que o produto existe? |
| Objetivo → característica | OE e CP | [2.3 Características de produto](../01-visao-produto/index.md#23-caracteristicas-de-produto) | Que capacidade atende cada objetivo? |
| Característica → requisito | CP e RF | Ficha do RF, campo *Origem* | De onde veio este requisito? |
| Requisito → RNF | RF e RNF | Ficha do RF, campo *Condições* (os gerais valem para todos) | Que qualidade ele precisa ter? |
| Requisito → regra | RF e RN | Ficha do RF, campo *Condições* | Que regra condiciona o comportamento? |
| Requisito → critério | RF e CA | Dentro da ficha, campo *Critérios* | Como saber se está pronto e aceito? |
| Requisito → requisito | Dependência | Ficha do RF, campo *Condições* | O que precisa vir antes? |
| Requisito → entrega | RF, MVP, release e sprint | Ficha do RF, campo *Entrega* | Quando entra? |
| Decisão → requisito | Ata ou refinamento e RF | Ficha do RF, campo *Evolução*, e [Histórico](../14-historico/index.md) | Por que mudou? |
| Critério → evidência | CA e teste ou validação | [DoD](../13-dor-dod/index.md) e [Evidências](../00-evidencias/index.md) | Como sabemos que foi cumprido? |

Cada vínculo é mantido **em um só lugar**. As páginas de RNFs e de regras não listam os RFs que as
aplicam, para não criar uma segunda cópia que precise ser atualizada.

## 11.3 Do problema às características de produto

| Problema identificado (1.4) | Objetivo Específico (2.2) | Característica de Produto (2.3) |
| :--- | :--- | :--- |
| Doações de itens anotadas em cadernos e, por falta de tempo, nem sempre registradas | OE2 | CP2 – Registro de doações de itens |
| Não existe relatório organizado do que foi recebido e distribuído | OE5 | CP6 – Relatórios e indicadores de impacto |
| A prestação de contas aos parceiros depende da memória das coordenadoras | OE5 | CP6 – Relatórios e indicadores de impacto |
| O cadastro das famílias fica em um computador da sede, sem ligação com a presença e as doações | OE3 | CP3 – Cadastro de famílias e participantes; CP4 – Inscrição em atividades |
| A chamada é feita em papel e a regra de faltas depende de conferência manual | OE4 | CP5 – Chamada digital e controle de frequência |
| A Sacola Verde não registra quem foi atendido em cada distribuição | OE2 (parcial) | CP2 – a saída de itens para a família fica registrada no RF10; o sistema de senhas ficou fora do escopo (seção [15](../15-licoes/index.md), Unidade 1) |
| A comunidade não sabe quais atividades estão ativas, suspensas ou dependem de doação | OE1 | CP1 – Portal institucional e agenda de atividades |
| Informações institucionais e vagas dependem de Instagram, panfletos e grupos de WhatsApp | OE1 | CP1 – Portal institucional e agenda de atividades |
| Tratamento de dados pessoais de famílias em vulnerabilidade (efeito emergente, seção [3](../01-visao-produto/index.md#3-intervencao-social)) | OE6 | CP7 – Perfis de acesso e proteção de dados |

Da característica ao requisito, use o filtro do catálogo:
[CP1](../08-requisitos/index.md#cp-cp1) ·
[CP2](../08-requisitos/index.md#cp-cp2) ·
[CP3](../08-requisitos/index.md#cp-cp3) ·
[CP4](../08-requisitos/index.md#cp-cp4) ·
[CP5](../08-requisitos/index.md#cp-cp5) ·
[CP6](../08-requisitos/index.md#cp-cp6) ·
[CP7](../08-requisitos/index.md#cp-cp7).

## 11.4 Exemplo: percorrendo o RF09

| Pergunta | Resposta | Onde |
| :--- | :--- | :--- |
| Que problema resolve? | Doações anotadas em cadernos e nem sempre registradas | Tabela 11.3 |
| Que objetivo e característica? | OE2 · CP2 – Registro de doações de itens | Ficha do [RF09](../08-requisitos/index.md#rf09), *Origem* |
| O que declara? | Permitir que Voluntário ou Coordenação registrem a entrada de itens doados | Ficha, *Declaração vigente* |
| O que condiciona? | RNF01 (até três passos), RNF19 (histórico de alterações), RN02 (unidade da categoria) | Ficha, *Condições* |
| Como se avalia? | CA-RF09-01 a CA-RF09-06 | Ficha, *Critérios* |
| Quando entra? | MVP, release R1, Sprint 6 | Ficha, *Entrega* |
| Como se comprova? | Teste automatizado no CI e teste com uma voluntária, sem ajuda | [DoD, exemplo 13.5](../13-dor-dod/index.md#135-exemplo-de-aplicacao-rf09-registrar-doacao-recebida) |

## 11.5 Quando revisar os vínculos

| Momento | Cuidado com o escopo | Evidência suficiente |
| :--- | :--- | :--- |
| Planejamento da sprint | Conferir seleção, confirmação e dependências | Fichas com situação atual |
| Após uma decisão | Atualizar conteúdo, atributos e vínculos afetados | Decisão registrada no histórico e na ficha |
| Revisão da sprint | Incorporar os efeitos do feedback e comunicar | Encaminhamentos e atualizações registrados |
| Fechamento da entrega | Preservar a referência e distinguir pendências | Versão identificada do conjunto |

Uma mudança não é feita só no ponto em que surgiu: a equipe confere os elementos relacionados
(regra, critério, mensagem de interface, fluxo e entrega) e atualiza o que foi afetado.
