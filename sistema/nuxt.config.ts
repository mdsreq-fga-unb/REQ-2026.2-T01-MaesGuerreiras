// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase', '@nuxt/eslint', '@nuxt/test-utils/module'],

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Mães Guerreiras',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lora:wght@600&family=Public+Sans:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },

  // Visual da área restrita, a partir do protótipo da Sprint 6.
  css: ['~/assets/css/main.css'],

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
