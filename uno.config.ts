import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'


const icons = [
  'i-carbon-list',
  'i-carbon-home',
  'i-carbon-information-square'
]

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [...'prose m-auto text-left'.split(' '), ...icons],
  theme: {
    colors: {
      primary: {
        "100": "#E6E6FB",
        "200": "#CDCFF7",
        "300": "#ADAFE9",
        "400": "#9092D3",
        "500": "#696BB6",
        "600": "#4C4E9C",
        "700": "#343683",
        "800": "#212269",
        "900": "#141557",
        "DEFAULT": '#696BB6'
      },
      success: {
        "100": "#CDFCD3",
        "200": "#9DF9B1",
        "300": "#6BEF95",
        "400": "#45E085",
        "500": "#10CC71",
        "600": "#0BAF70",
        "700": "#08926B",
        "800": "#057661",
        "900": "#036159",
        "DEFAULT": '#10CC71'

      },
      info: {
        "100": "#DAFBFE",
        "200": "#B6F4FE",
        "300": "#92E6FC",
        "400": "#76D6FA",
        "500": "#4ABDF7",
        "600": "#3695D4",
        "700": "#2570B1",
        "800": "#17508F",
        "900": "#0E3876",
        "DEFAULT": '#4ABDF7'
      },
      warning: {
        "100": "#FEF3D4",
        "200": "#FDE5A9",
        "300": "#FBD17E",
        "400": "#F8BE5D",
        "500": "#f49f29",
        "600": "#D17E1D",
        "700": "#AF6114",
        "800": "#8D470D",
        "900": "#753407",
        "DEFAULT": '#f49f29'
      },
      error: {
        "100": "#FFDCD6",
        "200": "#FFB1AE",
        "300": "#FF858C",
        "400": "#FF677E",
        "500": "#ff3567",
        "600": "#DB2664",
        "700": "#B71A5F",
        "800": "#931057",
        "900": "#7A0A51",
        "DEFAULT": '#ff3567'
      }
    }
  }
})