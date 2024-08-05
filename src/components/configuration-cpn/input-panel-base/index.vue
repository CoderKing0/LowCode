<template>
  <div class="input-panel-base">
    <TitleArea :title="title" level="sixthLevel" />
    <component
      ref="inputRef"
      :is="'el-' + el"
      v-model="curValue"
      v-bind="elProps"
      @focus="handleFocus"
    />
  </div>
</template>

<script setup>
import useComputed from '@/hooks/useComputed'
import TitleArea from '@/components/common/title-area/index.vue'
import { ref } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  el: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  elProps: {
    type: Object,
    default: () => ({})
  }
})

// 使用useComputed包裹的value，才能够使用v-model双向绑定
const curValue = useComputed(1, props.path)

// 输入框聚焦，选中输入框中的所有内容
const inputRef = ref('inputRef')
const handleFocus = () => {
  inputRef.value.select()
}
</script>

<style lang="less" scoped>
.input-panel-base {
  margin-bottom: 25px;
}
</style>
