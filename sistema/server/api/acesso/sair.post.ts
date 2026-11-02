export default defineEventHandler(async (event) => {
  const cliente = await dbUsuario(event)
  await cliente.auth.signOut()
  return { ok: true }
})
