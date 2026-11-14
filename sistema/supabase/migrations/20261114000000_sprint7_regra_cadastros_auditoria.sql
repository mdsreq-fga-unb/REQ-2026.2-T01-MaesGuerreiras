-- Mantém no banco as regras de lotação e auditoria mesmo fora da API.

create or replace function public.validar_inscricao_turma()
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
  if new.situacao <> 'ativa' then
    return new;
  end if;

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
  where turma_id = new.turma_id
    and situacao = 'ativa'
    and id is distinct from new.id;

  if v_ocupadas >= v_vagas then
    raise exception 'turma cheia' using errcode = 'P0001';
  end if;

  return new;
end;
$$;

drop trigger if exists inscricoes_validar_antes_de_inserir on public.inscricoes;

create trigger inscricoes_validar_antes_de_inserir
  before insert or update of turma_id, participante_id, situacao on public.inscricoes
  for each row
  execute function public.validar_inscricao_turma();

create or replace function public.registrar_alteracao_frequencia()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_eh_coord boolean;
  v_mesmo_dia boolean;
  v_motivo text;
begin
  select public.eh_coordenacao() into v_eh_coord;
  v_mesmo_dia := (old.registrado_em::date = current_date);
  v_motivo := nullif(btrim(coalesce(current_setting('app.motivo_correcao', true), '')), '');

  if not v_eh_coord then
    if old.registrado_por is distinct from (select auth.uid()) then
      raise exception 'voluntário só corrige frequência registrada por ele mesmo' using errcode = '42501';
    end if;
    if not v_mesmo_dia then
      raise exception 'voluntário só corrige frequência até o fim do mesmo dia' using errcode = '42501';
    end if;
  elsif v_motivo is null then
    raise exception 'coordenação deve informar o motivo da correção' using errcode = 'P0001';
  end if;

  if old.presente is distinct from new.presente then
    insert into public.frequencias_alteracoes (frequencia_id, autor_id, campo, valor_anterior, valor_novo, motivo)
    values (old.id, (select auth.uid()), 'presente', old.presente::text, new.presente::text, v_motivo);
  end if;

  if old.justificada is distinct from new.justificada then
    insert into public.frequencias_alteracoes (frequencia_id, autor_id, campo, valor_anterior, valor_novo, motivo)
    values (old.id, (select auth.uid()), 'justificada', old.justificada::text, new.justificada::text, v_motivo);
  end if;

  if old.motivo_justificativa is distinct from new.motivo_justificativa then
    insert into public.frequencias_alteracoes (frequencia_id, autor_id, campo, valor_anterior, valor_novo, motivo)
    values (old.id, (select auth.uid()), 'motivo_justificativa', old.motivo_justificativa, new.motivo_justificativa, v_motivo);
  end if;

  new.atualizado_em := now();
  return new;
end;
$$;

create or replace function public.corrigir_frequencia(
  p_frequencia_id uuid,
  p_presente boolean,
  p_justificada boolean,
  p_motivo_justificativa text,
  p_motivo_correcao text
)
returns boolean
language plpgsql
set search_path = ''
as $$
begin
  perform set_config('app.motivo_correcao', coalesce(p_motivo_correcao, ''), true);

  update public.frequencias
  set presente = p_presente,
      justificada = p_justificada,
      motivo_justificativa = p_motivo_justificativa
  where id = p_frequencia_id;

  return found;
end;
$$;

revoke all on function public.corrigir_frequencia(uuid, boolean, boolean, text, text) from public, anon;
grant execute on function public.corrigir_frequencia(uuid, boolean, boolean, text, text) to authenticated;
