import { sessaoExpirouPorInatividade } from '~/utils/rnf15'

export default defineNuxtPlugin(() => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()
  let ultimo = Date.now()

  function registrarAtividade() {
    ultimo = Date.now()
  }

  if (import.meta.client) {
    for (const evento of ['click', 'keydown', 'mousemove', 'touchstart']) {
      window.addEventListener(evento, registrarAtividade, { passive: true })
    }

    setInterval(async () => {
      if (!user.value) return
      if (!sessaoExpirouPorInatividade(ultimo, Date.now())) return
      await supabase.auth.signOut()
      await navigateTo('/login?motivo=sessao')
    }, 30_000)
  }
})
