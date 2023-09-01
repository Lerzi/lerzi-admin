<script setup lang="ts">

import { useTheme } from '@/theme/colors'

const { themeOverrides } = useTheme()



</script>

<template>
  <n-config-provider h-full :theme-overrides="themeOverrides">
    <NaiveProvider>

      <RouterView />
    </NaiveProvider>

  </n-config-provider>
</template>

