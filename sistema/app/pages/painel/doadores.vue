<script setup lang="ts">
import type { DoadorResposta } from '~/types/contratos'
import { TIPOS_DOADOR, type TipoDoador } from '~/utils/doacoes'
import { formatarData, iniciais } from '~/utils/formato'
import { campoDoErro, dadosDoErro, mensagemErro, statusDoErro } from '~/utils/http'

// Protótipo: "Doadores", "Novo doador — aviso de duplicidade" e "Corrigir doador — histórico"
// (RF08, RNF19). Voluntários e coordenação cadastram e corrigem.
type Alteracao = {
  campo: string
  valor_anterior: string | null
  valor_novo: string | null
  alterado_em: string
  autor_id: string
}
type Modo = 'lista' | 'novo' | 'editar'

const ROTULO_TIPO: Record<TipoDoador, string> = { pessoa: 'Pessoa', organizacao: 'Organização' }
const ROTULO_CAMPO: Record<string, string> = { nome: 'Nome', tipo: 'Tipo', telefone: 'Telefone', email: 'E-mail' }

const rota = useRoute()
const { data: doadores, error, refresh } = await useFetch<DoadorResposta[]>('/api/doadores')
const { data: sessao } = await useFetch('/api/acesso/sessao')

const modo = ref<Modo>(rota.query.novo ? 'novo' : 'lista')
const busca = ref('')
const enviando = ref(false)
const nome = ref('')
const tipo = ref<TipoDoador>('pessoa')
const telefone = ref('')
const email = ref('')
const editandoId = ref<string | null>(null)
const historico = ref<Alteracao[]>([])
const erros = ref<Record<string, string>>({})
const aviso = ref('')
const sucesso = ref('')
const parecidos = ref<DoadorResposta[]>([])

const filtrados = computed(() => {
  const termo = busca.value.trim().toLowerCase()
  return (doadores.value ?? []).filter(item =>
    [item.nome, item.telefone, item.email].some(valor => valor?.toLowerCase().includes(termo)))
})

function limpar() {
  nome.value = ''
  tipo.value = 'pessoa'
  telefone.value = ''
  email.value = ''
  editandoId.value = null
  historico.value = []
  erros.value = {}
  aviso.value = ''
  parecidos.value = []
}

function voltarLista() {
  limpar()
  modo.value = 'lista'
}

function abrirNovo() {
  limpar()
  sucesso.value = ''
  modo.value = 'novo'
}

async function editar(doador: DoadorResposta) {
  limpar()
  sucesso.value = ''
  editandoId.value = doador.id
  nome.value = doador.nome
  tipo.value = doador.tipo
  telefone.value = doador.telefone ?? ''
  email.value = doador.email ?? ''
  modo.value = 'editar'
  try {
    historico.value = await $fetch<Alteracao[]>(`/api/doadores/${doador.id}/alteracoes`)
  }
  catch (falha) {
    aviso.value = mensagemErro(falha)
  }
}

function validar() {
  const novos: Record<string, string> = {}
  if (!nome.value.trim()) novos.nome = 'Informe o nome do doador.'
  if (!telefone.value.trim() && !email.value.trim()) novos.contato = 'Informe pelo menos um contato: telefone ou e-mail.'
  erros.value = novos
  return Object.keys(novos).length === 0
}

async function salvar(forcar = false) {
  aviso.value = ''
  if (!validar()) return
  enviando.value = true
  const corpo = {
    nome: nome.value,
    tipo: tipo.value,
    telefone: telefone.value || null,
    email: email.value || null,
  }
  try {
    if (editandoId.value) {
      await $fetch(`/api/doadores/${editandoId.value}`, { method: 'PATCH', body: corpo })
      sucesso.value = `Correção de "${nome.value.trim()}" salva no histórico.`
    }
    else {
      await $fetch('/api/doadores', { method: 'POST', body: { ...corpo, forcar } })
      sucesso.value = `Doador "${nome.value.trim()}" cadastrado.`
    }
    voltarLista()
    await refresh()
  }
  catch (falha) {
    if (statusDoErro(falha) === 409) {
      parecidos.value = dadosDoErro<{ existentes?: DoadorResposta[] }>(falha)?.existentes ?? []
      aviso.value = mensagemErro(falha)
    }
    else {
      const campo = campoDoErro(falha)
      if (campo) erros.value = { [campo]: mensagemErro(falha) }
      else aviso.value = mensagemErro(falha)
    }
  }
  finally {
    enviando.value = false
  }
}

function autor(id: string) {
  return id === sessao.value?.usuario.id ? 'Você' : `Usuário ${id.slice(0, 8)}`
}
</script>

<template>
  <div>
    <CabecalhoPagina
      v-if="modo !== 'lista'"
      voltar="Doadores"
      :titulo="modo === 'novo' ? 'Novo doador' : 'Corrigir doador'"
      @voltar="voltarLista"
    />
    <CabecalhoPagina
      v-else
      secao="Doações"
      titulo="Doadores"
    >
      <button
        type="button"
        class="botao botao--primario"
        @click="abrirNovo"
      >
        + Novo doador
      </button>
    </CabecalhoPagina>

    <!-- Lista -->
    <main
      v-if="modo === 'lista'"
      class="pagina pagina--estreita"
    >
      <div
        v-if="sucesso"
        role="status"
        class="alerta alerta--sucesso"
      >
        {{ sucesso }}
      </div>
      <div
        v-if="error"
        role="alert"
        class="alerta alerta--erro"
      >
        {{ mensagemErro(error) }}
      </div>
      <section class="cartao">
        <div class="cartao__barra">
          <label class="campo busca">
            <span class="campo__dica">Buscar por nome, telefone ou e-mail</span>
            <input
              v-model="busca"
              type="search"
            >
          </label>
        </div>
        <ul class="doadores">
          <li
            v-for="doador in filtrados"
            :key="doador.id"
          >
            <button
              type="button"
              class="doador"
              @click="editar(doador)"
            >
              <span
                class="doador__ini"
                aria-hidden="true"
              >{{ iniciais(doador.nome) }}</span>
              <span class="doador__texto">
                <strong>{{ doador.nome }}</strong>
                <span>{{ ROTULO_TIPO[doador.tipo] }} · {{ doador.telefone || doador.email }}</span>
              </span>
              <span class="doador__acao">Corrigir</span>
            </button>
          </li>
        </ul>
        <p
          v-if="!filtrados.length"
          class="tabela__vazio"
        >
          Nenhum doador encontrado.
        </p>
      </section>
    </main>

    <!-- Novo ou corrigir -->
    <main
      v-else
      class="pagina pagina--estreita"
    >
      <div
        v-if="parecidos.length || (aviso && modo === 'novo')"
        role="alert"
        class="alerta alerta--aviso"
      >
        <strong>{{ aviso }}</strong>
        <span
          v-for="item in parecidos"
          :key="item.id"
        >{{ item.nome }} · {{ ROTULO_TIPO[item.tipo] }} · {{ item.telefone || item.email }}</span>
        <div
          v-if="parecidos.length"
          class="acoes alerta__acoes"
        >
          <NuxtLink
            to="/painel/doacoes"
            class="botao botao--pequeno"
          >
            Usar o cadastro existente
          </NuxtLink>
          <button
            type="button"
            class="botao botao--pequeno"
            :disabled="enviando"
            @click="salvar(true)"
          >
            É outro doador, cadastrar mesmo assim
          </button>
        </div>
      </div>
      <div
        v-else-if="aviso"
        role="alert"
        class="alerta alerta--erro"
      >
        {{ aviso }}
      </div>

      <form
        class="cartao"
        novalidate
        @submit.prevent="salvar()"
      >
        <div class="cartao__topo">
          <p>Campos com * são obrigatórios. Informe pelo menos um contato: telefone ou e-mail.</p>
        </div>
        <div class="cartao__corpo">
          <fieldset class="grupo">
            <legend>Tipo *</legend>
            <div class="acoes">
              <label
                v-for="item in TIPOS_DOADOR"
                :key="item"
                class="opcao"
              >
                <input
                  v-model="tipo"
                  type="radio"
                  name="tipo"
                  :value="item"
                >
                {{ ROTULO_TIPO[item] }}
              </label>
            </div>
          </fieldset>
          <label class="campo">
            Nome *
            <input
              v-model="nome"
              type="text"
              :aria-invalid="!!erros.nome"
              aria-describedby="erro-nome"
            >
            <span
              v-if="erros.nome"
              id="erro-nome"
              class="campo__erro"
            >{{ erros.nome }}</span>
          </label>
          <div class="campos-lado">
            <label class="campo">
              Telefone
              <input
                v-model="telefone"
                type="tel"
                autocomplete="off"
                :aria-invalid="!!erros.contato || !!erros.telefone"
                aria-describedby="erro-contato"
              >
            </label>
            <label class="campo">
              E-mail
              <input
                v-model="email"
                type="email"
                autocomplete="off"
                :aria-invalid="!!erros.contato || !!erros.email"
                aria-describedby="erro-contato"
              >
            </label>
          </div>
          <span
            v-if="erros.contato || erros.telefone || erros.email"
            id="erro-contato"
            class="campo__erro"
          >{{ erros.contato || erros.telefone || erros.email }}</span>
        </div>
        <div class="cartao__rodape acoes--fim">
          <button
            type="button"
            class="botao"
            @click="voltarLista"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="botao botao--primario"
            :disabled="enviando"
          >
            {{ modo === 'novo' ? 'Salvar doador' : 'Salvar correção' }}
          </button>
        </div>
      </form>

      <section
        v-if="modo === 'editar'"
        class="cartao"
      >
        <div class="cartao__topo">
          <h2>Histórico de correções</h2>
          <p>Registrado automaticamente. Ninguém consegue apagar.</p>
        </div>
        <div class="tabela-caixa">
          <table class="tabela">
            <thead>
              <tr>
                <th>Quando</th>
                <th>Quem</th>
                <th>Campo</th>
                <th>Antes</th>
                <th>Depois</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, indice) in historico"
                :key="indice"
              >
                <td>{{ formatarData(item.alterado_em) }}</td>
                <td>{{ autor(item.autor_id) }}</td>
                <td>{{ ROTULO_CAMPO[item.campo] ?? item.campo }}</td>
                <td class="texto-2">
                  {{ item.valor_anterior || '(vazio)' }}
                </td>
                <td>{{ item.valor_novo || '(vazio)' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p
          v-if="!historico.length"
          class="tabela__vazio"
        >
          Nenhuma correção registrada.
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.busca {
  flex: 1 1 320px;
}

.doadores {
  list-style: none;
  margin: 0;
  padding: 0;
}

.doador {
  width: 100%;
  min-height: 64px;
  padding: 12px 16px;
  border: 0;
  border-top: 1px solid var(--borda-suave);
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.doador:hover {
  background: var(--roxo-fundo);
}

.doador__ini {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--roxo-claro);
  color: var(--roxo-medio);
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.doador__texto {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.doador__texto span {
  font-size: 14px;
  color: var(--texto-2);
}

.doador__acao {
  font-size: 14px;
  color: var(--roxo);
  text-decoration: underline;
}
</style>
