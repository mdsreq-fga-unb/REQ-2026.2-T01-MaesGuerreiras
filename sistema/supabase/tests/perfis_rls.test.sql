-- Controle de acesso da tabela perfis (RNF07, tabela de permissões 8.4, portão 6.4).
-- Usa contas próprias, sem depender do seed, para rodar em qualquer banco.

begin;
create extension if not exists pgtap with schema extensions;
select plan(8);

insert into auth.users (id, aud, role, email) values
  ('aaaaaaaa-0000-0000-0000-000000000001', 'authenticated', 'authenticated', 'coord@teste.local'),
  ('aaaaaaaa-0000-0000-0000-000000000002', 'authenticated', 'authenticated', 'vol@teste.local'),
  ('aaaaaaaa-0000-0000-0000-000000000003', 'authenticated', 'authenticated', 'novo@teste.local');

insert into public.perfis (id, nome, perfil) values
  ('aaaaaaaa-0000-0000-0000-000000000001', 'Coordenação Teste', 'coordenacao'),
  ('aaaaaaaa-0000-0000-0000-000000000002', 'Voluntária Teste', 'voluntario');

-- Visitante sem login
set local role anon;
select is(
  (select count(*) from public.perfis),
  0::bigint,
  'visitante não lê nenhum perfil'
);

-- Voluntário
reset role;
set local role authenticated;
set local request.jwt.claims = '{"sub":"aaaaaaaa-0000-0000-0000-000000000002","role":"authenticated"}';

select is(
  (select count(*) from public.perfis where id::text like 'aaaaaaaa-%'),
  1::bigint,
  'voluntário lê só o próprio perfil'
);

select throws_ok(
  $$insert into public.perfis (id, nome) values ('aaaaaaaa-0000-0000-0000-000000000003', 'Novo')$$,
  '42501',
  null,
  'voluntário não cadastra usuário (RF39)'
);

update public.perfis set perfil = 'coordenacao' where id = 'aaaaaaaa-0000-0000-0000-000000000002';
reset role;
select is(
  (select perfil::text from public.perfis where id = 'aaaaaaaa-0000-0000-0000-000000000002'),
  'voluntario',
  'voluntário não altera o próprio perfil (RF40)'
);

-- Coordenação
set local role authenticated;
set local request.jwt.claims = '{"sub":"aaaaaaaa-0000-0000-0000-000000000001","role":"authenticated"}';

select is(
  (select count(*) from public.perfis where id::text like 'aaaaaaaa-%'),
  2::bigint,
  'coordenação lê todos os perfis'
);

select lives_ok(
  $$insert into public.perfis (id, nome) values ('aaaaaaaa-0000-0000-0000-000000000003', 'Novo')$$,
  'coordenação cadastra usuário (RF39)'
);

update public.perfis set perfil = 'coordenacao' where id = 'aaaaaaaa-0000-0000-0000-000000000002';
reset role;
select is(
  (select perfil::text from public.perfis where id = 'aaaaaaaa-0000-0000-0000-000000000002'),
  'coordenacao',
  'coordenação atribui perfil (RF40)'
);

select is(
  (select perfil::text from public.perfis where id = 'aaaaaaaa-0000-0000-0000-000000000003'),
  'voluntario',
  'usuário novo nasce como voluntário'
);

select * from finish();
rollback;
