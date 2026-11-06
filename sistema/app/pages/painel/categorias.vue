<script setup lang="ts">
import type { CategoriaResposta } from '~/types/contratos'
import { UNIDADES, type UnidadeMedida } from '~/utils/doacoes'
import { campoDoErro, mensagemErro } from '~/utils/http'

// Protótipo: "Categorias" e "Nova categoria — nome repetido" (RF11, RN02).
definePageMeta({
  middleware: 'coordenacao',
})

const { data: categorias, error, refresh } = await useFetch<CategoriaResposta[]>('/api/categorias')

const EXEMPLOS: Record<UnidadeMedida, { nome: string, exemplo: string }> = {
  unidade: { nome: 'Unidade', exemplo: 'Ex.: roupas, kits de higiene' },
  quilo: { nome: 'Quilo', exemplo: 'Ex.: arroz, feijão' },
  pacote: { nome: 'Pacote', exemplo: 'Ex.: fraldas, leite em pó' },
}

const criando = ref(false)
const enviando = ref(false)
const nome = ref('')
const unidade = ref<UnidadeMedida>('unidade')
const erroNome = ref('')
const aviso = ref('')
const sucesso = ref('')

function abrirNova() {
  criando.value = true
  sucesso.value = ''
}

function cancelar() {
  criando.value = false
  nome.value = ''
  unidade.value = 'unidade'
  erroNome.value = ''
  aviso.value = ''
}

async function cadastrar() {
  erroNome.value = ''
  aviso.value = ''
  if (!nome.value.trim()) {
    erroNome.value = 'Informe o nome da categoria.'
    return
  }
  enviando.value = true
  try {
    await $fetch('/api/categorias', {
      method: 'POST',
      body: { nome: nome.value, unidade: unidade.value },
    })
    sucesso.value = `Categoria "${nome.value.trim()}" criada.`
    cancelar()
    await refresh()
  }
  catch (falha) {
    if (campoDoErro(falha) === 'nome') {
      erroNome.value = `${mensagemErro(falha)} Use a existente ou escolha outro nome.`
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
      v-if="criando"
      voltar="Categorias de itens"
      titulo="Nova categoria"
      @voltar="cancelar"
    />
    <CabecalhoPagina
      v-else
      secao="Doações"
      titulo="Categorias de itens"
    >
      <button
        type="button"
        class="botao botao--primario"
        @click="abrirNova"
      >
        + Nova categoria
      </button>
    </CabecalhoPagina>

    <main
      v-if="criando"
      class="pagina pagina--estreita"
    >
      <div
        v-if="aviso"
        role="alert"
        class="alerta alerta--erro"
      >
        {{ aviso }}
      </div>
      <form
        class="cartao"
        novalidate
        @submit.prevent="cadastrar"
      >
        <div class="cartao__corpo">
          <label class="campo">
            Nome da categoria *
            <input
              v-model="nome"
              type="text"
              required
              :aria-invalid="!!erroNome"
              aria-describedby="erro-nome"
            >
            <span
              v-if="erroNome"
              id="erro-nome"
              class="campo__erro"
            >{{ erroNome }}</span>
          </label>
          <fieldset class="grupo">
            <legend>Unidade de medida *</legend>
            <p class="campo__dica">
              Todas as entradas e o saldo desta categoria usam esta unidade. Não dá para digitar outra.
            </p>
            <div class="escolhas">
              <label
                v-for="item in UNIDADES"
                :key="item"
                class="escolha"
              >
                <input
                  v-model="unidade"
                  type="radio"
                  name="unidade"
                  :value="item"
                >
                <span>
                  <strong>{{ EXEMPLOS[item].nome }}</strong>
                  <span>{{ EXEMPLOS[item].exemplo }}</span>
                </span>
              </label>
            </div>
          </fieldset>
        </div>
        <div class="cartao__rodape acoes--fim">
          <button
            type="button"
            class="botao"
            @click="cancelar"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="botao botao--primario"
            :disabled="enviando"
          >
            Salvar categoria
          </button>
        </div>
      </form>
    </main>

    <main
      v-else
      class="pagina"
    >
      <div
        v-if="sucesso"
        role="status"
        class="alerta alerta--sucesso"
      >
        {{ sucesso }}
      </div>
      <div class="alerta alerta--aviso">
        <strong>Tela da coordenação</strong>
        <span>Voluntários escolhem a categoria ao registrar uma entrada, mas não criam novas.</span>
      </div>
      <div
        v-if="error"
        role="alert"
        class="alerta alerta--erro"
      >
        {{ mensagemErro(error) }}
      </div>
      <section class="cartao">
        <div class="tabela-caixa">
          <table class="tabela">
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Unidade de medida</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="categoria in categorias"
                :key="categoria.id"
              >
                <td><strong>{{ categoria.nome }}</strong></td>
                <td>
                  <span class="etiqueta">{{ categoria.unidade }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p
          v-if="categorias && !categorias.length"
          class="tabela__vazio"
        >
          Nenhuma categoria cadastrada ainda.
        </p>
      </section>
    </main>
  </div>
</template>
