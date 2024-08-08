<template>
  <div class="coder-king">
    <img v-show="isShowLogo" class="logo" src="@/assets/img/avatar.jpg" alt="" />
    <div class="name">CoderKingLowCode</div>
  </div>
</template>

<script setup>
defineProps({
  isShowLogo: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="less" scoped>
.coder-king {
  display: flex;
  align-items: center;

  .logo {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .name {
    background: linear-gradient(to right, red, blue);
    background-clip: text;
    color: transparent;
    font-weight: 700;
  }
}
</style>
