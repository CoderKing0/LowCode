import { defineStore } from 'pinia'

const useCreationStore = defineStore('creation', {
  state: () => ({
    formTitle: '自定义标题', // 项目标题
    curSelectedComptList: [], // 当前选中的组件列表
    draggingCompt: null, // 当前拖拽的组件
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
    // 更新当前选中的组件列表
    setCurSelectedComptList(compt, index) {
      if (compt) {
        this.curSelectedComptList.push(compt)
        return
      }

      this.curSelectedComptList.splice(index, 0, this.draggingCompt)
    }
  }
})

export default useCreationStore
