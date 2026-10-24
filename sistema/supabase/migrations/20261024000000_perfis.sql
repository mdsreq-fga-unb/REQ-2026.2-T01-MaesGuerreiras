-- Perfis de acesso (RF40, tabela de permissões da seção 8.4).
-- Cada usuário do Supabase Auth tem no máximo um perfil.

create type public.perfil_acesso as enum ('voluntario', 'coordenacao');

create table public.perfis (
  id uuid primary key references auth.users (id) on delete cascade,
  nome text not null,
  perfil public.perfil_acesso not null default 'voluntario',
  criado_em timestamptz not null default now()
);

-- RLS ligado desde a primeira tabela (RNF07): sem política, nada é acessível.
alter table public.perfis enable row level security;

-- security definer evita recursão nas políticas que consultam a própria tabela.
create function public.eh_coordenacao()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.perfis
    where id = (select auth.uid()) and perfil = 'coordenacao'
  );
$$;

create policy "usuario le o proprio perfil"
  on public.perfis for select
  to authenticated
  using (id = (select auth.uid()));

create policy "coordenacao le todos os perfis"
  on public.perfis for select
  to authenticated
  using ((select public.eh_coordenacao()));

-- Só a Coordenação cadastra usuários e atribui perfis (RF39, RF40).
create policy "coordenacao cadastra perfis"
  on public.perfis for insert
  to authenticated
  with check ((select public.eh_coordenacao()));

create policy "coordenacao altera perfis"
  on public.perfis for update
  to authenticated
  using ((select public.eh_coordenacao()))
  with check ((select public.eh_coordenacao()));
