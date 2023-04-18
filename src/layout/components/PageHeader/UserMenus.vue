<script setup lang="ts">
import Basic from './Basic.vue'
import avatar from '@/assets/images/avatar1.gif'
import { NIcon, useDialog } from 'naive-ui';

function renderIcon(icon: string) {
  return () => {
    return h(NIcon, null, {
      default: () => h('div', { class: icon, style: 'width: 16px;height:16px' })
    })
  }
}

const options = ref([
  {
    label: '用户中心',
    key: 'user-center',
    icon: renderIcon('i-carbon-user-profile')
  },
  {
    type: 'divider',
    key: 'd1'
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon('i-carbon-logout')
  },
])

function handleSelect(key: string) {
  actions[key]()
}

interface Actions {
  [functionName: string]: () => void
}
const dialog = useDialog()
const authStore = useAuthStore()
const actions: Actions = {
  logout() {
    dialog.info({
      title: '提示',
      content: '是否确定要退出系统？',
      positiveText: '确定',
      negativeText: '取消',
      positiveButtonProps: { type: 'primary' },
      onPositiveClick: () => {
        authStore.logout()
      },
      onNegativeClick: () => {
        // message.error('取消')
      }
    })
  }
}


</script>

<template>
  <n-dropdown trigger="click" :options="options" :show-arrow="true" @select="handleSelect">
    <Basic>
      <div flex gap-2 items-center px-2>
        <n-avatar round size="medium" :src="avatar">
        </n-avatar>
        <div text-6>Lerzi</div>
      </div>
    </Basic>
  </n-dropdown>
</template>
