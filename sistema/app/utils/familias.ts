export type FalhaValidacao = {
  campo: string
  mensagem: string
}

export type FamiliaEntrada = {
  nomeResponsavel?: string
  telefone?: string
  logradouro?: string
  complemento?: string | null
  cidade?: string
  numeroMoradores?: number | null
  observacoes?: string | null
  titularConsentimentoId?: string | null
}

export type ParticipanteEntrada = {
  nome?: string
  dataNascimento?: string
  telefone?: string | null
  observacoes?: string | null
  titularConsentimentoId?: string | null
}

export type VinculoFamiliarEntrada = {
  participanteId?: string
  familiaId?: string
  responsavelLegal?: string | null
  motivoAusenciaResponsavel?: string | null
}

export function dataIsoValida(data: string | undefined | null): boolean {
  if (!data || !/^\d{4}-\d{2}-\d{2}$/.test(data)) {
    return false
  }
  const dataParseada = new Date(`${data}T00:00:00.000Z`)
  return !Number.isNaN(dataParseada.getTime()) && dataParseada.toISOString().slice(0, 10) === data
}

export function calcularIdade(dataNascimento: string, dataReferencia: string | Date = new Date()): number {
  const ref = typeof dataReferencia === 'string' ? new Date(`${dataReferencia}T00:00:00.000Z`) : dataReferencia
  const nasc = new Date(`${dataNascimento}T00:00:00.000Z`)
  let idade = ref.getUTCFullYear() - nasc.getUTCFullYear()
  const m = ref.getUTCMonth() - nasc.getUTCMonth()
  if (m < 0 || (m === 0 && ref.getUTCDate() < nasc.getUTCDate())) {
    idade--
  }
  return idade
}

export function validarFamilia(entrada: FamiliaEntrada | null | undefined): FalhaValidacao | null {
  if (!entrada || typeof entrada !== 'object') {
    return { campo: 'nomeResponsavel', mensagem: 'Informe os dados da família.' }
  }
  if (!entrada.nomeResponsavel?.trim()) {
    return { campo: 'nomeResponsavel', mensagem: 'Informe o nome do responsável familiar.' }
  }
  if (!entrada.telefone?.trim()) {
    return { campo: 'telefone', mensagem: 'Informe o telefone de contato.' }
  }
  if (!entrada.logradouro?.trim()) {
    return { campo: 'logradouro', mensagem: 'Informe o logradouro do endereço.' }
  }
  if (!entrada.cidade?.trim()) {
    return { campo: 'cidade', mensagem: 'Informe a cidade do endereço.' }
  }
  if (entrada.numeroMoradores !== undefined && entrada.numeroMoradores !== null) {
    if (!Number.isInteger(entrada.numeroMoradores) || entrada.numeroMoradores < 1) {
      return { campo: 'numeroMoradores', mensagem: 'O número de moradores deve ser pelo menos 1.' }
    }
  }
  return null
}

export function validarParticipante(entrada: ParticipanteEntrada | null | undefined): FalhaValidacao | null {
  if (!entrada || typeof entrada !== 'object') {
    return { campo: 'nome', mensagem: 'Informe os dados do participante.' }
  }
  if (!entrada.nome?.trim()) {
    return { campo: 'nome', mensagem: 'Informe o nome completo do participante.' }
  }
  if (!dataIsoValida(entrada.dataNascimento)) {
    return { campo: 'dataNascimento', mensagem: 'Informe uma data de nascimento válida no formato AAAA-MM-DD.' }
  }
  const hoje = new Date().toISOString().slice(0, 10)
  if (entrada.dataNascimento! > hoje) {
    return { campo: 'dataNascimento', mensagem: 'A data de nascimento não pode estar no futuro.' }
  }
  return null
}

export function validarVinculoFamiliar(
  entrada: VinculoFamiliarEntrada | null | undefined,
  dataNascimentoParticipante: string,
  dataReferencia: string | Date = new Date(),
): FalhaValidacao | null {
  if (!entrada || typeof entrada !== 'object') {
    return { campo: 'participanteId', mensagem: 'Informe os dados do vínculo familiar.' }
  }
  if (!entrada.participanteId?.trim()) {
    return { campo: 'participanteId', mensagem: 'Informe o participante.' }
  }
  if (!entrada.familiaId?.trim()) {
    return { campo: 'familiaId', mensagem: 'Informe a família para o vínculo.' }
  }

  const idade = calcularIdade(dataNascimentoParticipante, dataReferencia)
  if (idade < 18) {
    const temResponsavel = Boolean(entrada.responsavelLegal?.trim())
    const temMotivo = Boolean(entrada.motivoAusenciaResponsavel?.trim())
    if (!temResponsavel && !temMotivo) {
      return {
        campo: 'responsavelLegal',
        mensagem: 'Participante menor de 18 anos exige responsável legal ou motivo de exceção registrado (RN08).',
      }
    }
  }

  return null
}
