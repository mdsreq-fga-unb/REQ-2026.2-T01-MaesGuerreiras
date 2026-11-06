---
hide:
  - toc
---

# 8. Catálogo integrado de requisitos

Este catálogo é a **fonte única do escopo vigente**. Cada requisito funcional tem **um registro**,
com tudo o que é preciso para entendê-lo, implementá-lo e validá-lo: declaração, história de usuário, origem,
condições, critérios, prioridade, entrega, situação e evolução. As outras páginas explicam o método
([priorização](../09-priorizacao/index.md), [MVP](../10-mvp/index.md),
[rastreabilidade](../11-rastreabilidade/index.md)) e **consultam este registro**, sem repetir a lista.

!!! info "Regra de manutenção"
    Mudou algo em um requisito? Atualize **a ficha dele aqui** e registre a decisão no
    [Histórico de evolução](../14-historico/index.md), com um código de mudança (`MUD-…`). Cada nota
    da *Evolução* termina com esse código e leva à linha exata do histórico. Nenhuma outra página guarda atributos de
    requisito. RNFs e regras de negócio têm registros próprios
    ([8.1](rnf.md) e [8.2](regras.md)); a ligação com cada RF é mantida só na ficha do RF.

> **Situação em 04/11/2026.** RFs concluídos pela DoD: **0 de 43**. Atualizado a partir das issues ([como funciona](../13-dor-dod/index.md#137-como-a-situacao-e-atualizada)).

## Como usar

- **Ordem do backlog:** o número antes do ID é a posição na ordem do backlog (valor, risco,
  capacidade de entrega e dependências, ver [Priorização](../09-priorizacao/index.md)). Em
  *Mostrar*, escolha **Na ordem do backlog** para ver todas as fichas numa lista única, nessa ordem.
- **Filtros:** combine característica, MVP, release, sprint, situação e perfil (o que cada perfil executa). Os links das outras páginas
  já chegam com o filtro aplicado.
- **Fichas:** agrupadas por característica de produto, ou na ordem do backlog. Cada ficha abre e fecha.
- **Granularidade:** cada RF é um item do backlog. Quando o comportamento muda por ator, a ficha
  traz uma história de usuário por ator (a, b), sem criar outro ID. As tarefas técnicas da sprint
  ficam no [quadro da equipe no GitHub Projects](https://github.com/orgs/mdsreq-fga-unb/projects/131){target="_blank"}, com responsável, sprint e situação de cada issue.

<div id="ordem"></div>

<div class="filtros" id="filtros" markdown="0">
<label>Característica<select id="f-cp" data-campo="cp"><option value="">Todos</option><option value="cp1">CP1 · Portal institucional e agenda de atividades</option><option value="cp2">CP2 · Registro de doações de itens</option><option value="cp3">CP3 · Cadastro de famílias e participantes</option><option value="cp4">CP4 · Inscrição em atividades e organização do atendimento</option><option value="cp5">CP5 · Chamada digital e controle de frequência</option><option value="cp6">CP6 · Relatórios e indicadores de impacto</option><option value="cp7">CP7 · Perfis de acesso e proteção de dados</option></select></label><label>MVP<select id="f-mvp" data-campo="mvp"><option value="">Todos</option><option value="sim">Sim (19)</option><option value="complemento">Complemento</option><option value="nao">Não</option></select></label><label>Release<select id="f-release" data-campo="release"><option value="">Todos</option><option value="r1">R1</option><option value="r2">R2</option><option value="r3">R3</option><option value="r4">R4</option><option value="trilha-cp1">Trilha CP1</option></select></label><label>Sprint<select id="f-sprint" data-campo="sprint"><option value="">Todos</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="fechamento">Fechamento</option><option value="nao-planejado">Não planejado</option></select></label><label>Situação<select id="f-situacao" data-campo="situacao"><option value="">Todos</option><option value="em-andamento">Em andamento</option><option value="pronta">Pronta pela DoR</option><option value="a-refinar">A refinar</option><option value="nao-iniciada">Não iniciada</option><option value="concluida">Concluída</option></select></label><label>Perfil<select id="f-perfil" data-campo="perfis"><option value="">Todos</option><option value="visitante">Visitante</option><option value="voluntario">Voluntário</option><option value="coordenacao">Coordenação</option></select></label><label>Buscar<input id="f-texto" type="search" placeholder="ID ou palavra"></label><label>Mostrar<select id="f-modo"><option value="cp">Por característica</option><option value="ordem">Na ordem do backlog</option></select></label><button type="button" id="f-limpar">Limpar filtros</button><p class="filtros__status" id="f-status" aria-live="polite"></p>
</div>

## CP1 · Portal institucional e agenda de atividades {#cp1}

Disponibilização das informações institucionais e das atividades da associação. **Valor de negócio (VN1):** Centralização das informações destinadas à comunidade e aos apoiadores. Objetivos: OE1, OE5. 7 requisitos.

<details class="ficha" id="rf01" data-cp="cp1" data-release="trilha-cp1" data-sprint="fechamento" data-mvp="nao" data-situacao="a-refinar" data-valor="2" data-esforco="2" data-ordem="40" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">40º</span> <span class="ficha__id">RF01</span> <span class="ficha__nome">Publicar conteúdo institucional</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">Trilha CP1</span> <span class="chip">Fechamento</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir a publicação das informações da associação, como histórico, missão, endereço e formas de contato, na área pública. |
| História de usuário | Como **coordenadora**, quero publicar o histórico, a missão, o endereço e os contatos da associação, para que a comunidade e os apoiadores encontrem essas informações em um só lugar. |
| Origem | [CP1 · Portal institucional e agenda de atividades](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE1, OE5 · atividade [C1 Conhecer a associação](../12-mapa/index.md#jornada-c) |
| Agentes | Coordenação: publica |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [T01](#t01)<br>**Necessário para:** [RF02](#rf02), [RF03](#rf03), [RF06](#rf06), [RF13](#rf13) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: — · Posição **40** na ordem<br>**Valor (cliente):** Could have, critério: contribuição para os objetivos do projeto. «História, missão e endereço mudam raramente e já estão no Instagram. Uma página própria dá credibilidade a apoiadores e editais, mas não reduz nenhuma das dores levantadas (doação sem registro, dados isolados, chamada em papel).»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0<br>**Leitura da matriz:** Entrega futura (valor 2 · esforço 2). Depois do MVP. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **Trilha CP1** · **Fechamento** · Iceberg: Base |
| Situação | A refinar |
| Evolução | 27/10/2026 · Ordem ajustada: RF01 antes do RF13. ([MUD-006](../14-historico/index.md#mud-006))<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 7 → Fechamento. ([MUD-018](../14-historico/index.md#mud-018)) |

</details>

<details class="ficha" id="rf02" data-cp="cp1" data-release="trilha-cp1" data-sprint="fechamento" data-mvp="nao" data-situacao="a-refinar" data-valor="2" data-esforco="1" data-ordem="41" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">41º</span> <span class="ficha__id">RF02</span> <span class="ficha__nome">Atualizar conteúdo institucional</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">Trilha CP1</span> <span class="chip">Fechamento</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação altere o histórico, a missão, o endereço e as formas de contato publicados (os mesmos campos do RF01). |
| História de usuário | Como **coordenadora**, quero alterar as informações institucionais publicadas, para mantê-las corretas. |
| Origem | [CP1 · Portal institucional e agenda de atividades](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE1, OE5 · atividade [C1 Conhecer a associação](../12-mapa/index.md#jornada-c) |
| Agentes | Coordenação: atualiza |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF01](#rf01)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **1** · Risco: — · Posição **41** na ordem<br>**Valor (cliente):** Could have, critério: dependência para viabilizar outras funcionalidades. «Só faz sentido junto com o RF01. Pesa porque a equipe sai no fim do semestre: sem ele, mudanças como a da nova sede (junho de 2026) exigiriam um programador para editar o site.»<br>**Esforço (equipe):** esforço 1 · complexidade 1 · lacuna 1 → consolidado 1,0<br>**Leitura da matriz:** Avaliar oportunidade (valor 2 · esforço 1). Pode entrar como ganho rápido, se sobrar tempo. Só faz sentido junto com o RF01. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **Trilha CP1** · **Fechamento** · Iceberg: Base |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 1. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 7 → Fechamento. ([MUD-018](../14-historico/index.md#mud-018)) |

</details>

<details class="ficha" id="rf03" data-cp="cp1" data-release="trilha-cp1" data-sprint="fechamento" data-mvp="nao" data-situacao="a-refinar" data-valor="2" data-esforco="2" data-ordem="42" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">42º</span> <span class="ficha__id">RF03</span> <span class="ficha__nome">Cadastrar atividade na agenda</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">Trilha CP1</span> <span class="chip">Fechamento</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir o cadastro de uma atividade com data, horário, local e público a que se destina. |
| História de usuário | Como **coordenadora**, quero cadastrar uma atividade com data, horário, local e público, para divulgar oficinas e eventos. |
| Origem | [CP1 · Portal institucional e agenda de atividades](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE1, OE5 · atividade [C2 Ver a agenda](../12-mapa/index.md#jornada-c) |
| Agentes | Coordenação: cadastra |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF01](#rf01)<br>**Necessário para:** [RF04](#rf04), [RF05](#rf05) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: — · Posição **42** na ordem<br>**Valor (cliente):** Could have, critério: contribuição para os objetivos do projeto. «Sobrepõe o RF20: a turma já tem dias e horário. Se os dois existirem separados, a coordenação digita a mesma oficina duas vezes. Vale perguntar se a agenda pode ser gerada a partir das turmas, mais eventos avulsos (Domingo Criativo).»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3<br>**Leitura da matriz:** Entrega futura (valor 2 · esforço 2). Depois do MVP. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **Trilha CP1** · **Fechamento** · Iceberg: Base |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 7 → Fechamento. ([MUD-018](../14-historico/index.md#mud-018)) |

</details>

<details class="ficha" id="rf04" data-cp="cp1" data-release="trilha-cp1" data-sprint="fechamento" data-mvp="nao" data-situacao="a-refinar" data-valor="2" data-esforco="2" data-ordem="43" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">43º</span> <span class="ficha__id">RF04</span> <span class="ficha__nome">Atualizar atividade na agenda</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">Trilha CP1</span> <span class="chip">Fechamento</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir a alteração dos dados de uma atividade já divulgada, incluindo seu cancelamento. |
| História de usuário | Como **coordenadora**, quero alterar ou cancelar uma atividade divulgada, para que ninguém compareça com base em informação desatualizada. |
| Origem | [CP1 · Portal institucional e agenda de atividades](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE1, OE5 · atividade [C2 Ver a agenda](../12-mapa/index.md#jornada-c) |
| Agentes | Coordenação: atualiza |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF03](#rf03)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: — · Posição **43** na ordem<br>**Valor (cliente):** Could have, critério: contribuição para os objetivos do projeto. «Uma agenda pública desatualizada é pior que nenhuma: uma mãe que vai até a sede para uma oficina cancelada perde a viagem. Por isso tem o mesmo valor do RF03, e não menos.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0<br>**Leitura da matriz:** Entrega futura (valor 2 · esforço 2). Depois do MVP. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **Trilha CP1** · **Fechamento** · Iceberg: Base |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 7 → Fechamento. ([MUD-018](../14-historico/index.md#mud-018)) |

</details>

<details class="ficha" id="rf05" data-cp="cp1" data-release="trilha-cp1" data-sprint="fechamento" data-mvp="nao" data-situacao="nao-iniciada" data-valor="2" data-esforco="3" data-ordem="44" data-perfis="visitante" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">44º</span> <span class="ficha__id">RF05</span> <span class="ficha__nome">Consultar agenda de atividades</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">Trilha CP1</span> <span class="chip">Fechamento</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir a consulta pública às atividades divulgadas, com filtro por período e por tipo de atividade. |
| História de usuário | Como **visitante**, quero consultar as atividades divulgadas por período e tipo, para saber quando e onde posso participar. |
| Origem | [CP1 · Portal institucional e agenda de atividades](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE1, OE5 · atividade [C2 Ver a agenda](../12-mapa/index.md#jornada-c) |
| Agentes | Visitante: consulta (área pública, aberta a todos) |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF03](#rf03)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **3** · Risco: — · Posição **44** na ordem<br>**Valor (cliente):** Could have, critério: impacto para os usuários. «É a parte visível do RF03. A comunidade da Estrutural já acompanha avisos pelo WhatsApp, que chega sem a pessoa precisar abrir um site; a adesão a uma página nova é incerta.»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 3 → consolidado 2,7<br>**Leitura da matriz:** Entrega futura (valor 2 · esforço 3). Depois do MVP. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **Trilha CP1** · **Fechamento** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 8 → Fechamento. ([MUD-018](../14-historico/index.md#mud-018)) |

</details>

<details class="ficha" id="rf06" data-cp="cp1" data-release="trilha-cp1" data-sprint="nao-planejado" data-mvp="nao" data-situacao="nao-iniciada" data-valor="1" data-esforco="2" data-ordem="45" data-perfis="visitante" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">45º</span> <span class="ficha__id">RF06</span> <span class="ficha__nome">Registrar solicitação de contato</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">Trilha CP1</span> <span class="chip">Não planejado</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que o Visitante envie uma solicitação de contato a coordenação informando nome*, telefone ou e-mail* (ao menos um) e mensagem*. Registrando-a para atendimento posterior. |
| História de usuário | Como **visitante**, quero enviar meu nome, um telefone ou e-mail e uma mensagem, para ser atendido sem precisar ir até a associação. |
| Origem | [CP1 · Portal institucional e agenda de atividades](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE1, OE5 · atividade [C4 Falar com a associação](../12-mapa/index.md#jornada-c) |
| Agentes | Visitante: envia |
| Condições | **RNFs:** [RNF13](rnf.md#rnf13), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN01](regras.md#rn01)<br>**Depende de:** [RF01](#rf01)<br>**Necessário para:** [RF07](#rf07) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **1** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: — · Posição **45** na ordem<br>**Valor (cliente):** Won't have now, critério: impacto para os usuários. «Quem quer falar com a associação já usa Instagram e WhatsApp, que respondem na hora. O formulário cria uma fila nova para alguém vigiar (a disponibilidade da coordenação é um risco listado) e coleta dados pessoais de visitantes, o que traz obrigações de LGPD.»<br>**Esforço (equipe):** esforço 2 · complexidade 3 · lacuna 2 → consolidado 2,3<br>**Leitura da matriz:** Baixa prioridade (valor 1 · esforço 2). Não priorizar agora. Duplica canais que já funcionam (Instagram e WhatsApp). |
| Entrega | MVP: **não**, não planejado neste semestre (Won't have now) · Release **Trilha CP1** · **Não planejado** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 27/10/2026 · Ordem ajustada: RF06 antes do RF07. ([MUD-006](../14-historico/index.md#mud-006))<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 2 → 1; esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 8 → Não planejado. ([MUD-018](../14-historico/index.md#mud-018)) |

</details>

<details class="ficha" id="rf07" data-cp="cp1" data-release="trilha-cp1" data-sprint="nao-planejado" data-mvp="nao" data-situacao="nao-iniciada" data-valor="1" data-esforco="2" data-ordem="46" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">46º</span> <span class="ficha__id">RF07</span> <span class="ficha__nome">Consultar solicitações de contato</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">Trilha CP1</span> <span class="chip">Não planejado</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação consulte as solicitações registradas no RF06 e marque cada uma como atendida. |
| História de usuário | Como **coordenadora**, quero consultar as solicitações de contato e marcar cada uma como atendida, para que nenhum pedido fique sem resposta. |
| Origem | [CP1 · Portal institucional e agenda de atividades](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE1, OE5 · atividade [C4 Falar com a associação](../12-mapa/index.md#jornada-c) |
| Agentes | Coordenação: consulta e marca como atendida |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), [RNF13](rnf.md#rnf13), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF06](#rf06)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **1** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: — · Posição **46** na ordem<br>**Valor (cliente):** Won't have now, critério: frequência ou abrangência de uso. «Só existe se o RF06 existir. Está com valor 4 na matriz atual, o que não se sustenta: não atende nenhum objetivo específico diretamente.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 1 → consolidado 1,7<br>**Leitura da matriz:** Baixa prioridade (valor 1 · esforço 2). Não priorizar agora. Duplica canais que já funcionam (Instagram e WhatsApp). |
| Entrega | MVP: **não**, não planejado neste semestre (Won't have now) · Release **Trilha CP1** · **Não planejado** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 27/10/2026 · Ordem ajustada: RF06 antes do RF07. ([MUD-006](../14-historico/index.md#mud-006))<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 1; esforço 3 → 2; MVP: complemento → não. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 8 → Não planejado. ([MUD-018](../14-historico/index.md#mud-018)) |

</details>


## CP2 · Registro de doações de itens {#cp2}

Gestão das doações de itens recebidas e distribuídas. **Valor de negócio (VN2):** Redução de registros de doações não realizados e maior visibilidade sobre os itens recebidos e distribuídos. Objetivos: OE2, OE5. 6 requisitos.

<details class="ficha" id="rf08" data-cp="cp2" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="2" data-ordem="7" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">7º</span> <span class="ficha__id">RF08</span> <span class="ficha__nome">Cadastrar ou atualizar doador</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R1</span> <span class="chip">Sprint 6</span> <span class="chip chip--sit-em-andamento">Em andamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação cadastrem e, se necessário, corrijam os dados de pessoas e organizações que doam itens à associação. *(Campos marcados com \* são obrigatórios nas fichas desta seção.)* |
| História de usuário | Como **voluntária de atendimento**, quero cadastrar e corrigir os dados de pessoas e organizações que doam, para saber de onde veio cada doação. |
| Origem | [CP2 · Registro de doações de itens](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE2, OE5 · atividade [A2 Receber doações](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário: cadastra e corrige · Coordenação: cadastra e corrige |
| Condições | **RNFs:** [RNF01](rnf.md#rnf01), [RNF07](rnf.md#rnf07), [RNF19](rnf.md#rnf19), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN21](regras.md#rn21)<br>**Depende de:** [RF41](#rf41)<br>**Necessário para:** [RF09](#rf09) |
| Critérios de aceitação | **CA-RF08-01**: Voluntário e Coordenação cadastram doadores do tipo **pessoa** ou **organização**, informando nome e pelo menos um meio de contato (telefone ou e-mail).<br>**CA-RF08-02**: A correção feita por um desses perfis é persistida no cadastro do doador.<br>**CA-RF08-03**: As correções registram autor, data, hora, valor anterior e valor novo (RNF19); o registro pode ser verificado no log sem a tela RF44.<br>**CA-RF08-04** *(exceção, proposta a validar)*: Um doador sem nome não é salvo, e o sistema indica o campo que falta.<br>**CA-RF08-05** *(exceção, proposta a validar)*: Se já existir um doador com o mesmo nome e o mesmo telefone ou e-mail, o sistema avisa e oferece usar o cadastro existente.<br>**CA-RF08-06** *(exceção, proposta a validar)*: É possível registrar doação anônima sem cadastrar um doador. *(Confirmar com a coordenação se doações anônimas existem.)*<br>*Evidência prevista:* teste de cadastro, correção, recusa por campo faltante, aviso de duplicidade e consulta do log. Validação: uma coordenadora cadastra e corrige um doador fictício sem ajuda. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Baixo · Posição **7** na ordem<br>**Valor (cliente):** Must have, critério: dependência para viabilizar outras funcionalidades. «O RF09 exige o doador de origem. Também alimenta o relatório por doador (RF33), usado para agradecer e fidelizar apoiadores. Sugestão: aceitar "doador anônimo" e deixar o contato opcional, para não travar o registro.»<br>**Esforço (equipe):** esforço 2 · complexidade 3 · lacuna 1 → consolidado 2,0<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R1** · Sprint **6** · Iceberg: Topo |
| Situação | Em andamento (a confirmar); critérios refinados em 27/10 |
| Evolução | 27/10/2026 · Critérios de aceitação ampliados com dados obrigatórios e exceções (propostas a validar). Revisão do professor, issue #26. ([MUD-007](../14-historico/index.md#mud-007))<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · Regra [RN21](regras.md#rn21) criada: nome e pelo menos um contato são obrigatórios. Doação anônima sem cadastro de doador ainda a confirmar com a coordenação (ver CA-RF08-06 e a seção 9.5). ([MUD-023](../14-historico/index.md#mud-023))<br>06/11/2026 · Condições: o RNF07 passa a valer para os dados do doador pessoa física. ([MUD-037](../14-historico/index.md#mud-037)) |

</details>

<details class="ficha" id="rf09" data-cp="cp2" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="2" data-ordem="8" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">8º</span> <span class="ficha__id">RF09</span> <span class="ficha__nome">Registrar doação recebida</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R1</span> <span class="chip">Sprint 6</span> <span class="chip chip--sit-em-andamento">Em andamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação registrem a entrada de itens doados, com categoria de item, quantidade, data e doador de origem. |
| História de usuário | Como **voluntária de atendimento**, quero registrar a entrada de itens doados com categoria, quantidade, data e doador, para registrar o recebimento sem atrasar o atendimento. |
| Origem | [CP2 · Registro de doações de itens](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE2, OE5 · atividade [A2 Receber doações](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário: registra · Coordenação: registra |
| Condições | **RNFs:** [RNF01](rnf.md#rnf01), [RNF07](rnf.md#rnf07), [RNF19](rnf.md#rnf19), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN02](regras.md#rn02)<br>**Depende de:** [RF08](#rf08), [RF11](#rf11)<br>**Necessário para:** [RF12](#rf12), [RF33](#rf33) |
| Critérios de aceitação | **CA-RF09-01**: O registro feito por Voluntário ou Coordenação contém categoria, quantidade, data e doador.<br>**CA-RF09-02**: A quantidade usa a unidade de medida da categoria (RN02), e a entrada soma a quantidade ao saldo do RF12.<br>**CA-RF09-03**: O registro é concluído em até três passos a partir da tela inicial da área restrita, sem ajuda (RNF01).<br>**CA-RF09-04** *(exceção)*: Se faltar categoria, quantidade, data ou doador, a entrada não é salva e o sistema indica o campo que falta.<br>**CA-RF09-05** *(exceção)*: Quantidade igual a zero ou negativa é recusada, com mensagem, e o saldo não muda.<br>**CA-RF09-06** *(exceção)*: A categoria é escolhida entre as cadastradas no RF11, sem texto livre.<br>*Evidência prevista:* teste do registro, da unidade, da soma no saldo e das recusas. Validação: uma voluntária registra uma doação fictícia sem ajuda, com contagem de passos. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio: até 3 passos (RNF01) · Posição **8** na ordem<br>**Valor (cliente):** Must have, critério: importância para resolver o problema central. «É a troca direta do caderno de doações. Ataca a dor nº 1 (doações não registradas) e é a base da meta preliminar de reduzir em 80% as doações sem registro.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. Na nova avaliação, o esforço caiu para 2: o registro de doação reaproveita a estrutura de doador e categoria. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R1** · Sprint **6** · Iceberg: Topo |
| Situação | Em andamento (a confirmar) |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015))<br>06/11/2026 · Condições: o RNF07 passa a valer para os dados do doador pessoa física. ([MUD-037](../14-historico/index.md#mud-037)) |

</details>

<details class="ficha" id="rf10" data-cp="cp2" data-release="r1" data-sprint="7" data-mvp="sim" data-situacao="pronta" data-valor="4" data-esforco="2" data-ordem="11" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">11º</span> <span class="ficha__id">RF10</span> <span class="ficha__nome">Registrar destinação de doação</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R1</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-pronta">Pronta pela DoR</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação registrem a saída de itens doados, com categoria de item, quantidade, data e o destinatário: uma família atendida ou uma turma de atividade (uso interno na associação). |
| História de usuário | Como **voluntária de atendimento**, quero registrar a saída de itens indicando a família que os recebeu ou a turma que os usou internamente, para que a coordenadora saiba para onde foi cada doação. |
| Origem | [CP2 · Registro de doações de itens](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE2, OE5 · atividade [A4 Distribuir itens](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário: registra · Coordenação: registra |
| Condições | **RNFs:** [RNF19](rnf.md#rnf19), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN02](regras.md#rn02)<br>**Depende de:** [RF12](#rf12), [RF14](#rf14), [RF20](#rf20)<br>**Necessário para:** [RF34](#rf34) |
| Critérios de aceitação | **CA-RF10-01**: O registro feito por Voluntário ou Coordenação contém categoria, quantidade, data e a família ou atividade destinatária.<br>**CA-RF10-02**: A quantidade usa a unidade da categoria (RN02), e a saída subtrai a quantidade do saldo do RF12.<br>**CA-RF10-03** *(exceção)*: Se faltar categoria, quantidade, data ou destinatário, a saída não é salva e o sistema indica o campo que falta.<br>**CA-RF10-04** *(exceção)*: Quantidade igual a zero ou negativa é recusada, com mensagem, e o saldo não muda.<br>**CA-RF10-05** *(exceção)*: Saída maior que o saldo da categoria é recusada, e o sistema mostra o saldo disponível.<br>**CA-RF10-06**: O destinatário é selecionado em lista: famílias cadastradas (RF14) ou turmas de atividade cadastradas (RF20). Itens destinados a uma turma representam uso interno na associação; não há texto livre.<br>*Evidência prevista:* teste do registro, da subtração e das recusas; registro de saída para uma família e para uma turma. Validação: a coordenação registra uma saída fictícia para uma família cadastrada e para uma turma cadastrada. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio · Posição **11** na ordem<br>**Valor (cliente):** Must have, critério: obrigatoriedade legal, normativa ou institucional. «Sem a saída, o saldo fica errado e não dá para provar para onde os itens foram (ex.: Sacola Verde). É o que responde "onde foi parar minha doação?" na prestação de contas.»<br>**Esforço (equipe):** esforço 2 · complexidade 3 · lacuna 2 → consolidado 2,3. Exige relacionar a saída à família ou atividade e garantir que a quantidade seja descontada corretamente do saldo.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R1** · Sprint **7** · Iceberg: Topo |
| Situação | Pronta pela DoR, exceto protótipo |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · A R1 passa a incluir o cálculo de saldo do RF12 no back-end, de que o RF10 depende. ([MUD-019](../14-historico/index.md#mud-019))<br>31/10/2026 · Esclarecido que "atividade" significa uso interno na associação (ex.: materiais para uma oficina). Dependência de RF20 adicionada; CA-RF10-06 atualizado. ([MUD-020](../14-historico/index.md#mud-020)) |

</details>

<details class="ficha" id="rf11" data-cp="cp2" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="1" data-ordem="6" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">6º</span> <span class="ficha__id">RF11</span> <span class="ficha__nome">Cadastrar categoria de item</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R1</span> <span class="chip">Sprint 6</span> <span class="chip chip--sit-em-andamento">Em andamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir o cadastro de categorias para classificar os itens doados, como alimentos, roupas, produtos de higiene e material escolar, informando o nome da categoria e a unidade de medida usada na contagem dos itens (unidade, quilo ou pacote). |
| História de usuário | Como **coordenadora**, quero cadastrar categorias de item com nome e unidade de medida, para que entradas e saídas sejam contadas sempre da mesma forma. |
| Origem | [CP2 · Registro de doações de itens](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE2, OE5 · atividade [A2 Receber doações](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário: consulta, ao registrar uma doação · Coordenação: cadastra |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN02](regras.md#rn02)<br>**Depende de:** [RF40](#rf40)<br>**Necessário para:** [RF09](#rf09), [RF13](#rf13) |
| Critérios de aceitação | **CA-RF11-01**: A Coordenação cadastra uma categoria com nome e unidade de medida, escolhida entre unidade, quilo ou pacote (RN02), sem texto livre.<br>**CA-RF11-02**: Entradas, saídas e saldo usam a unidade cadastrada para a categoria.<br>**CA-RF11-03** *(exceção)*: O perfil Voluntário não consegue cadastrar categorias, inclusive por acesso direto à função.<br>**CA-RF11-04** *(exceção)*: Categoria sem nome ou sem unidade não é salva, e o sistema indica o campo que falta.<br>**CA-RF11-05** *(exceção)*: Não é possível cadastrar duas categorias com o mesmo nome.<br>*Evidência prevista:* teste com as três unidades, recusa para Voluntário e recusa de categoria incompleta ou duplicada. Validação: revisão das categorias com a coordenação. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **1** · Risco: Baixo · Posição **6** na ordem<br>**Valor (cliente):** Must have, critério: dependência para viabilizar outras funcionalidades. «RF09, RF10 e RF12 classificam tudo por categoria, e a unidade de medida (kg, pacote, unidade) é o que permite somar o saldo. Pode começar com categorias pré-carregadas.»<br>**Esforço (equipe):** esforço 1 · complexidade 1 · lacuna 1 → consolidado 1,0. Formulário simples. Poucas regras para validar.<br>**Leitura da matriz:** Prioridade máxima (valor 4 · esforço 1). Entra no MVP. É base simples de que os outros fluxos dependem (categorias, turmas, frequência e usuários). |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R1** · Sprint **6** · Iceberg: Topo |
| Situação | Em andamento (a confirmar) |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 1. ([MUD-015](../14-historico/index.md#mud-015))<br>05/11/2026 · Agentes: o Voluntário passa a constar como quem consulta as categorias ao registrar uma doação; o cadastro continua só com a Coordenação. ([MUD-031](../14-historico/index.md#mud-031)) |

</details>

<details class="ficha" id="rf12" data-cp="cp2" data-release="r3" data-sprint="6" data-mvp="complemento" data-situacao="em-andamento" data-valor="3" data-esforco="2" data-ordem="9" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">9º</span> <span class="ficha__id">RF12</span> <span class="ficha__nome">Consultar saldo de itens doados</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R3</span> <span class="chip">Sprint 6</span> <span class="chip chip--sit-em-andamento">Em andamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação consultem a quantidade atual de cada item doado, por categoria. |
| História de usuário | Como **voluntária de atendimento**, quero consultar a quantidade atual de cada item por categoria, para entregar só o que está disponível. |
| Origem | [CP2 · Registro de doações de itens](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE2, OE5 · atividade [A4 Distribuir itens](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário: consulta · Coordenação: consulta |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN02](regras.md#rn02)<br>**Depende de:** [RF09](#rf09)<br>**Necessário para:** [RF10](#rf10) |
| Critérios de aceitação | **CA-RF12-01**: Voluntário e Coordenação consultam o saldo por categoria (entradas menos saídas), na unidade correspondente.<br>**CA-RF12-02**: A consulta responde em até 3 segundos em pelo menos 95% das requisições em conexão móvel 3G/4G (RNF03).<br>*Evidência prevista:* teste do cálculo com movimentações fictícias e medição de tempo em 3G/4G. Validação: conferência dos saldos com a coordenação. |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio: 3 s em 3G (RNF03) · Posição **9** na ordem<br>**Valor (cliente):** Should have, critério: frequência ou abrangência de uso. «É o ganho mais visível para a voluntária ("temos arroz para as sacolas desta semana?"). Mas nas primeiras semanas o saldo do sistema ainda não bate com o estoque físico, então dá para operar um tempo sem ele. Vira Must quando os dados acumularem. Como é uma consulta simples, deve cair em "Forte candidato ao MVP" na matriz.»<br>**Esforço (equipe):** esforço 1 · complexidade 2 · lacuna 2 → consolidado 1,7. A consulta precisa calcular o saldo por categoria, considerando as entradas e saídas registradas.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. Pode antecipar se sobrar tempo. |
| Entrega | MVP: **complemento** (Fatia 2), fora do MVP, mas antecipado na Sprint 6, onde já estava em andamento; a leitura do quadrante permite antecipar, e o cálculo de saldo é usado pelo RF10 · Release **R3** · Sprint **6** · Iceberg: Topo |
| Situação | Em andamento (a confirmar) |
| Evolução | 17/10/2026 · O replanejamento moveu este RF para a Fatia 2; a validação de 28/09 o mantinha no MVP. Resolvido pela nova matriz (29/10/2026). ([MUD-002](../14-historico/index.md#mud-002))<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3; esforço 3 → 2; MVP: sim → complemento. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): release R1 → R3. ([MUD-018](../14-historico/index.md#mud-018))<br>31/10/2026 · A R1 passa a incluir o cálculo de saldo do RF12 no back-end, de que o RF10 depende. ([MUD-019](../14-historico/index.md#mud-019)) |

</details>

<details class="ficha" id="rf13" data-cp="cp2" data-release="trilha-cp1" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2" data-ordem="32" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">32º</span> <span class="ficha__id">RF13</span> <span class="ficha__nome">Publicar lista de itens necessários</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">Trilha CP1</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação inclua e remova manualmente, na área pública, os itens de que a associação precisa no momento, com a categoria e, se quiser, a quantidade desejada. |
| História de usuário | Como **coordenadora**, quero incluir e remover na área pública os itens de que a associação precisa, para orientar os apoiadores sobre o que doar. |
| Origem | [CP2 · Registro de doações de itens](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE2, OE5 · atividade [C3 Saber o que doar](../12-mapa/index.md#jornada-c) |
| Agentes | Coordenação: publica |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN03](regras.md#rn03)<br>**Depende de:** [RF01](#rf01), [RF11](#rf11)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: — · Posição **32** na ordem<br>**Valor (cliente):** Should have, critério: impacto para os usuários. «Direciona o doador e reduz o recebimento do que a associação não precisa. Hoje isso é feito por post no Instagram, que funciona. Depende da área pública (CP1); por isso não é Must.»<br>**Esforço (equipe):** esforço 2 · complexidade 1 · lacuna 2 → consolidado 1,7. Cadastro e remoção simples de itens, com exibição na área pública. A lista é atualizada manualmente.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **Trilha CP1** · Sprint **8** · Iceberg: Meio |
| Situação | Não iniciada |
| Evolução | 27/10/2026 · Ordem ajustada: RF01 antes do RF13. ([MUD-006](../14-historico/index.md#mud-006))<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3; esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015)) |

</details>


## CP3 · Cadastro de famílias e participantes {#cp3}

Gestão dos dados das famílias e participantes atendidos. **Valor de negócio (VN3):** Centralização dos dados atualmente mantidos de forma isolada. Objetivos: OE3, OE6. 6 requisitos.

<details class="ficha" id="rf14" data-cp="cp3" data-release="r1" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="2" data-ordem="10" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">10º</span> <span class="ficha__id">RF14</span> <span class="ficha__nome">Cadastrar família</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R1</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação cadastrem uma família atendida com nome do responsável familiar*, telefone*, endereço* (logradouro, complemento e cidade), número de moradores e observações. O sistema registra a data do cadastro e a situação "ativa". |
| História de usuário | Como **voluntária de atendimento**, quero cadastrar uma família com nome do responsável, telefone e endereço, para poder destinar doações e inscrever seus membros. |
| Origem | [CP3 · Cadastro de famílias e participantes](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3, OE6 · atividade [A3 Acolher a família](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário: cadastra · Coordenação: cadastra |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), [RNF13](rnf.md#rnf13), [RNF16](rnf.md#rnf16), [RNF19](rnf.md#rnf19), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN04](regras.md#rn04), [RN19](regras.md#rn19)<br>**Depende de:** [RF42](#rf42)<br>**Necessário para:** [RF10](#rf10), [RF15](#rf15), [RF18](#rf18), [RF36](#rf36) |
| Critérios de aceitação | **CA-RF14-01:** Voluntário e Coordenação conseguem cadastrar uma família informando nome do responsável familiar, telefone e endereço, conforme a RN04. Número de moradores e observações são opcionais.<br>**CA-RF14-02 (exceção):** Se faltar nome do responsável, telefone ou endereço, o cadastro não é salvo e o sistema indica o campo obrigatório que falta. A ausência dos campos opcionais não impede o cadastro.<br>**CA-RF14-03:** O cadastro salvo registra automaticamente a data do cadastro e a situação "ativa", preservando os dados informados.<br>**CA-RF14-04:** No fluxo integrado com RF42, o cadastro com dados reais exige o consentimento correspondente previamente registrado, conforme a RN19. <br> Evidência prevista: testes de cadastro com campos obrigatórios preenchidos e ausentes, campos opcionais vazios, persistência dos dados, data e situação automática e integração com o consentimento do RF42. Validação: a coordenação cadastra uma família fictícia e confere os dados registrados.|
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio: dados pessoais · Posição **10** na ordem<br>**Valor (cliente):** Must have, critério: importância para resolver o problema central. «Substitui o cadastro isolado no computador da sede (OE3). O RF10 precisa da família para registrar a destinação, e o RF36 precisa dela para contar famílias atendidas.»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3. Formulário com mais campos e validações, além da integração com consentimento e controle de acesso.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R1** · Sprint **7** · Iceberg: Topo |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015))<br>05/11/2026 · Incluídos critérios de aceitação e evidências previstas nas fichas RF14, RF16, RF18, RF19, RF20, RF23, RF27, RF28, RF29, RF30 e RF31. ([MUD-033](../14-historico/index.md#mud-033)) |

</details>

<details class="ficha" id="rf15" data-cp="cp3" data-release="r3" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="3" data-ordem="25" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">25º</span> <span class="ficha__id">RF15</span> <span class="ficha__nome">Atualizar ou inativar cadastro de família</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R3</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação alterem os dados da família, e que a Coordenação a inative. A família inativa some das buscas padrão, mas o histórico de atendimento e os relatórios do período continuam. |
| História de usuário | a) Como **voluntária de atendimento**, quero atualizar os dados de uma família, para manter o contato em dia.<br>b) Como **coordenadora**, quero inativar uma família que deixou de ser atendida, para tirá-la das buscas sem perder o histórico de atendimento. |
| Origem | [CP3 · Cadastro de famílias e participantes](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3, OE6 · atividade [A5 Manter cadastros](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário: atualiza · Coordenação: atualiza e inativa |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), [RNF13](rnf.md#rnf13), [RNF19](rnf.md#rnf19), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN06](regras.md#rn06)<br>**Depende de:** [RF14](#rf14)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **3** · Risco: Baixo · Posição **25** na ordem<br>**Valor (cliente):** Should have, critério: obrigatoriedade legal, normativa ou institucional. «Telefone e endereço mudam com frequência em comunidades vulneráveis. A LGPD (art. 6º, V) exige dados exatos e atualizados. Sem este RF, o cadastro envelhece em meses, mas o sistema funciona nas primeiras semanas.»<br>**Esforço (equipe):** esforço 3 · complexidade 3 · lacuna 2 → consolidado 2,7. Precisa controlar quem pode inativar e retirar a família das buscas padrão, preservando o histórico e os relatórios.<br>**Leitura da matriz:** Avaliar contexto (valor 3 · esforço 3). Fatia 2. Mantém o cadastro atualizado, mas não é necessário no início do uso. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R3** · Sprint **8** · Iceberg: Meio |
| Situação | Não iniciada |
| Evolução | 27/10/2026 · Declaração dividida por ator (a e b). Revisão do professor, issue #26. ([MUD-005](../14-historico/index.md#mud-005))<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3. ([MUD-015](../14-historico/index.md#mud-015)) |

</details>

<details class="ficha" id="rf16" data-cp="cp3" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="2" data-ordem="12" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">12º</span> <span class="ficha__id">RF16</span> <span class="ficha__nome">Cadastrar participante</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação cadastrem uma pessoa atendida com nome completo*, data de nascimento*, telefone e observações. O sistema registra a data do cadastro e a situação "ativo". |
| História de usuário | Como **voluntária de atendimento**, quero cadastrar um participante com nome completo e data de nascimento, para registrar cada pessoa atendida. |
| Origem | [CP3 · Cadastro de famílias e participantes](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3, OE6 · atividade [A3 Acolher a família](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário: cadastra · Coordenação: cadastra |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), [RNF13](rnf.md#rnf13), [RNF16](rnf.md#rnf16), [RNF19](rnf.md#rnf19), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN05](regras.md#rn05), [RN19](regras.md#rn19)<br>**Depende de:** [RF42](#rf42)<br>**Necessário para:** [RF17](#rf17), [RF18](#rf18), [RF23](#rf23) |
| Critérios de aceitação | **CA-RF16-01:** Voluntário e Coordenação conseguem cadastrar um participante informando nome completo e data de nascimento, conforme a RN05. Telefone e observações são opcionais.<br>**CA-RF16-02 (exceção):** Se faltar nome completo ou data de nascimento, o cadastro não é salvo e o sistema indica o campo obrigatório que falta. A ausência dos campos opcionais não impede o cadastro.<br>**CA-RF16-03:** O cadastro salvo registra automaticamente a data do cadastro e a situação "ativo", preservando os dados informados.<br>**CA-RF16-04:** No fluxo integrado com RF42, o cadastro com dados reais exige o consentimento correspondente previamente registrado, conforme a RN19.<br> Evidência prevista: testes de cadastro com campos obrigatórios preenchidos e ausentes, campos opcionais vazios, persistência dos dados, data e situação automática e integração com o consentimento do RF42. Validação: a coordenação cadastra um participante fictício e confere os dados registrados. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio · Posição **12** na ordem<br>**Valor (cliente):** Must have, critério: dependência para viabilizar outras funcionalidades. «Inscrição (RF23) e chamada (RF27) precisam do participante. Sem ele, o CP4 e o CP5 inteiros não existem.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0. Formulário com poucos campos, que pode aproveitar a estrutura do cadastro de família. Precisa integrar o consentimento.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015))<br>05/11/2026 · Incluídos critérios de aceitação e evidências previstas nas fichas RF14, RF16, RF18, RF19, RF20, RF23, RF27, RF28, RF29, RF30 e RF31. ([MUD-033](../14-historico/index.md#mud-033)) |

</details>

<details class="ficha" id="rf17" data-cp="cp3" data-release="r3" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="3" data-ordem="26" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">26º</span> <span class="ficha__id">RF17</span> <span class="ficha__nome">Atualizar ou inativar cadastro de participante</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R3</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação alterem os dados do participante, e que a Coordenação o inative, mantendo o histórico. Ao inativar, as inscrições em turmas em andamento são canceladas com o motivo "desligamento da associação". |
| História de usuário | a) Como **voluntária de atendimento**, quero atualizar os dados de um participante, para manter o cadastro em dia.<br>b) Como **coordenadora**, quero inativar um participante, para liberar as vagas que ele ocupava e preservar o histórico. |
| Origem | [CP3 · Cadastro de famílias e participantes](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3, OE6 · atividade [A5 Manter cadastros](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário: atualiza · Coordenação: atualiza e inativa |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), [RNF13](rnf.md#rnf13), [RNF19](rnf.md#rnf19), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN06](regras.md#rn06), [RN07](regras.md#rn07)<br>**Depende de:** [RF16](#rf16), [RF24](#rf24)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **3** · Risco: Baixo · Posição **26** na ordem<br>**Valor (cliente):** Should have, critério: obrigatoriedade legal, normativa ou institucional. «Mesma lógica do RF15. Pesa um pouco mais porque, ao inativar, cancela as inscrições: sem ele, quem saiu da associação continua aparecendo na chamada como ausente.»<br>**Esforço (equipe):** esforço 3 · complexidade 3 · lacuna 3 → consolidado 3,0. Esforço maior, pois inativar o participante também cancela inscrições em andamento, mantendo o histórico e o motivo do cancelamento.<br>**Leitura da matriz:** Avaliar contexto (valor 3 · esforço 3). Fatia 2. Mantém o cadastro atualizado, mas não é necessário no início do uso. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R3** · Sprint **8** · Iceberg: Meio |
| Situação | Não iniciada |
| Evolução | 27/10/2026 · Declaração dividida por ator (a e b). Revisão do professor, issue #26. ([MUD-005](../14-historico/index.md#mud-005))<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3. ([MUD-015](../14-historico/index.md#mud-015)) |

</details>

<details class="ficha" id="rf18" data-cp="cp3" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="2" data-ordem="13" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">13º</span> <span class="ficha__id">RF18</span> <span class="ficha__nome">Vincular participante a família</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação associem o participante à sua família e indiquem o responsável legal. Para menor de 18 anos o responsável legal é obrigatório; a exceção (ex.: criança em acolhimento) exige motivo registrado. |
| História de usuário | Como **voluntária de atendimento**, quero vincular o participante à família e indicar o responsável legal, para saber quem responde por cada criança ou adolescente. |
| Origem | [CP3 · Cadastro de famílias e participantes](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3, OE6 · atividade [A3 Acolher a família](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário: vincula · Coordenação: vincula |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), [RNF13](rnf.md#rnf13), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN08](regras.md#rn08)<br>**Depende de:** [RF14](#rf14), [RF16](#rf16)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | **CA-RF18-01:** Voluntário e Coordenação conseguem associar um participante cadastrado a uma família cadastrada e indicar seu responsável legal.<br>**CA-RF18-02:** Para participante menor de 18 anos, o responsável legal é obrigatório, conforme a RN08, exceto quando houver motivo de exceção registrado.<br>**CA-RF18-03 (exceção):** Para participante menor de 18 anos, se não houver responsável legal nem motivo de exceção informado, o vínculo não é salvo e o sistema indica a informação necessária.<br>**CA-RF18-04:** O vínculo salvo preserva a associação entre participante e família, incluindo o responsável legal ou o motivo de exceção informado.<br>Evidência prevista: testes de vínculo entre participante e família, indicação de responsável legal, exceção com motivo e recusa para menor sem responsável nem justificativa. Validação: a coordenação realiza os vínculos com cadastros fictícios e confere as informações registradas. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Baixo · Posição **13** na ordem<br>**Valor (cliente):** Must have, critério: contribuição para os objetivos do projeto. «Mesma lógica do RF15. Pesa um pouco mais porque, ao inativar, cancela as inscrições: sem ele, quem saiu da associação continua aparecendo na chamada como ausente.» *(texto igual ao do RF17 na planilha: revisar)*<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0. Precisa relacionar participante e família, verificar a idade e exigir responsável legal para menores, tratando as exceções.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015))<br>05/11/2026 · Incluídos critérios de aceitação e evidências previstas nas fichas RF14, RF16, RF18, RF19, RF20, RF23, RF27, RF28, RF29, RF30 e RF31. ([MUD-033](../14-historico/index.md#mud-033)) |

</details>

<details class="ficha" id="rf19" data-cp="cp3" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="2" data-ordem="16" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">16º</span> <span class="ficha__id">RF19</span> <span class="ficha__nome">Consultar cadastro de participantes</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação busquem participantes cadastrados por nome, família e atividade em que estão inscritos. |
| História de usuário | Como **educadora voluntária**, quero buscar participantes por nome, família ou atividade, para encontrar o cadastro rapidamente durante o atendimento. |
| Origem | [CP3 · Cadastro de famílias e participantes](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3, OE6 · atividade [B2 Inscrever participantes](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário: consulta · Coordenação: consulta |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), [RNF07](rnf.md#rnf07), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF23](#rf23)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | **CA-RF19-01:** Voluntário e Coordenação conseguem buscar participantes cadastrados por nome, família ou atividade em que estão inscritos.<br>**CA-RF19-02:** Os resultados correspondem ao filtro utilizado. A busca por atividade considera as inscrições registradas pelo RF23 nas turmas do RF20.<br>**CA-RF19-03:** Quando nenhum participante corresponde à busca, o sistema informa que não foram encontrados resultados.<br>**CA-RF19-04:** A consulta aos dados respeita os perfis de acesso definidos, conforme o RNF07.<br>**CA-RF19-05:** A consulta apresenta resultados em até 3 segundos para pelo menos 95% das requisições em conexão móvel 3G/4G, conforme o RNF03.<br>Evidência prevista: testes de busca por nome, família e atividade, correspondência dos resultados, ausência de resultados e controle de acesso; medição do desempenho com registro do volume de dados e das condições de conexão. Validação: a coordenação busca participantes fictícios e confere os resultados apresentados. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Baixo · Posição **16** na ordem<br>**Valor (cliente):** Must have, critério: frequência ou abrangência de uso. «Toda inscrição e todo atendimento começam com uma busca. Sem ela, a voluntária cadastra a mesma pessoa de novo, e o sistema recria o problema que veio resolver: dados duplicados e desencontrados.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0. Consulta simples, mas com três filtros. Leva um tempo para juntar as tabelas.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | A refinar (texto pendente na ata de 28/09) |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015))<br>05/11/2026 · Incluídos critérios de aceitação e evidências previstas nas fichas RF14, RF16, RF18, RF19, RF20, RF23, RF27, RF28, RF29, RF30 e RF31. ([MUD-033](../14-historico/index.md#mud-033)) |

</details>


## CP4 · Inscrição em atividades e organização do atendimento {#cp4}

Gestão das inscrições e dos atendimentos nas atividades. **Valor de negócio (VN4):** Organização e rastreabilidade dos atendimentos realizados. Objetivos: OE3. 7 requisitos.

<details class="ficha" id="rf20" data-cp="cp4" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="1" data-ordem="14" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">14º</span> <span class="ficha__id">RF20</span> <span class="ficha__nome">Cadastrar turma de atividade</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação cadastre uma turma com atividade*, período (data de início e de término, com término depois do início), dias de encontro (dias da semana e horário) e quantidade de vagas. |
| História de usuário | Como **coordenadora**, quero cadastrar uma turma com atividade, período, dias de encontro e vagas, para organizar a oferta das oficinas. |
| Origem | [CP4 · Inscrição em atividades e organização do atendimento](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3 · atividade [B1 Montar turmas](../12-mapa/index.md#jornada-b) |
| Agentes | Coordenação: cadastra |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN09](regras.md#rn09)<br>**Depende de:** [RF40](#rf40)<br>**Necessário para:** [RF10](#rf10), [RF21](#rf21), [RF22](#rf22), [RF23](#rf23), [RF27](#rf27) |
| Critérios de aceitação | **CA-RF20-01:** A Coordenação consegue cadastrar uma turma informando atividade, período com datas de início e término, dias da semana, horário dos encontros e quantidade de vagas.<br>**CA-RF20-02 (exceção):** Se a data de término for igual ou anterior à data de início, o cadastro não é salvo e o sistema informa que o término deve ser posterior ao início, conforme a RN09.<br>**CA-RF20-03:** A turma salva preserva os dados informados e fica disponível para inscrição de participantes pelo RF23 e como destinatária de itens para uso interno pelo RF10.<br>**CA-RF20-04 (exceção):** Voluntário e Visitante não conseguem cadastrar turmas, inclusive por acesso direto à operação.<br>Evidência prevista: testes de cadastro pela Coordenação, recusa de período inválido, persistência dos dados, disponibilidade da turma para inscrição e destinação e recusa de cadastro por outros perfis. Validação: a coordenação cadastra uma turma fictícia e confere os dados registrados. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **1** · Risco: Baixo · Posição **14** na ordem<br>**Valor (cliente):** Must have, critério: dependência para viabilizar outras funcionalidades. «Inscrição, chamada e frequência acontecem dentro de uma turma. Sem turma, não há CP4 nem CP5.»<br>**Esforço (equipe):** esforço 2 · complexidade 1 · lacuna 1 → consolidado 1,3. Formulário simples, a equipe já domina a stack. Poucas regras para validar.<br>**Leitura da matriz:** Prioridade máxima (valor 4 · esforço 1). Entra no MVP. É base simples de que os outros fluxos dependem (categorias, turmas, frequência e usuários). |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | A refinar (texto pendente na ata de 28/09) |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 1. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · RF10: o destinatário da saída pode ser uma família ou uma turma. ([MUD-020](../14-historico/index.md#mud-020))<br>05/11/2026 · Incluídos critérios de aceitação e evidências previstas nas fichas RF14, RF16, RF18, RF19, RF20, RF23, RF27, RF28, RF29, RF30 e RF31. ([MUD-033](../14-historico/index.md#mud-033))<br>05/11/2026 · Dependência do RF27 alterada de RF26 para RF20 e RF23. ([MUD-034](../14-historico/index.md#mud-034)) |

</details>

<details class="ficha" id="rf21" data-cp="cp4" data-release="r3" data-sprint="8" data-mvp="nao" data-situacao="nao-iniciada" data-valor="2" data-esforco="3" data-ordem="35" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">35º</span> <span class="ficha__id">RF21</span> <span class="ficha__nome">Atualizar turma de atividade</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">R3</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação altere período, dias de encontro e vagas de uma turma em andamento. Se as novas vagas forem menos que os inscritos, o sistema recusa e informa o total de inscritos. Se aumentarem e houver lista de espera, o sistema avisa (RF25). |
| História de usuário | Como **coordenadora**, quero alterar período, dias de encontro e vagas de uma turma em andamento, para ajustar a oferta sem prejudicar quem já está inscrito. |
| Origem | [CP4 · Inscrição em atividades e organização do atendimento](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3 · atividade [B1 Montar turmas](../12-mapa/index.md#jornada-b) |
| Agentes | Coordenação: atualiza |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN09](regras.md#rn09), [RN10](regras.md#rn10), [RN14](regras.md#rn14)<br>**Depende de:** [RF20](#rf20)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **3** · Risco: Baixo · Posição **35** na ordem<br>**Valor (cliente):** Could have, critério: urgência. «As turmas têm período definido. Mudar dia ou vagas no meio do período é exceção, e dá para contornar encerrando e criando outra.»<br>**Esforço (equipe):** esforço 3 · complexidade 3 · lacuna 2 → consolidado 2,7. Esforço maior, pois precisa checar inscritos e lista de espera antes de salvar.<br>**Leitura da matriz:** Entrega futura (valor 2 · esforço 3). Depois do MVP. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **R3** · Sprint **8** · Iceberg: Meio |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 2; MVP: complemento → não. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): release R2 → R3; sprint 7 → 8. ([MUD-018](../14-historico/index.md#mud-018)) |

</details>

<details class="ficha" id="rf22" data-cp="cp4" data-release="r3" data-sprint="8" data-mvp="nao" data-situacao="nao-iniciada" data-valor="2" data-esforco="1" data-ordem="36" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">36º</span> <span class="ficha__id">RF22</span> <span class="ficha__nome">Encerrar turma de atividade</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">R3</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação encerre uma turma, registrando a data. O encerramento antes do fim do período exige o motivo. |
| História de usuário | Como **coordenadora**, quero encerrar uma turma registrando a data, para manter o histórico das turmas realizadas. |
| Origem | [CP4 · Inscrição em atividades e organização do atendimento](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3 · atividade [B1 Montar turmas](../12-mapa/index.md#jornada-b) |
| Agentes | Coordenação: encerra |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN11](regras.md#rn11)<br>**Depende de:** [RF20](#rf20)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **1** · Risco: Baixo · Posição **36** na ordem<br>**Valor (cliente):** Could have, critério: importância para resolver o problema central. «A turma termina naturalmente na data de término cadastrada. O encerramento antecipado (com motivo) é raro no primeiro semestre de uso.»<br>**Esforço (equipe):** esforço 2 · complexidade 1 · lacuna 1 → consolidado 1,3. Fácil de fazer: só registra a data e pede o motivo se for antes do fim.<br>**Leitura da matriz:** Avaliar oportunidade (valor 2 · esforço 1). Pode entrar como ganho rápido, se sobrar tempo. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **R3** · Sprint **8** · Iceberg: Meio |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 2; esforço 3 → 1; MVP: complemento → não. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): release R2 → R3; sprint 7 → 8. ([MUD-018](../14-historico/index.md#mud-018)) |

</details>

<details class="ficha" id="rf23" data-cp="cp4" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="2" data-ordem="15" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">15º</span> <span class="ficha__id">RF23</span> <span class="ficha__nome">Inscrever participante em turma</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação inscrevam um participante ativo em uma turma com vaga. Sem vaga, o sistema recusa a inscrição e informa que a turma está cheia. O encaminhamento à lista de espera estará disponível a partir do RF25 (fora do MVP). |
| História de usuário | Como **educadora voluntária**, quero inscrever um participante ativo em uma turma com vaga, para saber quem frequenta cada atividade. Quando a turma estiver cheia, quero ser informada para poder registrar o participante na lista de espera assim que o RF25 estiver disponível. |
| Origem | [CP4 · Inscrição em atividades e organização do atendimento](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3 · atividade [B2 Inscrever participantes](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário: inscreve · Coordenação: inscreve |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN12](regras.md#rn12)<br>**Depende de:** [RF16](#rf16), [RF20](#rf20)<br>**Necessário para:** [RF19](#rf19), [RF24](#rf24), [RF25](#rf25), [RF26](#rf26), [RF27](#rf27) |
| Critérios de aceitação | **CA-RF23-01:** Voluntário e Coordenação conseguem inscrever um participante ativo em uma turma com vaga disponível, conforme a RN12.<br>**CA-RF23-02 (exceção):** Se o participante estiver inativo, a inscrição não é salva e o sistema informa o motivo da recusa.<br>**CA-RF23-03 (exceção):** Se a turma não tiver vaga disponível, a inscrição não é salva e o sistema informa que a turma está cheia. Esse comportamento não depende da implementação da lista de espera do RF25.<br>**CA-RF23-04:** A inscrição salva vincula o participante à turma, passa a contar na ocupação das vagas e é considerada na lista de participantes da chamada do RF27.<br>Evidência prevista: testes de inscrição com participante ativo e inativo, turma com e sem vaga, persistência do vínculo, ocupação das vagas e inclusão do inscrito na chamada. Validação: a coordenação realiza inscrições com cadastros fictícios e confere as confirmações e recusas apresentadas. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio · Posição **15** na ordem<br>**Valor (cliente):** Must have, critério: dependência para viabilizar outras funcionalidades. «Substitui as inscrições soltas em WhatsApp e papel (OE3). A chamada (RF27) lista exatamente os inscritos; sem inscrição, não há chamada.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0. Não é difícil, mas precisa checar vaga e situação do participante antes de inscrever.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · Declaração ajustada: sem vaga, a inscrição é recusada e a turma aparece como cheia. O encaminhamento à lista de espera fica para o RF25, fora do MVP. ([MUD-021](../14-historico/index.md#mud-021))<br>05/11/2026 · Incluídos critérios de aceitação e evidências previstas nas fichas RF14, RF16, RF18, RF19, RF20, RF23, RF27, RF28, RF29, RF30 e RF31. ([MUD-033](../14-historico/index.md#mud-033))<br>05/11/2026 · Dependência do RF27 alterada de RF26 para RF20 e RF23. ([MUD-034](../14-historico/index.md#mud-034)) |

</details>

<details class="ficha" id="rf24" data-cp="cp4" data-release="r3" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2" data-ordem="22" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">22º</span> <span class="ficha__id">RF24</span> <span class="ficha__nome">Cancelar inscrição de participante</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R3</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação cancelem uma inscrição, com motivo obrigatório escolhido em lista: desistência, mudança de endereço, conflito de horário, desligamento da associação ou outro (texto livre obrigatório só nesse caso). |
| História de usuário | Como **educadora voluntária**, quero cancelar uma inscrição informando o motivo, para liberar a vaga e saber por que o participante saiu. |
| Origem | [CP4 · Inscrição em atividades e organização do atendimento](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3 · atividade [B2 Inscrever participantes](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário: cancela · Coordenação: cancela |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN07](regras.md#rn07), [RN13](regras.md#rn13)<br>**Depende de:** [RF23](#rf23)<br>**Necessário para:** [RF17](#rf17) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Baixo · Posição **22** na ordem<br>**Valor (cliente):** Should have, critério: impacto para os usuários. «Substitui as inscrições soltas em WhatsApp e papel (OE3). A chamada (RF27) lista exatamente os inscritos; sem inscrição, não há chamada.» *(texto igual ao do RF23 na planilha: revisar)*<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 1 → consolidado 1,7. Formulário com lista de motivos, a equipe já domina. Só precisa liberar a vaga.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R3** · Sprint **8** · Iceberg: Meio |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3; esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015)) |

</details>

<details class="ficha" id="rf25" data-cp="cp4" data-release="r3" data-sprint="8" data-mvp="complemento" data-situacao="a-refinar" data-valor="3" data-esforco="2" data-ordem="23" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">23º</span> <span class="ficha__id">RF25</span> <span class="ficha__nome">Registrar participante em lista de espera</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R3</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação registrem o participante em lista de espera quando a turma não tiver vaga. A ordem é a de registro. Quando abrir vaga, o sistema avisa a Coordenação, que confirma a inscrição manualmente (RF23). |
| História de usuário | Como **educadora voluntária**, quero registrar o participante na lista de espera de uma turma cheia, para que ele seja chamado na ordem quando abrir vaga. |
| Origem | [CP4 · Inscrição em atividades e organização do atendimento](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3 · atividade [B2 Inscrever participantes](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário: registra · Coordenação: registra |
| Condições | **RNFs:** nenhum específico, mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN12](regras.md#rn12), [RN14](regras.md#rn14)<br>**Depende de:** [RF23](#rf23)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Baixo · Posição **23** na ordem<br>**Valor (cliente):** Should have, critério: frequência ou abrangência de uso. «Sem lista de espera, quem fica de fora é anotado em papel ou no WhatsApp, fora do sistema. A ordem de chegada se perde e a escolha de quem entra quando abre vaga pode parecer injusta para as famílias. Não chega a 4 porque o RF23 já bloqueia a 21ª inscrição: a turma funciona sem a fila. Também ajuda a medir a demanda reprimida, um bom argumento para pedir mais apoio (OE5).»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3. Esforço maior, pois precisa manter a ordem da fila e avisar a Coordenação quando abre vaga.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R3** · Sprint **8** · Iceberg: Meio |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): release R2 → R3; sprint 7 → 8. ([MUD-018](../14-historico/index.md#mud-018))<br>31/10/2026 · RF23 e RF26 sem lista de espera no MVP: sem vaga, a inscrição é recusada. ([MUD-021](../14-historico/index.md#mud-021)) |

</details>

<details class="ficha" id="rf26" data-cp="cp4" data-release="r3" data-sprint="8" data-mvp="complemento" data-situacao="a-refinar" data-valor="3" data-esforco="2" data-ordem="24" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">24º</span> <span class="ficha__id">RF26</span> <span class="ficha__nome">Consultar inscritos da turma</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R3</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação consultem os inscritos de cada turma. A exibição da lista de espera, na ordem de registro, estará disponível a partir do RF25 (fora do MVP). |
| História de usuário | Como **educadora voluntária**, quero consultar os inscritos de cada turma, para saber quem participa. Quando o RF25 estiver disponível, quero ver também a lista de espera na ordem de registro. |
| Origem | [CP4 · Inscrição em atividades e organização do atendimento](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE3 · atividade [B2 Inscrever participantes](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário: consulta · Coordenação: consulta |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), [RNF07](rnf.md#rnf07), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN14](regras.md#rn14)<br>**Depende de:** [RF23](#rf23) *(a exibição da lista de espera dependerá do RF25, fora do MVP)*<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Baixo · Posição **24** na ordem<br>**Valor (cliente):** Should have, critério: frequência ou abrangência de uso. «Útil para preparar material (quantos kits de crochê?). No dia do encontro, a própria chamada (RF27) já mostra os inscritos, então não é indispensável. Barato; deve cair em "Forte candidato ao MVP".»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 1 → consolidado 1,7. A parte da listagem é fácil, mas precisa mostrar também a lista de espera.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. Pode antecipar se sobrar tempo. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R3** · Sprint **8** · Iceberg: Meio |
| Situação | A refinar |
| Evolução | 17/10/2026 · O replanejamento moveu este RF para a Fatia 2; a validação de 28/09 o mantinha no MVP. Resolvido pela nova matriz (29/10/2026). ([MUD-002](../14-historico/index.md#mud-002))<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3; esforço 3 → 2; MVP: sim → complemento. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): release R2 → R3; sprint 7 → 8. ([MUD-018](../14-historico/index.md#mud-018))<br>31/10/2026 · Declaração ajustada: no MVP, o RF26 exibe apenas inscritos confirmados. A lista de espera fica para quando o RF25 for implementado; dependência atualizada. ([MUD-021](../14-historico/index.md#mud-021))<br>05/11/2026 · Dependência do RF27 alterada de RF26 para RF20 e RF23. ([MUD-034](../14-historico/index.md#mud-034)) |

</details>


## CP5 · Chamada digital e controle de frequência {#cp5}

Gestão da frequência dos participantes nas atividades. **Valor de negócio (VN5):** Redução da conferência manual de presença e apoio à aplicação da regra de faltas. Objetivos: OE4, OE5. 6 requisitos.

<details class="ficha" id="rf27" data-cp="cp5" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="2" data-ordem="17" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">17º</span> <span class="ficha__id">RF27</span> <span class="ficha__nome">Abrir chamada do encontro</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação abram a chamada de um encontro de turma, na data do encontro, listando os participantes inscritos. |
| História de usuário | Como **educadora voluntária**, quero abrir a chamada do encontro com a lista de inscritos, para registrar a presença no próprio dia, sem papel. |
| Origem | [CP5 · Chamada digital e controle de frequência](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE4, OE5 · atividade [B3 Fazer a chamada](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário: abre · Coordenação: abre |
| Condições | **RNFs:** [RNF01](rnf.md#rnf01), [RNF10](rnf.md#rnf10), [RNF16](rnf.md#rnf16), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN15](regras.md#rn15)<br>**Depende de:** [RF20](#rf20), [RF23](#rf23)<br>**Necessário para:** [RF28](#rf28) |
| Critérios de aceitação | **CA-RF27-01:** Voluntário e Coordenação conseguem abrir a chamada de um encontro de turma na data desse encontro, conforme a RN15.<br>**CA-RF27-02:** A chamada lista somente os participantes inscritos na turma pelo RF23, sem depender da tela de consulta de inscritos do RF26.<br>**CA-RF27-03 (exceção):** Se a tentativa de abertura ocorrer fora da data do encontro, a chamada não é aberta e o sistema informa o motivo da recusa.<br>**CA-RF27-04:** A chamada aberta fica disponível para o registro da frequência dos participantes pelo RF28.<br>Evidência prevista: testes de abertura na data do encontro e recusa fora dela, correspondência da lista com as inscrições da turma e integração com o RF28. Validação: uma educadora voluntária abre a chamada de um encontro fictício pelo celular e confere os participantes apresentados. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Alto: uso no celular (RNF10) · Posição **17** na ordem<br>**Valor (cliente):** Must have, critério: importância para resolver o problema central. «Substitui a lista de presença em papel e acaba com a conferência manual pela coordenação (dor citada na seção 2). É o núcleo do OE4.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0. Simples de fazer e essencial pro MVP. Pode ser implementado junto da RF28.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015))<br>05/11/2026 · Incluídos critérios de aceitação e evidências previstas nas fichas RF14, RF16, RF18, RF19, RF20, RF23, RF27, RF28, RF29, RF30 e RF31. ([MUD-033](../14-historico/index.md#mud-033))<br>05/11/2026 · Dependência do RF27 alterada de RF26 para RF20 e RF23. ([MUD-034](../14-historico/index.md#mud-034)) |

</details>

<details class="ficha" id="rf28" data-cp="cp5" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="a-refinar" data-valor="4" data-esforco="1" data-ordem="18" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">18º</span> <span class="ficha__id">RF28</span> <span class="ficha__nome">Registrar frequência do participante</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-a-refinar">A refinar</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação registrem, para cada participante listado em uma chamada aberta, se esteve presente ou ausente. |
| História de usuário | Como **educadora voluntária**, quero marcar cada participante como presente ou ausente, para acabar com a conferência manual da presença. |
| Origem | [CP5 · Chamada digital e controle de frequência](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE4, OE5 · atividade [B3 Fazer a chamada](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário: registra · Coordenação: registra |
| Condições | **RNFs:** [RNF01](rnf.md#rnf01), [RNF10](rnf.md#rnf10), [RNF16](rnf.md#rnf16), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN15](regras.md#rn15)<br>**Depende de:** [RF27](#rf27)<br>**Necessário para:** [RF29](#rf29), [RF30](#rf30), [RF31](#rf31), [RF35](#rf35) |
| Critérios de aceitação | **CA-RF28-01:** Voluntário e Coordenação conseguem marcar como presente ou ausente cada participante listado em uma chamada aberta pelo RF27.<br>**CA-RF28-02:** As marcações salvas ficam associadas ao participante e ao encontro correspondentes, preservando a situação registrada.<br>**CA-RF28-03 (exceção):** Não é possível registrar frequência nessa chamada para um participante que não consta em sua lista, inclusive por acesso direto à operação.<br>**CA-RF28-04:** A conclusão da chamada pode ser realizada em até três passos a partir da tela inicial da área restrita, sem apoio de terceiros, conforme a definição de passo do RNF01.<br>Evidência prevista: testes de registro de presença e ausência, persistência por participante e encontro e recusa de registro para participante fora da lista; verificação dos RNF10 e RNF16 nas condições definidas para os testes. Validação: uma educadora voluntária registra a frequência de uma turma fictícia pelo celular, sem ajuda da equipe, com contagem dos passos conforme o RNF01. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **1** · Risco: Médio · Posição **18** na ordem<br>**Valor (cliente):** Must have, critério: importância para resolver o problema central. «Inseparável do RF27: abrir a chamada sem marcar presença não substitui o papel. Precisa ser rápido no celular (RNF01).»<br>**Esforço (equipe):** esforço 1 · complexidade 1 · lacuna 1 → consolidado 1,0. Simples de fazer e essencial pro mvp.<br>**Leitura da matriz:** Prioridade máxima (valor 4 · esforço 1). Entra no MVP. É base simples de que os outros fluxos dependem (categorias, turmas, frequência e usuários). |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | A refinar |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 1. ([MUD-015](../14-historico/index.md#mud-015))<br>05/11/2026 · Incluídos critérios de aceitação e evidências previstas nas fichas RF14, RF16, RF18, RF19, RF20, RF23, RF27, RF28, RF29, RF30 e RF31. ([MUD-033](../14-historico/index.md#mud-033)) |

</details>

<details class="ficha" id="rf29" data-cp="cp5" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="nao-iniciada" data-valor="3" data-esforco="1" data-ordem="19" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">19º</span> <span class="ficha__id">RF29</span> <span class="ficha__nome">Justificar falta</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação informem o motivo de uma falta já registrada, que passa a constar como falta justificada. |
| História de usuário | Como **educadora voluntária**, quero informar o motivo de uma falta, para que a falta justificada não conte para o limite de faltas. |
| Origem | [CP5 · Chamada digital e controle de frequência](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE4, OE5 · atividade [B4 Ajustar a chamada](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário: justifica · Coordenação: justifica |
| Condições | **RNFs:** [RNF01](rnf.md#rnf01), [RNF16](rnf.md#rnf16), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN16](regras.md#rn16)<br>**Depende de:** [RF28](#rf28)<br>**Necessário para:** [RF32](#rf32) |
| Critérios de aceitação | **CA-RF29-01:** Voluntário e Coordenação conseguem informar o motivo de uma falta já registrada pelo RF28.<br>**CA-RF29-02:** O motivo informado é persistido e a falta passa a constar como justificada, conforme a RN16, sem ser convertida em presença.<br>**CA-RF29-03 (exceção):** Se nenhum motivo for informado, a justificativa não é salva, a falta mantém sua situação anterior e o sistema indica o preenchimento necessário.<br>**CA-RF29-04:** A consulta de frequência do RF31 identifica a falta como justificada. Conforme a RN16, ela não conta para o limite de faltas não justificadas; a integração com a sinalização automática será verificada quando o RF32 for entregue.<br>Evidência prevista: testes de justificativa com e sem motivo, persistência e identificação da falta justificada na consulta do RF31, além da verificação do RNF16 nas condições definidas para os testes. Validação: uma educadora voluntária justifica uma falta fictícia e confere o resultado no histórico. |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **1** · Risco: Baixo · Posição **19** na ordem<br>**Valor (cliente):** Should have, critério: contribuição para os objetivos do projeto. «3 faltas seguidas geram só um alerta, sem perda de vaga. Justificar a falta evita alertas indevidos (ex.: criança doente na semana) e deixa a frequência correta para os relatórios. Fica em 3 enquanto a falta não tiver consequência.»<br>**Esforço (equipe):** esforço 1 · complexidade 1 · lacuna 1 → consolidado 1,0. Pode ser implementado junto da RF28.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 3 · esforço 1). Entra no MVP. É barato porque aproveita a mesma tela da chamada (RF27/RF28). |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | Não iniciada |
| Evolução | 17/10/2026 · O replanejamento incluiu este RF no MVP (R2). Resolvido pela nova matriz (29/10/2026). ([MUD-002](../14-historico/index.md#mud-002))<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3; esforço 3 → 1; MVP: complemento → sim. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 8 → 7. ([MUD-018](../14-historico/index.md#mud-018))<br>05/11/2026 · Incluídos critérios de aceitação e evidências previstas nas fichas RF14, RF16, RF18, RF19, RF20, RF23, RF27, RF28, RF29, RF30 e RF31. ([MUD-033](../14-historico/index.md#mud-033)) |

</details>

<details class="ficha" id="rf30" data-cp="cp5" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="nao-iniciada" data-valor="3" data-esforco="1" data-ordem="20" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">20º</span> <span class="ficha__id">RF30</span> <span class="ficha__nome">Corrigir registro de frequência</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir a correção de um registro de frequência já concluído, conforme as permissões de cada perfil (ver RN17). O registro anterior é sempre preservado. |
| História de usuário | a) Como **educadora voluntária**, quero corrigir a chamada que eu fiz até o fim do mesmo dia, para consertar um erro de marcação.<br>b) Como **coordenadora**, quero corrigir qualquer registro de frequência informando o motivo, para resolver erros depois do dia sem perder o registro anterior. |
| Origem | [CP5 · Chamada digital e controle de frequência](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE4, OE5 · atividade [B4 Ajustar a chamada](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário: corrige a chamada que fez, até o fim do dia ([RN17](regras.md#rn17)) · Coordenação: corrige qualquer uma, com motivo ([RN17](regras.md#rn17)) |
| Condições | **RNFs:** [RNF19](rnf.md#rnf19), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN17](regras.md#rn17)<br>**Depende de:** [RF28](#rf28)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | **CA-RF30-01:** O Voluntário consegue corrigir um registro da chamada que ele próprio realizou até o fim do mesmo dia, conforme a RN17.<br>**CA-RF30-02 (exceção):** O Voluntário não consegue corrigir registros de chamadas realizadas por outro usuário nem realizar correções após o prazo permitido, inclusive por acesso direto à operação. O sistema informa a recusa e preserva o registro.<br>**CA-RF30-03:** A Coordenação consegue corrigir qualquer registro de frequência, em qualquer data, informando o motivo, conforme a RN17.<br>**CA-RF30-04 (exceção):** Se a Coordenação não informar o motivo, a correção não é salva e o sistema indica o preenchimento necessário.<br>**CA-RF30-05:** A correção preserva o registro anterior e registra autor, data, hora, valor anterior e valor novo, conforme a RN17 e o RNF19. A verificação desse registro não depende da tela de consulta do RF44.<br>Evidência prevista: testes de correção por autor e por outro usuário, dentro e fora do prazo, correção pela Coordenação com e sem motivo e inspeção do histórico de alterações. Validação: a coordenação e uma educadora voluntária realizam correções em registros fictícios e conferem as permissões e os resultados. |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **1** · Risco: Médio · Posição **20** na ordem<br>**Valor (cliente):** Should have, critério: impacto para os usuários. «Erro de toque no celular é comum. Sem correção, a voluntária fica com um registro errado sem saída, e a confiança no sistema cai. A regra de preservar o registro anterior protege a coordenação em caso de contestação.»<br>**Esforço (equipe):** esforço 1 · complexidade 1 · lacuna 1 → consolidado 1,0. Pode ser implementado junto da RF28.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 3 · esforço 1). Entra no MVP. É barato porque aproveita a mesma tela da chamada (RF27/RF28). |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | Não iniciada |
| Evolução | 17/10/2026 · O replanejamento incluiu este RF no MVP (R2). Resolvido pela nova matriz (29/10/2026). ([MUD-002](../14-historico/index.md#mud-002))<br>27/10/2026 · Declaração dividida por ator (a e b). Revisão do professor, issue #26. ([MUD-005](../14-historico/index.md#mud-005))<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3; esforço 3 → 1; MVP: complemento → sim. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 8 → 7. ([MUD-018](../14-historico/index.md#mud-018))<br>31/10/2026 · Declaração passa a remeter às permissões da [RN17](regras.md#rn17), sem repetir a regra. ([MUD-022](../14-historico/index.md#mud-022))<br>05/11/2026 · Incluídos critérios de aceitação e evidências previstas nas fichas RF14, RF16, RF18, RF19, RF20, RF23, RF27, RF28, RF29, RF30 e RF31. ([MUD-033](../14-historico/index.md#mud-033)) |

</details>

<details class="ficha" id="rf31" data-cp="cp5" data-release="r2" data-sprint="7" data-mvp="sim" data-situacao="nao-iniciada" data-valor="3" data-esforco="1" data-ordem="21" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">21º</span> <span class="ficha__id">RF31</span> <span class="ficha__nome">Consultar frequência do participante</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R2</span> <span class="chip">Sprint 7</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação consultem o histórico de presenças e faltas de um participante por turma e por período. |
| História de usuário | Como **educadora voluntária**, quero consultar o histórico de presenças e faltas de um participante por turma e período, para acompanhar a participação dele. |
| Origem | [CP5 · Chamada digital e controle de frequência](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE4, OE5 · atividade [B5 Acompanhar faltas](../12-mapa/index.md#jornada-b) |
| Agentes | Voluntário: consulta · Coordenação: consulta |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), [RNF07](rnf.md#rnf07), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF28](#rf28)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | **CA-RF31-01:** Voluntário e Coordenação conseguem consultar o histórico de presenças e faltas de um participante por turma e por período.<br>**CA-RF31-02:** Os resultados correspondem ao participante, à turma e ao período consultados, distinguindo presenças, faltas e faltas justificadas registradas pelo RF29.<br>**CA-RF31-03:** O histórico apresenta a situação vigente dos registros, considerando as correções realizadas pelo RF30.<br>**CA-RF31-04:** Quando não houver registros correspondentes à consulta, o sistema informa que não foram encontrados resultados.<br>**CA-RF31-05:** A consulta respeita os perfis de acesso definidos, conforme o RNF07, e apresenta resultados em até 3 segundos para pelo menos 95% das requisições em conexão móvel 3G/4G, conforme o RNF03.<br>Evidência prevista: testes de consulta por participante, turma e período, ausência de resultados, identificação de faltas justificadas, atualização após correções e controle de acesso; medição do desempenho com registro do volume de dados e das condições de conexão. Validação: a coordenação consulta o histórico de participantes fictícios e confere os resultados. |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **1** · Risco: Baixo · Posição **21** na ordem<br>**Valor (cliente):** Should have, critério: frequência ou abrangência de uso. «É a consulta que a coordenação usa quando precisa decidir sobre um participante faltoso. O valor cresce com o tempo: no primeiro mês há pouco histórico para consultar.»<br>**Esforço (equipe):** esforço 2 · complexidade 1 · lacuna 1 → consolidado 1,3. Esforço maior, pois é necessário criar uma nova aba ou painel com o perfil do participante.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 3 · esforço 1). Entra no MVP. É barato porque aproveita a mesma tela da chamada (RF27/RF28). |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R2** · Sprint **7** · Iceberg: Topo |
| Situação | Não iniciada |
| Evolução | 17/10/2026 · O replanejamento incluiu este RF no MVP (R2). Resolvido pela nova matriz (29/10/2026). ([MUD-002](../14-historico/index.md#mud-002))<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3; esforço 3 → 1; MVP: complemento → sim. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint 8 → 7. ([MUD-018](../14-historico/index.md#mud-018))<br>05/11/2026 · Incluídos critérios de aceitação e evidências previstas nas fichas RF14, RF16, RF18, RF19, RF20, RF23, RF27, RF28, RF29, RF30 e RF31. ([MUD-033](../14-historico/index.md#mud-033)) |

</details>

<details class="ficha" id="rf32" data-cp="cp5" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2" data-ordem="27" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">27º</span> <span class="ficha__id">RF32</span> <span class="ficha__nome">Sinalizar participante com faltas acima do limite</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R4</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que o sistema sinalize automaticamente o participante que atingir o limite de faltas não justificadas definido pela Coordenação. A sinalização aparece na seção "Participantes sinalizados" do painel (RF37), com nome, turma e telefone da família. |
| História de usuário | Como **coordenadora**, quero que o sistema sinalize quem atingiu o limite de faltas sem justificativa, para entrar em contato com a família a tempo. |
| Origem | [CP5 · Chamada digital e controle de frequência](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE4, OE5 · atividade [B5 Acompanhar faltas](../12-mapa/index.md#jornada-b) |
| Agentes | Sistema: sinaliza · Coordenação: consulta |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN16](regras.md#rn16), [RN18](regras.md#rn18)<br>**Depende de:** [RF29](#rf29)<br>**Necessário para:** [RF37](#rf37) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio · Posição **27** na ordem<br>**Valor (cliente):** Should have, critério: contribuição para os objetivos do projeto. «Hoje está com 2, mas é a automação literal da "regra de frequência já praticada" que o OE4 promete apoiar. Permite agir cedo, ligando para a família antes que a criança abandone a oficina. Depende do RF29 para não sinalizar quem justificou.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 1 → consolidado 1,7. A parte de sinalização é fácil, mas é preciso criar um painel com os participantes sinalizados.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R4** · Sprint **8** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 2 → 3; esforço 4 → 2; MVP: não → complemento. ([MUD-015](../14-historico/index.md#mud-015)) |

</details>


## CP6 · Relatórios e indicadores de impacto {#cp6}

Acompanhamento dos resultados e indicadores da associação. **Valor de negócio (VN6):** Apoio à prestação de contas e à captação de novos apoiadores. Objetivos: OE5. 6 requisitos.

<details class="ficha" id="rf33" data-cp="cp6" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2" data-ordem="28" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">28º</span> <span class="ficha__id">RF33</span> <span class="ficha__nome">Gerar relatório de doações recebidas</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R4</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação gere relatório dos itens recebidos por período, categoria e doador. |
| História de usuário | Como **coordenadora**, quero gerar o relatório dos itens recebidos por período, categoria e doador, para prestar contas aos apoiadores. |
| Origem | [CP6 · Relatórios e indicadores de impacto](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE5 · atividade [A6 Prestar contas](../12-mapa/index.md#jornada-a) |
| Agentes | Coordenação: gera |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF09](#rf09)<br>**Necessário para:** [RF37](#rf37), [RF38](#rf38) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Alto: esforço 4 · Posição **28** na ordem<br>**Valor (cliente):** Should have, critério: contribuição para os objetivos do projeto. «Substitui a soma manual do caderno na prestação de contas. Com o filtro por doador, permite mostrar a cada apoiador o que ele contribuiu, o que ajuda a captação.»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3. A parte do relatório não é difícil, mas leva mais tempo para implementar.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R4** · Sprint **8** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 2 → 3; esforço 4 → 2; MVP: não → complemento. ([MUD-015](../14-historico/index.md#mud-015)) |

</details>

<details class="ficha" id="rf34" data-cp="cp6" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2" data-ordem="29" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">29º</span> <span class="ficha__id">RF34</span> <span class="ficha__nome">Gerar relatório de doações distribuídas</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R4</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação gere relatório dos itens destinados por período, categoria e família atendida. |
| História de usuário | Como **coordenadora**, quero gerar o relatório dos itens destinados por período, categoria e família, para mostrar como as doações foram distribuídas. |
| Origem | [CP6 · Relatórios e indicadores de impacto](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE5 · atividade [A6 Prestar contas](../12-mapa/index.md#jornada-a) |
| Agentes | Coordenação: gera |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), [RNF07](rnf.md#rnf07), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF10](#rf10)<br>**Necessário para:** [RF37](#rf37) |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Alto: esforço 4 · Posição **29** na ordem<br>**Valor (cliente):** Should have, critério: contribuição para os objetivos do projeto. «É a outra metade da prestação de contas: prova que os itens chegaram às famílias. Para quem doa, é mais convincente que o relatório de entradas.»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3. A parte do relatório não é difícil, mas leva mais tempo para implementar.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R4** · Sprint **8** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 2 → 3; esforço 4 → 2; MVP: não → complemento. ([MUD-015](../14-historico/index.md#mud-015)) |

</details>

<details class="ficha" id="rf35" data-cp="cp6" data-release="r4" data-sprint="8" data-mvp="nao" data-situacao="nao-iniciada" data-valor="2" data-esforco="2" data-ordem="37" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">37º</span> <span class="ficha__id">RF35</span> <span class="ficha__nome">Gerar relatório de frequência por turma</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">R4</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação gere o relatório de presenças e faltas de uma turma por período, ou de um encontro específico. |
| História de usuário | Como **coordenadora**, quero gerar o relatório de presenças e faltas de uma turma por período ou encontro, para acompanhar a participação nas atividades. |
| Origem | [CP6 · Relatórios e indicadores de impacto](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE5 · atividade [B5 Acompanhar faltas](../12-mapa/index.md#jornada-b) |
| Agentes | Coordenação: gera |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), [RNF07](rnf.md#rnf07), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF28](#rf28)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio · Posição **37** na ordem<br>**Valor (cliente):** Could have, critério: frequência ou abrangência de uso. «O RF31 e a própria chamada já respondem "quem veio". Pode subir se algum parceiro ou edital de oficina exigir comprovação de frequência.»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3. A parte do relatório não é difícil, mas leva mais tempo para implementar.<br>**Leitura da matriz:** Entrega futura (valor 2 · esforço 2). Depois do MVP. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **R4** · Sprint **8** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 4 → 2. ([MUD-015](../14-historico/index.md#mud-015)) |

</details>

<details class="ficha" id="rf36" data-cp="cp6" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2" data-ordem="30" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">30º</span> <span class="ficha__id">RF36</span> <span class="ficha__nome">Gerar relatório de famílias atendidas</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R4</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação gere relatório das famílias com atendimento registrado no período consultado. |
| História de usuário | Como **coordenadora**, quero gerar o relatório das famílias atendidas no período, para demonstrar o alcance da associação. |
| Origem | [CP6 · Relatórios e indicadores de impacto](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE5 · atividade [A6 Prestar contas](../12-mapa/index.md#jornada-a) |
| Agentes | Coordenação: gera |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), [RNF07](rnf.md#rnf07), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF14](#rf14)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio · Posição **30** na ordem<br>**Valor (cliente):** Should have, critério: contribuição para os objetivos do projeto. «"Quantas famílias atendemos?" é o primeiro número que um apoiador ou edital pergunta. Hoje exige cruzar caderno, listas e o cadastro da sede.»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3. A parte do relatório não é difícil, mas leva mais tempo para implementar.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R4** · Sprint **8** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 2 → 3; esforço 4 → 2; MVP: não → complemento. ([MUD-015](../14-historico/index.md#mud-015)) |

</details>

<details class="ficha" id="rf37" data-cp="cp6" data-release="r4" data-sprint="8" data-mvp="nao" data-situacao="nao-iniciada" data-valor="2" data-esforco="2" data-ordem="38" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">38º</span> <span class="ficha__id">RF37</span> <span class="ficha__nome">Consultar painel de indicadores</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">R4</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação consulte os indicadores de atendimento da associação, como famílias atendidas, participantes ativos, itens recebidos e itens distribuídos no período, incluindo a seção de participantes sinalizados (RF32). |
| História de usuário | Como **coordenadora**, quero um painel com famílias atendidas, participantes ativos, itens recebidos e distribuídos e participantes sinalizados, para acompanhar o impacto em um só lugar. |
| Origem | [CP6 · Relatórios e indicadores de impacto](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE5 · atividade [A6 Prestar contas](../12-mapa/index.md#jornada-a) |
| Agentes | Coordenação: consulta |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN18](regras.md#rn18)<br>**Depende de:** [RF32](#rf32), [RF33](#rf33), [RF34](#rf34)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Alto: esforço 4 · Posição **38** na ordem<br>**Valor (cliente):** Could have, critério: impacto para os usuários. «Resume o que os relatórios já mostram. É conforto, não necessidade. Atenção: o RF32 exibe os sinalizados aqui, então, se o RF32 entrar antes, os sinalizados precisam de outro lugar provisório.»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3. Precisa juntar dados de doações, famílias e frequência, e incluir a seção de sinalizados (RF32). Leva tempo, mas a técnica é conhecida.<br>**Leitura da matriz:** Entrega futura (valor 2 · esforço 2). Depois do MVP. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **R4** · Sprint **8** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 4 → 2. ([MUD-015](../14-historico/index.md#mud-015)) |

</details>

<details class="ficha" id="rf38" data-cp="cp6" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2" data-ordem="31" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">31º</span> <span class="ficha__id">RF38</span> <span class="ficha__nome">Exportar relatório gerado</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R4</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação exporte um relatório gerado em PDF (envio a apoiadores e prestação de contas) ou CSV (planilha). |
| História de usuário | Como **coordenadora**, quero exportar um relatório em PDF ou CSV, para enviá-lo a apoiadores e usá-lo em planilhas. |
| Origem | [CP6 · Relatórios e indicadores de impacto](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE5 · atividade [A6 Prestar contas](../12-mapa/index.md#jornada-a) |
| Agentes | Coordenação: exporta |
| Condições | **RNFs:** [RNF03](rnf.md#rnf03), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF33](#rf33)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio · Posição **31** na ordem<br>**Valor (cliente):** Should have, critério: dependência para viabilizar outras funcionalidades. «Hoje está com 4, mas só exporta o que RF33 a RF37 geram. Sem ele, ainda dá para imprimir a tela pelo navegador. Ganha valor junto com os relatórios, porque o PDF é o formato que apoiadores recebem.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 1 → consolidado 1,7. Usa biblioteca pronta de PDF/CSV, e a equipe já domina. Só precisa integrar com os relatórios do CP6.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R4** · Sprint **8** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 27/10/2026 · Ordem ajustada: relatórios (RF33 a RF37) antes da exportação. ([MUD-006](../14-historico/index.md#mud-006))<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 4 → 3; esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015)) |

</details>


## CP7 · Perfis de acesso e proteção de dados {#cp7}

Controle de acesso e proteção dos dados tratados pela solução. **Valor de negócio (VN7):** Proteção dos dados das famílias atendidas e conformidade com a LGPD. Objetivos: OE6. 7 requisitos.

<details class="ficha" id="rf39" data-cp="cp7" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="1" data-ordem="3" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">3º</span> <span class="ficha__id">RF39</span> <span class="ficha__nome">Cadastrar usuário do sistema</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R1</span> <span class="chip">Sprint 6</span> <span class="chip chip--sit-em-andamento">Em andamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação cadastre Voluntários e outros membros da Coordenação. A primeira conta de Coordenação é criada pela equipe de desenvolvimento na implantação. |
| História de usuário | Como **coordenadora**, quero cadastrar voluntárias e outros membros da coordenação, para que só pessoas autorizadas usem a área restrita. |
| Origem | [CP7 · Perfis de acesso e proteção de dados](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE6 · atividade [A1 Dar acesso à equipe](../12-mapa/index.md#jornada-a) |
| Agentes | Coordenação: cadastra |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), [RNF15](rnf.md#rnf15), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN20](regras.md#rn20)<br>**Depende de:** [RF41](#rf41)<br>**Necessário para:** [RF40](#rf40) |
| Critérios de aceitação | **CA-RF39-01**: A primeira conta de Coordenação é criada pela equipe na implantação; as demais são criadas pela Coordenação (RN20).<br>**CA-RF39-02**: A Coordenação cadastra Voluntários e outros membros da Coordenação; o Voluntário não cria contas, inclusive por acesso direto.<br>**CA-RF39-03**: Senhas com menos de 8 caracteres são recusadas, e as credenciais são armazenadas de forma irreversível (RNF15 e RNF07).<br>**CA-RF39-04** *(proposta a validar)*: A Coordenação define uma nova senha temporária para um usuário cadastrado, com as mesmas exigências do RNF15; o Voluntário não redefine a senha de outras pessoas.<br>*Evidência prevista:* teste de cadastro, recusa para Voluntário, rejeição de senha curta e inspeção do armazenamento. Validação: a coordenação cadastra uma conta de teste. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **1** · Risco: Médio · Posição **3** na ordem<br>**Valor (cliente):** Must have, critério: obrigatoriedade legal, normativa ou institucional. «Cada voluntária precisa de conta própria. Um login compartilhado impede saber quem alterou um dado (RNF19) e quem acessou dados pessoais (RNF07).»<br>**Esforço (equipe):** esforço 2 · complexidade 1 · lacuna 1 → consolidado 1,3. Formulário simples, a equipe já domina o stack. A primeira conta de Coordenação é criada na implantação.<br>**Leitura da matriz:** Prioridade máxima (valor 4 · esforço 1). Entra no MVP. É base simples de que os outros fluxos dependem (categorias, turmas, frequência e usuários). |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R1** · Sprint **6** · Iceberg: Topo |
| Situação | Em andamento (a confirmar) |
| Evolução | 26/10/2026 · O Makio pediu que a Coordenação possa redefinir a senha de usuários ([ata de 26/10](../00-atas/index.md#ata-de-26102026)). Critério CA-RF39-04 proposto, a validar. ([MUD-003](../14-historico/index.md#mud-003))<br>29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 1. ([MUD-015](../14-historico/index.md#mud-015)) |

</details>

<details class="ficha" id="rf40" data-cp="cp7" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="2" data-ordem="4" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">4º</span> <span class="ficha__id">RF40</span> <span class="ficha__nome">Atribuir perfil de acesso ao usuário</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R1</span> <span class="chip">Sprint 6</span> <span class="chip chip--sit-em-andamento">Em andamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação atribua a cada usuário o perfil Voluntário ou Coordenação, conforme o campo *Agentes* de cada ficha. |
| História de usuário | Como **coordenadora**, quero atribuir a cada usuário o perfil Voluntário ou Coordenação, para que cada pessoa acesse apenas o que sua função permite. |
| Origem | [CP7 · Perfis de acesso e proteção de dados](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE6 · atividade [A1 Dar acesso à equipe](../12-mapa/index.md#jornada-a) |
| Agentes | Coordenação: atribui |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF39](#rf39)<br>**Necessário para:** [RF11](#rf11), [RF20](#rf20) |
| Critérios de aceitação | **CA-RF40-01**: A Coordenação atribui o perfil Voluntário ou Coordenação; o Voluntário não atribui perfis.<br>**CA-RF40-02**: Operações e dados respeitam o perfil e o campo *Agentes* de cada ficha; operações não autorizadas são recusadas, inclusive por acesso direto (RNF07).<br>*Evidência prevista:* teste dos dois perfis e das recusas. Validação: revisão das permissões com contas de teste. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Alto: permissões por perfil · Posição **4** na ordem<br>**Valor (cliente):** Must have, critério: obrigatoriedade legal, normativa ou institucional. «A voluntária da chamada não precisa ver o endereço de todas as famílias. Limitar o acesso ao necessário é exigência da LGPD (OE6). Com só dois perfis, pode ser um campo simples do RF39.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0. Só dois perfis, mas precisa aplicar o campo *Agentes* de cada ficha, inclusive a exceção do RF30. Depende do banco (média da equipe 2,2; Vitor marcou 4).<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R1** · Sprint **6** · Iceberg: Topo |
| Situação | Em andamento (a confirmar) |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015)) |

</details>

<details class="ficha" id="rf41" data-cp="cp7" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="2" data-ordem="2" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">2º</span> <span class="ficha__id">RF41</span> <span class="ficha__nome">Autenticar usuário</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R1</span> <span class="chip">Sprint 6</span> <span class="chip chip--sit-em-andamento">Em andamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação acessem a área restrita mediante autenticação do usuário cadastrado. |
| História de usuário | Como **voluntária de atendimento**, quero entrar na área restrita com meu usuário e senha, para usar as funções do meu perfil com segurança. |
| Origem | [CP7 · Perfis de acesso e proteção de dados](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE6 · atividade [A1 Dar acesso à equipe](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário: autentica · Coordenação: autentica |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), [RNF15](rnf.md#rnf15), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [T01](#t01)<br>**Necessário para:** [RF08](#rf08), [RF39](#rf39), [RF42](#rf42) |
| Critérios de aceitação | **CA-RF41-01**: Voluntário e Coordenação entram com credenciais válidas; credenciais incorretas não dão acesso.<br>**CA-RF41-02**: Funções restritas exigem autenticação, e as credenciais trafegam cifradas (RNF07).<br>**CA-RF41-03**: A sessão termina após 30 minutos sem atividade (RNF15).<br>**CA-RF41-04**: Após cinco tentativas incorretas seguidas, novas tentativas ficam bloqueadas por 15 minutos (RNF15).<br>*Evidência prevista:* testes de credenciais, acesso sem login, bloqueio, expiração e cifragem. Validação: entrada e acesso às funções do perfil com a coordenação. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Alto: segurança (RNF15) · Posição **2** na ordem<br>**Valor (cliente):** Must have, critério: dependência para viabilizar outras funcionalidades. «Todo RF da área restrita depende dele. Sem login, os perfis do RF40 não têm efeito. A seção 8.5 já reconhece isso para justificar a entrada no MVP; o certo é refletir isso no próprio valor.»<br>**Esforço (equipe):** esforço 3 · complexidade 3 · lacuna 1 → consolidado 2,3. Envolve sessão, expiração e bloqueio por tentativas (RNF15). Tem várias dependências, mas a equipe domina login e sessão.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R1** · Sprint **6** · Iceberg: Topo |
| Situação | Em andamento (a confirmar) |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 3 → 4; esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015)) |

</details>

<details class="ficha" id="rf42" data-cp="cp7" data-release="r1" data-sprint="6" data-mvp="sim" data-situacao="em-andamento" data-valor="4" data-esforco="2" data-ordem="5" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">5º</span> <span class="ficha__id">RF42</span> <span class="ficha__nome">Registrar consentimentos e autorizações (LGPD e Imagem)</span> <span class="ficha__chips"><span class="chip chip--mvp-sim">MVP: Sim</span> <span class="chip">R1</span> <span class="chip">Sprint 6</span> <span class="chip chip--sit-em-andamento">Em andamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação registrem, em um único fluxo, o consentimento do titular, ou do responsável legal, para cada finalidade de tratamento de dados pessoais (cadastro e atendimento, registro de frequência, contato com a família e relatórios a apoiadores) e a autorização ou recusa de uso de imagem em materiais de divulgação da associação, indicando os meios autorizados (site, redes sociais, materiais impressos) e a eventual revogação. Cada consentimento e autorização leva a data do registro. |
| História de usuário | Como **voluntária de atendimento**, quero registrar o consentimento do titular (ou responsável legal) para cada finalidade e a autorização de uso de imagem, para que nenhum dado da família seja usado sem permissão. |
| Origem | [CP7 · Perfis de acesso e proteção de dados](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE6 · atividade [A3 Acolher a família](../12-mapa/index.md#jornada-a) |
| Agentes | Voluntário: registra · Coordenação: registra |
| Condições | **RNFs:** [RNF13](rnf.md#rnf13), [RNF14](rnf.md#rnf14), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** [RN19](regras.md#rn19)<br>**Depende de:** [RF41](#rf41)<br>**Necessário para:** [RF14](#rf14), [RF16](#rf16), [RF43](#rf43), [RF45](#rf45) |
| Critérios de aceitação | **CA-RF42-01**: Voluntário e Coordenação registram separadamente, por titular ou responsável legal, os consentimentos para cadastro e atendimento, frequência, contato com a família e relatórios a apoiadores, com a data de cada um (RN19).<br>**CA-RF42-02**: No mesmo fluxo, a autorização ou recusa de uso de imagem é registrada à parte, com data e meios autorizados (site, redes sociais, materiais impressos).<br>**CA-RF42-03**: A revogação da autorização de imagem pode ser registrada.<br>**CA-RF42-04**: No fluxo com RF14 e RF16, dados reais só entram no sistema depois do consentimento (RN19).<br>*Evidência prevista:* testes por finalidade, de autorização e recusa de imagem, de revogação e de integração com o cadastro. Validação: revisão do fluxo com a coordenação, com dados fictícios. |
| Priorização | Valor **4** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Alto: LGPD · Posição **5** na ordem<br>**Valor (cliente):** Must have, critério: obrigatoriedade legal, normativa ou institucional. «A LGPD (art. 14) exige consentimento específico de um dos pais ou responsável para dados de crianças, e o projeto já decidiu que dados reais só entram depois do consentimento. Também cobre o uso de imagem (ECA, arts. 17 e 18).»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0. Fluxo único com 4 finalidades, 3 meios de imagem, revogação e data. As finalidades já foram validadas. LGPD não consta no domínio técnico, então a lacuna é estimada.<br>**Leitura da matriz:** Forte candidato ao MVP (valor 4 · esforço 2). Entra no MVP. Faz parte do fluxo mínimo de doação, cadastro, inscrição, chamada, acesso e consentimento. Na nova avaliação, o esforço caiu para 2: as finalidades de consentimento já estão validadas. |
| Entrega | MVP: **sim**, definido pela nova matriz (valor dado pela cliente na planilha v2) · Release **R1** · Sprint **6** · Iceberg: Topo |
| Situação | Em andamento (a confirmar) |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): valor 3 → 4; esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015)) |

</details>

<details class="ficha" id="rf43" data-cp="cp7" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2" data-ordem="33" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">33º</span> <span class="ficha__id">RF43</span> <span class="ficha__nome">Registrar e acompanhar solicitação de exclusão de dados</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R4</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação registre a solicitação do titular e acompanhe as etapas: recebida, em análise, atendida ou negada com justificativa. Cada etapa guarda a data, e a resposta guarda a data em que o titular foi avisado. |
| História de usuário | Como **coordenadora**, quero registrar e acompanhar as etapas de uma solicitação de exclusão de dados, para responder ao titular conforme a LGPD. |
| Origem | [CP7 · Perfis de acesso e proteção de dados](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE6 · atividade [D1 Responder ao titular](../12-mapa/index.md#jornada-d) |
| Agentes | Coordenação: registra e acompanha |
| Condições | **RNFs:** [RNF13](rnf.md#rnf13), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF42](#rf42)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio: LGPD · Posição **33** na ordem<br>**Valor (cliente):** Should have, critério: obrigatoriedade legal, normativa ou institucional. «O direito à eliminação é da LGPD (art. 18), e o prazo de 15 dias já foi validado. Mas pedidos devem ser raros, e no início podem ser atendidos por um procedimento fora do sistema. Precisa estar definido antes de usar dados reais.»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3. O RF só registra e acompanha as etapas (recebida, em análise, atendida ou negada) com datas e justificativa. O prazo de 15 dias já foi validado.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R4** · Sprint **8** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2; MVP: não → complemento. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint Fechamento → 8. ([MUD-018](../14-historico/index.md#mud-018))<br>Pendente · Prioridade do bloco de LGPD avançada aguarda a coordenação. |

</details>

<details class="ficha" id="rf44" data-cp="cp7" data-release="r4" data-sprint="fechamento" data-mvp="nao" data-situacao="nao-iniciada" data-valor="2" data-esforco="2" data-ordem="39" data-perfis="coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">39º</span> <span class="ficha__id">RF44</span> <span class="ficha__nome">Consultar histórico de alterações de cadastro</span> <span class="ficha__chips"><span class="chip chip--mvp-nao">MVP: Não</span> <span class="chip">R4</span> <span class="chip">Fechamento</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que a Coordenação consulte quem alterou dados pessoais ou registros de frequência, o que foi alterado e quando. |
| História de usuário | Como **coordenadora**, quero consultar quem alterou dados pessoais ou registros de frequência, o que mudou e quando, para ter controle sobre as alterações. |
| Origem | [CP7 · Perfis de acesso e proteção de dados](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE6 · atividade [D2 Auditar alterações](../12-mapa/index.md#jornada-d) |
| Agentes | Coordenação: consulta |
| Condições | **RNFs:** [RNF07](rnf.md#rnf07), [RNF19](rnf.md#rnf19), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** log do [RNF19](rnf.md#rnf19)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **2** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Médio · Posição **39** na ordem<br>**Valor (cliente):** Could have, critério: frequência ou abrangência de uso. «O registro das alterações é obrigatório pelo RNF19, mas isso é gravar no banco. A tela para consultar só é usada quando surge uma dúvida ou contestação, o que deve ser raro.»<br>**Esforço (equipe):** esforço 3 · complexidade 2 · lacuna 2 → consolidado 2,3. Tela de consulta sobre o log do RNF19 (autor, data, valor anterior e novo). Esforço 3 se o log for feito junto; 2 se já existir.<br>**Leitura da matriz:** Entrega futura (valor 2 · esforço 2). Depois do MVP. |
| Entrega | MVP: **não**, conforme a nova matriz (planilha v2) · Release **R4** · **Fechamento** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2. ([MUD-015](../14-historico/index.md#mud-015)) |

</details>

<details class="ficha" id="rf45" data-cp="cp7" data-release="r4" data-sprint="8" data-mvp="complemento" data-situacao="nao-iniciada" data-valor="3" data-esforco="2" data-ordem="34" data-perfis="voluntario coordenacao" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">34º</span> <span class="ficha__id">RF45</span> <span class="ficha__nome">Consultar autorização de uso de imagem vigente</span> <span class="ficha__chips"><span class="chip chip--mvp-complemento">MVP: Complemento</span> <span class="chip">R4</span> <span class="chip">Sprint 8</span> <span class="chip chip--sit-nao-iniciada">Não iniciada</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Declaração vigente | Permitir que Voluntário ou Coordenação consultem, por titular, a autorização em vigor para cada meio (site, redes sociais, material impresso) e se ela foi revogada, antes de divulgar a imagem. |
| História de usuário | Como **voluntária de atendimento**, quero consultar a autorização de imagem em vigor de uma pessoa para cada meio, para não divulgar uma imagem sem permissão. |
| Origem | [CP7 · Perfis de acesso e proteção de dados](../01-visao-produto/index.md#23-caracteristicas-de-produto) · objetivos OE6 · atividade [D1 Responder ao titular](../12-mapa/index.md#jornada-d) |
| Agentes | Voluntário: consulta · Coordenação: consulta |
| Condições | **RNFs:** [RNF14](rnf.md#rnf14), mais os [RNFs gerais](rnf.md#rnfs-gerais)<br>**Regras:** nenhuma específica<br>**Depende de:** [RF42](#rf42)<br>**Necessário para:** nenhum requisito |
| Critérios de aceitação | Ainda não escritos. São escritos antes da sprint do item, conforme a [DoR](../13-dor-dod/index.md#131-definition-of-ready-dor). |
| Priorização | Valor **3** (fonte: avaliação da cliente por requisito, planilha de priorização v2) · Esforço **2** · Risco: Baixo · Posição **34** na ordem<br>**Valor (cliente):** Should have, critério: obrigatoriedade legal, normativa ou institucional. «A associação publica fotos das oficinas no Instagram com frequência. Antes de cada post com crianças, alguém precisa conferir a autorização. Vira 4 assim que houver participantes cadastrados com fotos sendo publicadas.»<br>**Esforço (equipe):** esforço 2 · complexidade 2 · lacuna 2 → consolidado 2,0. Consulta por titular e por meio, com regra de revogação. Depende do RF42.<br>**Leitura da matriz:** Candidato ao MVP (valor 3 · esforço 2). Entre os primeiros da Fatia 2, conforme a capacidade das sprints. |
| Entrega | MVP: **complemento** (Fatia 2), conforme a nova matriz (planilha v2) · Release **R4** · Sprint **8** · Iceberg: Base |
| Situação | Não iniciada |
| Evolução | 29/10/2026 · Nova matriz, com o valor dado pela cliente por requisito (planilha v2): esforço 3 → 2; MVP: não → complemento. ([MUD-015](../14-historico/index.md#mud-015))<br>31/10/2026 · Releases e sprints alinhadas à nova matriz (opção 1): sprint Fechamento → 8. ([MUD-018](../14-historico/index.md#mud-018))<br>Pendente · Prioridade do bloco de LGPD avançada aguarda a coordenação. |

</details>


## Itens técnicos e de lançamento {#itens-tecnicos}

O backlog é a única fonte do trabalho: além dos RFs, entram itens técnicos e de lançamento. Defeitos encontrados nas revisões entram aqui com o prefixo D (D01, D02…), no topo da ordem.

<details class="ficha ficha--tec" id="t01" data-cp="tec" data-mvp="tec" data-ordem="1" data-release="r1" data-sprint="6" data-situacao="em-andamento" markdown="1">
<summary><span class="ficha__ordem" title="Posição na ordem do backlog">1º</span> <span class="ficha__id">T01</span> <span class="ficha__nome">Ambiente de desenvolvimento: Nuxt.js, Supabase, deploy e CI</span> <span class="ficha__chips"><span class="chip">Sprint 6</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Por que é necessário | Sem ele nenhuma história passa na DoD (precisa estar publicada e testada). |
| Entrega | Sprint 6 |
| Situação | Em andamento (a confirmar) |

</details>

<details class="ficha ficha--tec" id="t02" data-cp="tec" data-mvp="tec" data-sprint="8" data-situacao="nao-iniciada" markdown="1">
<summary><span class="ficha__id">T02</span> <span class="ficha__nome">Plano de transição</span> <span class="ficha__chips"><span class="chip">Sprint 8</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Por que é necessário | A associação precisa assumir o sistema ao fim da disciplina. |
| Entrega | Sprint 8 |
| Situação | Não iniciado |

</details>

<details class="ficha ficha--tec" id="t03" data-cp="tec" data-mvp="tec" data-sprint="fechamento" data-situacao="nao-iniciada" markdown="1">
<summary><span class="ficha__id">T03</span> <span class="ficha__nome">Treinamento e manual de uso</span> <span class="ficha__chips"><span class="chip">Sprint Fechamento</span></span></summary>

| Parte do registro | Informação |
| :--- | :--- |
| Por que é necessário | A coordenação e as voluntárias precisam usar o sistema sem a equipe. |
| Entrega | Sprint Fechamento |
| Situação | Não iniciado |

</details>

<details class="ficha ficha--tec" id="t04" data-cp="tec" data-mvp="tec" data-sprint="fechamento" data-situacao="nao-iniciada" markdown="1">
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
