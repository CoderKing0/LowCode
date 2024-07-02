<template>
  <div class="panel">
    <h1>panel</h1>
  </div>
</template>

<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped></style>
