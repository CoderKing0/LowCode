import { computed } from 'vue'
import useCreationStore from '@/stores/creation'
import { ComputedType } from '@/constant/creation'

function useComputed(type, ...args) {
  switch (type) {
    case ComputedType.OPERATE_STORE_DATA:
      return getValueByPath(...args)
    case ComputedType.OPERATE_INPUT_DATA:
      return getReactiveData(...args)
    default:
      return null
  }
}

// 自动调用creationStore中的setCurClickingComptData方法获取和修改当前选中组件的数据
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

// 将props变成可修改的值
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
