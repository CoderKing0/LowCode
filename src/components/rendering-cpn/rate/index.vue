<template>
  <div class="rate">
    <TitleArea :title="itemData.title" level="sixthLevel" />
    <TitleDesc :titleDesc="itemData.titleDesc" />
    <div class="content">
      <RateIcon
        :iconCount="itemData.rateLevel.count"
        :iconKind="itemData.activeKind"
        :imgKinds="itemData.imgKinds"
      />
    </div>
  </div>
</template>

<script setup>
import TitleArea from '@/components/common/title-area/index.vue'
import TitleDesc from '@/components/rendering-cpn/title-desc/index.vue'
import RateIcon from '@/components/common/rate-icon/index.vue'

defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped></style>
