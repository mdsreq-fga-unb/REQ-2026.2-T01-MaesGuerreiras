import type { Perfil } from '../utils/perfis'
import type { AutorizacaoImagemInformada, ConsentimentoInformado, PapelTitular } from '../utils/consentimentos'
import type { TipoDoador, UnidadeMedida } from '../utils/doacoes'

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
