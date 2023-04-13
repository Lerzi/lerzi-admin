<script setup lang="ts">
import Sider from './components/Sider/index.vue'
</script>

<template>
  <div>
    <n-layout has-sider position="absolute">
      <Sider></Sider>
      <n-layout>
        <n-layout-header>颐和园路</n-layout-header>
        <n-layout-content content-style="padding: 24px;">
          <router-view />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </div>
</template>
