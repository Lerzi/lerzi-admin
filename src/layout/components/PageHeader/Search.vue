<script setup lang="ts">
import type { MenuOption } from 'naive-ui';
import Basic from './Basic.vue'
import { router } from '@/router';

const value = ref()

const visible = ref<boolean>(false)

const input = ref()
function handelClick() {
  visible.value = !visible.value
  nextTick(() => {
    input.value?.focus()
  })
}

function onBlur() {
  visible.value = false
}

function handelSelect(_: string, option: MenuOption) {
  visible.value = false
  router.push({
    path: option.key as string
  })
}

const menuOptions = useMenus(router.options.routes, 'Text')
</script>

<template>
  <div>
    <Basic>
      <div h-full flex items-center @click="handelClick">
        <div w-12 text-5 i-carbon-search></div>
      </div>
      <div w-0 transition-all :class="{ 'w-64': visible }">
        <n-tree-select pr-2 ref="input" v-show="visible" @blur="onBlur" @update:value="handelSelect" v-model:value="value"
          filterable placeholder="请输入关键词搜索" :options="menuOptions" />
      </div>
    </Basic>
  </div>
</template>
