<template>
  <div class="preview-slider">
    <div class="left">
      <input type="text" v-model.number="sliderValue" class="slider-input" />
    </div>
    <div class="right" :style="{ justifyContent: isShowText ? 'space-between' : 'center' }">
      <div ref="sliderLineRef" class="slider-line">
        <div class="line-content" :style="{ width: `${deltaX}%` }"></div>
        <div
          class="thumb"
          :style="{ left: `${deltaX - 3 < 0 ? 0 : deltaX - 3}%` }"
          @mousedown="startDrag"
          @mouseup="endDrag"
        >
          {{ sliderValue }}
        </div>
      </div>
      <div class="slider-text">
        <div class="text">{{ minText }}</div>
        <div class="text">{{ maxText }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, toRefs } from 'vue'

const props = defineProps({
  formValue: {
    type: Object,
    default: () => ({})
  },
  itemData: {
    type: Object,
    default: () => ({})
  }
})

const { itemData, formValue } = toRefs(props)

const minText = computed(() => itemData.value.range.min.text)
const minValue = computed(() => itemData.value.range.min.value)
const maxText = computed(() => itemData.value.range.max.text)
const maxValue = computed(() => itemData.value.range.max.value)
const isShowText = computed(() => minText.value && maxText.value)

const sliderValue = computed({
  get() {
    return formValue.value[itemData.value.prop] || minValue.value
  },
  set(val) {
    if (val < minValue.value) val = minValue.value
    if (val > maxValue.value) val = maxValue.value

    calcThumbDeltaX(val)
    formValue.value[itemData.value.prop] = val
  }
})

// 拖拽逻辑Start
let startX = -1
let isDragging = false
const sliderLineRef = ref(null)

// 移动距离
const deltaX = ref(0)

// 计算滑块移动距离
const calcThumbDeltaX = (val) => {
  const range = maxValue.value - minValue.value
  const proportion = (val - minValue.value) / range
  deltaX.value = Math.round(proportion * 100)
}

// 处理拖拽
const handleDrag = (e) => {
  if (!isDragging || startX === -1) return

  const moveX = e.clientX - startX
  const newValue = (
    sliderValue.value +
    (moveX / sliderLineRef.value.offsetWidth) * (maxValue.value - minValue.value)
  ).toFixed(0)

  sliderValue.value = Math.max(minValue.value, Math.min(newValue, maxValue.value))
  startX = e.clientX
}

const startDrag = (e) => {
  isDragging = true
  startX = e.clientX
  window.addEventListener('mousemove', handleDrag)
  window.addEventListener('mouseup', endDrag)
}

const endDrag = () => {
  isDragging = false
  startX = -1
  window.removeEventListener('mousemove', handleDrag)
  window.removeEventListener('mouseup', endDrag)
}
</script>

<style lang="less" scoped>
.preview-slider {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .left {
    .slider-input {
      width: 60px;
      height: 30px;
      border: 1px solid var(--third-color);
      border-radius: 5px;
      background-color: #fff;
      font-size: 12px;
      text-align: center;
    }
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 34px;
    margin-left: 10px;

    .slider-line {
      position: relative;
      width: calc(100% - 2px);
      height: 10px;
      background-color: var(--third-color);
      border-radius: 5px;

      .line-content {
        height: 10px;
        background-color: var(--primary-color);
        border-radius: 5px 0 0 5px;
      }

      .thumb {
        position: absolute;
        top: -2px;
        width: 30px;
        height: 14px;
        line-height: 14px;
        background-color: #fff;
        font-size: 12px;
        text-align: center;
        box-shadow: #aaa 0px 1px 4px;
        cursor: pointer;
      }
    }

    .slider-text {
      display: flex;
      justify-content: space-between;
      line-height: normal;
      font-size: 14px;
      color: var(--third-color);
    }
  }
}
</style>
