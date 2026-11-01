<script setup lang="ts">
import type { SaldoResposta } from '~/types/contratos'
import { mensagemErro } from '~/utils/http'

const { data: saldos, error } = await useFetch<SaldoResposta[]>('/api/doacoes/saldos')
</script>

<template>
  <main>
    <h1>Painel</h1>
    <p>Saldo atual por categoria (RF12). Famílias, participantes e destinação real ficam na Sprint 7.</p>
    <p
      v-if="error"
      role="alert"
    >
      {{ mensagemErro(error) }}
    </p>
    <table v-else>
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
  </main>
</template>
