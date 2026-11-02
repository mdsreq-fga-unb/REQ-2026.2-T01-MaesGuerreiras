---
hide:
  - toc
---

# 10. MVP

Esta página registra o **objetivo** do primeiro incremento, os **limites**, o **critério** e a
**matriz** que levaram ao recorte, e a **validação** com o cliente. A situação de cada requisito
(MVP sim, Fatia 2 ou depois) é um atributo da ficha no catálogo:

- [MVP: 19 RFs](../08-requisitos/index.md#mvp-sim)
- [Fatia 2: candidatos de valor 3](../08-requisitos/index.md#mvp-complemento)
- [Depois do MVP](../08-requisitos/index.md#mvp-nao)

## 10.1 Objetivo do incremento

O MVP deve permitir que a associação **substitua o registro em papel** nas duas rotinas que mais
perdem informação hoje:

- **R1 · A doação chega à família:** a coordenadora e a voluntária registram uma doação e a entregam
  a uma família cadastrada com consentimento.
- **R2 · A educadora faz a chamada:** uma educadora faz a chamada de uma turma e as faltas ficam
  registradas e justificadas.

## 10.2 Limites

Ficam fora do MVP, e são entregues depois:

- Portal institucional e agenda pública (CP1), que seguem em uma trilha paralela.
- Relatórios, painel de indicadores e sinalização de faltas (CP6 e parte do CP5).
- LGPD avançada: solicitação de exclusão, consulta de autorização de imagem e histórico de alterações.

## 10.3 Critério do recorte

O valor de negócio (avaliado com o cliente) e o esforço técnico (avaliado pela equipe) são cruzados
na matriz 4×4, com as escalas da [priorização](../09-priorizacao/index.md#92-escalas-usadas-nas-fichas).
São **candidatos ao MVP** os requisitos de três quadrantes:

1. valor 4 com esforço 1 (**prioridade máxima**);
2. valor 4 com esforço 2 (**forte candidato**);
3. valor 3 com esforço 1 (**forte candidato**, porque é barato).

Dentro desses quadrantes, entra o que forma o fluxo mínimo de cada frente (doações, cadastros,
turmas e chamada) e as bases de acesso e consentimento sem as quais nada pode ser usado com dados
reais. A matriz orienta, não decide: um requisito fora desses quadrantes só entra por exceção, com a
justificativa registrada na ficha.

## 10.4 Matriz que leva à escolha do MVP

Matriz refeita a partir da [planilha de priorização v2](https://docs.google.com/spreadsheets/d/1k2YFjudQxFV-SecOvGi2Ta5RNQU3BmGNQqUgQscksvA/edit?usp=sharing): a cliente avaliou o valor de
negócio **de cada requisito**, com justificativa, e a equipe avaliou esforço, complexidade e lacuna
de capacidade. Os requisitos <span class="rf mvp">destacados</span> formam o MVP. Cada ID abre a
ficha do requisito, onde estão a justificativa da cliente e o detalhe do esforço.

<div class="matriz-mvp" markdown="1">

| Valor ↓ / Esforço → | 1 · Baixo | 2 · Moderado | 3 · Alto | 4 · Muito alto |
| :--- | :--- | :--- | :--- | :--- |
| **4 · Muito alto** | [RF11](../08-requisitos/index.md#rf11){ .rf .mvp title="Cadastrar categoria de item" } [RF20](../08-requisitos/index.md#rf20){ .rf .mvp title="Cadastrar turma de atividade" } [RF28](../08-requisitos/index.md#rf28){ .rf .mvp title="Registrar frequência do participante" } [RF39](../08-requisitos/index.md#rf39){ .rf .mvp title="Cadastrar usuário do sistema" } | [RF08](../08-requisitos/index.md#rf08){ .rf .mvp title="Cadastrar ou atualizar doador" } [RF09](../08-requisitos/index.md#rf09){ .rf .mvp title="Registrar doação recebida" } [RF10](../08-requisitos/index.md#rf10){ .rf .mvp title="Registrar destinação de doação" } [RF14](../08-requisitos/index.md#rf14){ .rf .mvp title="Cadastrar família" } [RF16](../08-requisitos/index.md#rf16){ .rf .mvp title="Cadastrar participante" } [RF18](../08-requisitos/index.md#rf18){ .rf .mvp title="Vincular participante a família" } [RF19](../08-requisitos/index.md#rf19){ .rf .mvp title="Consultar cadastro de participantes" } [RF23](../08-requisitos/index.md#rf23){ .rf .mvp title="Inscrever participante em turma" } [RF27](../08-requisitos/index.md#rf27){ .rf .mvp title="Abrir chamada do encontro" } [RF40](../08-requisitos/index.md#rf40){ .rf .mvp title="Atribuir perfil de acesso ao usuário" } [RF41](../08-requisitos/index.md#rf41){ .rf .mvp title="Autenticar usuário" } [RF42](../08-requisitos/index.md#rf42){ .rf .mvp title="Registrar consentimentos e autorizações (LGPD e Imagem)" } | — | — |
| **3 · Alto** | [RF29](../08-requisitos/index.md#rf29){ .rf .mvp title="Justificar falta" } [RF30](../08-requisitos/index.md#rf30){ .rf .mvp title="Corrigir registro de frequência" } [RF31](../08-requisitos/index.md#rf31){ .rf .mvp title="Consultar frequência do participante" } | [RF12](../08-requisitos/index.md#rf12){ .rf title="Consultar saldo de itens doados" } [RF13](../08-requisitos/index.md#rf13){ .rf title="Publicar lista de itens necessários" } [RF24](../08-requisitos/index.md#rf24){ .rf title="Cancelar inscrição de participante" } [RF25](../08-requisitos/index.md#rf25){ .rf title="Registrar participante em lista de espera" } [RF26](../08-requisitos/index.md#rf26){ .rf title="Consultar inscritos da turma" } [RF32](../08-requisitos/index.md#rf32){ .rf title="Sinalizar participante com faltas acima do limite" } [RF33](../08-requisitos/index.md#rf33){ .rf title="Gerar relatório de doações recebidas" } [RF34](../08-requisitos/index.md#rf34){ .rf title="Gerar relatório de doações distribuídas" } [RF36](../08-requisitos/index.md#rf36){ .rf title="Gerar relatório de famílias atendidas" } [RF38](../08-requisitos/index.md#rf38){ .rf title="Exportar relatório gerado" } [RF43](../08-requisitos/index.md#rf43){ .rf title="Registrar e acompanhar solicitação de exclusão de dados" } [RF45](../08-requisitos/index.md#rf45){ .rf title="Consultar autorização de uso de imagem vigente" } | [RF15](../08-requisitos/index.md#rf15){ .rf title="Atualizar ou inativar cadastro de família" } [RF17](../08-requisitos/index.md#rf17){ .rf title="Atualizar ou inativar cadastro de participante" } | — |
| **2 · Moderado** | [RF02](../08-requisitos/index.md#rf02){ .rf title="Atualizar conteúdo institucional" } [RF22](../08-requisitos/index.md#rf22){ .rf title="Encerrar turma de atividade" } | [RF01](../08-requisitos/index.md#rf01){ .rf title="Publicar conteúdo institucional" } [RF03](../08-requisitos/index.md#rf03){ .rf title="Cadastrar atividade na agenda" } [RF04](../08-requisitos/index.md#rf04){ .rf title="Atualizar atividade na agenda" } [RF35](../08-requisitos/index.md#rf35){ .rf title="Gerar relatório de frequência por turma" } [RF37](../08-requisitos/index.md#rf37){ .rf title="Consultar painel de indicadores" } [RF44](../08-requisitos/index.md#rf44){ .rf title="Consultar histórico de alterações de cadastro" } | [RF05](../08-requisitos/index.md#rf05){ .rf title="Consultar agenda de atividades" } [RF21](../08-requisitos/index.md#rf21){ .rf title="Atualizar turma de atividade" } | — |
| **1 · Baixo** | — | [RF06](../08-requisitos/index.md#rf06){ .rf title="Registrar solicitação de contato" } [RF07](../08-requisitos/index.md#rf07){ .rf title="Consultar solicitações de contato" } | — | — |

</div>

<p class="matriz-legenda"><span class="rf mvp">RF20</span> no MVP (19 RFs) · <span class="rf">RF21</span> fora do MVP: Fatia 2 ou entregas futuras.</p>

### Leitura dos quadrantes

| Quadrante | Encaminhamento |
| :--- | :--- |
| **Prioridade máxima** (valor 4 · esforço 1) | Entram no MVP. São bases simples de que os outros fluxos dependem: categorias, turmas, frequência e usuários. |
| **Forte candidato ao MVP** (valor 4 · esforço 2) | Entram no MVP. Formam o fluxo mínimo de doação (entrada e saída), cadastro, inscrição, chamada, acesso e consentimento. |
| **Avaliar viabilidade** (valor 4 · esforço 3) | Nenhum requisito ficou aqui. Na nova avaliação, RF09 e RF42 caíram para esforço 2: o registro de doação reaproveita a estrutura de doador e categoria, e as finalidades de consentimento já estão validadas. |
| **Forte candidato ao MVP** (valor 3 · esforço 1) | Entram no MVP. São baratos porque aproveitam a mesma tela da chamada (RF27 e RF28). |
| **Candidato ao MVP** (valor 3 · esforço 2) | Primeiros da Fatia 2, conforme a capacidade das sprints. RF12 e RF26 podem antecipar se sobrar tempo. |
| **Avaliar contexto** (valor 3 · esforço 3) | Fatia 2. Mantêm o cadastro atualizado, mas não são necessários no início do uso. |
| **Avaliar oportunidade** (valor 2 · esforço 1) | Podem entrar como ganho rápido, se sobrar tempo. RF02 só faz sentido junto com o RF01. |
| **Entrega futura** (valor 2 · esforço 2 e 3) | Portal, agenda, painel e consultas complementares: depois do MVP. |
| **Baixa prioridade** (valor 1 · esforço 2) | Não priorizar agora. Duplicam canais que já funcionam (Instagram e WhatsApp). |

!!! note "Resultado"
    O MVP tem **19 RFs**, todos dos três quadrantes de candidatos. Nenhum RF precisou
    entrar por exceção. Em relação ao MVP validado em 28/09/2026 (18 RFs), **entram** RF29, RF30 e
    RF31 e **saem** RF12 e RF26, que passam para a Fatia 2. A leitura do quadrante de cada requisito
    também está na ficha dele, campo *Priorização*.

## 10.5 Validação

**Primeira avaliação (25/09 e 28/09/2026):** o valor de negócio foi perguntado por característica
de produto, um nível de abstração acima do requisito. Isso levou a uma matriz em que quase todos os
RFs ficaram com valor 4 e a escolha do MVP precisou de exceções. Evidência: gravações em
[Evidências e Gravações](../00-evidencias/index.md).

**Avaliação atual:** a equipe reformulou o instrumento e a cliente avaliou **cada requisito**
individualmente, escolhendo o valor (MoSCoW), o critério principal e escrevendo a justificativa.
A equipe avaliou esforço, complexidade e lacuna de capacidade de cada RF. O resultado é a matriz da
seção 10.4. Evidência: [planilha de priorização v2](https://docs.google.com/spreadsheets/d/1k2YFjudQxFV-SecOvGi2Ta5RNQU3BmGNQqUgQscksvA/edit?usp=sharing).

!!! note "Releases alinhadas à matriz (31/10/2026)"
    A equipe decidiu que as releases seguem a matriz. R1 e R2 têm exatamente os 19 RFs do MVP, que
    fecha na Sprint 7 (16/11/2026). RF21, RF22, RF25 e RF26 passaram para a R3, na Sprint 8. RF29,
    RF30 e RF31 subiram para a Sprint 7. O RF12 ficou fora do MVP, mas continua na Sprint 6, onde já
    estava em andamento: a leitura do quadrante dele permite antecipar, e o cálculo de saldo é usado
    pelo RF10. Ver o [mapa de histórias](../12-mapa/index.md) e o
    [cronograma](../01-visao-produto/index.md#62-sprints-previsto-realizado).

!!! note "Revisar na planilha"
    As justificativas da cliente para RF18 e RF24 repetem o texto de RF17 e RF23. Vale confirmar
    com ela o texto correto e atualizar a planilha e as fichas.

## 10.6 RNFs no MVP

A classificação de cada RNF para o MVP (obrigatório ou associado a RFs do MVP) está no registro do
próprio RNF, na página de [requisitos não funcionais](../08-requisitos/rnf.md).

## 10.7 Uso com dados reais

Nenhum dado real entra no sistema antes do
[portão de liberação](../01-visao-produto/index.md#64-portao-de-liberacao-para-uso-real): backup
testado, controle de acesso por perfil, consentimento concluído pela DoD e autorização da
coordenação registrada em ata.
