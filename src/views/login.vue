<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

interface FormValue {
  username?: string
  password?: string
}

const formValue = ref<FormValue>({
  username: undefined,
  password: undefined
})

const rules = ref({
  username: {
    required: true,
    message: '请输入用户名',
    trigger: 'blur'
  },
  password: {
    required: true,
    message: '请输入密码',
    trigger: ['input', 'blur']
  }
})

const authStore = useAuthStore()

const formRef = ref()
async function handelLogin() {
  try {
    await formRef.value?.validate()
    await authStore.login(formValue.value.username as string, formValue.value.password as string)
  } catch (error) {
    console.error(error);
  }

}

</script>

<template>
  <div w-full h-full flex justify-center items-center bg-gradient-to-b from-info-500 to-primary-700>
    <div w-md>
      <n-card>
        <template #header>
          <div flex items-center justify-between>
            <div text-primary i-carbon-letter-ll w-18 h-18></div>
            <div text-primary text-2xl>系统登录</div>
          </div>
        </template>
        <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules">
          <n-form-item path="username">
            <n-input v-model:value="formValue.username" placeholder="请输入用户名">
              <template #prefix>
                <div i-carbon-user></div>
              </template>
            </n-input>
          </n-form-item>
          <n-form-item path="password">
            <n-input v-model:value="formValue.password" placeholder="请输入密码" type="password" show-password-on="click">
              <template #prefix>
                <div i-carbon-locked></div>
              </template>
              <template #password-visible-icon>
                <div i-carbon-view-filled></div>
              </template>
              <template #password-invisible-icon>
                <div i-carbon-view-off-filled></div>
              </template>
            </n-input>
          </n-form-item>
          <n-form-item>
            <n-button type="primary" block @click="handelLogin">
              登录
            </n-button>
          </n-form-item>
        </n-form>
      </n-card>
    </div>

  </div>
</template>

