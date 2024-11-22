<template>
  <div v-if="isShowConfirm" class="confirm-popup">
    <div class="popup-mask"></div>
    <div class="confirm-container">
      <div class="header">
        <slot name="header">
          <div class="header-text">{{ title }}</div>
          <div class="header-close" @click="hideConfirm">X</div>
        </slot>
      </div>
      <div class="content">
        <slot name="content">
          <div class="content-tip">{{ message }}</div>
        </slot>
      </div>
      <div class="footer">
        <slot name="footer">
          <div class="confirm-btn" @click="handleConfirm">{{ confirmText }}</div>
          <div v-if="showCancel" class="cancel-btn" @click="handleCancel">{{ cancelText }}</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    default: '提示'
  },
  message: {
    type: String,
    default: ''
  },
  confirmText: {
    type: String,
    default: '确定'
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  showCancel: {
    type: Boolean,
    default: true
  }
})

const isShowConfirm = ref(true)

const showConfirm = () => {
  isShowConfirm.value = true

  return { installConfirmFn, installCancelFn }
}

const hideConfirm = () => {
  isShowConfirm.value = false
}

// 处理确定按钮
let confirmAfter = () => {}
const handleConfirm = () => {
  hideConfirm()
  confirmAfter()
}

// 支持设置确认按钮点击之后的回调
const installConfirmFn = (callback) => {
  confirmAfter = callback
}

// 处理取消按钮
let cancelAfter = () => {}
const handleCancel = () => {
  hideConfirm()
  cancelAfter()
}

// 支持设置取消按钮点击之后的回调
const installCancelFn = (callback) => {
  cancelAfter = callback
}

defineExpose({ showConfirm })
</script>

<style lang="less" scoped>
.confirm-container {
  z-index: 21;
  position: fixed;
  top: 30%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 260px;
  margin: auto;
  box-sizing: border-box;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  color: var(--primary-color);

  .header,
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 46px;
    box-sizing: border-box;
    padding: 10px 20px;
  }

  .header-close {
    font-size: 20px;
    cursor: pointer;
  }

  .content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    border-top: 1px solid #dedfe0;
    border-bottom: 1px solid #dedfe0;
    color: #000;
    font-size: 14px;
  }

  .footer {
    display: flex;
    justify-content: center;
    height: 55px;
    padding: 10px 50px;

    &:has(.cancel-btn) {
      justify-content: space-between;
    }

    .confirm-btn,
    .cancel-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20px;
      padding: 6px 30px;
      border-radius: 6px;
      background-color: var(--primary-color);
      color: #fff;
      cursor: pointer;
    }

    .cancel-btn {
      border: 1px solid var(--secondary-color);
      color: var(--secondary-color);
      background-color: #fff;
    }
  }
}
</style>
