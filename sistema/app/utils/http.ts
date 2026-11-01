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
