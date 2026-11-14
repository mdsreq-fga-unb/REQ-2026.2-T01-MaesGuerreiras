import { dataIsoValida, type FalhaValidacao } from './familias'

export type TurmaEntrada = {
  atividade?: string
  dataInicio?: string
  dataTermino?: string
  diasSemana?: string[]
  horario?: string
  vagas?: number
}

export type InscricaoEntrada = {
  turmaId?: string
  participanteId?: string
}

export function validarTurma(entrada: TurmaEntrada | null | undefined): FalhaValidacao | null {
  if (!entrada || typeof entrada !== 'object') {
    return { campo: 'atividade', mensagem: 'Informe os dados da turma.' }
  }
  if (!entrada.atividade?.trim()) {
    return { campo: 'atividade', mensagem: 'Informe a atividade da turma.' }
  }
  if (!dataIsoValida(entrada.dataInicio)) {
    return { campo: 'dataInicio', mensagem: 'Informe uma data de início válida no formato AAAA-MM-DD.' }
  }
  if (!dataIsoValida(entrada.dataTermino)) {
    return { campo: 'dataTermino', mensagem: 'Informe uma data de término válida no formato AAAA-MM-DD.' }
  }
  // RN09: término deve ser posterior ao início
  if (entrada.dataTermino! <= entrada.dataInicio!) {
    return {
      campo: 'dataTermino',
      mensagem: 'A data de término da turma deve ser posterior à data de início (RN09).',
    }
  }
  if (!Array.isArray(entrada.diasSemana) || entrada.diasSemana.length === 0 || entrada.diasSemana.some(d => !d?.trim())) {
    return { campo: 'diasSemana', mensagem: 'Informe ao menos um dia da semana para os encontros.' }
  }
  if (!entrada.horario?.trim()) {
    return { campo: 'horario', mensagem: 'Informe o horário dos encontros.' }
  }
  if (entrada.vagas === undefined || entrada.vagas === null || !Number.isInteger(entrada.vagas) || entrada.vagas <= 0) {
    return { campo: 'vagas', mensagem: 'Informe uma quantidade de vagas válida (maior que zero).' }
  }
  return null
}

export function validarInscricao(
  entrada: InscricaoEntrada | null | undefined,
  participante: { situacao: string } | null | undefined,
  turma: { vagas: number } | null | undefined,
  totalInscritosAtivos: number,
): FalhaValidacao | null {
  if (!entrada || typeof entrada !== 'object') {
    return { campo: 'turmaId', mensagem: 'Informe os dados da inscrição.' }
  }
  if (!entrada.turmaId?.trim()) {
    return { campo: 'turmaId', mensagem: 'Informe a turma.' }
  }
  if (!entrada.participanteId?.trim()) {
    return { campo: 'participanteId', mensagem: 'Informe o participante.' }
  }
  if (!participante) {
    return { campo: 'participanteId', mensagem: 'Participante não encontrado.' }
  }
  // RN12: Só participante ativo é inscrito
  if (participante.situacao !== 'ativo') {
    return {
      campo: 'participanteId',
      mensagem: 'Participante inativo não pode ser inscrito em turma (RN12).',
    }
  }
  if (!turma) {
    return { campo: 'turmaId', mensagem: 'Turma não encontrada.' }
  }
  // RN12: Só em turma com vaga
  if (totalInscritosAtivos >= turma.vagas) {
    return {
      campo: 'turmaId',
      mensagem: `A turma está cheia. Não há vagas disponíveis no momento (${totalInscritosAtivos}/${turma.vagas}).`,
    }
  }
  return null
}
