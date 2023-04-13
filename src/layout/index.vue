<script setup lang="ts">
import Sider from './components/Sider/index.vue'
import PageHeader from './components/PageHeader/index.vue'
</script>

<template>
  <div>
    <n-layout has-sider position="absolute">
      <Sider></Sider>
      <n-layout>
        <PageHeader></PageHeader>
        <n-layout-content content-style="padding: 24px;">
          <router-view />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </div>
</template>
