-- Controle de acesso de categorias, doadores, movimentações e consentimentos
-- (RNF07, tabela de permissões 8.3, portão 6.4). Usa contas próprias, sem depender do seed.

begin;
create extension if not exists pgtap with schema extensions;
select plan(13);

insert into auth.users (id, aud, role, email) values
  ('bbbbbbbb-0000-0000-0000-000000000001', 'authenticated', 'authenticated', 'coord@teste.local'),
  ('bbbbbbbb-0000-0000-0000-000000000002', 'authenticated', 'authenticated', 'vol@teste.local'),
  ('bbbbbbbb-0000-0000-0000-000000000003', 'authenticated', 'authenticated', 'semperfil@teste.local');

insert into public.perfis (id, nome, perfil) values
  ('bbbbbbbb-0000-0000-0000-000000000001', 'Coordenação Teste', 'coordenacao'),
  ('bbbbbbbb-0000-0000-0000-000000000002', 'Voluntária Teste', 'voluntario');

insert into public.categorias_item (id, nome, unidade, criado_por) values
  ('bbbbbbbb-1111-0000-0000-000000000001', 'Categoria Teste', 'quilo', 'bbbbbbbb-0000-0000-0000-000000000001');

insert into public.doadores (id, tipo, nome, telefone, criado_por) values
  ('bbbbbbbb-2222-0000-0000-000000000001', 'pessoa', 'Doador Teste', '61900000000', 'bbbbbbbb-0000-0000-0000-000000000001');

-- Visitante sem login
set local role anon;
select is((select count(*) from public.categorias_item), 0::bigint, 'visitante não lê categorias');
select is((select count(*) from public.doadores), 0::bigint, 'visitante não lê doadores');
select is((select count(*) from public.consentimentos), 0::bigint, 'visitante não lê consentimentos');
select is((select count(*) from public.controle_acesso), 0::bigint, 'visitante não lê tentativas de login');

-- Conta autenticada sem perfil atribuído
reset role;
set local role authenticated;
set local request.jwt.claims = '{"sub":"bbbbbbbb-0000-0000-0000-000000000003","role":"authenticated"}';
select is((select count(*) from public.doadores), 0::bigint, 'conta sem perfil não lê doadores');

-- Voluntário
set local request.jwt.claims = '{"sub":"bbbbbbbb-0000-0000-0000-000000000002","role":"authenticated"}';

select is(
  (select count(*) from public.doadores where id = 'bbbbbbbb-2222-0000-0000-000000000001'),
  1::bigint,
  'voluntário lê doadores (RF08)'
);

select throws_ok(
  $$insert into public.categorias_item (nome, unidade, criado_por)
    values ('Outra', 'unidade', 'bbbbbbbb-0000-0000-0000-000000000002')$$,
  '42501', null,
  'voluntário não cadastra categoria (RF11)'
);

select lives_ok(
  $$insert into public.movimentacoes_estoque (tipo, categoria_id, quantidade, data, doador_id, registrado_por)
    values ('entrada', 'bbbbbbbb-1111-0000-0000-000000000001', 10, current_date,
            'bbbbbbbb-2222-0000-0000-000000000001', 'bbbbbbbb-0000-0000-0000-000000000002')$$,
  'voluntário registra doação recebida (RF09)'
);

select throws_ok(
  $$insert into public.movimentacoes_estoque (tipo, categoria_id, quantidade, data, doador_id, registrado_por)
    values ('entrada', 'bbbbbbbb-1111-0000-0000-000000000001', 1, current_date,
            'bbbbbbbb-2222-0000-0000-000000000001', 'bbbbbbbb-0000-0000-0000-000000000001')$$,
  '42501', null,
  'voluntário não registra doação em nome de outra pessoa (RNF19)'
);

select throws_ok(
  $$insert into public.movimentacoes_estoque (tipo, categoria_id, quantidade, data, destino_sintetico, registrado_por)
    values ('saida', 'bbbbbbbb-1111-0000-0000-000000000001', 1, current_date,
            'teste', 'bbbbbbbb-0000-0000-0000-000000000002')$$,
  '42501', null,
  'voluntário não registra saída'
);

select is((select count(*) from public.controle_acesso), 0::bigint, 'voluntário não lê tentativas de login');

-- Coordenação
set local request.jwt.claims = '{"sub":"bbbbbbbb-0000-0000-0000-000000000001","role":"authenticated"}';

select lives_ok(
  $$insert into public.categorias_item (nome, unidade, criado_por)
    values ('Outra Teste', 'unidade', 'bbbbbbbb-0000-0000-0000-000000000001')$$,
  'coordenação cadastra categoria (RF11)'
);

select lives_ok(
  $$insert into public.movimentacoes_estoque (tipo, categoria_id, quantidade, data, destino_sintetico, registrado_por)
    values ('saida', 'bbbbbbbb-1111-0000-0000-000000000001', 1, current_date,
            'teste', 'bbbbbbbb-0000-0000-0000-000000000001')$$,
  'coordenação registra saída sintética'
);

select * from finish();
rollback;
