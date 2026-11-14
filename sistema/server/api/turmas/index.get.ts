import type { TurmaResposta } from '~/types/contratos'

type TurmaConsulta = {
  id: string
  atividade: string
  data_inicio: string
  data_termino: string
  dias_semana: string[]
  horario: string
  vagas: number
  inscricoes: Array<{
    id: string
    situacao: string
  }>
}

export default defineEventHandler(async (event): Promise<TurmaResposta[]> => {
  await exigirOperacao(event, 'consultar_participante')
  const cliente = await dbUsuario(event)

  const { data: turmas, error } = await cliente
    .from('turmas')
    .select(`
      id,
      atividade,
      data_inicio,
      data_termino,
      dias_semana,
      horario,
      vagas,
      inscricoes (
        id,
        situacao
      )
    `)
    .order('data_inicio', { ascending: false })

  if (error) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível consultar as turmas.' })
  }

  const linhas = (turmas || []) as unknown as TurmaConsulta[]

  return linhas.map((t) => {
    const ativas = (t.inscricoes || []).filter(i => i.situacao === 'ativa').length
    return {
      id: t.id,
      atividade: t.atividade,
      dataInicio: t.data_inicio,
      dataTermino: t.data_termino,
      diasSemana: t.dias_semana,
      horario: t.horario,
      vagas: t.vagas,
      totalInscritos: ativas,
    }
  })
})
