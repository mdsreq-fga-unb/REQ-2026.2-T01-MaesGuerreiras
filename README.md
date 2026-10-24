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
