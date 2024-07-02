const renderingFieldsDataMap = {
  editInput: {
    el: 'el-input',
    value: '',
    title: '单行输入',
    titleDesc: '',
    placeholder: '请输入',
    verify: {
      required: false
    }
  },
  editTextArea: {
    el: 'el-input',
    value: '',
    title: '多行输入',
    titleDesc: '',
    placeholder: '请输入',
    verify: {
      required: false
    }
  },
  editInputNumber: {
    el: 'el-input-number',
    value: '',
    title: '数字输入',
    titleDesc: '',
    placeholder: '请输入',
    verify: {
      required: false
    }
  },
  slider: {
    el: 'el-slider',
    value: 0,
    title: '滑动条',
    titleDesc: '',
    range: {
      max: { text: '满意', value: 100 },
      min: { text: '不满意', value: 0 }
    },
    verify: {
      required: false
    }
  },
  rate: {
    el: 'el-rate',
    value: 0,
    title: '评分',
    titleDesc: '',
    style: 1,
    starLevel: {
      isHalf: false,
      count: 5,
      eachScore: 1
    },
    verify: {
      required: false
    }
  },
  illustrationText: {
    el: 'span',
    value: '',
    title: '说明文字',
    verify: {
      required: false
    }
  },
  radioButton: {
    el: 'el-radio',
    value: '',
    title: '单选',
    titleDesc: '',
    options: [
      { text: '选项一', type: 1 },
      { text: '选项二', type: 2 },
      { text: '选项三', type: 3 }
    ],
    verify: {
      required: false
    }
  },
  checkList: {
    el: 'el-checkbox',
    value: [],
    title: '多选',
    titleDesc: '',
    options: [
      { text: '选项一', type: 1 },
      { text: '选项二', type: 2 },
      { text: '选项三', type: 3 }
    ],
    verify: {
      required: false
    }
  },
  selectBox: {
    el: 'el-select',
    value: '',
    title: '下拉框',
    titleDesc: '',
    placeholder: '请选择',
    options: [
      { text: '选项一', type: 1 },
      { text: '选项二', type: 2 },
      { text: '选项三', type: 3 }
    ],
    verify: {
      required: false
    }
  },
  selectMultiBox: {
    el: 'el-select',
    value: [],
    title: '下拉复选框',
    titleDesc: '',
    placeholder: '请选择',
    options: [
      { text: '选项一', type: 1 },
      { text: '选项二', type: 2 },
      { text: '选项三', type: 3 }
    ],
    verify: {
      required: false
    }
  },
  date: {
    el: 'el-date-picker',
    value: '',
    title: '日期',
    titleDesc: '',
    type: 'date',
    format: 'yyyy-MM-dd',
    placeholder: '请选择日期',
    verify: {
      required: false
    }
  },
  image: {
    el: 'el-upload',
    value: '',
    title: '图片',
    placeholder: '请上传图片',
    titleDesc: '',
    verify: {
      required: false
    }
  },
  subForm: {},
  richtext: {}
}

export default renderingFieldsDataMap
