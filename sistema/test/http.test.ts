import { describe, expect, it } from 'vitest'
import { mensagemErro, semCodigosInternos } from '../app/utils/http'

describe('mensagens de erro mostradas na tela', () => {
  it('tira códigos internos entre parênteses', () => {
    expect(semCodigosInternos('Voluntário só pode corrigir chamada realizada por ele próprio (RN17).'))
      .toBe('Voluntário só pode corrigir chamada realizada por ele próprio.')
    expect(semCodigosInternos('A Coordenação deve informar o motivo da correção (RN17 / CA-RF30-04).'))
      .toBe('A Coordenação deve informar o motivo da correção.')
    expect(semCodigosInternos('Participante fora da lista de inscritos da turma (CA-RF28-03).'))
      .toBe('Participante fora da lista de inscritos da turma.')
  })

  it('preserva parênteses que não são códigos', () => {
    expect(semCodigosInternos('Saldo insuficiente (disponível: 3 kg).'))
      .toBe('Saldo insuficiente (disponível: 3 kg).')
  })

  it('aplica a limpeza à mensagem devolvida pela API', () => {
    expect(mensagemErro({ data: { statusMessage: 'Turma sem vaga disponível (RN12).' } }))
      .toBe('Turma sem vaga disponível.')
    expect(mensagemErro({})).toBe('Não foi possível concluir a operação.')
  })
})
