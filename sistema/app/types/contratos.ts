import type { Perfil } from '../utils/perfis'
import type { AutorizacaoImagemInformada, ConsentimentoInformado, PapelTitular } from '../utils/consentimentos'
import type { TipoDoador, UnidadeMedida } from '../utils/doacoes'
import type { DestinatarioTipo } from '../utils/destinacoes'

export type ErroApi = {
  statusMessage: string
  data?: { campo?: string, existentes?: DoadorResposta[] }
}

export type EntrarCorpo = {
  email: string
  senha: string
}

export type SessaoResposta = {
  usuario: { id: string, email: string | undefined }
  perfil: Perfil | null
}

export type CadastrarUsuarioCorpo = {
  nome: string
  email: string
  senha: string
  perfil: Perfil
}

export type UsuarioResposta = {
  id: string
  nome: string
  email: string | null
  perfil: Perfil
  criadoEm: string
}

export type AtribuirPerfilCorpo = {
  perfil: Perfil
}

export type RegistrarConsentimentosCorpo = {
  titular: { nome: string, papel: PapelTitular, familiaId?: string | null }
  consentimentos: ConsentimentoInformado[]
  imagem: AutorizacaoImagemInformada
}

export type ConsentimentoResposta = {
  titularId: string
  nome: string
  papel: PapelTitular
  consentimentos: Array<{
    finalidade: ConsentimentoInformado['finalidade']
    concedido: boolean
    registradoEm: string
  }>
  imagem: {
    autorizado: boolean
    meios: AutorizacaoImagemInformada['meios']
    revogacao: boolean
    registradoEm: string
  } | null
}

export type CategoriaCorpo = {
  nome: string
  unidade: UnidadeMedida
}

export type CategoriaResposta = {
  id: string
  nome: string
  unidade: UnidadeMedida
}

export type DoadorCorpo = {
  nome: string
  tipo: TipoDoador
  telefone?: string | null
  email?: string | null
  forcar?: boolean
}

export type DoadorResposta = {
  id: string
  nome: string
  tipo: TipoDoador
  telefone: string | null
  email: string | null
}

export type RecebimentoCorpo = {
  categoriaId: string
  quantidade: number
  data: string
  doadorId: string
}

export type SaldoResposta = {
  categoriaId: string
  nome: string
  unidade: UnidadeMedida
  saldo: number
}

// Sprint 7: RF10 Destinação
export type DestinacaoCorpo = {
  categoriaId: string
  quantidade: number
  data: string
  tipoDestinatario: DestinatarioTipo
  familiaId?: string | null
  turmaId?: string | null
}

// Sprint 7: RF14 Famílias
export type FamiliaCorpo = {
  nomeResponsavel: string
  telefone: string
  logradouro: string
  complemento?: string | null
  cidade: string
  numeroMoradores?: number | null
  observacoes?: string | null
  titularConsentimentoId?: string | null
}

export type FamiliaResposta = {
  id: string
  nomeResponsavel: string
  telefone: string
  logradouro: string
  complemento: string | null
  cidade: string
  numeroMoradores: number | null
  observacoes: string | null
  situacao: string
  dataCadastro: string
  titularConsentimentoId: string | null
}

// Sprint 7: RF16, RF18, RF19 Participantes
export type ParticipanteCorpo = {
  nome: string
  dataNascimento: string
  telefone?: string | null
  observacoes?: string | null
  titularConsentimentoId?: string | null
}

export type VinculoFamiliarCorpo = {
  familiaId: string
  responsavelLegal?: string | null
  motivoAusenciaResponsavel?: string | null
}

export type ParticipanteResposta = {
  id: string
  nome: string
  dataNascimento: string
  telefone: string | null
  observacoes: string | null
  situacao: string
  dataCadastro: string
  familiaId: string | null
  familia?: { id: string, nomeResponsavel: string } | null
  responsavelLegal: string | null
  motivoAusenciaResponsavel: string | null
  titularConsentimentoId: string | null
  turmas?: Array<{ id: string, atividade: string }>
}

// Sprint 7: RF20, RF23 Turmas e Inscrições
export type TurmaCorpo = {
  atividade: string
  dataInicio: string
  dataTermino: string
  diasSemana: string[]
  horario: string
  vagas: number
}

export type TurmaResposta = {
  id: string
  atividade: string
  dataInicio: string
  dataTermino: string
  diasSemana: string[]
  horario: string
  vagas: number
  totalInscritos: number
}

export type InscricaoCorpo = {
  participanteId: string
}

export type InscricaoResposta = {
  id: string
  turmaId: string
  participanteId: string
  dataInscricao: string
  situacao: string
  participante?: { id: string, nome: string }
}

// Sprint 7: RF27, RF28, RF29, RF30, RF31 Chamadas e Frequências
export type AbrirChamadaCorpo = {
  turmaId: string
  dataEncontro: string
}

export type ChamadaResposta = {
  id: string
  turmaId: string
  dataEncontro: string
  abertaPor: string
  abertaEm: string
  turma?: { id: string, atividade: string }
  inscritos: Array<{
    participanteId: string
    nome: string
    presente: boolean | null
    justificada: boolean
    motivoJustificativa: string | null
    frequenciaId?: string | null
  }>
}

export type RegistrarFrequenciaCorpo = {
  registros: Array<{
    participanteId: string
    presente: boolean
  }>
}

export type JustificarFaltaCorpo = {
  motivo: string
}

export type CorrigirFrequenciaCorpo = {
  presente: boolean
  justificada?: boolean
  motivoJustificativa?: string | null
  motivoCorrecao?: string | null
}

export type FrequenciaHistoricoItemResposta = {
  frequenciaId: string
  chamadaId: string
  turmaId: string
  atividade: string
  dataEncontro: string
  presente: boolean
  justificada: boolean
  motivoJustificativa: string | null
  registradoEm: string
  atualizadoEm: string
}
