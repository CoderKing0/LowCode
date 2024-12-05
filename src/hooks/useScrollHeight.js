import { computed } from 'vue'

export default function useScrollHeight(actingStyleTemplate) {
  const curTemplateId = computed(() => actingStyleTemplate.value.templateId)

  const scrollAreaHeight = computed(
    () => `calc(100vh - ${curTemplateId.value === 1 ? '243px' : '363px'})`
  )

  return {
    scrollAreaHeight
  }
}
