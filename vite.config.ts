import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

import VueMacros from 'unplugin-vue-macros/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 1105,
    host: '0.0.0.0',
    open: true
  },
  plugins: [VueMacros({
    plugins: {
      vue: Vue(),
      vueJsx: VueJsx(),
    },
  }),
  viteMockServe(
    { mockPath: 'mock', }
  ),
  // https://github.com/antfu/unplugin-auto-import
  AutoImport({
    imports: [
      'vue',
      'vue-router',
      // 'vue-i18n',
      'vue/macros',
      '@vueuse/head',
      '@vueuse/core',
      'pinia'
    ],
    dts: 'src/auto-imports.d.ts',
    dirs: [
      'src/composables',
      'src/stores',
    ],
    vueTemplate: true,
  }),
  // https://github.com/antfu/unplugin-vue-components
  Components({
    resolvers: [NaiveUiResolver()],
    extensions: ['vue', 'md'],
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    dts: 'src/components.d.ts',
  }),
  // https://unocss.dev/integrations/vite
  UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
