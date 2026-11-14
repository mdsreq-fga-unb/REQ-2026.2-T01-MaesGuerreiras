import type { DestinacaoCorpo } from '~/types/contratos'
import { validarDestinacao } from '~/utils/destinacoes'

export default defineEventHandler(async (event) => {
  const sessao = await exigirOperacao(event, 'registrar_destinacao')
  const corpo = await readBody<DestinacaoCorpo>(event)

  const cliente = await dbUsuario(event)

  // 1. Obtém o saldo atual da categoria
  let saldoDisponivel = 0
  if (corpo?.categoriaId?.trim()) {
    const { data: saldoData } = await cliente
      .from('saldos_categoria')
      .select('saldo')
      .eq('categoria_id', corpo.categoriaId)
      .maybeSingle()

    saldoDisponivel = Number(saldoData?.saldo ?? 0)
  }

  // 2. Valida regras de negócio do RF10
  const falha = validarDestinacao(corpo, saldoDisponivel)
  if (falha) {
    throw falhaValidacao(falha.campo, falha.mensagem)
  }

  // 3. Valida se o destinatário existe
  if (corpo.tipoDestinatario === 'familia' && corpo.familiaId) {
    const { data: familia } = await cliente
      .from('familias')
      .select('id')
      .eq('id', corpo.familiaId)
      .single()

    if (!familia) {
      throw falhaValidacao('destinatario', 'Família destinatária não encontrada.')
    }
  }
  else if (corpo.tipoDestinatario === 'turma' && corpo.turmaId) {
    const { data: turma } = await cliente
      .from('turmas')
      .select('id')
      .eq('id', corpo.turmaId)
      .single()

    if (!turma) {
      throw falhaValidacao('destinatario', 'Turma destinatária não encontrada.')
    }
  }

  // 4. Insere a movimentação de saída
  const { data, error } = await cliente
    .from('movimentacoes_estoque')
    .insert({
      categoria_id: corpo.categoriaId,
      tipo: 'saida',
      quantidade: corpo.quantidade,
      data: corpo.data,
      familia_id: corpo.tipoDestinatario === 'familia' ? corpo.familiaId : null,
      turma_id: corpo.tipoDestinatario === 'turma' ? corpo.turmaId : null,
      registrado_por: sessao.id,
    })
    .select()
    .single()

  if (error || !data) {
    if (error?.message?.includes('saldo disponível')) {
      throw falhaValidacao('quantidade', error.message)
    }
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível registrar a destinação.' })
  }

  return {
    id: data.id,
    categoriaId: data.categoria_id,
    quantidade: data.quantidade,
    data: data.data,
    familiaId: data.familia_id,
    turmaId: data.turma_id,
    saldoRestante: saldoDisponivel - data.quantidade,
  }
})
