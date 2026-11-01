<script setup lang="ts">
import type { CategoriaResposta, DoadorResposta, SaldoResposta } from '~/types/contratos'
import { mensagemErro } from '~/utils/http'

const { data: categorias } = await useFetch<CategoriaResposta[]>('/api/categorias')
const { data: doadores } = await useFetch<DoadorResposta[]>('/api/doadores')
const { data: saldos, error, refresh } = await useFetch<SaldoResposta[]>('/api/doacoes/saldos')
const { data: sessao } = await useFetch('/api/acesso/sessao')

const ehCoord = computed(() => sessao.value?.perfil === 'coordenacao')
const aviso = ref('')
const enviando = ref(false)
const categoriaId = ref('')
const quantidade = ref(1)
const data = ref(new Date().toISOString().slice(0, 10))
const doadorId = ref('')
const saidaCategoriaId = ref('')
const saidaQuantidade = ref(1)
const saidaData = ref(new Date().toISOString().slice(0, 10))
const destinoSintetico = ref('teste-sprint-6')

async function receber() {
  aviso.value = ''
  enviando.value = true
  try {
    await $fetch('/api/doacoes/recebimentos', {
      method: 'POST',
      body: {
        categoriaId: categoriaId.value,
        quantidade: Number(quantidade.value),
        data: data.value,
        doadorId: doadorId.value,
      },
    })
    await refresh()
  }
  catch (falha) {
    aviso.value = mensagemErro(falha)
  }
  finally {
    enviando.value = false
  }
}

async function saidaSintetica() {
  aviso.value = ''
  enviando.value = true
  try {
    await $fetch('/api/doacoes/saidas-sinteticas', {
      method: 'POST',
      body: {
        categoriaId: saidaCategoriaId.value,
        quantidade: Number(saidaQuantidade.value),
        data: saidaData.value,
        destinoSintetico: destinoSintetico.value,
      },
    })
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
    <h1>Doações</h1>
    <p>Recebimento (RF09) e saldo (RF12). A destinação real (RF10) fica para a Sprint 7.</p>
    <p
      v-if="error || aviso"
      role="alert"
    >
      {{ aviso || mensagemErro(error) }}
    </p>

    <form @submit.prevent="receber">
      <h2>Recebimento</h2>
      <label>
        Categoria
        <select
          v-model="categoriaId"
          required
        >
          <option
            disabled
            value=""
          >
            Selecione
          </option>
          <option
            v-for="categoria in categorias"
            :key="categoria.id"
            :value="categoria.id"
          >
            {{ categoria.nome }} ({{ categoria.unidade }})
          </option>
        </select>
      </label>
      <label>
        Quantidade
        <input
          v-model.number="quantidade"
          type="number"
          min="0.001"
          step="0.001"
          required
        >
      </label>
      <label>
        Data
        <input
          v-model="data"
          type="date"
          required
        >
      </label>
      <label>
        Doador
        <select
          v-model="doadorId"
          required
        >
          <option
            disabled
            value=""
          >
            Selecione
          </option>
          <option
            v-for="doador in doadores"
            :key="doador.id"
            :value="doador.id"
          >
            {{ doador.nome }}
          </option>
        </select>
      </label>
      <button
        type="submit"
        :disabled="enviando"
      >
        Registrar entrada
      </button>
    </form>

    <h2>Saldo</h2>
    <table v-if="saldos">
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Saldo</th>
          <th>Unidade</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in saldos"
          :key="item.categoriaId"
        >
          <td>{{ item.nome }}</td>
          <td>{{ item.saldo }}</td>
          <td>{{ item.unidade }}</td>
        </tr>
      </tbody>
    </table>

    <form
      v-if="ehCoord"
      @submit.prevent="saidaSintetica"
    >
      <h2>Saída sintética (teste do cálculo, sem tela de destinação)</h2>
      <label>
        Categoria
        <select
          v-model="saidaCategoriaId"
          required
        >
          <option
            disabled
            value=""
          >
            Selecione
          </option>
          <option
            v-for="categoria in categorias"
            :key="categoria.id"
            :value="categoria.id"
          >
            {{ categoria.nome }}
          </option>
        </select>
      </label>
      <label>
        Quantidade
        <input
          v-model.number="saidaQuantidade"
          type="number"
          min="0.001"
          step="0.001"
          required
        >
      </label>
      <label>
        Data
        <input
          v-model="saidaData"
          type="date"
          required
        >
      </label>
      <label>
        Destino de teste
        <input
          v-model="destinoSintetico"
          required
        >
      </label>
      <button
        type="submit"
        :disabled="enviando"
      >
        Registrar saída de teste
      </button>
    </form>
  </main>
</template>
