import EditInput from './edit-input/compt.vue'
import EditInputPanel from './edit-input/panel.vue'
import EditTextArea from './edit-text-area/compt.vue'
import EditTextAreaPanel from './edit-text-area/panel.vue'
import EditInputNumber from './edit-input-number/compt.vue'
import EditInputNumberPanel from './edit-input-number/panel.vue'
import Slider from './slider/compt.vue'
import SliderPanel from './slider/panel.vue'

const componentMap = new Map()
componentMap.set('editInput', EditInput)
componentMap.set('editTextArea', EditTextArea)
componentMap.set('editInputNumber', EditInputNumber)
componentMap.set('slider', Slider)

const componentPanelMap = new Map()
componentPanelMap.set('editInput', EditInputPanel)
componentPanelMap.set('editTextArea', EditTextAreaPanel)
componentPanelMap.set('editInputNumber', EditInputNumberPanel)
componentPanelMap.set('slider', SliderPanel)

export { componentMap, componentPanelMap }
