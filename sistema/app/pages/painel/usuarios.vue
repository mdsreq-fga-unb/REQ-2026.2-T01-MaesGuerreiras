<script setup lang="ts">
import type { UsuarioResposta } from '~/types/contratos'
import type { Perfil } from '~/utils/perfis'
import { mensagemErro } from '~/utils/http'

definePageMeta({
  middleware: 'coordenacao',
})

const { data: usuarios, error, refresh } = await useFetch<UsuarioResposta[]>('/api/acesso/usuarios')
const aviso = ref('')
const enviando = ref(false)
const nome = ref('')
const email = ref('')
const senha = ref('')
const perfil = ref<Perfil>('voluntario')

async function cadastrar() {
  aviso.value = ''
  enviando.value = true
  try {
    await $fetch('/api/acesso/usuarios', {
      method: 'POST',
      body: { nome: nome.value, email: email.value, senha: senha.value, perfil: perfil.value },
    })
    nome.value = ''
    email.value = ''
    senha.value = ''
    await refresh()
  }
  catch (falha) {
    aviso.value = mensagemErro(falha)
  }
  finally {
    enviando.value = false
  }
}

async function atribuir(id: string, novoPerfil: string) {
  aviso.value = ''
  try {
    await $fetch(`/api/acesso/usuarios/${id}`, {
      method: 'PATCH',
      body: { perfil: novoPerfil },
    })
    await refresh()
  }
  catch (falha) {
    aviso.value = mensagemErro(falha)
  }
}
</script>

<template>
  <main>
    <h1>Usuários</h1>
    <p>Cadastro e atribuição de perfil pela Coordenação (RF39, RF40, RN20).</p>
    <p
      v-if="error"
      role="alert"
    >
      {{ mensagemErro(error) }}
    </p>
    <p
      v-else-if="aviso"
      role="alert"
    >
      {{ aviso }}
    </p>

    <form @submit.prevent="cadastrar">
      <h2>Novo usuário</h2>
      <label>
        Nome
        <input
          v-model="nome"
          required
        >
      </label>
      <label>
        E-mail
        <input
          v-model="email"
          type="email"
          required
        >
      </label>
      <label>
        Senha (mínimo 8)
        <input
          v-model="senha"
          type="password"
          minlength="8"
          required
        >
      </label>
      <label>
        Perfil
        <select v-model="perfil">
          <option value="voluntario">
            Voluntário
          </option>
          <option value="coordenacao">
            Coordenação
          </option>
        </select>
      </label>
      <button
        type="submit"
        :disabled="enviando"
      >
        Cadastrar
      </button>
    </form>

    <table v-if="usuarios">
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Perfil</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="usuario in usuarios"
          :key="usuario.id"
        >
          <td>{{ usuario.nome }}</td>
          <td>{{ usuario.email }}</td>
          <td>
            <select
              :value="usuario.perfil"
              @change="atribuir(usuario.id, ($event.target as HTMLSelectElement).value)"
            >
              <option value="voluntario">
                Voluntário
              </option>
              <option value="coordenacao">
                Coordenação
              </option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
