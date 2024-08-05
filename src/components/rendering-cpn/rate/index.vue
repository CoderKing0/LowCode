<template>
  <div class="rate">
    <TitleArea :title="itemData.title" level="sixthLevel" />
    <TitleDesc :titleDesc="itemData.titleDesc" />
    <div class="content">
      <div
        v-for="item in itemData.starLevel.count"
        :key="item"
        class="rate-item"
        :style="{ backgroundImage: `url(${bgcImg})` }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import TitleArea from '@/components/common/title-area/index.vue'
import TitleDesc from '@/components/rendering-cpn/title-desc/index.vue'

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

const bgcImg = ref(null)
onMounted(async () => {
  const imgInstance = await import(`@/assets/img/${props.itemData.style}-empty.png`)
  bgcImg.value = imgInstance.default
})
</script>

<style lang="less" scoped>
.rate {
  .content {
    display: flex;
    align-items: center;
    margin-left: -5px;

    .rate-item {
      width: 32px;
      height: 32px;
      background: center / contain no-repeat;
    }
  }
}
</style>
