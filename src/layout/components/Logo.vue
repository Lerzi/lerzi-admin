<script setup lang="ts">

const props = defineProps<{ collapsed: Boolean }>()



</script>

<template>
  <div flex :class="{ 'px-4': !collapsed }" transition-all>
    <n-icon :size="70">
      <div i-carbon-letter-ll text-6xl></div>
    </n-icon>
    <div flex items-center text-2xl overflow-hidden v-show="!collapsed">
      LerziAdmin
    </div>
  </div>
</template>
