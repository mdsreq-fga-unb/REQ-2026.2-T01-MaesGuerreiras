import { validarRecebimento } from '~/utils/doacoes'
import type { RecebimentoCorpo } from '~/types/contratos'

export default defineEventHandler(async (event) => {
  const sessao = await exigirOperacao(event, 'registrar_recebimento')
  const corpo = await readBody<RecebimentoCorpo>(event)
  const falha = validarRecebimento(corpo)
  if (falha) {
    throw falhaValidacao(falha.campo, falha.mensagem)
  }

  const cliente = await dbUsuario(event)
  const { data, error } = await cliente
    .from('movimentacoes_estoque')
    .insert({
      tipo: 'entrada',
      categoria_id: corpo.categoriaId,
      quantidade: corpo.quantidade,
      data: corpo.data,
      doador_id: corpo.doadorId,
      registrado_por: sessao.id,
    })
    .select('id, categoria_id, quantidade, data, doador_id, criado_em')
    .single()

  if (error || !data) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Não foi possível registrar o recebimento. O saldo não foi alterado.',
    })
  }

  return data
})
