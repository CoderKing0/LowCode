import { defineStore } from 'pinia'
import { setObjValue, getObjValue } from '@/utils/setOrGetObjValue'
import { OperateType } from '@/constant/creation'

const useCreationStore = defineStore('creation', {
  state: () => ({
    formTitle: '自定义标题', // 项目标题
    curSelectedComptList: [], // 当前选中的组件列表
    draggingCompt: null, // 当前拖拽的组件
    clickingComptTitle: '',
    clickingCompt: null // 当前点击的组件
  }),
  actions: {
    // 更新当前正在拖拽的组件
    setCurDraggingCompt(compt) {
      this.draggingCompt = compt
    },
    // 更新当前正在点击的组件
    setCurClickingCompt(compt) {
      this.clickingCompt = compt
    },
    // 更新当前正在点击的组件标题
    setCurClickingComptTitle(title) {
      this.clickingComptTitle = title
    },
    // 更新当前选中的组件列表
    setCurSelectedComptList(type, index, compt) {
      switch (type) {
        case OperateType.PUSH:
          this.curSelectedComptList.push(compt)
          break
        case OperateType.DELETE:
          this.curSelectedComptList.splice(index, 1)
          break
        case OperateType.INSERT:
          this.curSelectedComptList.splice(index, 0, this.draggingCompt)
          break
        case OperateType.COPY:
          this.curSelectedComptList.splice(index, 0, compt)
      }
    },
    // 通过右侧面板更新选中的组件数据
    setCurClickingComptData(path, value) {
      if (!this.clickingCompt) return

      // 设置较深路径的值
      setObjValue(this.clickingCompt, path, value)
    },
    // 获取当前选中组件的数据
    getCurClickingComptData(path) {
      if (!this.clickingCompt) return

      // 获取较深路径的值
      return getObjValue(this.clickingCompt, path)
    }
  }
})

export default useCreationStore
