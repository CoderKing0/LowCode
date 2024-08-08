<template>
  <HeaderAreaWrapper>
    <template #left>
      <div class="back" @click="handleBack">返回</div>
    </template>
    <template #center>
      <CoderKing :isShowLogo="false" />
    </template>
  </HeaderAreaWrapper>
</template>

<script setup>
import CoderKing from '@/components/common/coder-king/index.vue'
import HeaderAreaWrapper from '@/components/common/header-area-wrapper/index.vue'

const emit = defineEmits(['back'])

const handleBack = () => {
  emit('back')
}
</script>

<style lang="less" scoped>
.header-area-wrapper {
  .back {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 36px;
    border-radius: 20px;
    box-shadow: 0 4px 10px 0 rgba(0, 108, 226, 0.2);
    color: #557ca7;
    background-color: #fff;
    cursor: pointer;
  }

  .coder-king {
    height: 40px;
    padding: 0 20px;
    border-radius: 20px;
    box-shadow: 0 4px 10px 0 rgba(0, 108, 226, 0.2);

    :deep(.name) {
      font-size: 20px;
    }
  }
}
</style>
