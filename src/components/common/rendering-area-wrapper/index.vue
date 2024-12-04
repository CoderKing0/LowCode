<template>
  <div class="rendering-area-wrapper" :style="{ background: bgcColor || bgcImg }">
    <div class="rendering-container" :style="{ width: formWidth + '%' }">
      <!-- 顶部样式 -->
      <div class="top-box" :style="topStyle"></div>

      <!-- 表单标题 -->
      <TitleArea :title="formTitle" level="firstLevel" />

      <!-- 组件渲染区 -->
      <div class="scroll-area" :style="{ height: scrollAreaHeight }">
        <el-scrollbar class="scroll">
          <slot name="content"></slot>
        </el-scrollbar>
      </div>
    </div>

    <!-- 底部按钮 -->
    <BottomArea :bottomColor="bottomColor" :bottomPadding="(100 - formWidth) / 2" />
  </div>
</template>

<script setup>
import { computed, ref, toRefs, watch } from 'vue'
import BottomArea from '@/components/common/bottom-area/index.vue'

const props = defineProps({
  // 表单标题
  formTitle: {
    type: String,
    required: true
  },
  /**
   * 可滚动区域高度：
   *  不传：需要通过:deep()修改rendering-area-wrapper的高度
   *  传递：可以直接在JS中算出来之后，通过参数传递
   */
  scrollAreaHeight: {
    type: String,
    default: 'auto'
  },
  // 当前选中的样式模板
  actingStyleTemplate: {
    type: Object,
    required: true
  },
  isShowTip: {
    type: Boolean,
    default: false
  },
  // 表单宽度，这里的数字是 “百分比”
  formWidth: {
    type: Number,
    default: 76
  }
})

const { formTitle, actingStyleTemplate } = toRefs(props)

// 顶部样式
const topStyle = ref('')

// 背景颜色/图片
const bgcColor = ref('')
const bgcImg = ref('')

// 底部样式
const bottomColor = ref('')

const curTemplateId = computed(() => actingStyleTemplate.value.templateId)

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

  // 获取底部样式
  bottomColor.value = actingStyleTemplate.value.style.bottomContentColor
}

watch(
  actingStyleTemplate,
  () => {
    loadStyle()
  },
  { immediate: true }
)
</script>

<style lang="less" scoped>
.rendering-area-wrapper {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  border-left: 1px solid #dedfe0;
  border-right: 1px solid #dedfe0;
  background: no-repeat center/contain;

  .rendering-container {
    margin: 30px auto 0;
    background-color: #fff;

    .scroll-area {
      .scroll {
        padding: 0 20px;
        box-sizing: border-box;

        :deep(.el-scrollbar__view) {
          height: 100%;
        }
      }
    }
  }
}
</style>
