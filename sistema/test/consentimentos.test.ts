import { describe, expect, it } from 'vitest'
import {
  consentimentoVigente,
  imagemVigente,
  validarRegistroConsentimentos,
} from '../app/utils/consentimentos'
import { pode } from '../app/utils/permissoes'

const registroValido = {
  titular: { nome: 'Maria Silva', papel: 'responsavel_legal' as const },
  consentimentos: [
    { finalidade: 'cadastro_atendimento' as const, concedido: true },
    { finalidade: 'frequencia' as const, concedido: true },
    { finalidade: 'contato_familia' as const, concedido: false },
    { finalidade: 'relatorios_apoiadores' as const, concedido: false },
  ],
  imagem: {
    autorizado: true,
    meios: ['site' as const, 'redes_sociais' as const],
  },
}

describe('RF42 consentimentos e autorizações', () => {
  it('Voluntário e Coordenação registram consentimento', () => {
    expect(pode('registrar_consentimento', 'voluntario')).toBe(true)
    expect(pode('registrar_consentimento', 'coordenacao')).toBe(true)
  })

  it('exige as quatro finalidades com titular ou responsável legal', () => {
    expect(validarRegistroConsentimentos(registroValido)).toBeNull()
    expect(validarRegistroConsentimentos(null)?.campo).toBe('registro')
    expect(validarRegistroConsentimentos({
      ...registroValido,
      consentimentos: registroValido.consentimentos.slice(0, 3),
    })?.campo).toBe('consentimentos')
    expect(validarRegistroConsentimentos({
      ...registroValido,
      consentimentos: [
        ...registroValido.consentimentos.slice(0, 3),
        registroValido.consentimentos[0],
      ],
    })?.campo).toBe('consentimentos')
  })

  it('autorização de imagem fica à parte e exige meios quando autorizada', () => {
    expect(validarRegistroConsentimentos({
      ...registroValido,
      imagem: { autorizado: true, meios: [] },
    })?.campo).toBe('imagem.meios')
    expect(validarRegistroConsentimentos({
      ...registroValido,
      imagem: { autorizado: false, meios: [] },
    })).toBeNull()
    expect(validarRegistroConsentimentos({
      ...registroValido,
      imagem: { autorizado: false, meios: ['site'] },
    })?.campo).toBe('imagem.meios')
  })

  it('revogação de imagem passa a ser o registro vigente', () => {
    const vigente = imagemVigente([
      { autorizado: true, revogacao: false, registradoEm: '2026-10-01' },
      { autorizado: false, revogacao: true, registradoEm: '2026-10-20' },
    ])
    expect(vigente?.revogacao).toBe(true)
    expect(vigente?.autorizado).toBe(false)
  })

  it('usa só o consentimento vigente por finalidade antes de dados reais (Sprint 7)', () => {
    const vigente = consentimentoVigente([
      { finalidade: 'cadastro_atendimento' as const, concedido: false, registradoEm: '2026-10-01' },
      { finalidade: 'cadastro_atendimento' as const, concedido: true, registradoEm: '2026-10-15' },
    ], 'cadastro_atendimento')
    expect(vigente?.concedido).toBe(true)
  })
})
