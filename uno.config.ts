import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

import presetAutoprefixer from './presets/autoprefixer'

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetAttributify(),
    presetIcons({
      autoInstall: true
    }),
    presetUno(),
    presetTypography(),
    presetAutoprefixer()
  ]
})
