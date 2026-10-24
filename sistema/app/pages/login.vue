<script setup lang="ts">
// Esqueleto do RF41 (Autenticar usuário). Critérios de aceitação: US41, seção 10.1.
const supabase = useSupabaseClient()

const email = ref('')
const senha = ref('')
const erro = ref('')
const enviando = ref(false)

async function entrar() {
  erro.value = ''
  enviando.value = true
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: senha.value,
  })
  enviando.value = false

  if (error) {
    erro.value = 'E-mail ou senha incorretos.'
    return
  }
  await navigateTo('/painel')
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
