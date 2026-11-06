// Parâmetros preliminares do RNF15 (seção 8.2). Não usar os defaults do Supabase:
// senha mínima 6, JWT 1 h, sem timeout de inatividade e rate limit só por IP.
export const SENHA_MINIMA = 8
export const TENTATIVAS_MAXIMAS = 5
export const BLOQUEIO_MINUTOS = 15
export const INATIVIDADE_MINUTOS = 30

export type EstadoTentativas = {
  tentativasFalhas: number
  bloqueadoAte: Date | null
}

export function estaBloqueado(bloqueadoAte: Date | null, agora: Date): boolean {
  return bloqueadoAte !== null && bloqueadoAte.getTime() > agora.getTime()
}

export function registrarTentativa(
  estado: EstadoTentativas,
  sucesso: boolean,
  agora: Date,
): EstadoTentativas {
  if (sucesso) {
    return { tentativasFalhas: 0, bloqueadoAte: null }
  }

  if (estaBloqueado(estado.bloqueadoAte, agora)) {
    return estado
  }

  const base = estado.bloqueadoAte && estado.bloqueadoAte.getTime() <= agora.getTime()
    ? 0
    : estado.tentativasFalhas
  const tentativasFalhas = base + 1
  const bloqueadoAte = tentativasFalhas >= TENTATIVAS_MAXIMAS
    ? new Date(agora.getTime() + BLOQUEIO_MINUTOS * 60 * 1000)
    : null

  return { tentativasFalhas, bloqueadoAte }
}

export function senhaAtendeRnf15(senha: string): boolean {
  return senha.length >= SENHA_MINIMA
}

export function sessaoExpirouPorInatividade(
  ultimaAtividadeMs: number,
  agoraMs: number,
  limiteMinutos = INATIVIDADE_MINUTOS,
): boolean {
  return agoraMs - ultimaAtividadeMs >= limiteMinutos * 60 * 1000
}
