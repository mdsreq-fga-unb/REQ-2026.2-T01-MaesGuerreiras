import { validarDoador } from '~/utils/doacoes'
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
