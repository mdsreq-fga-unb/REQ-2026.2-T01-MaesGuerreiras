<script setup lang="ts">
import type { DoadorResposta } from '~/types/contratos'
import { TIPOS_DOADOR, type TipoDoador } from '~/utils/doacoes'
import { mensagemErro } from '~/utils/http'

type Alteracao = {
  campo: string
  valor_anterior: string | null
  valor_novo: string | null
  alterado_em: string
  autor_id: string
}

const { data: doadores, error, refresh } = await useFetch<DoadorResposta[]>('/api/doadores')
const aviso = ref('')
const enviando = ref(false)
const nome = ref('')
const tipo = ref<TipoDoador>('pessoa')
const telefone = ref('')
const email = ref('')
const editandoId = ref<string | null>(null)
const historico = ref<Alteracao[]>([])
const historicoDe = ref<string | null>(null)

async function salvar() {
  aviso.value = ''
  enviando.value = true
  const corpo = {
    nome: nome.value,
    tipo: tipo.value,
    telefone: telefone.value || null,
    email: email.value || null,
  }
  try {
    if (editandoId.value) {
      await $fetch(`/api/doadores/${editandoId.value}`, { method: 'PATCH', body: corpo })
    }
    else {
      await $fetch('/api/doadores', { method: 'POST', body: corpo })
    }
    nome.value = ''
    telefone.value = ''
    email.value = ''
    editandoId.value = null
    await refresh()
  }
  catch (falha) {
    aviso.value = mensagemErro(falha)
  }
  finally {
    enviando.value = false
  }
}

function editar(doador: DoadorResposta) {
  editandoId.value = doador.id
  nome.value = doador.nome
  tipo.value = doador.tipo
  telefone.value = doador.telefone ?? ''
  email.value = doador.email ?? ''
}

async function verHistorico(id: string) {
  aviso.value = ''
  try {
    historico.value = await $fetch<Alteracao[]>(`/api/doadores/${id}/alteracoes`)
    historicoDe.value = id
  }
  catch (falha) {
    aviso.value = mensagemErro(falha)
  }
}
</script>

<template>
  <main>
    <h1>Doadores</h1>
    <p>Cadastro e correção com trilha de alteração (RF08 / RNF19). Doação anônima não entra nesta sprint.</p>
    <p
      v-if="error || aviso"
      role="alert"
    >
      {{ aviso || mensagemErro(error) }}
    </p>

    <form @submit.prevent="salvar">
      <h2>{{ editandoId ? 'Corrigir doador' : 'Novo doador' }}</h2>
      <label>
        Nome
        <input
          v-model="nome"
          required
        >
      </label>
      <label>
        Tipo
        <select v-model="tipo">
          <option
            v-for="item in TIPOS_DOADOR"
            :key="item"
            :value="item"
          >
            {{ item }}
          </option>
        </select>
      </label>
      <label>
        Telefone
        <input v-model="telefone">
      </label>
      <label>
        E-mail
        <input
          v-model="email"
          type="email"
        >
      </label>
      <button
        type="submit"
        :disabled="enviando"
      >
        Salvar
      </button>
    </form>

    <table v-if="doadores">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Contato</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="doador in doadores"
          :key="doador.id"
        >
          <td>{{ doador.nome }}</td>
          <td>{{ doador.tipo }}</td>
          <td>{{ doador.telefone || doador.email }}</td>
          <td>
            <button
              type="button"
              @click="editar(doador)"
            >
              Corrigir
            </button>
            <button
              type="button"
              @click="verHistorico(doador.id)"
            >
              Histórico
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <section v-if="historicoDe">
      <h2>Alterações</h2>
      <table>
        <thead>
          <tr>
            <th>Campo</th>
            <th>Anterior</th>
            <th>Novo</th>
            <th>Quando</th>
            <th>Autor</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, indice) in historico"
            :key="indice"
          >
            <td>{{ item.campo }}</td>
            <td>{{ item.valor_anterior }}</td>
            <td>{{ item.valor_novo }}</td>
            <td>{{ item.alterado_em }}</td>
            <td>{{ item.autor_id }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>
