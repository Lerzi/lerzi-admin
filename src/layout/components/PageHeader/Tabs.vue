<script setup lang="ts">
const router = useRouter()
const route = useRoute()
console.log('route :>> ', route);
const current = computed({
  get() {
    return route.path
  },
  set(newPath) {
    router.push({
      path: newPath
    })
  }
})
const tabStore = useTabStore()
const tabs = tabStore.tabs

function handleClose(path: string) {
  tabStore.delTab(path)
}


</script>

<template>
  <n-tabs v-model:value="current" type="card" :size="'medium'" tab-style="min-width: 80px;justify-content: center;"
    @close="handleClose">
    <n-tab v-for="tab in tabs" :key="tab.path" :tab="tab.meta.title" :name="tab.path"
      :closable="tab.path !== '/home/index'">
    </n-tab>
  </n-tabs>
</template>

