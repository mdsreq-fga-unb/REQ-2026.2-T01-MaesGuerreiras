export default defineEventHandler(async (event) => {
  await exigirOperacao(event, 'consultar_saldo')
  const cliente = await dbUsuario(event)
  const { data, error } = await cliente
    .from('categorias_item')
    .select('id, nome, unidade, criado_em')
    .order('nome')

  if (error) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível listar as categorias.' })
  }

  return data ?? []
})
