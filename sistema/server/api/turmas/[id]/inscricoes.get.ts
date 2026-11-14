import type { InscricaoResposta } from '~/types/contratos'

type InscricaoConsulta = {
  id: string
  turma_id: string
  participante_id: string
  data_inscricao: string
  situacao: string
  participantes: {
    id: string
    nome: string
  } | null
}

export default defineEventHandler(async (event): Promise<InscricaoResposta[]> => {
  await exigirOperacao(event, 'consultar_participante')
  const turmaId = getRouterParam(event, 'id')
  if (!turmaId) {
    throw createError({ statusCode: 400, statusMessage: 'ID da turma obrigatório.' })
  }

  const cliente = await dbUsuario(event)
  const { data, error } = await cliente
    .from('inscricoes')
    .select(`
      id,
      turma_id,
      participante_id,
      data_inscricao,
      situacao,
      participantes (
        id,
        nome
      )
    `)
    .eq('turma_id', turmaId)
    .eq('situacao', 'ativa')
    .order('data_inscricao', { ascending: true })

  if (error) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível consultar as inscrições.' })
  }

  const linhas = (data || []) as unknown as InscricaoConsulta[]

  return linhas.map(i => ({
    id: i.id,
    turmaId: i.turma_id,
    participanteId: i.participante_id,
    dataInscricao: i.data_inscricao,
    situacao: i.situacao,
    participante: i.participantes ? { id: i.participantes.id, nome: i.participantes.nome } : undefined,
  }))
})
