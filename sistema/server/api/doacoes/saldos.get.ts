export default defineEventHandler(async (event) => {
  const inicio = Date.now()
  await exigirOperacao(event, 'consultar_saldo')
  const cliente = await dbUsuario(event)
  const { data, error } = await cliente
    .from('saldos_categoria')
    .select('categoria_id, nome, unidade, saldo')
    .order('nome')

  if (error) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível consultar o saldo.' })
  }

  setHeader(event, 'Server-Timing', `saldo;dur=${Date.now() - inicio}`)

  return data ?? []
})
