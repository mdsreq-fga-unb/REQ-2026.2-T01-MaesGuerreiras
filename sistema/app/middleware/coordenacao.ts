export default defineNuxtRouteMiddleware(async () => {
  const { data: sessao, error } = await useFetch('/api/acesso/sessao')

  if (error.value) {
    return navigateTo('/login', { replace: true })
  }

  if (sessao.value?.perfil !== 'coordenacao') {
    return navigateTo('/painel', { replace: true })
  }
})
