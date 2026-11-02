-- Saídas sintéticas preparam os testes de RF10, fora do fluxo da Sprint 6.
-- Voluntários continuam registrando recebimentos; somente a Coordenação pode
-- gravar saídas, inclusive por acesso direto à API ou à Data API do Supabase.
drop policy "autenticado registra movimentacoes" on public.movimentacoes_estoque;

create policy "perfis autorizados registram movimentacoes"
  on public.movimentacoes_estoque for insert
  to authenticated
  with check (
    (select public.tem_perfil())
    and registrado_por = (select auth.uid())
    and (
      tipo = 'entrada'
      or (tipo = 'saida' and (select public.eh_coordenacao()))
    )
  );
