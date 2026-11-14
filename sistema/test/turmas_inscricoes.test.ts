import { describe, expect, it } from 'vitest'
import { pode } from '../app/utils/permissoes'
import { validarInscricao, validarTurma } from '../app/utils/turmas'

describe('RF20 cadastro de turmas', () => {
  it('apenas Coordenação pode cadastrar turma (CA-RF20-04)', () => {
    expect(pode('cadastrar_turma', 'coordenacao')).toBe(true)
    expect(pode('cadastrar_turma', 'voluntario')).toBe(false)
    expect(pode('cadastrar_turma', null)).toBe(false)
  })

  it('aceita turma com dados completos e término posterior ao início (CA-RF20-01 / RN09)', () => {
    expect(validarTurma({
      atividade: 'Costura Criativa',
      dataInicio: '2026-11-10',
      dataTermino: '2026-12-20',
      diasSemana: ['terca', 'quinta'],
      horario: '14:00 - 16:00',
      vagas: 15,
    })).toBeNull()
  })

  it('recusa turma se término for anterior ou igual ao início (CA-RF20-02 / RN09)', () => {
    const igual = validarTurma({
      atividade: 'Costura',
      dataInicio: '2026-11-10',
      dataTermino: '2026-11-10',
      diasSemana: ['terca'],
      horario: '14:00',
      vagas: 10,
    })
    expect(igual?.campo).toBe('dataTermino')
    expect(igual?.mensagem).toContain('posterior')

    const anterior = validarTurma({
      atividade: 'Costura',
      dataInicio: '2026-11-10',
      dataTermino: '2026-11-05',
      diasSemana: ['terca'],
      horario: '14:00',
      vagas: 10,
    })
    expect(anterior?.campo).toBe('dataTermino')
  })

  it('recusa campos ausentes e vagas inválidas', () => {
    expect(validarTurma(null)?.campo).toBe('atividade')
    expect(validarTurma({
      atividade: '',
      dataInicio: '2026-11-10',
      dataTermino: '2026-12-10',
      diasSemana: ['segunda'],
      horario: '10:00',
      vagas: 5,
    })?.campo).toBe('atividade')

    expect(validarTurma({
      atividade: 'Artes',
      dataInicio: '2026-11-10',
      dataTermino: '2026-12-10',
      diasSemana: [],
      horario: '10:00',
      vagas: 5,
    })?.campo).toBe('diasSemana')

    expect(validarTurma({
      atividade: 'Artes',
      dataInicio: '2026-11-10',
      dataTermino: '2026-12-10',
      diasSemana: ['quarta'],
      horario: '10:00',
      vagas: 0,
    })?.campo).toBe('vagas')
  })
})

describe('RF23 inscrição de participantes em turmas', () => {
  const turmaComVaga = { vagas: 10 }
  const participanteAtivo = { situacao: 'ativo' }
  const participanteInativo = { situacao: 'inativo' }

  it('Voluntário e Coordenação inscrevem participante (CA-RF23-01)', () => {
    expect(pode('inscrever_participante', 'voluntario')).toBe(true)
    expect(pode('inscrever_participante', 'coordenacao')).toBe(true)
  })

  it('inscreve participante ativo em turma com vaga (CA-RF23-01 / RN12)', () => {
    expect(validarInscricao(
      { turmaId: 't-1', participanteId: 'p-1' },
      participanteAtivo,
      turmaComVaga,
      5, // 5 ocupadas de 10
    )).toBeNull()
  })

  it('recusa inscrição de participante inativo com motivo (CA-RF23-02 / RN12)', () => {
    const recusa = validarInscricao(
      { turmaId: 't-1', participanteId: 'p-2' },
      participanteInativo,
      turmaComVaga,
      2,
    )
    expect(recusa?.campo).toBe('participanteId')
    expect(recusa?.mensagem).toContain('inativo')
  })

  it('recusa inscrição se turma estiver cheia (CA-RF23-03 / RN12)', () => {
    const recusa = validarInscricao(
      { turmaId: 't-1', participanteId: 'p-1' },
      participanteAtivo,
      turmaComVaga,
      10, // 10 ocupadas de 10
    )
    expect(recusa?.campo).toBe('turmaId')
    expect(recusa?.mensagem).toContain('cheia')
  })
})
