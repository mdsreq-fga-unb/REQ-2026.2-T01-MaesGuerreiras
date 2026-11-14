import { describe, expect, it } from 'vitest'
import {
  calcularIdade,
  validarFamilia,
  validarParticipante,
  validarVinculoFamiliar,
} from '../app/utils/familias'
import { pode } from '../app/utils/permissoes'

describe('RF14 cadastro de famílias', () => {
  it('Voluntário e Coordenação podem cadastrar família', () => {
    expect(pode('cadastrar_familia', 'voluntario')).toBe(true)
    expect(pode('cadastrar_familia', 'coordenacao')).toBe(true)
    expect(pode('cadastrar_familia', null)).toBe(false)
  })

  it('valida campos obrigatórios da família (RN04: responsável, telefone e endereço)', () => {
    expect(validarFamilia(null)?.campo).toBe('nomeResponsavel')
    expect(validarFamilia({
      nomeResponsavel: 'Maria Santos',
      telefone: '61988887777',
      logradouro: 'Rua 1, Casa 2',
      cidade: 'Itapoã',
    })).toBeNull()

    // Omissão de campos obrigatórios (CA-RF14-02)
    expect(validarFamilia({
      nomeResponsavel: '',
      telefone: '61988887777',
      logradouro: 'Rua 1',
      cidade: 'Itapoã',
    })?.campo).toBe('nomeResponsavel')

    expect(validarFamilia({
      nomeResponsavel: 'Maria',
      telefone: '',
      logradouro: 'Rua 1',
      cidade: 'Itapoã',
    })?.campo).toBe('telefone')

    expect(validarFamilia({
      nomeResponsavel: 'Maria',
      telefone: '61988887777',
      logradouro: '',
      cidade: 'Itapoã',
    })?.campo).toBe('logradouro')

    expect(validarFamilia({
      nomeResponsavel: 'Maria',
      telefone: '61988887777',
      logradouro: 'Rua 1',
      cidade: '',
    })?.campo).toBe('cidade')
  })

  it('permite cadastro com campos opcionais preenchidos ou vazios', () => {
    expect(validarFamilia({
      nomeResponsavel: 'Maria Santos',
      telefone: '61988887777',
      logradouro: 'Rua 1',
      complemento: 'Bloco B',
      cidade: 'Itapoã',
      numeroMoradores: 4,
      observacoes: 'Família atendida desde 2024',
    })).toBeNull()

    expect(validarFamilia({
      nomeResponsavel: 'Maria Santos',
      telefone: '61988887777',
      logradouro: 'Rua 1',
      cidade: 'Itapoã',
      numeroMoradores: 0,
    })?.campo).toBe('numeroMoradores')
  })
})

describe('RF16 cadastro de participantes', () => {
  it('Voluntário e Coordenação podem cadastrar participante', () => {
    expect(pode('cadastrar_participante', 'voluntario')).toBe(true)
    expect(pode('cadastrar_participante', 'coordenacao')).toBe(true)
  })

  it('valida campos obrigatórios do participante (RN05: nome e data de nascimento)', () => {
    expect(validarParticipante(null)?.campo).toBe('nome')
    expect(validarParticipante({
      nome: 'João Santos',
      dataNascimento: '2015-06-15',
    })).toBeNull()

    // Falha em nome (CA-RF16-02)
    expect(validarParticipante({
      nome: '',
      dataNascimento: '2015-06-15',
    })?.campo).toBe('nome')

    // Falha em data nascimento inválida ou futura (CA-RF16-02)
    expect(validarParticipante({
      nome: 'João',
      dataNascimento: '2015-02-31',
    })?.campo).toBe('dataNascimento')

    expect(validarParticipante({
      nome: 'João',
      dataNascimento: '2099-01-01',
    })?.campo).toBe('dataNascimento')
  })

  it('permite participante com telefone e observações opcionais', () => {
    expect(validarParticipante({
      nome: 'Lucas Santos',
      dataNascimento: '2012-03-10',
      telefone: '61999998888',
      observacoes: 'Alergia a amendoim',
    })).toBeNull()
  })
})

describe('RF18 vínculo familiar e responsável legal', () => {
  const ref = new Date('2026-11-01T00:00:00Z')

  it('calcula a idade corretamente', () => {
    expect(calcularIdade('2010-10-15', ref)).toBe(16)
    expect(calcularIdade('2005-05-01', ref)).toBe(21)
  })

  it('para menor de 18 anos, exige responsável legal ou motivo de exceção (RN08 / CA-RF18-02)', () => {
    // Menor com responsável legal
    expect(validarVinculoFamiliar({
      participanteId: 'p-1',
      familiaId: 'f-1',
      responsavelLegal: 'Marta Santos',
    }, '2012-05-10', ref)).toBeNull()

    // Menor com motivo de exceção (ex.: acolhimento)
    expect(validarVinculoFamiliar({
      participanteId: 'p-1',
      familiaId: 'f-1',
      motivoAusenciaResponsavel: 'Criança em instituição de acolhimento',
    }, '2012-05-10', ref)).toBeNull()

    // Menor sem responsável e sem motivo: recusado (CA-RF18-03)
    const recusa = validarVinculoFamiliar({
      participanteId: 'p-1',
      familiaId: 'f-1',
    }, '2012-05-10', ref)
    expect(recusa?.campo).toBe('responsavelLegal')
    expect(recusa?.mensagem).toContain('menor de 18 anos')
  })

  it('para maior de 18 anos, permite vínculo sem indicação de responsável', () => {
    expect(validarVinculoFamiliar({
      participanteId: 'p-2',
      familiaId: 'f-1',
    }, '2000-01-01', ref)).toBeNull()
  })
})
