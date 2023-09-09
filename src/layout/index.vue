<script setup lang="ts">
import Sider from './components/Sider/index.vue'
import PageHeader from './components/PageHeader/index.vue'
const appMain = ref(null)
const { toggle } = useFullscreen(appMain)

</script>

<template>
  <div ref="appMain">
    <n-layout has-sider position="absolute">
      <Sider></Sider>
      <n-layout>
        <div h-full flex flex-col>
          <PageHeader @full="toggle"></PageHeader>
          <div w-full flex-1 p-6>
            <router-view v-slot="{ Component, route }">
              <transition name="fade" mode="out-in" :appear="true">
                <component :is="Component" :key="route.fullPath" />
              </transition>
            </router-view>
          </div>
        </div>
      </n-layout>
    </n-layout>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
