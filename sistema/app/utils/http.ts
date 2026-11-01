export function mensagemErro(falha: unknown): string {
  const erro = falha as {
    statusMessage?: string
    message?: string
    data?: { statusMessage?: string, message?: string }
  }
  return erro.data?.statusMessage
    ?? erro.statusMessage
    ?? erro.data?.message
    ?? erro.message
    ?? 'Não foi possível concluir a operação.'
}

/** Campo apontado pela API em erros de validação (falhaValidacao). */
export function campoDoErro(falha: unknown): string | null {
  const erro = falha as { data?: { data?: { campo?: string } } }
  return erro.data?.data?.campo ?? null
}

/** Código HTTP do erro devolvido por $fetch. */
export function statusDoErro(falha: unknown): number | null {
  const erro = falha as { statusCode?: number, response?: { status?: number } }
  return erro.statusCode ?? erro.response?.status ?? null
}

/** Dados extras enviados pela API junto com o erro. */
export function dadosDoErro<T>(falha: unknown): T | null {
  const erro = falha as { data?: { data?: T } }
  return erro.data?.data ?? null
}
