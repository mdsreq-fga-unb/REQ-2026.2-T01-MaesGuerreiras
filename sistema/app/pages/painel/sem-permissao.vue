<script setup lang="ts">
// Protótipo: "Voluntário — acesso negado" (RF40). O middleware `coordenacao`
// traz para cá quem abre pelo endereço uma tela exclusiva da coordenação.
</script>

<template>
  <div>
    <CabecalhoPagina
      secao="Área restrita"
      titulo="Acesso não permitido"
    />
    <main class="pagina pagina--estreita">
      <section class="cartao negado">
        <span
          class="negado__icone"
          aria-hidden="true"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect
              x="4"
              y="11"
              width="16"
              height="10"
              rx="2"
            />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
        </span>
        <h2>Esta tela é só da coordenação</h2>
        <p class="texto-2">
          Seu perfil é Voluntário. Se você precisa de algo daqui, como criar uma conta ou trocar uma senha,
          fale com a coordenação.
        </p>
        <NuxtLink
          to="/painel"
          class="botao botao--primario"
        >
          Voltar ao início
        </NuxtLink>
      </section>
    </main>
  </div>
</template>

<style scoped>
.negado {
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
}

.negado__icone {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--roxo-claro);
  color: var(--roxo);
  display: flex;
  align-items: center;
  justify-content: center;
}

.negado h2 {
  font-size: 20px;
}

.negado p {
  max-width: 460px;
}
</style>
