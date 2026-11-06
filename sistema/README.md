# Sistema Mães Guerreiras

Aplicação web da associação (Nuxt 4 + Supabase), conforme a seção 2.4 da documentação.
A documentação do projeto (MkDocs) continua em `docs/`, na raiz do repositório; esta pasta não
interfere no GitHub Pages.

## Pré-requisitos

- Node.js 22
- Podman ou Docker (para o Supabase local). O CLI do Supabase usa o runtime de
  contêiner disponível; no Windows, deixe o Podman Machine no ar antes de `db:start`.

## Primeira vez

```bash
cd sistema
npm install
cp .env.example .env
npm run db:start      # sobe o Supabase local e mostra a URL e a anon key
```

Copie a `Project URL` e as chaves do `npx supabase status` para o `.env`
(`SUPABASE_URL`, `SUPABASE_KEY`, `SUPABASE_SERVICE_KEY`). No CLI recente as chaves
aparecem como Publishable (`sb_publishable_…`) e Secret (`sb_secret_…`); use essas
no lugar da anon/service_role JWT, se o status não listar JWT. A secret fica só no
servidor (cadastro de usuários e controle de tentativas de login); não vá para o navegador.

Se o login devolver que o e-mail está desligado, confira `supabase/config.toml`:
`[auth] enable_signup = false` (sem cadastro público) e `[auth.email] enable_signup = true`
(provedor de e-mail ligado). Depois: `npx supabase stop` e `npm run db:start`. Depois:

```bash
npm run dev           # http://localhost:3000
```

Contas de teste (dados sintéticos, criadas pelo `supabase/seed.sql`):

| E-mail | Perfil | Senha |
| :--- | :--- | :--- |
| coordenacao@exemplo.local | Coordenação | senha-local-123 |
| voluntario@exemplo.local | Voluntário | senha-local-123 |

## Comandos

| Comando | O que faz |
| :--- | :--- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run lint` | ESLint (DoD: lint sem erros) |
| `npm run typecheck` | Verificação de tipos |
| `npm run test` | Testes automatizados (Vitest) |
| `npm run db:reset` | Recria o banco local a partir das migrations e do seed |
| `npm run db:test` | Testes do controle de acesso no banco (`supabase/tests`) |
| `npm run db:stop` | Para o Supabase local |

## Banco de dados

- Toda mudança de tabela vira uma migration em `supabase/migrations`
  (`npx supabase migration new nome_da_mudanca`). Nada é criado à mão no painel do Supabase.
- Toda tabela nova nasce com RLS ligado e políticas por perfil (RNF07, tabela de permissões 8.4).
- Nenhum dado real de família ou participante entra no banco antes do consentimento (RF42).
- Toda política nova ganha teste em `supabase/tests`, cobrindo o perfil que pode e o que não pode.
  O CI roda esses testes em todo PR (condição "controle de acesso" do portão, seção 6.4).
- Contratos HTTP: `app/types/contratos.ts` e `app/utils/servicos.ts`. Serviços em `server/api/`.
- Telas da área restrita (integração mínima com os serviços): `/painel`, `/painel/usuarios`,
  `/painel/consentimentos`, `/painel/categorias`, `/painel/doadores`, `/painel/doacoes`.
  Usuários, categorias e saídas sintéticas são exclusivos da Coordenação. Voluntários também
  acessam consentimentos, doadores, recebimentos e saldos, conforme a matriz de permissões da seção 8.4.
- RNF15 (não é o default do Auth): senha ≥ 8, sessão encerra em 30 min sem atividade, bloqueio de
  15 min após 5 falhas. Login passa por `POST /api/acesso/entrar`.
- Consulta de saldo (`GET /api/doacoes/saldos`) envia `Server-Timing: saldo;dur=…` para a medição
  do RNF03. O teste `RNF03 consulta de saldo` mede o cálculo em laboratório (menos de 3 s).
- Evidência 3G/4G (CA-US12-02): no Chrome, throttling Fast 3G, autenticado, recarregar `/painel/doacoes`
  e ler `Server-Timing` de `GET /api/doacoes/saldos`. Repetir 20 vezes; 95% deve ficar abaixo de 3 s.
  Essa medição em rede móvel é evidência de verificação (issue #35), não do CI.
- Dependências da Sprint 7 (não concluídas aqui): cadastro de famílias/participantes respeitando
  `consentimento_vigente`, destinação real (RF10) no lugar de `saidas-sinteticas`, e tela de destinação.

### Contratos dos serviços (Sprint 6)

| Método | Caminho | Quem chama |
| :--- | :--- | :--- |
| POST | `/api/acesso/entrar` | anônimo |
| POST | `/api/acesso/sair` | autenticado |
| GET | `/api/acesso/sessao` | autenticado |
| GET/POST | `/api/acesso/usuarios` | Coordenação |
| PATCH | `/api/acesso/usuarios/:id` | Coordenação |
| GET/POST | `/api/consentimentos` | Voluntário e Coordenação |
| POST | `/api/consentimentos/:id/revogar-imagem` | Voluntário e Coordenação |
| GET | `/api/categorias` | Voluntário e Coordenação |
| POST | `/api/categorias` | Coordenação |
| GET/POST | `/api/doadores` | Voluntário e Coordenação |
| PATCH | `/api/doadores/:id` | Voluntário e Coordenação |
| GET | `/api/doadores/:id/alteracoes` | Voluntário e Coordenação |
| POST | `/api/doacoes/recebimentos` | Voluntário e Coordenação |
| POST | `/api/doacoes/saidas-sinteticas` | Coordenação (teste sintético de RF10) |
| GET | `/api/doacoes/saldos` | Voluntário e Coordenação |

## Homologação

- Site: **https://maes-guerreiras-homologacao.vercel.app** (projeto Vercel
  `maes-guerreiras-homologacao`, Root Directory = `sistema`).
- Banco: projeto Supabase `maes-guerreiras-homologacao` (ref `jzystsinsyqikobfaldq`, região
  us-east-1, perto das funções da Vercel). Aplicar migrations novas:

  ```bash
  npx supabase login
  npx supabase link --project-ref jzystsinsyqikobfaldq
  npx supabase db push
  ```

- O repositório ainda não está ligado à Vercel pelo GitHub, então o deploy é manual, a partir da
  `main` atualizada:

  ```bash
  npx vercel login
  npx vercel link --project maes-guerreiras-homologacao
  npx vercel deploy --prod
  ```

- Variáveis de ambiente na Vercel: `SUPABASE_URL`, `SUPABASE_KEY` e `SUPABASE_SERVICE_KEY` do
  projeto de homologação. Nenhuma chave vai para o repositório ou para o chat da equipe.
- Cadastro público desligado no Auth do projeto (só a Coordenação cadastra usuários, RN20). A
  primeira conta de Coordenação foi criada pela equipe; as demais são criadas pelo sistema.
- Até o portão de uso real (seção 6.4), homologação só tem dados fictícios.

## Backup e restauração (RNF05)

Cópia do banco de homologação:

```bash
npx supabase db dump --linked --data-only -f backup-dados.sql
```

Teste de restauração no banco local, que recebe a mesma estrutura pelas migrations (registrar
data e resultado na ata):

```bash
npm run db:start
npx supabase db reset --no-seed
psql "postgresql://postgres:postgres@127.0.0.1:54322/postgres" -f backup-dados.sql
```

Os arquivos de backup ficam fora do repositório (já estão no `.gitignore` como `backup-*.sql`).

## CI

- O CI (`.github/workflows/sistema.yml`) roda lint, typecheck, testes, build e os testes de
  acesso no banco (`db:test`) em todo PR que altera `sistema/`.
