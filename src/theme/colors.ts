import type { GlobalThemeOverrides } from "naive-ui"

interface Res {
  themeOverrides: globalThis.Ref<GlobalThemeOverrides>
}
interface Colors {
  [key: string]: string
}
export function useTheme(): Res {
  const colors: Colors = {
    "--primary-color-100": "#E6E6FB",
    "--primary-color-200": "#CDCFF7",
    "--primary-color-300": "#ADAFE9",
    "--primary-color-400": "#9092D3",
    "--primary-color-500": "#696BB6",
    "--primary-color-600": "#4C4E9C",
    "--primary-color-700": "#343683",
    "--primary-color-800": "#212269",
    "--primary-color-900": "#141557",
    "--primary-color": '#696BB6',
    "--success-color-100": "#CDFCD3",
    "--success-color-200": "#9DF9B1",
    "--success-color-300": "#6BEF95",
    "--success-color-400": "#45E085",
    "--success-color-500": "#10CC71",
    "--success-color-600": "#0BAF70",
    "--success-color-700": "#08926B",
    "--success-color-800": "#057661",
    "--success-color-900": "#036159",
    "--success-color": '#10CC71',
    "--info-color-100": "#DAFBFE",
    "--info-color-200": "#B6F4FE",
    "--info-color-300": "#92E6FC",
    "--info-color-400": "#76D6FA",
    "--info-color-500": "#4ABDF7",
    "--info-color-600": "#3695D4",
    "--info-color-700": "#2570B1",
    "--info-color-800": "#17508F",
    "--info-color-900": "#0E3876",
    "--info-color": '#4ABDF7',
    "--warning-color-100": "#FEF3D4",
    "--warning-color-200": "#FDE5A9",
    "--warning-color-300": "#FBD17E",
    "--warning-color-400": "#F8BE5D",
    "--warning-color-500": "#f49f29",
    "--warning-color-600": "#D17E1D",
    "--warning-color-700": "#AF6114",
    "--warning-color-800": "#8D470D",
    "--warning-color-900": "#753407",
    "--warning-color": '#f49f29',
    "--error-color-100": "#FFDCD6",
    "--error-color-200": "#FFB1AE",
    "--error-color-300": "#FF858C",
    "--error-color-400": "#FF677E",
    "--error-color-500": "#ff3567",
    "--error-color-600": "#DB2664",
    "--error-color-700": "#B71A5F",
    "--error-color-800": "#931057",
    "--error-color-900": "#7A0A51",
    "--error-color": '#ff3567'
  }

  const themeOverrides = ref<GlobalThemeOverrides>(getThemeOverrides())


  function getThemeOverrides() {
    return {
      common: {
        fontWeightStrong: '600',
        primaryColor: colors["--primary-color"],
        primaryColorHover: colors["--primary-color-400"],
        primaryColorPressed: colors['--primary-color-700'],
        primaryColorSuppl: colors['--primary-color-600'],
        infoColor: colors['--info-color'],
        infoColorHover: colors['--info-color-400'],
        infoColorPressed: colors['--info-color-700'],
        infoColorSuppl: colors['--info-color-600'],
        successColor: colors['--success-color'],
        successColorHover: colors['--success-color-400'],
        successColorPressed: colors['--success-color-700'],
        successColorSuppl: colors['--success-color-600'],
        warningColor: colors['--warning-color'],
        warningColorHover: colors['--warning-color-400'],
        warningColorPressed: colors['--warning-color-700'],
        warningColorSuppl: colors['--warning-color-600'],
        errorColor: colors['--error-color'],
        errorColorHover: colors['--error-color-400'],
        errorColorPressed: colors['--error-color-700'],
        errorColorSuppl: colors['--error-color-600'],
      }
    }
  }

  function setStyleToHtml() {
    let styleStr = ''
    for (const key in colors) {
      styleStr += `${key}:${colors[key]};`
    }
    document.documentElement.style.cssText += styleStr;
  }

  setStyleToHtml()

  return {
    themeOverrides
  }
}