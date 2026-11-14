<script setup lang="ts">
import type { ChamadaResposta, TurmaResposta } from '~/types/contratos'
import { formatarData, hojeISO } from '~/utils/formato'
import { campoDoErro, mensagemErro } from '~/utils/http'

const { data: turmas } = await useFetch<TurmaResposta[]>('/api/turmas')
const { data: sessao } = await useFetch<{ perfil: string, usuario: { id: string } }>('/api/acesso/sessao')
const ehCoord = computed(() => sessao.value?.perfil === 'coordenacao')

const turmaId = ref('')
// Data local do aparelho: toISOString() usa UTC e, à noite, já devolveria o dia seguinte.
const dataHoje = hojeISO()
const chamadaAtiva = ref<ChamadaResposta | null>(null)

type InscritoChamada = ChamadaResposta['inscritos'][number]

// Justificativa (RF29) e correção (RF30) são ações separadas, cada uma com seu modo.
const acao = ref<'justificar' | 'corrigir' | null>(null)
const participanteModal = ref<InscritoChamada | null>(null)
const motivoJustificativa = ref('')
const motivoCorrecao = ref('')
const novaPresenca = ref(true)
const erroModal = ref('')

const carregando = ref(false)
const enviando = ref(false)
const erro = ref('')
const sucesso = ref('')

// Registro já salvo só muda por "Corrigir" (RF30); o salvamento da chamada envia apenas as marcações novas.
const pendentes = computed(() =>
  chamadaAtiva.value?.inscritos.filter(i => !i.frequenciaId && i.presente !== null) ?? [],
)
const semMarcacao = computed(() =>
  chamadaAtiva.value?.inscritos.filter(i => !i.frequenciaId && i.presente === null).length ?? 0,
)
const todosSalvos = computed(() =>
  Boolean(chamadaAtiva.value?.inscritos.length) && chamadaAtiva.value!.inscritos.every(i => i.frequenciaId),
)

async function carregarChamada() {
  const dados = await $fetch<ChamadaResposta>('/api/chamadas', {
    method: 'POST',
    body: {
      turmaId: turmaId.value,
      dataEncontro: dataHoje,
    },
  })
  chamadaAtiva.value = dados
}

async function abrirOuBuscarChamada() {
  if (!turmaId.value) {
    chamadaAtiva.value = null
    return
  }
  erro.value = ''
  sucesso.value = ''
  carregando.value = true

  try {
    await carregarChamada()
  }
  catch (falha) {
    chamadaAtiva.value = null
    erro.value = mensagemErro(falha)
  }
  finally {
    carregando.value = false
  }
}

function marcar(inscrito: InscritoChamada, presente: boolean) {
  if (inscrito.frequenciaId) return
  inscrito.presente = presente
}

function marcarTodos(presente: boolean) {
  if (!chamadaAtiva.value) return
  for (const i of chamadaAtiva.value.inscritos) {
    marcar(i, presente)
  }
}

async function salvarFrequencias() {
  if (!chamadaAtiva.value || pendentes.value.length === 0) return
  erro.value = ''
  sucesso.value = ''
  enviando.value = true

  try {
    const registros = pendentes.value.map(i => ({
      participanteId: i.participanteId,
      presente: Boolean(i.presente),
    }))

    await $fetch(`/api/chamadas/${chamadaAtiva.value.id}/frequencias`, {
      method: 'POST',
      body: { registros },
    })

    await carregarChamada()
    sucesso.value = registros.length === 1
      ? 'Frequência de 1 participante registrada.'
      : `Frequência de ${registros.length} participantes registrada.`
  }
  catch (falha) {
    erro.value = mensagemErro(falha)
  }
  finally {
    enviando.value = false
  }
}

function abrirJustificativa(inscrito: InscritoChamada) {
  acao.value = 'justificar'
  participanteModal.value = inscrito
  motivoJustificativa.value = ''
  erroModal.value = ''
}

function abrirCorrecao(inscrito: InscritoChamada) {
  acao.value = 'corrigir'
  participanteModal.value = inscrito
  novaPresenca.value = !inscrito.presente
  motivoCorrecao.value = ''
  erroModal.value = ''
}

function fecharModal() {
  acao.value = null
  participanteModal.value = null
  erroModal.value = ''
}

async function salvarJustificativa() {
  if (!participanteModal.value?.frequenciaId) return
  if (!motivoJustificativa.value.trim()) {
    erroModal.value = 'Informe o motivo da falta para justificar.'
    return
  }
  erroModal.value = ''
  sucesso.value = ''
  enviando.value = true
  try {
    await $fetch(`/api/frequencias/${participanteModal.value.frequenciaId}/justificar`, {
      method: 'POST',
      body: { motivo: motivoJustificativa.value.trim() },
    })
    const nome = participanteModal.value.nome
    fecharModal()
    await carregarChamada()
    sucesso.value = `Falta de ${nome} justificada.`
  }
  catch (falha) {
    erroModal.value = mensagemErro(falha)
  }
  finally {
    enviando.value = false
  }
}

async function salvarCorrecao() {
  if (!participanteModal.value?.frequenciaId) return
  if (ehCoord.value && !motivoCorrecao.value.trim()) {
    erroModal.value = 'Informe o motivo da correção.'
    return
  }
  erroModal.value = ''
  sucesso.value = ''
  enviando.value = true
  try {
    await $fetch(`/api/frequencias/${participanteModal.value.frequenciaId}`, {
      method: 'PATCH',
      body: {
        presente: novaPresenca.value,
        motivoCorrecao: motivoCorrecao.value.trim() || undefined,
      },
    })
    const nome = participanteModal.value.nome
    fecharModal()
    await carregarChamada()
    sucesso.value = `Registro de ${nome} corrigido.`
  }
  catch (falha) {
    erroModal.value = campoDoErro(falha) === 'motivoCorrecao'
      ? 'Informe o motivo da correção.'
      : mensagemErro(falha)
  }
  finally {
    enviando.value = false
  }
}
</script>

<template>
  <div>
    <CabecalhoPagina
      titulo="Chamada digital e frequência"
      descricao="Abertura da chamada do dia, registro de presença, justificativa de falta e correção"
    />

    <div
      v-if="sucesso"
      class="aviso aviso--sucesso"
      role="status"
    >
      {{ sucesso }}
    </div>
    <div
      v-if="erro"
      class="aviso aviso--erro"
      role="alert"
    >
      {{ erro }}
    </div>

    <!-- Passo 1: seleção da turma e abertura da chamada do dia (RF27 / RN15) -->
    <div class="cartao">
      <div class="abertura-chamada">
        <div class="campo">
          <label for="ch-turma">Turma da chamada de hoje ({{ formatarData(dataHoje) }})</label>
          <select
            id="ch-turma"
            v-model="turmaId"
            @change="abrirOuBuscarChamada"
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
        <button
          type="button"
          class="botao botao--primario"
          :disabled="!turmaId || carregando"
          @click="abrirOuBuscarChamada"
        >
          {{ carregando ? 'Abrindo...' : 'Abrir chamada' }}
        </button>
      </div>
    </div>

    <!-- Passos 2 e 3: lista de inscritos e marcação de presença (RF28 / RNF01) -->
    <div
      v-if="chamadaAtiva"
      class="cartao"
    >
      <div class="chamada-topo">
        <h2>{{ chamadaAtiva.turma?.atividade }} — Encontro de {{ formatarData(chamadaAtiva.dataEncontro) }}</h2>
        <div
          v-if="!todosSalvos && chamadaAtiva.inscritos.length > 0"
          class="botoes-rapidos"
        >
          <button
            type="button"
            class="botao botao--pequeno botao--secundario"
            @click="marcarTodos(true)"
          >
            Todos presentes
          </button>
          <button
            type="button"
            class="botao botao--pequeno botao--secundario"
            @click="marcarTodos(false)"
          >
            Todos ausentes
          </button>
        </div>
      </div>

      <div
        v-if="chamadaAtiva.inscritos.length === 0"
        class="vazio"
      >
        Nenhum participante inscrito nesta turma.
      </div>

      <table
        v-else
        class="tabela"
      >
        <thead>
          <tr>
            <th>Participante</th>
            <th>Frequência</th>
            <th>Justificativa</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="inscrito in chamadaAtiva.inscritos"
            :key="inscrito.participanteId"
          >
            <td><strong>{{ inscrito.nome }}</strong></td>
            <td>
              <!-- Registro salvo: só muda pela correção, que guarda autor, data e valor anterior (RF30). -->
              <span
                v-if="inscrito.frequenciaId"
                class="etiqueta"
                :class="inscrito.presente ? 'etiqueta--sucesso' : 'etiqueta--erro'"
              >
                {{ inscrito.presente ? 'Presente' : 'Ausente' }}
              </span>
              <div
                v-else
                class="botoes-presenca"
                role="group"
                :aria-label="`Frequência de ${inscrito.nome}`"
              >
                <button
                  type="button"
                  class="btn-status"
                  :class="{ 'btn-status--presente': inscrito.presente === true }"
                  :aria-pressed="inscrito.presente === true"
                  @click="marcar(inscrito, true)"
                >
                  Presente
                </button>
                <button
                  type="button"
                  class="btn-status"
                  :class="{ 'btn-status--ausente': inscrito.presente === false }"
                  :aria-pressed="inscrito.presente === false"
                  @click="marcar(inscrito, false)"
                >
                  Ausente
                </button>
              </div>
            </td>
            <td>
              <span
                v-if="inscrito.frequenciaId && inscrito.justificada"
                class="etiqueta etiqueta--laranja"
              >
                Falta justificada: {{ inscrito.motivoJustificativa }}
              </span>
              <span
                v-else-if="inscrito.frequenciaId && inscrito.presente === false"
                class="texto-apagado"
              >
                Falta não justificada
              </span>
              <span
                v-else
                class="texto-apagado"
              >—</span>
            </td>
            <td>
              <div
                v-if="inscrito.frequenciaId"
                class="acoes-linha"
              >
                <button
                  v-if="inscrito.presente === false && !inscrito.justificada"
                  type="button"
                  class="botao botao--pequeno botao--secundario"
                  @click="abrirJustificativa(inscrito)"
                >
                  Justificar falta
                </button>
                <button
                  type="button"
                  class="botao botao--pequeno botao--secundario"
                  @click="abrirCorrecao(inscrito)"
                >
                  Corrigir
                </button>
              </div>
              <span
                v-else
                class="texto-apagado"
              >Ainda não salvo</span>
            </td>
          </tr>
        </tbody>
      </table>

      <div
        v-if="chamadaAtiva.inscritos.length > 0"
        class="formulario__acoes"
      >
        <p
          v-if="todosSalvos"
          class="campo__dica"
        >
          Chamada registrada. Para alterar um registro, use "Corrigir".
        </p>
        <template v-else>
          <p
            v-if="semMarcacao > 0"
            class="campo__dica"
          >
            {{ semMarcacao === 1 ? 'Falta marcar 1 participante.' : `Falta marcar ${semMarcacao} participantes.` }}
          </p>
          <button
            type="button"
            class="botao botao--primario botao--grande"
            :disabled="enviando || pendentes.length === 0"
            @click="salvarFrequencias"
          >
            {{ enviando ? 'Gravando chamada...' : 'Salvar frequência da turma' }}
          </button>
        </template>
      </div>
    </div>

    <!-- Janela de justificativa (RF29) ou de correção (RF30) -->
    <div
      v-if="participanteModal && acao"
      class="modal-fundo"
      @keydown.esc="fecharModal"
    >
      <div
        class="modal-cartao"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-titulo"
      >
        <h3 id="modal-titulo">
          {{ acao === 'justificar' ? 'Justificar falta' : 'Corrigir registro de frequência' }}
        </h3>
        <p><strong>Participante:</strong> {{ participanteModal.nome }}</p>
        <p>
          <strong>Registro atual:</strong>
          {{ participanteModal.presente ? 'Presente' : (participanteModal.justificada ? 'Falta justificada' : 'Ausente') }}
        </p>

        <div
          v-if="erroModal"
          class="aviso aviso--erro"
          role="alert"
        >
          {{ erroModal }}
        </div>

        <form
          v-if="acao === 'justificar'"
          class="formulario"
          @submit.prevent="salvarJustificativa"
        >
          <div class="campo">
            <label for="m-just">Motivo da falta *</label>
            <textarea
              id="m-just"
              v-model="motivoJustificativa"
              rows="3"
              placeholder="Ex.: atestado médico, compromisso escolar"
            />
            <p class="campo__dica">
              A falta continua registrada como falta, mas passa a constar como justificada.
            </p>
          </div>
          <div class="formulario__acoes">
            <button
              type="button"
              class="botao botao--secundario"
              @click="fecharModal"
            >
              Cancelar
            </button>
            <button
              type="submit"
              class="botao botao--primario"
              :disabled="enviando"
            >
              {{ enviando ? 'Salvando...' : 'Confirmar justificativa' }}
            </button>
          </div>
        </form>

        <form
          v-else
          class="formulario"
          @submit.prevent="salvarCorrecao"
        >
          <div class="campo">
            <label for="m-situacao">Nova situação *</label>
            <select
              id="m-situacao"
              v-model="novaPresenca"
            >
              <option :value="true">
                Presente
              </option>
              <option :value="false">
                Ausente
              </option>
            </select>
            <p
              v-if="participanteModal.justificada"
              class="campo__dica"
            >
              A correção retira a justificativa registrada para esta falta.
            </p>
          </div>
          <div class="campo">
            <label for="m-corr">Motivo da correção {{ ehCoord ? '*' : '(opcional)' }}</label>
            <textarea
              id="m-corr"
              v-model="motivoCorrecao"
              rows="2"
              placeholder="Ex.: participante chegou depois da chamada"
            />
            <p class="campo__dica">
              O registro anterior fica guardado, com quem corrigiu, a data e a hora.
            </p>
          </div>
          <div class="formulario__acoes">
            <button
              type="button"
              class="botao botao--secundario"
              @click="fecharModal"
            >
              Cancelar
            </button>
            <button
              type="submit"
              class="botao botao--primario"
              :disabled="enviando || novaPresenca === participanteModal.presente && !participanteModal.justificada"
            >
              {{ enviando ? 'Salvando...' : 'Confirmar correção' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.abertura-chamada {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
}
.abertura-chamada .campo {
  flex: 1;
}
.chamada-topo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.botoes-rapidos {
  display: flex;
  gap: 0.5rem;
}
.botoes-presenca {
  display: flex;
  gap: 0.25rem;
}
.btn-status {
  padding: 0.35rem 0.65rem;
  border: 1px solid var(--cor-borda, #ccc);
  background: white;
  border-radius: 4px;
  cursor: pointer;
}
.btn-status--presente {
  background: var(--cor-sucesso-fundo, #e6f4ea);
  border-color: var(--cor-sucesso, #1e8e3e);
  color: var(--cor-sucesso-texto, #137333);
  font-weight: bold;
}
.btn-status--ausente {
  background: var(--cor-erro-fundo, #fce8e6);
  border-color: var(--cor-erro, #d93025);
  color: var(--cor-erro-texto, #c5221f);
  font-weight: bold;
}
.etiqueta--laranja {
  background: #feefe3;
  color: #b06000;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
}
.acoes-linha {
  display: flex;
  gap: 0.25rem;
}
.modal-fundo {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-cartao {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
}
</style>
