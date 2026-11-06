<script setup lang="ts">
import type { UsuarioResposta } from '~/types/contratos'
import type { Perfil } from '~/utils/perfis'
import { campoDoErro, mensagemErro } from '~/utils/http'

// Protótipo: "Usuários e perfis" e "Novo usuário — senha curta" (RF39, RF40, RN20, RNF15).
definePageMeta({
  middleware: 'coordenacao',
})

const PERFIS: Array<{ valor: Perfil, nome: string, descricao: string }> = [
  { valor: 'voluntario', nome: 'Voluntário', descricao: 'Registra doações, cadastra doadores e consentimentos e consulta o saldo.' },
  { valor: 'coordenacao', nome: 'Coordenação', descricao: 'Tudo do voluntário, mais categorias, usuários e perfis.' },
]

const { data: usuarios, error, refresh } = await useFetch<UsuarioResposta[]>('/api/acesso/usuarios')
const { data: sessao } = await useFetch('/api/acesso/sessao')

const criando = ref(false)
const busca = ref('')
const enviando = ref(false)
const nome = ref('')
const email = ref('')
const senha = ref('')
const perfil = ref<Perfil>('voluntario')
const erros = ref<Record<string, string>>({})
const aviso = ref('')
const sucesso = ref('')

const filtrados = computed(() => {
  const termo = busca.value.trim().toLowerCase()
  return (usuarios.value ?? []).filter(item =>
    item.nome.toLowerCase().includes(termo) || (item.email ?? '').toLowerCase().includes(termo))
})

function abrirNovo() {
  criando.value = true
  sucesso.value = ''
  aviso.value = ''
}

function cancelar() {
  criando.value = false
  nome.value = ''
  email.value = ''
  senha.value = ''
  perfil.value = 'voluntario'
  erros.value = {}
  aviso.value = ''
}

function validar() {
  const novos: Record<string, string> = {}
  if (!nome.value.trim()) novos.nome = 'Informe o nome completo.'
  if (!email.value.trim()) novos.email = 'Informe o e-mail.'
  if (senha.value.length < 8) novos.senha = 'A senha precisa ter pelo menos 8 caracteres.'
  erros.value = novos
  return Object.keys(novos).length === 0
}

async function cadastrar() {
  aviso.value = ''
  if (!validar()) return
  enviando.value = true
  try {
    await $fetch('/api/acesso/usuarios', {
      method: 'POST',
      body: { nome: nome.value, email: email.value, senha: senha.value, perfil: perfil.value },
    })
    sucesso.value = `Usuário "${nome.value.trim()}" criado. Entregue o e-mail e a senha temporária pessoalmente.`
    cancelar()
    await refresh()
  }
  catch (falha) {
    const campo = campoDoErro(falha)
    if (campo) erros.value = { [campo]: mensagemErro(falha) }
    else aviso.value = mensagemErro(falha)
  }
  finally {
    enviando.value = false
  }
}

async function alterarPerfil(usuario: UsuarioResposta) {
  aviso.value = ''
  sucesso.value = ''
  const novo: Perfil = usuario.perfil === 'coordenacao' ? 'voluntario' : 'coordenacao'
  try {
    await $fetch(`/api/acesso/usuarios/${usuario.id}`, {
      method: 'PATCH',
      body: { perfil: novo },
    })
    sucesso.value = `${usuario.nome} agora tem o perfil ${novo === 'coordenacao' ? 'Coordenação' : 'Voluntário'}.`
    await refresh()
  }
  catch (falha) {
    aviso.value = mensagemErro(falha)
  }
}
</script>

<template>
  <div>
    <CabecalhoPagina
      v-if="criando"
      voltar="Usuários e perfis"
      titulo="Novo usuário"
      @voltar="cancelar"
    />
    <CabecalhoPagina
      v-else
      secao="Proteção de dados"
      titulo="Usuários e perfis"
    >
      <button
        type="button"
        class="botao botao--primario"
        @click="abrirNovo"
      >
        + Novo usuário
      </button>
    </CabecalhoPagina>

    <!-- Novo usuário -->
    <main
      v-if="criando"
      class="pagina pagina--estreita"
    >
      <div
        v-if="aviso"
        role="alert"
        class="alerta alerta--erro"
      >
        {{ aviso }}
      </div>
      <form
        class="cartao"
        novalidate
        @submit.prevent="cadastrar"
      >
        <div class="cartao__topo">
          <h2>Dados de acesso</h2>
          <p>Campos com * são obrigatórios. Entregue o e-mail e a senha temporária pessoalmente.</p>
        </div>
        <div class="cartao__corpo">
          <label class="campo">
            Nome completo *
            <input
              v-model="nome"
              type="text"
              :aria-invalid="!!erros.nome"
              aria-describedby="erro-nome"
            >
            <span
              v-if="erros.nome"
              id="erro-nome"
              class="campo__erro"
            >{{ erros.nome }}</span>
          </label>
          <label class="campo">
            E-mail *
            <input
              v-model="email"
              type="email"
              autocomplete="off"
              :aria-invalid="!!erros.email"
              aria-describedby="erro-email dica-email"
            >
            <span
              v-if="erros.email"
              id="erro-email"
              class="campo__erro"
            >{{ erros.email }}</span>
            <span
              id="dica-email"
              class="campo__dica"
            >É o que a pessoa usa para entrar. Precisa ser um e-mail que ela consiga abrir.</span>
          </label>
          <label class="campo">
            Senha temporária *
            <input
              v-model="senha"
              type="password"
              autocomplete="new-password"
              :aria-invalid="!!erros.senha"
              aria-describedby="erro-senha"
            >
            <span
              v-if="erros.senha"
              id="erro-senha"
              class="campo__erro"
            >{{ erros.senha }}</span>
          </label>
          <fieldset class="grupo">
            <legend>Perfil de acesso *</legend>
            <label
              v-for="item in PERFIS"
              :key="item.valor"
              class="escolha"
            >
              <input
                v-model="perfil"
                type="radio"
                name="perfil"
                :value="item.valor"
              >
              <span>
                <strong>{{ item.nome }}</strong>
                <span>{{ item.descricao }}</span>
              </span>
            </label>
          </fieldset>
        </div>
        <div class="cartao__rodape acoes--fim">
          <button
            type="button"
            class="botao"
            @click="cancelar"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="botao botao--primario"
            :disabled="enviando"
          >
            Criar usuário
          </button>
        </div>
      </form>
    </main>

    <!-- Lista -->
    <main
      v-else
      class="pagina"
    >
      <div class="alerta alerta--aviso">
        <strong>Só a coordenação cria contas e define perfis</strong>
        <span>A primeira conta foi criada pela equipe na implantação. Ninguém consegue criar conta sozinho pela tela de login.</span>
      </div>
      <div
        v-if="sucesso"
        role="status"
        class="alerta alerta--sucesso"
      >
        {{ sucesso }}
      </div>
      <div
        v-if="error || aviso"
        role="alert"
        class="alerta alerta--erro"
      >
        {{ aviso || mensagemErro(error) }}
      </div>
      <section class="cartao">
        <div class="cartao__barra">
          <label class="campo busca">
            <span class="campo__dica">Buscar por nome ou e-mail</span>
            <input
              v-model="busca"
              type="search"
            >
          </label>
          <span class="pequeno texto-2">{{ usuarios?.length ?? 0 }} usuários</span>
        </div>
        <div class="tabela-caixa">
          <table class="tabela">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Perfil</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="usuario in filtrados"
                :key="usuario.id"
              >
                <td>
                  <strong>{{ usuario.nome }}</strong>
                  <span class="pequeno texto-2 bloco">{{ usuario.email }}</span>
                </td>
                <td>
                  <span
                    class="etiqueta"
                    :class="{ 'etiqueta--forte': usuario.perfil === 'coordenacao' }"
                  >{{ usuario.perfil === 'coordenacao' ? 'Coordenação' : 'Voluntário' }}</span>
                </td>
                <td>
                  <span
                    v-if="usuario.id === sessao?.usuario.id"
                    class="pequeno texto-2"
                  >Sua conta</span>
                  <button
                    v-else
                    type="button"
                    class="botao botao--pequeno"
                    @click="alterarPerfil(usuario)"
                  >
                    Mudar para {{ usuario.perfil === 'coordenacao' ? 'Voluntário' : 'Coordenação' }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.busca {
  flex: 0 1 320px;
}

.bloco {
  display: block;
}

fieldset.grupo .escolha {
  margin-bottom: 4px;
}
</style>
