import EditInput from '@/components/rendering-cpn/edit-input/index.vue'
import EditInputPanel from '@/components/configuration-cpn/edit-input/index.vue'
import EditTextArea from '@/components/rendering-cpn/edit-text-area/index.vue'
import EditTextAreaPanel from '@/components/configuration-cpn/edit-text-area/index.vue'
import EditInputNumber from '@/components/rendering-cpn/edit-input-number/index.vue'
import EditInputNumberPanel from '@/components/configuration-cpn/edit-input-number/index.vue'
import Slider from '@/components/rendering-cpn/slider/index.vue'
import SliderPanel from '@/components/configuration-cpn/slider/index.vue'
import Rate from '@/components/rendering-cpn/rate/index.vue'

const componentMap = new Map()
componentMap.set('editInput', EditInput)
componentMap.set('editTextArea', EditTextArea)
componentMap.set('editInputNumber', EditInputNumber)
componentMap.set('slider', Slider)
componentMap.set('rate', Rate)

const componentPanelMap = new Map()
componentPanelMap.set('editInput', EditInputPanel)
componentPanelMap.set('editTextArea', EditTextAreaPanel)
componentPanelMap.set('editInputNumber', EditInputNumberPanel)
componentPanelMap.set('slider', SliderPanel)

export { componentMap, componentPanelMap }
