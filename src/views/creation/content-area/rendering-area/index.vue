<template>
  <RenderingAreaWrapper
    :formTitle="formTitle"
    :scrollAreaHeight="scrollAreaHeight"
    :actingStyleTemplate="actingStyleTemplate"
    :isShowTip="curSelectedComptList.length ? false : true"
  >
    <template #content>
      <Draggable class="draggable" group="shared" @add="handleAddCompt">
        <template v-for="(item, index) in curSelectedComptList" :key="item.compt">
          <FieldComptWrapper :itemData="item" :curIndex="index" @operated="handleWrapperOperation">
            <component
              :is="componentMap.get(item.compt)"
              :itemData="item"
              @click="handleComptClick(item)"
            />
          </FieldComptWrapper>
        </template>
      </Draggable>
    </template>
  </RenderingAreaWrapper>
</template>

<script setup>
import _ from 'lodash'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import useCreationStore from '@/stores/creation'
import { VueDraggableNext as Draggable } from 'vue-draggable-next'
import { componentMap } from '@/components/fieldComptMap'
import FieldComptWrapper from '@/components/rendering-cpn/field-compt-wrapper/index.vue'
import { OperateType } from '@/constant/creation'
import RenderingAreaWrapper from '@/components/common/rendering-area-wrapper/index.vue'

const creationStore = useCreationStore()

const { curSelectedComptList, formTitle, actingStyleTemplate } = storeToRefs(creationStore)

const curTemplateId = computed(() => actingStyleTemplate.value.templateId)

const scrollAreaHeight = computed(
  () => `calc(100% - ${curTemplateId.value === 1 ? '123px' : '243px'})`
)

// 拿到拖拽过来的组件
const handleAddCompt = (curCompt) => {
  creationStore.setCurSelectedComptList(OperateType.INSERT, curCompt.newIndex)
  creationStore.setCurDraggingCompt(null)
}

// 点击组件
const handleComptClick = (curCompt) => {
  creationStore.setCurClickingCompt(curCompt)
  creationStore.setCurClickingComptTitle(curCompt.title)
}

// 删除或者复制某个组件
const handleWrapperOperation = (type, curIndex, curCompt) => {
  if (type === OperateType.DELETE) {
    creationStore.setCurSelectedComptList(OperateType.DELETE, curIndex)
  } else {
    creationStore.setCurSelectedComptList(OperateType.COPY, curIndex, _.cloneDeep(curCompt))
  }
}
</script>

<style lang="less" scoped>
.rendering-area-wrapper {
  :deep(.draggable) {
    width: 100%;
    height: 100%;
  }
}
</style>
