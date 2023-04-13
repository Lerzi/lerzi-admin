<script setup lang="ts">

import type { MenuOption } from 'naive-ui';
import Logo from '../Logo.vue'
import { loadMenus } from './menus';

const collapsed = ref<boolean>(false)

const activeKey = ref<string | null>(null)


const menuOptions = ref<MenuOption[]>()

// router是全局路由对象
const router = useRouter()




onMounted(() => {
  menuOptions.value = loadMenus(router.options.routes)
})
</script>

<template>
  <n-layout-sider :bordered="true" collapse-mode="width" :collapsed-width="64" :width="240" :collapsed="collapsed"
    show-trigger @collapse="collapsed = true" @expand="collapsed = false">

    <Logo :collapsed="collapsed"></Logo>
    <n-menu v-model:value="activeKey" :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22"
      :options="menuOptions" />

  </n-layout-sider>
</template>
