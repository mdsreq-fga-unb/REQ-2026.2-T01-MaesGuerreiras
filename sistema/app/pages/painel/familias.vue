<script setup lang="ts">
import type { FamiliaResposta } from '~/types/contratos'
import { campoDoErro, mensagemErro } from '~/utils/http'

const { data: familias, error, refresh } = await useFetch<FamiliaResposta[]>('/api/familias')

const criando = ref(false)
const enviando = ref(false)
const busca = ref('')

const nomeResponsavel = ref('')
const telefone = ref('')
const logradouro = ref('')
const complemento = ref('')
const cidade = ref('Itapoã')
const numeroMoradores = ref<number | undefined>(undefined)
const observacoes = ref('')

const erroCampo = ref('')
const aviso = ref('')
const sucesso = ref('')

function abrirNova() {
  criando.value = true
  sucesso.value = ''
}

function cancelar() {
  criando.value = false
  nomeResponsavel.value = ''
  telefone.value = ''
  logradouro.value = ''
  complemento.value = ''
  cidade.value = 'Itapoã'
  numeroMoradores.value = undefined
  observacoes.value = ''
  erroCampo.value = ''
  aviso.value = ''
}

async function cadastrar() {
  erroCampo.value = ''
  aviso.value = ''
  enviando.value = true
  try {
    await $fetch('/api/familias', {
      method: 'POST',
      body: {
        nomeResponsavel: nomeResponsavel.value,
        telefone: telefone.value,
        logradouro: logradouro.value,
        complemento: complemento.value || null,
        cidade: cidade.value,
        numeroMoradores: numeroMoradores.value,
        observacoes: observacoes.value || null,
      },
    })
    sucesso.value = `Família de "${nomeResponsavel.value.trim()}" cadastrada com sucesso.`
    cancelar()
    await refresh()
  }
  catch (falha) {
    const campo = campoDoErro(falha)
    if (campo) {
      erroCampo.value = mensagemErro(falha)
    }
    else {
      aviso.value = mensagemErro(falha)
    }
  }
  finally {
    enviando.value = false
  }
}

const familiasFiltradas = computed(() => {
  if (!familias.value) return []
  if (!busca.value.trim()) return familias.value
  const termo = busca.value.trim().toLowerCase()
  return familias.value.filter(f => f.nomeResponsavel.toLowerCase().includes(termo))
})
</script>

<template>
  <div>
    <CabecalhoPagina
      v-if="criando"
      voltar="Famílias"
      titulo="Cadastrar família"
      @voltar="cancelar"
    />
    <CabecalhoPagina
      v-else
      titulo="Famílias atendidas"
      descricao="Cadastro e consulta de famílias (RF14, RN04)"
    >
      <template #acoes>
        <button
          type="button"
          class="botao botao--primario"
          @click="abrirNova"
        >
          Nova família
        </button>
      </template>
    </CabecalhoPagina>

    <div
      v-if="sucesso"
      class="aviso aviso--sucesso"
      role="status"
    >
      {{ sucesso }}
    </div>
    <div
      v-if="aviso"
      class="aviso aviso--erro"
      role="alert"
    >
      {{ aviso }}
    </div>

    <!-- Formulário de cadastro de família (RF14) -->
    <div
      v-if="criando"
      class="cartao"
    >
      <form
        class="formulario"
        @submit.prevent="cadastrar"
      >
        <div class="campo">
          <label for="f-responsavel">Nome da pessoa responsável *</label>
          <input
            id="f-responsavel"
            v-model="nomeResponsavel"
            type="text"
            required
            placeholder="Nome completo"
          >
        </div>

        <div class="campo">
          <label for="f-tel">Telefone *</label>
          <input
            id="f-tel"
            v-model="telefone"
            type="tel"
            required
            placeholder="(61) 99999-9999"
          >
        </div>

        <div class="campo">
          <label for="f-logr">Logradouro / Endereço *</label>
          <input
            id="f-logr"
            v-model="logradouro"
            type="text"
            required
            placeholder="Quadra, rua, lote, casa"
          >
        </div>

        <div class="campo">
          <label for="f-comp">Complemento (opcional)</label>
          <input
            id="f-comp"
            v-model="complemento"
            type="text"
            placeholder="Apto, bloco, ponto de referência"
          >
        </div>

        <div class="campo">
          <label for="f-cidade">Cidade *</label>
          <input
            id="f-cidade"
            v-model="cidade"
            type="text"
            required
            placeholder="Itapoã"
          >
        </div>

        <div class="campo">
          <label for="f-moradores">Número de moradores (opcional)</label>
          <input
            id="f-moradores"
            v-model.number="numeroMoradores"
            type="number"
            min="1"
            placeholder="Quantas pessoas moram na casa"
          >
        </div>

        <div class="campo">
          <label for="f-obs">Observações (opcional)</label>
          <textarea
            id="f-obs"
            v-model="observacoes"
            rows="3"
            placeholder="Informações adicionais"
          />
        </div>

        <p
          v-if="erroCampo"
          class="campo__erro"
        >
          {{ erroCampo }}
        </p>

        <div class="formulario__acoes">
          <button
            type="button"
            class="botao botao--secundario"
            @click="cancelar"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="botao botao--primario"
            :disabled="enviando"
          >
            {{ enviando ? 'Salvando...' : 'Salvar família' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Lista de famílias -->
    <div
      v-else
      class="cartao"
    >
      <div class="barra-busca">
        <label
          for="busca-fam"
          class="sr-only"
        >Buscar família</label>
        <input
          id="busca-fam"
          v-model="busca"
          type="search"
          placeholder="Buscar por nome do responsável..."
        >
      </div>

      <div
        v-if="error"
        class="aviso aviso--erro"
      >
        Não foi possível carregar as famílias.
      </div>

      <div
        v-else-if="familiasFiltradas.length === 0"
        class="vazio"
      >
        Nenhuma família encontrada.
      </div>

      <table
        v-else
        class="tabela"
      >
        <thead>
          <tr>
            <th>Responsável</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>Situação</th>
            <th>Data cadastro</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="f in familiasFiltradas"
            :key="f.id"
          >
            <td><strong>{{ f.nomeResponsavel }}</strong></td>
            <td>{{ f.telefone }}</td>
            <td>{{ f.logradouro }}{{ f.complemento ? `, ${f.complemento}` : '' }} - {{ f.cidade }}</td>
            <td><span class="etiqueta etiqueta--verde">{{ f.situacao }}</span></td>
            <td>{{ f.dataCadastro }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.barra-busca {
  margin-bottom: var(--espaco-4, 1rem);
}
.barra-busca input {
  width: 100%;
  max-width: 400px;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--cor-borda, #ccc);
  border-radius: var(--raio, 4px);
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.etiqueta--verde {
  background: var(--cor-sucesso-fundo, #e6f4ea);
  color: var(--cor-sucesso-texto, #137333);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
}
</style>
