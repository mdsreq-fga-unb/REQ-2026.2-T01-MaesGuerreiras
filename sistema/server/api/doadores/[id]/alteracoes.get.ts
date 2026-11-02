export default defineEventHandler(async (event) => {
  await exigirOperacao(event, 'cadastrar_doador')
  const id = getRouterParam(event, 'id')
  if (!id) {
    throw falhaValidacao('id', 'Informe o doador.')
  }

  const cliente = await dbUsuario(event)
  const { data, error } = await cliente
    .from('doadores_alteracoes')
    .select('id, autor_id, campo, valor_anterior, valor_novo, alterado_em')
    .eq('doador_id', id)
    .order('alterado_em', { ascending: true })

  if (error) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível consultar o histórico.' })
  }

  return data ?? []
})
