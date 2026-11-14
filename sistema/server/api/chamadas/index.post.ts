import type { AbrirChamadaCorpo, ChamadaResposta } from '~/types/contratos'
import type { Database } from '~/types/database.types'
import { validarAberturaChamada } from '~/utils/frequencias'

type ChamadaLinha = Database['public']['Tables']['chamadas']['Row']
type FrequenciaLinha = Database['public']['Tables']['frequencias']['Row']
type InscricaoItem = {
  participante_id: string
  participantes: {
    id: string
    nome: string
  } | null
}

export default defineEventHandler(async (event): Promise<ChamadaResposta> => {
  const sessao = await exigirOperacao(event, 'abrir_chamada')
  const corpo = await readBody<AbrirChamadaCorpo>(event)

  const hojeIso = new Date().toISOString().slice(0, 10)
  const falha = validarAberturaChamada(corpo, hojeIso)
  if (falha) {
    throw falhaValidacao(falha.campo, falha.mensagem)
  }

  const cliente = await dbUsuario(event)

  // 1. Verifica se turma existe
  const { data: turma, error: erroTurma } = await cliente
    .from('turmas')
    .select('id, atividade')
    .eq('id', corpo.turmaId)
    .single()

  if (erroTurma || !turma) {
    throw falhaValidacao('turmaId', 'Turma não encontrada.')
  }

  // 2. Tenta recuperar chamada existente ou cria nova
  let chamada: ChamadaLinha
  const { data: existente } = await cliente
    .from('chamadas')
    .select('*')
    .eq('turma_id', corpo.turmaId)
    .eq('data_encontro', corpo.dataEncontro)
    .maybeSingle()

  if (existente) {
    chamada = existente
  }
  else {
    const { data: nova, error: erroNova } = await cliente
      .from('chamadas')
      .insert({
        turma_id: corpo.turmaId,
        data_encontro: corpo.dataEncontro,
        aberta_por: sessao.id,
      })
      .select()
      .single()

    if (erroNova || !nova) {
      if (erroNova?.message?.includes('data do encontro')) {
        throw falhaValidacao('dataEncontro', 'A chamada só pode ser aberta na data do encontro (RN15).')
      }
      throw createError({ statusCode: 500, statusMessage: 'Não foi possível abrir a chamada.' })
    }
    chamada = nova
  }

  // 3. CA-RF27-02: A chamada lista somente os participantes inscritos na turma
  const { data: inscricoes, error: erroInsc } = await cliente
    .from('inscricoes')
    .select(`
      participante_id,
      participantes (
        id,
        nome
      )
    `)
    .eq('turma_id', corpo.turmaId)
    .eq('situacao', 'ativa')

  if (erroInsc) {
    throw createError({ statusCode: 500, statusMessage: 'Erro ao carregar participantes da chamada.' })
  }

  // 4. Carrega frequências já registradas para esta chamada (se houver)
  const { data: frequencias } = await cliente
    .from('frequencias')
    .select('*')
    .eq('chamada_id', chamada.id)

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
    turma: { id: turma.id, atividade: turma.atividade },
    inscritos: inscritosLista,
  }
})
