import type { EntrarCorpo } from '~/types/contratos'
import { autenticacaoIndisponivel } from '~/utils/acesso'
import { ehPerfilValido } from '~/utils/perfis'

export default defineEventHandler(async (event) => {
  const corpo = await readBody<EntrarCorpo>(event)
  const email = corpo?.email?.trim()
  const senha = corpo?.senha ?? ''

  if (!email || !senha) {
    throw createError({ statusCode: 400, statusMessage: 'Informe e-mail e senha.' })
  }

  const cliente = await dbUsuario(event)
  const admin = await dbAdmin(event)
  const { data: bloqueio, error: erroBloqueio } = await admin.rpc('estado_bloqueio_login', { p_email: email })
  if (erroBloqueio) {
    throw createError({ statusCode: 503, statusMessage: 'Não foi possível verificar o bloqueio de acesso.' })
  }
  const estado = bloqueio?.[0]

  if (estado?.bloqueado) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Acesso bloqueado por 15 minutos após cinco tentativas incorretas.',
      data: { bloqueadoAte: estado.bloqueado_ate },
    })
  }

  const { data, error } = await cliente.auth.signInWithPassword({ email, password: senha })

  if (error || !data.user) {
    if (autenticacaoIndisponivel(error)) {
      throw createError({
        statusCode: 503,
        statusMessage: 'Serviço de autenticação indisponível. Suba o Supabase local (Podman ou Docker e npm run db:start).',
      })
    }

    if (error?.code === 'email_provider_disabled' || error?.message?.includes('Email logins are disabled')) {
      throw createError({
        statusCode: 503,
        statusMessage: 'Login por e-mail está desligado no Auth. Em config.toml, [auth.email] enable_signup precisa ser true.',
      })
    }

    const { data: aposFalha, error: erroTentativa } = await admin.rpc('registrar_tentativa_login', {
      p_email: email,
      p_sucesso: false,
    })
    if (erroTentativa) {
      throw createError({ statusCode: 503, statusMessage: 'Não foi possível registrar a tentativa de acesso.' })
    }
    const novo = aposFalha?.[0]
    if (novo?.bloqueado) {
      throw createError({
        statusCode: 429,
        statusMessage: 'Acesso bloqueado por 15 minutos após cinco tentativas incorretas.',
        data: { bloqueadoAte: novo.bloqueado_ate },
      })
    }
    throw createError({ statusCode: 401, statusMessage: 'E-mail ou senha incorretos.' })
  }

  const { error: erroReset } = await admin.rpc('registrar_tentativa_login', {
    p_email: email,
    p_sucesso: true,
  })
  if (erroReset) {
    await cliente.auth.signOut()
    throw createError({ statusCode: 503, statusMessage: 'Não foi possível concluir o acesso com segurança.' })
  }

  const { data: perfil, error: erroPerfil } = await cliente
    .from('perfis')
    .select('perfil')
    .eq('id', data.user.id)
    .maybeSingle()

  if (erroPerfil || !ehPerfilValido(perfil?.perfil)) {
    await cliente.auth.signOut()
    throw createError({
      statusCode: erroPerfil ? 500 : 403,
      statusMessage: erroPerfil
        ? 'Não foi possível consultar o perfil de acesso.'
        : 'Usuário sem perfil de acesso cadastrado.',
    })
  }

  return {
    usuario: { id: data.user.id, email: data.user.email },
    perfil: perfil.perfil,
  }
})
