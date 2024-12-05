import _ from 'lodash'
import { defineStore } from 'pinia'
import { postFormConfig } from '@/service'
import { OperateType } from '@/constant/creation'
import { setObjValue, getObjValue } from '@/utils/setOrGetObjValue'
import templateData from '@/components/material-cpn/style-wrapper/style-data'

const useCreationStore = defineStore('creation', {
  state: () => ({
    formTitle: '自定义标题', // 项目标题
    curComptId: 0, // 当前表单新增组件的id（递增）
    curOrigin: 'rendering', // 当前操作的是渲染区组件还是子表单组件: 'rendering' | 被操作的子表单Id
    curSelectedComptList: [], // 当前选中的组件列表
    draggingCompt: null, // 当前拖拽的组件
    clickingComptTitle: '', // 当前点击的组件标题
    clickingCompt: null, // 当前点击的组件
    actingStyleTemplate: templateData[0] // 当前激活的样式模板
  }),
  actions: {
    // 更新当前正在拖拽的组件
    setCurDraggingCompt(compt) {
      this.draggingCompt = compt
    },
    // 更新当前正在点击的组件
    setCurClickingCompt(compt) {
      this.clickingCompt = compt
      this.clickingComptTitle = compt?.title || '字段属性'
    },
    // 更新当前选中的组件列表之前，需要先设置即将被操作的对象是渲染区还是子表单
    setCurOperatedOrigin(origin) {
      this.curOrigin = origin
    },
    // 更新选中组件列表之前的前置操作
    updateCurSelectedComptListBefore(type, compt) {
      // 非删除操作时，需要先设置组件id
      if (type !== OperateType.DELETE) {
        this.curComptId += 1
        compt.id = this.curComptId
      }

      // 获取即将被操作的组件列表
      let curComptList = this.curSelectedComptList
      if (this.curOrigin !== 'rendering') {
        const curSubForm = this.curSelectedComptList.find((item) => item.id === this.curOrigin)
        curComptList = curSubForm.children || []

        if (type !== OperateType.DELETE) {
          compt.id = `${curSubForm.id}_${this.curComptId}`
        }
      }

      return curComptList
    },
    // 更新当前选中的组件列表
    setCurSelectedComptList(type, index, compt) {
      if (!compt) {
        compt = this.draggingCompt
      }

      const curComptList = this.updateCurSelectedComptListBefore(type, compt)

      switch (type) {
        case OperateType.PUSH:
          curComptList.unshift(compt)
          break
        case OperateType.DELETE:
          curComptList.splice(index, 1)

          // 当前删除组件为选中组件时，配置面板恢复初始状态
          if (this.clickingCompt.id === compt.id) {
            this.setCurClickingCompt(null)
          }
          break
        case OperateType.INSERT:
          curComptList.splice(index, 0, this.draggingCompt)
          break
        case OperateType.COPY:
          curComptList.splice(index, 0, compt)
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
    },
    // 更新当前激活的样式模板
    setActingStyleTemplate(templateId) {
      this.actingStyleTemplate = templateData.find((item) => item.templateId === templateId)
    },
    // 深拷贝当前选中组件列表作为预览页表单配置
    getPreviewFormConfig() {
      return _.cloneDeep(this.curSelectedComptList)
    },
    // 提交配置的表单数据
    submitFormConfig() {
      const param = {
        formTitle: this.formTitle,
        formComptConfig: JSON.stringify(this.curSelectedComptList),
        formStyleTemplate: JSON.stringify(this.actingStyleTemplate)
      }

      // 打开注释即可提交表单数据
      // postFormConfig(param)
      console.log(param, '提交的表单数据')
    }
  }
})

export default useCreationStore
