import type { H3Event } from 'h3'
import { idDoUsuarioNasClaims } from '~/utils/acesso'
import { ehPerfilValido, type Perfil } from '~/utils/perfis'
import { pode, type Operacao } from '~/utils/permissoes'

export async function usuarioDaSessao(event: H3Event) {
  const claims = await authUsuario(event)
  const id = idDoUsuarioNasClaims(claims)
  if (!claims || !id) {
    throw createError({ statusCode: 401, statusMessage: 'Autenticação obrigatória.' })
  }
  return {
    id,
    email: typeof claims.email === 'string' ? claims.email : undefined,
  }
}

export async function perfilDaSessao(event: H3Event): Promise<{ id: string, perfil: Perfil }> {
  const usuario = await usuarioDaSessao(event)
  const cliente = await dbUsuario(event)
  const { data, error } = await cliente
    .from('perfis')
    .select('perfil')
    .eq('id', usuario.id)
    .maybeSingle()

  if (error) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível consultar o perfil de acesso.' })
  }

  if (!ehPerfilValido(data?.perfil)) {
    throw createError({ statusCode: 403, statusMessage: 'Usuário sem perfil de acesso.' })
  }

  return { id: usuario.id, perfil: data.perfil }
}

export async function exigirOperacao(event: H3Event, operacao: Operacao) {
  const sessao = await perfilDaSessao(event)
  if (!pode(operacao, sessao.perfil)) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Operação não permitida para este perfil.',
    })
  }
  return sessao
}

export function falhaValidacao(campo: string, mensagem: string) {
  return createError({
    statusCode: 400,
    statusMessage: mensagem,
    data: { campo },
  })
}
