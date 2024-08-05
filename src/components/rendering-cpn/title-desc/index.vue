<template>
  <div class="title-desc">
    {{ titleDesc }}
  </div>
</template>

<script setup>
defineProps({
  titleDesc: {
    type: String,
    default: ''
  }
})
</script>

<style lang="less" scoped>
.title-desc {
  margin-bottom: 4px;
  font-size: 12px;
  color: #888;
}
</style>
