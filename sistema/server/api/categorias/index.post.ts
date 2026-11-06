import { validarCategoria } from '~/utils/doacoes'
import type { CategoriaCorpo } from '~/types/contratos'

export default defineEventHandler(async (event) => {
  const sessao = await exigirOperacao(event, 'cadastrar_categoria')
  const corpo = await readBody<CategoriaCorpo>(event)
  const falha = validarCategoria(corpo)
  if (falha) {
    throw falhaValidacao(falha.campo, falha.mensagem)
  }

  const cliente = await dbUsuario(event)
  const { data, error } = await cliente
    .from('categorias_item')
    .insert({
      nome: corpo.nome.trim(),
      unidade: corpo.unidade,
      criado_por: sessao.id,
    })
    .select('id, nome, unidade')
    .single()

  if (error) {
    if (error.code === '23505') {
      throw falhaValidacao('nome', 'Já existe uma categoria com este nome.')
    }
    throw createError({ statusCode: 400, statusMessage: 'Não foi possível cadastrar a categoria.' })
  }

  return data
})
