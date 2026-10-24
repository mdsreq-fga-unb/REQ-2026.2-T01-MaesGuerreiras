<script setup lang="ts">
// Retorno do Supabase após confirmação de e-mail ou redefinição de senha.
const user = useSupabaseUser()

watch(user, () => {
  if (user.value) {
    navigateTo('/painel')
  }
}, { immediate: true })
</script>

<template>
  <p>Confirmando acesso...</p>
</template>
