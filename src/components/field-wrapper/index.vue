<template>
  <div class="field-wrapper">
    <TitleArea :title="fieldData.name" level="thirdLevel" />
    <Draggable
      class="list"
      :group="{ name: 'shared', pull: 'clone', put: false }"
      :sort="false"
      @end="handleEndDrag"
    >
      <template v-for="item in fieldData.list" :key="item.compt">
        <FieldItem
          :itemData="item"
          @dragstart="handleStartDrag(item)"
          @click="handleItemClick(item)"
        />
      </template>
    </Draggable>
  </div>
</template>

<script setup>
import TitleArea from '../title-area/index.vue'
import FieldItem from '../field-item/index.vue'
import { VueDraggableNext as Draggable } from 'vue-draggable-next'
import useCreationStore from '@/stores/creation'

defineProps({
  fieldData: {
    type: Object,
    default: () => ({})
  }
})

const creationStore = useCreationStore()

const handleStartDrag = (curDragData) => {
  creationStore.setCurDraggingCompt(curDragData)
}

const handleItemClick = (curClickData) => {
  // 点击物料，将其添加到渲染区的渲染列表中
  creationStore.setCurSelectedComptList(curClickData)
}

/**
 * e.clone是复制出来的元素
 * vue-draggable-next 默认会把克隆出来的元素留在原地，把原来的元素拖拽到渲染区
 * 这就会导致克隆出来的元素是没有监听click事件的
 * 因此下面的操作就是禁掉拖拽的默认行为
 */
const handleEndDrag = (e) => {
  if (e.from !== e.to) {
    e.from.insertBefore(e.item, e.clone)
    e.from.removeChild(e.clone)
  }
}
</script>

<style lang="less" scoped>
.field-wrapper {
  margin-bottom: 20px;

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
