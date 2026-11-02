<script setup lang="ts">
import { mensagemErro } from '~/utils/http'

const email = ref('')
const senha = ref('')
const erro = ref('')
const enviando = ref(false)

async function entrar() {
  erro.value = ''
  enviando.value = true
  try {
    await $fetch('/api/acesso/entrar', {
      method: 'POST',
      body: { email: email.value, senha: senha.value },
    })
    await navigateTo('/painel', { external: true })
  }
  catch (falha: unknown) {
    erro.value = mensagemErro(falha)
  }
  finally {
    enviando.value = false
  }
}
</script>

<template>
  <main>
    <h1>Entrar</h1>
    <form @submit.prevent="entrar">
      <label>
        E-mail
        <input
          v-model="email"
          type="email"
          autocomplete="username"
          required
        >
      </label>
      <label>
        Senha
        <input
          v-model="senha"
          type="password"
          autocomplete="current-password"
          required
        >
      </label>
      <p
        v-if="erro"
        role="alert"
      >
        {{ erro }}
      </p>
      <button
        type="submit"
        :disabled="enviando"
      >
        Entrar
      </button>
    </form>
  </main>
</template>
