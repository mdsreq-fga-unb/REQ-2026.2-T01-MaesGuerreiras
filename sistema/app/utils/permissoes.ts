import { ehCoordenacao, type Perfil } from './perfis'

// Recorte da tabela 8.4 para os RFs desta sprint. Visitante não autentica.
export type Operacao
  = | 'cadastrar_usuario'
    | 'atribuir_perfil'
    | 'autenticar'
    | 'registrar_consentimento'
    | 'cadastrar_categoria'
    | 'cadastrar_doador'
    | 'registrar_recebimento'
    | 'registrar_saida_sintetica'
    | 'consultar_saldo'

export function pode(operacao: Operacao, perfil: Perfil | null | undefined): boolean {
  if (!perfil) return false

  switch (operacao) {
    case 'autenticar':
    case 'registrar_consentimento':
    case 'cadastrar_doador':
    case 'registrar_recebimento':
    case 'consultar_saldo':
      return true
    case 'cadastrar_usuario':
    case 'atribuir_perfil':
    case 'cadastrar_categoria':
    case 'registrar_saida_sintetica':
      return ehCoordenacao(perfil)
  }
}
