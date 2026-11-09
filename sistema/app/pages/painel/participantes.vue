<script setup lang="ts">
import type { FamiliaResposta, ParticipanteResposta, TurmaResposta } from '~/types/contratos'
import { campoDoErro, mensagemErro } from '~/utils/http'
import { calcularIdade } from '~/utils/familias'

const { data: participantes, error, refresh } = await useFetch<ParticipanteResposta[]>('/api/participantes')
const { data: familias } = await useFetch<FamiliaResposta[]>('/api/familias')
const { data: turmas } = await useFetch<TurmaResposta[]>('/api/turmas')

const modo = ref<'lista' | 'novo' | 'vincular'>('lista')
const enviando = ref(false)

// Filtros de busca (RF19)
const filtroNome = ref('')
const filtroFamilia = ref('')
const filtroTurma = ref('')

// Cadastro (RF16)
const nome = ref('')
const dataNascimento = ref('')
const telefone = ref('')
const observacoes = ref('')

// Vínculo (RF18)
const participanteSelecionado = ref<ParticipanteResposta | null>(null)
const familiaIdSelecionada = ref('')
const responsavelLegal = ref('')
const motivoAusenciaResponsavel = ref('')

const erroCampo = ref('')
const aviso = ref('')
const sucesso = ref('')

function abrirNovo() {
  modo.value = 'novo'
  sucesso.value = ''
  aviso.value = ''
}

function abrirVincular(p: ParticipanteResposta) {
  participanteSelecionado.value = p
  familiaIdSelecionada.value = p.familiaId || ''
  responsavelLegal.value = p.responsavelLegal || ''
  motivoAusenciaResponsavel.value = p.motivoAusenciaResponsavel || ''
  modo.value = 'vincular'
  sucesso.value = ''
  aviso.value = ''
}

function cancelar() {
  modo.value = 'lista'
  nome.value = ''
  dataNascimento.value = ''
  telefone.value = ''
  observacoes.value = ''
  participanteSelecionado.value = null
  familiaIdSelecionada.value = ''
  responsavelLegal.value = ''
  motivoAusenciaResponsavel.value = ''
  erroCampo.value = ''
  aviso.value = ''
}

async function cadastrar() {
  erroCampo.value = ''
  aviso.value = ''
  enviando.value = true
  try {
    await $fetch('/api/participantes', {
      method: 'POST',
      body: {
        nome: nome.value,
        dataNascimento: dataNascimento.value,
        telefone: telefone.value || null,
        observacoes: observacoes.value || null,
      },
    })
    sucesso.value = `Participante "${nome.value.trim()}" cadastrado com sucesso.`
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

async function vincular() {
  if (!participanteSelecionado.value) return
  erroCampo.value = ''
  aviso.value = ''
  enviando.value = true
  try {
    await $fetch(`/api/participantes/${participanteSelecionado.value.id}/vinculo-familiar`, {
      method: 'POST',
      body: {
        familiaId: familiaIdSelecionada.value,
        responsavelLegal: responsavelLegal.value || null,
        motivoAusenciaResponsavel: motivoAusenciaResponsavel.value || null,
      },
    })
    sucesso.value = `Vínculo familiar de "${participanteSelecionado.value.nome}" atualizado.`
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

// RF19: Busca por nome, família ou atividade
const participantesFiltrados = computed(() => {
  if (!participantes.value) return []
  return participantes.value.filter((p) => {
    if (filtroNome.value.trim() && !p.nome.toLowerCase().includes(filtroNome.value.trim().toLowerCase())) {
      return false
    }
    if (filtroFamilia.value && p.familiaId !== filtroFamilia.value) {
      return false
    }
    if (filtroTurma.value && !p.turmas?.some(t => t.id === filtroTurma.value)) {
      return false
    }
    return true
  })
})

const ehMenor = computed(() => {
  if (!participanteSelecionado.value) return false
  return calcularIdade(participanteSelecionado.value.dataNascimento) < 18
})
</script>

<template>
  <div>
    <CabecalhoPagina
      v-if="modo !== 'lista'"
      :voltar="'Participantes'"
      :titulo="modo === 'novo' ? 'Cadastrar participante' : 'Vínculo familiar e responsável legal'"
      @voltar="cancelar"
    />
    <CabecalhoPagina
      v-else
      titulo="Participantes atendidos"
      descricao="Cadastro, vínculo e busca de participantes (RF16, RF18, RF19)"
    >
      <template #acoes>
        <button
          type="button"
          class="botao botao--primario"
          @click="abrirNovo"
        >
          Novo participante
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

    <!-- Cadastro de participante (RF16) -->
    <div
      v-if="modo === 'novo'"
      class="cartao"
    >
      <form
        class="formulario"
        @submit.prevent="cadastrar"
      >
        <div class="campo">
          <label for="p-nome">Nome completo *</label>
          <input
            id="p-nome"
            v-model="nome"
            type="text"
            required
            placeholder="Nome da pessoa atendida"
          >
        </div>

        <div class="campo">
          <label for="p-nasc">Data de nascimento *</label>
          <input
            id="p-nasc"
            v-model="dataNascimento"
            type="date"
            required
          >
        </div>

        <div class="campo">
          <label for="p-tel">Telefone (opcional)</label>
          <input
            id="p-tel"
            v-model="telefone"
            type="tel"
            placeholder="(61) 99999-9999"
          >
        </div>

        <div class="campo">
          <label for="p-obs">Observações (opcional)</label>
          <textarea
            id="p-obs"
            v-model="observacoes"
            rows="3"
            placeholder="Informações médicas, restrições ou necessidades"
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
            {{ enviando ? 'Salvando...' : 'Salvar participante' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Vínculo familiar (RF18) -->
    <div
      v-else-if="modo === 'vincular' && participanteSelecionado"
      class="cartao"
    >
      <form
        class="formulario"
        @submit.prevent="vincular"
      >
        <p><strong>Participante:</strong> {{ participanteSelecionado.nome }} ({{ calcularIdade(participanteSelecionado.dataNascimento) }} anos)</p>

        <div class="campo">
          <label for="v-fam">Família vinculada *</label>
          <select
            id="v-fam"
            v-model="familiaIdSelecionada"
            required
          >
            <option value="">
              Selecione uma família cadastrada...
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

        <div class="campo">
          <label for="v-resp">Nome do responsável legal {{ ehMenor ? '*' : '(opcional)' }}</label>
          <input
            id="v-resp"
            v-model="responsavelLegal"
            type="text"
            placeholder="Nome do responsável legal"
          >
        </div>

        <div
          v-if="ehMenor"
          class="campo"
        >
          <label for="v-motivo">Motivo de exceção sem responsável legal (ex.: instituição de acolhimento)</label>
          <textarea
            id="v-motivo"
            v-model="motivoAusenciaResponsavel"
            rows="2"
            placeholder="Exige motivo registrado para menor de 18 anos sem responsável legal (RN08)"
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
            {{ enviando ? 'Salvando...' : 'Salvar vínculo' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Filtros e Tabela de participantes (RF19) -->
    <div
      v-else
      class="cartao"
    >
      <div class="filtros-busca">
        <div class="filtro-item">
          <label for="b-nome">Nome:</label>
          <input
            id="b-nome"
            v-model="filtroNome"
            type="search"
            placeholder="Buscar por nome..."
          >
        </div>

        <div class="filtro-item">
          <label for="b-fam">Família:</label>
          <select
            id="b-fam"
            v-model="filtroFamilia"
          >
            <option value="">
              Todas as famílias
            </option>
            <option
              v-for="f in familias"
              :key="f.id"
              :value="f.id"
            >
              {{ f.nomeResponsavel }}
            </option>
          </select>
        </div>

        <div class="filtro-item">
          <label for="b-turma">Atividade / Turma:</label>
          <select
            id="b-turma"
            v-model="filtroTurma"
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
      </div>

      <div
        v-if="error"
        class="aviso aviso--erro"
      >
        Não foi possível carregar os participantes.
      </div>

      <div
        v-else-if="participantesFiltrados.length === 0"
        class="vazio"
      >
        Nenhum participante encontrado (CA-RF19-03).
      </div>

      <table
        v-else
        class="tabela"
      >
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nascimento (Idade)</th>
            <th>Família</th>
            <th>Responsável legal</th>
            <th>Turmas</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="p in participantesFiltrados"
            :key="p.id"
          >
            <td><strong>{{ p.nome }}</strong></td>
            <td>{{ p.dataNascimento }} ({{ calcularIdade(p.dataNascimento) }} anos)</td>
            <td>
              <span v-if="p.familia">{{ p.familia.nomeResponsavel }}</span>
              <span
                v-else
                class="texto-apagado"
              >Sem família vinculada</span>
            </td>
            <td>
              <span v-if="p.responsavelLegal">{{ p.responsavelLegal }}</span>
              <span
                v-else-if="p.motivoAusenciaResponsavel"
                class="etiqueta"
              >Exceção: {{ p.motivoAusenciaResponsavel }}</span>
              <span
                v-else
                class="texto-apagado"
              >—</span>
            </td>
            <td>
              <span
                v-for="t in p.turmas"
                :key="t.id"
                class="etiqueta etiqueta--azul"
              >{{ t.atividade }} </span>
              <span
                v-if="!p.turmas || p.turmas.length === 0"
                class="texto-apagado"
              >Nenhuma</span>
            </td>
            <td>
              <button
                type="button"
                class="botao botao--pequeno botao--secundario"
                @click="abrirVincular(p)"
              >
                Vincular família
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.filtros-busca {
  display: flex;
  flex-wrap: wrap;
  gap: var(--espaco-3, 0.75rem);
  margin-bottom: var(--espaco-4, 1rem);
}
.filtro-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
  min-width: 180px;
}
.filtro-item input,
.filtro-item select {
  padding: 0.45rem 0.65rem;
  border: 1px solid var(--cor-borda, #ccc);
  border-radius: var(--raio, 4px);
}
.texto-apagado {
  color: var(--cor-mutada, #666);
  font-size: 0.9rem;
}
.etiqueta--azul {
  background: var(--cor-primaria-fundo, #e8f0fe);
  color: var(--cor-primaria, #1a73e8);
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-right: 0.25rem;
}
</style>
