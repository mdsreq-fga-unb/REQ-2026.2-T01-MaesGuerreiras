<script setup lang="ts">
import type { CategoriaResposta, FamiliaResposta, SaldoResposta, TurmaResposta } from '~/types/contratos'
import { campoDoErro, mensagemErro } from '~/utils/http'

const { data: categorias } = await useFetch<CategoriaResposta[]>('/api/categorias')
const { data: saldos, refresh: refreshSaldos } = await useFetch<SaldoResposta[]>('/api/doacoes/saldos')
const { data: familias } = await useFetch<FamiliaResposta[]>('/api/familias')
const { data: turmas } = await useFetch<TurmaResposta[]>('/api/turmas')

const categoriaId = ref('')
const quantidade = ref<number | undefined>(undefined)
const data = ref(new Date().toISOString().slice(0, 10))
const tipoDestinatario = ref<'familia' | 'turma'>('familia')
const familiaId = ref('')
const turmaId = ref('')

const enviando = ref(false)
const erroCampo = ref('')
const aviso = ref('')
const sucesso = ref('')

const saldoDisponivel = computed(() => {
  if (!categoriaId.value || !saldos.value) return 0
  const item = saldos.value.find(s => s.categoriaId === categoriaId.value)
  return item?.saldo ?? 0
})

const unidadeMedida = computed(() => {
  if (!categoriaId.value || !categorias.value) return ''
  const cat = categorias.value.find(c => c.id === categoriaId.value)
  return cat?.unidade ?? ''
})

async function registrarDestinacao() {
  erroCampo.value = ''
  aviso.value = ''
  sucesso.value = ''
  enviando.value = true

  try {
    await $fetch('/api/doacoes/destinacoes', {
      method: 'POST',
      body: {
        categoriaId: categoriaId.value,
        quantidade: quantidade.value,
        data: data.value,
        tipoDestinatario: tipoDestinatario.value,
        familiaId: tipoDestinatario.value === 'familia' ? familiaId.value : null,
        turmaId: tipoDestinatario.value === 'turma' ? turmaId.value : null,
      },
    })
    sucesso.value = 'Destinação de doação registrada com sucesso!'
    quantidade.value = undefined
    await refreshSaldos()
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
</script>

<template>
  <div>
    <CabecalhoPagina
      titulo="Registrar destinação de doação"
      descricao="Saída de itens para famílias atendidas ou turmas de atividades (RF10 / RN02)"
    />

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

    <div class="cartao">
      <form
        class="formulario"
        @submit.prevent="registrarDestinacao"
      >
        <div class="campo">
          <label for="d-cat">Categoria do item *</label>
          <select
            id="d-cat"
            v-model="categoriaId"
            required
          >
            <option value="">
              Selecione uma categoria...
            </option>
            <option
              v-for="c in categorias"
              :key="c.id"
              :value="c.id"
            >
              {{ c.nome }} ({{ c.unidade }})
            </option>
          </select>
        </div>

        <div
          v-if="categoriaId"
          class="aviso-saldo"
        >
          <strong>Saldo disponível em estoque:</strong> {{ saldoDisponivel }} {{ unidadeMedida }}
        </div>

        <div class="campo">
          <label for="d-qtd">Quantidade a destinar *</label>
          <input
            id="d-qtd"
            v-model.number="quantidade"
            type="number"
            step="0.01"
            min="0.01"
            required
            placeholder="Quantidade na unidade da categoria"
          >
        </div>

        <div class="campo">
          <label for="d-data">Data da saída *</label>
          <input
            id="d-data"
            v-model="data"
            type="date"
            required
          >
        </div>

        <div class="campo">
          <label>Destinatário da doação *</label>
          <div class="opcoes-radio">
            <label>
              <input
                v-model="tipoDestinatario"
                type="radio"
                value="familia"
              >
              Família atendida
            </label>
            <label>
              <input
                v-model="tipoDestinatario"
                type="radio"
                value="turma"
              >
              Turma de atividade (uso interno na associação)
            </label>
          </div>
        </div>

        <div
          v-if="tipoDestinatario === 'familia'"
          class="campo"
        >
          <label for="d-fam">Selecione a família cadastrada *</label>
          <select
            id="d-fam"
            v-model="familiaId"
            required
          >
            <option value="">
              Selecione uma família...
            </option>
            <option
              v-for="f in familias"
              :key="f.id"
              :value="f.id"
            >
              {{ f.nomeResponsavel }} ({{ f.logradouro }})
            </option>
          </select>
        </div>

        <div
          v-else
          class="campo"
        >
          <label for="d-turma">Selecione a turma cadastrada *</label>
          <select
            id="d-turma"
            v-model="turmaId"
            required
          >
            <option value="">
              Selecione uma turma...
            </option>
            <option
              v-for="t in turmas"
              :key="t.id"
              :value="t.id"
            >
              {{ t.atividade }} ({{ t.diasSemana.join(', ') }} — {{ t.horario }})
            </option>
          </select>
        </div>

        <p
          v-if="erroCampo"
          class="campo__erro"
        >
          {{ erroCampo }}
        </p>

        <div class="formulario__acoes">
          <button
            type="submit"
            class="botao botao--primario"
            :disabled="enviando || saldoDisponivel <= 0"
          >
            {{ enviando ? 'Registrando...' : 'Registrar destinação' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.aviso-saldo {
  background: var(--cor-fundo-suave, #f8f9fa);
  padding: 0.75rem 1rem;
  border-left: 4px solid var(--cor-primaria, #1a73e8);
  border-radius: 4px;
}
.opcoes-radio {
  display: flex;
  gap: 1.5rem;
  margin-top: 0.25rem;
}
</style>
