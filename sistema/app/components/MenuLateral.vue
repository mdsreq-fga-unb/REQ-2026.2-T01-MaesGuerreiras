<script setup lang="ts">
import { iniciais } from '~/utils/formato'

// Protótipo: "Componente — menu lateral".
const props = defineProps<{
  ehCoord: boolean
  email: string | null | undefined
}>()

defineEmits<{ sair: [] }>()

// No celular o menu fica recolhido atrás do botão "Menu" e fecha ao trocar de tela.
const aberto = ref(false)
const rota = useRoute()
watch(() => rota.path, () => {
  aberto.value = false
})

type Item = { rotulo: string, para: string, soCoord: boolean, exato?: boolean }
type Secao = { titulo: string, itens: Item[] }

const secoes = computed<Secao[]>(() => {
  const todas: Secao[] = [
    { titulo: '', itens: [{ rotulo: 'Início', para: '/painel', soCoord: false, exato: true }] },
    {
      titulo: 'Doações',
      itens: [
        { rotulo: 'Registrar entrada', para: '/painel/doacoes', soCoord: false },
        { rotulo: 'Saldo de itens', para: '/painel/saldo', soCoord: false },
        { rotulo: 'Doadores', para: '/painel/doadores', soCoord: false },
        { rotulo: 'Categorias', para: '/painel/categorias', soCoord: true },
      ],
    },
    {
      titulo: 'Proteção de dados',
      itens: [
        { rotulo: 'Consentimentos', para: '/painel/consentimentos', soCoord: false },
        { rotulo: 'Usuários e perfis', para: '/painel/usuarios', soCoord: true },
      ],
    },
  ]
  return todas.map(secao => ({
    ...secao,
    itens: secao.itens.filter(item => props.ehCoord || !item.soCoord),
  }))
})
</script>

<template>
  <nav
    class="menu"
    :class="{ 'menu--aberto': aberto }"
    aria-label="Menu principal"
  >
    <div>
      <div class="menu__marca">
        <span
          class="selo-mg"
          aria-hidden="true"
        >MG</span>
        <div>
          <span class="menu__nome">Mães Guerreiras</span>
          <span class="menu__sub">Área restrita</span>
        </div>
        <button
          type="button"
          class="menu__alternar"
          :aria-expanded="aberto"
          aria-controls="menu-secoes"
          @click="aberto = !aberto"
        >
          {{ aberto ? 'Fechar' : 'Menu' }}
        </button>
      </div>
      <div
        id="menu-secoes"
        class="menu__secoes"
      >
        <div
          v-for="secao in secoes"
          :key="secao.titulo || 'inicio'"
        >
          <span
            v-if="secao.titulo"
            class="menu__titulo"
          >{{ secao.titulo }}</span>
          <ul class="menu__lista">
            <li
              v-for="item in secao.itens"
              :key="item.para"
            >
              <NuxtLink
                :to="item.para"
                class="menu__item"
                :active-class="item.exato ? '' : 'menu__item--ativo'"
                exact-active-class="menu__item--ativo"
              >
                <span>{{ item.rotulo }}</span>
                <span
                  v-if="item.soCoord"
                  class="selo-coord"
                >Coord.</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="menu__usuario">
      <span
        class="menu__iniciais"
        aria-hidden="true"
      >{{ iniciais(email) }}</span>
      <div class="menu__quem">
        <span class="menu__email">{{ email }}</span>
        <span class="menu__sub">{{ ehCoord ? 'Coordenação' : 'Voluntário' }}</span>
      </div>
      <button
        type="button"
        class="menu__sair"
        @click="$emit('sair')"
      >
        Sair
      </button>
    </div>
  </nav>
</template>
