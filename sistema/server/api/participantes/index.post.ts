import type { ParticipanteCorpo, ParticipanteResposta } from '~/types/contratos'
import { titularConsentimentoInformado, validarParticipante } from '~/utils/familias'

export default defineEventHandler(async (event): Promise<ParticipanteResposta> => {
  const sessao = await exigirOperacao(event, 'cadastrar_participante')
  const corpo = await readBody<ParticipanteCorpo>(event)

  const falha = validarParticipante(corpo)
  if (falha) {
    throw falhaValidacao(falha.campo, falha.mensagem)
  }
  if (!titularConsentimentoInformado(corpo.titularConsentimentoId)) {
    throw falhaValidacao('titularConsentimentoId', 'Selecione um titular com consentimento vigente para cadastro e atendimento (RN19).')
  }
  const titularConsentimentoId = corpo.titularConsentimentoId.trim()

  const cliente = await dbUsuario(event)

  const { data: consentimentoValido, error: erroConsentimento } = await cliente
    .rpc('consentimento_vigente', {
      p_titular_id: titularConsentimentoId,
      p_finalidade: 'cadastro_atendimento',
    })

  if (erroConsentimento) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível verificar o consentimento para cadastro.' })
  }
  if (!consentimentoValido) {
    throw falhaValidacao('titularConsentimentoId', 'O cadastro exige consentimento prévio vigente para cadastro e atendimento (RN19).')
  }

  const { data, error } = await cliente
    .from('participantes')
    .insert({
      nome: corpo.nome.trim(),
      data_nascimento: corpo.dataNascimento,
      telefone: corpo.telefone?.trim() || null,
      observacoes: corpo.observacoes?.trim() || null,
      situacao: 'ativo',
      titular_consentimento_id: titularConsentimentoId,
      criado_por: sessao.id,
    })
    .select()
    .single()

  if (error || !data) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível cadastrar o participante.' })
  }

  return {
    id: data.id,
    nome: data.nome,
    dataNascimento: data.data_nascimento,
    telefone: data.telefone,
    observacoes: data.observacoes,
    situacao: data.situacao,
    dataCadastro: data.data_cadastro,
    familiaId: data.familia_id,
    familia: null,
    responsavelLegal: data.responsavel_legal,
    motivoAusenciaResponsavel: data.motivo_ausencia_responsavel,
    titularConsentimentoId: data.titular_consentimento_id,
    turmas: [],
  }
})
