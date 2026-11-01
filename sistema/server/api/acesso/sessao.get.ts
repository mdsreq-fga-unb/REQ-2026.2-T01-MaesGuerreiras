export default defineEventHandler(async (event) => {
  const usuario = await usuarioDaSessao(event)
  const sessao = await perfilDaSessao(event)

  return {
    usuario: { id: usuario.id, email: usuario.email },
    perfil: sessao.perfil,
  }
})
