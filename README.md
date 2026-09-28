<p align="center">
  <img alt="Mães Guerreiras" src="assets/banner.jpg" width="100%">
</p>

<h3 align="center">📄 <a href="https://mdsreq-fga-unb.github.io/REQ-2026.2-T01-MaesGuerreiras/">Documentação do produto e do projeto</a></h3>

<p align="center">
  Requisitos de Software · 2026.2 · Turma 01 · FCTE/UnB<br>
  Cliente: Associação Mães Guerreiras (Cidade Estrutural, DF)
</p>

---

## Sobre o projeto

A Associação Mães Guerreiras é uma ONG comunitária da Cidade Estrutural, no Distrito Federal.
Sua operação é predominantemente manual e conduzida por voluntárias com pouco tempo
disponível: as doações de itens são registradas em caderno e os dados das famílias
atendidas ficam mantidos de forma isolada.

O **Mães Guerreiras** é uma plataforma web que centraliza as informações da associação para a
comunidade e para os apoiadores, digitaliza o registro de doações, o cadastro de famílias e a
chamada das atividades, e protege os dados pessoais por meio de perfis de acesso.

**Objetivos específicos**

| ID | Objetivo |
|---|---|
| OE1 | Apresentar de forma permanente e acessível as atividades da associação, com dias, horários e situação atual, além das formas de doar e de fazer parte |
| OE2 | Substituir o registro em caderno pelo registro digital das doações de itens recebidas e distribuídas |
| OE3 | Centralizar o cadastro das famílias e as inscrições nas atividades, permitindo que uma mesma família participe de várias frentes |
| OE4 | Digitalizar a chamada das atividades e apoiar a regra de frequência já praticada pela coordenação |
| OE5 | Gerar relatórios de impacto para prestação de contas aos parceiros e captação de novos apoiadores |
| OE6 | Organizar o acesso ao painel administrativo por perfil, protegendo os dados pessoais das famílias atendidas |

**Características do produto**

| ID | Característica | Contribui para |
|---|---|---|
| CP1 | Portal institucional e agenda de atividades | OE1 (secundário: OE5) |
| CP2 | Registro de doações de itens | OE2 (secundário: OE5) |
| CP3 | Cadastro de famílias e participantes | OE3 (secundário: OE6) |
| CP4 | Inscrição em atividades e organização do atendimento | OE3 |
| CP5 | Chamada digital e controle de frequência | OE4 (secundário: OE5) |
| CP6 | Relatórios e indicadores de impacto | OE5 |
| CP7 | Perfis de acesso e proteção de dados | OE6 |

Detalhamento, rastreabilidade e justificativas na
[documentação](https://mdsreq-fga-unb.github.io/REQ-2026.2-T01-MaesGuerreiras/02-solucao/).

## Processo

Abordagem **ágil**, ciclo de vida **iterativo e incremental**, processo **ScrumXP**, com
sprints de duas semanas (7 sprints mais um período de Fechamento). O **MVP** reúne o portal
institucional (CP1) e o registro de doações de itens (CP2). A segurança (CP7) é entregue
antes de qualquer sprint que manipule dados pessoais de famílias.

| Sprint | Período | Objetivo principal |
|---|---|---|
| 1 | 11/08 – 24/08 | Levantamento inicial do cliente e do negócio |
| 2 | 25/08 – 07/09 | Aprofundamento do levantamento e Visão do Produto e Projeto |
| 3 | 08/09 – 21/09 | Planejamento técnico, ambiente e backlog detalhado |
| 4 | 22/09 – 05/10 | Portal institucional e agenda de atividades (CP1) |
| 5 | 06/10 – 19/10 | Perfis de acesso e proteção de dados (CP7) |
| 6 | 20/10 – 02/11 | Registro de doações de itens (CP2), MVP administrativo |
| 7 | 03/11 – 16/11 | Cadastro de famílias, inscrições, chamada digital e frequência (CP3, CP4, CP5) |
| Fechamento | 17/11 – 10/12 | Relatórios de impacto (CP6), testes gerais e transição para a associação |

O [cronograma completo](https://mdsreq-fga-unb.github.io/REQ-2026.2-T01-MaesGuerreiras/06-cronograma/)
traz as entregas, os artefatos de ER e a validação do cliente em cada sprint.

## Tecnologias

`Nuxt.js` · `Supabase` · `Vercel` ou `Netlify` · `MkDocs Material` + `GitHub Pages`

| Camada | Tecnologia | Função |
|---|---|---|
| Frontend + parte do backend | Nuxt.js | Interface pública, painel administrativo e server routes (Nitro) para a API |
| Banco de dados + autenticação | Supabase | PostgreSQL, login da coordenação e storage de imagens |
| Hospedagem | Vercel ou Netlify | Deploy automático via GitHub, subdomínio grátis |

## Equipe

<table>
  <tr>
    <td align="center" width="150">
      <a href="https://github.com/luanludry">
        <img src="https://github.com/luanludry.png" width="72" alt=""><br>
        <sub><b>Luan</b></sub>
      </a><br>
      <sub>Gerente de Projeto<br>Scrum Master</sub>
    </td>
    <td align="center" width="150">
      <a href="https://github.com/IsaLL24">
        <img src="https://github.com/IsaLL24.png" width="72" alt=""><br>
        <sub><b>Isabella</b></sub>
      </a><br>
      <sub>Desenvolvedora Front-end</sub>
    </td>
    <td align="center" width="150">
      <a href="https://github.com/Luiskr34">
        <img src="https://github.com/Luiskr34.png" width="72" alt=""><br>
        <sub><b>Luis</b></sub>
      </a><br>
      <sub>Desenvolvedor Back-end</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="150">
      <a href="https://github.com/ianpedersoli">
        <img src="https://github.com/ianpedersoli.png" width="72" alt=""><br>
        <sub><b>Ian</b></sub>
      </a><br>
      <sub>Analista de Requisitos</sub>
    </td>
    <td align="center" width="150">
      <a href="https://github.com/PedroGomes-phgr">
        <img src="https://github.com/PedroGomes-phgr.png" width="72" alt=""><br>
        <sub><b>Pedro</b></sub>
      </a><br>
      <sub>Analista de QA</sub>
    </td>
    <td align="center" width="150">
      <a href="https://github.com/Vitorlustosa">
        <img src="https://github.com/Vitorlustosa.png" width="72" alt=""><br>
        <sub><b>Vitor</b></sub>
      </a><br>
      <sub>Desenvolvedor Back-end</sub>
    </td>
  </tr>
</table>

## Organização do repositório

| Branch | Conteúdo |
|---|---|
| `main` | Fonte da documentação em Markdown (`docs/`), configuração do MkDocs (`mkdocs.yml`, `requirements.txt`), workflows do GitHub Actions (`.github/workflows/`) e este README |
| `gh-pages` | Site de documentação já construído pelo MkDocs, publicado no GitHub Pages |

A documentação **não** é escrita à mão em HTML: a edição acontece em Markdown na `main` e o
workflow constrói o site e publica o resultado na `gh-pages`.

---

<p align="center">
  <sub>Universidade de Brasília · Faculdade de Ciências e Tecnologias em Engenharia (FCTE)<br>
  Requisitos de Software — 2026.2 — Turma 01</sub>
</p>