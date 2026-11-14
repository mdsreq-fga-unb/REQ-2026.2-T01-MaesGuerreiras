import type { RegistrarFrequenciaCorpo } from '~/types/contratos'
import { validarRegistroFrequencia } from '~/utils/frequencias'

type InscricaoItem = {
  participante_id: string
}

export default defineEventHandler(async (event) => {
  const sessao = await exigirOperacao(event, 'registrar_frequencia')
  const chamadaId = getRouterParam(event, 'id')
  if (!chamadaId) {
    throw createError({ statusCode: 400, statusMessage: 'ID da chamada obrigatório.' })
  }

  const corpo = await readBody<RegistrarFrequenciaCorpo>(event)
  const cliente = await dbUsuario(event)

  // 1. Busca chamada
  const { data: chamada, error: erroChamada } = await cliente
    .from('chamadas')
    .select('id, turma_id')
    .eq('id', chamadaId)
    .single()

  if (erroChamada || !chamada) {
    throw createError({ statusCode: 404, statusMessage: 'Chamada não encontrada.' })
  }

  // 2. Busca lista de inscritos ativos na turma
  const { data: inscricoes, error: erroInsc } = await cliente
    .from('inscricoes')
    .select('participante_id')
    .eq('turma_id', chamada.turma_id)
    .eq('situacao', 'ativa')

  if (erroInsc) {
    throw createError({ statusCode: 500, statusMessage: 'Erro ao verificar inscritos da turma.' })
  }

  const inscricoesLinhas = (inscricoes || []) as unknown as InscricaoItem[]
  const inscritosIds = new Set<string>(inscricoesLinhas.map(i => i.participante_id))

  // 3. Valida com a regra CA-RF28-03
  const falha = validarRegistroFrequencia({ chamadaId, registros: corpo.registros }, inscritosIds)
  if (falha) {
    throw falhaValidacao(falha.campo, falha.mensagem)
  }

  // 4. Salva os registros em frequencias
  const registrosParaSalvar = corpo.registros.map(r => ({
    chamada_id: chamadaId,
    participante_id: r.participanteId,
    presente: r.presente,
    registrado_por: sessao.id,
  }))

  const { data: salvos, error: erroSalvar } = await cliente
    .from('frequencias')
    .upsert(registrosParaSalvar, { onConflict: 'chamada_id,participante_id' })
    .select()

  if (erroSalvar) {
    if (erroSalvar.message.includes('não está inscrito na turma')) {
      throw falhaValidacao('participanteId', 'Não é possível registrar frequência para participante que não consta na lista de inscritos da turma (CA-RF28-03).')
    }
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível registrar a frequência.' })
  }

  return { sucesso: true, salvos: salvos?.length ?? 0 }
})
