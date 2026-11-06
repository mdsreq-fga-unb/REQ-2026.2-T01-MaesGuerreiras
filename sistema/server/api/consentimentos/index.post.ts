import { validarRegistroConsentimentos, type RegistroConsentimentos } from '~/utils/consentimentos'

export default defineEventHandler(async (event) => {
  await exigirOperacao(event, 'registrar_consentimento')
  const corpo = await readBody<RegistroConsentimentos & { titular: RegistroConsentimentos['titular'] & { familiaId?: string | null } }>(event)
  const falha = validarRegistroConsentimentos(corpo)
  if (falha) {
    throw falhaValidacao(falha.campo, falha.mensagem)
  }

  const cliente = await dbUsuario(event)
  const { data: titularId, error } = await cliente.rpc('registrar_consentimentos', {
    p_nome: corpo.titular.nome.trim(),
    p_papel: corpo.titular.papel,
    p_familia_id: corpo.titular.familiaId ?? null,
    p_consentimentos: corpo.consentimentos,
    p_imagem_autorizado: corpo.imagem.autorizado,
    p_meios: corpo.imagem.autorizado ? corpo.imagem.meios : [],
  })

  if (error || !titularId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Não foi possível registrar o titular e seus consentimentos.',
    })
  }

  return { titularId }
})
