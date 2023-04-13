<script setup lang="ts"></script>

<template>
  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    <RouterView />
  </n-config-provider>
</template>

<style scoped></style>
