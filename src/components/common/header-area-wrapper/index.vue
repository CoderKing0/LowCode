<template>
  <div class="header-area-wrapper">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.header-area-wrapper {
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 60px;
  padding: 0 20px;

  .left,
  .right {
    display: flex;
    align-items: center;
    width: 200px;
  }

  .center {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right {
    justify-content: end;
  }
}
</style>
