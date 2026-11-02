import { validarAtribuicaoPerfil } from '~/utils/acesso'
import type { AtribuirPerfilCorpo } from '~/types/contratos'

export default defineEventHandler(async (event) => {
  await exigirOperacao(event, 'atribuir_perfil')
  const id = getRouterParam(event, 'id')
  const corpo = await readBody<AtribuirPerfilCorpo>(event)

  if (!id) {
    throw falhaValidacao('id', 'Informe o usuário.')
  }
  if (!validarAtribuicaoPerfil(corpo?.perfil)) {
    throw falhaValidacao('perfil', 'Perfil deve ser voluntario ou coordenacao.')
  }

  const cliente = await dbUsuario(event)
  const { data, error } = await cliente
    .from('perfis')
    .update({ perfil: corpo.perfil })
    .eq('id', id)
    .select('id, nome, perfil, criado_em')
    .maybeSingle()

  if (error || !data) {
    throw createError({ statusCode: 404, statusMessage: 'Usuário não encontrado.' })
  }

  return data
})
