<template>
  <div class="receive-draggable-area" :style="{ height: scrollAreaHeight }">
    <el-scrollbar class="scroll" always>
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
    </el-scrollbar>
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
  },
  /**
   * 可滚动区域高度：
   *  不传：需要通过:deep()修改receive-draggable-area的高度
   *  传递：可以直接在JS中算出来之后，通过参数传递
   */
  scrollAreaHeight: {
    type: String,
    default: 'auto'
  }
})

const creationStore = useCreationStore()
const { draggingCompt, clickingCompt, curOrigin } = storeToRefs(creationStore)
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
  if (curOrigin.value !== originUser.value) {
    switch (originUser.value) {
      case 'rendering':
        $alert({ message: '开始操作表单~', type: 'info' })
        break
      default:
        $alert({ message: '开始操作子表单~', type: 'info' })
    }
  }

  creationStore.setCurOperatedOrigin(originUser.value)
}

// 拿到拖拽过来的组件
const handleAddCompt = (curCompt) => {
  if (originUser.value !== 'rendering' && draggingCompt.value.compt === 'subForm') {
    $alert({ message: '子表单字段不支持嵌套！', type: 'warning' })
    return
  }

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
  .scroll {
    padding: 0 20px;
    box-sizing: border-box;

    :deep(.el-scrollbar__view) {
      height: 100%;
    }
  }

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
