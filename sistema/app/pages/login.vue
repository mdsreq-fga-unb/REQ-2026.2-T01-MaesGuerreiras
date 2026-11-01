<script setup lang="ts">
import { mensagemErro, dadosDoErro, statusDoErro } from '~/utils/http'

// Protótipo: "Login", "Login — senha incorreta", "Login — bloqueio após 5 tentativas"
// e "Login — sessão expirada" (RF41, RNF15).
type Alerta = { tipo: 'erro' | 'info', titulo: string, texto: string }

const rota = useRoute()
const email = ref('')
const senha = ref('')
const enviando = ref(false)
const bloqueadoAte = ref<Date | null>(null)
const camposComErro = ref(false)
const alerta = ref<Alerta | null>(
  rota.query.motivo === 'sessao'
    ? {
        tipo: 'info',
        titulo: 'Sua sessão foi encerrada',
        texto: 'Por segurança, o sistema sai sozinho depois de 30 minutos sem uso. Entre de novo para continuar.',
      }
    : null,
)

const horaLiberacao = computed(() => bloqueadoAte.value
  ? bloqueadoAte.value.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  : '')
const bloqueado = computed(() => !!bloqueadoAte.value && bloqueadoAte.value.getTime() > Date.now())

async function entrar() {
  alerta.value = null
  camposComErro.value = false
  enviando.value = true
  try {
    await $fetch('/api/acesso/entrar', {
      method: 'POST',
      body: { email: email.value, senha: senha.value },
    })
    await navigateTo('/painel', { external: true })
  }
  catch (falha: unknown) {
    const status = statusDoErro(falha)
    if (status === 429) {
      const dados = dadosDoErro<{ bloqueadoAte?: string }>(falha)
      bloqueadoAte.value = dados?.bloqueadoAte ? new Date(dados.bloqueadoAte) : new Date(Date.now() + 15 * 60_000)
      camposComErro.value = true
      alerta.value = {
        tipo: 'erro',
        titulo: 'Acesso bloqueado por 15 minutos',
        texto: `Houve 5 tentativas erradas seguidas. Tente de novo às ${horaLiberacao.value} ou peça ajuda à coordenação.`,
      }
    }
    else if (status === 401) {
      camposComErro.value = true
      alerta.value = {
        tipo: 'erro',
        titulo: 'E-mail ou senha incorretos.',
        texto: 'Confira e tente de novo. Depois de 5 tentativas erradas seguidas, o acesso fica bloqueado por 15 minutos.',
      }
    }
    else {
      alerta.value = { tipo: 'erro', titulo: 'Não foi possível entrar', texto: mensagemErro(falha) }
    }
  }
  finally {
    enviando.value = false
  }
}
</script>

<template>
  <div class="login">
    <div class="login__marca">
      <span class="login__selo">Área restrita</span>
      <div class="login__frase">
        <p class="login__nome">
          Mães Guerreiras
        </p>
        <div
          class="login__traco"
          aria-hidden="true"
        />
        <p class="login__lema">
          Doações, famílias e atividades em um só lugar.
        </p>
      </div>
      <p class="login__rodape">
        Associação Mães Guerreiras da Cidade Estrutural · Santa Luzia, DF
      </p>
    </div>

    <main class="login__lado">
      <form
        class="login__form"
        novalidate
        @submit.prevent="entrar"
      >
        <span
          class="selo-mg selo-mg--grande login__mg"
          aria-hidden="true"
        >MG</span>
        <div class="login__boas-vindas">
          <h1>Bem-vinda de volta</h1>
          <p class="texto-2">
            Entre com o e-mail e a senha que a coordenação criou para você.
          </p>
        </div>

        <div
          v-if="alerta"
          role="alert"
          class="alerta"
          :class="alerta.tipo === 'erro' ? 'alerta--erro' : 'alerta--info'"
        >
          <strong>{{ alerta.titulo }}</strong>
          <span>{{ alerta.texto }}</span>
        </div>

        <label class="campo">
          E-mail
          <input
            v-model="email"
            type="email"
            autocomplete="username"
            required
            :aria-invalid="camposComErro"
          >
        </label>
        <label class="campo">
          <span class="campo__linha">
            <span>Senha</span>
            <span class="campo__dica">mínimo de 8 caracteres</span>
          </span>
          <input
            v-model="senha"
            type="password"
            autocomplete="current-password"
            required
            :aria-invalid="camposComErro"
          >
        </label>

        <button
          type="submit"
          class="botao botao--primario login__entrar"
          :disabled="enviando || bloqueado"
        >
          {{ bloqueado ? `Entrar (bloqueado até ${horaLiberacao})` : (enviando ? 'Entrando…' : 'Entrar') }}
        </button>

        <div class="alerta alerta--info">
          Esqueceu a senha? Peça para a coordenação definir uma senha temporária para você.
        </div>
      </form>
    </main>
  </div>
</template>

<style scoped>
.login {
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background: var(--branco);
}

.login__marca {
  flex: 1 1 360px;
  padding: 48px;
  background: var(--roxo-escuro);
  color: var(--creme);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;
}

.login__selo {
  align-self: flex-start;
  padding: 4px 10px;
  border-radius: 6px;
  background: var(--creme);
  color: var(--roxo-escuro);
  font-size: 13px;
  font-weight: 600;
}

.login__frase {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.login__nome {
  font-family: var(--fonte-titulo);
  font-size: 44px;
  font-weight: 600;
  line-height: 1.15;
}

.login__traco {
  width: 72px;
  height: 3px;
  background: var(--dourado);
}

.login__lema {
  max-width: 360px;
  font-size: 20px;
  line-height: 1.5;
}

.login__rodape {
  font-size: 13px;
  color: #d8cce6;
}

.login__lado {
  flex: 999 1 480px;
  padding: 48px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login__form {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.login__mg {
  align-self: center;
}

.login__boas-vindas {
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;
}

.login__boas-vindas h1 {
  font-family: var(--fonte-titulo);
  font-size: 26px;
  font-weight: 600;
}

.login__entrar {
  min-height: 46px;
  font-size: 16px;
}

@media (max-width: 600px) {
  .login__marca {
    padding: 24px;
    gap: 24px;
  }

  .login__nome {
    font-size: 32px;
  }

  .login__lado {
    padding: 32px 16px;
  }
}
</style>
