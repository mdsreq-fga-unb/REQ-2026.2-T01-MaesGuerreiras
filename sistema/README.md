# Sistema Mães Guerreiras

Aplicação web da associação (Nuxt 4 + Supabase), conforme a seção 2.4 da documentação.
A documentação do projeto (MkDocs) continua em `docs/`, na raiz do repositório; esta pasta não
interfere no GitHub Pages.

## Pré-requisitos

- Node.js 22
- Docker (para o Supabase local)

## Primeira vez

```bash
cd sistema
npm install
cp .env.example .env
npm run db:start      # sobe o Supabase local e mostra a URL e a anon key
```

Copie a `API URL` e a `anon key` mostradas pelo `db:start` para o `.env`. Depois:

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

## Homologação

- Banco: projeto Supabase `maes-guerreiras-homologacao`. Aplicar as migrations:

  ```bash
  npx supabase login
  npx supabase link --project-ref <ref do projeto>
  npx supabase db push
  ```

- Site: Vercel, com **Root Directory** = `sistema`. Cada PR gera um preview para validação com a
  coordenação.
- Variáveis de ambiente na Vercel: `SUPABASE_URL` e `SUPABASE_KEY` (anon key) do projeto de
  homologação. Nenhuma chave vai para o repositório; a `service_role` nunca vai para a Vercel.
- A primeira conta de Coordenação em homologação é criada pela equipe (RN20).
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

## Deploy
- O CI (`.github/workflows/sistema.yml`) roda lint, typecheck, testes e build em todo PR que
  altera `sistema/`.
