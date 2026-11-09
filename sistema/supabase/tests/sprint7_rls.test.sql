-- Testes de RLS da Sprint 7 (RF10, RF14, RF16, RF18, RF19, RF20, RF23, RF27, RF28, RF29, RF30, RF31)
-- Verifica permissões por perfil (Voluntário, Coordenação, Visitante e conta sem perfil).

begin;
create extension if not exists pgtap with schema extensions;
select plan(16);

insert into auth.users (id, aud, role, email) values
  ('cccccccc-0000-0000-0000-000000000001', 'authenticated', 'authenticated', 'coord7@teste.local'),
  ('cccccccc-0000-0000-0000-000000000002', 'authenticated', 'authenticated', 'vol7@teste.local'),
  ('cccccccc-0000-0000-0000-000000000003', 'authenticated', 'authenticated', 'semperfil7@teste.local');

insert into public.perfis (id, nome, perfil) values
  ('cccccccc-0000-0000-0000-000000000001', 'Coordenação S7', 'coordenacao'),
  ('cccccccc-0000-0000-0000-000000000002', 'Voluntária S7', 'voluntario');

-- Visitante sem login
set local role anon;
select is((select count(*) from public.familias), 0::bigint, 'visitante não lê famílias');
select is((select count(*) from public.participantes), 0::bigint, 'visitante não lê participantes');
select is((select count(*) from public.turmas), 0::bigint, 'visitante não lê turmas');
select is((select count(*) from public.chamadas), 0::bigint, 'visitante não lê chamadas');
select is((select count(*) from public.frequencias), 0::bigint, 'visitante não lê frequencias');

-- Conta sem perfil
reset role;
set local role authenticated;
set local request.jwt.claims = '{"sub":"cccccccc-0000-0000-0000-000000000003","role":"authenticated"}';
select is((select count(*) from public.familias), 0::bigint, 'sem perfil não lê famílias');
select is((select count(*) from public.participantes), 0::bigint, 'sem perfil não lê participantes');

-- Coordenação cria turma e categoria base
set local request.jwt.claims = '{"sub":"cccccccc-0000-0000-0000-000000000001","role":"authenticated"}';

select lives_ok(
  $$insert into public.turmas (id, atividade, data_inicio, data_termino, dias_semana, horario, vagas, criado_por)
    values ('cccccccc-3333-0000-0000-000000000001', 'Oficina de Costura', current_date, current_date + 30,
            array['terca', 'quinta'], '14:00 - 16:00', 10, 'cccccccc-0000-0000-0000-000000000001')$$,
  'coordenação cadastra turma (RF20)'
);

select throws_ok(
  $$insert into public.turmas (atividade, data_inicio, data_termino, dias_semana, horario, vagas, criado_por)
    values ('Inválida', current_date + 10, current_date, array['segunda'], '10:00', 5, 'cccccccc-0000-0000-0000-000000000001')$$,
  '23514', null,
  'término anterior ou igual ao início é recusado (RN09)'
);

-- Voluntário tenta cadastrar turma (CA-RF20-04: recusado)
set local request.jwt.claims = '{"sub":"cccccccc-0000-0000-0000-000000000002","role":"authenticated"}';

select throws_ok(
  $$insert into public.turmas (atividade, data_inicio, data_termino, dias_semana, horario, vagas, criado_por)
    values ('Informática', current_date, current_date + 20, array['sabado'], '09:00', 8, 'cccccccc-0000-0000-0000-000000000002')$$,
  '42501', null,
  'voluntário não cadastra turma (CA-RF20-04)'
);

-- Voluntário cadastra família e participante (RF14 e RF16)
select lives_ok(
  $$insert into public.familias (id, nome_responsavel, telefone, logradouro, cidade, criado_por)
    values ('cccccccc-4444-0000-0000-000000000001', 'Marta Santos', '61988887777', 'Rua 5, lote 2', 'Itapoã', 'cccccccc-0000-0000-0000-000000000002')$$,
  'voluntário cadastra família (RF14)'
);

select lives_ok(
  $$insert into public.participantes (id, nome, data_nascimento, familia_id, criado_por)
    values ('cccccccc-5555-0000-0000-000000000001', 'Lucas Santos', '2015-05-10', 'cccccccc-4444-0000-0000-000000000001', 'cccccccc-0000-0000-0000-000000000002')$$,
  'voluntário cadastra participante com vínculo familiar (RF16, RF18)'
);

-- Voluntário inscreve participante ativo na turma (RF23)
select lives_ok(
  $$insert into public.inscricoes (id, turma_id, participante_id, criado_por)
    values ('cccccccc-6666-0000-0000-000000000001', 'cccccccc-3333-0000-0000-000000000001', 'cccccccc-5555-0000-0000-000000000001', 'cccccccc-0000-0000-0000-000000000002')$$,
  'voluntário inscreve participante ativo na turma com vaga (RF23)'
);

-- Voluntário abre chamada na data de hoje (RF27)
select lives_ok(
  $$insert into public.chamadas (id, turma_id, data_encontro, aberta_por)
    values ('cccccccc-7777-0000-0000-000000000001', 'cccccccc-3333-0000-0000-000000000001', current_date, 'cccccccc-0000-0000-0000-000000000002')$$,
  'voluntário abre chamada na data do encontro (RF27)'
);

-- Voluntário registra presença (RF28)
select lives_ok(
  $$insert into public.frequencias (id, chamada_id, participante_id, presente, registrado_por)
    values ('cccccccc-8888-0000-0000-000000000001', 'cccccccc-7777-0000-0000-000000000001', 'cccccccc-5555-0000-0000-000000000001', true, 'cccccccc-0000-0000-0000-000000000002')$$,
  'voluntário registra presença na chamada (RF28)'
);

-- Voluntário tenta registrar frequência de participante não inscrito (CA-RF28-03)
select throws_ok(
  $$insert into public.participantes (id, nome, data_nascimento, criado_por)
    values ('cccccccc-5555-0000-0000-000000000099', 'Outro Não Inscrito', '2010-01-01', 'cccccccc-0000-0000-0000-000000000002');
    insert into public.frequencias (chamada_id, participante_id, presente, registrado_por)
    values ('cccccccc-7777-0000-0000-000000000001', 'cccccccc-5555-0000-0000-000000000099', true, 'cccccccc-0000-0000-0000-000000000002')$$,
  'P0001', null,
  'recusa frequência de participante não inscrito na turma (CA-RF28-03)'
);

select * from finish();
rollback;
