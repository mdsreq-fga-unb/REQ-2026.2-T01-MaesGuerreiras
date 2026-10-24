import { describe, expect, it } from 'vitest'
import { ehCoordenacao, ehPerfilValido } from '../app/utils/perfis'

describe('perfis de acesso', () => {
  it('aceita apenas os perfis da tabela de permissões', () => {
    expect(ehPerfilValido('voluntario')).toBe(true)
    expect(ehPerfilValido('coordenacao')).toBe(true)
    expect(ehPerfilValido('visitante')).toBe(false)
    expect(ehPerfilValido(null)).toBe(false)
  })

  it('identifica a coordenação', () => {
    expect(ehCoordenacao('coordenacao')).toBe(true)
    expect(ehCoordenacao('voluntario')).toBe(false)
    expect(ehCoordenacao(null)).toBe(false)
  })
})
