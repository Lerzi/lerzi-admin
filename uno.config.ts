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
  'i-carbon-information-square',
  'i-carbon-user-profile',
  'i-carbon-logout'
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
      primary_hover: "var(--primary-color-400)",
      primary_pressed: "var(--primary-color-700)",
      primary_active: "var(--primary-color-600)",
      info_hover: "var(--info-color-400)",
      info_pressed: "var(--info-color-700)",
      info_active: "var(--info-color-600)",
      success_hover: "var(--success-color-400)",
      success_pressed: "var(--success-color-700)",
      success_active: "var(--success-color-600)",
      warning_hover: "var(--warning-color-400)",
      warning_pressed: "var(--warning-color-700)",
      warning_active: "var(--warning-color-600)",
      error_hover: "var(--error-color-400)",
      error_pressed: "var(--error-color-700)",
      error_active: "var(--error-color-600)",
      primary: {
        "100": "var(--primary-color-100)",
        "200": "var(--primary-color-200)",
        "300": "var(--primary-color-300)",
        "400": "var(--primary-color-400)",
        "500": "var(--primary-color-500)",
        "600": "var(--primary-color-600)",
        "700": "var(--primary-color-700)",
        "800": "var(--primary-color-800)",
        "900": "var(--primary-color-900)",
        "DEFAULT": 'var(--primary-color)'
      },
      success: {
        "100": "var(--success-color-100)",
        "200": "var(--success-color-200)",
        "300": "var(--success-color-300)",
        "400": "var(--success-color-400)",
        "500": "var(--success-color-500)",
        "600": "var(--success-color-600)",
        "700": "var(--success-color-700)",
        "800": "var(--success-color-800)",
        "900": "var(--success-color-900)",
        "DEFAULT": 'var(--success-color)'

      },
      info: {
        "100": "var(--info-color-100)",
        "200": "var(--info-color-200)",
        "300": "var(--info-color-300)",
        "400": "var(--info-color-400)",
        "500": "var(--info-color-500)",
        "600": "var(--info-color-600)",
        "700": "var(--info-color-700)",
        "800": "var(--info-color-800)",
        "900": "var(--info-color-900)",
        "DEFAULT": 'var(--info-color)'
      },
      warning: {
        "100": "var(--warning-color-100)",
        "200": "var(--warning-color-200)",
        "300": "var(--warning-color-300)",
        "400": "var(--warning-color-400)",
        "500": "var(--warning-color-500)",
        "600": "var(--warning-color-600)",
        "700": "var(--warning-color-700)",
        "800": "var(--warning-color-800)",
        "900": "var(--warning-color-900)",
        "DEFAULT": 'var(--warning-color)'
      },
      error: {
        "100": "var(--error-color-100)",
        "200": "var(--error-color-200)",
        "300": "var(--error-color-300)",
        "400": "var(--error-color-400)",
        "500": "var(--error-color-500)",
        "600": "var(--error-color-600)",
        "700": "var(--error-color-700)",
        "800": "var(--error-color-800)",
        "900": "var(--error-color-900)",
        "DEFAULT": 'var(--error-color)'
      }
    }
  }
})