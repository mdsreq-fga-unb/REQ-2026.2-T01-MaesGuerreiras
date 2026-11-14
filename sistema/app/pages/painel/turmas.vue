<script setup lang="ts">
import type { InscricaoResposta, ParticipanteResposta, TurmaResposta } from '~/types/contratos'
import { campoDoErro, mensagemErro } from '~/utils/http'

const { data: turmas, error, refresh } = await useFetch<TurmaResposta[]>('/api/turmas')
const { data: participantes } = await useFetch<ParticipanteResposta[]>('/api/participantes')

// Perfil da sessão para permitir criação apenas para coordenação (CA-RF20-04)
const { data: sessao } = await useFetch<{ perfil: string }>('/api/acesso/sessao')
const ehCoord = computed(() => sessao.value?.perfil === 'coordenacao')

const modo = ref<'lista' | 'nova_turma' | 'inscrever'>('lista')
const turmaSelecionada = ref<TurmaResposta | null>(null)
const inscritosDaTurma = ref<InscricaoResposta[]>([])
const enviando = ref(false)

// Cadastro de turma (RF20)
const atividade = ref('')
const dataInicio = ref('')
const dataTermino = ref('')
const diasSemana = ref<string[]>(['segunda', 'quarta'])
const horario = ref('14:00 - 16:00')
const vagas = ref<number>(15)

// Inscrição (RF23)
const participanteIdSelecionado = ref('')

const erroCampo = ref('')
const aviso = ref('')
const sucesso = ref('')

function abrirNovaTurma() {
  modo.value = 'nova_turma'
  sucesso.value = ''
  aviso.value = ''
}

async function abrirInscricao(t: TurmaResposta) {
  turmaSelecionada.value = t
  modo.value = 'inscrever'
  sucesso.value = ''
  aviso.value = ''
  participanteIdSelecionado.value = ''
  await carregarInscritos(t.id)
}

async function carregarInscritos(turmaId: string) {
  try {
    const dados = await $fetch<InscricaoResposta[]>(`/api/turmas/${turmaId}/inscricoes`)
    inscritosDaTurma.value = dados
  }
  catch {
    inscritosDaTurma.value = []
  }
}

function cancelar() {
  modo.value = 'lista'
  atividade.value = ''
  dataInicio.value = ''
  dataTermino.value = ''
  diasSemana.value = ['segunda', 'quarta']
  horario.value = '14:00 - 16:00'
  vagas.value = 15
  turmaSelecionada.value = null
  participanteIdSelecionado.value = ''
  erroCampo.value = ''
  aviso.value = ''
}

async function cadastrarTurma() {
  erroCampo.value = ''
  aviso.value = ''
  enviando.value = true
  try {
    await $fetch('/api/turmas', {
      method: 'POST',
      body: {
        atividade: atividade.value,
        dataInicio: dataInicio.value,
        dataTermino: dataTermino.value,
        diasSemana: diasSemana.value,
        horario: horario.value,
        vagas: vagas.value,
      },
    })
    sucesso.value = `Turma de "${atividade.value.trim()}" cadastrada com sucesso.`
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

async function inscreverParticipante() {
  if (!turmaSelecionada.value || !participanteIdSelecionado.value) return
  erroCampo.value = ''
  aviso.value = ''
  enviando.value = true
  try {
    await $fetch(`/api/turmas/${turmaSelecionada.value.id}/inscricoes`, {
      method: 'POST',
      body: {
        participanteId: participanteIdSelecionado.value,
      },
    })
    sucesso.value = 'Participante inscrito com sucesso!'
    participanteIdSelecionado.value = ''
    await carregarInscritos(turmaSelecionada.value.id)
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
</script>

<template>
  <div>
    <CabecalhoPagina
      v-if="modo !== 'lista'"
      voltar="Turmas"
      :titulo="modo === 'nova_turma' ? 'Cadastrar turma' : `Inscrições — ${turmaSelecionada?.atividade}`"
      @voltar="cancelar"
    />
    <CabecalhoPagina
      v-else
      titulo="Turmas de atividades"
      descricao="Cadastro de turmas e inscrição de participantes (RF20, RF23)"
    >
      <template
        v-if="ehCoord"
        #acoes
      >
        <button
          type="button"
          class="botao botao--primario"
          @click="abrirNovaTurma"
        >
          Nova turma
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

    <!-- Cadastro de turma (RF20 / CA-RF20-04) -->
    <div
      v-if="modo === 'nova_turma'"
      class="cartao"
    >
      <form
        class="formulario"
        @submit.prevent="cadastrarTurma"
      >
        <div class="campo">
          <label for="t-ativ">Atividade *</label>
          <input
            id="t-ativ"
            v-model="atividade"
            type="text"
            required
            placeholder="Ex.: Oficina de Costura, Alfabetização, Capoeira"
          >
        </div>

        <div class="campo-grupo">
          <div class="campo">
            <label for="t-ini">Data de início *</label>
            <input
              id="t-ini"
              v-model="dataInicio"
              type="date"
              required
            >
          </div>
          <div class="campo">
            <label for="t-fim">Data de término (deve ser posterior) *</label>
            <input
              id="t-fim"
              v-model="dataTermino"
              type="date"
              required
            >
          </div>
        </div>

        <div class="campo">
          <label>Dias da semana dos encontros *</label>
          <div class="dias-lista">
            <label><input
              v-model="diasSemana"
              type="checkbox"
              value="segunda"
            > Seg</label>
            <label><input
              v-model="diasSemana"
              type="checkbox"
              value="terca"
            > Ter</label>
            <label><input
              v-model="diasSemana"
              type="checkbox"
              value="quarta"
            > Qua</label>
            <label><input
              v-model="diasSemana"
              type="checkbox"
              value="quinta"
            > Qui</label>
            <label><input
              v-model="diasSemana"
              type="checkbox"
              value="sexta"
            > Sex</label>
            <label><input
              v-model="diasSemana"
              type="checkbox"
              value="sabado"
            > Sáb</label>
          </div>
        </div>

        <div class="campo">
          <label for="t-horario">Horário *</label>
          <input
            id="t-horario"
            v-model="horario"
            type="text"
            required
            placeholder="14:00 - 16:00"
          >
        </div>

        <div class="campo">
          <label for="t-vagas">Quantidade de vagas *</label>
          <input
            id="t-vagas"
            v-model.number="vagas"
            type="number"
            min="1"
            required
          >
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
            {{ enviando ? 'Salvando...' : 'Salvar turma' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Inscrição de participante na turma (RF23) -->
    <div
      v-else-if="modo === 'inscrever' && turmaSelecionada"
      class="cartao"
    >
      <div class="turma-resumo">
        <p><strong>Período:</strong> {{ turmaSelecionada.dataInicio }} a {{ turmaSelecionada.dataTermino }}</p>
        <p><strong>Horário:</strong> {{ turmaSelecionada.diasSemana.join(', ') }} — {{ turmaSelecionada.horario }}</p>
        <p><strong>Ocupação de vagas:</strong> {{ inscritosDaTurma.length }} de {{ turmaSelecionada.vagas }} preenchidas</p>
      </div>

      <form
        class="formulario formulario--inline"
        @submit.prevent="inscreverParticipante"
      >
        <div class="campo">
          <label for="ins-part">Inscrever participante ativo:</label>
          <select
            id="ins-part"
            v-model="participanteIdSelecionado"
            required
          >
            <option value="">
              Selecione o participante...
            </option>
            <option
              v-for="p in participantes"
              :key="p.id"
              :value="p.id"
            >
              {{ p.nome }} ({{ p.situacao }})
            </option>
          </select>
        </div>

        <button
          type="submit"
          class="botao botao--primario"
          :disabled="enviando || inscritosDaTurma.length >= turmaSelecionada.vagas"
        >
          {{ enviando ? 'Inscrevendo...' : 'Inscrever na turma' }}
        </button>
      </form>

      <p
        v-if="erroCampo"
        class="campo__erro"
      >
        {{ erroCampo }}
      </p>

      <h3 style="margin-top: 1.5rem;">
        Participantes inscritos ({{ inscritosDaTurma.length }})
      </h3>
      <div
        v-if="inscritosDaTurma.length === 0"
        class="vazio"
      >
        Nenhum participante inscrito nesta turma ainda.
      </div>
      <ul
        v-else
        class="lista-inscritos"
      >
        <li
          v-for="i in inscritosDaTurma"
          :key="i.id"
        >
          <span><strong>{{ i.participante?.nome ?? 'Participante' }}</strong></span>
          <span class="texto-apagado">Inscrito em {{ i.dataInscricao }}</span>
        </li>
      </ul>
    </div>

    <!-- Lista de turmas -->
    <div
      v-else
      class="cartao"
    >
      <div
        v-if="error"
        class="aviso aviso--erro"
      >
        Não foi possível carregar as turmas.
      </div>
      <div
        v-else-if="turmas?.length === 0"
        class="vazio"
      >
        Nenhuma turma cadastrada.
      </div>
      <table
        v-else
        class="tabela"
      >
        <thead>
          <tr>
            <th>Atividade</th>
            <th>Período</th>
            <th>Dias / Horário</th>
            <th>Vagas</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="t in turmas"
            :key="t.id"
          >
            <td><strong>{{ t.atividade }}</strong></td>
            <td>{{ t.dataInicio }} a {{ t.dataTermino }}</td>
            <td>{{ t.diasSemana.join(', ') }} — {{ t.horario }}</td>
            <td>
              <span :class="t.totalInscritos >= t.vagas ? 'etiqueta etiqueta--vermelha' : 'etiqueta'">
                {{ t.totalInscritos }} / {{ t.vagas }}
              </span>
            </td>
            <td>
              <button
                type="button"
                class="botao botao--pequeno botao--secundario"
                @click="abrirInscricao(t)"
              >
                Inscrições
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.campo-grupo {
  display: flex;
  gap: var(--espaco-4, 1rem);
  flex-wrap: wrap;
}
.campo-grupo .campo {
  flex: 1;
  min-width: 200px;
}
.dias-lista {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.turma-resumo {
  background: var(--cor-fundo-suave, #f8f9fa);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}
.formulario--inline {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
}
.lista-inscritos {
  list-style: none;
  padding: 0;
  margin-top: 0.5rem;
}
.lista-inscritos li {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--cor-borda-suave, #eee);
}
.etiqueta--vermelha {
  background: var(--cor-erro-fundo, #fce8e6);
  color: var(--cor-erro-texto, #c5221f);
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
}
</style>
