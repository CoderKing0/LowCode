const ruleBase = [{ text: '必填', value: 'required' }]

// 校验规则
const verifyRuleMap = {
  required: { required: true, message: '请输入内容', trigger: 'blur' }
}

// 每个组件的初始化数据
const renderingFieldsDataMap = {
  editInput: {
    prop: 'editInput',
    title: '单行输入',
    titleDesc: '',
    placeholder: '',
    defaultValue: '',
    verifyArr: [],
    verifyOptions: [...ruleBase],
    // 预览页渲染组件的想关信息
    elInfo: {
      el: 'el-input' // el：element-ui组件的名称，type:输入框类型
    }
  },
  editTextArea: {
    prop: 'editTextArea',
    title: '多行输入',
    titleDesc: '',
    placeholder: '',
    defaultValue: '',
    verifyArr: [],
    verifyOptions: [...ruleBase],
    elInfo: {
      el: 'el-input',
      type: 'textarea'
    }
  },
  editInputNumber: {
    prop: 'editInputNumber',
    title: '数字输入',
    titleDesc: '',
    placeholder: '',
    defaultValue: '',
    verifyArr: [],
    verifyOptions: [
      ...ruleBase,
      {
        text: '限定数值范围',
        value: { option: 'numberRange', range: { max: null, min: null } }
      }
    ],
    elInfo: {
      el: 'el-input',
      type: 'number'
    }
  },
  slider: {
    prop: 'slider',
    title: '滑动条',
    titleDesc: '',
    defaultValue: 0,
    range: {
      max: { text: '满意', value: 100 },
      min: { text: '不满意', value: 0 }
    },
    verifyArr: [],
    verifyOptions: [...ruleBase],
    elInfo: {
      el: 'Slider'
    }
  },
  rate: {
    prop: 'rate',
    title: '评分',
    titleDesc: '',
    defaultValue: 0,
    allKinds: ['star', 'heart', 'fire', 'flower'],
    activeKind: 'star',
    imgKinds: ['empty', 'empty', 'empty', 'empty', 'empty'],
    rateLevel: {
      isHalf: false,
      count: 5,
      eachScore: 1
    },
    verifyArr: [],
    verifyOptions: [...ruleBase],
    elInfo: {
      el: 'Rate'
    }
  },
  illustrationText: {
    prop: 'illustrationText',
    el: 'span',
    title: '说明文字',
    defaultValue: '',
    verifyArr: [],
    verifyOptions: [...ruleBase]
  },
  radioButton: {
    prop: 'radioButton',
    el: 'el-radio',
    title: '单选',
    titleDesc: '',
    defaultValue: '',
    options: [
      { text: '选项一', type: 1 },
      { text: '选项二', type: 2 },
      { text: '选项三', type: 3 }
    ],
    verifyArr: [],
    verifyOptions: [...ruleBase]
  },
  checkList: {
    prop: 'checkList',
    el: 'el-checkbox',
    title: '多选',
    titleDesc: '',
    defaultValue: [],
    options: [
      { text: '选项一', type: 1 },
      { text: '选项二', type: 2 },
      { text: '选项三', type: 3 }
    ],
    verifyArr: [],
    verifyOptions: [...ruleBase]
  },
  selectBox: {
    prop: 'selectBox',
    el: 'el-select',
    title: '下拉框',
    titleDesc: '',
    placeholder: '请选择',
    defaultValue: '',
    options: [
      { text: '选项一', type: 1 },
      { text: '选项二', type: 2 },
      { text: '选项三', type: 3 }
    ],
    verifyArr: [],
    verifyOptions: [...ruleBase]
  },
  selectMultiBox: {
    prop: 'selectMultiBox',
    el: 'el-select',
    title: '下拉复选框',
    titleDesc: '',
    placeholder: '请选择',
    defaultValue: [],
    options: [
      { text: '选项一', type: 1 },
      { text: '选项二', type: 2 },
      { text: '选项三', type: 3 }
    ],
    verifyArr: [],
    verifyOptions: [...ruleBase]
  },
  date: {
    prop: 'date',
    el: 'el-date-picker',
    title: '日期',
    titleDesc: '',
    placeholder: '请选择日期',
    defaultValue: '',
    type: 'date',
    format: 'yyyy-MM-dd',
    verifyArr: [],
    verifyOptions: [...ruleBase]
  },
  image: {
    prop: 'image',
    el: 'el-upload',
    title: '图片',
    titleDesc: '',
    placeholder: '请上传图片',
    defaultValue: '',
    verifyArr: [],
    verifyOptions: [...ruleBase]
  },
  subForm: {
    prop: 'subForm',
    title: '子表单',
    titleDesc: '',
    placeholder: '',
    defaultValue: '',
    verifyArr: [],
    verifyOptions: [...ruleBase],
    children: [],
    elInfo: {
      el: 'el-input'
    }
  },
  richtext: {}
}

export { renderingFieldsDataMap, verifyRuleMap }
