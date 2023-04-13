<script setup lang="ts">
defineProps<{ collapsed: Boolean }>()
</script>

<template>
  <div flex :class="{ 'px-4': !collapsed }" transition-all cursor-pointer border-b-1 shadow-inner>
    <n-icon :size="60">
      <div i-carbon-letter-ll text-5xl></div>
    </n-icon>
    <div flex flex-nowrap items-center text-xl overflow-hidden truncate v-show="!collapsed">
      LerZi管理系统
    </div>
  </div>
</template>
