import { describe, expect, it } from 'vitest'
import {
  autenticacaoIndisponivel,
  idDoUsuarioNasClaims,
  validarAtribuicaoPerfil,
  validarCadastroUsuario,
} from '../app/utils/acesso'
import { pode } from '../app/utils/permissoes'
import {
  estaBloqueado,
  INATIVIDADE_MINUTOS,
  registrarTentativa,
  senhaAtendeRnf15,
  sessaoExpirouPorInatividade,
} from '../app/utils/rnf15'
import { CONTRATOS_SERVICO, statusAcessoDireto } from '../app/utils/servicos'

describe('RF39 cadastro de usuário', () => {
  it('recusa senha com menos de 8 caracteres (RNF15)', () => {
    expect(senhaAtendeRnf15('1234567')).toBe(false)
    expect(validarCadastroUsuario(null)?.campo).toBe('nome')
    expect(validarCadastroUsuario({
      nome: 'Ana',
      email: 'ana@exemplo.local',
      senha: '1234567',
      perfil: 'voluntario',
    })?.campo).toBe('senha')
  })

  it('aceita cadastro completo pela Coordenação (RN20)', () => {
    expect(pode('cadastrar_usuario', 'coordenacao')).toBe(true)
    expect(validarCadastroUsuario({
      nome: 'Ana',
      email: 'ana@exemplo.local',
      senha: 'senha-local-123',
      perfil: 'voluntario',
    })).toBeNull()
  })

  it('recusa cadastro de usuário pelo Voluntário, inclusive por acesso direto', () => {
    expect(pode('cadastrar_usuario', 'voluntario')).toBe(false)
  })
})

describe('RF40 atribuição de perfil', () => {
  it('permite só Coordenação atribuir Voluntário ou Coordenação', () => {
    expect(pode('atribuir_perfil', 'coordenacao')).toBe(true)
    expect(pode('atribuir_perfil', 'voluntario')).toBe(false)
    expect(validarAtribuicaoPerfil('voluntario')).toBe(true)
    expect(validarAtribuicaoPerfil('visitante')).toBe(false)
  })
})

describe('falha de login', () => {
  it('não trata queda do Auth como senha incorreta', () => {
    expect(autenticacaoIndisponivel({
      name: 'AuthRetryableFetchError',
      message: 'fetch failed',
    })).toBe(true)
    expect(autenticacaoIndisponivel({
      status: 400,
      message: 'Invalid login credentials',
    })).toBe(false)
  })
})

describe('RF41 autenticação e RNF15', () => {
  const agora = new Date('2026-10-31T12:00:00Z')

  it('resolve o ID do usuário pelo campo sub das claims do JWT', () => {
    expect(idDoUsuarioNasClaims({ sub: 'usuario-1' })).toBe('usuario-1')
    expect(idDoUsuarioNasClaims({ sub: '' })).toBeNull()
    expect(idDoUsuarioNasClaims(null)).toBeNull()
  })

  it('os dois perfis autenticados acessam operações do perfil', () => {
    expect(pode('autenticar', 'voluntario')).toBe(true)
    expect(pode('autenticar', 'coordenacao')).toBe(true)
    expect(pode('autenticar', null)).toBe(false)
  })

  it('bloqueia novas tentativas por 15 minutos após 5 falhas seguidas', () => {
    let estado = { tentativasFalhas: 0, bloqueadoAte: null as Date | null }
    for (let i = 0; i < 5; i += 1) {
      estado = registrarTentativa(estado, false, agora)
    }
    expect(estaBloqueado(estado.bloqueadoAte, agora)).toBe(true)
    expect(estado.bloqueadoAte?.toISOString()).toBe('2026-10-31T12:15:00.000Z')

    const aindaBloqueado = registrarTentativa(estado, false, new Date('2026-10-31T12:10:00Z'))
    expect(aindaBloqueado.tentativasFalhas).toBe(5)
  })

  it('zera o bloqueio após login correto', () => {
    const liberado = registrarTentativa(
      { tentativasFalhas: 3, bloqueadoAte: null },
      true,
      agora,
    )
    expect(liberado).toEqual({ tentativasFalhas: 0, bloqueadoAte: null })
  })

  it('encerra a sessão após 30 minutos sem atividade', () => {
    const inicio = Date.parse('2026-10-31T12:00:00Z')
    const limite = INATIVIDADE_MINUTOS * 60 * 1000
    expect(sessaoExpirouPorInatividade(inicio, inicio + limite - 1)).toBe(false)
    expect(sessaoExpirouPorInatividade(inicio, inicio + limite)).toBe(true)
  })
})

describe('acesso direto aos serviços', () => {
  it('recusa anônimo em todas as operações restritas', () => {
    for (const contrato of CONTRATOS_SERVICO) {
      expect(statusAcessoDireto(contrato.operacao, null)).toBe(401)
    }
  })

  it('recusa o Voluntário nas operações exclusivas da Coordenação', () => {
    expect(statusAcessoDireto('cadastrar_usuario', 'voluntario')).toBe(403)
    expect(statusAcessoDireto('atribuir_perfil', 'voluntario')).toBe(403)
    expect(statusAcessoDireto('cadastrar_categoria', 'voluntario')).toBe(403)
    expect(statusAcessoDireto('registrar_saida_sintetica', 'voluntario')).toBe(403)
    expect(statusAcessoDireto('registrar_recebimento', 'voluntario')).toBe(200)
    expect(statusAcessoDireto('consultar_saldo', 'voluntario')).toBe(200)
  })

  it('permite à Coordenação as operações da sprint', () => {
    for (const contrato of CONTRATOS_SERVICO) {
      expect(statusAcessoDireto(contrato.operacao, 'coordenacao')).toBe(200)
    }
  })
})
