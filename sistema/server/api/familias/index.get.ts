import type { FamiliaResposta } from '~/types/contratos'
import type { Database } from '~/types/database.types'

type FamiliaLinha = Database['public']['Tables']['familias']['Row']

export default defineEventHandler(async (event): Promise<FamiliaResposta[]> => {
  const t0 = performance.now()
  await exigirOperacao(event, 'consultar_participante')
  const query = getQuery(event)
  const busca = typeof query.busca === 'string' ? query.busca.trim().toLowerCase() : ''

  const cliente = await dbUsuario(event)
  let consulta = cliente
    .from('familias')
    .select('*')
    .order('nome_responsavel', { ascending: true })

  if (busca) {
    consulta = consulta.ilike('nome_responsavel', `%${busca}%`)
  }

  const { data, error } = await consulta
  if (error) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível listar as famílias.' })
  }

  const duracao = Math.round(performance.now() - t0)
  setHeader(event, 'Server-Timing', `busca;dur=${duracao}`)

  return ((data || []) as FamiliaLinha[]).map(f => ({
    id: f.id,
    nomeResponsavel: f.nome_responsavel,
    telefone: f.telefone,
    logradouro: f.logradouro,
    complemento: f.complemento,
    cidade: f.cidade,
    numeroMoradores: f.numero_moradores,
    observacoes: f.observacoes,
    situacao: f.situacao,
    dataCadastro: f.data_cadastro,
    titularConsentimentoId: f.titular_consentimento_id,
  }))
})
