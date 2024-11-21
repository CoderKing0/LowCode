<template>
  <div class="field-compt-wrapper">
    <div class="icon">
      <span class="iconfont icon-copy" @click="handleOperation(OperateType.COPY)"></span>
      <span class="iconfont icon-delete" @click="handleOperation(OperateType.DELETE)"></span>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { OperateType } from '@/constant/creation'

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  },
  curIndex: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['operated'])
const handleOperation = (type) => {
  const { installConfirmFn } = $confirm({ message: '确认执行删除操作吗？' })
  installConfirmFn(() => {
    emit('operated', type, props.curIndex, props.itemData)
  })
}
</script>

<style lang="less" scoped>
.field-compt-wrapper {
  position: relative;
  border: 1px solid transparent;
  margin-bottom: 20px;
  padding-top: 5px;

  &:hover {
    border: 1px dashed var(--primary-color);
  }

  &:hover .iconfont {
    display: block;
  }

  .iconfont {
    display: none;
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
