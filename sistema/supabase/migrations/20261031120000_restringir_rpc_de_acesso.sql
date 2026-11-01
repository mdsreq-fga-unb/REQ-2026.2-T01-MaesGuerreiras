-- As funções de bloqueio são usadas exclusivamente pela API de login no servidor.
revoke all on function public.estado_bloqueio_login(text) from public, anon, authenticated;
grant execute on function public.estado_bloqueio_login(text) to service_role;

revoke all on function public.registrar_tentativa_login(text, boolean) from public, anon, authenticated;
grant execute on function public.registrar_tentativa_login(text, boolean) to service_role;

-- Os consentimentos são consultados por usuários autenticados, nunca anonimamente.
revoke all on function public.consentimento_vigente(
  uuid,
  public.finalidade_consentimento
) from public, anon;
grant execute on function public.consentimento_vigente(
  uuid,
  public.finalidade_consentimento
) to authenticated;

revoke all on function public.imagem_autorizada_vigente(uuid) from public, anon;
grant execute on function public.imagem_autorizada_vigente(uuid) to authenticated;
