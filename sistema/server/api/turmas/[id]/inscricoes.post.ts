import type { InscricaoCorpo, InscricaoResposta } from '~/types/contratos'
import type { Database } from '~/types/database.types'
import { validarInscricao } from '~/utils/turmas'

type InscricaoLinha = Database['public']['Tables']['inscricoes']['Row']

export default defineEventHandler(async (event): Promise<InscricaoResposta> => {
  const sessao = await exigirOperacao(event, 'inscrever_participante')
  const turmaId = getRouterParam(event, 'id')
  if (!turmaId) {
    throw createError({ statusCode: 400, statusMessage: 'ID da turma obrigatório.' })
  }

  const corpo = await readBody<InscricaoCorpo>(event)
  if (!corpo?.participanteId?.trim()) {
    throw falhaValidacao('participanteId', 'Informe o participante para inscrição.')
  }

  const cliente = await dbUsuario(event)

  // 1. Busca participante
  const { data: participante, error: erroPart } = await cliente
    .from('participantes')
    .select('id, nome, situacao')
    .eq('id', corpo.participanteId)
    .single()

  if (erroPart || !participante) {
    throw falhaValidacao('participanteId', 'Participante não encontrado.')
  }

  // 2. Busca turma
  const { data: turma, error: erroTurma } = await cliente
    .from('turmas')
    .select('id, vagas')
    .eq('id', turmaId)
    .single()

  if (erroTurma || !turma) {
    throw falhaValidacao('turmaId', 'Turma não encontrada.')
  }

  // 3. Conta inscritos ativos
  const { count: totalInscritos, error: erroCount } = await cliente
    .from('inscricoes')
    .select('*', { count: 'exact', head: true })
    .eq('turma_id', turmaId)
    .eq('situacao', 'ativa')

  if (erroCount) {
    throw createError({ statusCode: 500, statusMessage: 'Erro ao verificar ocupação de vagas.' })
  }

  // 4. Valida regras RN12
  const falha = validarInscricao(
    { turmaId, participanteId: corpo.participanteId },
    participante,
    turma,
    totalInscritos ?? 0,
  )
  if (falha) {
    throw falhaValidacao(falha.campo, falha.mensagem)
  }

  // 5. Verifica se já está inscrito
  const { data: jaInscrito } = await cliente
    .from('inscricoes')
    .select('id, situacao')
    .eq('turma_id', turmaId)
    .eq('participante_id', corpo.participanteId)
    .maybeSingle()

  if (jaInscrito && jaInscrito.situacao === 'ativa') {
    throw falhaValidacao('participanteId', 'O participante já está inscrito nesta turma.')
  }

  let inscricaoData: InscricaoLinha

  if (jaInscrito && jaInscrito.situacao !== 'ativa') {
    // Reativação
    const { data: reativada, error: erroReat } = await cliente
      .from('inscricoes')
      .update({
        situacao: 'ativa',
        motivo_cancelamento: null,
        data_inscricao: new Date().toISOString().slice(0, 10),
      })
      .eq('id', jaInscrito.id)
      .select()
      .single()

    if (erroReat || !reativada) {
      throw createError({ statusCode: 500, statusMessage: 'Não foi possível reativar a inscrição.' })
    }
    inscricaoData = reativada
  }
  else {
    const { data: nova, error: erroNova } = await cliente
      .from('inscricoes')
      .insert({
        turma_id: turmaId,
        participante_id: corpo.participanteId,
        situacao: 'ativa',
        criado_por: sessao.id,
      })
      .select()
      .single()

    if (erroNova || !nova) {
      if (erroNova?.message?.includes('turma cheia')) {
        throw falhaValidacao('turmaId', 'A turma está cheia. Não há vagas disponíveis no momento.')
      }
      if (erroNova?.message?.includes('participante inativo')) {
        throw falhaValidacao('participanteId', 'Participante inativo não pode ser inscrito em turma (RN12).')
      }
      throw createError({ statusCode: 500, statusMessage: erroNova?.message || 'Não foi possível realizar a inscrição.' })
    }
    inscricaoData = nova
  }

  return {
    id: inscricaoData.id,
    turmaId: inscricaoData.turma_id,
    participanteId: inscricaoData.participante_id,
    dataInscricao: inscricaoData.data_inscricao,
    situacao: inscricaoData.situacao,
    participante: { id: participante.id, nome: participante.nome },
  }
})
