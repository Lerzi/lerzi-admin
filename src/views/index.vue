<script setup lang="ts">

const msg = ref<string>('hello word')

</script>

<template>
  <div flex>
    <a icon-btn rel="noreferrer" href="https://github.com/lerzi" target="_blank" title="GitHub">
      <div i-carbon-logo-github></div>
    </a>
    <div text-primary>
      {{ msg }}
    </div>
    <n-button>
      basic
    </n-button>
    <n-button type="primary">
      primary
    </n-button>
    <n-button type="info">
      info
    </n-button>
    <n-button type="success">
      success
    </n-button>
    <n-button type="warning">
      warning
    </n-button>
    <n-button type="error">
      error
    </n-button>

    <div w-24 h-24 bg-primary></div>
  </div>
</template>
