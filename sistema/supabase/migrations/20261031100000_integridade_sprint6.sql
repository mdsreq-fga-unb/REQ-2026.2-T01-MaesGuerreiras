-- Mantém o saldo consistente em saídas concorrentes e grava cada consentimento
-- com sua autorização de imagem em uma única transação.

create or replace function public.impedir_saida_sem_saldo()
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

  perform 1
  from public.categorias_item
  where id = new.categoria_id
  for update;

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

create function public.registrar_consentimentos(
  p_nome text,
  p_papel public.papel_titular,
  p_familia_id uuid,
  p_consentimentos jsonb,
  p_imagem_autorizado boolean,
  p_meios public.meio_divulgacao[]
)
returns uuid
language plpgsql
set search_path = ''
as $$
declare
  v_titular_id uuid;
  v_consentimento jsonb;
  v_total integer;
  v_finalidades_distintas integer;
begin
  if p_nome is null or length(trim(p_nome)) = 0 or p_papel is null then
    raise exception 'titular inválido' using errcode = '22023';
  end if;
  if jsonb_typeof(p_consentimentos) is distinct from 'array' then
    raise exception 'consentimentos inválidos' using errcode = '22023';
  end if;

  for v_consentimento in select value from jsonb_array_elements(p_consentimentos)
  loop
    if jsonb_typeof(v_consentimento -> 'finalidade') is distinct from 'string'
      or jsonb_typeof(v_consentimento -> 'concedido') is distinct from 'boolean'
      or v_consentimento ->> 'finalidade' not in (
        'cadastro_atendimento',
        'frequencia',
        'contato_familia',
        'relatorios_apoiadores'
      ) then
      raise exception 'consentimento inválido' using errcode = '22023';
    end if;
  end loop;

  select count(*), count(distinct item ->> 'finalidade')
  into v_total, v_finalidades_distintas
  from jsonb_array_elements(p_consentimentos) as consentimento(item);

  if v_total <> 4 or v_finalidades_distintas <> 4 then
    raise exception 'registre cada finalidade exatamente uma vez' using errcode = '22023';
  end if;
  if p_imagem_autorizado is null or p_meios is null
    or (p_imagem_autorizado and cardinality(p_meios) = 0)
    or (not p_imagem_autorizado and cardinality(p_meios) > 0) then
    raise exception 'autorização de imagem inválida' using errcode = '22023';
  end if;

  insert into public.titulares_consentimento (nome, papel, familia_id, criado_por)
  values (trim(p_nome), p_papel, p_familia_id, auth.uid())
  returning id into v_titular_id;

  insert into public.consentimentos (titular_id, finalidade, concedido, registrado_por)
  select
    v_titular_id,
    item.finalidade::public.finalidade_consentimento,
    item.concedido,
    auth.uid()
  from jsonb_to_recordset(p_consentimentos) as item(finalidade text, concedido boolean);

  insert into public.autorizacoes_imagem (
    titular_id,
    autorizado,
    meios,
    registrado_por
  )
  values (
    v_titular_id,
    p_imagem_autorizado,
    p_meios,
    auth.uid()
  );

  return v_titular_id;
end;
$$;

revoke all on function public.registrar_consentimentos(
  text,
  public.papel_titular,
  uuid,
  jsonb,
  boolean,
  public.meio_divulgacao[]
) from public, anon;
grant execute on function public.registrar_consentimentos(
  text,
  public.papel_titular,
  uuid,
  jsonb,
  boolean,
  public.meio_divulgacao[]
) to authenticated;
