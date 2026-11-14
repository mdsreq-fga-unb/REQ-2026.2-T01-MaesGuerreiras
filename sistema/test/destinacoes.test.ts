import { describe, expect, it } from 'vitest'
import { pode } from '../app/utils/permissoes'
import { aplicarDestinacao, validarDestinacao } from '../app/utils/destinacoes'
import { calcularSaldos, type Categoria, type Movimentacao } from '../app/utils/doacoes'

const categoriaAlimento: Categoria = { id: 'c-alimento', nome: 'Arroz', unidade: 'quilo' }

describe('RF10 registrar destinação de doação', () => {
  it('Voluntário e Coordenação podem registrar destinação (CA-RF10-01)', () => {
    expect(pode('registrar_destinacao', 'voluntario')).toBe(true)
    expect(pode('registrar_destinacao', 'coordenacao')).toBe(true)
  })

  it('aceita destinação válida para família ou para turma (CA-RF10-01 / CA-RF10-06)', () => {
    // Destinação para família
    expect(validarDestinacao({
      categoriaId: 'c-alimento',
      quantidade: 5,
      data: '2026-11-09',
      tipoDestinatario: 'familia',
      familiaId: 'fam-1',
    }, 10)).toBeNull()

    // Destinação para turma (uso interno)
    expect(validarDestinacao({
      categoriaId: 'c-alimento',
      quantidade: 3,
      data: '2026-11-09',
      tipoDestinatario: 'turma',
      turmaId: 'turma-1',
    }, 10)).toBeNull()
  })

  it('recusa campos obrigatórios ausentes sem alterar os dados (CA-RF10-03)', () => {
    expect(validarDestinacao(null)?.campo).toBe('categoriaId')

    expect(validarDestinacao({
      categoriaId: '',
      quantidade: 5,
      data: '2026-11-09',
      familiaId: 'fam-1',
    })?.campo).toBe('categoriaId')

    expect(validarDestinacao({
      categoriaId: 'c-alimento',
      data: '2026-11-09',
      familiaId: 'fam-1',
    })?.campo).toBe('quantidade')

    expect(validarDestinacao({
      categoriaId: 'c-alimento',
      quantidade: 5,
      data: '',
      familiaId: 'fam-1',
    })?.campo).toBe('data')

    // Sem destinatário
    expect(validarDestinacao({
      categoriaId: 'c-alimento',
      quantidade: 5,
      data: '2026-11-09',
    })?.campo).toBe('destinatario')
  })

  it('recusa quantidade <= 0 com mensagem e não altera o saldo (CA-RF10-04)', () => {
    const zero = validarDestinacao({
      categoriaId: 'c-alimento',
      quantidade: 0,
      data: '2026-11-09',
      familiaId: 'fam-1',
    })
    expect(zero?.campo).toBe('quantidade')
    expect(zero?.mensagem).toContain('maior que zero')

    const negativo = validarDestinacao({
      categoriaId: 'c-alimento',
      quantidade: -2,
      data: '2026-11-09',
      familiaId: 'fam-1',
    })
    expect(negativo?.campo).toBe('quantidade')
  })

  it('recusa saída maior que o saldo e mostra o saldo disponível (CA-RF10-05)', () => {
    const recusa = validarDestinacao({
      categoriaId: 'c-alimento',
      quantidade: 15,
      data: '2026-11-09',
      familiaId: 'fam-1',
    }, 10) // Saldo disponível = 10
    expect(recusa?.campo).toBe('quantidade')
    expect(recusa?.mensagem).toContain('10')
  })

  it('subtrai do saldo quando válida e não altera quando recusada (CA-RF10-02)', () => {
    const inicial: Movimentacao[] = [
      { categoriaId: categoriaAlimento.id, tipo: 'entrada', quantidade: 20 },
    ]
    expect(calcularSaldos([categoriaAlimento], inicial)[0].saldo).toBe(20)

    // Destinação válida de 8 quilos
    const sucesso = aplicarDestinacao(inicial, {
      categoriaId: categoriaAlimento.id,
      quantidade: 8,
      data: '2026-11-09',
      familiaId: 'fam-1',
    }, [categoriaAlimento])

    expect(sucesso.erro).toBeNull()
    const saldoApos = calcularSaldos([categoriaAlimento], sucesso.movimentacoes)[0]
    expect(saldoApos.saldo).toBe(12)
    expect(saldoApos.unidade).toBe('quilo')

    // Tentativa inválida de tirar mais do que resta (15 > 12)
    const recusa = aplicarDestinacao(sucesso.movimentacoes, {
      categoriaId: categoriaAlimento.id,
      quantidade: 15,
      data: '2026-11-09',
      turmaId: 'turma-1',
    }, [categoriaAlimento])

    expect(recusa.erro?.campo).toBe('quantidade')
    expect(recusa.movimentacoes).toBe(sucesso.movimentacoes)
    expect(calcularSaldos([categoriaAlimento], recusa.movimentacoes)[0].saldo).toBe(12)
  })
})
