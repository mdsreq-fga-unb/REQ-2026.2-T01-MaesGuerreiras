import type { JustificarFaltaCorpo } from '~/types/contratos'
import { validarJustificativaFalta } from '~/utils/frequencias'

export default defineEventHandler(async (event) => {
  await exigirOperacao(event, 'justificar_falta')
  const frequenciaId = getRouterParam(event, 'id')
  if (!frequenciaId) {
    throw createError({ statusCode: 400, statusMessage: 'ID da frequência obrigatório.' })
  }

  const corpo = await readBody<JustificarFaltaCorpo>(event)
  const falha = validarJustificativaFalta(corpo)
  if (falha) {
    throw falhaValidacao(falha.campo, falha.mensagem)
  }

  const cliente = await dbUsuario(event)

  const { data: freqAtual, error: erroBusca } = await cliente
    .from('frequencias')
    .select('id, presente, justificada')
    .eq('id', frequenciaId)
    .single()

  if (erroBusca || !freqAtual) {
    throw createError({ statusCode: 404, statusMessage: 'Registro de frequência não encontrado.' })
  }

  // RN16: Falta com motivo informado vira falta justificada sem ser convertida em presença (presente = false)
  const { data: atualizada, error: erroUpd } = await cliente
    .from('frequencias')
    .update({
      presente: false,
      justificada: true,
      motivo_justificativa: corpo.motivo.trim(),
    })
    .eq('id', frequenciaId)
    .select()
    .single()

  if (erroUpd || !atualizada) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível registrar a justificativa de falta.' })
  }

  return {
    id: atualizada.id,
    presente: atualizada.presente,
    justificada: atualizada.justificada,
    motivoJustificativa: atualizada.motivo_justificativa,
  }
})
