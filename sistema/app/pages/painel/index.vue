<script setup lang="ts">
import type { SaldoResposta } from '~/types/contratos'
import { abreviarUnidade, formatarNumero } from '~/utils/formato'
import { mensagemErro } from '~/utils/http'

// Protótipo: "Início". Atalhos para RF09 e RF12: registrar uma entrada em até 3 passos (RNF01).
const { data: saldos, error, pending } = await useFetch<SaldoResposta[]>('/api/doacoes/saldos', { lazy: true })

const hoje = new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })
const hora = new Date().getHours()
const saudacao = hora < 12 ? 'Bom dia' : (hora < 18 ? 'Boa tarde' : 'Boa noite')

const saldoRapido = computed(() => (saldos.value ?? [])
  .filter(item => item.saldo > 0)
  .sort((a, b) => b.saldo - a.saldo)
  .slice(0, 4))
</script>

<template>
  <div>
    <CabecalhoPagina
      secao="Área restrita"
      titulo="Início"
    />
    <main class="pagina">
      <div class="boas-vindas">
        <h2>{{ saudacao }}</h2>
        <p>{{ hoje }}</p>
      </div>

      <div class="grade">
        <NuxtLink
          to="/painel/doacoes"
          class="atalho atalho--principal"
        >
          <strong>Registrar doação recebida</strong>
          <span>Chegou item na associação</span>
        </NuxtLink>
        <NuxtLink
          to="/painel/saldo"
          class="atalho"
        >
          <strong>Ver saldo de itens</strong>
          <span>O que há disponível agora</span>
        </NuxtLink>
        <NuxtLink
          to="/painel/doadores"
          class="atalho"
        >
          <strong>Doadores</strong>
          <span>Cadastrar ou corrigir</span>
        </NuxtLink>
      </div>

      <section class="cartao saldo-rapido">
        <div class="saldo-rapido__topo">
          <h3>Saldo rápido</h3>
          <NuxtLink to="/painel/saldo">
            Ver tudo
          </NuxtLink>
        </div>
        <p
          v-if="pending"
          class="texto-2"
        >
          Carregando o saldo…
        </p>
        <p
          v-else-if="error"
          role="alert"
          class="campo__erro"
        >
          {{ mensagemErro(error) }}
        </p>
        <p
          v-else-if="!saldoRapido.length"
          class="texto-2"
        >
          Nenhum item em estoque ainda.
        </p>
        <template v-else>
          <div
            v-for="item in saldoRapido"
            :key="item.categoriaId"
            class="saldo-rapido__linha"
          >
            <span>{{ item.nome }}</span>
            <strong>{{ formatarNumero(item.saldo) }} {{ abreviarUnidade(item.unidade) }}</strong>
          </div>
        </template>
      </section>
    </main>
  </div>
</template>

<style scoped>
.boas-vindas {
  padding: 24px 28px;
  border-radius: var(--raio-cartao);
  background: var(--roxo-escuro);
  color: var(--creme);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.boas-vindas h2 {
  font-family: var(--fonte-titulo);
  font-size: 26px;
  font-weight: 600;
}

.boas-vindas p {
  color: #e3d8ee;
}

.boas-vindas p::first-letter {
  text-transform: uppercase;
}

.atalho {
  min-height: 92px;
  padding: 20px;
  border: 1px solid var(--borda);
  border-radius: var(--raio-cartao);
  background: var(--branco);
  color: var(--texto);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.atalho strong {
  font-size: 17px;
}

.atalho span {
  font-size: 14px;
  color: var(--texto-2);
}

.atalho:hover {
  border-color: var(--roxo);
}

.atalho--principal {
  border-color: var(--roxo);
  background: var(--roxo);
  color: var(--branco);
}

.atalho--principal span {
  color: var(--texto-menu);
}

.atalho--principal:hover {
  background: var(--roxo-medio);
}

.saldo-rapido {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.saldo-rapido__topo {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.saldo-rapido__topo h3 {
  font-size: 17px;
}

.saldo-rapido__linha {
  padding-top: 10px;
  border-top: 1px solid var(--borda-suave);
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
</style>
