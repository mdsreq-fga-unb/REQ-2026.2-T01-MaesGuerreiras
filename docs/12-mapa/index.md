# 12. Mapa de histórias

O mapa organiza os requisitos pela **jornada** de cada persona. É uma **visão** do catálogo: mostra
só o ID e o nome de cada item. A release de cada requisito é um atributo da ficha no
[catálogo](../08-requisitos/index.md); ao mudar uma release, atualize a ficha e este mapa no mesmo
commit.

## 12.1 Personas e objetivos

As personas foram definidas a partir das entrevistas com a coordenação e da validação de 28/09/2026.
**Hipóteses a confirmar com a coordenação** na revisão da Sprint 6: quem registra as doações no dia a
dia e quem faz a chamada.

| Persona | Perfil no sistema ([8.3](../08-requisitos/glossario.md)) | Quem é | Objetivos |
|

## 12.2 Jornadas e releases

Na horizontal ficam as **atividades** de cada persona, na ordem em que acontecem no trabalho.
Embaixo de cada atividade ficam os requisitos que a apoiam. Na vertical, as **releases** recortam
conjuntos que permitem concluir um objetivo da persona de ponta a ponta.

Legenda das releases:

- **R1 – A doação chega à família:** a coordenadora e a voluntária registram uma doação e a entregam a uma família cadastrada com consentimento.
- **R2 – A educadora faz a chamada:** uma educadora faz a chamada de uma turma e as faltas ficam registradas e justificadas.
- **R3 – Completar os fluxos e manter os cadastros em dia:** consulta de saldo, lista de espera, consulta de inscritos, atualizações, inativações e cancelamentos, sem perder histórico.
- **R4 – Prestar contas e proteger dados:** relatórios, painel e LGPD avançada.
- **Trilha paralela (CP1):** portal institucional, que não depende dos outros módulos.

R1 e R2 formam o **MVP** e têm exatamente os 19 requisitos escolhidos pela [matriz](../10-mvp/index.md#104-matriz-que-leva-a-escolha-do-mvp). Desde 31/10/2026, as releases seguem a matriz.

### Jornada A – Fazer a doação chegar às famílias {#jornada-a}

*Personas: Coordenadora e Voluntária de atendimento*

| Release | A1 Dar acesso à equipe | A2 Receber doações | A3 Acolher a família | A4 Distribuir itens | A5 Manter cadastros | A6 Prestar contas |
|---|---|---|---|---|---|---|
| **R1** | [RF41](../08-requisitos/index.md#rf41) Autenticar<br>[RF39](../08-requisitos/index.md#rf39) Cadastrar usuário<br>[RF40](../08-requisitos/index.md#rf40) Atribuir perfil | [RF11](../08-requisitos/index.md#rf11) Cadastrar categoria<br>[RF08](../08-requisitos/index.md#rf08) Cadastrar doador<br>[RF09](../08-requisitos/index.md#rf09) Registrar entrada | [RF42](../08-requisitos/index.md#rf42) Registrar consentimento<br>[RF14](../08-requisitos/index.md#rf14) Cadastrar família | [RF10](../08-requisitos/index.md#rf10) Registrar destinação | | |
| **R2** | | | [RF16](../08-requisitos/index.md#rf16) Cadastrar participante<br>[RF18](../08-requisitos/index.md#rf18) Vincular à família | | | |
| **R3** | | | | [RF12](../08-requisitos/index.md#rf12) Consultar saldo *(antecipado na Sprint 6)* | [RF15](../08-requisitos/index.md#rf15) (a) Atualizar família<br>[RF15](../08-requisitos/index.md#rf15) (b) Inativar família<br>[RF17](../08-requisitos/index.md#rf17) (a) Atualizar participante<br>[RF17](../08-requisitos/index.md#rf17) (b) Inativar participante | |
| **R4** | | | | | | [RF33](../08-requisitos/index.md#rf33) Relatório de doações recebidas<br>[RF34](../08-requisitos/index.md#rf34) Relatório de doações distribuídas<br>[RF36](../08-requisitos/index.md#rf36) Relatório de famílias<br>[RF38](../08-requisitos/index.md#rf38) Exportar relatório<br>[RF37](../08-requisitos/index.md#rf37) Painel de indicadores |

### Jornada B – Garantir que as crianças frequentem as atividades {#jornada-b}

*Personas: Educadora voluntária e Coordenadora*

| Release | B1 Montar turmas | B2 Inscrever participantes | B3 Fazer a chamada | B4 Ajustar a chamada | B5 Acompanhar faltas |
|---|---|---|---|---|---|
| **R2** | [RF20](../08-requisitos/index.md#rf20) Cadastrar turma | [RF23](../08-requisitos/index.md#rf23) Inscrever<br>[RF19](../08-requisitos/index.md#rf19) Buscar participante | [RF27](../08-requisitos/index.md#rf27) Abrir chamada<br>[RF28](../08-requisitos/index.md#rf28) Registrar frequência | [RF29](../08-requisitos/index.md#rf29) Justificar falta<br>[RF30](../08-requisitos/index.md#rf30) (a) Corrigir no mesmo dia<br>[RF30](../08-requisitos/index.md#rf30) (b) Corrigir com motivo | [RF31](../08-requisitos/index.md#rf31) Consultar frequência |
| **R3** | [RF21](../08-requisitos/index.md#rf21) Atualizar turma<br>[RF22](../08-requisitos/index.md#rf22) Encerrar turma | [RF24](../08-requisitos/index.md#rf24) Cancelar inscrição<br>[RF25](../08-requisitos/index.md#rf25) Lista de espera<br>[RF26](../08-requisitos/index.md#rf26) Consultar inscritos | | | |
| **R4** | | | | | [RF32](../08-requisitos/index.md#rf32) Sinalizar faltas<br>[RF35](../08-requisitos/index.md#rf35) Relatório de frequência |

### Jornada C – Conhecer e apoiar a associação (trilha paralela) {#jornada-c}

*Persona: Visitante ou apoiador; a Coordenadora mantém o conteúdo*

| Release | C1 Conhecer a associação | C2 Ver a agenda | C3 Saber o que doar | C4 Falar com a associação |
|---|---|---|---|---|
| **Trilha CP1** | [RF01](../08-requisitos/index.md#rf01) Publicar conteúdo<br>[RF02](../08-requisitos/index.md#rf02) Atualizar conteúdo | [RF03](../08-requisitos/index.md#rf03) Cadastrar atividade<br>[RF04](../08-requisitos/index.md#rf04) Atualizar atividade<br>[RF05](../08-requisitos/index.md#rf05) Consultar agenda | [RF13](../08-requisitos/index.md#rf13) Publicar itens necessários | [RF06](../08-requisitos/index.md#rf06) Enviar contato<br>[RF07](../08-requisitos/index.md#rf07) Consultar contatos |

### Jornada D – Proteger os dados das famílias {#jornada-d}

*Persona: Coordenadora*

| Release | D1 Responder ao titular | D2 Auditar alterações |
|---|---|---|
| **R4** | [RF43](../08-requisitos/index.md#rf43) Solicitação de exclusão<br>[RF45](../08-requisitos/index.md#rf45) Consultar autorização de imagem | [RF44](../08-requisitos/index.md#rf44) Histórico de alterações |

O registro do consentimento ([RF42](../08-requisitos/index.md#rf42)) fica na Jornada A, em "Acolher a família", porque acontece no momento do cadastro (RN19).
