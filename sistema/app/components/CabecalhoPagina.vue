<script setup lang="ts">
// Faixa branca do topo de cada tela: seção (ou link de volta), título e ação principal.
defineProps<{
  titulo: string
  secao?: string
  voltar?: string
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
    </div>
    <slot />
  </header>
</template>
