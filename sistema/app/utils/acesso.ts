import { ehPerfilValido, type Perfil } from './perfis'
import { senhaAtendeRnf15 } from './rnf15'

export type FalhaCampo = {
  campo: string
  mensagem: string
}

export function idDoUsuarioNasClaims(claims: { sub?: unknown } | null | undefined): string | null {
  return typeof claims?.sub === 'string' && claims.sub.length > 0 ? claims.sub : null
}

export type CadastroUsuario = {
  nome: string
  email: string
  senha: string
  perfil: unknown
}

export function validarCadastroUsuario(entrada: CadastroUsuario | null | undefined): FalhaCampo | null {
  if (!entrada || typeof entrada !== 'object') {
    return { campo: 'nome', mensagem: 'Informe os dados do usuário.' }
  }
  if (!entrada.nome?.trim()) {
    return { campo: 'nome', mensagem: 'Informe o nome.' }
  }
  if (!entrada.email?.trim()) {
    return { campo: 'email', mensagem: 'Informe o e-mail.' }
  }
  if (!senhaAtendeRnf15(entrada.senha ?? '')) {
    return { campo: 'senha', mensagem: 'A senha deve ter pelo menos 8 caracteres.' }
  }
  if (!ehPerfilValido(entrada.perfil)) {
    return { campo: 'perfil', mensagem: 'Perfil deve ser voluntario ou coordenacao.' }
  }
  return null
}

export function validarAtribuicaoPerfil(perfil: unknown): perfil is Perfil {
  return ehPerfilValido(perfil)
}

export function autenticacaoIndisponivel(error: { message?: string, status?: number, name?: string } | null | undefined) {
  if (!error) {
    return false
  }

  const mensagem = (error.message ?? '').toLowerCase()
  return error.name === 'AuthRetryableFetchError'
    || error.status === 0
    || (typeof error.status === 'number' && error.status >= 500)
    || mensagem.includes('fetch failed')
    || mensagem.includes('failed to fetch')
    || mensagem.includes('econnrefused')
}
