<template>
  <div class="compt">
    <InputBase :itemData="itemData" :boxHeight="80" />
  </div>
</template>

<script setup>
import InputBase from '@/components/rendering-cpn/input-base/index.vue'

defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped></style>
