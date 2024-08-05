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
          @dragstart="handleAddComptData(item)"
          @click="handleAddComptData(item, false)"
        />
      </template>
    </Draggable>
  </div>
</template>

<script setup>
import _ from 'lodash'
import { VueDraggableNext as Draggable } from 'vue-draggable-next'
import { renderingFieldsDataMap } from '@/components/fieldComptData'
import TitleArea from '@/components/common/title-area/index.vue'
import FieldItem from '@/components/material-cpn/field-item/index.vue'
import useCreationStore from '@/stores/creation'

defineProps({
  fieldData: {
    type: Object,
    default: () => ({})
  }
})

const creationStore = useCreationStore()

// 为content将要渲染的列表中添加组件数据
const handleAddComptData = (curCompt, isDrag = true) => {
  const comptData = _.cloneDeep(renderingFieldsDataMap[curCompt.compt])
  comptData.compt = curCompt.compt

  if (isDrag) {
    creationStore.setCurDraggingCompt(comptData)
  } else {
    creationStore.setCurSelectedComptList(comptData)
  }
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
