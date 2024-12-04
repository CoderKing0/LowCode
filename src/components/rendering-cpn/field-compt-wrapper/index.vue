<template>
  <div class="field-compt-wrapper" :class="{ 'wrapper-clicked': isClicked }">
    <div v-if="isClicked" class="icon">
      <span class="iconfont icon-copy" @click.stop="handleOperation(OperateType.COPY)"></span>
      <span class="iconfont icon-delete" @click.stop="handleOperation(OperateType.DELETE)"></span>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue'
import { OperateType } from '@/constant/creation'

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  },
  curIndex: {
    type: Number,
    default: 0
  },
  curClickIndex: {
    type: Number,
    default: -1
  }
})

const emit = defineEmits(['operated'])
const { itemData, curIndex, curClickIndex } = toRefs(props)

const isClicked = computed(() => curClickIndex.value === curIndex.value)

const handleOperation = (type) => {
  const { installConfirmFn } = $confirm({ message: '确认执行删除操作吗？' })
  installConfirmFn(() => {
    emit('operated', type, curIndex.value, itemData.value)
  })
}
</script>

<style lang="less" scoped>
.field-compt-wrapper {
  position: relative;
  border: 1px solid transparent;
  margin-bottom: 20px;
  padding-top: 5px;
  cursor: pointer;

  &:hover {
    border: 1px dashed var(--primary-color);
  }

  &.wrapper-clicked {
    border: 1px dashed var(--primary-color);
  }

  .iconfont {
    position: absolute;
    top: 2px;
    right: 0;
    cursor: pointer;
  }

  .icon-copy {
    color: var(--primary-color);
    right: 20px;
  }

  .icon-delete {
    color: var(--danger-color);
  }
}
</style>
