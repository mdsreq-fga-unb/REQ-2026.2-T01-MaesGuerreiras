import type { ParticipanteResposta } from '~/types/contratos'

type ParticipanteConsulta = {
  id: string
  nome: string
  data_nascimento: string
  telefone: string | null
  observacoes: string | null
  situacao: string
  data_cadastro: string
  familia_id: string | null
  responsavel_legal: string | null
  motivo_ausencia_responsavel: string | null
  titular_consentimento_id: string | null
  familias: {
    id: string
    nome_responsavel: string
  } | null
  inscricoes: Array<{
    turma_id: string
    situacao: string
    turmas: {
      id: string
      atividade: string
    } | null
  }>
}

export default defineEventHandler(async (event): Promise<ParticipanteResposta[]> => {
  const t0 = performance.now()
  await exigirOperacao(event, 'consultar_participante')
  const query = getQuery(event)
  const nome = typeof query.nome === 'string' ? query.nome.trim() : ''
  const familiaId = typeof query.familiaId === 'string' ? query.familiaId.trim() : ''
  const turmaId = typeof query.turmaId === 'string' ? query.turmaId.trim() : ''

  const cliente = await dbUsuario(event)

  let consulta = cliente
    .from('participantes')
    .select(`
      id,
      nome,
      data_nascimento,
      telefone,
      observacoes,
      situacao,
      data_cadastro,
      familia_id,
      responsavel_legal,
      motivo_ausencia_responsavel,
      titular_consentimento_id,
      familias (
        id,
        nome_responsavel
      ),
      inscricoes (
        turma_id,
        situacao,
        turmas (
          id,
          atividade
        )
      )
    `)
    .order('nome', { ascending: true })

  if (nome) {
    consulta = consulta.ilike('nome', `%${nome}%`)
  }
  if (familiaId) {
    consulta = consulta.eq('familia_id', familiaId)
  }

  const { data, error } = await consulta
  if (error) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível consultar participantes.' })
  }

  const linhas = (data || []) as unknown as ParticipanteConsulta[]

  let resultados: ParticipanteResposta[] = linhas.map((p) => {
    const turmasInscritas = (p.inscricoes || [])
      .filter(i => i.situacao === 'ativa' && i.turmas)
      .map(i => ({
        id: i.turmas!.id,
        atividade: i.turmas!.atividade,
      }))

    return {
      id: p.id,
      nome: p.nome,
      dataNascimento: p.data_nascimento,
      telefone: p.telefone,
      observacoes: p.observacoes,
      situacao: p.situacao,
      dataCadastro: p.data_cadastro,
      familiaId: p.familia_id,
      familia: p.familias ? { id: p.familias.id, nomeResponsavel: p.familias.nome_responsavel } : null,
      responsavelLegal: p.responsavel_legal,
      motivoAusenciaResponsavel: p.motivo_ausencia_responsavel,
      titularConsentimentoId: p.titular_consentimento_id,
      turmas: turmasInscritas,
    }
  })

  // Se filtrado por turma/atividade (RF19 / CA-RF19-02)
  if (turmaId) {
    resultados = resultados.filter(p => p.turmas?.some(t => t.id === turmaId))
  }

  const duracao = Math.round(performance.now() - t0)
  setHeader(event, 'Server-Timing', `busca;dur=${duracao}`)

  return resultados
})
