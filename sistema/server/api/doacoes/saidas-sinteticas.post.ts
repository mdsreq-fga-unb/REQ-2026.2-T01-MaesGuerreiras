import { validarSaidaSintetica } from '~/utils/doacoes'

type SaidaSinteticaCorpo = {
  categoriaId: string
  quantidade: number
  data: string
  destinoSintetico: string
}

export default defineEventHandler(async (event) => {
  const sessao = await exigirOperacao(event, 'registrar_saida_sintetica')
  const corpo = await readBody<SaidaSinteticaCorpo>(event)

  const falhaInicial = validarSaidaSintetica(corpo)
  if (falhaInicial) {
    throw falhaValidacao(falhaInicial.campo, falhaInicial.mensagem)
  }

  const cliente = await dbUsuario(event)
  const { data: saldo, error: erroSaldo } = await cliente
    .from('saldos_categoria')
    .select('saldo')
    .eq('categoria_id', corpo.categoriaId)
    .maybeSingle()

  if (erroSaldo) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível consultar o saldo atual.' })
  }

  const falha = validarSaidaSintetica({
    ...corpo,
    saldoAtual: Number(saldo?.saldo ?? 0),
  })
  if (falha) {
    throw falhaValidacao(falha.campo, falha.mensagem)
  }

  const { data, error: erroInsercao } = await cliente
    .from('movimentacoes_estoque')
    .insert({
      tipo: 'saida',
      categoria_id: corpo.categoriaId,
      quantidade: corpo.quantidade,
      data: corpo.data,
      destino_sintetico: corpo.destinoSintetico.trim(),
      registrado_por: sessao.id,
    })
    .select('id, categoria_id, quantidade, data, destino_sintetico')
    .single()

  if (erroInsercao || !data) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Não foi possível registrar a saída. O saldo não foi alterado.',
    })
  }

  return data
})
