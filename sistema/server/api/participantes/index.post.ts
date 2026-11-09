import type { ParticipanteCorpo, ParticipanteResposta } from '~/types/contratos'
import { validarParticipante } from '~/utils/familias'

export default defineEventHandler(async (event): Promise<ParticipanteResposta> => {
  const sessao = await exigirOperacao(event, 'cadastrar_participante')
  const corpo = await readBody<ParticipanteCorpo>(event)

  const falha = validarParticipante(corpo)
  if (falha) {
    throw falhaValidacao(falha.campo, falha.mensagem)
  }

  const cliente = await dbUsuario(event)

  // Integração com consentimento (RF42 / RN19 / CA-RF16-04)
  if (corpo.titularConsentimentoId) {
    const { data: consentimentoValido } = await cliente
      .rpc('consentimento_vigente', {
        p_titular_id: corpo.titularConsentimentoId,
        p_finalidade: 'cadastro_atendimento',
      })

    if (!consentimentoValido) {
      throw falhaValidacao('titularConsentimentoId', 'O cadastro exige consentimento prévio registrado para cadastro e atendimento (RN19).')
    }
  }

  const { data, error } = await cliente
    .from('participantes')
    .insert({
      nome: corpo.nome.trim(),
      data_nascimento: corpo.dataNascimento,
      telefone: corpo.telefone?.trim() || null,
      observacoes: corpo.observacoes?.trim() || null,
      situacao: 'ativo',
      titular_consentimento_id: corpo.titularConsentimentoId || null,
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
