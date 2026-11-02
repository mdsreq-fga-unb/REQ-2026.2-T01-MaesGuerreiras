<script setup lang="ts">
import type { CategoriaResposta } from '~/types/contratos'
import { UNIDADES, type UnidadeMedida } from '~/utils/doacoes'
import { mensagemErro } from '~/utils/http'

definePageMeta({
  middleware: 'coordenacao',
})

const { data: sessao } = await useFetch('/api/acesso/sessao')
const { data: categorias, error, refresh } = await useFetch<CategoriaResposta[]>('/api/categorias')
const ehCoord = computed(() => sessao.value?.perfil === 'coordenacao')
const aviso = ref('')
const enviando = ref(false)
const nome = ref('')
const unidade = ref<UnidadeMedida>('unidade')

async function cadastrar() {
  aviso.value = ''
  enviando.value = true
  try {
    await $fetch('/api/categorias', {
      method: 'POST',
      body: { nome: nome.value, unidade: unidade.value },
    })
    nome.value = ''
    await refresh()
  }
  catch (falha) {
    aviso.value = mensagemErro(falha)
  }
  finally {
    enviando.value = false
  }
}
</script>

<template>
  <main>
    <h1>Categorias</h1>
    <p>Nome e unidade fechada: unidade, quilo ou pacote (RF11 / RN02).</p>
    <p
      v-if="error || aviso"
      role="alert"
    >
      {{ aviso || mensagemErro(error) }}
    </p>

    <form
      v-if="ehCoord"
      @submit.prevent="cadastrar"
    >
      <label>
        Nome
        <input
          v-model="nome"
          required
        >
      </label>
      <label>
        Unidade
        <select v-model="unidade">
          <option
            v-for="item in UNIDADES"
            :key="item"
            :value="item"
          >
            {{ item }}
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
    <p v-else>
      Só a Coordenação cadastra categorias. O acesso direto à API também é recusado.
    </p>

    <table v-if="categorias">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Unidade</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="categoria in categorias"
          :key="categoria.id"
        >
          <td>{{ categoria.nome }}</td>
          <td>{{ categoria.unidade }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
