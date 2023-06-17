<script setup lang="ts">
import Breadcrumb from '../Breadcrumb.vue'
import UserMenus from './UserMenus.vue'
import GitHubLink from './GitHubLink.vue'
import Search from './Search.vue'
import Full from './Full.vue'
import Tabs from './Tabs.vue'
</script>

<template>
  <n-layout-header>
    <div h-16 border-b-1 flex items-center justify-between px-4>
      <Breadcrumb></Breadcrumb>

      <div h-full flex>
        <Search></Search>
        <Full @click="$emit('full')" />
        <GitHubLink></GitHubLink>
        <UserMenus></UserMenus>
      </div>
    </div>
    <Tabs></Tabs>
  </n-layout-header>
</template>
