<script setup lang="ts">
import { NIcon } from 'naive-ui';
import type { RouteLocationMatched } from 'vue-router';



const route = useRoute()

const router = useRouter()
const matched = computed(() => {
  if (route.matched.length == 2 && (!route.matched[1].meta?.title)) {
    return [route.matched[0]]
  } else {
    return route.matched
  }
})

function renderDropdownLabel(option: RouteLocationMatched) {
  return option?.meta.title
}

function renderDropdownIcon(option: RouteLocationMatched) {
  return h(NIcon, null, { default: () => h('div', { class: option?.meta.icon || 'i-carbon-list', style: 'width: 16px;height:16px' }) })
}

function handleSelect(key: string) {
  router.push({
    path: key
  })
}

</script>

<template>
  <n-breadcrumb>
    <n-breadcrumb-item v-for="item in matched" :key="item.path">
      <n-dropdown :options="item.children" :render-label="renderDropdownLabel" :render-icon="renderDropdownIcon"
        trigger="click" key-field="path" @select="handleSelect">
        <div flex items-center gap-1>
          <div :class="item.meta.icon || 'i-carbon-list'"></div>
          <div text-4>{{ item.meta.title }}</div>
        </div>
      </n-dropdown>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>
