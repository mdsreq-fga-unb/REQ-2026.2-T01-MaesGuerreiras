# 7. Interação entre Equipe e Cliente

Esta seção apresenta a composição da equipe de desenvolvimento, as ferramentas e a frequência de
comunicação com a Associação Mães Guerreiras, e o processo de validação adotado ao longo do
projeto.

## 7.1 Composição da Equipe

A equipe de desenvolvimento será composta por:

| Papel | Descrição | Responsável | Participantes |
| :--- | :--- | :--- | :--- |
| Gerente de Projeto / Scrum Master | Coordena o projeto, garante a comunicação com a coordenação da associação e controla prazos e entregas das sprints. | Luan | Isabella |
| Desenvolvedor(a) Front-end | Responsável pela interface do portal e do painel administrativo, em Nuxt.js, com foco na simplicidade exigida pela coordenação. | Isabella | Vitor, Pedro |
| Desenvolvedor(a) Back-end | Implementa a lógica de negócio, a integração com o Supabase (banco de dados e autenticação) e as server routes em Nuxt.js, incluindo o controle de perfis de acesso. | Luis | Luan, Vitor |
| Analista de Requisitos | Define os requisitos funcionais e não funcionais e garante que as regras da associação (senhas, rodízio, cinco faltas) sejam atendidas. | Ian | Isabella, Pedro |
| Analista de QA | Garante a qualidade do produto, testando os fluxos críticos: registro de doações, chamada, senhas da Sacola Verde e geração de relatórios. | Pedro | Luan, Ian |

### Integrantes

<div class="team-grid">
	<article class="team-card">
		<img class="team-card__photo" src="https://github.com/luanludry.png?size=240" alt="Foto de Luan no GitHub" loading="lazy" />
		<h3 class="team-card__name">Luan</h3>
		<a class="team-card__handle" href="https://github.com/luanludry" target="_blank" rel="noopener noreferrer">@luanludry</a>
		<p class="team-card__role">Gerente de Projeto / Scrum Master</p>
	</article>

	<article class="team-card team-card--placeholder">
		<img class="team-card__photo" src="https://github.com/IsaLL24.png?size=240" alt="Foto de Isabella no GitHub" loading="lazy" />
		<h3 class="team-card__name">Isabella</h3>
		<a class="team-card__handle" href="https://github.com/IsaLL24" target="_blank" rel="noopener noreferrer">@IsaLL24</a>
		<p class="team-card__role">Desenvolvedora Front-end</p>
	</article>


    <article class="team-card">
        <img class="team-card__photo" src="https://github.com/Luiskr34.png?size=240" alt="Foto de Luis no GitHub" loading="lazy" />
        <h3 class="team-card__name">Luis</h3>
        <a class="team-card__handle" href="https://github.com/Luiskr34" target="_blank" rel="noopener noreferrer">@Luiskr34</a>
        <p class="team-card__role">Desenvolvedor Back-end</p>
    </article>

	<article class="team-card">
		<img class="team-card__photo" src="https://github.com/ianpedersoli.png?size=240" alt="Foto de Ian no GitHub" loading="lazy" />
		<h3 class="team-card__name">Ian</h3>
		<a class="team-card__handle" href="https://github.com/ianpedersoli" target="_blank" rel="noopener noreferrer">@ianpedersoli</a>
		<p class="team-card__role">Analista de Requisitos</p>
	</article>

    <article class="team-card">
        <img class="team-card__photo" src="https://github.com/PedroGomes-phgr.png?size=240" alt="Foto de Pedro no GitHub" loading="lazy" />
        <h3 class="team-card__name">Pedro</h3>
        <a class="team-card__handle" href="https://github.com/PedroGomes-phgr" target="_blank" rel="noopener noreferrer">@PedroGomes-phgr</a>
        <p class="team-card__role">Analista de QA</p>
    </article>

	<article class="team-card">
        <img class="team-card__photo" src="https://github.com/Vitorlustosa.png?size=240" alt="Foto do Vitor" loading="lazy" />
        <h3 class="team-card__name">Vitor</h3>
        <a class="team-card__handle" href="https://github.com/Vitorlustosa" target="_blank" rel="noopener noreferrer">@Vitorlustosa</a>
        <p class="team-card__role">Desenvolvedor Back-end</p>
    </article>
</div>

## 7.2 Comunicação

### Ferramentas de Comunicação

- **WhatsApp:** canal principal de comunicação com a associação, por ser o meio que a coordenação já
  utiliza no dia a dia, tanto entre as voluntárias quanto para avisar a comunidade sobre as
  distribuições e novas turmas. Também será usado para a comunicação diária entre os integrantes da
  equipe.
- **Google Meet:** utilizado para reuniões da equipe e para conversas com a coordenação quando não
  for possível o encontro presencial, por ser gratuito e de fácil acesso.
- **Microsoft Teams:** utilizado para reuniões internas da equipe e alinhamentos acadêmicos com a
  disciplina.
- **Google Docs:** utilizado para a produção colaborativa da documentação do projeto entre os
  integrantes da equipe.
- **Trello:** utilizado para o gerenciamento do backlog e o acompanhamento das tarefas de cada sprint,
  de forma visual e simples para a equipe e para o cliente.

### Métodos e Frequência de Reuniões

- **Reuniões semanais da equipe:** encontros curtos (por Google Meet ou WhatsApp) para alinhar
  progresso, obstáculos e prioridades da sprint em andamento, respeitando a disponibilidade de uma
  equipe estudantil.
- **Reunião de Revisão de Sprint (a cada 2 semanas):** ao final de cada sprint, a equipe apresenta as
  funcionalidades desenvolvidas à coordenação e pede que as próprias coordenadoras as utilizem,
  coletando feedback para ajustar o backlog.
- **Reunião de Planejamento de Sprint:** após a revisão, a equipe planeja a próxima sprint, revisando
  o backlog e definindo prioridades conforme o feedback recebido.
- **Retrospectiva:** realizada ao final de cada sprint, entre a equipe, para discutir o que funcionou, o
  que pode melhorar e as lições aprendidas do ciclo.

### Frequência de Interações com o Cliente

- **Revisões de sprint (ao final de cada sprint):** Makio participa diretamente das revisões, validando as
  entregas e dando feedback; as demais coordenadoras participam quando a entrega envolve sua área
  de responsabilidade.
- **Interações contínuas por WhatsApp:** a coordenação tem acesso direto à equipe pelo WhatsApp
  para dúvidas rápidas e ajustes pontuais ao longo do desenvolvimento.

## 7.3 Processo de Validação

O produto será validado antes de cada entrega parcial (seção [6](../06-cronograma/index.md)),
garantindo que atenda às expectativas da coordenação e à realidade da comunidade atendida. A
validação ocorre em três níveis:

- **Validação técnica:** a equipe verifica, por meio de checklists e testes, se cada funcionalidade
  atende aos critérios de aceitação definidos (seção [5.1](../05-er/index.md#51-atividades-e-tecnicas-da-er-e-scrumxp)),
  com atenção especial à proteção dos dados pessoais e à correção dos relatórios.
- **Validação com a coordenação:** a cada revisão de sprint, Makio e a coordenadora responsável pela
  frente testam as funcionalidades entregues e confirmam se atendem à forma como a associação
  realmente trabalha, se possível.
- **Validação em uso real:** sempre que possível, a funcionalidade é testada durante a própria
  operação (uma coordenadora registra as doações de uma semana, ou a chamada é feita pelo
  sistema em um dia de Reforço Escolar). Esse é o teste decisivo: se o registro digital não for mais
  rápido e simples que o caderno, a funcionalidade precisa ser revista antes de seguir adiante.

Essa validação contínua garante que o produto evolua alinhado às necessidades reais da Associação
Mães Guerreiras, reduzindo o risco de retrabalho e, principalmente, o risco de a ferramenta ser
abandonada em favor dos controles manuais que ela pretende substituir.
