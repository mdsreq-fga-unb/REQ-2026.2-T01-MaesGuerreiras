import type { ChamadaResposta } from '~/types/contratos'
import type { Database } from '~/types/database.types'

type FrequenciaLinha = Database['public']['Tables']['frequencias']['Row']
type InscricaoItem = {
  participante_id: string
  participantes: {
    id: string
    nome: string
  } | null
}
type ChamadaItem = {
  id: string
  turma_id: string
  data_encontro: string
  aberta_por: string
  aberta_em: string
  turmas: {
    id: string
    atividade: string
  } | null
}

export default defineEventHandler(async (event): Promise<ChamadaResposta> => {
  await exigirOperacao(event, 'abrir_chamada')
  const id = getRouterParam(event, 'id')
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'ID da chamada obrigatório.' })
  }

  const cliente = await dbUsuario(event)

  const { data: chamadaRaw, error: erroChamada } = await cliente
    .from('chamadas')
    .select(`
      id,
      turma_id,
      data_encontro,
      aberta_por,
      aberta_em,
      turmas (
        id,
        atividade
      )
    `)
    .eq('id', id)
    .single()

  if (erroChamada || !chamadaRaw) {
    throw createError({ statusCode: 404, statusMessage: 'Chamada não encontrada.' })
  }

  const chamada = chamadaRaw as unknown as ChamadaItem

  // Inscritos da turma
  const { data: inscricoes } = await cliente
    .from('inscricoes')
    .select(`
      participante_id,
      participantes (
        id,
        nome
      )
    `)
    .eq('turma_id', chamada.turma_id)
    .eq('situacao', 'ativa')

  // Frequências
  const { data: frequencias } = await cliente
    .from('frequencias')
    .select('*')
    .eq('chamada_id', id)

  const mapaFreq = new Map<string, FrequenciaLinha>()
  for (const f of ((frequencias || []) as FrequenciaLinha[])) {
    mapaFreq.set(f.participante_id, f)
  }

  const inscricoesLinhas = (inscricoes || []) as unknown as InscricaoItem[]

  const inscritosLista = inscricoesLinhas.map((i) => {
    const freq = mapaFreq.get(i.participante_id)
    return {
      participanteId: i.participante_id,
      nome: i.participantes?.nome ?? 'Sem nome',
      presente: freq ? freq.presente : null,
      justificada: freq ? freq.justificada : false,
      motivoJustificativa: freq ? freq.motivo_justificativa : null,
      frequenciaId: freq ? freq.id : null,
    }
  })

  return {
    id: chamada.id,
    turmaId: chamada.turma_id,
    dataEncontro: chamada.data_encontro,
    abertaPor: chamada.aberta_por,
    abertaEm: chamada.aberta_em,
    turma: chamada.turmas ? { id: chamada.turmas.id, atividade: chamada.turmas.atividade } : undefined,
    inscritos: inscritosLista,
  }
})
