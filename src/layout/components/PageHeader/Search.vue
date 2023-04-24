<script setup lang="ts">
import Basic from './Basic.vue'

const value = ref()
const options = computed(() => {
  return []
})

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
</script>

<template>
  <div>
    <Basic>
      <div h-full flex items-center @click="handelClick">
        <div w-12 text-5 i-carbon-search></div>
      </div>
      <div w-0 transition-all :class="{ 'w-64': visible }">
        <n-select pr-2 ref="input" v-show="visible" @blur="onBlur" v-model:value="value" filterable placeholder="请输入关键词搜索"
          :options="options" />
      </div>


    </Basic>
  </div>
</template>
