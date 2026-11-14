import { ehCoordenacao, type Perfil } from './perfis'

// Recorte da tabela 8.4 para os RFs implementados. Visitante não autentica.
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
    | 'cadastrar_familia'
    | 'cadastrar_participante'
    | 'vincular_participante'
    | 'consultar_participante'
    | 'cadastrar_turma'
    | 'inscrever_participante'
    | 'registrar_destinacao'
    | 'abrir_chamada'
    | 'registrar_frequencia'
    | 'justificar_falta'
    | 'corrigir_frequencia'
    | 'consultar_frequencia'

export function pode(operacao: Operacao, perfil: Perfil | null | undefined): boolean {
  if (!perfil) return false

  switch (operacao) {
    case 'autenticar':
    case 'registrar_consentimento':
    case 'cadastrar_doador':
    case 'registrar_recebimento':
    case 'consultar_saldo':
    case 'cadastrar_familia':
    case 'cadastrar_participante':
    case 'vincular_participante':
    case 'consultar_participante':
    case 'inscrever_participante':
    case 'registrar_destinacao':
    case 'abrir_chamada':
    case 'registrar_frequencia':
    case 'justificar_falta':
    case 'corrigir_frequencia':
    case 'consultar_frequencia':
      return true

    case 'cadastrar_usuario':
    case 'atribuir_perfil':
    case 'cadastrar_categoria':
    case 'registrar_saida_sintetica':
    case 'cadastrar_turma':
      return ehCoordenacao(perfil)
  }
}
