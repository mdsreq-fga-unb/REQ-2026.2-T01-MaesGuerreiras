import { pode, type Operacao } from './permissoes'
import type { Perfil } from './perfis'

export type ContratoServico = {
  metodo: 'GET' | 'POST' | 'PATCH'
  caminho: string
  operacao: Operacao
}

export const CONTRATOS_SERVICO: ContratoServico[] = [
  { metodo: 'GET', caminho: '/api/acesso/usuarios', operacao: 'cadastrar_usuario' },
  { metodo: 'POST', caminho: '/api/acesso/usuarios', operacao: 'cadastrar_usuario' },
  { metodo: 'PATCH', caminho: '/api/acesso/usuarios/:id', operacao: 'atribuir_perfil' },
  { metodo: 'GET', caminho: '/api/consentimentos', operacao: 'registrar_consentimento' },
  { metodo: 'POST', caminho: '/api/consentimentos', operacao: 'registrar_consentimento' },
  { metodo: 'POST', caminho: '/api/consentimentos/:id/revogar-imagem', operacao: 'registrar_consentimento' },
  { metodo: 'GET', caminho: '/api/categorias', operacao: 'consultar_saldo' },
  { metodo: 'POST', caminho: '/api/categorias', operacao: 'cadastrar_categoria' },
  { metodo: 'GET', caminho: '/api/doadores', operacao: 'cadastrar_doador' },
  { metodo: 'POST', caminho: '/api/doadores', operacao: 'cadastrar_doador' },
  { metodo: 'PATCH', caminho: '/api/doadores/:id', operacao: 'cadastrar_doador' },
  { metodo: 'GET', caminho: '/api/doadores/:id/alteracoes', operacao: 'cadastrar_doador' },
  { metodo: 'POST', caminho: '/api/doacoes/recebimentos', operacao: 'registrar_recebimento' },
  { metodo: 'POST', caminho: '/api/doacoes/saidas-sinteticas', operacao: 'registrar_saida_sintetica' },
  { metodo: 'GET', caminho: '/api/doacoes/saldos', operacao: 'consultar_saldo' },
  { metodo: 'GET', caminho: '/api/familias', operacao: 'consultar_participante' },
  { metodo: 'POST', caminho: '/api/familias', operacao: 'cadastrar_familia' },
  { metodo: 'GET', caminho: '/api/participantes', operacao: 'consultar_participante' },
  { metodo: 'POST', caminho: '/api/participantes', operacao: 'cadastrar_participante' },
  { metodo: 'POST', caminho: '/api/participantes/:id/vinculo-familiar', operacao: 'vincular_participante' },
  { metodo: 'GET', caminho: '/api/turmas', operacao: 'consultar_participante' },
  { metodo: 'POST', caminho: '/api/turmas', operacao: 'cadastrar_turma' },
  { metodo: 'GET', caminho: '/api/turmas/:id/inscricoes', operacao: 'consultar_participante' },
  { metodo: 'POST', caminho: '/api/turmas/:id/inscricoes', operacao: 'inscrever_participante' },
  { metodo: 'POST', caminho: '/api/doacoes/destinacoes', operacao: 'registrar_destinacao' },
  { metodo: 'POST', caminho: '/api/chamadas', operacao: 'abrir_chamada' },
  { metodo: 'GET', caminho: '/api/chamadas/:id', operacao: 'abrir_chamada' },
  { metodo: 'POST', caminho: '/api/chamadas/:id/frequencias', operacao: 'registrar_frequencia' },
  { metodo: 'POST', caminho: '/api/frequencias/:id/justificar', operacao: 'justificar_falta' },
  { metodo: 'PATCH', caminho: '/api/frequencias/:id', operacao: 'corrigir_frequencia' },
  { metodo: 'GET', caminho: '/api/frequencias/participante/:id', operacao: 'consultar_frequencia' },
]

export function statusAcessoDireto(operacao: Operacao, perfil: Perfil | null): 200 | 401 | 403 {
  if (!perfil) return 401
  return pode(operacao, perfil) ? 200 : 403
}
