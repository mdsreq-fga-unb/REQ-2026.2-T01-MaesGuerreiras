import type { TurmaCorpo, TurmaResposta } from '~/types/contratos'
import { validarTurma } from '~/utils/turmas'

export default defineEventHandler(async (event): Promise<TurmaResposta> => {
  // CA-RF20-04: Exclusivo da Coordenação
  const sessao = await exigirOperacao(event, 'cadastrar_turma')
  const corpo = await readBody<TurmaCorpo>(event)

  const falha = validarTurma(corpo)
  if (falha) {
    throw falhaValidacao(falha.campo, falha.mensagem)
  }

  const cliente = await dbUsuario(event)

  const { data, error } = await cliente
    .from('turmas')
    .insert({
      atividade: corpo.atividade.trim(),
      data_inicio: corpo.dataInicio,
      data_termino: corpo.dataTermino,
      dias_semana: corpo.diasSemana,
      horario: corpo.horario.trim(),
      vagas: corpo.vagas,
      criado_por: sessao.id,
    })
    .select()
    .single()

  if (error || !data) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível cadastrar a turma.' })
  }

  return {
    id: data.id,
    atividade: data.atividade,
    dataInicio: data.data_inicio,
    dataTermino: data.data_termino,
    diasSemana: data.dias_semana,
    horario: data.horario,
    vagas: data.vagas,
    totalInscritos: 0,
  }
})
