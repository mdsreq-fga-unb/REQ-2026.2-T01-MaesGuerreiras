<div class="hero">
  <img src="assets/logo.png" alt="Logo Mães Guerreiras" class="hero__logo" />
  <div class="hero__text">
    <h1>Mães Guerreiras</h1>
    <p>Visão do Produto e Projeto para a Associação Mães Guerreiras da Cidade Estrutural (DF), parceira real do projeto na disciplina de Requisitos de Software.</p>
  </div>
</div>

## Sobre o projeto

Uma plataforma web simples para substituir os cadernos, o cadastro isolado e as listas de chamada
em papel da associação. O objetivo completo, o cliente, o processo e a equipe estão na
[Visão do Produto](01-visao-produto/index.md).

## Como o escopo está organizado

Cada requisito tem **um registro**, no catálogo integrado. As demais páginas explicam o método e
consultam esse registro, sem repetir listas.

<div class="estrutura" markdown="0">
  <div class="estrutura__cadeia">
    <a class="estrutura__no" href="01-visao-produto/#14-identificacao-da-oportunidade-ou-problema"><b>Problema</b><span>Registros manuais que se perdem</span></a>
    <span class="estrutura__seta" aria-hidden="true">↓</span>
    <a class="estrutura__no" href="01-visao-produto/#22-objetivos-especificos-oe-do-produto"><b>Objetivos específicos</b><span>OE1 a OE6</span></a>
    <span class="estrutura__seta" aria-hidden="true">↓</span>
    <a class="estrutura__no" href="01-visao-produto/#23-caracteristicas-de-produto"><b>Características do produto</b><span>CP1 a CP7</span></a>
    <span class="estrutura__seta" aria-hidden="true">↓</span>
    <a class="estrutura__no estrutura__no--central" href="08-requisitos/"><b>Catálogo integrado do escopo vigente</b><span>Um registro por RF, com prioridade, entrega e situação</span></a>
  </div>
  <div class="estrutura__ligados">
    <a class="estrutura__no" href="08-requisitos/rnf/"><b>RNFs</b><span>aplicam-se aos RFs</span></a>
    <a class="estrutura__no" href="08-requisitos/regras/"><b>Regras de negócio</b><span>condicionam os RFs</span></a>
    <a class="estrutura__no" href="08-requisitos/glossario/"><b>Glossário e perfis</b><span>termos e acesso</span></a>
  </div>
  <p class="estrutura__legenda">Páginas que consultam o catálogo:</p>
  <div class="estrutura__visoes">
    <a href="09-priorizacao/">Priorização</a>
    <a href="10-mvp/">MVP</a>
    <a href="11-rastreabilidade/">Rastreabilidade</a>
    <a href="12-mapa/">Mapa de histórias</a>
    <a href="14-historico/">Histórico de evolução</a>
  </div>
</div>

## Estrutura da documentação

<div class="topic-grid">
  <a href="01-visao-produto/" class="topic-card topic-card--largo">
    <span class="topic-card__num">01 a 07</span>
    <h3>Visão do Produto</h3>
    <p>Cenário, solução, intervenção social, estratégias, Engenharia de Requisitos, cronograma e equipe, em uma página com seções.</p>
  </a>
  <a href="08-requisitos/" class="topic-card topic-card--destaque">
    <span class="topic-card__num">08</span>
    <h3>Catálogo integrado</h3>
    <p>Um registro por requisito: declaração, condições, critérios, prioridade, entrega e situação.</p>
  </a>
  <a href="09-priorizacao/" class="topic-card">
    <span class="topic-card__num">09</span>
    <h3>Priorização</h3>
    <p>Fatores, escalas, matriz valor × esforço e decisões gerais.</p>
  </a>
  <a href="10-mvp/" class="topic-card">
    <span class="topic-card__num">10</span>
    <h3>MVP</h3>
    <p>Objetivo do incremento, limites, critério do recorte e validação.</p>
  </a>
  <a href="11-rastreabilidade/" class="topic-card">
    <span class="topic-card__num">11</span>
    <h3>Rastreabilidade</h3>
    <p>Tipos de vínculo e onde cada um é mantido.</p>
  </a>
  <a href="12-mapa/" class="topic-card">
    <span class="topic-card__num">12</span>
    <h3>Mapa de histórias</h3>
    <p>Personas, jornadas e releases.</p>
  </a>
  <a href="13-dor-dod/" class="topic-card">
    <span class="topic-card__num">13</span>
    <h3>DoR e DoD</h3>
    <p>Definition of Ready e Definition of Done adotados pela equipe.</p>
  </a>
  <a href="14-historico/" class="topic-card">
    <span class="topic-card__num">14</span>
    <h3>Histórico de evolução</h3>
    <p>O que mudou no escopo, por quê e de onde veio.</p>
  </a>
  <a href="15-licoes/" class="topic-card">
    <span class="topic-card__num">15</span>
    <h3>Lições Aprendidas</h3>
    <p>Aprendizados da equipe registrados ao final de cada unidade.</p>
  </a>
  <a href="16-referencias/" class="topic-card">
    <span class="topic-card__num">16</span>
    <h3>Referências</h3>
    <p>Referências bibliográficas utilizadas no projeto.</p>
  </a>
</div>

## Identificação e Histórico de Revisão

### Identificação

| Campo | Informação |
| :--- | :--- |
| **Produto** | Mães Guerreiras |
| **Versão** | 0.5 |
| **Equipe** | Luan, Isabella, Luis, Ian, Pedro e Vitor |
| **Disciplina** | Requisitos de Software, 2026.2 |

### Histórico de Revisão

| Data | Versão | Descrição | Autor |
| :--- | :--- | :--- | :--- |
| 14/08/2026 | 0.1 | Proposta inicial de projeto Mães Guerreiras | Isabella Lacerda |
| 04/09/2026 | 0.2 | Inclusão das seções 1.6, 2.3, 2.4, 2.6, 2.7, 3, 4, 5, 6 e 7 | Isabella Lacerda |
| 04/09/2026 | 0.3 | Refatoração completa do documento a partir das respostas do questionário aplicado à associação e do material institucional recebido | Isabella Lacerda |
| 13/10/2026 | 0.4 | Requisitos declarados, MVP validado com o cliente, backlog com critérios de aceitação, rastreabilidade, DoR e DoD | |
| 29/10/2026 | 0.5 | Escopo reorganizado em catálogo integrado; priorização, MVP, rastreabilidade, mapa e histórico passam a consultar o catálogo; seções 1 a 7 reunidas na página Visão do Produto, sem repetições | Equipe |
