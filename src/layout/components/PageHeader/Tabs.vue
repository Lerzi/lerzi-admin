<script setup lang="ts">
const name = ref(1)

function handleClose() {

}

const panels = ref([1])
</script>

<template>
  <n-tabs v-model:value="name" type="card" closable :size="'small'" tab-style="min-width: 80px;" @close="handleClose">
    <n-tab v-for="panel in panels" :key="panel" :tab="panel.toString()" :name="panel">
    </n-tab>
  </n-tabs>
</template>

