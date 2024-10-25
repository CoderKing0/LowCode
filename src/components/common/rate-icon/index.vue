<template>
  <div class="rate-icons">
    <template v-for="(item, index) in rateLevel.count" :key="item">
      <div
        class="rate-item"
        :class="{ 'panel-style': needHandleEvents }"
        :style="{ backgroundImage: `url(${bgcImg[index]})` }"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave"
        @click="handleClick(index)"
      ></div>
    </template>
  </div>
</template>

<script setup>
import { ref, toRefs, watchEffect } from 'vue'

const props = defineProps({
  rateLevel: {
    type: Object,
    default: () => ({})
  },
  iconKind: {
    type: String,
    default: 'star'
  },
  imgKinds: {
    type: Array,
    default: () => []
  },
  needHandleEvents: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'setImageKinds'])
const { rateLevel, imgKinds, needHandleEvents } = toRefs(props)

const bgcImg = ref([])

/*
  iconKind: 图标种类（star、heart、flower、fire）
  imgKind: 图片种类（empty、whole、hover、hover-half）
*/
watchEffect(async () => {
  const imgs = []
  for (let imgKind of imgKinds.value) {
    const imgInstance = await import(`@/assets/img/rate/${props.iconKind}-${imgKind}.png`)
    imgs.push(imgInstance.default)
  }
  bgcImg.value = imgs
})

const isClicked = ref(false)
// 修改背景图类型：empty、hover、hover-half、whole
const changeIconBgcImgs = (index) => {
  const fillKind = isClicked.value ? 'whole' : 'hover'

  const oldKinds = new Array(rateLevel.value.count - index + 1).fill('empty')
  const newKinds = new Array(index).fill(fillKind)
  if (rateLevel.value.isHalf) {
    // 暂时没用选中状态的半星，所以统一用hover-half
    newKinds.push('hover-half')
  } else {
    newKinds.push(fillKind)
  }
  emit('setImageKinds', [...newKinds, ...oldKinds])
}

const handleMouseEnter = (index) => {
  if (!isClicked.value && needHandleEvents.value) {
    changeIconBgcImgs(index)
  }
}

const handleMouseLeave = () => {
  if (!isClicked.value && needHandleEvents.value) {
    emit(
      'setImageKinds',
      imgKinds.value.map(() => 'empty')
    )
  }
}

let prevIndex = -1
const handleClick = (index) => {
  if (!needHandleEvents.value) return

  // 点击相同图标，取消选中
  if (prevIndex === index) {
    isClicked.value = false
    prevIndex = -1
    emit(
      'setImageKinds',
      imgKinds.value.map(() => 'empty')
    )
    emit('update:modelValue', 0)
    return
  }

  // 点击不同图标，改变选中状态
  prevIndex = index
  isClicked.value = true
  changeIconBgcImgs(index)
  const newValue = rateLevel.value.isHalf ? index + 0.5 : index + 1
  emit('update:modelValue', newValue)
}
</script>

<style lang="less" scoped>
.rate-icons {
  display: flex;
  align-items: center;
  margin-left: -5px;

  .rate-item {
    width: 32px;
    height: 32px;
    background: center / contain no-repeat;
  }

  .panel-style {
    cursor: pointer;
  }
}
</style>
