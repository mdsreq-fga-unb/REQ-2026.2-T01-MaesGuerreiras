<script setup lang="ts">
import type { CategoriaResposta, SaldoResposta } from '~/types/contratos'
import { abreviarUnidade, formatarNumero, hojeISO } from '~/utils/formato'
import { mensagemErro } from '~/utils/http'

// Protótipo: "Saldo de itens" e "Saldo — carregando, vazio e erro" (RF12, RN02).
const { data: saldos, error, pending, refresh } = await useFetch<SaldoResposta[]>('/api/doacoes/saldos', { lazy: true })
const { data: sessao } = await useFetch('/api/acesso/sessao')
const ehCoord = computed(() => sessao.value?.perfil === 'coordenacao')

const busca = ref('')
const linhas = computed(() => {
  const termo = busca.value.trim().toLowerCase()
  return (saldos.value ?? []).filter(item => item.nome.toLowerCase().includes(termo))
})

// Saída sintética: só para a coordenação testar o cálculo antes da destinação real (RF10, Sprint 7).
const { data: categorias } = await useFetch<CategoriaResposta[]>('/api/categorias', { lazy: true })
const aviso = ref('')
const sucesso = ref('')
const enviando = ref(false)
const saidaCategoriaId = ref('')
const saidaQuantidade = ref(1)
const saidaData = ref(hojeISO())
const destinoSintetico = ref('teste-sprint-6')

async function saidaSintetica() {
  aviso.value = ''
  sucesso.value = ''
  enviando.value = true
  try {
    await $fetch('/api/doacoes/saidas-sinteticas', {
      method: 'POST',
      body: {
        categoriaId: saidaCategoriaId.value,
        quantidade: Number(saidaQuantidade.value),
        data: saidaData.value,
        destinoSintetico: destinoSintetico.value,
      },
    })
    sucesso.value = 'Saída de teste registrada. O saldo foi atualizado.'
    await refresh()
  }
  catch (falha) {
    aviso.value = mensagemErro(falha)
  }
  finally {
    enviando.value = false
  }
}
</script>

<template>
  <div>
    <CabecalhoPagina
      secao="Doações"
      titulo="Saldo de itens doados"
    >
      <NuxtLink
        to="/painel/doacoes"
        class="botao botao--primario"
      >
        + Registrar entrada
      </NuxtLink>
    </CabecalhoPagina>

    <main class="pagina">
      <p class="texto-2">
        Saldo é tudo que entrou menos tudo que saiu, na unidade da categoria.
      </p>

      <section
        v-if="pending"
        class="cartao estado"
        aria-busy="true"
      >
        <span class="texto-2">Carregando o saldo…</span>
        <div
          v-for="n in 4"
          :key="n"
          class="estado__fantasma"
        >
          <div class="fantasma" />
          <div class="fantasma" />
          <div class="fantasma" />
        </div>
      </section>

      <section
        v-else-if="error"
        role="alert"
        class="alerta alerta--erro estado-erro"
      >
        <div>
          <strong>Não foi possível carregar o saldo</strong>
          <span>Confira a internet do celular e tente de novo. Nenhum registro foi perdido.</span>
        </div>
        <button
          type="button"
          class="botao"
          @click="refresh()"
        >
          Tentar de novo
        </button>
      </section>

      <section
        v-else-if="!saldos?.length"
        class="cartao estado estado--vazio"
      >
        <strong>Nenhuma doação registrada ainda</strong>
        <p class="texto-2">
          O saldo aparece aqui assim que a primeira entrada for salva.
        </p>
        <NuxtLink
          to="/painel/doacoes"
          class="botao botao--primario"
        >
          Registrar a primeira entrada
        </NuxtLink>
      </section>

      <section
        v-else
        class="cartao"
      >
        <div class="cartao__barra">
          <label class="campo campo--busca">
            <span class="campo__dica">Buscar categoria</span>
            <input
              v-model="busca"
              type="search"
            >
          </label>
          <button
            type="button"
            class="botao botao--pequeno"
            @click="refresh()"
          >
            Atualizar
          </button>
        </div>
        <div class="tabela-caixa">
          <table class="tabela">
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Unidade</th>
                <th class="numero">
                  Saldo atual
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in linhas"
                :key="item.categoriaId"
              >
                <td><strong>{{ item.nome }}</strong></td>
                <td class="texto-2">
                  {{ item.unidade }}
                </td>
                <td class="numero">
                  <strong class="saldo-valor">{{ formatarNumero(item.saldo) }}</strong>
                  <span class="pequeno texto-2"> {{ abreviarUnidade(item.unidade) }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p
          v-if="!linhas.length"
          class="tabela__vazio"
        >
          Nenhuma categoria com esse nome.
        </p>
      </section>

      <details
        v-if="ehCoord"
        class="cartao teste"
      >
        <summary>Teste do cálculo: registrar saída sintética (só coordenação)</summary>
        <form
          class="cartao__corpo"
          @submit.prevent="saidaSintetica"
        >
          <p class="texto-2 pequeno">
            Usado só para conferir o saldo antes da tela de destinação (RF10, Sprint 7). Use dados fictícios.
          </p>
          <div
            v-if="aviso"
            role="alert"
            class="alerta alerta--erro"
          >
            {{ aviso }}
          </div>
          <div
            v-if="sucesso"
            role="status"
            class="alerta alerta--sucesso"
          >
            {{ sucesso }}
          </div>
          <div class="campos-lado">
            <label class="campo">
              Categoria
              <select
                v-model="saidaCategoriaId"
                required
              >
                <option
                  disabled
                  value=""
                >
                  Escolha a categoria
                </option>
                <option
                  v-for="categoria in categorias"
                  :key="categoria.id"
                  :value="categoria.id"
                >
                  {{ categoria.nome }} ({{ categoria.unidade }})
                </option>
              </select>
            </label>
            <label class="campo">
              Quantidade
              <input
                v-model.number="saidaQuantidade"
                type="number"
                min="0.001"
                step="0.001"
                required
              >
            </label>
            <label class="campo">
              Data
              <input
                v-model="saidaData"
                type="date"
                required
              >
            </label>
            <label class="campo">
              Destino de teste
              <input
                v-model="destinoSintetico"
                required
              >
            </label>
          </div>
          <div class="acoes acoes--fim">
            <button
              type="submit"
              class="botao"
              :disabled="enviando"
            >
              Registrar saída de teste
            </button>
          </div>
        </form>
      </details>
    </main>
  </div>
</template>

<style scoped>
.estado {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.estado__fantasma {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 16px;
}

.estado--vazio {
  align-items: flex-start;
}

.estado-erro {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.estado-erro div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.campo--busca {
  flex: 0 1 320px;
}

.saldo-valor {
  font-size: 17px;
}

.teste summary {
  min-height: 44px;
  padding: 12px 24px;
  font-weight: 600;
  cursor: pointer;
}
</style>
