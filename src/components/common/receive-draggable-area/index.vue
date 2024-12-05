<template>
  <div class="receive-draggable-area">
    <Draggable class="draggable" group="shared" @add="handleAddCompt">
      <div v-if="isShowTip" class="empty-tip" :style="emptyTipStyle">请从左侧拖拽来添加字段</div>
      <template v-for="(item, index) in comptList" :key="item.compt">
        <FieldComptWrapper
          :itemData="item"
          :curIndex="index"
          :activeCompt="clickingCompt"
          @operated="handleWrapperOperation"
        >
          <component
            :is="componentMap.get(item.compt)"
            :itemData="item"
            @click.stop="handleComptClick(item)"
          />
        </FieldComptWrapper>
      </template>
    </Draggable>
  </div>
</template>

<script setup>
import _ from 'lodash'
import { storeToRefs } from 'pinia'
import { computed, toRefs } from 'vue'
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
const { draggingCompt, clickingCompt } = storeToRefs(creationStore)
const { comptList, originUser } = toRefs(props)

const isShowTip = computed(() => {
  return comptList.value.length <= 0 && !draggingCompt.value
})

const emptyTipStyle = computed(() => {
  if (originUser.value === 'rendering') {
    return {
      fontSize: '18px'
    }
  }

  return null
})

// 设置当前组件的使用者
const setCurComptUser = () => {
  creationStore.setCurOperatedOrigin(originUser.value)
}

// 拿到拖拽过来的组件
const handleAddCompt = (curCompt) => {
  setCurComptUser()
  creationStore.setCurSelectedComptList(OperateType.INSERT, curCompt.newIndex)
  creationStore.setCurDraggingCompt(null)
}

// 点击组件
const handleComptClick = (curCompt = null) => {
  creationStore.setCurClickingCompt(curCompt)
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
</script>

<style lang="less" scoped>
.receive-draggable-area {
  height: 100%;

  .empty-tip {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    color: #c0c0c3;
    text-align: center;
  }
}
</style>
