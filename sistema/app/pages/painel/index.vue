<script setup lang="ts">
import { ehCoordenacao, ehPerfilValido, type Perfil } from '~/utils/perfis'

// Área restrita: o módulo do Supabase redireciona para /login quem não está autenticado.
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const { data: perfil } = await useAsyncData('perfil', async () => {
  const { data: { user: autenticado } } = await supabase.auth.getUser()
  if (!autenticado) return null

  const { data } = await supabase
    .from('perfis')
    .select('perfil')
    .eq('id', autenticado.id)
    .maybeSingle()
  return ehPerfilValido(data?.perfil) ? data.perfil as Perfil : null
})

async function sair() {
  await supabase.auth.signOut()
  await navigateTo('/login')
}
</script>

<template>
  <main>
    <h1>Painel</h1>
    <p>Conectado como {{ user?.email }}</p>
    <p v-if="perfil">
      Perfil: {{ ehCoordenacao(perfil) ? 'Coordenação' : 'Voluntário' }}
    </p>
    <p v-else>
      Seu usuário ainda não tem perfil de acesso. Procure a Coordenação.
    </p>
    <button @click="sair">
      Sair
    </button>
  </main>
</template>
