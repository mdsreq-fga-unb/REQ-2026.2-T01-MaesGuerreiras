-- Dados sintéticos para desenvolvimento local (DoR: nada de dados reais antes do RF42).
-- Senha das duas contas: senha-local-123

insert into auth.users (
  instance_id, id, aud, role, email, encrypted_password,
  email_confirmed_at, created_at, updated_at,
  raw_app_meta_data, raw_user_meta_data,
  confirmation_token, recovery_token, email_change, email_change_token_new
) values
  (
    '00000000-0000-0000-0000-000000000000',
    '11111111-1111-1111-1111-111111111111',
    'authenticated', 'authenticated', 'coordenacao@exemplo.local',
    crypt('senha-local-123', gen_salt('bf')),
    now(), now(), now(),
    '{"provider":"email","providers":["email"]}', '{}',
    '', '', '', ''
  ),
  (
    '00000000-0000-0000-0000-000000000000',
    '22222222-2222-2222-2222-222222222222',
    'authenticated', 'authenticated', 'voluntario@exemplo.local',
    crypt('senha-local-123', gen_salt('bf')),
    now(), now(), now(),
    '{"provider":"email","providers":["email"]}', '{}',
    '', '', '', ''
  );

insert into auth.identities (
  id, user_id, provider_id, provider, identity_data,
  last_sign_in_at, created_at, updated_at
) values
  (
    gen_random_uuid(), '11111111-1111-1111-1111-111111111111',
    '11111111-1111-1111-1111-111111111111', 'email',
    '{"sub":"11111111-1111-1111-1111-111111111111","email":"coordenacao@exemplo.local"}',
    now(), now(), now()
  ),
  (
    gen_random_uuid(), '22222222-2222-2222-2222-222222222222',
    '22222222-2222-2222-2222-222222222222', 'email',
    '{"sub":"22222222-2222-2222-2222-222222222222","email":"voluntario@exemplo.local"}',
    now(), now(), now()
  );

insert into public.perfis (id, nome, perfil) values
  ('11111111-1111-1111-1111-111111111111', 'Coordenadora Exemplo', 'coordenacao'),
  ('22222222-2222-2222-2222-222222222222', 'Voluntária Exemplo', 'voluntario');
