const ruleBase = [{ text: '必填', value: 'required' }]

// 校验规则
const verifyRuleMap = {
  required: { required: true, message: '请输入内容', trigger: 'blur' }
}

// 每个组件的初始化数据
const renderingFieldsDataMap = {
  editInput: {
    prop: 'editInput',
    defaultValue: '',
    title: '单行输入',
    titleDesc: '',
    placeholder: '',
    verifyArr: [],
    verifyOptions: [...ruleBase],
    // 预览页渲染组件的想关信息
    elInfo: {
      el: 'el-input' // el：element-ui组件的名称，type:输入框类型
    }
  },
  editTextArea: {
    prop: 'editTextArea',
    defaultValue: '',
    title: '多行输入',
    titleDesc: '',
    placeholder: '',
    verifyArr: [],
    verifyOptions: [...ruleBase],
    elInfo: {
      el: 'el-input',
      type: 'textarea'
    }
  },
  editInputNumber: {
    prop: 'editInputNumber',
    defaultValue: '',
    title: '数字输入',
    titleDesc: '',
    placeholder: '',
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
    defaultValue: 0,
    title: '滑动条',
    titleDesc: '',
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
    defaultValue: 0,
    title: '评分',
    titleDesc: '',
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
    defaultValue: '',
    title: '说明文字',
    verifyArr: [],
    verifyOptions: [...ruleBase]
  },
  radioButton: {
    prop: 'radioButton',
    el: 'el-radio',
    defaultValue: '',
    title: '单选',
    titleDesc: '',
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
    defaultValue: [],
    title: '多选',
    titleDesc: '',
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
    defaultValue: '',
    title: '下拉框',
    titleDesc: '',
    placeholder: '请选择',
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
    defaultValue: [],
    title: '下拉复选框',
    titleDesc: '',
    placeholder: '请选择',
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
    defaultValue: '',
    title: '日期',
    titleDesc: '',
    type: 'date',
    format: 'yyyy-MM-dd',
    placeholder: '请选择日期',
    verifyArr: [],
    verifyOptions: [...ruleBase]
  },
  image: {
    prop: 'image',
    el: 'el-upload',
    defaultValue: '',
    title: '图片',
    placeholder: '请上传图片',
    titleDesc: '',
    verifyArr: [],
    verifyOptions: [...ruleBase]
  },
  subForm: {
    prop: 'subForm',
    defaultValue: '',
    title: '子表单',
    titleDesc: '',
    placeholder: '',
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
