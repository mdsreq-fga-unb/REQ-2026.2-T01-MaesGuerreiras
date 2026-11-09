import type { CorrigirFrequenciaCorpo } from '~/types/contratos'
import { validarCorrecaoFrequencia } from '~/utils/frequencias'

type FrequenciaConsulta = {
  id: string
  chamada_id: string
  participante_id: string
  presente: boolean
  justificada: boolean
  motivo_justificativa: string | null
  registrado_por: string
  registrado_em: string
  chamadas: {
    id: string
    data_encontro: string
    aberta_por: string
  } | null
}

export default defineEventHandler(async (event) => {
  const sessao = await exigirOperacao(event, 'corrigir_frequencia')
  const frequenciaId = getRouterParam(event, 'id')
  if (!frequenciaId) {
    throw createError({ statusCode: 400, statusMessage: 'ID da frequência obrigatório.' })
  }

  const corpo = await readBody<CorrigirFrequenciaCorpo>(event)
  const cliente = await dbUsuario(event)

  // 1. Busca frequência atual e a chamada
  const { data: frequenciaRaw, error: erroFreq } = await cliente
    .from('frequencias')
    .select(`
      id,
      chamada_id,
      participante_id,
      presente,
      justificada,
      motivo_justificativa,
      registrado_por,
      registrado_em,
      chamadas (
        id,
        data_encontro,
        aberta_por
      )
    `)
    .eq('id', frequenciaId)
    .single()

  if (erroFreq || !frequenciaRaw) {
    throw createError({ statusCode: 404, statusMessage: 'Registro de frequência não encontrado.' })
  }

  const frequencia = frequenciaRaw as unknown as FrequenciaConsulta
  const dataEncontro = frequencia.chamadas?.data_encontro ?? ''

  // 2. Valida permissões RN17 e motivos
  const { falha, alteracoes } = validarCorrecaoFrequencia(
    sessao.perfil,
    sessao.id,
    {
      registradoPor: frequencia.registrado_por,
      registradoEm: frequencia.registrado_em,
      presente: frequencia.presente,
      justificada: frequencia.justificada,
      motivoJustificativa: frequencia.motivo_justificativa,
    },
    dataEncontro,
    corpo,
  )

  if (falha) {
    throw falhaValidacao(falha.campo, falha.mensagem)
  }

  // 3. Atualiza a frequência
  const { data: atualizada, error: erroUpd } = await cliente
    .from('frequencias')
    .update({
      presente: corpo.presente,
      justificada: corpo.justificada ?? false,
      motivo_justificativa: corpo.motivoJustificativa?.trim() || null,
    })
    .eq('id', frequenciaId)
    .select()
    .single()

  if (erroUpd || !atualizada) {
    if (erroUpd?.message?.includes('só corrige frequência')) {
      throw falhaValidacao('perfil', erroUpd.message)
    }
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível corrigir a frequência.' })
  }

  // 4. Garante que os registros de auditoria em frequencias_alteracoes tenham o motivo da Coordenação (CA-RF30-05 / RNF19)
  if (corpo.motivoCorrecao?.trim()) {
    await cliente
      .from('frequencias_alteracoes')
      .update({ motivo: corpo.motivoCorrecao.trim() })
      .eq('frequencia_id', frequenciaId)
      .is('motivo', null)
  }

  return {
    id: atualizada.id,
    presente: atualizada.presente,
    justificada: atualizada.justificada,
    motivoJustificativa: atualizada.motivo_justificativa,
    alteracoesRegistradas: alteracoes.length,
  }
})
