// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase', '@nuxt/eslint', '@nuxt/test-utils/module'],

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Mães Guerreiras',
    },
  },

  compatibilityDate: '2025-07-15',

  eslint: {
    config: {
      stylistic: true,
    },
  },

  // Área restrita exige login (RF41). Rotas da área pública ficam em `exclude`.
  // A service role (SUPABASE_SERVICE_KEY) fica só no servidor, para cadastro de usuários (RF39).
  supabase: {
    types: '~/types/database.types.ts',
    redirectOptions: {
      login: '/login',
      callback: '/confirmar',
      exclude: ['/'],
    },
  },
})
