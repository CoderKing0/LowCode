<template>
  <div class="alert-container">
    <div class="alert-tip">
      <span
        :class="['iconfont', `icon-${type}`]"
        class="alert-icon"
        :style="{ color: alertIconColorMap[type] }"
      ></span>
      <span class="text">{{ message }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import { alertIconColorMap } from '@/assets/data/icon-color'

const props = defineProps({
  message: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'success'
  },
  interval: {
    type: Number,
    default: 3000
  }
})

const { interval } = toRefs(props)

let alertTimer = 0
const alertIsShow = ref(false)
const showAlert = () => {
  clearTimeout(alertTimer)
  alertIsShow.value = true
  alertTimer = setTimeout(() => {
    alertIsShow.value = false
  }, interval)
}

defineExpose({
  showAlert
})
</script>

<style lang="less" scoped>
.alert-container {
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);

  .alert-tip {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    box-sizing: border-box;
    padding: 14px 16px;
    border-radius: 8px;
    background: rgba(32, 32, 32, 0.8);
    font-size: 20px;

    .alert-icon {
      font-size: 20px;
      margin-right: 4px;
    }

    .text {
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>
