-- Cadastros, Turmas, Inscrições, Frequência e Destinação (Sprint 7)
-- Requisitos: RF10, RF14, RF16, RF18, RF19, RF20, RF23, RF27, RF28, RF29, RF30, RF31

-- 1. Famílias (RF14 / RN04)
create table public.familias (
  id uuid primary key default gen_random_uuid(),
  nome_responsavel text not null,
  telefone text not null,
  logradouro text not null,
  complemento text,
  cidade text not null,
  numero_moradores integer,
  observacoes text,
  situacao text not null default 'ativa',
  data_cadastro date not null default current_date,
  titular_consentimento_id uuid references public.titulares_consentimento (id) on delete set null,
  criado_por uuid not null references public.perfis (id),
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now(),
  constraint familia_nome_responsavel check (length(trim(nome_responsavel)) > 0),
  constraint familia_telefone check (length(trim(telefone)) > 0),
  constraint familia_logradouro check (length(trim(logradouro)) > 0),
  constraint familia_cidade check (length(trim(cidade)) > 0),
  constraint familia_numero_moradores check (numero_moradores is null or numero_moradores >= 1),
  constraint familia_situacao check (situacao in ('ativa', 'inativa'))
);

-- FK de titulares_consentimento para familias (Sprint 6 havia deixado sem FK)
alter table public.titulares_consentimento
  add constraint titulares_familia_fk
  foreign key (familia_id) references public.familias (id) on delete set null;

alter table public.familias enable row level security;

create policy "autenticado le familias"
  on public.familias for select
  to authenticated
  using ((select public.tem_perfil()));

create policy "autenticado cadastra familias"
  on public.familias for insert
  to authenticated
  with check ((select public.tem_perfil()) and criado_por = (select auth.uid()));

create policy "autenticado altera familias"
  on public.familias for update
  to authenticated
  using ((select public.tem_perfil()))
  with check ((select public.tem_perfil()));

-- 2. Participantes (RF16, RF18, RF19 / RN05, RN08)
create table public.participantes (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  data_nascimento date not null,
  telefone text,
  observacoes text,
  situacao text not null default 'ativo',
  data_cadastro date not null default current_date,
  familia_id uuid references public.familias (id) on delete set null,
  responsavel_legal text,
  motivo_ausencia_responsavel text,
  titular_consentimento_id uuid references public.titulares_consentimento (id) on delete set null,
  criado_por uuid not null references public.perfis (id),
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now(),
  constraint participante_nome check (length(trim(nome)) > 0),
  constraint participante_situacao check (situacao in ('ativo', 'inativo'))
);

create index participantes_familia_idx on public.participantes (familia_id);

alter table public.participantes enable row level security;

create policy "autenticado le participantes"
  on public.participantes for select
  to authenticated
  using ((select public.tem_perfil()));

create policy "autenticado cadastra participantes"
  on public.participantes for insert
  to authenticated
  with check ((select public.tem_perfil()) and criado_por = (select auth.uid()));

create policy "autenticado altera participantes"
  on public.participantes for update
  to authenticated
  using ((select public.tem_perfil()))
  with check ((select public.tem_perfil()));

-- 3. Turmas (RF20 / RN09)
create table public.turmas (
  id uuid primary key default gen_random_uuid(),
  atividade text not null,
  data_inicio date not null,
  data_termino date not null,
  dias_semana text[] not null default '{}',
  horario text not null,
  vagas integer not null,
  criado_por uuid not null references public.perfis (id),
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now(),
  constraint turma_atividade check (length(trim(atividade)) > 0),
  constraint turma_horario check (length(trim(horario)) > 0),
  constraint turma_vagas check (vagas > 0),
  constraint turma_dias_semana check (cardinality(dias_semana) > 0),
  constraint turma_termino_apos_inicio check (data_termino > data_inicio)
);

alter table public.turmas enable row level security;

create policy "autenticado le turmas"
  on public.turmas for select
  to authenticated
  using ((select public.tem_perfil()));

-- CA-RF20-04: Somente Coordenação cadastra turmas.
create policy "coordenacao cadastra turmas"
  on public.turmas for insert
  to authenticated
  with check ((select public.eh_coordenacao()) and criado_por = (select auth.uid()));

create policy "coordenacao altera turmas"
  on public.turmas for update
  to authenticated
  using ((select public.eh_coordenacao()))
  with check ((select public.eh_coordenacao()));

-- 4. Inscrições de Participantes em Turmas (RF23 / RN12)
create table public.inscricoes (
  id uuid primary key default gen_random_uuid(),
  turma_id uuid not null references public.turmas (id) on delete cascade,
  participante_id uuid not null references public.participantes (id) on delete cascade,
  data_inscricao date not null default current_date,
  situacao text not null default 'ativa',
  motivo_cancelamento text,
  criado_por uuid not null references public.perfis (id),
  criado_em timestamptz not null default now(),
  constraint inscricao_situacao check (situacao in ('ativa', 'cancelada')),
  constraint inscricao_unica_turma_participante unique (turma_id, participante_id)
);

create index inscricoes_turma_idx on public.inscricoes (turma_id);
create index inscricoes_participante_idx on public.inscricoes (participante_id);

alter table public.inscricoes enable row level security;

create policy "autenticado le inscricoes"
  on public.inscricoes for select
  to authenticated
  using ((select public.tem_perfil()));

create policy "autenticado cadastra inscricoes"
  on public.inscricoes for insert
  to authenticated
  with check ((select public.tem_perfil()) and criado_por = (select auth.uid()));

create policy "autenticado altera inscricoes"
  on public.inscricoes for update
  to authenticated
  using ((select public.tem_perfil()))
  with check ((select public.tem_perfil()));

-- Trigger de validação de inscrição (RN12: participante ativo e vagas disponíveis)
create function public.validar_inscricao_turma()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_situacao text;
  v_vagas integer;
  v_ocupadas integer;
begin
  select situacao into v_situacao
  from public.participantes
  where id = new.participante_id;

  if v_situacao is distinct from 'ativo' then
    raise exception 'participante inativo não pode ser inscrito' using errcode = 'P0001';
  end if;

  select vagas into v_vagas
  from public.turmas
  where id = new.turma_id
  for update;

  if v_vagas is null then
    raise exception 'turma não encontrada' using errcode = 'P0001';
  end if;

  select count(*) into v_ocupadas
  from public.inscricoes
  where turma_id = new.turma_id and situacao = 'ativa';

  if v_ocupadas >= v_vagas then
    raise exception 'turma cheia' using errcode = 'P0001';
  end if;

  return new;
end;
$$;

create trigger inscricoes_validar_antes_de_inserir
  before insert on public.inscricoes
  for each row
  execute function public.validar_inscricao_turma();

-- 5. Destinação de Doações (RF10 / RN02)
-- Adiciona destinatários reais na tabela de movimentações de estoque
alter table public.movimentacoes_estoque
  add column familia_id uuid references public.familias (id) on delete restrict,
  add column turma_id uuid references public.turmas (id) on delete restrict;

alter table public.movimentacoes_estoque
  drop constraint if exists entrada_completa;

alter table public.movimentacoes_estoque
  add constraint movimentacao_destinatario_valido check (
    (tipo = 'entrada' and doador_id is not null and familia_id is null and turma_id is null and destino_sintetico is null)
    or (
      tipo = 'saida' and doador_id is null and (
        (familia_id is not null and turma_id is null and destino_sintetico is null)
        or (turma_id is not null and familia_id is null and destino_sintetico is null)
        or (destino_sintetico is not null and familia_id is null and turma_id is null)
      )
    )
  );

-- Atualiza RLS para permitir que Voluntário ou Coordenação registrem destinações reais (RF10)
drop policy if exists "perfis autorizados registram movimentacoes" on public.movimentacoes_estoque;

create policy "perfis autorizados registram movimentacoes"
  on public.movimentacoes_estoque for insert
  to authenticated
  with check (
    (select public.tem_perfil())
    and registrado_por = (select auth.uid())
    and (
      tipo = 'entrada'
      or (tipo = 'saida' and (
        familia_id is not null
        or turma_id is not null
        or (select public.eh_coordenacao())
      ))
    )
  );

-- 6. Chamadas de Encontros (RF27 / RN15)
create table public.chamadas (
  id uuid primary key default gen_random_uuid(),
  turma_id uuid not null references public.turmas (id) on delete cascade,
  data_encontro date not null,
  aberta_por uuid not null references public.perfis (id),
  aberta_em timestamptz not null default now(),
  constraint chamada_turma_data_unica unique (turma_id, data_encontro)
);

create index chamadas_turma_idx on public.chamadas (turma_id);

alter table public.chamadas enable row level security;

create policy "autenticado le chamadas"
  on public.chamadas for select
  to authenticated
  using ((select public.tem_perfil()));

create policy "autenticado abre chamadas"
  on public.chamadas for insert
  to authenticated
  with check ((select public.tem_perfil()) and aberta_por = (select auth.uid()));

-- Trigger RN15: abertura na data do encontro
create function public.validar_abertura_chamada()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.data_encontro <> current_date then
    raise exception 'a chamada só pode ser aberta na data do encontro' using errcode = 'P0001';
  end if;
  return new;
end;
$$;

create trigger chamadas_validar_data
  before insert on public.chamadas
  for each row
  execute function public.validar_abertura_chamada();

-- 7. Frequências (RF28, RF29, RF30, RF31 / RN15, RN16, RN17, RNF19)
create table public.frequencias (
  id uuid primary key default gen_random_uuid(),
  chamada_id uuid not null references public.chamadas (id) on delete cascade,
  participante_id uuid not null references public.participantes (id) on delete cascade,
  presente boolean not null,
  justificada boolean not null default false,
  motivo_justificativa text,
  registrado_por uuid not null references public.perfis (id),
  registrado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now(),
  constraint frequencia_chamada_participante unique (chamada_id, participante_id),
  constraint frequencia_justificativa_coerente check (
    (not justificada and motivo_justificativa is null)
    or (justificada and not presente and motivo_justificativa is not null and length(trim(motivo_justificativa)) > 0)
  )
);

create index frequencias_chamada_idx on public.frequencias (chamada_id);
create index frequencias_participante_idx on public.frequencias (participante_id);

alter table public.frequencias enable row level security;

create policy "autenticado le frequencias"
  on public.frequencias for select
  to authenticated
  using ((select public.tem_perfil()));

create policy "autenticado registra frequencias"
  on public.frequencias for insert
  to authenticated
  with check ((select public.tem_perfil()) and registrado_por = (select auth.uid()));

create policy "autenticado atualiza frequencias"
  on public.frequencias for update
  to authenticated
  using ((select public.tem_perfil()))
  with check ((select public.tem_perfil()));

-- CA-RF28-03: Participante deve estar inscrito na turma correspondente
create function public.validar_participante_na_turma()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_turma_id uuid;
  v_inscrito boolean;
begin
  select turma_id into v_turma_id
  from public.chamadas
  where id = new.chamada_id;

  select exists (
    select 1 from public.inscricoes
    where turma_id = v_turma_id and participante_id = new.participante_id and situacao = 'ativa'
  ) into v_inscrito;

  if not v_inscrito then
    raise exception 'participante não está inscrito na turma' using errcode = 'P0001';
  end if;

  return new;
end;
$$;

create trigger frequencias_validar_participante
  before insert on public.frequencias
  for each row
  execute function public.validar_participante_na_turma();

-- 8. Alterações e Auditoria de Frequência (RF30 / RN17, RNF19)
create table public.frequencias_alteracoes (
  id uuid primary key default gen_random_uuid(),
  frequencia_id uuid not null references public.frequencias (id) on delete cascade,
  autor_id uuid not null references public.perfis (id),
  campo text not null,
  valor_anterior text,
  valor_novo text,
  motivo text,
  alterado_em timestamptz not null default now()
);

create index frequencias_alteracoes_frequencia_idx on public.frequencias_alteracoes (frequencia_id);

alter table public.frequencias_alteracoes enable row level security;

create policy "autenticado le alteracoes de frequencia"
  on public.frequencias_alteracoes for select
  to authenticated
  using ((select public.tem_perfil()));

create policy "autenticado registra alteracoes de frequencia"
  on public.frequencias_alteracoes for insert
  to authenticated
  with check ((select public.tem_perfil()) and autor_id = (select auth.uid()));

-- Trigger de auditoria e validação de permissões RN17 na correção de frequência
create function public.registrar_alteracao_frequencia()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_eh_coord boolean;
  v_mesmo_dia boolean;
begin
  select public.eh_coordenacao() into v_eh_coord;
  v_mesmo_dia := (old.registrado_em::date = current_date);

  -- RN17: Voluntário só corrige a chamada que ele próprio registrou até o fim do mesmo dia
  if not v_eh_coord then
    if old.registrado_por is distinct from (select auth.uid()) then
      raise exception 'voluntário só corrige frequência registrada por ele mesmo' using errcode = '42501';
    end if;
    if not v_mesmo_dia then
      raise exception 'voluntário só corrige frequência até o fim do mesmo dia' using errcode = '42501';
    end if;
  end if;

  if old.presente is distinct from new.presente then
    insert into public.frequencias_alteracoes (frequencia_id, autor_id, campo, valor_anterior, valor_novo)
    values (old.id, (select auth.uid()), 'presente', old.presente::text, new.presente::text);
  end if;

  if old.justificada is distinct from new.justificada then
    insert into public.frequencias_alteracoes (frequencia_id, autor_id, campo, valor_anterior, valor_novo)
    values (old.id, (select auth.uid()), 'justificada', old.justificada::text, new.justificada::text);
  end if;

  if old.motivo_justificativa is distinct from new.motivo_justificativa then
    insert into public.frequencias_alteracoes (frequencia_id, autor_id, campo, valor_anterior, valor_novo)
    values (old.id, (select auth.uid()), 'motivo_justificativa', old.motivo_justificativa, new.motivo_justificativa);
  end if;

  new.atualizado_em := now();
  return new;
end;
$$;

create trigger frequencias_registrar_alteracao
  before update on public.frequencias
  for each row
  execute function public.registrar_alteracao_frequencia();
