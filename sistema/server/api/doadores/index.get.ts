export default defineEventHandler(async (event) => {
  await exigirOperacao(event, 'cadastrar_doador')
  const cliente = await dbUsuario(event)
  const { data, error } = await cliente
    .from('doadores')
    .select('id, tipo, nome, telefone, email, criado_em, atualizado_em')
    .order('nome')

  if (error) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível listar os doadores.' })
  }

  return data ?? []
})
