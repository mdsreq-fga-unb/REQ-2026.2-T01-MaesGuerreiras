export const UNIDADES = ['unidade', 'quilo', 'pacote'] as const

export type UnidadeMedida = (typeof UNIDADES)[number]

export const TIPOS_DOADOR = ['pessoa', 'organizacao'] as const

export type TipoDoador = (typeof TIPOS_DOADOR)[number]

export type FalhaDoacao = {
  campo: string
  mensagem: string
}

export type Categoria = {
  id: string
  nome: string
  unidade: UnidadeMedida
}

export type Movimentacao = {
  categoriaId: string
  tipo: 'entrada' | 'saida'
  quantidade: number
}

export type SaldoCategoria = {
  categoriaId: string
  nome: string
  unidade: UnidadeMedida
  saldo: number
}

export function ehUnidade(valor: unknown): valor is UnidadeMedida {
  return typeof valor === 'string' && (UNIDADES as readonly string[]).includes(valor)
}

export function ehTipoDoador(valor: unknown): valor is TipoDoador {
  return typeof valor === 'string' && (TIPOS_DOADOR as readonly string[]).includes(valor)
}

export function validarCategoria(entrada: { nome?: string, unidade?: unknown } | null | undefined): FalhaDoacao | null {
  if (!entrada || typeof entrada !== 'object') {
    return { campo: 'nome', mensagem: 'Informe os dados da categoria.' }
  }
  if (!entrada.nome?.trim()) {
    return { campo: 'nome', mensagem: 'Informe o nome da categoria.' }
  }
  if (!ehUnidade(entrada.unidade)) {
    return { campo: 'unidade', mensagem: 'A unidade deve ser unidade, quilo ou pacote.' }
  }
  return null
}

export function validarDoador(entrada: {
  nome?: string
  tipo?: unknown
  telefone?: string | null
  email?: string | null
} | null | undefined): FalhaDoacao | null {
  if (!entrada || typeof entrada !== 'object') {
    return { campo: 'nome', mensagem: 'Informe os dados do doador.' }
  }
  if (!entrada.nome?.trim()) {
    return { campo: 'nome', mensagem: 'Informe o nome do doador.' }
  }
  if (!ehTipoDoador(entrada.tipo)) {
    return { campo: 'tipo', mensagem: 'O doador deve ser pessoa ou organizacao.' }
  }
  if (!entrada.telefone?.trim() && !entrada.email?.trim()) {
    return { campo: 'contato', mensagem: 'Informe telefone ou e-mail.' }
  }
  return null
}

export type CamposDoador = {
  tipo: string
  nome: string
  telefone: string | null
  email: string | null
}

export type AlteracaoDoador = {
  campo: keyof CamposDoador
  valorAnterior: string | null
  valorNovo: string | null
}

export function alteracoesDoador(anterior: CamposDoador, atual: CamposDoador): AlteracaoDoador[] {
  const campos: (keyof CamposDoador)[] = ['tipo', 'nome', 'telefone', 'email']
  return campos.flatMap((campo) => {
    if (anterior[campo] === atual[campo]) return []
    return [{
      campo,
      valorAnterior: anterior[campo],
      valorNovo: atual[campo],
    }]
  })
}

export function doadorDuplicado(
  candidato: { nome: string, telefone?: string | null, email?: string | null },
  existentes: { nome: string, telefone?: string | null, email?: string | null }[],
): boolean {
  const nome = candidato.nome.trim().toLowerCase()
  const telefone = candidato.telefone?.trim()
  const email = candidato.email?.trim().toLowerCase()

  return existentes.some((item) => {
    if (item.nome.trim().toLowerCase() !== nome) return false
    const mesmoTelefone = Boolean(telefone && item.telefone?.trim() === telefone)
    const mesmoEmail = Boolean(email && item.email?.trim().toLowerCase() === email)
    return mesmoTelefone || mesmoEmail
  })
}

export function validarRecebimento(entrada: {
  categoriaId?: string
  quantidade?: number
  data?: string
  doadorId?: string
} | null | undefined): FalhaDoacao | null {
  if (!entrada || typeof entrada !== 'object') {
    return { campo: 'categoriaId', mensagem: 'Informe os dados do recebimento.' }
  }
  if (!entrada.categoriaId?.trim()) {
    return { campo: 'categoriaId', mensagem: 'Informe a categoria cadastrada.' }
  }
  if (entrada.quantidade === undefined || entrada.quantidade === null) {
    return { campo: 'quantidade', mensagem: 'Informe a quantidade.' }
  }
  if (!Number.isFinite(entrada.quantidade) || entrada.quantidade <= 0) {
    return { campo: 'quantidade', mensagem: 'A quantidade deve ser maior que zero.' }
  }
  if (!dataIsoValida(entrada.data)) {
    return { campo: 'data', mensagem: 'Informe a data do recebimento.' }
  }
  if (!entrada.doadorId?.trim()) {
    return { campo: 'doadorId', mensagem: 'Informe o doador.' }
  }
  return null
}

export function validarSaidaSintetica(entrada: {
  categoriaId?: string
  quantidade?: number
  data?: string
  destinoSintetico?: string
  saldoAtual?: number
} | null | undefined): FalhaDoacao | null {
  if (!entrada || typeof entrada !== 'object') {
    return { campo: 'categoriaId', mensagem: 'Informe os dados da saída.' }
  }
  if (!entrada.categoriaId?.trim()) {
    return { campo: 'categoriaId', mensagem: 'Informe a categoria cadastrada.' }
  }
  if (entrada.quantidade === undefined || entrada.quantidade === null) {
    return { campo: 'quantidade', mensagem: 'Informe a quantidade.' }
  }
  if (!Number.isFinite(entrada.quantidade) || entrada.quantidade <= 0) {
    return { campo: 'quantidade', mensagem: 'A quantidade deve ser maior que zero.' }
  }
  if (!dataIsoValida(entrada.data)) {
    return { campo: 'data', mensagem: 'Informe a data da saída.' }
  }
  if (!entrada.destinoSintetico?.trim()) {
    return { campo: 'destinoSintetico', mensagem: 'Informe o destino sintético de teste.' }
  }
  if (entrada.saldoAtual !== undefined && entrada.quantidade > entrada.saldoAtual) {
    return {
      campo: 'quantidade',
      mensagem: `Quantidade maior que o saldo disponível (${entrada.saldoAtual}).`,
    }
  }
  return null
}

function dataIsoValida(data: string | undefined): boolean {
  if (!data || !/^\d{4}-\d{2}-\d{2}$/.test(data)) {
    return false
  }

  const dataParseada = new Date(`${data}T00:00:00.000Z`)
  return !Number.isNaN(dataParseada.getTime()) && dataParseada.toISOString().slice(0, 10) === data
}

export function calcularSaldos(categorias: Categoria[], movimentacoes: Movimentacao[]): SaldoCategoria[] {
  return categorias.map((categoria) => {
    const saldo = movimentacoes
      .filter(item => item.categoriaId === categoria.id)
      .reduce((total, item) => total + (item.tipo === 'entrada' ? item.quantidade : -item.quantidade), 0)

    return {
      categoriaId: categoria.id,
      nome: categoria.nome,
      unidade: categoria.unidade,
      saldo,
    }
  })
}

export function aplicarMovimentacao(
  movimentacoes: Movimentacao[],
  nova: Movimentacao,
  categorias: Categoria[],
): { movimentacoes: Movimentacao[], erro: FalhaDoacao | null } {
  if (nova.quantidade <= 0) {
    return {
      movimentacoes,
      erro: { campo: 'quantidade', mensagem: 'A quantidade deve ser maior que zero.' },
    }
  }

  if (nova.tipo === 'saida') {
    const atual = calcularSaldos(categorias, movimentacoes).find(item => item.categoriaId === nova.categoriaId)
    if (!atual || nova.quantidade > atual.saldo) {
      return {
        movimentacoes,
        erro: {
          campo: 'quantidade',
          mensagem: `Quantidade maior que o saldo disponível (${atual?.saldo ?? 0}).`,
        },
      }
    }
  }

  return { movimentacoes: [...movimentacoes, nova], erro: null }
}
