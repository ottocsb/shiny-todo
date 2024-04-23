/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
/// <reference types="unplugin-vue-router/client" />
/// <reference types="vite-plugin-use-modules/client" />
/// <reference types="vite-plugin-vue-meta-layouts/client" />
/// <reference types="@intlify/vite-plugin-vue-i18n/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}
