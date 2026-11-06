<script setup lang="ts">
import type { CategoriaResposta, DoadorResposta, SaldoResposta } from '~/types/contratos'
import { abreviarUnidade, formatarData, formatarNumero, hojeISO } from '~/utils/formato'
import { campoDoErro, mensagemErro } from '~/utils/http'

// Protótipo: "Registrar entrada (Opção A)", "campos faltando" e "salva" (RF09, RF12, RNF01).
// A destinação real (RF10) fica para a Sprint 7.
type Campo = 'categoriaId' | 'quantidade' | 'doadorId' | 'data'
type Resumo = { item: string, doador: string, data: string, saldoAntes: string, saldoDepois: string, categoria: string }

const { data: categorias } = await useFetch<CategoriaResposta[]>('/api/categorias')
const { data: doadores } = await useFetch<DoadorResposta[]>('/api/doadores')
const { data: saldos, refresh: atualizarSaldos } = await useFetch<SaldoResposta[]>('/api/doacoes/saldos')
const { data: sessao } = await useFetch('/api/acesso/sessao')

const enviando = ref(false)
const categoriaId = ref('')
const quantidade = ref<number | null>(null)
const data = ref(hojeISO())
const doadorId = ref('')
const erros = ref<Partial<Record<Campo, string>>>({})
const avisoGeral = ref('')
const salvo = ref<Resumo | null>(null)

const NOMES_CAMPO: Record<Campo, string> = {
  categoriaId: 'Categoria',
  quantidade: 'Quantidade',
  doadorId: 'Doador',
  data: 'Data do recebimento',
}

const categoriaAtual = computed(() => categorias.value?.find(item => item.id === categoriaId.value))
const listaErros = computed(() => (Object.keys(erros.value) as Campo[]).map(campo => NOMES_CAMPO[campo]))

function saldoDe(id: string) {
  return saldos.value?.find(item => item.categoriaId === id)?.saldo ?? 0
}

function mudarQuantidade(passo: number) {
  quantidade.value = Math.max(0, (quantidade.value ?? 0) + passo)
}

function validar() {
  const novos: Partial<Record<Campo, string>> = {}
  if (!categoriaId.value) novos.categoriaId = 'Escolha uma categoria da lista.'
  if (!quantidade.value || quantidade.value <= 0) novos.quantidade = 'A quantidade precisa ser maior que zero.'
  if (!doadorId.value) novos.doadorId = 'Escolha o doador.'
  if (!data.value) novos.data = 'Informe a data do recebimento.'
  erros.value = novos
  return Object.keys(novos).length === 0
}

async function receber() {
  avisoGeral.value = ''
  if (!validar()) return
  enviando.value = true
  const categoria = categoriaAtual.value
  const antes = saldoDe(categoriaId.value)
  try {
    await $fetch('/api/doacoes/recebimentos', {
      method: 'POST',
      body: {
        categoriaId: categoriaId.value,
        quantidade: Number(quantidade.value),
        data: data.value,
        doadorId: doadorId.value,
      },
    })
    await atualizarSaldos()
    const abrev = abreviarUnidade(categoria?.unidade)
    salvo.value = {
      categoria: categoria?.nome ?? '',
      item: `${formatarNumero(Number(quantidade.value))} ${abrev} · ${categoria?.nome ?? ''}`,
      doador: doadores.value?.find(item => item.id === doadorId.value)?.nome ?? '',
      data: formatarData(data.value),
      saldoAntes: `${formatarNumero(antes)} ${abrev}`,
      saldoDepois: `${formatarNumero(saldoDe(categoriaId.value))} ${abrev}`,
    }
  }
  catch (falha) {
    const campo = campoDoErro(falha) as Campo | null
    if (campo && campo in NOMES_CAMPO) {
      erros.value = { [campo]: mensagemErro(falha) }
    }
    else {
      avisoGeral.value = mensagemErro(falha)
    }
  }
  finally {
    enviando.value = false
  }
}

function novaEntrada() {
  salvo.value = null
  categoriaId.value = ''
  quantidade.value = null
  doadorId.value = ''
  data.value = hojeISO()
  erros.value = {}
}
</script>

<template>
  <div>
    <CabecalhoPagina
      secao="Doações"
      titulo="Registrar doação recebida"
    />

    <main class="pagina pagina--estreita">
      <section
        v-if="salvo"
        role="status"
        class="cartao sucesso"
      >
        <div class="sucesso__topo">
          <span
            class="sucesso__icone"
            aria-hidden="true"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ><path d="M5 12l5 5L20 7" /></svg>
          </span>
          <h2>Entrada salva</h2>
        </div>
        <dl class="sucesso__dados">
          <dt>Item</dt>
          <dd>{{ salvo.item }}</dd>
          <dt>Doador</dt>
          <dd>{{ salvo.doador }}</dd>
          <dt>Data</dt>
          <dd>{{ salvo.data }}</dd>
          <dt>Registrado por</dt>
          <dd>{{ sessao?.usuario.email }}</dd>
        </dl>
        <div class="alerta alerta--sucesso">
          <span>Saldo de {{ salvo.categoria }} agora: <strong>{{ salvo.saldoDepois }}</strong> (era {{ salvo.saldoAntes }})</span>
        </div>
        <div class="acoes">
          <button
            type="button"
            class="botao botao--primario"
            @click="novaEntrada"
          >
            Registrar outra entrada
          </button>
          <NuxtLink
            to="/painel/saldo"
            class="botao"
          >
            Ver saldo
          </NuxtLink>
        </div>
      </section>

      <template v-else>
        <div
          v-if="listaErros.length"
          role="alert"
          class="alerta alerta--erro"
        >
          <strong>Nada foi salvo. Confira {{ listaErros.length === 1 ? '1 campo' : `${listaErros.length} campos` }}:</strong>
          <ul>
            <li
              v-for="nome in listaErros"
              :key="nome"
            >
              {{ nome }}
            </li>
          </ul>
        </div>
        <div
          v-if="avisoGeral"
          role="alert"
          class="alerta alerta--erro"
        >
          <strong>Nada foi salvo.</strong>
          <span>{{ avisoGeral }}</span>
        </div>

        <form
          class="cartao"
          novalidate
          @submit.prevent="receber"
        >
          <div class="cartao__topo">
            <h2>O que chegou?</h2>
            <p>Todos os campos são obrigatórios.</p>
          </div>
          <div class="cartao__corpo">
            <label class="campo">
              <span class="campo__linha">
                <span>Categoria</span>
                <NuxtLink
                  v-if="sessao?.perfil === 'coordenacao'"
                  to="/painel/categorias"
                  class="campo__dica"
                >ver categorias</NuxtLink>
              </span>
              <select
                v-model="categoriaId"
                :aria-invalid="!!erros.categoriaId"
                aria-describedby="dica-categoria erro-categoria"
              >
                <option value="">
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
              <span
                v-if="erros.categoriaId"
                id="erro-categoria"
                class="campo__erro"
              >{{ erros.categoriaId }}</span>
              <span
                id="dica-categoria"
                class="campo__dica"
              >Só a coordenação cria categorias novas.</span>
            </label>

            <div class="campo">
              <label for="quantidade">Quantidade</label>
              <div class="quantidade">
                <button
                  type="button"
                  class="botao botao--icone"
                  aria-label="Diminuir quantidade"
                  @click="mudarQuantidade(-1)"
                >
                  −
                </button>
                <input
                  id="quantidade"
                  v-model.number="quantidade"
                  type="number"
                  min="0"
                  step="any"
                  inputmode="decimal"
                  :aria-invalid="!!erros.quantidade"
                  aria-describedby="erro-quantidade dica-quantidade"
                >
                <button
                  type="button"
                  class="botao botao--icone"
                  aria-label="Aumentar quantidade"
                  @click="mudarQuantidade(1)"
                >
                  +
                </button>
                <span class="quantidade__unidade">{{ abreviarUnidade(categoriaAtual?.unidade) }}</span>
              </div>
              <span
                v-if="erros.quantidade"
                id="erro-quantidade"
                class="campo__erro"
              >{{ erros.quantidade }}</span>
              <span
                id="dica-quantidade"
                class="campo__dica"
              >A unidade vem da categoria escolhida.</span>
            </div>

            <label class="campo">
              <span class="campo__linha">
                <span>Doador</span>
                <NuxtLink
                  to="/painel/doadores?novo=1"
                  class="campo__dica"
                >+ Novo doador</NuxtLink>
              </span>
              <select
                v-model="doadorId"
                :aria-invalid="!!erros.doadorId"
                aria-describedby="erro-doador"
              >
                <option value="">
                  Escolha o doador
                </option>
                <option
                  v-for="doador in doadores"
                  :key="doador.id"
                  :value="doador.id"
                >
                  {{ doador.nome }}{{ doador.telefone ? ` · ${doador.telefone}` : '' }}
                </option>
              </select>
              <span
                v-if="erros.doadorId"
                id="erro-doador"
                class="campo__erro"
              >{{ erros.doadorId }}</span>
            </label>

            <label class="campo">
              Data do recebimento
              <input
                v-model="data"
                type="date"
                :max="hojeISO()"
                :aria-invalid="!!erros.data"
                aria-describedby="erro-data dica-data"
              >
              <span
                v-if="erros.data"
                id="erro-data"
                class="campo__erro"
              >{{ erros.data }}</span>
              <span
                id="dica-data"
                class="campo__dica"
              >Vem preenchida com hoje. Mude só se a doação chegou em outro dia.</span>
            </label>
          </div>
          <div class="cartao__rodape acoes--fim">
            <NuxtLink
              to="/painel"
              class="botao"
            >
              Cancelar
            </NuxtLink>
            <button
              type="submit"
              class="botao botao--primario"
              :disabled="enviando"
            >
              {{ enviando ? 'Salvando…' : 'Salvar entrada' }}
            </button>
          </div>
        </form>
      </template>
    </main>
  </div>
</template>

<style scoped>
.sucesso {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.sucesso__topo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sucesso__topo h2 {
  font-size: 20px;
}

.sucesso__icone {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--sucesso-fundo);
  color: var(--sucesso-forte);
  display: flex;
  align-items: center;
  justify-content: center;
}

.sucesso__dados {
  margin: 0;
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 8px 20px;
}

.sucesso__dados dt {
  color: var(--texto-2);
}

.sucesso__dados dd {
  margin: 0;
  font-weight: 600;
}
</style>
