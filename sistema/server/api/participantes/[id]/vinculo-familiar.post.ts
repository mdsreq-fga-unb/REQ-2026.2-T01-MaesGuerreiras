import type { ParticipanteResposta, VinculoFamiliarCorpo } from '~/types/contratos'
import { validarVinculoFamiliar } from '~/utils/familias'

export default defineEventHandler(async (event): Promise<ParticipanteResposta> => {
  await exigirOperacao(event, 'vincular_participante')
  const id = getRouterParam(event, 'id')
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'ID do participante obrigatório.' })
  }

  const corpo = await readBody<VinculoFamiliarCorpo>(event)
  const cliente = await dbUsuario(event)

  const { data: participante, error: erroPart } = await cliente
    .from('participantes')
    .select('*')
    .eq('id', id)
    .single()

  if (erroPart || !participante) {
    throw createError({ statusCode: 404, statusMessage: 'Participante não encontrado.' })
  }

  // Verifica existência da família
  const { data: familia, error: erroFam } = await cliente
    .from('familias')
    .select('id, nome_responsavel')
    .eq('id', corpo.familiaId)
    .single()

  if (erroFam || !familia) {
    throw falhaValidacao('familiaId', 'Família não encontrada.')
  }

  const falha = validarVinculoFamiliar(
    {
      participanteId: id,
      familiaId: corpo.familiaId,
      responsavelLegal: corpo.responsavelLegal,
      motivoAusenciaResponsavel: corpo.motivoAusenciaResponsavel,
    },
    participante.data_nascimento,
  )
  if (falha) {
    throw falhaValidacao(falha.campo, falha.mensagem)
  }

  const { data: atualizado, error: erroUpd } = await cliente
    .from('participantes')
    .update({
      familia_id: corpo.familiaId,
      responsavel_legal: corpo.responsavelLegal?.trim() || null,
      motivo_ausencia_responsavel: corpo.motivoAusenciaResponsavel?.trim() || null,
      atualizado_em: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()

  if (erroUpd || !atualizado) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível vincular o participante à família.' })
  }

  return {
    id: atualizado.id,
    nome: atualizado.nome,
    dataNascimento: atualizado.data_nascimento,
    telefone: atualizado.telefone,
    observacoes: atualizado.observacoes,
    situacao: atualizado.situacao,
    dataCadastro: atualizado.data_cadastro,
    familiaId: atualizado.familia_id,
    familia: { id: familia.id, nomeResponsavel: familia.nome_responsavel },
    responsavelLegal: atualizado.responsavel_legal,
    motivoAusenciaResponsavel: atualizado.motivo_ausencia_responsavel,
    titularConsentimentoId: atualizado.titular_consentimento_id,
  }
})
