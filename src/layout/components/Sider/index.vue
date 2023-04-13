<script setup lang="ts">

import type { MenuOption } from 'naive-ui';
import Logo from '../Logo.vue'
import { loadMenus } from './menus';

const collapsed = ref<boolean>(false)

const activeKey = ref<string | null>(null)
const route = useRoute()
const menuOptions = ref<MenuOption[]>()

// router是全局路由对象
const router = useRouter()

const menuRef = ref()
onMounted(() => {
  menuOptions.value = loadMenus(router.options.routes)
  console.log('menuOptions :>> ', menuOptions);
  activeKey.value = route.name as string
  nextTick(() => {
    menuRef.value?.showOption(activeKey.value)

  })
})
</script>

<template>
  <n-layout-sider :bordered="true" collapse-mode="width" :collapsed-width="64" :width="240" :collapsed="collapsed"
    show-trigger @collapse="collapsed = true" @expand="collapsed = false">

    <Logo :collapsed="collapsed"></Logo>
    <n-menu v-model:value="activeKey" :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22"
      :options="menuOptions" ref="menuRef" />

  </n-layout-sider>
</template>
