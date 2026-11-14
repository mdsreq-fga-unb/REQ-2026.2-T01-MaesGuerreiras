<script setup lang="ts">
import type { FrequenciaHistoricoItemResposta, ParticipanteResposta, TurmaResposta } from '~/types/contratos'

const { data: participantes } = await useFetch<ParticipanteResposta[]>('/api/participantes')
const { data: turmas } = await useFetch<TurmaResposta[]>('/api/turmas')

const participanteId = ref('')
const turmaId = ref('')
const dataInicio = ref('')
const dataFim = ref('')

const historico = ref<FrequenciaHistoricoItemResposta[]>([])
const consultado = ref(false)
const carregando = ref(false)
const erro = ref('')

async function buscarHistorico() {
  if (!participanteId.value) return
  erro.value = ''
  carregando.value = true
  consultado.value = true

  try {
    const params = new URLSearchParams()
    if (turmaId.value) params.set('turmaId', turmaId.value)
    if (dataInicio.value) params.set('dataInicio', dataInicio.value)
    if (dataFim.value) params.set('dataFim', dataFim.value)

    const dados = await $fetch<FrequenciaHistoricoItemResposta[]>(
      `/api/frequencias/participante/${participanteId.value}?${params.toString()}`,
    )
    historico.value = dados
  }
  catch {
    erro.value = 'Não foi possível consultar o histórico de frequência.'
    historico.value = []
  }
  finally {
    carregando.value = false
  }
}

const totalPresencas = computed(() => historico.value.filter(h => h.presente).length)
const totalJustificadas = computed(() => historico.value.filter(h => !h.presente && h.justificada).length)
const totalFaltasNaoJustificadas = computed(() => historico.value.filter(h => !h.presente && !h.justificada).length)
</script>

<template>
  <div>
    <CabecalhoPagina
      titulo="Consulta de frequência do participante"
      descricao="Histórico de presenças, faltas e justificativas por turma e período (RF31, RNF03)"
    />

    <div class="cartao">
      <form
        class="filtros-frequencia"
        @submit.prevent="buscarHistorico"
      >
        <div class="campo">
          <label for="f-part">Participante *</label>
          <select
            id="f-part"
            v-model="participanteId"
            required
            @change="buscarHistorico"
          >
            <option value="">
              Selecione um participante...
            </option>
            <option
              v-for="p in participantes"
              :key="p.id"
              :value="p.id"
            >
              {{ p.nome }}
            </option>
          </select>
        </div>

        <div class="campo">
          <label for="f-turma">Turma (opcional)</label>
          <select
            id="f-turma"
            v-model="turmaId"
          >
            <option value="">
              Todas as turmas
            </option>
            <option
              v-for="t in turmas"
              :key="t.id"
              :value="t.id"
            >
              {{ t.atividade }}
            </option>
          </select>
        </div>

        <div class="campo">
          <label for="f-ini">A partir de</label>
          <input
            id="f-ini"
            v-model="dataInicio"
            type="date"
          >
        </div>

        <div class="campo">
          <label for="f-fim">Até</label>
          <input
            id="f-fim"
            v-model="dataFim"
            type="date"
          >
        </div>

        <button
          type="submit"
          class="botao botao--primario"
          :disabled="!participanteId || carregando"
        >
          {{ carregando ? 'Buscando...' : 'Consultar' }}
        </button>
      </form>
    </div>

    <!-- Resultados -->
    <div
      v-if="consultado"
      class="cartao"
    >
      <div
        v-if="erro"
        class="aviso aviso--erro"
      >
        {{ erro }}
      </div>

      <div
        v-else-if="historico.length === 0"
        class="vazio"
      >
        Não foram encontrados resultados para a consulta (CA-RF31-04).
      </div>

      <div v-else>
        <div class="resumo-frequencia">
          <div class="card-metrica">
            <span class="metrica-valor metrica--verde">{{ totalPresencas }}</span>
            <span class="metrica-label">Presenças</span>
          </div>
          <div class="card-metrica">
            <span class="metrica-valor metrica--laranja">{{ totalJustificadas }}</span>
            <span class="metrica-label">Faltas justificadas (RN16)</span>
          </div>
          <div class="card-metrica">
            <span class="metrica-valor metrica--vermelho">{{ totalFaltasNaoJustificadas }}</span>
            <span class="metrica-label">Faltas não justificadas</span>
          </div>
        </div>

        <table class="tabela">
          <thead>
            <tr>
              <th>Data do encontro</th>
              <th>Turma / Atividade</th>
              <th>Situação vigente</th>
              <th>Justificativa</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="h in historico"
              :key="h.frequenciaId"
            >
              <td><strong>{{ h.dataEncontro }}</strong></td>
              <td>{{ h.atividade }}</td>
              <td>
                <span
                  v-if="h.presente"
                  class="etiqueta etiqueta--verde"
                >Presente</span>
                <span
                  v-else-if="h.justificada"
                  class="etiqueta etiqueta--laranja"
                >Falta justificada</span>
                <span
                  v-else
                  class="etiqueta etiqueta--vermelha"
                >Ausente</span>
              </td>
              <td>
                <span v-if="h.motivoJustificativa">{{ h.motivoJustificativa }}</span>
                <span
                  v-else
                  class="texto-apagado"
                >—</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filtros-frequencia {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-end;
}
.filtros-frequencia .campo {
  flex: 1;
  min-width: 160px;
}
.resumo-frequencia {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.card-metrica {
  background: var(--cor-fundo-suave, #f8f9fa);
  padding: 1rem 1.5rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.metrica-valor {
  font-size: 1.8rem;
  font-weight: bold;
}
.metrica-label {
  font-size: 0.85rem;
  color: var(--cor-mutada, #555);
}
.metrica--verde { color: #1e8e3e; }
.metrica--laranja { color: #d97706; }
.metrica--vermelho { color: #d93025; }
.etiqueta--verde {
  background: #e6f4ea;
  color: #137333;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}
.etiqueta--laranja {
  background: #feefe3;
  color: #b06000;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}
.etiqueta--vermelha {
  background: #fce8e6;
  color: #c5221f;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}
</style>
