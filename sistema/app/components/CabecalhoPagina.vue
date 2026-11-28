<script setup lang="ts">
// Faixa branca do topo de cada tela: seção (ou link de volta), título e ação principal.
defineProps<{
  titulo: string
  secao?: string
  voltar?: string
  descricao?: string
}>()

defineEmits<{ voltar: [] }>()
</script>

<template>
  <header class="cabecalho">
    <div>
      <button
        v-if="voltar"
        type="button"
        class="cabecalho__voltar"
        @click="$emit('voltar')"
      >
        {{ voltar }}
      </button>
      <span
        v-else-if="secao"
        class="cabecalho__secao"
      >{{ secao }}</span>
      <h1>{{ titulo }}</h1>
      <p
        v-if="descricao"
        class="cabecalho__descricao"
      >
        {{ descricao }}
      </p>
    </div>
    <slot name="acoes">
      <slot />
    </slot>
  </header>
</template>
