import type { FamiliaCorpo, FamiliaResposta } from '~/types/contratos'
import { validarFamilia } from '~/utils/familias'

export default defineEventHandler(async (event): Promise<FamiliaResposta> => {
  const sessao = await exigirOperacao(event, 'cadastrar_familia')
  const corpo = await readBody<FamiliaCorpo>(event)

  const falha = validarFamilia(corpo)
  if (falha) {
    throw falhaValidacao(falha.campo, falha.mensagem)
  }

  const cliente = await dbUsuario(event)

  // Integração com consentimento (RF42 / RN19 / CA-RF14-04):
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
    .from('familias')
    .insert({
      nome_responsavel: corpo.nomeResponsavel.trim(),
      telefone: corpo.telefone.trim(),
      logradouro: corpo.logradouro.trim(),
      complemento: corpo.complemento?.trim() || null,
      cidade: corpo.cidade.trim(),
      numero_moradores: corpo.numeroMoradores ?? null,
      observacoes: corpo.observacoes?.trim() || null,
      situacao: 'ativa',
      titular_consentimento_id: corpo.titularConsentimentoId || null,
      criado_por: sessao.id,
    })
    .select()
    .single()

  if (error || !data) {
    throw createError({ statusCode: 500, statusMessage: 'Não foi possível cadastrar a família.' })
  }

  // Atualiza vínculo no titular se aplicável
  if (corpo.titularConsentimentoId) {
    await cliente
      .from('titulares_consentimento')
      .update({ familia_id: data.id })
      .eq('id', corpo.titularConsentimentoId)
  }

  return {
    id: data.id,
    nomeResponsavel: data.nome_responsavel,
    telefone: data.telefone,
    logradouro: data.logradouro,
    complemento: data.complemento,
    cidade: data.cidade,
    numeroMoradores: data.numero_moradores,
    observacoes: data.observacoes,
    situacao: data.situacao,
    dataCadastro: data.data_cadastro,
    titularConsentimentoId: data.titular_consentimento_id,
  }
})
