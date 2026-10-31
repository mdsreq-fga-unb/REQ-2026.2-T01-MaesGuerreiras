# 9. Priorização

Esta página explica **como** a prioridade é decidida. O **resultado** (valor, esforço, risco,
justificativa e posição de cada requisito) fica na ficha de cada RF, no
[catálogo integrado](../08-requisitos/index.md#ordem). Aqui não há lista de requisitos.

## 9.1 Os quatro fatores

A ordem do backlog considera quatro fatores:

1. **Valor de negócio**, avaliado com o cliente na escala MoSCoW de 1 a 4. Cada valor indica a
   **fonte** que o justifica (ata, validação, questionário).
2. **Risco**, avaliado pela equipe: itens com tecnologia nova, segurança ou LGPD vêm cedo, para que
   um eventual fracasso aconteça enquanto ainda dá tempo de mudar a arquitetura.
3. **Capacidade de entrega**: os requisitos são agrupados em releases que fecham um objetivo da
   persona ([mapa de histórias](../12-mapa/index.md)), para gerar feedback útil da coordenação.
4. **Dependências**: o item do qual outros dependem vem antes. Quando possível, a dependência é
   resolvida combinando itens ou extraindo a parte comum.

## 9.2 Escalas usadas nas fichas

| Atributo | Escala | Quem define |
| :--- | :--- | :--- |
| Valor de negócio | 4 Must · 3 Should · 2 Could · 1 Won't now (MoSCoW) | Cliente, **por requisito**, com critério e justificativa ([planilha v2](https://docs.google.com/spreadsheets/d/1k2YFjudQxFV-SecOvGi2Ta5RNQU3BmGNQqUgQscksvA/edit?usp=sharing)) |
| Esforço técnico | Média de três notas de 1 a 4: **esforço** (1: até 2 h · 2: 2 a 6 h · 3: 6 a 12 h · 4: mais de 12 h), **complexidade** e **lacuna de capacidade**, com uma casa decimal. A coluna da matriz é a média arredondada (2,5 vai para 3). | Equipe |
| Risco | Alto · Médio · Baixo, com o motivo | Equipe |
| Nível no iceberg | **Topo** (pronto pela DoR ou em refinamento final) · **Meio** (declaração escrita, critérios em rascunho) · **Base** (só estimado) | Equipe, no refinamento |
| Situação | Concluída (passou na DoD) · Em andamento · Pronta (passou na DoR) · A refinar · Não iniciada | Equipe, na revisão |

## 9.3 Matriz valor × esforço

A matriz cruza o valor de negócio (linhas) com o esforço técnico (colunas). Cada quadrante tem um
encaminhamento padrão:

| Valor ↓ / Esforço → | 1 · Baixo | 2 · Moderado | 3 · Alto | 4 · Muito alto |
| :--- | :--- | :--- | :--- | :--- |
| **4 · Must** | Prioridade máxima | Forte candidato ao MVP | Avaliar viabilidade | Planejar, reduzir ou decompor |
| **3 · Should** | Forte candidato ao MVP | Candidato ao MVP | Avaliar contexto | Entrega futura |
| **2 · Could** | Avaliar oportunidade | Entrega futura | Entrega futura | Baixa prioridade |
| **1 · Won't now** | Avaliar oportunidade | Baixa prioridade | Baixa prioridade | Não priorizar agora |

A matriz preenchida com os requisitos, e a escolha do MVP que ela orienta, está na seção
[10.4](../10-mvp/index.md#104-matriz-que-leva-a-escolha-do-mvp). O quadrante de cada requisito também
aparece na ficha dele, no campo *Priorização*. Para ver os requisitos de um quadrante no catálogo,
use os filtros ou um destes atalhos:
[4·1](../08-requisitos/index.md#valor-4-esforco-1) ·
[4·2](../08-requisitos/index.md#valor-4-esforco-2) ·
[3·1](../08-requisitos/index.md#valor-3-esforco-1) ·
[3·2](../08-requisitos/index.md#valor-3-esforco-2) ·
[3·3](../08-requisitos/index.md#valor-3-esforco-3) ·
[2·1](../08-requisitos/index.md#valor-2-esforco-1) ·
[2·2](../08-requisitos/index.md#valor-2-esforco-2) ·
[2·3](../08-requisitos/index.md#valor-2-esforco-3) ·
[1·2](../08-requisitos/index.md#valor-1-esforco-2).

!!! note "A matriz orienta, não decide"
    Um requisito fora dos quadrantes de candidatos só entra no MVP por exceção, com a justificativa
    registrada na ficha. O critério completo do recorte está na página do [MVP](../10-mvp/index.md#103-criterio-do-recorte).

## 9.4 Decisões gerais de priorização

- **LGPD e imagem:** o consentimento é dividido em 4 finalidades. A autorização ou recusa de imagem,
  com meios e revogação, fica no fluxo do RF42. O RF43 trata da solicitação de exclusão de dados.
- **Itens necessários:** a lista pública é 100% manual pela Coordenação
  ([RN03](../08-requisitos/regras.md#rn03)).
- **Risco antes:** autenticação, perfis e consentimento entram na primeira sprint que trata dados
  pessoais, antes do cadastro de famílias.

## 9.5 Pendências

- Volume de famílias e participantes e fluxo mensal de doações, para dimensionar banco e
  infraestrutura.
- Prioridade do bloco de LGPD avançada (RF43, RF45), a confirmar com a coordenação.
- Comunicar ao professor que RF06 e RF07 (valor 1) não estão planejados neste semestre.
- Confirmar com a cliente as justificativas de RF18 e RF24 na planilha v2.

## 9.6 Como atualizar uma prioridade

1. Mude valor, esforço, risco ou posição **na ficha do RF**, no catálogo, e reordene a tabela de
   visão geral.
2. Registre a decisão, o motivo e a origem no [Histórico de evolução](../14-historico/index.md).
3. Se a mudança alterar a release, atualize o [mapa de histórias](../12-mapa/index.md) no mesmo commit.
