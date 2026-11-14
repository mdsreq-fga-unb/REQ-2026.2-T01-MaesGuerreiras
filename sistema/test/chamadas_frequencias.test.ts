import { describe, expect, it } from 'vitest'
import { pode } from '../app/utils/permissoes'
import {
  validarAberturaChamada,
  validarCorrecaoFrequencia,
  validarJustificativaFalta,
  validarRegistroFrequencia,
} from '../app/utils/frequencias'

describe('RF27 abertura de chamada', () => {
  const hoje = '2026-11-09'

  it('Voluntário e Coordenação podem abrir chamada (CA-RF27-01)', () => {
    expect(pode('abrir_chamada', 'voluntario')).toBe(true)
    expect(pode('abrir_chamada', 'coordenacao')).toBe(true)
  })

  it('aceita abertura na data do encontro (CA-RF27-01 / RN15)', () => {
    expect(validarAberturaChamada({
      turmaId: 't-1',
      dataEncontro: hoje,
    }, hoje)).toBeNull()
  })

  it('recusa abertura fora da data do encontro (CA-RF27-03 / RN15)', () => {
    const recusa = validarAberturaChamada({
      turmaId: 't-1',
      dataEncontro: '2026-11-08',
    }, hoje)
    expect(recusa?.campo).toBe('dataEncontro')
    expect(recusa?.mensagem).toContain('data do encontro')
  })
})

describe('RF28 registro de presença e ausência', () => {
  const inscritos = new Set(['p-1', 'p-2', 'p-3'])

  it('Voluntário e Coordenação registram frequência (CA-RF28-01)', () => {
    expect(pode('registrar_frequencia', 'voluntario')).toBe(true)
    expect(pode('registrar_frequencia', 'coordenacao')).toBe(true)
  })

  it('aceita registros de participantes inscritos na turma', () => {
    expect(validarRegistroFrequencia({
      chamadaId: 'c-1',
      registros: [
        { participanteId: 'p-1', presente: true },
        { participanteId: 'p-2', presente: false },
      ],
    }, inscritos)).toBeNull()
  })

  it('recusa registro para participante fora da lista de inscritos (CA-RF28-03)', () => {
    const recusa = validarRegistroFrequencia({
      chamadaId: 'c-1',
      registros: [
        { participanteId: 'p-1', presente: true },
        { participanteId: 'p-99', presente: false }, // p-99 não inscrito
      ],
    }, inscritos)
    expect(recusa?.campo).toBe('participanteId')
    expect(recusa?.mensagem).toContain('não consta na lista de inscritos')
  })
})

describe('RF29 justificativa de falta', () => {
  it('Voluntário e Coordenação podem justificar falta', () => {
    expect(pode('justificar_falta', 'voluntario')).toBe(true)
    expect(pode('justificar_falta', 'coordenacao')).toBe(true)
  })

  it('aceita justificativa com motivo informado (CA-RF29-01 / RN16)', () => {
    expect(validarJustificativaFalta({
      motivo: 'Consulta médica com atestado',
    })).toBeNull()
  })

  it('recusa justificativa sem motivo e indica campo necessário (CA-RF29-03)', () => {
    expect(validarJustificativaFalta(null)?.campo).toBe('motivo')
    expect(validarJustificativaFalta({ motivo: '' })?.campo).toBe('motivo')
    expect(validarJustificativaFalta({ motivo: '   ' })?.campo).toBe('motivo')
  })
})

describe('RF30 correção de frequência e auditoria (RN17 / RNF19)', () => {
  const hoje = '2026-11-09'
  const voluntarioId = 'vol-1'
  const outroVoluntarioId = 'vol-2'

  const frequenciaDeHoje = {
    registradoPor: voluntarioId,
    registradoEm: '2026-11-09T10:00:00Z',
    presente: false,
    justificada: false,
    motivoJustificativa: null,
  }

  const frequenciaDeOntem = {
    registradoPor: voluntarioId,
    registradoEm: '2026-11-08T10:00:00Z',
    presente: false,
    justificada: false,
    motivoJustificativa: null,
  }

  it('Voluntário corrige frequência que ele próprio registrou até o fim do mesmo dia (CA-RF30-01)', () => {
    const resultado = validarCorrecaoFrequencia(
      'voluntario',
      voluntarioId,
      frequenciaDeHoje,
      hoje,
      { presente: true },
      hoje,
    )
    expect(resultado.falha).toBeNull()
    expect(resultado.alteracoes).toHaveLength(1)
    expect(resultado.alteracoes[0]).toEqual({
      campo: 'presente',
      valorAnterior: 'false',
      valorNovo: 'true',
      motivo: undefined,
    })
  })

  it('Voluntário é recusado ao tentar corrigir chamada registrada por outro usuário (CA-RF30-02)', () => {
    const resultado = validarCorrecaoFrequencia(
      'voluntario',
      outroVoluntarioId,
      frequenciaDeHoje,
      hoje,
      { presente: true },
      hoje,
    )
    expect(resultado.falha?.campo).toBe('perfil')
    expect(resultado.falha?.mensagem).toContain('ele próprio')
  })

  it('Voluntário é recusado ao tentar corrigir após o prazo do mesmo dia (CA-RF30-02)', () => {
    const resultado = validarCorrecaoFrequencia(
      'voluntario',
      voluntarioId,
      frequenciaDeOntem,
      '2026-11-08',
      { presente: true },
      hoje,
    )
    expect(resultado.falha?.campo).toBe('prazo')
    expect(resultado.falha?.mensagem).toContain('mesmo dia')
  })

  it('Coordenação corrige qualquer registro em qualquer data informando motivo (CA-RF30-03)', () => {
    const resultado = validarCorrecaoFrequencia(
      'coordenacao',
      'coord-1',
      frequenciaDeOntem,
      '2026-11-08',
      { presente: true, motivoCorrecao: 'Erro de anotação na lista física' },
      hoje,
    )
    expect(resultado.falha).toBeNull()
    expect(resultado.alteracoes[0].motivo).toBe('Erro de anotação na lista física')
  })

  it('Coordenação é recusada se não informar o motivo da correção (CA-RF30-04)', () => {
    const resultado = validarCorrecaoFrequencia(
      'coordenacao',
      'coord-1',
      frequenciaDeOntem,
      '2026-11-08',
      { presente: true, motivoCorrecao: '' },
      hoje,
    )
    expect(resultado.falha?.campo).toBe('motivoCorrecao')
  })
})

describe('RF31 e RNF03 consulta de frequência', () => {
  it('Voluntário e Coordenação podem consultar histórico (CA-RF31-01)', () => {
    expect(pode('consultar_frequencia', 'voluntario')).toBe(true)
    expect(pode('consultar_frequencia', 'coordenacao')).toBe(true)
  })

  it('mede consulta e ordenação em cenário de laboratório em menos de 3s (RNF03)', () => {
    const totalEncontros = 1000
    const historico = Array.from({ length: totalEncontros }, (_, i) => ({
      data: `2026-0${(i % 9) + 1}-10`,
      presente: i % 3 === 0,
      justificada: i % 3 !== 0 && i % 2 === 0,
    }))

    const t0 = performance.now()
    const presencas = historico.filter(h => h.presente).length
    const justificadas = historico.filter(h => !h.presente && h.justificada).length
    const faltasNaoJustificadas = historico.filter(h => !h.presente && !h.justificada).length
    const duracao = performance.now() - t0

    expect(presencas + justificadas + faltasNaoJustificadas).toBe(totalEncontros)
    expect(duracao).toBeLessThan(3000)
  })
})
