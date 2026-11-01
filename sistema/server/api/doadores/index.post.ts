import { doadorDuplicado, validarDoador } from '~/utils/doacoes'
import type { DoadorCorpo } from '~/types/contratos'

export default defineEventHandler(async (event) => {
  const sessao = await exigirOperacao(event, 'cadastrar_doador')
  const corpo = await readBody<DoadorCorpo>(event)
  const falha = validarDoador(corpo)
  if (falha) {
    throw falhaValidacao(falha.campo, falha.mensagem)
  }

  const cliente = await dbUsuario(event)
  const { data: existentes, error: erroExistentes } = await cliente
    .from('doadores')
    .select('id, tipo, nome, telefone, email')

  if (erroExistentes) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível verificar doadores existentes.' })
  }

  if (!corpo.forcar && doadorDuplicado(corpo, existentes)) {
    throw createError({
      statusCode: 409,
      statusMessage: 'Já existe um doador com o mesmo nome e contato. Use o cadastro existente.',
      data: { existentes: existentes.filter(item => doadorDuplicado(corpo, [item])) },
    })
  }

  const { data, error } = await cliente
    .from('doadores')
    .insert({
      nome: corpo.nome.trim(),
      tipo: corpo.tipo,
      telefone: corpo.telefone?.trim() || null,
      email: corpo.email?.trim() || null,
      criado_por: sessao.id,
    })
    .select('id, tipo, nome, telefone, email')
    .single()

  if (error || !data) {
    throw createError({ statusCode: 400, statusMessage: 'Não foi possível cadastrar o doador.' })
  }

  return data
})
