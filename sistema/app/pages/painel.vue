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
  <div>
    <header>
      <p>Área restrita — {{ sessao?.usuario.email }} ({{ ehCoord ? 'Coordenação' : 'Voluntário' }})</p>
      <nav>
        <NuxtLink to="/painel">
          Início
        </NuxtLink>
        <NuxtLink
          v-if="ehCoord"
          to="/painel/usuarios"
        >
          Usuários
        </NuxtLink>
        <NuxtLink to="/painel/consentimentos">
          Consentimentos
        </NuxtLink>
        <NuxtLink
          v-if="ehCoord"
          to="/painel/categorias"
        >
          Categorias
        </NuxtLink>
        <NuxtLink to="/painel/doadores">
          Doadores
        </NuxtLink>
        <NuxtLink to="/painel/doacoes">
          Doações
        </NuxtLink>
        <button
          type="button"
          @click="sair"
        >
          Sair
        </button>
      </nav>
    </header>
    <NuxtPage />
  </div>
</template>
