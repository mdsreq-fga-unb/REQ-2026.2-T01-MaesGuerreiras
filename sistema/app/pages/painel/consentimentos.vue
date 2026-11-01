<script setup lang="ts">
import type { ConsentimentoResposta } from '~/types/contratos'
import {
  FINALIDADES,
  MEIOS_IMAGEM,
  ROTULOS_FINALIDADE,
  ROTULOS_MEIO,
  type PapelTitular,
} from '~/utils/consentimentos'
import { mensagemErro } from '~/utils/http'

const { data: registros, error, refresh } = await useFetch<ConsentimentoResposta[]>('/api/consentimentos')
const aviso = ref('')
const enviando = ref(false)
const nome = ref('')
const papel = ref<PapelTitular>('responsavel_legal')
const concedidos = ref<Record<string, boolean>>({
  cadastro_atendimento: true,
  frequencia: true,
  contato_familia: true,
  relatorios_apoiadores: false,
})
const imagemAutorizada = ref(false)
const meios = ref<string[]>([])

function alternarMeio(meio: string, marcado: boolean) {
  meios.value = marcado
    ? [...new Set([...meios.value, meio])]
    : meios.value.filter(item => item !== meio)
}

async function registrar() {
  aviso.value = ''
  enviando.value = true
  try {
    await $fetch('/api/consentimentos', {
      method: 'POST',
      body: {
        titular: { nome: nome.value, papel: papel.value },
        consentimentos: FINALIDADES.map(finalidade => ({
          finalidade,
          concedido: Boolean(concedidos.value[finalidade]),
        })),
        imagem: {
          autorizado: imagemAutorizada.value,
          meios: imagemAutorizada.value ? meios.value : [],
        },
      },
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

async function revogar(titularId: string) {
  aviso.value = ''
  try {
    await $fetch(`/api/consentimentos/${titularId}/revogar-imagem`, { method: 'POST' })
    await refresh()
  }
  catch (falha) {
    aviso.value = mensagemErro(falha)
  }
}
</script>

<template>
  <main>
    <h1>Consentimentos</h1>
    <p>
      Registro por titular ou responsável legal, finalidade e data (RF42).
      Dados reais de família entram só na Sprint 7, depois do consentimento vigente.
    </p>
    <p
      v-if="error || aviso"
      role="alert"
    >
      {{ aviso || mensagemErro(error) }}
    </p>

    <form @submit.prevent="registrar">
      <h2>Novo registro</h2>
      <label>
        Nome
        <input
          v-model="nome"
          required
        >
      </label>
      <label>
        Papel
        <select v-model="papel">
          <option value="titular">
            Titular
          </option>
          <option value="responsavel_legal">
            Responsável legal
          </option>
        </select>
      </label>
      <fieldset>
        <legend>Finalidades</legend>
        <label
          v-for="finalidade in FINALIDADES"
          :key="finalidade"
        >
          <input
            v-model="concedidos[finalidade]"
            type="checkbox"
          >
          {{ ROTULOS_FINALIDADE[finalidade] }}
        </label>
      </fieldset>
      <fieldset>
        <legend>Uso de imagem</legend>
        <label>
          <input
            v-model="imagemAutorizada"
            type="checkbox"
          >
          Autoriza uso de imagem
        </label>
        <label
          v-for="meio in MEIOS_IMAGEM"
          :key="meio"
        >
          <input
            type="checkbox"
            :checked="meios.includes(meio)"
            :disabled="!imagemAutorizada"
            @change="alternarMeio(meio, ($event.target as HTMLInputElement).checked)"
          >
          {{ ROTULOS_MEIO[meio] }}
        </label>
      </fieldset>
      <button
        type="submit"
        :disabled="enviando"
      >
        Registrar
      </button>
    </form>

    <section
      v-for="item in registros"
      :key="item.titularId"
    >
      <h2>{{ item.nome }} ({{ item.papel }})</h2>
      <ul>
        <li
          v-for="consentimento in item.consentimentos"
          :key="consentimento.finalidade"
        >
          {{ ROTULOS_FINALIDADE[consentimento.finalidade] }}:
          {{ consentimento.concedido ? 'concedido' : 'recusado' }}
          em {{ consentimento.registradoEm }}
        </li>
      </ul>
      <p v-if="item.imagem">
        Imagem: {{ item.imagem.revogacao ? 'revogada' : (item.imagem.autorizado ? 'autorizada' : 'recusada') }}
        <span v-if="item.imagem.meios.length"> ({{ item.imagem.meios.join(', ') }})</span>
        em {{ item.imagem.registradoEm }}
      </p>
      <button
        v-if="item.imagem && item.imagem.autorizado && !item.imagem.revogacao"
        type="button"
        @click="revogar(item.titularId)"
      >
        Revogar imagem
      </button>
    </section>
  </main>
</template>
