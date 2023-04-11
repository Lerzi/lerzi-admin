<script setup lang="ts">
const msg = ref<string>('hello word')
</script>

<template>
  <div flex>
    <a icon-btn rel="noreferrer" href="https://github.com/lerzi" target="_blank" title="GitHub">
      <div i-carbon-logo-github></div>
    </a>
    {{ msg }}
  </div>
</template>
