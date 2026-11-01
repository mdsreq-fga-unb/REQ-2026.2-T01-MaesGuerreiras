export const FINALIDADES = [
  'cadastro_atendimento',
  'frequencia',
  'contato_familia',
  'relatorios_apoiadores',
] as const

export type Finalidade = (typeof FINALIDADES)[number]

export const ROTULOS_FINALIDADE: Record<Finalidade, string> = {
  cadastro_atendimento: 'Cadastro e atendimento',
  frequencia: 'Registro de frequência',
  contato_familia: 'Contato com a família',
  relatorios_apoiadores: 'Relatórios a apoiadores',
}

export const MEIOS_IMAGEM = ['site', 'redes_sociais', 'materiais_impressos'] as const

export const ROTULOS_MEIO: Record<(typeof MEIOS_IMAGEM)[number], string> = {
  site: 'Site',
  redes_sociais: 'Redes sociais',
  materiais_impressos: 'Materiais impressos',
}

export type MeioImagem = (typeof MEIOS_IMAGEM)[number]

export const PAPEIS_TITULAR = ['titular', 'responsavel_legal'] as const

export type PapelTitular = (typeof PAPEIS_TITULAR)[number]

export type ConsentimentoInformado = {
  finalidade: Finalidade
  concedido: boolean
}

export type AutorizacaoImagemInformada = {
  autorizado: boolean
  meios: MeioImagem[]
}

export type RegistroConsentimentos = {
  titular: { nome: string, papel: PapelTitular }
  consentimentos: ConsentimentoInformado[]
  imagem: AutorizacaoImagemInformada
}

export type FalhaConsentimento = {
  campo: string
  mensagem: string
}

export function ehFinalidade(valor: unknown): valor is Finalidade {
  return typeof valor === 'string' && (FINALIDADES as readonly string[]).includes(valor)
}

export function ehMeioImagem(valor: unknown): valor is MeioImagem {
  return typeof valor === 'string' && (MEIOS_IMAGEM as readonly string[]).includes(valor)
}

export function validarRegistroConsentimentos(entrada: RegistroConsentimentos | null | undefined): FalhaConsentimento | null {
  if (!entrada || typeof entrada !== 'object') {
    return { campo: 'registro', mensagem: 'Informe os dados do consentimento.' }
  }
  if (!entrada.titular?.nome?.trim()) {
    return { campo: 'titular.nome', mensagem: 'Informe o nome do titular ou responsável legal.' }
  }
  if (!PAPEIS_TITULAR.includes(entrada.titular.papel)) {
    return { campo: 'titular.papel', mensagem: 'Informe se é titular ou responsável legal.' }
  }

  if (!Array.isArray(entrada.consentimentos)
    || entrada.consentimentos.length !== FINALIDADES.length
    || entrada.consentimentos.some(item => !item || !ehFinalidade(item.finalidade) || typeof item.concedido !== 'boolean')) {
    return {
      campo: 'consentimentos',
      mensagem: 'Registre uma decisão válida para cada finalidade, sem duplicidades.',
    }
  }

  const finalidades = new Set(entrada.consentimentos.map(item => item.finalidade))
  if (finalidades.size !== FINALIDADES.length) {
    return {
      campo: 'consentimentos',
      mensagem: 'Registre uma decisão válida para cada finalidade, sem duplicidades.',
    }
  }
  for (const finalidade of FINALIDADES) {
    if (!finalidades.has(finalidade)) {
      return {
        campo: 'consentimentos',
        mensagem: `Registre o consentimento para ${finalidade}.`,
      }
    }
  }

  if (!entrada.imagem || typeof entrada.imagem.autorizado !== 'boolean' || !Array.isArray(entrada.imagem.meios)) {
    return { campo: 'imagem', mensagem: 'Informe a autorização ou recusa de uso de imagem.' }
  }

  if (entrada.imagem.autorizado) {
    const meios = entrada.imagem.meios
    if (meios.length === 0 || meios.some(meio => !ehMeioImagem(meio))) {
      return {
        campo: 'imagem.meios',
        mensagem: 'Informe ao menos um meio autorizado (site, redes sociais ou materiais impressos).',
      }
    }
  }
  else if (entrada.imagem.meios.length > 0) {
    return {
      campo: 'imagem.meios',
      mensagem: 'Não informe meios autorizados quando o uso de imagem for recusado.',
    }
  }

  return null
}

export function consentimentoVigente<T extends { finalidade: Finalidade, registradoEm: string }>(
  historico: T[],
  finalidade: Finalidade,
): T | undefined {
  return historico
    .filter(item => item.finalidade === finalidade)
    .sort((a, b) => a.registradoEm.localeCompare(b.registradoEm))
    .at(-1)
}

export function imagemVigente<T extends { registradoEm: string }>(historico: T[]): T | undefined {
  return [...historico].sort((a, b) => a.registradoEm.localeCompare(b.registradoEm)).at(-1)
}
