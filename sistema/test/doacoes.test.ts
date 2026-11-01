import { describe, expect, it } from 'vitest'
import {
  alteracoesDoador,
  aplicarMovimentacao,
  calcularSaldos,
  doadorDuplicado,
  validarCategoria,
  validarDoador,
  validarRecebimento,
  type Categoria,
  type Movimentacao,
} from '../app/utils/doacoes'
import { pode } from '../app/utils/permissoes'

const alimento: Categoria = { id: 'cat-1', nome: 'Alimento', unidade: 'quilo' }

describe('RF11 categorias', () => {
  it('Coordenação cadastra nome e unidade da lista fechada (RN02)', () => {
    expect(pode('cadastrar_categoria', 'coordenacao')).toBe(true)
    expect(validarCategoria(null)?.campo).toBe('nome')
    expect(validarCategoria({ nome: 'Alimento', unidade: 'quilo' })).toBeNull()
    expect(validarCategoria({ nome: 'Alimento', unidade: 'caixa' })?.campo).toBe('unidade')
    expect(validarCategoria({ nome: '', unidade: 'pacote' })?.campo).toBe('nome')
  })

  it('Voluntário não cadastra categoria, inclusive por acesso direto', () => {
    expect(pode('cadastrar_categoria', 'voluntario')).toBe(false)
  })
})

describe('RF08 doadores', () => {
  it('Voluntário e Coordenação cadastram pessoa ou organização com contato', () => {
    expect(pode('cadastrar_doador', 'voluntario')).toBe(true)
    expect(validarDoador(null)?.campo).toBe('nome')
    expect(validarDoador({
      nome: 'CEASA',
      tipo: 'organizacao',
      telefone: '6133330000',
    })).toBeNull()
    expect(validarDoador({ nome: '', tipo: 'pessoa', email: 'a@b.c' })?.campo).toBe('nome')
    expect(validarDoador({ nome: 'Ana', tipo: 'pessoa' })?.campo).toBe('contato')
  })

  it('registra autor implícito com valor anterior e novo na correção (RNF19)', () => {
    const alteracoes = alteracoesDoador(
      { tipo: 'pessoa', nome: 'Ana', telefone: '6199999', email: null },
      { tipo: 'pessoa', nome: 'Ana Souza', telefone: '6188888', email: 'ana@exemplo.local' },
    )
    expect(alteracoes).toEqual([
      { campo: 'nome', valorAnterior: 'Ana', valorNovo: 'Ana Souza' },
      { campo: 'telefone', valorAnterior: '6199999', valorNovo: '6188888' },
      { campo: 'email', valorAnterior: null, valorNovo: 'ana@exemplo.local' },
    ])
  })

  it('detecta duplicidade pelo mesmo nome e telefone ou e-mail', () => {
    expect(doadorDuplicado(
      { nome: 'Ana', telefone: '6199999', email: 'ana@exemplo.local' },
      [{ nome: 'Ana', telefone: '6199999', email: null }],
    )).toBe(true)
    expect(doadorDuplicado(
      { nome: 'Ana', telefone: '6188888', email: 'outra@exemplo.local' },
      [{ nome: 'Ana', telefone: '6199999', email: 'ana@exemplo.local' }],
    )).toBe(false)
  })
})

describe('RF09 recebimento e RF12 saldo', () => {
  it('recusa campos ausentes e quantidade inválida sem alterar o saldo', () => {
    expect(validarRecebimento(null)?.campo).toBe('categoriaId')
    expect(validarRecebimento({
      categoriaId: 'cat-1',
      quantidade: 2,
      data: '2026-10-31',
      doadorId: 'doa-1',
    })).toBeNull()
    expect(validarRecebimento({ quantidade: 2, data: '2026-10-31', doadorId: 'doa-1' })?.campo).toBe('categoriaId')
    expect(validarRecebimento({
      categoriaId: 'cat-1',
      quantidade: 0,
      data: '2026-10-31',
      doadorId: 'doa-1',
    })?.campo).toBe('quantidade')
    expect(validarRecebimento({
      categoriaId: 'cat-1',
      quantidade: Number.NaN,
      data: '2026-10-31',
      doadorId: 'doa-1',
    })?.campo).toBe('quantidade')
    expect(validarRecebimento({
      categoriaId: 'cat-1',
      quantidade: Number.POSITIVE_INFINITY,
      data: '2026-10-31',
      doadorId: 'doa-1',
    })?.campo).toBe('quantidade')
    expect(validarRecebimento({
      categoriaId: 'cat-1',
      quantidade: 2,
      data: '2026-02-30',
      doadorId: 'doa-1',
    })?.campo).toBe('data')

    const inicial: Movimentacao[] = []
    const recusa = aplicarMovimentacao(inicial, {
      categoriaId: alimento.id,
      tipo: 'entrada',
      quantidade: 0,
    }, [alimento])
    expect(recusa.erro?.campo).toBe('quantidade')
    expect(recusa.movimentacoes).toBe(inicial)
    expect(calcularSaldos([alimento], recusa.movimentacoes)[0].saldo).toBe(0)
  })

  it('soma entradas, subtrai saídas sintéticas e mantém a unidade da categoria', () => {
    const depoisDaEntrada = aplicarMovimentacao([], {
      categoriaId: alimento.id,
      tipo: 'entrada',
      quantidade: 10,
    }, [alimento])
    const depoisDaSaida = aplicarMovimentacao(depoisDaEntrada.movimentacoes, {
      categoriaId: alimento.id,
      tipo: 'saida',
      quantidade: 3,
    }, [alimento])
    const saldo = calcularSaldos([alimento], depoisDaSaida.movimentacoes)[0]
    expect(saldo.saldo).toBe(7)
    expect(saldo.unidade).toBe('quilo')
  })

  it('recusa saída maior que o saldo e não altera movimentações', () => {
    const atuais: Movimentacao[] = [{ categoriaId: alimento.id, tipo: 'entrada', quantidade: 2 }]
    const recusa = aplicarMovimentacao(atuais, {
      categoriaId: alimento.id,
      tipo: 'saida',
      quantidade: 5,
    }, [alimento])
    expect(recusa.erro?.mensagem).toContain('2')
    expect(recusa.movimentacoes).toEqual(atuais)
    expect(calcularSaldos([alimento], recusa.movimentacoes)[0].saldo).toBe(2)
  })
})

describe('RNF03 consulta de saldo', () => {
  it('mede o cálculo local em menos de 3 s (cenário de laboratório; 3G/4G fica na evidência da sprint)', () => {
    const categorias = Array.from({ length: 50 }, (_, i) => ({
      id: `c${i}`,
      nome: `Cat ${i}`,
      unidade: 'unidade' as const,
    }))
    const movimentacoes = categorias.flatMap(categoria => [
      { categoriaId: categoria.id, tipo: 'entrada' as const, quantidade: 20 },
      { categoriaId: categoria.id, tipo: 'saida' as const, quantidade: 5 },
    ])
    const inicio = performance.now()
    const saldos = calcularSaldos(categorias, movimentacoes)
    const duracao = performance.now() - inicio
    expect(saldos[0].saldo).toBe(15)
    expect(duracao).toBeLessThan(3000)
  })
})
