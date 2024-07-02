<template>
  <div class="compt">
    <InputBase :itemData="itemData" />
  </div>
</template>

<script setup>
import InputBase from '../input-base/index.vue'

defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped></style>
