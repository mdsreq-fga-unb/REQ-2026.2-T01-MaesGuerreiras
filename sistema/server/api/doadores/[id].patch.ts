import { doadorDuplicado, validarDoador } from '~/utils/doacoes'
import type { DoadorCorpo } from '~/types/contratos'

export default defineEventHandler(async (event) => {
  await exigirOperacao(event, 'cadastrar_doador')
  const id = getRouterParam(event, 'id')
  const corpo = await readBody<DoadorCorpo>(event)
  if (!id) {
    throw falhaValidacao('id', 'Informe o doador.')
  }

  const falha = validarDoador(corpo)
  if (falha) {
    throw falhaValidacao(falha.campo, falha.mensagem)
  }

  const cliente = await dbUsuario(event)

  // A correção também não pode criar duplicata (CA-RF08-05); o próprio doador fica de fora da comparação.
  const { data: outros, error: erroOutros } = await cliente
    .from('doadores')
    .select('id, tipo, nome, telefone, email')
    .neq('id', id)

  if (erroOutros) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível verificar doadores existentes.' })
  }

  if (!corpo.forcar && doadorDuplicado(corpo, outros)) {
    throw createError({
      statusCode: 409,
      statusMessage: 'Já existe outro doador com o mesmo nome e contato.',
      data: { existentes: outros.filter(item => doadorDuplicado(corpo, [item])) },
    })
  }

  const { data, error } = await cliente
    .from('doadores')
    .update({
      nome: corpo.nome.trim(),
      tipo: corpo.tipo,
      telefone: corpo.telefone?.trim() || null,
      email: corpo.email?.trim() || null,
    })
    .eq('id', id)
    .select('id, tipo, nome, telefone, email, atualizado_em')
    .maybeSingle()

  if (error || !data) {
    throw createError({ statusCode: 404, statusMessage: 'Doador não encontrado.' })
  }

  return data
})
