<script setup lang="ts">
import type { ChamadaResposta, TurmaResposta } from '~/types/contratos'
import { campoDoErro, mensagemErro } from '~/utils/http'

const { data: turmas } = await useFetch<TurmaResposta[]>('/api/turmas')
const { data: sessao } = await useFetch<{ perfil: string, usuario: { id: string } }>('/api/acesso/sessao')

const turmaId = ref('')
const dataHoje = new Date().toISOString().slice(0, 10)
const chamadaAtiva = ref<ChamadaResposta | null>(null)

type InscritoChamada = ChamadaResposta['inscritos'][number]

// Estados para justificativa e correção
const participanteModal = ref<InscritoChamada | null>(null)
const motivoJustificativa = ref('')
const motivoCorrecao = ref('')
const novaPresenca = ref(true)

const carregando = ref(false)
const enviando = ref(false)
const erro = ref('')
const sucesso = ref('')

async function abrirOuBuscarChamada() {
  if (!turmaId.value) return
  erro.value = ''
  sucesso.value = ''
  carregando.value = true

  try {
    const dados = await $fetch<ChamadaResposta>('/api/chamadas', {
      method: 'POST',
      body: {
        turmaId: turmaId.value,
        dataEncontro: dataHoje,
      },
    })
    chamadaAtiva.value = dados
  }
  catch (falha) {
    erro.value = mensagemErro(falha)
  }
  finally {
    carregando.value = false
  }
}

function marcarTodos(presente: boolean) {
  if (!chamadaAtiva.value) return
  for (const i of chamadaAtiva.value.inscritos) {
    i.presente = presente
  }
}

async function salvarFrequencias() {
  if (!chamadaAtiva.value) return
  erro.value = ''
  sucesso.value = ''
  enviando.value = true

  try {
    const registros = chamadaAtiva.value.inscritos
      .filter(i => i.presente !== null)
      .map(i => ({
        participanteId: i.participanteId,
        presente: Boolean(i.presente),
      }))

    await $fetch(`/api/chamadas/${chamadaAtiva.value.id}/frequencias`, {
      method: 'POST',
      body: { registros },
    })

    sucesso.value = 'Frequência registrada com sucesso (RNF01 concluído).'
    await abrirOuBuscarChamada()
  }
  catch (falha) {
    erro.value = mensagemErro(falha)
  }
  finally {
    enviando.value = false
  }
}

function abrirJustificativa(inscrito: InscritoChamada) {
  participanteModal.value = inscrito
  motivoJustificativa.value = inscrito.motivoJustificativa || ''
}

async function salvarJustificativa() {
  if (!participanteModal.value?.frequenciaId) return
  erro.value = ''
  enviando.value = true
  try {
    await $fetch(`/api/frequencias/${participanteModal.value.frequenciaId}/justificar`, {
      method: 'POST',
      body: { motivo: motivoJustificativa.value },
    })
    sucesso.value = 'Falta justificada com sucesso.'
    participanteModal.value = null
    await abrirOuBuscarChamada()
  }
  catch (falha) {
    erro.value = mensagemErro(falha)
  }
  finally {
    enviando.value = false
  }
}

function abrirCorrecao(inscrito: InscritoChamada) {
  participanteModal.value = inscrito
  novaPresenca.value = !inscrito.presente
  motivoCorrecao.value = ''
}

async function salvarCorrecao() {
  if (!participanteModal.value?.frequenciaId) return
  erro.value = ''
  enviando.value = true
  try {
    await $fetch(`/api/frequencias/${participanteModal.value.frequenciaId}`, {
      method: 'PATCH',
      body: {
        presente: novaPresenca.value,
        motivoCorrecao: motivoCorrecao.value || undefined,
      },
    })
    sucesso.value = 'Correção de frequência salva com sucesso (RN17).'
    participanteModal.value = null
    await abrirOuBuscarChamada()
  }
  catch (falha) {
    const campo = campoDoErro(falha)
    if (campo === 'motivoCorrecao') {
      erro.value = 'A Coordenação deve informar o motivo da correção (CA-RF30-04).'
    }
    else {
      erro.value = mensagemErro(falha)
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
      titulo="Chamada digital e frequência"
      descricao="Abertura da chamada do dia e registro de frequência (RF27, RF28, RF29, RF30)"
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

    <!-- Passo 1: Seleção de turma e abertura da chamada do dia (RF27 / RN15) -->
    <div class="cartao">
      <div class="abertura-chamada">
        <div class="campo">
          <label for="ch-turma">Selecione a turma para chamada de hoje ({{ dataHoje }}):</label>
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

    <!-- Passo 2 & 3: Lista de participantes da chamada e marcação de presença (RF28 / RNF01) -->
    <div
      v-if="chamadaAtiva"
      class="cartao"
    >
      <div class="chamada-topo">
        <h2>{{ chamadaAtiva.turma?.atividade }} — Encontro de {{ chamadaAtiva.dataEncontro }}</h2>
        <div class="botoes-rapidos">
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
            <th>Justificativa / Histórico</th>
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
              <div class="botoes-presenca">
                <button
                  type="button"
                  class="btn-status"
                  :class="{ 'btn-status--presente': inscrito.presente === true }"
                  @click="inscrito.presente = true"
                >
                  Presente
                </button>
                <button
                  type="button"
                  class="btn-status"
                  :class="{ 'btn-status--ausente': inscrito.presente === false }"
                  @click="inscrito.presente = false"
                >
                  Ausente
                </button>
              </div>
            </td>
            <td>
              <span
                v-if="inscrito.justificada"
                class="etiqueta etiqueta--laranja"
              >
                Falta justificada: {{ inscrito.motivoJustificativa }}
              </span>
              <span
                v-else-if="inscrito.presente === false"
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
              <div class="acoes-linha">
                <button
                  v-if="inscrito.presente === false && inscrito.frequenciaId && !inscrito.justificada"
                  type="button"
                  class="botao botao--pequeno botao--secundario"
                  @click="abrirJustificativa(inscrito)"
                >
                  Justificar falta
                </button>
                <button
                  v-if="inscrito.frequenciaId"
                  type="button"
                  class="botao botao--pequeno botao--secundario"
                  @click="abrirCorrecao(inscrito)"
                >
                  Corrigir
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="formulario__acoes">
        <button
          type="button"
          class="botao botao--primario botao--grande"
          :disabled="enviando"
          @click="salvarFrequencias"
        >
          {{ enviando ? 'Gravando chamada...' : 'Salvar frequência da turma' }}
        </button>
      </div>
    </div>

    <!-- Modal simples para Justificativa (RF29) ou Correção (RF30) -->
    <div
      v-if="participanteModal"
      class="modal-fundo"
    >
      <div class="modal-cartao">
        <h3>{{ motivoCorrecao !== undefined && sessao?.perfil === 'coordenacao' ? 'Corrigir frequência' : 'Justificar falta' }}</h3>
        <p><strong>Participante:</strong> {{ participanteModal.nome }}</p>

        <div
          v-if="participanteModal.presente !== false"
          class="campo"
        >
          <label>Nova situação:</label>
          <select v-model="novaPresenca">
            <option :value="true">
              Presente
            </option>
            <option :value="false">
              Ausente
            </option>
          </select>
        </div>

        <div
          v-if="!participanteModal.justificada && participanteModal.presente === false"
          class="campo"
        >
          <label for="m-just">Motivo da justificativa de falta (RN16) *:</label>
          <textarea
            id="m-just"
            v-model="motivoJustificativa"
            rows="3"
            placeholder="Ex.: Atestado médico, compromisso escolar"
          />
        </div>

        <div
          v-if="sessao?.perfil === 'coordenacao'"
          class="campo"
        >
          <label for="m-corr">Motivo da correção pela Coordenação (RN17 / CA-RF30-04) *:</label>
          <textarea
            id="m-corr"
            v-model="motivoCorrecao"
            rows="2"
            placeholder="Motivo obrigatório para correção pela Coordenação"
          />
        </div>

        <div class="formulario__acoes">
          <button
            type="button"
            class="botao botao--secundario"
            @click="participanteModal = null"
          >
            Cancelar
          </button>
          <button
            v-if="participanteModal.presente === false && !participanteModal.justificada"
            type="button"
            class="botao botao--primario"
            :disabled="enviando || !motivoJustificativa.trim()"
            @click="salvarJustificativa"
          >
            Confirmar justificativa
          </button>
          <button
            v-else
            type="button"
            class="botao botao--primario"
            :disabled="enviando"
            @click="salvarCorrecao"
          >
            Confirmar correção
          </button>
        </div>
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
