<template>
  <div class="rendering-area content-area-height" :style="{ background: bgcColor || bgcImg }">
    <div class="draggable-container">
      <!-- 顶部样式 -->
      <div class="top-box" :style="topStyle"></div>

      <!-- 表单标题 -->
      <TitleArea :title="formTitle" level="firstLevel" />

      <!-- 组件渲染区 -->
      <div class="scroll-area" :style="{ height: scrollAreaHeight }">
        <el-scrollbar class="scroll">
          <Draggable class="draggable" group="shared" @add="handleAddCompt">
            <template v-for="(item, index) in curSelectedComptList" :key="item.compt">
              <FieldComptWrapper
                :itemData="item"
                :curIndex="index"
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
        </el-scrollbar>
        <div class="empty-tip">请从左侧拖拽来添加字段</div>
      </div>
    </div>

    <!-- 底部按钮 -->
    <BottomArea :bottomColor="bottomColor" />
  </div>
</template>

<script setup>
import _ from 'lodash'
import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import useCreationStore from '@/stores/creation'
import { VueDraggableNext as Draggable } from 'vue-draggable-next'
import { componentMap } from '@/components/fieldComptMap'
import FieldComptWrapper from '@/components/rendering-cpn/field-compt-wrapper/index.vue'
import { OperateType } from '@/constant/creation'
import BottomArea from '@/components/common/bottom-area/index.vue'

const creationStore = useCreationStore()

const { curSelectedComptList, formTitle, actingStyleTemplate } = storeToRefs(creationStore)

// 背景颜色/图片
const bgcColor = ref('')
const bgcImg = ref('')

// 顶部样式
const topStyle = ref('')
const curTemplateId = computed(() => actingStyleTemplate.value.templateId)

const scrollAreaHeight = computed(
  () => `calc(100% - ${curTemplateId.value === 1 ? '123px' : '243px'})`
)

const loadStyle = async () => {
  const suffix = [8, 9].includes(curTemplateId.value) ? 'png' : 'jpg'

  // 获取顶部样式
  if (curTemplateId.value === 1) {
    topStyle.value = {
      height: '30px',
      backgroundColor: '#006ce2'
    }
  } else {
    const topImgInstance = await import(
      `@/assets/img/themes/themeTop${curTemplateId.value}.${suffix}`
    )
    topStyle.value = {
      height: '150px',
      background: `url(${topImgInstance.default}) center center / cover no-repeat`
    }
  }

  // 获取背景颜色/图片
  bgcColor.value = actingStyleTemplate.value.style.backgroundColor
  if (!bgcColor.value) {
    const imgInstance = await import(`@/assets/img/themes/themeBgc${curTemplateId.value}.${suffix}`)
    bgcImg.value = `url(${imgInstance.default})`
  }
}

watch(
  actingStyleTemplate,
  () => {
    loadStyle()
  },
  { immediate: true }
)

// 底部样式
const bottomColor = computed(() => actingStyleTemplate.value.style.bottomContentColor)

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
.rendering-area {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  border-left: 1px solid #dedfe0;
  border-right: 1px solid #dedfe0;
  background: no-repeat center/contain;

  .draggable-container {
    width: 76%;
    margin: 30px auto 0;
    background-color: #fff;

    .scroll-area {
      .scroll {
        padding: 0 20px;
        box-sizing: border-box;
      }
    }

    .draggable {
      width: 100%;
      height: 100%;

      &:empty + .empty-tip {
        display: block;
      }
    }

    .empty-tip {
      display: none;
      position: absolute;
      top: -5%;
      right: 0;
      bottom: 0;
      left: 0;
      width: 200px;
      height: 28px;
      margin: auto;
      font-size: 18px;
      color: #c0c0c3;
    }
  }
}
</style>
