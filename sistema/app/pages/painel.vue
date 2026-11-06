<script setup lang="ts">
const { data: sessao, error } = await useFetch('/api/acesso/sessao')

if (error.value) {
  await navigateTo('/login')
}

const ehCoord = computed(() => sessao.value?.perfil === 'coordenacao')

async function sair() {
  const supabase = useSupabaseClient()
  await $fetch('/api/acesso/sair', { method: 'POST' }).catch(() => undefined)
  await supabase.auth.signOut()
  await navigateTo('/login', { external: true })
}
</script>

<template>
  <div class="moldura">
    <div class="moldura__menu">
      <MenuLateral
        :eh-coord="ehCoord"
        :email="sessao?.usuario.email"
        @sair="sair"
      />
    </div>
    <div class="moldura__conteudo">
      <NuxtPage />
    </div>
  </div>
</template>
