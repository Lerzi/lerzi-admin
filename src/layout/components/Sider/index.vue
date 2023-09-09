<script setup lang="ts">
import Logo from '../Logo.vue'

const collapsed = ref<boolean>(false)

const activeKey = computed(() => {
  return route.path as string
})
const route = useRoute()
const router = useRouter()
const menuOptions = useMenus(router.options.routes)
// router是全局路由对象

const menuRef = ref()
onMounted(() => {
  nextTick(() => {
    menuRef.value?.showOption(activeKey.value)
  })
})
</script>

<template>
  <n-layout-sider :bordered="true" collapse-mode="width" :collapsed-width="64" :width="240" :collapsed="collapsed"
    show-trigger @collapse="collapsed = true" @expand="collapsed = false" style="background-color: #f7f7fa;">

    <Logo :collapsed="collapsed"></Logo>
    <n-menu :value="activeKey" :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22"
      :options="menuOptions" ref="menuRef" />

  </n-layout-sider>
</template>
