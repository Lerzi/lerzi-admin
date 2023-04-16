<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'

import { colors } from '@/theme/colors'

const themeOverrides = ref<GlobalThemeOverrides>({
  common: {
    fontWeightStrong: '600',
    primaryColor: colors.primary['DEFAULT'],
    primaryColorHover: colors.primary['400'],
    primaryColorPressed: colors.primary['700'],
    primaryColorSuppl: colors.primary['600'],
    infoColor: colors.info['DEFAULT'],
    infoColorHover: colors.info['400'],
    infoColorPressed: colors.info['700'],
    infoColorSuppl: colors.info['600'],
    successColor: colors.success['DEFAULT'],
    successColorHover: colors.success['400'],
    successColorPressed: colors.success['700'],
    successColorSuppl: colors.success['600'],
    warningColor: colors.warning['DEFAULT'],
    warningColorHover: colors.warning['400'],
    warningColorPressed: colors.warning['700'],
    warningColorSuppl: colors.warning['600'],
    errorColor: colors.error['DEFAULT'],
    errorColorHover: colors.error['400'],
    errorColorPressed: colors.error['700'],
    errorColorSuppl: colors.error['600'],
  }
})


</script>

<template>
  <n-config-provider h-full :theme-overrides="themeOverrides">
    <RouterView />
  </n-config-provider>
</template>

