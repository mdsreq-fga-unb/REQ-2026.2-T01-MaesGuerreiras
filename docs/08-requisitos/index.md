---
hide:
  - toc
---

# 8. Catálogo integrado de requisitos

Este catálogo é a **fonte única do escopo vigente**. Cada requisito funcional tem **um registro**,
com tudo o que é preciso para entendê-lo, implementá-lo e validá-lo: declaração, intenção, origem,
condições, critérios, prioridade, entrega, situação e evolução. As outras páginas explicam o método
([priorização](../09-priorizacao/index.md), [MVP](../10-mvp/index.md),
[rastreabilidade](../11-rastreabilidade/index.md)) e **consultam este registro**, sem repetir a lista.

!!! info "Regra de manutenção"
    Mudou algo em um requisito? Atualize **a ficha dele aqui** e registre a decisão no
    [Histórico de evolução](../14-historico/index.md). Nenhuma outra página guarda atributos de
    requisito. RNFs e regras de negócio têm registros próprios
    ([8.1](rnf.md) e [8.2](regras.md)); a ligação com cada RF é mantida só na ficha do RF.

> **Situação em 27/10/2026 (Sprint 6, de 20/10 a 02/11).** RFs concluídos pela DoD: **0 de 45**
> (última medição: 17/10). Próxima atualização: revisão da Sprint 6, em 02/11/2026.

## Como usar

- **Visão geral:** a tabela abaixo segue a **ordem do backlog** (valor, risco, capacidade de entrega
  e dependências, ver [Priorização](../09-priorizacao/index.md)). Clique no ID para abrir a ficha.
- **Filtros:** combine característica, MVP, release, sprint e situação. Os links das outras páginas
  já chegam com o filtro aplicado.
- **Fichas:** agrupadas por característica de produto. Cada ficha abre e fecha.
- **Granularidade:** cada RF é um item do backlog. Quando o comportamento muda por ator, a ficha
  traz uma declaração de intenção por ator (a, b), sem criar outro ID. As tarefas técnicas da sprint
  ficam no [quadro da equipe no GitHub Projects](https://github.com/orgs/mdsreq-fga-unb/projects/131){target="_blank"}, com responsável, sprint e situação de cada issue.

<div class="filtros" id="filtros" markdown="0">
<label>Característica<select id="f-cp" data-campo="cp"><option value="">Todos</option><option value="cp1">CP1 · Portal institucional e agenda de atividades</option><option value="cp2">CP2 · Registro de doações de itens</option><option value="cp3">CP3 · Cadastro de famílias e participantes</option><option value="cp4">CP4 · Inscrição em atividades e organização do atendimento</option><option value="cp5">CP5 · Chamada digital e controle de frequência</option><option value="cp6">CP6 · Relatórios e indicadores de impacto</option><option value="cp7">CP7 · Perfis de acesso e proteção de dados</option></select></label><label>MVP<select id="f-mvp" data-campo="mvp"><option value="">Todos</option><option value="sim">Sim (19)</option><option value="complemento">Complemento</option><option value="nao">Não</option></select></label><label>Release<select id="f-release" data-campo="release"><option value="">Todos</option><option value="r1">R1</option><option value="r2">R2</option><option value="r3">R3</option><option value="r4">R4</option><option value="trilha-cp1">Trilha CP1</option></select></label><label>Sprint<select id="f-sprint" data-campo="sprint"><option value="">Todos</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="fechamento">Fechamento</option><option value="nao-planejado">Não planejado</option></select></label><label>Situação<select id="f-situacao" data-campo="situacao"><option value="">Todos</option><option value="em-andamento">Em andamento</option><option value="pronta">Pronta pela DoR</option><option value="a-refinar">A refinar</option><option value="nao-iniciada">Não iniciada</option><option value="concluida">Concluída</option></select></label><label>Buscar<input id="f-texto" type="search" placeholder="ID ou palavra"></label><button type="button" id="f-limpar">Limpar filtros</button><p class="filtros__status" id="f-status" aria-live="polite"></p>
</div>

## Visão geral na ordem do backlog {#ordem}

<div class="resumo" markdown="0"><table class="resumo__tabela">
<thead><tr><th>#</th><th>ID</th><th>Requisito</th><th>CP</th><th title="Valor de negócio, 1 a 4">Valor</th><th title="Esforço técnico, 1 a 4">Esf.</th><th>Risco</th><th>Release</th><th>Sprint</th><th>MVP</th><th>Situação</th></tr></thead>
<tbody>
<tr data-id="t01" data-cp="tec" data-release="r1" data-sprint="6" data-mvp="tec" data-situacao="em-andamento"><td>1</td><td><a href="#t01">T01</a></td><td>Ambiente de desenvolvimento</td><td>—</td><td>4</td><td>—</td><td>Alto</td><td>R1</td><td>6</td><td>—</td><td>Em andamento</td></tr>
<tr data-id="rf41" data-cp="cp7" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="2"><td>2</td><td><a href="#rf41">RF41</a></td><td>Autenticar usuário</td><td>CP7</td><td>4</td><td>2</td><td>Alto</td><td>R1</td><td>6</td><td>Sim</td><td><span class="chip chip--sit-em-andamento">Em andamento</span></td></tr>
<tr data-id="rf39" data-cp="cp7" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="1"><td>3</td><td><a href="#rf39">RF39</a></td><td>Cadastrar usuário do sistema</td><td>CP7</td><td>4</td><td>1</td><td>Médio</td><td>R1</td><td>6</td><td>Sim</td><td><span class="chip chip--sit-em-andamento">Em andamento</span></td></tr>
<tr data-id="rf40" data-cp="cp7" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="2"><td>4</td><td><a href="#rf40">RF40</a></td><td>Atribuir perfil de acesso ao usuário</td><td>CP7</td><td>4</td><td>2</td><td>Alto</td><td>R1</td><td>6</td><td>Sim</td><td><span class="chip chip--sit-em-andamento">Em andamento</span></td></tr>
<tr data-id="rf42" data-cp="cp7" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="2"><td>5</td><td><a href="#rf42">RF42</a></td><td>Registrar consentimentos e autorizações (LGPD e Imagem)</td><td>CP7</td><td>4</td><td>2</td><td>Alto</td><td>R1</td><td>6</td><td>Sim</td><td><span class="chip chip--sit-em-andamento">Em andamento</span></td></tr>
<tr data-id="rf11" data-cp="cp2" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="1"><td>6</td><td><a href="#rf11">RF11</a></td><td>Cadastrar categoria de item</td><td>CP2</td><td>4</td><td>1</td><td>Baixo</td><td>R1</td><td>6</td><td>Sim</td><td><span class="chip chip--sit-em-andamento">Em andamento</span></td></tr>
<tr data-id="rf08" data-cp="cp2" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="2"><td>7</td><td><a href="#rf08">RF08</a></td><td>Cadastrar ou atualizar doador</td><td>CP2</td><td>4</td><td>2</td><td>Baixo</td><td>R1</td><td>6</td><td>Sim</td><td><span class="chip chip--sit-em-andamento">Em andamento</span></td></tr>
<tr data-id="rf09" data-cp="cp2" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="2"><td>8</td><td><a href="#rf09">RF09</a></td><td>Registrar doação recebida</td><td>CP2</td><td>4</td><td>2</td><td>Médio</td><td>R1</td><td>6</td><td>Sim</td><td><span class="chip chip--sit-em-andamento">Em andamento</span></td></tr>
<tr data-id="rf12" data-cp="cp2" data-release="r3" data-sprint="6" data-mvp="complemento" data-situacao="em-andamento" data-valor="3" data-esforco="2"><td>9</td><td><a href="#rf12">RF12</a></td><td>Consultar saldo de itens doados</td><td>CP2</td><td>3</td><td>2</td><td>Médio</td><td>R3</td><td>6</td><td>Complemento</td><td><span class="chip chip--sit-em-andamento">Em andamento</span></td></tr>
<tr data-id="rf14" data-cp="cp3" data-release="r1" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="2"><td>10</td><td><a href="#rf14">RF14</a></td><td>Cadastrar família</td><td>CP3</td><td>4</td><td>2</td><td>Médio</td><td>R1</td><td>7</td><td>Sim</td><td><span class="chip chip--sit-a-refinar">A refinar</span></td></tr>
<tr data-id="rf10" data-cp="cp2" data-release="r1" data-sprint="7" data-mvp="sim" data-situacao="pronta" data-valor="4" data-esforco="2"><td>11</td><td><a href="#rf10">RF10</a></td><td>Registrar destinação de doação</td><td>CP2</td><td>4</td><td>2</td><td>Médio</td><td>R1</td><td>7</td><td>Sim</td><td><span class="chip chip--sit-pronta">Pronta pela DoR</span></td></tr>
<tr data-id="rf16" data-cp="cp3" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="2"><td>12</td><td><a href="#rf16">RF16</a></td><td>Cadastrar participante</td><td>CP3</td><td>4</td><td>2</td><td>Médio</td><td>R2</td><td>7</td><td>Sim</td><td><span class="chip chip--sit-a-refinar">A refinar</span></td></tr>
<tr data-id="rf18" data-cp="cp3" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="2"><td>13</td><td><a href="#rf18">RF18</a></td><td>Vincular participante a família</td><td>CP3</td><td>4</td><td>2</td><td>Baixo</td><td>R2</td><td>7</td><td>Sim</td><td><span class="chip chip--sit-a-refinar">A refinar</span></td></tr>
<tr data-id="rf20" data-cp="cp4" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="1"><td>14</td><td><a href="#rf20">RF20</a></td><td>Cadastrar turma de atividade</td><td>CP4</td><td>4</td><td>1</td><td>Baixo</td><td>R2</td><td>7</td><td>Sim</td><td><span class="chip chip--sit-a-refinar">A refinar</span></td></tr>
<tr data-id="rf23" data-cp="cp4" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="2"><td>15</td><td><a href="#rf23">RF23</a></td><td>Inscrever participante em turma</td><td>CP4</td><td>4</td><td>2</td><td>Médio</td><td>R2</td><td>7</td><td>Sim</td><td><span class="chip chip--sit-a-refinar">A refinar</span></td></tr>
<tr data-id="rf19" data-cp="cp3" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="2"><td>16</td><td><a href="#rf19">RF19</a></td><td>Consultar cadastro de participantes</td><td>CP3</td><td>4</td><td>2</td><td>Baixo</td><td>R2</td><td>7</td><td>Sim</td><td><span class="chip chip--sit-a-refinar">A refinar</span></td></tr>
<tr data-id="rf27" data-cp="cp5" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="2"><td>17</td><td><a href="#rf27">RF27</a></td><td>Abrir chamada do encontro</td><td>CP5</td><td>4</td><td>2</td><td>Alto</td><td>R2</td><td>7</td><td>Sim</td><td><span class="chip chip--sit-a-refinar">A refinar</span></td></tr>
<tr data-id="rf28" data-cp="cp5" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="1"><td>18</td><td><a href="#rf28">RF28</a></td><td>Registrar frequência do participante</td><td>CP5</td><td>4</td><td>1</td><td>Médio</td><td>R2</td><td>7</td><td>Sim</td><td><span class="chip chip--sit-a-refinar">A refinar</span></td></tr>
<tr data-id="rf29" data-cp="cp5" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="nao-iniciada" data-valor="3" data-esforco="1"><td>19</td><td><a href="#rf29">RF29</a></td><td>Justificar falta</td><td>CP5</td><td>3</td><td>1</td><td>Baixo</td><td>R2</td><td>7</td><td>Sim</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf30" data-cp="cp5" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="nao-iniciada" data-valor="3" data-esforco="1"><td>20</td><td><a href="#rf30">RF30</a></td><td>Corrigir registro de frequência</td><td>CP5</td><td>3</td><td>1</td><td>Médio</td><td>R2</td><td>7</td><td>Sim</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf31" data-cp="cp5" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="nao-iniciada" data-valor="3" data-esforco="1"><td>21</td><td><a href="#rf31">RF31</a></td><td>Consultar frequência do participante</td><td>CP5</td><td>3</td><td>1</td><td>Baixo</td><td>R2</td><td>7</td><td>Sim</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf24" data-cp="cp4" data-release="r3" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2"><td>22</td><td><a href="#rf24">RF24</a></td><td>Cancelar inscrição de participante</td><td>CP4</td><td>3</td><td>2</td><td>Baixo</td><td>R3</td><td>8</td><td>Complemento</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf25" data-cp="cp4" data-release="r3" data-sprint="8" data-mvp="complemento" data-situacao="a-refinar" data-valor="3" data-esforco="2"><td>23</td><td><a href="#rf25">RF25</a></td><td>Registrar participante em lista de espera</td><td>CP4</td><td>3</td><td>2</td><td>Baixo</td><td>R3</td><td>8</td><td>Complemento</td><td><span class="chip chip--sit-a-refinar">A refinar</span></td></tr>
<tr data-id="rf26" data-cp="cp4" data-release="r3" data-sprint="8" data-mvp="complemento" data-situacao="a-refinar" data-valor="3" data-esforco="2"><td>24</td><td><a href="#rf26">RF26</a></td><td>Consultar inscritos da turma</td><td>CP4</td><td>3</td><td>2</td><td>Baixo</td><td>R3</td><td>8</td><td>Complemento</td><td><span class="chip chip--sit-a-refinar">A refinar</span></td></tr>
<tr data-id="rf15" data-cp="cp3" data-release="r3" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="3"><td>25</td><td><a href="#rf15">RF15</a></td><td>Atualizar ou inativar cadastro de família</td><td>CP3</td><td>3</td><td>3</td><td>Baixo</td><td>R3</td><td>8</td><td>Complemento</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf17" data-cp="cp3" data-release="r3" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="3"><td>26</td><td><a href="#rf17">RF17</a></td><td>Atualizar ou inativar cadastro de participante</td><td>CP3</td><td>3</td><td>3</td><td>Baixo</td><td>R3</td><td>8</td><td>Complemento</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf32" data-cp="cp5" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2"><td>27</td><td><a href="#rf32">RF32</a></td><td>Sinalizar participante com faltas acima do limite</td><td>CP5</td><td>3</td><td>2</td><td>Médio</td><td>R4</td><td>8</td><td>Complemento</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf33" data-cp="cp6" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2"><td>28</td><td><a href="#rf33">RF33</a></td><td>Gerar relatório de doações recebidas</td><td>CP6</td><td>3</td><td>2</td><td>Alto</td><td>R4</td><td>8</td><td>Complemento</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf34" data-cp="cp6" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2"><td>29</td><td><a href="#rf34">RF34</a></td><td>Gerar relatório de doações distribuídas</td><td>CP6</td><td>3</td><td>2</td><td>Alto</td><td>R4</td><td>8</td><td>Complemento</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf36" data-cp="cp6" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2"><td>30</td><td><a href="#rf36">RF36</a></td><td>Gerar relatório de famílias atendidas</td><td>CP6</td><td>3</td><td>2</td><td>Médio</td><td>R4</td><td>8</td><td>Complemento</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf38" data-cp="cp6" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2"><td>31</td><td><a href="#rf38">RF38</a></td><td>Exportar relatório gerado</td><td>CP6</td><td>3</td><td>2</td><td>Médio</td><td>R4</td><td>8</td><td>Complemento</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf13" data-cp="cp2" data-release="trilha-cp1" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2"><td>32</td><td><a href="#rf13">RF13</a></td><td>Publicar lista de itens necessários</td><td>CP2</td><td>3</td><td>2</td><td>—</td><td>Trilha CP1</td><td>8</td><td>Complemento</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf43" data-cp="cp7" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2"><td>33</td><td><a href="#rf43">RF43</a></td><td>Registrar e acompanhar solicitação de exclusão de dados</td><td>CP7</td><td>3</td><td>2</td><td>Médio</td><td>R4</td><td>8</td><td>Complemento</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf45" data-cp="cp7" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2"><td>34</td><td><a href="#rf45">RF45</a></td><td>Consultar autorização de uso de imagem vigente</td><td>CP7</td><td>3</td><td>2</td><td>Baixo</td><td>R4</td><td>8</td><td>Complemento</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf21" data-cp="cp4" data-release="r3" data-sprint="8" data-mvp="nao" data-situacao="nao-iniciada" data-valor="2" data-esforco="3"><td>35</td><td><a href="#rf21">RF21</a></td><td>Atualizar turma de atividade</td><td>CP4</td><td>2</td><td>3</td><td>Baixo</td><td>R3</td><td>8</td><td>Não</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf22" data-cp="cp4" data-release="r3" data-sprint="8" data-mvp="nao" data-situacao="nao-iniciada" data-valor="2" data-esforco="1"><td>36</td><td><a href="#rf22">RF22</a></td><td>Encerrar turma de atividade</td><td>CP4</td><td>2</td><td>1</td><td>Baixo</td><td>R3</td><td>8</td><td>Não</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf35" data-cp="cp6" data-release="r4" data-sprint="8" data-mvp="nao" data-situacao="nao-iniciada" data-valor="2" data-esforco="2"><td>37</td><td><a href="#rf35">RF35</a></td><td>Gerar relatório de frequência por turma</td><td>CP6</td><td>2</td><td>2</td><td>Médio</td><td>R4</td><td>8</td><td>Não</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf37" data-cp="cp6" data-release="r4" data-sprint="8" data-mvp="nao" data-situacao="nao-iniciada" data-valor="2" data-esforco="2"><td>38</td><td><a href="#rf37">RF37</a></td><td>Consultar painel de indicadores</td><td>CP6</td><td>2</td><td>2</td><td>Alto</td><td>R4</td><td>8</td><td>Não</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf44" data-cp="cp7" data-release="r4" data-sprint="fechamento" data-mvp="nao" data-situacao="nao-iniciada" data-valor="2" data-esforco="2"><td>39</td><td><a href="#rf44">RF44</a></td><td>Consultar histórico de alterações de cadastro</td><td>CP7</td><td>2</td><td>2</td><td>Médio</td><td>R4</td><td>Fechamento</td><td>Não</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf01" data-cp="cp1" data-release="trilha-cp1" data-sprint="fechamento" data-mvp="nao" data-situacao="a-refinar" data-valor="2" data-esforco="2"><td>40</td><td><a href="#rf01">RF01</a></td><td>Publicar conteúdo institucional</td><td>CP1</td><td>2</td><td>2</td><td>—</td><td>Trilha CP1</td><td>Fechamento</td><td>Não</td><td><span class="chip chip--sit-a-refinar">A refinar</span></td></tr>
<tr data-id="rf02" data-cp="cp1" data-release="trilha-cp1" data-sprint="fechamento" data-mvp="nao" data-situacao="a-refinar" data-valor="2" data-esforco="1"><td>41</td><td><a href="#rf02">RF02</a></td><td>Atualizar conteúdo institucional</td><td>CP1</td><td>2</td><td>1</td><td>—</td><td>Trilha CP1</td><td>Fechamento</td><td>Não</td><td><span class="chip chip--sit-a-refinar">A refinar</span></td></tr>
<tr data-id="rf03" data-cp="cp1" data-release="trilha-cp1" data-sprint="fechamento" data-mvp="nao" data-situacao="a-refinar" data-valor="2" data-esforco="2"><td>42</td><td><a href="#rf03">RF03</a></td><td>Cadastrar atividade na agenda</td><td>CP1</td><td>2</td><td>2</td><td>—</td><td>Trilha CP1</td><td>Fechamento</td><td>Não</td><td><span class="chip chip--sit-a-refinar">A refinar</span></td></tr>
<tr data-id="rf04" data-cp="cp1" data-release="trilha-cp1" data-sprint="fechamento" data-mvp="nao" data-situacao="a-refinar" data-valor="2" data-esforco="2"><td>43</td><td><a href="#rf04">RF04</a></td><td>Atualizar atividade na agenda</td><td>CP1</td><td>2</td><td>2</td><td>—</td><td>Trilha CP1</td><td>Fechamento</td><td>Não</td><td><span class="chip chip--sit-a-refinar">A refinar</span></td></tr>
<tr data-id="rf05" data-cp="cp1" data-release="trilha-cp1" data-sprint="fechamento" data-mvp="nao" data-situacao="nao-iniciada" data-valor="2" data-esforco="3"><td>44</td><td><a href="#rf05">RF05</a></td><td>Consultar agenda de atividades</td><td>CP1</td><td>2</td><td>3</td><td>—</td><td>Trilha CP1</td><td>Fechamento</td><td>Não</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf06" data-cp="cp1" data-release="trilha-cp1" data-sprint="nao-planejado" data-mvp="nao" data-situacao="nao-iniciada" data-valor="1" data-esforco="2"><td>45</td><td><a href="#rf06">RF06</a></td><td>Registrar solicitação de contato</td><td>CP1</td><td>1</td><td>2</td><td>—</td><td>Trilha CP1</td><td>Não planejado</td><td>Não</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
<tr data-id="rf07" data-cp="cp1" data-release="trilha-cp1" data-sprint="nao-planejado" data-mvp="nao" data-situacao="nao-iniciada" data-valor="1" data-esforco="2"><td>46</td><td><a href="#rf07">RF07</a></td><td>Consultar solicitações de contato</td><td>CP1</td><td>1</td><td>2</td><td>—</td><td>Trilha CP1</td><td>Não planejado</td><td>Não</td><td><span class="chip chip--sit-nao-iniciada">Não iniciada</span></td></tr>
</tbody></table></div>


## CP1 · Portal institucional e agenda de atividades {#cp1}

Disponibilização das informações institucionais e das atividades da associação. **Valor de negócio (VN1):** Centralização das informações destinadas à comunidade e aos apoiadores. Objetivos: OE1, OE5. 7 requisitos.

<details class="ficha" id="rf01" data-cp="cp1" data-release="trilha-cp1" data-sprint="fechamento" data-mvp="nao" data-situacao="a-refinar" data-valor="2" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF01</span> <span class="ficha__nome">Publicar conteúdo institucional</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">Trilha CP1</span> <span class="chip">Fechamento</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir a publicação das informações da associação, como histórico, missão, endereço e formas de contato, na área pública. |
| Intenção e valor | Como **coordenadora**, quero publicar o histórico, a missão, o endereço e os contatos da associação, para que a comunidade e os apoiadores encontrem essas informações em um só lugar. |
| Origem | [CP1 · Portal institucional e agenda de atividades](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE1, OE5 · atividade [C1 Conhecer a associação](../12-mapa/index.md#jornada-c) |
| Agentes | Coordenação |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [T01](#t01) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: — · Posição **40** na ordem<br>**Valor (cliente):** Could have, critério: contribuição para os objetivos do projeto. «História, missão e endereço mudam raramente e já estão no Instagram. Uma página própria dá credibilidade a apoiadores e editais, mas não reduz nenhuma das dores levantadas (doação sem registro, dados isolados, chamada em papel).»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0<br>**Leitura da matriz:** Entrega futura (valor 2 · esforço 2). Depois do MVP. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **Trilha CP1** · **Fechamento** · Iceberg: Base |
| Situação | A refinar |
| Evolução | 27/10/2026 · Ordem ajustada: RF01 antes do RF13.<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2.<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 7 → Fechamento. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf02" data-cp="cp1" data-release="trilha-cp1" data-sprint="fechamento" data-mvp="nao" data-situacao="a-refinar" data-valor="2" data-esforco="1" markdown="1">
<summary><span class="ficha__id">RF02</span> <span class="ficha__nome">Atualizar conteúdo institucional</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">Trilha CP1</span> <span class="chip">Fechamento</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação altere o histórico, a missão, o endereço e as formas de contato publicados (os mesmos campos do RF01). |
| Intenção e valor | Como **coordenadora**, quero alterar as informações institucionais publicadas, para mantê-las corretas. |
| Origem | [CP1 · Portal institucional e agenda de atividades](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE1, OE5 · atividade [C1 Conhecer a associação](../12-mapa/index.md#jornada-c) |
| Agentes | Coordenação |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF01](#rf01) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **1** · Risco: — · Posição **41** na ordem<br>**Valor (cliente):** Could have, critério: dependência para viabilizar outras funcionalidades. «Só faz sentido junto com o RF01. Pesa porque a equipe sai no fim do semestre: sem ele, mudanças como a da nova sede (junho de 2026) exigiriam um programador para editar o site.»<br>**Esforço (equipe):** esforço 1 · complexidade 1 · lacuna 1 → consolidado 1,0<br>**Leitura da matriz:** Avaliar oportunidade (valor 2 · esforço 1). Pode entrar como ganho rápido, se sobrar tempo. Só faz sentido junto com o RF01. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **Trilha CP1** · **Fechamento** · Iceberg: Base |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 1.<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 7 → Fechamento. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf03" data-cp="cp1" data-release="trilha-cp1" data-sprint="fechamento" data-mvp="nao" data-situacao="a-refinar" data-valor="2" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF03</span> <span class="ficha__nome">Cadastrar atividade na agenda</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">Trilha CP1</span> <span class="chip">Fechamento</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir o cadastro de uma atividade com data, horário, local e público a que se destina. |
| Intenção e valor | Como **coordenadora**, quero cadastrar uma atividade com data, horário, local e público, para divulgar oficinas e eventos. |
| Origem | [CP1 · Portal institucional e agenda de atividades](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE1, OE5 · atividade [C2 Ver a agenda](../12-mapa/index.md#jornada-c) |
| Agentes | Coordenação |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF01](#rf01) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: — · Posição **42** na ordem<br>**Valor (cliente):** Could have, critério: contribuição para os objetivos do projeto. «Sobrepõe o RF20: a turma já tem dias e horário. Se os dois existirem separados, a coordenação digita a mesma oficina duas vezes. Vale perguntar se a agenda pode ser gerada a partir das turmas, mais eventos avulsos (Domingo Criativo).»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3<br>**Leitura da matriz:** Entrega futura (valor 2 · esforço 2). Depois do MVP. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **Trilha CP1** · **Fechamento** · Iceberg: Base |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2.<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 7 → Fechamento. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf04" data-cp="cp1" data-release="trilha-cp1" data-sprint="fechamento" data-mvp="nao" data-situacao="a-refinar" data-valor="2" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF04</span> <span class="ficha__nome">Atualizar atividade na agenda</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">Trilha CP1</span> <span class="chip">Fechamento</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir a alteração dos dados de uma atividade já divulgada, incluindo seu cancelamento. |
| Intenção e valor | Como **coordenadora**, quero alterar ou cancelar uma atividade divulgada, para que ninguém compareça com base em informação desatualizada. |
| Origem | [CP1 · Portal institucional e agenda de atividades](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE1, OE5 · atividade [C2 Ver a agenda](../12-mapa/index.md#jornada-c) |
| Agentes | Coordenação |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF03](#rf03) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: — · Posição **43** na ordem<br>**Valor (cliente):** Could have, critério: contribuição para os objetivos do projeto. «Uma agenda pública desatualizada é pior que nenhuma: uma mãe que vai até a sede para uma oficina cancelada perde a viagem. Por isso tem o mesmo valor do RF03, e não menos.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0<br>**Leitura da matriz:** Entrega futura (valor 2 · esforço 2). Depois do MVP. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **Trilha CP1** · **Fechamento** · Iceberg: Base |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2.<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 7 → Fechamento. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf05" data-cp="cp1" data-release="trilha-cp1" data-sprint="fechamento" data-mvp="nao" data-situacao="nao-iniciada" data-valor="2" data-esforco="3" markdown="1">
<summary><span class="ficha__id">RF05</span> <span class="ficha__nome">Consultar agenda de atividades</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">Trilha CP1</span> <span class="chip">Fechamento</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir a consulta pública às atividades divulgadas, com filtro por período e por tipo de atividade. |
| Intenção e valor | Como **visitante**, quero consultar as atividades divulgadas por período e tipo, para saber quando e onde posso participar. |
| Origem | [CP1 · Portal institucional e agenda de atividades](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE1, OE5 · atividade [C2 Ver a agenda](../12-mapa/index.md#jornada-c) |
| Agentes | Visitante |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF03](#rf03) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **3** · Risco: — · Posição **44** na ordem<br>**Valor (cliente):** Could have, critério: impacto para os usuários. «É a parte visível do RF03. A comunidade da Estrutural já acompanha avisos pelo WhatsApp, que chega sem a pessoa precisar abrir um site; a adesão a uma página nova é incerta.»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 3 → consolidado 2,7<br>**Leitura da matriz:** Entrega futura (valor 2 · esforço 3). Depois do MVP. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **Trilha CP1** · **Fechamento** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 8 → Fechamento. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf06" data-cp="cp1" data-release="trilha-cp1" data-sprint="nao-planejado" data-mvp="nao" data-situacao="nao-iniciada" data-valor="1" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF06</span> <span class="ficha__nome">Registrar solicitação de contato</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">Trilha CP1</span> <span class="chip">Não planejado</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que o Visitante envie uma solicitação de contato a coordenação informando nome*, telefone ou e-mail* (ao menos um) e mensagem*. Registrando-a para atendimento posterior. |
| Intenção e valor | Como **visitante**, quero enviar meu nome, um telefone ou e-mail e uma mensagem, para ser atendido sem precisar ir até a associação. |
| Origem | [CP1 · Portal institucional e agenda de atividades](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE1, OE5 · atividade [C4 Falar com a associação](../12-mapa/index.md#jornada-c) |
| Agentes | Visitante |
| Condições | **RNFs:** [RNF13](rnf.md#rnf13), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN01](regras.md#rn01)<br>**Depende de:** [RF01](#rf01) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **1** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: — · Posição **45** na ordem<br>**Valor (cliente):** Won't have now, critério: impacto para os usuários. «Quem quer falar com a associação já usa Instagram e WhatsApp, que respondem na hora. O formulário cria uma fila nova para alguém vigiar (a disponibilidade da coordenação é um risco listado) e coleta dados pessoais de visitantes, o que traz obrigações de LGPD.»<br>**Esforço (equipe):** esforço 2 · complexidade 3 · lacuna 2 → consolidado 2,3<br>**Leitura da matriz:** Baixa prioridade (valor 1 · esforço 2). Não priorizar agora. Duplica canais que já funcionam (Instagram e WhatsApp). |
| Entrega | MVP: **não**, não planejado neste semestre (Won't have now) · Release **Trilha CP1** · **Não planejado** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 27/10/2026 · Ordem ajustada: RF06 antes do RF07.<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 2 → 1; esforço 3 → 2.<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 8 → Não planejado. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf07" data-cp="cp1" data-release="trilha-cp1" data-sprint="nao-planejado" data-mvp="nao" data-situacao="nao-iniciada" data-valor="1" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF07</span> <span class="ficha__nome">Consultar solicitações de contato</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">Trilha CP1</span> <span class="chip">Não planejado</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação consulte as solicitações registradas no RF06 e marque cada uma como atendida. |
| Intenção e valor | Como **coordenadora**, quero consultar as solicitações de contato e marcar cada uma como atendida, para que nenhum pedido fique sem resposta. |
| Origem | [CP1 · Portal institucional e agenda de atividades](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE1, OE5 · atividade [C4 Falar com a associação](../12-mapa/index.md#jornada-c) |
| Agentes | Coordenação |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), [RNF13](rnf.md#rnf13), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF06](#rf06) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **1** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: — · Posição **46** na ordem<br>**Valor (cliente):** Won't have now, critério: frequência ou abrangência de uso. «Só existe se o RF06 existir. Está com valor 4 na matriz atual, o que não se sustenta: não atende nenhum objetivo específico diretamente.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 1 → consolidado 1,7<br>**Leitura da matriz:** Baixa prioridade (valor 1 · esforço 2). Não priorizar agora. Duplica canais que já funcionam (Instagram e WhatsApp). |
| Entrega | MVP: **não**, não planejado neste semestre (Won't have now) · Release **Trilha CP1** · **Não planejado** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 27/10/2026 · Ordem ajustada: RF06 antes do RF07.<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 1; esforço 3 → 2; MVP: complemento → não.<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 8 → Não planejado. Ver o [histórico](../14-historico/index.md). |

</details>


## CP2 · Registro de doações de itens {#cp2}

Gestão das doações de itens recebidas e distribuídas. **Valor de negócio (VN2):** Redução de registros de doações não realizados e maior visibilidade sobre os itens recebidos e distribuídos. Objetivos: OE2, OE5. 6 requisitos.

<details class="ficha" id="rf08" data-cp="cp2" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF08</span> <span class="ficha__nome">Cadastrar ou atualizar doador</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R1</span> <span class="chip">Sprint 6</span> <span class="chip chip--sit-em-andamento">Em andamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação cadastrem e, se necessário, corrijam os dados de pessoas e organizações que doam itens à associação. *(Campos marcados com \* são obrigatórios nas fichas desta seção.)* |
| Intenção e valor | Como **voluntária de atendimento**, quero cadastrar e corrigir os dados de pessoas e organizações que doam, para saber de onde veio cada doação. |
| Origem | [CP2 · Registro de doações de itens](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE2, OE5 · atividade [A2 Receber doações](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** [RNF01](rnf.md#rnf01), [RNF19](rnf.md#rnf19), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN21](regras.md#rn21)<br>**Depende de:** [RF41](#rf41) |
| Critérios de aceitação | **CA-RF08-01**: Voluntário e Coordenação cadastram doadores do tipo **pessoa** ou **organização**, informando nome e pelo menos um meio de contato (telefone ou e-mail).<br>**CA-RF08-02**: A correção feita por um desses perfis é persistida no cadastro do doador.<br>**CA-RF08-03**: As correções registram autor, data, hora, valor anterior e valor novo (RNF19); o registro pode ser verificado no log sem a tela RF44.<br>**CA-RF08-04** *(exceção, proposta a validar)*: Um doador sem nome não é salvo, e o sistema indica o campo que falta.<br>**CA-RF08-05** *(exceção, proposta a validar)*: Se já existir um doador com o mesmo nome e o mesmo telefone ou e-mail, o sistema avisa e oferece usar o cadastro existente.<br>**CA-RF08-06** *(exceção, proposta a validar)*: É possível registrar doação anônima sem cadastrar um doador. *(Confirmar com a coordenação se doações anônimas existem.)*<br>*Evidência prevista:* teste de cadastro, correção, recusa por campo faltante, aviso de duplicidade e consulta do log. Validação: uma coordenadora cadastra e corrige um doador fictício sem ajuda. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Baixo · Posição **7** na ordem<br>**Valor (cliente):** Must have, critério: dependência para viabilizar outras funcionalidades. «O RF09 exige o doador de origem. Também alimenta o relatório por doador (RF33), usado para agradecer e fidelizar apoiadores. Sugestão: aceitar "doador anônimo" e deixar o contato opcional, para não travar o registro.»<br>**Esforço (equipe):** esforço 2 · complexidade 3 · lacuna 1 → consolidado 2,0<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R1** · Sprint **6** · Iceberg: Topo |
| Situação | Em andamento (a confirmar); critérios refinados em 27/10 |
| Evolução | 27/10/2026 · Critérios de aceitação ampliados com dados obrigatórios e exceções (propostas a validar). Revisão do professor, issue #26.<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. Ver o [histórico](../14-historico/index.md).<br>31/10/2026 · Esclarecido que "atividade" significa uso interno na associação (ex.: materiais para uma oficina). Dependência de RF20 adicionada; CA-RF10-06 atualizado. |

</details>

<details class="ficha" id="rf09" data-cp="cp2" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF09</span> <span class="ficha__nome">Registrar doação recebida</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R1</span> <span class="chip">Sprint 6</span> <span class="chip chip--sit-em-andamento">Em andamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação registrem a entrada de itens doados, com categoria de item, quantidade, data e doador de origem. |
| Intenção e valor | Como **voluntária de atendimento**, quero registrar a entrada de itens doados com categoria, quantidade, data e doador, para registrar o recebimento sem atrasar o atendimento. |
| Origem | [CP2 · Registro de doações de itens](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE2, OE5 · atividade [A2 Receber doações](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** [RNF01](rnf.md#rnf01), [RNF19](rnf.md#rnf19), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN02](regras.md#rn02)<br>**Depende de:** [RF08](#rf08), [RF11](#rf11) |
| Critérios de aceitação | **CA-RF09-01**: O registro feito por Voluntário ou Coordenação contém categoria, quantidade, data e doador.<br>**CA-RF09-02**: A quantidade usa a unidade de medida da categoria (RN02), e a entrada soma a quantidade ao saldo do RF12.<br>**CA-RF09-03**: O registro é concluído em até três passos a partir da tela inicial da área restrita, sem ajuda (RNF01).<br>**CA-RF09-04** *(exceção)*: Se faltar categoria, quantidade, data ou doador, a entrada não é salva e o sistema indica o campo que falta.<br>**CA-RF09-05** *(exceção)*: Quantidade igual a zero ou negativa é recusada, com mensagem, e o saldo não muda.<br>**CA-RF09-06** *(exceção)*: A categoria é escolhida entre as cadastradas no RF11, sem texto livre.<br>*Evidência prevista:* teste do registro, da unidade, da soma no saldo e das recusas. Validação: uma voluntária registra uma doação fictícia sem ajuda, com contagem de passos. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio: até 3 passos (RNF01) · Posição **8** na ordem<br>**Valor (cliente):** Must have, critério: importância para resolver o problema central. «É a troca direta do caderno de doações. Ataca a dor nº 1 (doações não registradas) e é a base da meta preliminar de reduzir em 80% as doações sem registro.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. Na nova avaliação, o esforço caiu para 2: o registro de doação reaproveita a estrutura de doador e categoria. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R1** · Sprint **6** · Iceberg: Topo |
| Situação | Em andamento (a confirmar) |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. Ver o [histórico](../14-historico/index.md).<br>31/10/2026 · Esclarecido que "atividade" significa uso interno na associação (ex.: materiais para uma oficina). Dependência de RF20 adicionada; CA-RF10-06 atualizado. |

</details>

<details class="ficha" id="rf10" data-cp="cp2" data-release="r1" data-sprint="7" data-mvp="sim" data-situacao="pronta" data-valor="4" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF10</span> <span class="ficha__nome">Registrar destinação de doação</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R1</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-pronta">Pronta pela DoR</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação registrem a saída de itens doados, com categoria de item, quantidade, data e o destinatário: uma família atendida ou uma turma de atividade (uso interno na associação). |
| Intenção e valor | Como **voluntária de atendimento**, quero registrar a saída de itens indicando a família que os recebeu ou a turma que os usou internamente, para que a coordenadora saiba para onde foi cada doação. |
| Origem | [CP2 · Registro de doações de itens](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE2, OE5 · atividade [A4 Distribuir itens](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** [RNF19](rnf.md#rnf19), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN02](regras.md#rn02)<br>**Depende de:** [RF12](#rf12), [RF14](#rf14), [RF20](#rf20) |
| Critérios de aceitação | **CA-RF10-01**: O registro feito por Voluntário ou Coordenação contém categoria, quantidade, data e a família ou atividade destinatária.<br>**CA-RF10-02**: A quantidade usa a unidade da categoria (RN02), e a saída subtrai a quantidade do saldo do RF12.<br>**CA-RF10-03** *(exceção)*: Se faltar categoria, quantidade, data ou destinatário, a saída não é salva e o sistema indica o campo que falta.<br>**CA-RF10-04** *(exceção)*: Quantidade igual a zero ou negativa é recusada, com mensagem, e o saldo não muda.<br>**CA-RF10-05** *(exceção)*: Saída maior que o saldo da categoria é recusada, e o sistema mostra o saldo disponível.<br>**CA-RF10-06**: O destinatário é selecionado em lista: famílias cadastradas (RF14) ou turmas de atividade cadastradas (RF20). Itens destinados a uma turma representam uso interno na associação; não há texto livre.<br>*Evidência prevista:* teste do registro, da subtração e das recusas; registro de saída para uma família e para uma turma. Validação: a coordenação registra uma saída fictícia para uma família cadastrada e para uma turma cadastrada. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio · Posição **11** na ordem<br>**Valor (cliente):** Must have, critério: obrigatoriedade legal, normativa ou institucional. «Sem a saída, o saldo fica errado e não dá para provar para onde os itens foram (ex.: Sacola Verde). É o que responde "onde foi parar minha doação?" na prestação de contas.»<br>**Esforço (equipe):** esforço 2 · complexidade 3 · lacuna 2 → consolidado 2,3. Exige relacionar a saída à família ou atividade e garantir que a quantidade seja descontada corretamente do saldo.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R1** · Sprint **7** · Iceberg: Topo |
| Situação | Pronta pela DoR, exceto protótipo |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. Ver o [histórico](../14-historico/index.md).<br>31/10/2026 · Esclarecido que "atividade" significa uso interno na associação (ex.: materiais para uma oficina). Dependência de RF20 adicionada; CA-RF10-06 atualizado. |

</details>

<details class="ficha" id="rf11" data-cp="cp2" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="1" markdown="1">
<summary><span class="ficha__id">RF11</span> <span class="ficha__nome">Cadastrar categoria de item</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R1</span> <span class="chip">Sprint 6</span> <span class="chip chip--sit-em-andamento">Em andamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir o cadastro de categorias para classificar os itens doados, como alimentos, roupas, produtos de higiene e material escolar, informando o nome da categoria e a unidade de medida usada na contagem dos itens (unidade, quilo ou pacote). |
| Intenção e valor | Como **coordenadora**, quero cadastrar categorias de item com nome e unidade de medida, para que entradas e saídas sejam contadas sempre da mesma forma. |
| Origem | [CP2 · Registro de doações de itens](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE2, OE5 · atividade [A2 Receber doações](../12-mapa/index.md#jornada-a) |
| Agentes | Coordenação |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN02](regras.md#rn02)<br>**Depende de:** [RF40](#rf40) |
| Critérios de aceitação | **CA-RF11-01**: A Coordenação cadastra uma categoria com nome e unidade de medida, escolhida entre unidade, quilo ou pacote (RN02), sem texto livre.<br>**CA-RF11-02**: Entradas, saídas e saldo usam a unidade cadastrada para a categoria.<br>**CA-RF11-03** *(exceção)*: O perfil Voluntário não consegue cadastrar categorias, inclusive por acesso direto à função.<br>**CA-RF11-04** *(exceção)*: Categoria sem nome ou sem unidade não é salva, e o sistema indica o campo que falta.<br>**CA-RF11-05** *(exceção)*: Não é possível cadastrar duas categorias com o mesmo nome.<br>*Evidência prevista:* teste com as três unidades, recusa para Voluntário e recusa de categoria incompleta ou duplicada. Validação: revisão das categorias com a coordenação. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **1** · Risco: Baixo · Posição **6** na ordem<br>**Valor (cliente):** Must have, critério: dependência para viabilizar outras funcionalidades. «RF09, RF10 e RF12 classificam tudo por categoria, e a unidade de medida (kg, pacote, unidade) é o que permite somar o saldo. Pode começar com categorias pré-carregadas.»<br>**Esforço (equipe):** esforço 1 · complexidade 1 · lacuna 1 → consolidado 1,0. Formulário simples. Poucas regras para validar.<br>**Leitura da matriz:** Prioridade máxima (valor 4 · esforço 1). Entra no MVP. É base simples de que os outros fluxos dependem (categorias, turmas, frequência e usuários). |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R1** · Sprint **6** · Iceberg: Topo |
| Situação | Em andamento (a confirmar) |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 1. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf12" data-cp="cp2" data-release="r3" data-sprint="6" data-mvp="complemento" data-situacao="em-andamento" data-valor="3" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF12</span> <span class="ficha__nome">Consultar saldo de itens doados</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R3</span> <span class="chip">Sprint 6</span> <span class="chip chip--sit-em-andamento">Em andamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação consultem a quantidade atual de cada item doado, por categoria. |
| Intenção e valor | Como **voluntária de atendimento**, quero consultar a quantidade atual de cada item por categoria, para entregar só o que está disponível. |
| Origem | [CP2 · Registro de doações de itens](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE2, OE5 · atividade [A4 Distribuir itens](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN02](regras.md#rn02)<br>**Depende de:** [RF09](#rf09) |
| Critérios de aceitação | **CA-RF12-01**: Voluntário e Coordenação consultam o saldo por categoria (entradas menos saídas), na unidade correspondente.<br>**CA-RF12-02**: A consulta responde em até 3 segundos em pelo menos 95% das requisições em conexão móvel 3G/4G (RNF03).<br>*Evidência prevista:* teste do cálculo com movimentações fictícias e medição de tempo em 3G/4G. Validação: conferência dos saldos com a coordenação. |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio: 3 s em 3G (RNF03) · Posição **9** na ordem<br>**Valor (cliente):** Should have, critério: frequência ou abrangência de uso. «É o ganho mais visível para a voluntária ("temos arroz para as sacolas desta semana?"). Mas nas primeiras semanas o saldo do sistema ainda não bate com o estoque físico, então dá para operar um tempo sem ele. Vira Must quando os dados acumularem. Como é uma consulta simples, deve cair em "Forte candidato ao MVP" na matriz.»<br>**Esforço (equipe):** esforço 1 · complexidade 2 · lacuna 2 → consolidado 1,7. A consulta precisa calcular o saldo por categoria, considerando as entradas e saídas registradas.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. Pode antecipar se sobrar tempo. |
| Entrega | MVP: **complemento** (Fatia 2), fora do MVP, mas antecipado na Sprint 6, onde já estava em andamento; a leitura do quadrante permite antecipar, e o cálculo de saldo é usado pelo RF10 · Release **R3** · Sprint **6** · Iceberg: Topo |
| Situação | Em andamento (a confirmar) |
| Evolução | 17/10/2026 · O replanejamento moveu este RF para a Fatia 2; a validação de 28/09 o mantinha no MVP. Resolvido pela nova matriz (29/10/2026).<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3; esforço 3 → 2; MVP: sim → complemento.<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): release R1 → R3. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf13" data-cp="cp2" data-release="trilha-cp1" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF13</span> <span class="ficha__nome">Publicar lista de itens necessários</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">Trilha CP1</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação inclua e remova manualmente, na área pública, os itens de que a associação precisa no momento, com a categoria e, se quiser, a quantidade desejada. |
| Intenção e valor | Como **coordenadora**, quero incluir e remover na área pública os itens de que a associação precisa, para orientar os apoiadores sobre o que doar. |
| Origem | [CP2 · Registro de doações de itens](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE2, OE5 · atividade [C3 Saber o que doar](../12-mapa/index.md#jornada-c) |
| Agentes | Coordenação |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN03](regras.md#rn03)<br>**Depende de:** [RF01](#rf01), [RF11](#rf11) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: — · Posição **32** na ordem<br>**Valor (cliente):** Should have, critério: impacto para os usuários. «Direciona o doador e reduz o recebimento do que a associação não precisa. Hoje isso é feito por post no Instagram, que funciona. Depende da área pública (CP1); por isso não é Must.»<br>**Esforço (equipe):** esforço 2 · complexidade 1 · lacuna 2 → consolidado 1,7. Cadastro e remoção simples de itens, com exibição na área pública. A lista é atualizada manualmente.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **Trilha CP1** · Sprint **8** · Iceberg: Meio |
| Situação | Não iniciada |
| Evolução | 27/10/2026 · Ordem ajustada: RF01 antes do RF13.<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3; esforço 3 → 2. Ver o [histórico](../14-historico/index.md). |

</details>


## CP3 · Cadastro de famílias e participantes {#cp3}

Gestão dos dados das famílias e participantes atendidos. **Valor de negócio (VN3):** Centralização dos dados atualmente mantidos de forma isolada. Objetivos: OE3, OE6. 6 requisitos.

<details class="ficha" id="rf14" data-cp="cp3" data-release="r1" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF14</span> <span class="ficha__nome">Cadastrar família</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R1</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação cadastrem uma família atendida com nome do responsável familiar*, telefone*, endereço* (logradouro, complemento e cidade), número de moradores e observações. O sistema registra a data do cadastro e a situação "ativa". |
| Intenção e valor | Como **voluntária de atendimento**, quero cadastrar uma família com nome do responsável, telefone e endereço, para poder destinar doações e inscrever seus membros. |
| Origem | [CP3 · Cadastro de famílias e participantes](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3, OE6 · atividade [A3 Acolher a família](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), [RNF13](rnf.md#rnf13), [RNF16](rnf.md#rnf16), [RNF19](rnf.md#rnf19), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN04](regras.md#rn04), [RN19](regras.md#rn19)<br>**Depende de:** [RF42](#rf42) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio: dados pessoais · Posição **10** na ordem<br>**Valor (cliente):** Must have, critério: importância para resolver o problema central. «Substitui o cadastro isolado no computador da sede (OE3). O RF10 precisa da família para registrar a destinação, e o RF36 precisa dela para contar famílias atendidas.»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3. Formulário com mais campos e validações, além da integração com consentimento e controle de acesso.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R1** · Sprint **7** · Iceberg: Topo |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. Ver o [histórico](../14-historico/index.md).<br>31/10/2026 · Esclarecido que "atividade" significa uso interno na associação (ex.: materiais para uma oficina). Dependência de RF20 adicionada; CA-RF10-06 atualizado. |

</details>

<details class="ficha" id="rf15" data-cp="cp3" data-release="r3" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="3" markdown="1">
<summary><span class="ficha__id">RF15</span> <span class="ficha__nome">Atualizar ou inativar cadastro de família</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R3</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação alterem os dados da família, e que a Coordenação a inative. A família inativa some das buscas padrão, mas o histórico de atendimento e os relatórios do período continuam. |
| Intenção e valor | a) Como **voluntária de atendimento**, quero atualizar os dados de uma família, para manter o contato em dia.<br>b) Como **coordenadora**, quero inativar uma família que deixou de ser atendida, para tirá-la das buscas sem perder o histórico de atendimento. |
| Origem | [CP3 · Cadastro de famílias e participantes](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3, OE6 · atividade [A5 Manter cadastros](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), [RNF13](rnf.md#rnf13), [RNF19](rnf.md#rnf19), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN06](regras.md#rn06)<br>**Depende de:** [RF14](#rf14) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **3** · Risco: Baixo · Posição **25** na ordem<br>**Valor (cliente):** Should have, critério: obrigatoriedade legal, normativa ou institucional. «Telefone e endereço mudam com frequência em comunidades vulneráveis. A LGPD (art. 6º, V) exige dados exatos e atualizados. Sem este RF, o cadastro envelhece em meses, mas o sistema funciona nas primeiras semanas.»<br>**Esforço (equipe):** esforço 3 · complexidade 3 · lacuna 2 → consolidado 2,7. Precisa controlar quem pode inativar e retirar a família das buscas padrão, preservando o histórico e os relatórios.<br>**Leitura da matriz:** Avaliar contexto (valor 3 · esforço 3). Fatia 2. Mantém o cadastro atualizado, mas não é necessário no início do uso. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R3** · Sprint **8** · Iceberg: Meio |
| Situação | Não iniciada |
| Evolução | 27/10/2026 · Declaração dividida por ator (a e b). Revisão do professor, issue #26.<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf16" data-cp="cp3" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF16</span> <span class="ficha__nome">Cadastrar participante</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação cadastrem uma pessoa atendida com nome completo*, data de nascimento*, telefone e observações. O sistema registra a data do cadastro e a situação "ativo". |
| Intenção e valor | Como **voluntária de atendimento**, quero cadastrar um participante com nome completo e data de nascimento, para registrar cada pessoa atendida. |
| Origem | [CP3 · Cadastro de famílias e participantes](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3, OE6 · atividade [A3 Acolher a família](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), [RNF13](rnf.md#rnf13), [RNF16](rnf.md#rnf16), [RNF19](rnf.md#rnf19), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN05](regras.md#rn05), [RN19](regras.md#rn19)<br>**Depende de:** [RF42](#rf42) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio · Posição **12** na ordem<br>**Valor (cliente):** Must have, critério: dependência para viabilizar outras funcionalidades. «Inscrição (RF23) e chamada (RF27) precisam do participante. Sem ele, o CP4 e o CP5 inteiros não existem.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0. Formulário com poucos campos, que pode aproveitar a estrutura do cadastro de família. Precisa integrar o consentimento.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. Ver o [histórico](../14-historico/index.md).<br>31/10/2026 · Esclarecido que "atividade" significa uso interno na associação (ex.: materiais para uma oficina). Dependência de RF20 adicionada; CA-RF10-06 atualizado. |

</details>

<details class="ficha" id="rf17" data-cp="cp3" data-release="r3" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="3" markdown="1">
<summary><span class="ficha__id">RF17</span> <span class="ficha__nome">Atualizar ou inativar cadastro de participante</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R3</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação alterem os dados do participante, e que a Coordenação o inative, mantendo o histórico. Ao inativar, as inscrições em turmas em andamento são canceladas com o motivo "desligamento da associação". |
| Intenção e valor | a) Como **voluntária de atendimento**, quero atualizar os dados de um participante, para manter o cadastro em dia.<br>b) Como **coordenadora**, quero inativar um participante, para liberar as vagas que ele ocupava e preservar o histórico. |
| Origem | [CP3 · Cadastro de famílias e participantes](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3, OE6 · atividade [A5 Manter cadastros](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), [RNF13](rnf.md#rnf13), [RNF19](rnf.md#rnf19), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN06](regras.md#rn06), [RN07](regras.md#rn07)<br>**Depende de:** [RF16](#rf16), [RF24](#rf24) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **3** · Risco: Baixo · Posição **26** na ordem<br>**Valor (cliente):** Should have, critério: obrigatoriedade legal, normativa ou institucional. «Mesma lógica do RF15. Pesa um pouco mais porque, ao inativar, cancela as inscrições: sem ele, quem saiu da associação continua aparecendo na chamada como ausente.»<br>**Esforço (equipe):** esforço 3 · complexidade 3 · lacuna 3 → consolidado 3,0. Esforço maior, pois inativar o participante também cancela inscrições em andamento, mantendo o histórico e o motivo do cancelamento.<br>**Leitura da matriz:** Avaliar contexto (valor 3 · esforço 3). Fatia 2. Mantém o cadastro atualizado, mas não é necessário no início do uso. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R3** · Sprint **8** · Iceberg: Meio |
| Situação | Não iniciada |
| Evolução | 27/10/2026 · Declaração dividida por ator (a e b). Revisão do professor, issue #26.<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf18" data-cp="cp3" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF18</span> <span class="ficha__nome">Vincular participante a família</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação associem o participante à sua família e indiquem o responsável legal. Para menor de 18 anos o responsável legal é obrigatório; a exceção (ex.: criança em acolhimento) exige motivo registrado. |
| Intenção e valor | Como **voluntária de atendimento**, quero vincular o participante à família e indicar o responsável legal, para saber quem responde por cada criança ou adolescente. |
| Origem | [CP3 · Cadastro de famílias e participantes](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3, OE6 · atividade [A3 Acolher a família](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), [RNF13](rnf.md#rnf13), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN08](regras.md#rn08)<br>**Depende de:** [RF14](#rf14), [RF16](#rf16) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Baixo · Posição **13** na ordem<br>**Valor (cliente):** Must have, critério: contribuição para os objetivos do projeto. «Mesma lógica do RF15. Pesa um pouco mais porque, ao inativar, cancela as inscrições: sem ele, quem saiu da associação continua aparecendo na chamada como ausente.» *(texto igual ao do RF17 na planilha: revisar)*<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0. Precisa relacionar participante e família, verificar a idade e exigir responsável legal para menores, tratando as exceções.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. Ver o [histórico](../14-historico/index.md).<br>31/10/2026 · Esclarecido que "atividade" significa uso interno na associação (ex.: materiais para uma oficina). Dependência de RF20 adicionada; CA-RF10-06 atualizado. |

</details>

<details class="ficha" id="rf19" data-cp="cp3" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF19</span> <span class="ficha__nome">Consultar cadastro de participantes</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação busquem participantes cadastrados por nome, família e atividade em que estão inscritos. |
| Intenção e valor | Como **educadora voluntária**, quero buscar participantes por nome, família ou atividade, para encontrar o cadastro rapidamente durante o atendimento. |
| Origem | [CP3 · Cadastro de famílias e participantes](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3, OE6 · atividade [B2 Inscrever participantes](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), [RNF07](rnf.md#rnf07), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF23](#rf23) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Baixo · Posição **16** na ordem<br>**Valor (cliente):** Must have, critério: frequência ou abrangência de uso. «Toda inscrição e todo atendimento começam com uma busca. Sem ela, a voluntária cadastra a mesma pessoa de novo, e o sistema recria o problema que veio resolver: dados duplicados e desencontrados.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0. Consulta simples, mas com três filtros. Leva um tempo para juntar as tabelas.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | A refinar (texto pendente na ata de 28/09) |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. Ver o [histórico](../14-historico/index.md).<br>31/10/2026 · Esclarecido que "atividade" significa uso interno na associação (ex.: materiais para uma oficina). Dependência de RF20 adicionada; CA-RF10-06 atualizado. |

</details>


## CP4 · Inscrição em atividades e organização do atendimento {#cp4}

Gestão das inscrições e dos atendimentos nas atividades. **Valor de negócio (VN4):** Organização e rastreabilidade dos atendimentos realizados. Objetivos: OE3. 7 requisitos.

<details class="ficha" id="rf20" data-cp="cp4" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="1" markdown="1">
<summary><span class="ficha__id">RF20</span> <span class="ficha__nome">Cadastrar turma de atividade</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação cadastre uma turma com atividade*, período (data de início e de término, com término depois do início), dias de encontro (dias da semana e horário) e quantidade de vagas. |
| Intenção e valor | Como **coordenadora**, quero cadastrar uma turma com atividade, período, dias de encontro e vagas, para organizar a oferta das oficinas. |
| Origem | [CP4 · Inscrição em atividades e organização do atendimento](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3 · atividade [B1 Montar turmas](../12-mapa/index.md#jornada-b) |
| Agentes | Coordenação |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN09](regras.md#rn09)<br>**Depende de:** [RF40](#rf40) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **1** · Risco: Baixo · Posição **14** na ordem<br>**Valor (cliente):** Must have, critério: dependência para viabilizar outras funcionalidades. «Inscrição, chamada e frequência acontecem dentro de uma turma. Sem turma, não há CP4 nem CP5.»<br>**Esforço (equipe):** esforço 2 · complexidade 1 · lacuna 1 → consolidado 1,3. Formulário simples, a equipe já domina a stack. Poucas regras para validar.<br>**Leitura da matriz:** Prioridade máxima (valor 4 · esforço 1). Entra no MVP. É base simples de que os outros fluxos dependem (categorias, turmas, frequência e usuários). |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | A refinar (texto pendente na ata de 28/09) |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 1. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf21" data-cp="cp4" data-release="r3" data-sprint="8" data-mvp="nao" data-situacao="nao-iniciada" data-valor="2" data-esforco="3" markdown="1">
<summary><span class="ficha__id">RF21</span> <span class="ficha__nome">Atualizar turma de atividade</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">R3</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação altere período, dias de encontro e vagas de uma turma em andamento. Se as novas vagas forem menos que os inscritos, o sistema recusa e informa o total de inscritos. Se aumentarem e houver lista de espera, o sistema avisa (RF25). |
| Intenção e valor | Como **coordenadora**, quero alterar período, dias de encontro e vagas de uma turma em andamento, para ajustar a oferta sem prejudicar quem já está inscrito. |
| Origem | [CP4 · Inscrição em atividades e organização do atendimento](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3 · atividade [B1 Montar turmas](../12-mapa/index.md#jornada-b) |
| Agentes | Coordenação |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN09](regras.md#rn09), [RN10](regras.md#rn10), [RN14](regras.md#rn14)<br>**Depende de:** [RF20](#rf20) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **3** · Risco: Baixo · Posição **35** na ordem<br>**Valor (cliente):** Could have, critério: urgência. «As turmas têm período definido. Mudar dia ou vagas no meio do período é exceção, e dá para contornar encerrando e criando outra.»<br>**Esforço (equipe):** esforço 3 · complexidade 3 · lacuna 2 → consolidado 2,7. Esforço maior, pois precisa checar inscritos e lista de espera antes de salvar.<br>**Leitura da matriz:** Entrega futura (valor 2 · esforço 3). Depois do MVP. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **R3** · Sprint **8** · Iceberg: Meio |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 2; MVP: complemento → não.<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): release R2 → R3; sprint 7 → 8. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf22" data-cp="cp4" data-release="r3" data-sprint="8" data-mvp="nao" data-situacao="nao-iniciada" data-valor="2" data-esforco="1" markdown="1">
<summary><span class="ficha__id">RF22</span> <span class="ficha__nome">Encerrar turma de atividade</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">R3</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação encerre uma turma, registrando a data. O encerramento antes do fim do período exige o motivo. |
| Intenção e valor | Como **coordenadora**, quero encerrar uma turma registrando a data, para manter o histórico das turmas realizadas. |
| Origem | [CP4 · Inscrição em atividades e organização do atendimento](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3 · atividade [B1 Montar turmas](../12-mapa/index.md#jornada-b) |
| Agentes | Coordenação |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN11](regras.md#rn11)<br>**Depende de:** [RF20](#rf20) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **1** · Risco: Baixo · Posição **36** na ordem<br>**Valor (cliente):** Could have, critério: importância para resolver o problema central. «A turma termina naturalmente na data de término cadastrada. O encerramento antecipado (com motivo) é raro no primeiro semestre de uso.»<br>**Esforço (equipe):** esforço 2 · complexidade 1 · lacuna 1 → consolidado 1,3. Fácil de fazer: só registra a data e pede o motivo se for antes do fim.<br>**Leitura da matriz:** Avaliar oportunidade (valor 2 · esforço 1). Pode entrar como ganho rápido, se sobrar tempo. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **R3** · Sprint **8** · Iceberg: Meio |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 2; esforço 3 → 1; MVP: complemento → não.<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): release R2 → R3; sprint 7 → 8. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf23" data-cp="cp4" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF23</span> <span class="ficha__nome">Inscrever participante em turma</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação inscrevam um participante ativo em uma turma com vaga. Sem vaga, o sistema recusa a inscrição e informa que a turma está cheia. O encaminhamento à lista de espera estará disponível a partir do RF25 (fora do MVP). |
| Intenção e valor | Como **educadora voluntária**, quero inscrever um participante ativo em uma turma com vaga, para saber quem frequenta cada atividade. Quando a turma estiver cheia, quero ser informada para poder registrar o participante na lista de espera assim que o RF25 estiver disponível. |
| Origem | [CP4 · Inscrição em atividades e organização do atendimento](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3 · atividade [B2 Inscrever participantes](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN12](regras.md#rn12)<br>**Depende de:** [RF16](#rf16), [RF20](#rf20) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio · Posição **15** na ordem<br>**Valor (cliente):** Must have, critério: dependência para viabilizar outras funcionalidades. «Substitui as inscrições soltas em WhatsApp e papel (OE3). A chamada (RF27) lista exatamente os inscritos; sem inscrição, não há chamada.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0. Não é difícil, mas precisa checar vaga e situação do participante antes de inscrever.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. Ver o [histórico](../14-historico/index.md).<br>31/10/2026 · Esclarecido que "atividade" significa uso interno na associação (ex.: materiais para uma oficina). Dependência de RF20 adicionada; CA-RF10-06 atualizado. |

</details>

<details class="ficha" id="rf24" data-cp="cp4" data-release="r3" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF24</span> <span class="ficha__nome">Cancelar inscrição de participante</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R3</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação cancelem uma inscrição, com motivo obrigatório escolhido em lista: desistência, mudança de endereço, conflito de horário, desligamento da associação ou outro (texto livre obrigatório só nesse caso). |
| Intenção e valor | Como **educadora voluntária**, quero cancelar uma inscrição informando o motivo, para liberar a vaga e saber por que o participante saiu. |
| Origem | [CP4 · Inscrição em atividades e organização do atendimento](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3 · atividade [B2 Inscrever participantes](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN07](regras.md#rn07), [RN13](regras.md#rn13)<br>**Depende de:** [RF23](#rf23) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Baixo · Posição **22** na ordem<br>**Valor (cliente):** Should have, critério: impacto para os usuários. «Substitui as inscrições soltas em WhatsApp e papel (OE3). A chamada (RF27) lista exatamente os inscritos; sem inscrição, não há chamada.» *(texto igual ao do RF23 na planilha: revisar)*<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 1 → consolidado 1,7. Formulário com lista de motivos, a equipe já domina. Só precisa liberar a vaga.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R3** · Sprint **8** · Iceberg: Meio |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3; esforço 3 → 2. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf25" data-cp="cp4" data-release="r3" data-sprint="8" data-mvp="complemento" data-situacao="a-refinar" data-valor="3" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF25</span> <span class="ficha__nome">Registrar participante em lista de espera</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R3</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação registrem o participante em lista de espera quando a turma não tiver vaga. A ordem é a de registro. Quando abrir vaga, o sistema avisa a Coordenação, que confirma a inscrição manualmente (RF23). |
| Intenção e valor | Como **educadora voluntária**, quero registrar o participante na lista de espera de uma turma cheia, para que ele seja chamado na ordem quando abrir vaga. |
| Origem | [CP4 · Inscrição em atividades e organização do atendimento](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3 · atividade [B2 Inscrever participantes](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN12](regras.md#rn12), [RN14](regras.md#rn14)<br>**Depende de:** [RF23](#rf23) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Baixo · Posição **23** na ordem<br>**Valor (cliente):** Should have, critério: frequência ou abrangência de uso. «Sem lista de espera, quem fica de fora é anotado em papel ou no WhatsApp, fora do sistema. A ordem de chegada se perde e a escolha de quem entra quando abre vaga pode parecer injusta para as famílias. Não chega a 4 porque o RF23 já bloqueia a 21ª inscrição: a turma funciona sem a fila. Também ajuda a medir a demanda reprimida, um bom argumento para pedir mais apoio (OE5).»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3. Esforço maior, pois precisa manter a ordem da fila e avisar a Coordenação quando abre vaga.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R3** · Sprint **8** · Iceberg: Meio |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3.<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): release R2 → R3; sprint 7 → 8. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf26" data-cp="cp4" data-release="r3" data-sprint="8" data-mvp="complemento" data-situacao="a-refinar" data-valor="3" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF26</span> <span class="ficha__nome">Consultar inscritos da turma</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R3</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação consultem os inscritos de cada turma. A exibição da lista de espera, na ordem de registro, estará disponível a partir do RF25 (fora do MVP). |
| Intenção e valor | Como **educadora voluntária**, quero consultar os inscritos de cada turma, para saber quem participa. Quando o RF25 estiver disponível, quero ver também a lista de espera na ordem de registro. |
| Origem | [CP4 · Inscrição em atividades e organização do atendimento](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3 · atividade [B2 Inscrever participantes](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), [RNF07](rnf.md#rnf07), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN14](regras.md#rn14)<br>**Depende de:** [RF23](#rf23) *(a exibição da lista de espera dependerá do RF25, fora do MVP)* |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Baixo · Posição **24** na ordem<br>**Valor (cliente):** Should have, critério: frequência ou abrangência de uso. «Útil para preparar material (quantos kits de crochê?). No dia do encontro, a própria chamada (RF27) já mostra os inscritos, então não é indispensável. Barato; deve cair em "Forte candidato ao MVP".»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 1 → consolidado 1,7. A parte da listagem é fácil, mas precisa mostrar também a lista de espera.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. Pode antecipar se sobrar tempo. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R3** · Sprint **8** · Iceberg: Meio |
| Situação | A refinar |
| Evolução | 17/10/2026 · O replanejamento moveu este RF para a Fatia 2; a validação de 28/09 o mantinha no MVP. Resolvido pela nova matriz (29/10/2026).<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3; esforço 3 → 2; MVP: sim → complemento.<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): release R2 → R3; sprint 7 → 8. Ver o [histórico](../14-historico/index.md).<br>31/10/2026 · Declaração ajustada: no MVP, o RF26 exibe apenas inscritos confirmados. A lista de espera fica para quando o RF25 for implementado; dependência atualizada. |

</details>


## CP5 · Chamada digital e controle de frequência {#cp5}

Gestão da frequência dos participantes nas atividades. **Valor de negócio (VN5):** Redução da conferência manual de presença e apoio à aplicação da regra de faltas. Objetivos: OE4, OE5. 6 requisitos.

<details class="ficha" id="rf27" data-cp="cp5" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF27</span> <span class="ficha__nome">Abrir chamada do encontro</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação abram a chamada de um encontro de turma, na data do encontro, listando os participantes inscritos. |
| Intenção e valor | Como **educadora voluntária**, quero abrir a chamada do encontro com a lista de inscritos, para registrar a presença no próprio dia, sem papel. |
| Origem | [CP5 · Chamada digital e controle de frequência](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE4, OE5 · atividade [B3 Fazer a chamada](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** [RNF01](rnf.md#rnf01), [RNF10](rnf.md#rnf10), [RNF16](rnf.md#rnf16), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN15](regras.md#rn15)<br>**Depende de:** [RF26](#rf26) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Alto: uso no celular (RNF10) · Posição **17** na ordem<br>**Valor (cliente):** Must have, critério: importância para resolver o problema central. «Substitui a lista de presença em papel e acaba com a conferência manual pela coordenação (dor citada na seção 2). É o núcleo do OE4.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0. Simples de fazer e essencial pro MVP. Pode ser implementado junto da RF28.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. Ver o [histórico](../14-historico/index.md).<br>31/10/2026 · Esclarecido que "atividade" significa uso interno na associação (ex.: materiais para uma oficina). Dependência de RF20 adicionada; CA-RF10-06 atualizado. |

</details>

<details class="ficha" id="rf28" data-cp="cp5" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="1" markdown="1">
<summary><span class="ficha__id">RF28</span> <span class="ficha__nome">Registrar frequência do participante</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação registrem, para cada participante listado em uma chamada aberta, se esteve presente ou ausente. |
| Intenção e valor | Como **educadora voluntária**, quero marcar cada participante como presente ou ausente, para acabar com a conferência manual da presença. |
| Origem | [CP5 · Chamada digital e controle de frequência](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE4, OE5 · atividade [B3 Fazer a chamada](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** [RNF01](rnf.md#rnf01), [RNF10](rnf.md#rnf10), [RNF16](rnf.md#rnf16), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN15](regras.md#rn15)<br>**Depende de:** [RF27](#rf27) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **1** · Risco: Médio · Posição **18** na ordem<br>**Valor (cliente):** Must have, critério: importância para resolver o problema central. «Inseparável do RF27: abrir a chamada sem marcar presença não substitui o papel. Precisa ser rápido no celular (RNF01).»<br>**Esforço (equipe):** esforço 1 · complexidade 1 · lacuna 1 → consolidado 1,0. Simples de fazer e essencial pro mvp.<br>**Leitura da matriz:** Prioridade máxima (valor 4 · esforço 1). Entra no MVP. É base simples de que os outros fluxos dependem (categorias, turmas, frequência e usuários). |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 1. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf29" data-cp="cp5" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="nao-iniciada" data-valor="3" data-esforco="1" markdown="1">
<summary><span class="ficha__id">RF29</span> <span class="ficha__nome">Justificar falta</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação informem o motivo de uma falta já registrada, que passa a constar como falta justificada. |
| Intenção e valor | Como **educadora voluntária**, quero informar o motivo de uma falta, para que a falta justificada não conte para o limite de faltas. |
| Origem | [CP5 · Chamada digital e controle de frequência](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE4, OE5 · atividade [B4 Ajustar a chamada](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** [RNF01](rnf.md#rnf01), [RNF16](rnf.md#rnf16), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN16](regras.md#rn16)<br>**Depende de:** [RF28](#rf28) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **1** · Risco: Baixo · Posição **19** na ordem<br>**Valor (cliente):** Should have, critério: contribuição para os objetivos do projeto. «3 faltas seguidas geram só um alerta, sem perda de vaga. Justificar a falta evita alertas indevidos (ex.: criança doente na semana) e deixa a frequência correta para os relatórios. Fica em 3 enquanto a falta não tiver consequência.»<br>**Esforço (equipe):** esforço 1 · complexidade 1 · lacuna 1 → consolidado 1,0. Pode ser implementado junto da RF28.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 3 · esforço 1). Entra no MVP. É barato porque aproveita a mesma tela da chamada (RF27/RF28). |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | Não iniciada |
| Evolução | 17/10/2026 · O replanejamento incluiu este RF no MVP (R2). Resolvido pela nova matriz (29/10/2026).<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3; esforço 3 → 1; MVP: complemento → sim.<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 8 → 7. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf30" data-cp="cp5" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="nao-iniciada" data-valor="3" data-esforco="1" markdown="1">
<summary><span class="ficha__id">RF30</span> <span class="ficha__nome">Corrigir registro de frequência</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir a correção de um registro de frequência já concluído, conforme as permissões de cada perfil (ver RN17). O registro anterior é sempre preservado. |
| Intenção e valor | a) Como **educadora voluntária**, quero corrigir a chamada que eu fiz até o fim do mesmo dia, para consertar um erro de marcação.<br>b) Como **coordenadora**, quero corrigir qualquer registro de frequência informando o motivo, para resolver erros depois do dia sem perder o registro anterior. |
| Origem | [CP5 · Chamada digital e controle de frequência](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE4, OE5 · atividade [B4 Ajustar a chamada](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário (mesmo dia), Coordenação |
| Condições | **RNFs:** [RNF19](rnf.md#rnf19), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN17](regras.md#rn17)<br>**Depende de:** [RF28](#rf28) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **1** · Risco: Médio · Posição **20** na ordem<br>**Valor (cliente):** Should have, critério: impacto para os usuários. «Erro de toque no celular é comum. Sem correção, a voluntária fica com um registro errado sem saída, e a confiança no sistema cai. A regra de preservar o registro anterior protege a coordenação em caso de contestação.»<br>**Esforço (equipe):** esforço 1 · complexidade 1 · lacuna 1 → consolidado 1,0. Pode ser implementado junto da RF28.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 3 · esforço 1). Entra no MVP. É barato porque aproveita a mesma tela da chamada (RF27/RF28). |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | Não iniciada |
| Evolução | 17/10/2026 · O replanejamento incluiu este RF no MVP (R2). Resolvido pela nova matriz (29/10/2026).<br>27/10/2026 · Declaração dividida por ator (a e b). Revisão do professor, issue #26.<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3; esforço 3 → 1; MVP: complemento → sim.<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 8 → 7. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf31" data-cp="cp5" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="nao-iniciada" data-valor="3" data-esforco="1" markdown="1">
<summary><span class="ficha__id">RF31</span> <span class="ficha__nome">Consultar frequência do participante</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação consultem o histórico de presenças e faltas de um participante por turma e por período. |
| Intenção e valor | Como **educadora voluntária**, quero consultar o histórico de presenças e faltas de um participante por turma e período, para acompanhar a participação dele. |
| Origem | [CP5 · Chamada digital e controle de frequência](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE4, OE5 · atividade [B5 Acompanhar faltas](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), [RNF07](rnf.md#rnf07), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF28](#rf28) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **1** · Risco: Baixo · Posição **21** na ordem<br>**Valor (cliente):** Should have, critério: frequência ou abrangência de uso. «É a consulta que a coordenação usa quando precisa decidir sobre um participante faltoso. O valor cresce com o tempo: no primeiro mês há pouco histórico para consultar.»<br>**Esforço (equipe):** esforço 2 · complexidade 1 · lacuna 1 → consolidado 1,3. Esforço maior, pois é necessário criar uma nova aba ou painel com o perfil do participante.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 3 · esforço 1). Entra no MVP. É barato porque aproveita a mesma tela da chamada (RF27/RF28). |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | Não iniciada |
| Evolução | 17/10/2026 · O replanejamento incluiu este RF no MVP (R2). Resolvido pela nova matriz (29/10/2026).<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3; esforço 3 → 1; MVP: complemento → sim.<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 8 → 7. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf32" data-cp="cp5" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF32</span> <span class="ficha__nome">Sinalizar participante com faltas acima do limite</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R4</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que o sistema sinalize automaticamente o participante que atingir o limite de faltas não justificadas definido pela Coordenação. A sinalização aparece na seção "Participantes sinalizados" do painel (RF37), com nome, turma e telefone da família. |
| Intenção e valor | Como **coordenadora**, quero que o sistema sinalize quem atingiu o limite de faltas sem justificativa, para entrar em contato com a família a tempo. |
| Origem | [CP5 · Chamada digital e controle de frequência](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE4, OE5 · atividade [B5 Acompanhar faltas](../12-mapa/index.md#jornada-b) |
| Agentes | Sistema, vista pela Coordenação |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN16](regras.md#rn16), [RN18](regras.md#rn18)<br>**Depende de:** [RF29](#rf29) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio · Posição **27** na ordem<br>**Valor (cliente):** Should have, critério: contribuição para os objetivos do projeto. «Hoje está com 2, mas é a automação literal da "regra de frequência já praticada" que o OE4 promete apoiar. Permite agir cedo, ligando para a família antes que a criança abandone a oficina. Depende do RF29 para não sinalizar quem justificou.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 1 → consolidado 1,7. A parte de sinalização é fácil, mas é preciso criar um painel com os participantes sinalizados.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R4** · Sprint **8** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 2 → 3; esforço 4 → 2; MVP: não → complemento. Ver o [histórico](../14-historico/index.md). |

</details>


## CP6 · Relatórios e indicadores de impacto {#cp6}

Acompanhamento dos resultados e indicadores da associação. **Valor de negócio (VN6):** Apoio à prestação de contas e à captação de novos apoiadores. Objetivos: OE5. 6 requisitos.

<details class="ficha" id="rf33" data-cp="cp6" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF33</span> <span class="ficha__nome">Gerar relatório de doações recebidas</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R4</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação gere relatório dos itens recebidos por período, categoria e doador. |
| Intenção e valor | Como **coordenadora**, quero gerar o relatório dos itens recebidos por período, categoria e doador, para prestar contas aos apoiadores. |
| Origem | [CP6 · Relatórios e indicadores de impacto](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE5 · atividade [A6 Prestar contas](../12-mapa/index.md#jornada-a) |
| Agentes | Coordenação |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF09](#rf09) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Alto: esforço 4 · Posição **28** na ordem<br>**Valor (cliente):** Should have, critério: contribuição para os objetivos do projeto. «Substitui a soma manual do caderno na prestação de contas. Com o filtro por doador, permite mostrar a cada apoiador o que ele contribuiu, o que ajuda a captação.»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3. A parte do relatório não é difícil, mas leva mais tempo para implementar.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R4** · Sprint **8** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 2 → 3; esforço 4 → 2; MVP: não → complemento. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf34" data-cp="cp6" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF34</span> <span class="ficha__nome">Gerar relatório de doações distribuídas</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R4</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação gere relatório dos itens destinados por período, categoria e família atendida. |
| Intenção e valor | Como **coordenadora**, quero gerar o relatório dos itens destinados por período, categoria e família, para mostrar como as doações foram distribuídas. |
| Origem | [CP6 · Relatórios e indicadores de impacto](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE5 · atividade [A6 Prestar contas](../12-mapa/index.md#jornada-a) |
| Agentes | Coordenação |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), [RNF07](rnf.md#rnf07), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF10](#rf10) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Alto: esforço 4 · Posição **29** na ordem<br>**Valor (cliente):** Should have, critério: contribuição para os objetivos do projeto. «É a outra metade da prestação de contas: prova que os itens chegaram às famílias. Para quem doa, é mais convincente que o relatório de entradas.»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3. A parte do relatório não é difícil, mas leva mais tempo para implementar.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R4** · Sprint **8** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 2 → 3; esforço 4 → 2; MVP: não → complemento. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf35" data-cp="cp6" data-release="r4" data-sprint="8" data-mvp="nao" data-situacao="nao-iniciada" data-valor="2" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF35</span> <span class="ficha__nome">Gerar relatório de frequência por turma</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">R4</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação gere o relatório de presenças e faltas de uma turma por período, ou de um encontro específico. |
| Intenção e valor | Como **coordenadora**, quero gerar o relatório de presenças e faltas de uma turma por período ou encontro, para acompanhar a participação nas atividades. |
| Origem | [CP6 · Relatórios e indicadores de impacto](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE5 · atividade [B5 Acompanhar faltas](../12-mapa/index.md#jornada-b) |
| Agentes | Coordenação |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), [RNF07](rnf.md#rnf07), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF28](#rf28) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio · Posição **37** na ordem<br>**Valor (cliente):** Could have, critério: frequência ou abrangência de uso. «O RF31 e a própria chamada já respondem "quem veio". Pode subir se algum parceiro ou edital de oficina exigir comprovação de frequência.»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3. A parte do relatório não é difícil, mas leva mais tempo para implementar.<br>**Leitura da matriz:** Entrega futura (valor 2 · esforço 2). Depois do MVP. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **R4** · Sprint **8** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 4 → 2. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf36" data-cp="cp6" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF36</span> <span class="ficha__nome">Gerar relatório de famílias atendidas</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R4</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação gere relatório das famílias com atendimento registrado no período consultado. |
| Intenção e valor | Como **coordenadora**, quero gerar o relatório das famílias atendidas no período, para demonstrar o alcance da associação. |
| Origem | [CP6 · Relatórios e indicadores de impacto](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE5 · atividade [A6 Prestar contas](../12-mapa/index.md#jornada-a) |
| Agentes | Coordenação |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), [RNF07](rnf.md#rnf07), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF14](#rf14) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio · Posição **30** na ordem<br>**Valor (cliente):** Should have, critério: contribuição para os objetivos do projeto. «"Quantas famílias atendemos?" é o primeiro número que um apoiador ou edital pergunta. Hoje exige cruzar caderno, listas e o cadastro da sede.»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3. A parte do relatório não é difícil, mas leva mais tempo para implementar.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R4** · Sprint **8** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 2 → 3; esforço 4 → 2; MVP: não → complemento. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf37" data-cp="cp6" data-release="r4" data-sprint="8" data-mvp="nao" data-situacao="nao-iniciada" data-valor="2" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF37</span> <span class="ficha__nome">Consultar painel de indicadores</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">R4</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação consulte os indicadores de atendimento da associação, como famílias atendidas, participantes ativos, itens recebidos e itens distribuídos no período, incluindo a seção de participantes sinalizados (RF32). |
| Intenção e valor | Como **coordenadora**, quero um painel com famílias atendidas, participantes ativos, itens recebidos e distribuídos e participantes sinalizados, para acompanhar o impacto em um só lugar. |
| Origem | [CP6 · Relatórios e indicadores de impacto](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE5 · atividade [A6 Prestar contas](../12-mapa/index.md#jornada-a) |
| Agentes | Coordenação |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN18](regras.md#rn18)<br>**Depende de:** [RF32](#rf32), [RF33](#rf33), [RF34](#rf34) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Alto: esforço 4 · Posição **38** na ordem<br>**Valor (cliente):** Could have, critério: impacto para os usuários. «Resume o que os relatórios já mostram. É conforto, não necessidade. Atenção: o RF32 exibe os sinalizados aqui, então, se o RF32 entrar antes, os sinalizados precisam de outro lugar provisório.»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3. Precisa juntar dados de doações, famílias e frequência, e incluir a seção de sinalizados (RF32). Leva tempo, mas a técnica é conhecida.<br>**Leitura da matriz:** Entrega futura (valor 2 · esforço 2). Depois do MVP. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **R4** · Sprint **8** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 4 → 2. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf38" data-cp="cp6" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF38</span> <span class="ficha__nome">Exportar relatório gerado</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R4</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação exporte um relatório gerado em PDF (envio a apoiadores e prestação de contas) ou CSV (planilha). |
| Intenção e valor | Como **coordenadora**, quero exportar um relatório em PDF ou CSV, para enviá-lo a apoiadores e usá-lo em planilhas. |
| Origem | [CP6 · Relatórios e indicadores de impacto](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE5 · atividade [A6 Prestar contas](../12-mapa/index.md#jornada-a) |
| Agentes | Coordenação |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF33](#rf33) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio · Posição **31** na ordem<br>**Valor (cliente):** Should have, critério: dependência para viabilizar outras funcionalidades. «Hoje está com 4, mas só exporta o que RF33 a RF37 geram. Sem ele, ainda dá para imprimir a tela pelo navegador. Ganha valor junto com os relatórios, porque o PDF é o formato que apoiadores recebem.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 1 → consolidado 1,7. Usa biblioteca pronta de PDF/CSV, e a equipe já domina. Só precisa integrar com os relatórios do CP6.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R4** · Sprint **8** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 27/10/2026 · Ordem ajustada: relatórios (RF33 a RF37) antes da exportação.<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3; esforço 3 → 2. Ver o [histórico](../14-historico/index.md). |

</details>


## CP7 · Perfis de acesso e proteção de dados {#cp7}

Controle de acesso e proteção dos dados tratados pela solução. **Valor de negócio (VN7):** Proteção dos dados das famílias atendidas e conformidade com a LGPD. Objetivos: OE6. 7 requisitos.

<details class="ficha" id="rf39" data-cp="cp7" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="1" markdown="1">
<summary><span class="ficha__id">RF39</span> <span class="ficha__nome">Cadastrar usuário do sistema</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R1</span> <span class="chip">Sprint 6</span> <span class="chip chip--sit-em-andamento">Em andamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação cadastre Voluntários e outros membros da Coordenação. A primeira conta de Coordenação é criada pela equipe de desenvolvimento na implantação. |
| Intenção e valor | Como **coordenadora**, quero cadastrar voluntárias e outros membros da coordenação, para que só pessoas autorizadas usem a área restrita. |
| Origem | [CP7 · Perfis de acesso e proteção de dados](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE6 · atividade [A1 Dar acesso à equipe](../12-mapa/index.md#jornada-a) |
| Agentes | Coordenação |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), [RNF15](rnf.md#rnf15), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN20](regras.md#rn20)<br>**Depende de:** [RF41](#rf41) |
| Critérios de aceitação | **CA-RF39-01**: A primeira conta de Coordenação é criada pela equipe na implantação; as demais são criadas pela Coordenação (RN20).<br>**CA-RF39-02**: A Coordenação cadastra Voluntários e outros membros da Coordenação; o Voluntário não cria contas, inclusive por acesso direto.<br>**CA-RF39-03**: Senhas com menos de 8 caracteres são recusadas, e as credenciais são armazenadas de forma irreversível (RNF15 e RNF07).<br>*Evidência prevista:* teste de cadastro, recusa para Voluntário, rejeição de senha curta e inspeção do armazenamento. Validação: a coordenação cadastra uma conta de teste. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **1** · Risco: Médio · Posição **3** na ordem<br>**Valor (cliente):** Must have, critério: obrigatoriedade legal, normativa ou institucional. «Cada voluntária precisa de conta própria. Um login compartilhado impede saber quem alterou um dado (RNF19) e quem acessou dados pessoais (RNF07).»<br>**Esforço (equipe):** esforço 2 · complexidade 1 · lacuna 1 → consolidado 1,3. Formulário simples, a equipe já domina o stack. A primeira conta de Coordenação é criada na implantação.<br>**Leitura da matriz:** Prioridade máxima (valor 4 · esforço 1). Entra no MVP. É base simples de que os outros fluxos dependem (categorias, turmas, frequência e usuários). |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R1** · Sprint **6** · Iceberg: Topo |
| Situação | Em andamento (a confirmar) |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 1. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf40" data-cp="cp7" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF40</span> <span class="ficha__nome">Atribuir perfil de acesso ao usuário</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R1</span> <span class="chip">Sprint 6</span> <span class="chip chip--sit-em-andamento">Em andamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação atribua a cada usuário o perfil Voluntário ou Coordenação, conforme a [tabela de permissões](glossario.md#permissoes-por-perfil). |
| Intenção e valor | Como **coordenadora**, quero atribuir a cada usuário o perfil Voluntário ou Coordenação, para que cada pessoa acesse apenas o que sua função permite. |
| Origem | [CP7 · Perfis de acesso e proteção de dados](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE6 · atividade [A1 Dar acesso à equipe](../12-mapa/index.md#jornada-a) |
| Agentes | Coordenação |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF39](#rf39) |
| Critérios de aceitação | **CA-RF40-01**: A Coordenação atribui o perfil Voluntário ou Coordenação; o Voluntário não atribui perfis.<br>**CA-RF40-02**: Operações e dados respeitam o perfil e a [tabela de permissões](glossario.md#permissoes-por-perfil); operações não autorizadas são recusadas, inclusive por acesso direto (RNF07).<br>*Evidência prevista:* teste dos dois perfis e das recusas. Validação: revisão das permissões com contas de teste. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Alto: permissões por perfil · Posição **4** na ordem<br>**Valor (cliente):** Must have, critério: obrigatoriedade legal, normativa ou institucional. «A voluntária da chamada não precisa ver o endereço de todas as famílias. Limitar o acesso ao necessário é exigência da LGPD (OE6). Com só dois perfis, pode ser um campo simples do RF39.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0. Só dois perfis, mas precisa aplicar a [tabela de permissões](glossario.md#permissoes-por-perfil), inclusive a exceção do RF30. Depende do banco (média da equipe 2,2; Vitor marcou 4).<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R1** · Sprint **6** · Iceberg: Topo |
| Situação | Em andamento (a confirmar) |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. Ver o [histórico](../14-historico/index.md).<br>31/10/2026 · Esclarecido que "atividade" significa uso interno na associação (ex.: materiais para uma oficina). Dependência de RF20 adicionada; CA-RF10-06 atualizado. |

</details>

<details class="ficha" id="rf41" data-cp="cp7" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF41</span> <span class="ficha__nome">Autenticar usuário</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R1</span> <span class="chip">Sprint 6</span> <span class="chip chip--sit-em-andamento">Em andamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação acessem a área restrita mediante autenticação do usuário cadastrado. |
| Intenção e valor | Como **voluntária de atendimento**, quero entrar na área restrita com meu usuário e senha, para usar as funções do meu perfil com segurança. |
| Origem | [CP7 · Perfis de acesso e proteção de dados](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE6 · atividade [A1 Dar acesso à equipe](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), [RNF15](rnf.md#rnf15), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [T01](#t01) |
| Critérios de aceitação | **CA-RF41-01**: Voluntário e Coordenação entram com credenciais válidas; credenciais incorretas não dão acesso.<br>**CA-RF41-02**: Funções restritas exigem autenticação, e as credenciais trafegam cifradas (RNF07).<br>**CA-RF41-03**: A sessão termina após 30 minutos sem atividade (RNF15).<br>**CA-RF41-04**: Após cinco tentativas incorretas seguidas, novas tentativas ficam bloqueadas por 15 minutos (RNF15).<br>*Evidência prevista:* testes de credenciais, acesso sem login, bloqueio, expiração e cifragem. Validação: entrada e acesso às funções do perfil com a coordenação. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Alto: segurança (RNF15) · Posição **2** na ordem<br>**Valor (cliente):** Must have, critério: dependência para viabilizar outras funcionalidades. «Todo RF da área restrita depende dele. Sem login, os perfis do RF40 não têm efeito. A seção 8.5 já reconhece isso para justificar a entrada no MVP; o certo é refletir isso no próprio valor.»<br>**Esforço (equipe):** esforço 3 · complexidade 3 · lacuna 1 → consolidado 2,3. Envolve sessão, expiração e bloqueio por tentativas (RNF15). Tem várias dependências, mas a equipe domina login e sessão.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R1** · Sprint **6** · Iceberg: Topo |
| Situação | Em andamento (a confirmar) |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 3 → 4; esforço 3 → 2. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf42" data-cp="cp7" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF42</span> <span class="ficha__nome">Registrar consentimentos e autorizações (LGPD e Imagem)</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R1</span> <span class="chip">Sprint 6</span> <span class="chip chip--sit-em-andamento">Em andamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação registrem, em um único fluxo, o consentimento do titular, ou do responsável legal, para cada finalidade de tratamento de dados pessoais (cadastro e atendimento, registro de frequência, contato com a família e relatórios a apoiadores) e a autorização ou recusa de uso de imagem em materiais de divulgação da associação, indicando os meios autorizados (site, redes sociais, materiais impressos) e a eventual revogação. Cada consentimento e autorização leva a data do registro. |
| Intenção e valor | Como **voluntária de atendimento**, quero registrar o consentimento do titular (ou responsável legal) para cada finalidade e a autorização de uso de imagem, para que nenhum dado da família seja usado sem permissão. |
| Origem | [CP7 · Perfis de acesso e proteção de dados](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE6 · atividade [A3 Acolher a família](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** [RNF13](rnf.md#rnf13), [RNF14](rnf.md#rnf14), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN19](regras.md#rn19)<br>**Depende de:** [RF41](#rf41) |
| Critérios de aceitação | **CA-RF42-01**: Voluntário e Coordenação registram separadamente, por titular ou responsável legal, os consentimentos para cadastro e atendimento, frequência, contato com a família e relatórios a apoiadores, com a data de cada um (RN19).<br>**CA-RF42-02**: No mesmo fluxo, a autorização ou recusa de uso de imagem é registrada à parte, com data e meios autorizados (site, redes sociais, materiais impressos).<br>**CA-RF42-03**: A revogação da autorização de imagem pode ser registrada.<br>**CA-RF42-04**: No fluxo com RF14 e RF16, dados reais só entram no sistema depois do consentimento (RN19).<br>*Evidência prevista:* testes por finalidade, de autorização e recusa de imagem, de revogação e de integração com o cadastro. Validação: revisão do fluxo com a coordenação, com dados fictícios. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Alto: LGPD · Posição **5** na ordem<br>**Valor (cliente):** Must have, critério: obrigatoriedade legal, normativa ou institucional. «A LGPD (art. 14) exige consentimento específico de um dos pais ou responsável para dados de crianças, e o projeto já decidiu que dados reais só entram depois do consentimento. Também cobre o uso de imagem (ECA, arts. 17 e 18).»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0. Fluxo único com 4 finalidades, 3 meios de imagem, revogação e data. As finalidades já foram validadas. LGPD não consta no domínio técnico, então a lacuna é estimada.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. Na nova avaliação, o esforço caiu para 2: as finalidades de consentimento já estão validadas. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R1** · Sprint **6** · Iceberg: Topo |
| Situação | Em andamento (a confirmar) |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 3 → 4; esforço 3 → 2. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf43" data-cp="cp7" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF43</span> <span class="ficha__nome">Registrar e acompanhar solicitação de exclusão de dados</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R4</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação registre a solicitação do titular e acompanhe as etapas: recebida, em análise, atendida ou negada com justificativa. Cada etapa guarda a data, e a resposta guarda a data em que o titular foi avisado. |
| Intenção e valor | Como **coordenadora**, quero registrar e acompanhar as etapas de uma solicitação de exclusão de dados, para responder ao titular conforme a LGPD. |
| Origem | [CP7 · Perfis de acesso e proteção de dados](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE6 · atividade [D1 Responder ao titular](../12-mapa/index.md#jornada-d) |
| Agentes | Coordenação |
| Condições | **RNFs:** [RNF13](rnf.md#rnf13), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF42](#rf42) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio: LGPD · Posição **33** na ordem<br>**Valor (cliente):** Should have, critério: obrigatoriedade legal, normativa ou institucional. «O direito à eliminação é da LGPD (art. 18), e o prazo de 15 dias já foi validado. Mas pedidos devem ser raros, e no início podem ser atendidos por um procedimento fora do sistema. Precisa estar definido antes de usar dados reais.»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3. O RF só registra e acompanha as etapas (recebida, em análise, atendida ou negada) com datas e justificativa. O prazo de 15 dias já foi validado.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R4** · Sprint **8** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | Pendente · Prioridade do bloco de LGPD avançada aguarda a coordenação.<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2; MVP: não → complemento.<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint Fechamento → 8. Ver o [histórico](../14-historico/index.md). |

</details>

<details class="ficha" id="rf44" data-cp="cp7" data-release="r4" data-sprint="fechamento" data-mvp="nao" data-situacao="nao-iniciada" data-valor="2" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF44</span> <span class="ficha__nome">Consultar histórico de alterações de cadastro</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">R4</span> <span class="chip">Fechamento</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação consulte quem alterou dados pessoais ou registros de frequência, o que foi alterado e quando. |
| Intenção e valor | Como **coordenadora**, quero consultar quem alterou dados pessoais ou registros de frequência, o que mudou e quando, para ter controle sobre as alterações. |
| Origem | [CP7 · Perfis de acesso e proteção de dados](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE6 · atividade [D2 Auditar alterações](../12-mapa/index.md#jornada-d) |
| Agentes | Coordenação |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), [RNF19](rnf.md#rnf19), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** log do [RNF19](rnf.md#rnf19) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio · Posição **39** na ordem<br>**Valor (cliente):** Could have, critério: frequência ou abrangência de uso. «O registro das alterações é obrigatório pelo RNF19, mas isso é gravar no banco. A tela para consultar só é usada quando surge uma dúvida ou contestação, o que deve ser raro.»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3. Tela de consulta sobre o log do RNF19 (autor, data, valor anterior e novo). Esforço 3 se o log for feito junto; 2 se já existir.<br>**Leitura da matriz:** Entrega futura (valor 2 · esforço 2). Depois do MVP. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **R4** · **Fechamento** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. Ver o [histórico](../14-historico/index.md).<br>31/10/2026 · Esclarecido que "atividade" significa uso interno na associação (ex.: materiais para uma oficina). Dependência de RF20 adicionada; CA-RF10-06 atualizado. |

</details>

<details class="ficha" id="rf45" data-cp="cp7" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2" markdown="1">
<summary><span class="ficha__id">RF45</span> <span class="ficha__nome">Consultar autorização de uso de imagem vigente</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R4</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação consultem, por titular, a autorização em vigor para cada meio (site, redes sociais, material impresso) e se ela foi revogada, antes de divulgar a imagem. |
| Intenção e valor | Como **voluntária de atendimento**, quero consultar a autorização de imagem em vigor de uma pessoa para cada meio, para não divulgar uma imagem sem permissão. |
| Origem | [CP7 · Perfis de acesso e proteção de dados](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE6 · atividade [D1 Responder ao titular](../12-mapa/index.md#jornada-d) |
| Agentes | Voluntário, Coordenação |
| Condições | **RNFs:** [RNF14](rnf.md#rnf14), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF42](#rf42) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Baixo · Posição **34** na ordem<br>**Valor (cliente):** Should have, critério: obrigatoriedade legal, normativa ou institucional. «A associação publica fotos das oficinas no Instagram com frequência. Antes de cada post com crianças, alguém precisa conferir a autorização. Vira 4 assim que houver participantes cadastrados com fotos sendo publicadas.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0. Consulta por titular e por meio, com regra de revogação. Depende do RF42.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R4** · Sprint **8** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | Pendente · Prioridade do bloco de LGPD avançada aguarda a coordenação.<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2; MVP: não → complemento.<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint Fechamento → 8. Ver o [histórico](../14-historico/index.md). |

</details>


## Itens técnicos e de lançamento {#itens-tecnicos}

O backlog é a única fonte do trabalho: além dos RFs, entram itens técnicos e de lançamento. Defeitos encontrados nas revisões entram aqui com o prefixo D (D01, D02…), no topo da ordem.

<details class="ficha ficha--tec" id="t01" data-cp="tec" data-mvp="tec" markdown="1">
<summary><span class="ficha__id">T01</span> <span class="ficha__nome">Ambiente de desenvolvimento: Nuxt.js, Supabase, deploy e CI</span> <span class="ficha__chips"><span class="chip">Sprint 6</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Por que é necessário | Sem ele nenhuma história passa na DoD (precisa estar publicada e testada). |
| Entrega | Sprint 6 |
| Situação | Em andamento (a confirmar) |

</details>

<details class="ficha ficha--tec" id="t02" data-cp="tec" data-mvp="tec" markdown="1">
<summary><span class="ficha__id">T02</span> <span class="ficha__nome">Plano de transição</span> <span class="ficha__chips"><span class="chip">Sprint 8</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Por que é necessário | A associação precisa assumir o sistema ao fim da disciplina. |
| Entrega | Sprint 8 |
| Situação | Não iniciado |

</details>

<details class="ficha ficha--tec" id="t03" data-cp="tec" data-mvp="tec" markdown="1">
<summary><span class="ficha__id">T03</span> <span class="ficha__nome">Treinamento e manual de uso</span> <span class="ficha__chips"><span class="chip">Sprint Fechamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Por que é necessário | A coordenação e as voluntárias precisam usar o sistema sem a equipe. |
| Entrega | Sprint Fechamento |
| Situação | Não iniciado |

</details>

<details class="ficha ficha--tec" id="t04" data-cp="tec" data-mvp="tec" markdown="1">
<summary><span class="ficha__id">T04</span> <span class="ficha__nome">Titularidade das contas e backup</span> <span class="ficha__chips"><span class="chip">Sprint Fechamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Por que é necessário | As contas (Supabase, deploy, domínio) precisam ficar em nome da associação. |
| Entrega | Sprint Fechamento |
| Situação | Não iniciado |

</details>


## Verificação DEEP do catálogo (27/10/2026) {#deep}

| Característica | Situação |
| :--- | :--- |
| **D**etalhado adequadamente | Topo com critérios de aceitação (RF08 a RF12, RF39 a RF42); falta protótipo validado. Itens da Sprint 7 ainda sem critérios. |
| **E**stimado | Esforço de 1 a 4 por RF; velocidade ainda não medida (primeira medição em 02/11). |
| **E**mergente | Mudanças registradas no [Histórico de evolução](../14-historico/index.md). |
| **P**riorizado | Ordem única com os quatro fatores, na tabela acima. |
