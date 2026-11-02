export default defineEventHandler(async (event) => {
  const sessao = await exigirOperacao(event, 'registrar_consentimento')
  const titularId = getRouterParam(event, 'id')
  if (!titularId) {
    throw falhaValidacao('id', 'Informe o titular.')
  }

  const cliente = await dbUsuario(event)
  const { data, error } = await cliente
    .from('autorizacoes_imagem')
    .insert({
      titular_id: titularId,
      autorizado: false,
      meios: [],
      revogacao: true,
      registrado_por: sessao.id,
    })
    .select('id, registrado_em')
    .single()

  if (error || !data) {
    throw createError({ statusCode: 400, statusMessage: 'Não foi possível registrar a revogação.' })
  }

  return { titularId, revogadoEm: data.registrado_em }
})
