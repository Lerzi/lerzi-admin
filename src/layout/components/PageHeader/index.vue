<script setup lang="ts">
import Breadcrumb from '../Breadcrumb.vue'
import UserMenus from './UserMenus.vue'
import GitHubLink from './GitHubLink.vue'
</script>

<template>
  <n-layout-header>
    <div h-16 border-b-1 flex items-center justify-between px-4>
      <Breadcrumb></Breadcrumb>

      <div h-full flex>
        <GitHubLink></GitHubLink>
        <UserMenus></UserMenus>
      </div>
    </div>
  </n-layout-header>
</template>
