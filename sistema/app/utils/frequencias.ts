import { dataIsoValida, type FalhaValidacao } from './familias'
import { ehCoordenacao, type Perfil } from './perfis'

export type RegistroFrequenciaItem = {
  participanteId: string
  presente: boolean
}

export type ChamadaAberturaEntrada = {
  turmaId?: string
  dataEncontro?: string
}

export type FrequenciaRegistroEntrada = {
  chamadaId?: string
  registros?: RegistroFrequenciaItem[]
}

export type JustificativaEntrada = {
  motivo?: string
}

export type CorrecaoFrequenciaEntrada = {
  presente: boolean
  justificada?: boolean
  motivoJustificativa?: string | null
  motivoCorrecao?: string | null
}

export type AlteracaoFrequenciaItem = {
  campo: string
  valorAnterior: string | null
  valorNovo: string | null
  motivo?: string | null
}

export function validarAberturaChamada(
  entrada: ChamadaAberturaEntrada | null | undefined,
  dataHojeIso: string = new Date().toISOString().slice(0, 10),
): FalhaValidacao | null {
  if (!entrada || typeof entrada !== 'object') {
    return { campo: 'turmaId', mensagem: 'Informe os dados da chamada.' }
  }
  if (!entrada.turmaId?.trim()) {
    return { campo: 'turmaId', mensagem: 'Informe a turma.' }
  }
  if (!dataIsoValida(entrada.dataEncontro)) {
    return { campo: 'dataEncontro', mensagem: 'Informe a data do encontro no formato AAAA-MM-DD.' }
  }
  // RN15: A chamada só é aberta na data do encontro
  if (entrada.dataEncontro !== dataHojeIso) {
    return {
      campo: 'dataEncontro',
      mensagem: 'A chamada só pode ser aberta na data do encontro (RN15).',
    }
  }
  return null
}

export function validarRegistroFrequencia(
  entrada: FrequenciaRegistroEntrada | null | undefined,
  inscritosTurmaIds: Set<string> | string[],
): FalhaValidacao | null {
  if (!entrada || typeof entrada !== 'object') {
    return { campo: 'chamadaId', mensagem: 'Informe os dados da frequência.' }
  }
  if (!entrada.chamadaId?.trim()) {
    return { campo: 'chamadaId', mensagem: 'Informe a chamada.' }
  }
  if (!Array.isArray(entrada.registros) || entrada.registros.length === 0) {
    return { campo: 'registros', mensagem: 'Informe ao menos um registro de presença ou ausência.' }
  }

  const inscritosSet = inscritosTurmaIds instanceof Set ? inscritosTurmaIds : new Set(inscritosTurmaIds)

  for (const reg of entrada.registros) {
    if (!reg.participanteId?.trim() || typeof reg.presente !== 'boolean') {
      return { campo: 'registros', mensagem: 'Registro de frequência inválido.' }
    }
    // CA-RF28-03: Não é possível registrar frequência para quem não consta na lista de inscritos
    if (!inscritosSet.has(reg.participanteId)) {
      return {
        campo: 'participanteId',
        mensagem: 'Não é possível registrar frequência para participante que não consta na lista de inscritos da turma (CA-RF28-03).',
      }
    }
  }

  return null
}

export function validarJustificativaFalta(entrada: JustificativaEntrada | null | undefined): FalhaValidacao | null {
  if (!entrada || typeof entrada !== 'object' || !entrada.motivo?.trim()) {
    // CA-RF29-03: Se nenhum motivo for informado, a justificativa não é salva
    return {
      campo: 'motivo',
      mensagem: 'Informe o motivo da justificativa de falta (RN16).',
    }
  }
  return null
}

export function validarCorrecaoFrequencia(
  perfil: Perfil,
  usuarioId: string,
  frequenciaAtual: {
    registradoPor: string
    registradoEm: string
    presente: boolean
    justificada: boolean
    motivoJustificativa?: string | null
  },
  dataEncontroChamada: string,
  entrada: CorrecaoFrequenciaEntrada,
  dataHojeIso: string = new Date().toISOString().slice(0, 10),
): { falha: FalhaValidacao | null, alteracoes: AlteracaoFrequenciaItem[] } {
  // RN17: Voluntário só corrige a chamada que ele próprio fez, até o fim do mesmo dia
  if (!ehCoordenacao(perfil)) {
    if (frequenciaAtual.registradoPor !== usuarioId) {
      return {
        falha: {
          campo: 'perfil',
          mensagem: 'Voluntário só pode corrigir chamada realizada por ele próprio (RN17).',
        },
        alteracoes: [],
      }
    }

    const dataRegistro = frequenciaAtual.registradoEm.slice(0, 10)
    if (dataRegistro !== dataHojeIso && dataEncontroChamada !== dataHojeIso) {
      return {
        falha: {
          campo: 'prazo',
          mensagem: 'Voluntário só pode realizar correções até o fim do mesmo dia do registro (RN17).',
        },
        alteracoes: [],
      }
    }
  }
  else {
    // Coordenação exige motivo (CA-RF30-04, RN17)
    if (!entrada.motivoCorrecao?.trim()) {
      return {
        falha: {
          campo: 'motivoCorrecao',
          mensagem: 'A Coordenação deve informar o motivo da correção (RN17 / CA-RF30-04).',
        },
        alteracoes: [],
      }
    }
  }

  const alteracoes: AlteracaoFrequenciaItem[] = []

  if (frequenciaAtual.presente !== entrada.presente) {
    alteracoes.push({
      campo: 'presente',
      valorAnterior: String(frequenciaAtual.presente),
      valorNovo: String(entrada.presente),
      motivo: entrada.motivoCorrecao,
    })
  }

  const novaJustificada = entrada.justificada ?? false
  if (frequenciaAtual.justificada !== novaJustificada) {
    alteracoes.push({
      campo: 'justificada',
      valorAnterior: String(frequenciaAtual.justificada),
      valorNovo: String(novaJustificada),
      motivo: entrada.motivoCorrecao,
    })
  }

  const novoMotivoJustificativa = entrada.motivoJustificativa ?? null
  if ((frequenciaAtual.motivoJustificativa ?? null) !== novoMotivoJustificativa) {
    alteracoes.push({
      campo: 'motivo_justificativa',
      valorAnterior: frequenciaAtual.motivoJustificativa ?? null,
      valorNovo: novoMotivoJustificativa,
      motivo: entrada.motivoCorrecao,
    })
  }

  return { falha: null, alteracoes }
}
