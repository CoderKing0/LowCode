<template>
  <div class="rate-icons">
    <template v-for="(item, index) in iconCount" :key="item">
      <div
        class="rate-item"
        :class="{ 'panel-style': isPanel }"
        :style="{ backgroundImage: `url(${bgcImg[index]})` }"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave"
        @click="handleClick(index)"
      ></div>
    </template>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  iconCount: {
    type: Number,
    default: 5
  },
  iconKind: {
    type: String,
    default: 'star'
  },
  isPanel: {
    type: Boolean,
    default: false
  },
  imgKinds: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['iconMouseEnter', 'iconClick', 'iconMouseLeave'])

const bgcImg = ref([])

/*
  iconKind: 图标种类（star、heart、flower、fire）
  imgKind: 图片种类（empty、whole、hover、hover-half）
*/
watchEffect(async () => {
  const imgs = []
  for (let imgKind of props.imgKinds) {
    const imgInstance = await import(`@/assets/img/rate/${props.iconKind}-${imgKind}.png`)
    imgs.push(imgInstance.default)
  }
  bgcImg.value = imgs
})

const handleMouseEnter = (index) => {
  emit('iconMouseEnter', index)
}

const handleMouseLeave = () => {
  emit('iconMouseLeave')
}

const handleClick = (index) => {
  emit('iconClick', index)
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
