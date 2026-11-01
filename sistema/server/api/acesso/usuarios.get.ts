import { ehPerfilValido } from '~/utils/perfis'

export default defineEventHandler(async (event) => {
  await exigirOperacao(event, 'cadastrar_usuario')
  const admin = await dbAdmin(event)
  const { data: perfis, error } = await admin
    .from('perfis')
    .select('id, nome, perfil, criado_em')
    .order('criado_em', { ascending: true })

  if (error) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível listar os usuários.' })
  }

  const { data } = await admin.auth.admin.listUsers()
  const emails = new Map(data.users.map(usuario => [usuario.id, usuario.email ?? null]))

  return (perfis ?? []).map(item => ({
    id: item.id,
    nome: item.nome,
    email: emails.get(item.id) ?? null,
    perfil: ehPerfilValido(item.perfil) ? item.perfil : 'voluntario',
    criadoEm: item.criado_em,
  }))
})
