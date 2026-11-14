import type { FrequenciaHistoricoItemResposta } from '~/types/contratos'

type FrequenciaHistoricoLinha = {
  id: string
  chamada_id: string
  participante_id: string
  presente: boolean
  justificada: boolean
  motivo_justificativa: string | null
  registrado_em: string
  atualizado_em: string
  chamadas: {
    id: string
    turma_id: string
    data_encontro: string
    turmas: {
      id: string
      atividade: string
    } | null
  } | null
}

export default defineEventHandler(async (event): Promise<FrequenciaHistoricoItemResposta[]> => {
  const t0 = performance.now()
  await exigirOperacao(event, 'consultar_frequencia')
  const participanteId = getRouterParam(event, 'id')
  if (!participanteId) {
    throw createError({ statusCode: 400, statusMessage: 'ID do participante obrigatório.' })
  }

  const query = getQuery(event)
  const turmaId = typeof query.turmaId === 'string' ? query.turmaId.trim() : ''
  const dataInicio = typeof query.dataInicio === 'string' ? query.dataInicio.trim() : ''
  const dataFim = typeof query.dataFim === 'string' ? query.dataFim.trim() : ''

  const cliente = await dbUsuario(event)

  let consulta = cliente
    .from('frequencias')
    .select(`
      id,
      chamada_id,
      participante_id,
      presente,
      justificada,
      motivo_justificativa,
      registrado_em,
      atualizado_em,
      chamadas!inner (
        id,
        turma_id,
        data_encontro,
        turmas (
          id,
          atividade
        )
      )
    `)
    .eq('participante_id', participanteId)

  if (turmaId) {
    consulta = consulta.eq('chamadas.turma_id', turmaId)
  }
  if (dataInicio) {
    consulta = consulta.gte('chamadas.data_encontro', dataInicio)
  }
  if (dataFim) {
    consulta = consulta.lte('chamadas.data_encontro', dataFim)
  }

  const { data, error } = await consulta
  if (error) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível consultar o histórico de frequência.' })
  }

  const duracao = Math.round(performance.now() - t0)
  setHeader(event, 'Server-Timing', `frequencia;dur=${duracao}`)

  const linhas = (data || []) as unknown as FrequenciaHistoricoLinha[]

  return linhas.map(f => ({
    frequenciaId: f.id,
    chamadaId: f.chamada_id,
    turmaId: f.chamadas?.turma_id ?? '',
    atividade: f.chamadas?.turmas?.atividade ?? 'Atividade',
    dataEncontro: f.chamadas?.data_encontro ?? '',
    presente: f.presente,
    justificada: f.justificada,
    motivoJustificativa: f.motivo_justificativa,
    registradoEm: f.registrado_em,
    atualizadoEm: f.atualizado_em,
  }))
})
