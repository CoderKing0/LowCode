<template>
  <div class="receive-draggable-area">
    <Draggable class="draggable" group="shared" @add="handleAddCompt">
      <template v-for="(item, index) in comptList" :key="item.compt">
        <FieldComptWrapper
          :itemData="item"
          :curIndex="index"
          :curClickIndex="curClickIndex"
          @click.stop="handleWrapperClick(index)"
          @operated="handleWrapperOperation"
        >
          <component
            :is="componentMap.get(item.compt)"
            :itemData="item"
            @click="handleComptClick(item)"
          />
        </FieldComptWrapper>
      </template>
    </Draggable>
  </div>
</template>

<script setup>
import _ from 'lodash'
import { onMounted, onUnmounted, ref } from 'vue'
import useCreationStore from '@/stores/creation'
import { OperateType } from '@/constant/creation'
import { componentMap } from '@/components/fieldComptMap'
import { VueDraggableNext as Draggable } from 'vue-draggable-next'
import FieldComptWrapper from '@/components/rendering-cpn/field-compt-wrapper/index.vue'
const props = defineProps({
  // 需要渲染的组件列表
  comptList: {
    type: Array,
    default: () => []
  },
  // 渲染区or子表单在使用当前组件
  originUser: {
    type: String,
    default: 'rendering'
  }
})

const creationStore = useCreationStore()

// 点击组件，添加样式
const curClickIndex = ref(-1)
const handleWrapperClick = (index = -1) => {
  curClickIndex.value = index
}

// 设置当前组件的使用者
const setCurComptUser = () => {
  creationStore.setCurOperatedOrigin(props.originUser)
}

// 拿到拖拽过来的组件
const handleAddCompt = (curCompt) => {
  setCurComptUser()
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
  setCurComptUser()
  if (type === OperateType.DELETE) {
    creationStore.setCurSelectedComptList(OperateType.DELETE, curIndex, curCompt)
  } else {
    creationStore.setCurSelectedComptList(OperateType.COPY, curIndex, _.cloneDeep(curCompt))
  }
}

onMounted(() => {
  document.addEventListener('click', handleWrapperClick)
})
onUnmounted(() => {
  document.removeEventListener('click', handleWrapperClick)
})
</script>

<style lang="less" scoped>
.receive-draggable-area {
  height: 100%;
}
</style>
