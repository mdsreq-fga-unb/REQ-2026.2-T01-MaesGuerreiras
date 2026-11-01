import { validarCadastroUsuario } from '~/utils/acesso'
import { ehPerfilValido } from '~/utils/perfis'
import type { CadastrarUsuarioCorpo } from '~/types/contratos'

export default defineEventHandler(async (event) => {
  await exigirOperacao(event, 'cadastrar_usuario')
  const corpo = await readBody<CadastrarUsuarioCorpo>(event)
  const falha = validarCadastroUsuario(corpo)
  if (falha) {
    throw falhaValidacao(falha.campo, falha.mensagem)
  }

  const admin = await dbAdmin(event)
  const { data: criado, error } = await admin.auth.admin.createUser({
    email: corpo.email.trim(),
    password: corpo.senha,
    email_confirm: true,
  })

  if (error || !criado.user) {
    throw createError({
      statusCode: 400,
      statusMessage: error?.message ?? 'Não foi possível cadastrar o usuário.',
    })
  }

  const perfil = ehPerfilValido(corpo.perfil) ? corpo.perfil : 'voluntario'
  const { error: erroPerfil } = await admin.from('perfis').insert({
    id: criado.user.id,
    nome: corpo.nome.trim(),
    perfil,
  })

  if (erroPerfil) {
    await admin.auth.admin.deleteUser(criado.user.id)
    throw createError({ statusCode: 400, statusMessage: 'Não foi possível atribuir o perfil.' })
  }

  return {
    id: criado.user.id,
    nome: corpo.nome.trim(),
    email: criado.user.email ?? corpo.email.trim(),
    perfil,
    criadoEm: criado.user.created_at,
  }
})
