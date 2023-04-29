<script setup lang="ts">
import Sider from './components/Sider/index.vue'
import PageHeader from './components/PageHeader/index.vue'
const appMain = ref(null)
const { toggle } = useFullscreen(appMain)
</script>

<template>
  <div>
    <n-layout has-sider position="absolute">
      <Sider></Sider>
      <n-layout>
        <div h-full flex flex-col>
          <PageHeader @full="toggle"></PageHeader>
          <div w-full flex-1 bg-gray-2:50 p-6>
            <router-view />
          </div>
        </div>

      </n-layout>
    </n-layout>
  </div>
</template>
