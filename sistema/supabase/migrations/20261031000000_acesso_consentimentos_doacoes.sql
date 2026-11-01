-- Acesso, consentimentos e doações (Sprint 6).
-- Decisões desta migration:
-- - Unidade da categoria é lista fechada: unidade, quilo ou pacote (RN02).
-- - Doador: pessoa ou organização, nome e ao menos um contato (CA-US08-01).
-- - Doação anônima não entra nesta sprint (CA-US08-06 pendente de confirmação).
-- - Famílias, participantes e destinação real ficam para a Sprint 7.
-- - RNF15 não usa o default do Auth (senha 6, sem inatividade, sem bloqueio por conta).

create function public.tem_perfil()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.perfis
    where id = (select auth.uid())
  );
$$;

grant execute on function public.tem_perfil() to authenticated;
grant execute on function public.eh_coordenacao() to authenticated;

-- Bloqueio de tentativas (RNF15): 5 falhas seguidas → 15 minutos.
create table public.controle_acesso (
  email text primary key,
  tentativas_falhas integer not null default 0,
  bloqueado_ate timestamptz
);

alter table public.controle_acesso enable row level security;

create function public.estado_bloqueio_login(p_email text)
returns table (bloqueado boolean, bloqueado_ate timestamptz, tentativas_falhas integer)
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_email text := lower(trim(p_email));
  v_row public.controle_acesso%rowtype;
begin
  select * into v_row from public.controle_acesso where email = v_email;
  if not found then
    return query select false, null::timestamptz, 0;
    return;
  end if;

  if v_row.bloqueado_ate is not null and v_row.bloqueado_ate > now() then
    return query select true, v_row.bloqueado_ate, v_row.tentativas_falhas;
  else
    return query select false, v_row.bloqueado_ate, v_row.tentativas_falhas;
  end if;
end;
$$;

create function public.registrar_tentativa_login(p_email text, p_sucesso boolean)
returns table (bloqueado boolean, bloqueado_ate timestamptz, tentativas_falhas integer)
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_email text := lower(trim(p_email));
  v_row public.controle_acesso%rowtype;
  v_falhas integer;
  v_ate timestamptz;
begin
  if p_sucesso then
    delete from public.controle_acesso where email = v_email;
    return query select false, null::timestamptz, 0;
    return;
  end if;

  select * into v_row from public.controle_acesso where email = v_email;

  if found and v_row.bloqueado_ate is not null and v_row.bloqueado_ate > now() then
    return query select true, v_row.bloqueado_ate, v_row.tentativas_falhas;
    return;
  end if;

  v_falhas := case
    when found and (v_row.bloqueado_ate is null or v_row.bloqueado_ate <= now())
      then case when v_row.bloqueado_ate is not null then 1 else v_row.tentativas_falhas + 1 end
    else 1
  end;
  v_ate := case when v_falhas >= 5 then now() + interval '15 minutes' else null end;

  insert into public.controle_acesso as c (email, tentativas_falhas, bloqueado_ate)
  values (v_email, v_falhas, v_ate)
  on conflict (email) do update
    set tentativas_falhas = excluded.tentativas_falhas,
        bloqueado_ate = excluded.bloqueado_ate;

  return query select (v_ate is not null), v_ate, v_falhas;
end;
$$;

grant execute on function public.estado_bloqueio_login(text) to anon, authenticated;
grant execute on function public.registrar_tentativa_login(text, boolean) to anon, authenticated;

-- Categorias (RF11 / RN02).
create type public.unidade_medida as enum ('unidade', 'quilo', 'pacote');

create table public.categorias_item (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  unidade public.unidade_medida not null,
  criado_por uuid not null references public.perfis (id),
  criado_em timestamptz not null default now(),
  constraint categorias_item_nome_unico unique (nome)
);

create unique index categorias_item_nome_ci on public.categorias_item (lower(nome));

alter table public.categorias_item enable row level security;

create policy "autenticado le categorias"
  on public.categorias_item for select
  to authenticated
  using ((select public.tem_perfil()));

create policy "coordenacao cadastra categorias"
  on public.categorias_item for insert
  to authenticated
  with check ((select public.eh_coordenacao()));

create policy "coordenacao altera categorias"
  on public.categorias_item for update
  to authenticated
  using ((select public.eh_coordenacao()))
  with check ((select public.eh_coordenacao()));

-- Doadores (RF08) e trilha de correção (RNF19).
create type public.tipo_doador as enum ('pessoa', 'organizacao');

create table public.doadores (
  id uuid primary key default gen_random_uuid(),
  tipo public.tipo_doador not null,
  nome text not null,
  telefone text,
  email text,
  criado_por uuid not null references public.perfis (id),
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now(),
  constraint doador_tem_nome check (length(trim(nome)) > 0),
  constraint doador_tem_contato check (
    (telefone is not null and length(trim(telefone)) > 0)
    or (email is not null and length(trim(email)) > 0)
  )
);

alter table public.doadores enable row level security;

create policy "autenticado le doadores"
  on public.doadores for select
  to authenticated
  using ((select public.tem_perfil()));

create policy "autenticado cadastra doadores"
  on public.doadores for insert
  to authenticated
  with check ((select public.tem_perfil()) and criado_por = (select auth.uid()));

create policy "autenticado corrige doadores"
  on public.doadores for update
  to authenticated
  using ((select public.tem_perfil()))
  with check ((select public.tem_perfil()));

create table public.doadores_alteracoes (
  id uuid primary key default gen_random_uuid(),
  doador_id uuid not null references public.doadores (id) on delete cascade,
  autor_id uuid not null references public.perfis (id),
  campo text not null,
  valor_anterior text,
  valor_novo text,
  alterado_em timestamptz not null default now()
);

alter table public.doadores_alteracoes enable row level security;

create policy "autenticado le alteracoes de doador"
  on public.doadores_alteracoes for select
  to authenticated
  using ((select public.tem_perfil()));

create function public.registrar_alteracao_doador()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if old.tipo is distinct from new.tipo then
    insert into public.doadores_alteracoes (doador_id, autor_id, campo, valor_anterior, valor_novo)
    values (old.id, (select auth.uid()), 'tipo', old.tipo::text, new.tipo::text);
  end if;
  if old.nome is distinct from new.nome then
    insert into public.doadores_alteracoes (doador_id, autor_id, campo, valor_anterior, valor_novo)
    values (old.id, (select auth.uid()), 'nome', old.nome, new.nome);
  end if;
  if old.telefone is distinct from new.telefone then
    insert into public.doadores_alteracoes (doador_id, autor_id, campo, valor_anterior, valor_novo)
    values (old.id, (select auth.uid()), 'telefone', old.telefone, new.telefone);
  end if;
  if old.email is distinct from new.email then
    insert into public.doadores_alteracoes (doador_id, autor_id, campo, valor_anterior, valor_novo)
    values (old.id, (select auth.uid()), 'email', old.email, new.email);
  end if;
  new.atualizado_em := now();
  return new;
end;
$$;

create trigger doadores_registrar_alteracao
  before update on public.doadores
  for each row
  execute function public.registrar_alteracao_doador();

-- Movimentações e saldo (RF09, RF12). Saídas sintéticas preparam RF10.
create type public.tipo_movimentacao as enum ('entrada', 'saida');

create table public.movimentacoes_estoque (
  id uuid primary key default gen_random_uuid(),
  tipo public.tipo_movimentacao not null,
  categoria_id uuid not null references public.categorias_item (id),
  quantidade numeric(12, 3) not null,
  data date not null,
  doador_id uuid references public.doadores (id),
  destino_sintetico text,
  registrado_por uuid not null references public.perfis (id),
  criado_em timestamptz not null default now(),
  constraint quantidade_positiva check (quantidade > 0),
  constraint entrada_completa check (
    (tipo = 'entrada' and doador_id is not null and destino_sintetico is null)
    or (tipo = 'saida' and doador_id is null and destino_sintetico is not null)
  )
);

create index movimentacoes_categoria_idx on public.movimentacoes_estoque (categoria_id);

alter table public.movimentacoes_estoque enable row level security;

create policy "autenticado le movimentacoes"
  on public.movimentacoes_estoque for select
  to authenticated
  using ((select public.tem_perfil()));

create policy "autenticado registra movimentacoes"
  on public.movimentacoes_estoque for insert
  to authenticated
  with check ((select public.tem_perfil()) and registrado_por = (select auth.uid()));

create function public.impedir_saida_sem_saldo()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_saldo numeric;
begin
  if new.tipo <> 'saida' then
    return new;
  end if;

  select coalesce(sum(
    case
      when tipo = 'entrada' then quantidade
      when tipo = 'saida' then -quantidade
    end
  ), 0)
  into v_saldo
  from public.movimentacoes_estoque
  where categoria_id = new.categoria_id;

  if new.quantidade > v_saldo then
    raise exception 'quantidade maior que o saldo disponível (%)', v_saldo
      using errcode = 'P0001';
  end if;

  return new;
end;
$$;

create trigger movimentacoes_impedir_saida_sem_saldo
  before insert on public.movimentacoes_estoque
  for each row
  execute function public.impedir_saida_sem_saldo();

create view public.saldos_categoria
with (security_invoker = true) as
select
  c.id as categoria_id,
  c.nome,
  c.unidade,
  coalesce(sum(
    case
      when m.tipo = 'entrada' then m.quantidade
      when m.tipo = 'saida' then -m.quantidade
    end
  ), 0) as saldo
from public.categorias_item c
left join public.movimentacoes_estoque m on m.categoria_id = c.id
group by c.id, c.nome, c.unidade;

grant select on public.saldos_categoria to authenticated;

-- Consentimentos e imagem (RF42 / RN19).
-- titulares.familia_id fica sem FK até o cadastro de famílias (Sprint 7).
create type public.papel_titular as enum ('titular', 'responsavel_legal');
create type public.finalidade_consentimento as enum (
  'cadastro_atendimento',
  'frequencia',
  'contato_familia',
  'relatorios_apoiadores'
);
create type public.meio_divulgacao as enum ('site', 'redes_sociais', 'materiais_impressos');

create table public.titulares_consentimento (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  papel public.papel_titular not null,
  familia_id uuid,
  criado_por uuid not null references public.perfis (id),
  criado_em timestamptz not null default now(),
  constraint titular_tem_nome check (length(trim(nome)) > 0)
);

alter table public.titulares_consentimento enable row level security;

create policy "autenticado le titulares"
  on public.titulares_consentimento for select
  to authenticated
  using ((select public.tem_perfil()));

create policy "autenticado cadastra titulares"
  on public.titulares_consentimento for insert
  to authenticated
  with check ((select public.tem_perfil()) and criado_por = (select auth.uid()));

create table public.consentimentos (
  id uuid primary key default gen_random_uuid(),
  titular_id uuid not null references public.titulares_consentimento (id) on delete cascade,
  finalidade public.finalidade_consentimento not null,
  concedido boolean not null,
  registrado_em timestamptz not null default now(),
  registrado_por uuid not null references public.perfis (id)
);

alter table public.consentimentos enable row level security;

create policy "autenticado le consentimentos"
  on public.consentimentos for select
  to authenticated
  using ((select public.tem_perfil()));

create policy "autenticado registra consentimentos"
  on public.consentimentos for insert
  to authenticated
  with check ((select public.tem_perfil()) and registrado_por = (select auth.uid()));

create table public.autorizacoes_imagem (
  id uuid primary key default gen_random_uuid(),
  titular_id uuid not null references public.titulares_consentimento (id) on delete cascade,
  autorizado boolean not null,
  meios public.meio_divulgacao[] not null default '{}',
  revogacao boolean not null default false,
  registrado_em timestamptz not null default now(),
  registrado_por uuid not null references public.perfis (id),
  constraint imagem_meios_quando_autorizada check (
    (autorizado = false and meios = '{}')
    or (autorizado = true and cardinality(meios) > 0)
  )
);

alter table public.autorizacoes_imagem enable row level security;

create policy "autenticado le autorizacoes de imagem"
  on public.autorizacoes_imagem for select
  to authenticated
  using ((select public.tem_perfil()));

create policy "autenticado registra autorizacoes de imagem"
  on public.autorizacoes_imagem for insert
  to authenticated
  with check ((select public.tem_perfil()) and registrado_por = (select auth.uid()));

-- Funções para a Sprint 7: cadastros reais só depois do consentimento vigente.
create function public.consentimento_vigente(p_titular_id uuid, p_finalidade public.finalidade_consentimento)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce((
    select concedido
    from public.consentimentos
    where titular_id = p_titular_id and finalidade = p_finalidade
    order by registrado_em desc
    limit 1
  ), false);
$$;

create function public.imagem_autorizada_vigente(p_titular_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce((
    select autorizado and not revogacao
    from public.autorizacoes_imagem
    where titular_id = p_titular_id
    order by registrado_em desc
    limit 1
  ), false);
$$;

grant execute on function public.consentimento_vigente(uuid, public.finalidade_consentimento) to authenticated;
grant execute on function public.imagem_autorizada_vigente(uuid) to authenticated;
