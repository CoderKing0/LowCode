import useCreationStore from '@/stores/creation'
import { computed } from 'vue'

function useComputed(type, ...args) {
  switch (type) {
    case 1:
      return getValueByPath(...args)
    case 2:
      return getReactiveData(...args)
    default:
      return null
  }
}

/**
 * type = 1
 * 自动调用creationStore中的setCurClickingComptData方法获取和修改当前选中组件的数据
 */
const creationStore = useCreationStore()

function getValueByPath(path) {
  return computed({
    set(newValue) {
      creationStore.setCurClickingComptData(path, newValue)
    },
    get() {
      return creationStore.getCurClickingComptData(path)
    }
  })
}

/**
 * type = 2
 * 将props变成可修改的值
 */
function getReactiveData(data, emit) {
  return computed({
    set(newValue) {
      emit('input', newValue)
    },
    get() {
      return data
    }
  })
}

export default useComputed
