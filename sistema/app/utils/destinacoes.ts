import { dataIsoValida, type FalhaValidacao } from './familias'
import { calcularSaldos, type Categoria, type Movimentacao } from './doacoes'

export type DestinatarioTipo = 'familia' | 'turma'

export type DestinacaoEntrada = {
  categoriaId?: string
  quantidade?: number
  data?: string
  tipoDestinatario?: DestinatarioTipo
  familiaId?: string | null
  turmaId?: string | null
  saldoAtual?: number
}

export function validarDestinacao(
  entrada: DestinacaoEntrada | null | undefined,
  saldoDisponivel?: number,
): FalhaValidacao | null {
  if (!entrada || typeof entrada !== 'object') {
    return { campo: 'categoriaId', mensagem: 'Informe os dados da destinação de doação.' }
  }
  if (!entrada.categoriaId?.trim()) {
    return { campo: 'categoriaId', mensagem: 'Informe a categoria do item.' }
  }
  if (entrada.quantidade === undefined || entrada.quantidade === null) {
    return { campo: 'quantidade', mensagem: 'Informe a quantidade.' }
  }
  if (!Number.isFinite(entrada.quantidade) || entrada.quantidade <= 0) {
    return { campo: 'quantidade', mensagem: 'A quantidade deve ser maior que zero.' }
  }
  if (!dataIsoValida(entrada.data)) {
    return { campo: 'data', mensagem: 'Informe a data da destinação.' }
  }

  // CA-RF10-06: Família ou Turma cadastrada. Sem texto livre.
  const temFamilia = Boolean(entrada.familiaId?.trim())
  const temTurma = Boolean(entrada.turmaId?.trim())

  if ((!temFamilia && !temTurma) || (temFamilia && temTurma)) {
    return {
      campo: 'destinatario',
      mensagem: 'Selecione exatamente um destinatário válido: uma família cadastrada ou uma turma de atividade cadastrada.',
    }
  }

  const saldo = saldoDisponivel ?? entrada.saldoAtual
  if (saldo !== undefined && entrada.quantidade > saldo) {
    return {
      campo: 'quantidade',
      mensagem: `Saída maior que o saldo disponível da categoria (${saldo}).`,
    }
  }

  return null
}

export function aplicarDestinacao(
  movimentacoes: Movimentacao[],
  destinacao: {
    categoriaId: string
    quantidade: number
    data: string
    familiaId?: string | null
    turmaId?: string | null
  },
  categorias: Categoria[],
): { movimentacoes: Movimentacao[], erro: FalhaValidacao | null } {
  const falha = validarDestinacao({
    ...destinacao,
    tipoDestinatario: destinacao.familiaId ? 'familia' : 'turma',
  })
  if (falha) {
    return { movimentacoes, erro: falha }
  }

  const saldos = calcularSaldos(categorias, movimentacoes)
  const saldoCat = saldos.find(c => c.categoriaId === destinacao.categoriaId)?.saldo ?? 0

  if (destinacao.quantidade > saldoCat) {
    return {
      movimentacoes,
      erro: {
        campo: 'quantidade',
        mensagem: `Saída maior que o saldo disponível da categoria (${saldoCat}).`,
      },
    }
  }

  const nova: Movimentacao = {
    categoriaId: destinacao.categoriaId,
    tipo: 'saida',
    quantidade: destinacao.quantidade,
  }

  return {
    movimentacoes: [...movimentacoes, nova],
    erro: null,
  }
}
