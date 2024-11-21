<template>
  <Transition name="fade">
    <div v-if="alertIsShow" class="alert-container">
      <div class="alert-tip">
        <span
          :class="['iconfont', `icon-${type}`]"
          class="alert-icon"
          :style="{ color: alertIconColorMap[type] }"
        ></span>
        <span class="text">{{ message }}</span>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import { alertIconColorMap } from '@/assets/data/icon-color'

const props = defineProps({
  message: {
    type: String,
    default: '提示内容'
  },
  // type: 'success' | 'info' | 'warning' | 'error' | 'help' | 'loading' | 'wait'
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

const alertIsShow = ref(false)
const showAlert = () => {
  alertIsShow.value = true
  setTimeout(() => {
    alertIsShow.value = false
  }, interval.value)
}

defineExpose({
  showAlert
})
</script>

<style lang="less" scoped>
.fade-enter-active {
  animation: fadeAnim 0.8s ease;
}

.fade-leave-active {
  animation: fadeAnim 0.8s ease reverse;
}

@keyframes fadeAnim {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.alert-container {
  z-index: 99999;
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
