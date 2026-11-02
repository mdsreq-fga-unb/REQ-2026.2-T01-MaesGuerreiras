import { consentimentoVigente, imagemVigente, FINALIDADES } from '~/utils/consentimentos'

export default defineEventHandler(async (event) => {
  await exigirOperacao(event, 'registrar_consentimento')
  const cliente = await dbUsuario(event)

  const { data: titulares, error } = await cliente
    .from('titulares_consentimento')
    .select('id, nome, papel, familia_id, criado_em')
    .order('criado_em', { ascending: false })

  if (error) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível listar os consentimentos.' })
  }

  const ids = (titulares ?? []).map(item => item.id)
  const { data: consentimentos } = ids.length
    ? await cliente.from('consentimentos').select('titular_id, finalidade, concedido, registrado_em').in('titular_id', ids)
    : { data: [] }
  const { data: imagens } = ids.length
    ? await cliente.from('autorizacoes_imagem').select('titular_id, autorizado, meios, revogacao, registrado_em').in('titular_id', ids)
    : { data: [] }

  return (titulares ?? []).map((titular) => {
    const historico = (consentimentos ?? [])
      .filter(item => item.titular_id === titular.id)
      .map(item => ({
        finalidade: item.finalidade,
        concedido: item.concedido,
        registradoEm: item.registrado_em,
      }))

    const imagemHistorico = (imagens ?? [])
      .filter(item => item.titular_id === titular.id)
      .map(item => ({
        autorizado: item.autorizado,
        meios: item.meios,
        revogacao: item.revogacao,
        registradoEm: item.registrado_em,
      }))

    return {
      titularId: titular.id,
      nome: titular.nome,
      papel: titular.papel,
      consentimentos: FINALIDADES.map((finalidade) => {
        const vigente = consentimentoVigente(historico, finalidade)
        return vigente ?? { finalidade, concedido: false, registradoEm: '' }
      }).filter(item => item.registradoEm),
      imagem: imagemVigente(imagemHistorico) ?? null,
    }
  })
})
