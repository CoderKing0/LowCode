const ruleBase = [{ text: '必填', value: 'required' }]

// 校验规则
const verifyRuleMap = {
  required: { required: true, message: '请输入内容', trigger: 'blur' }
}

// 每个组件的初始化数据
const renderingFieldsDataMap = {
  editInput: {
    prop: 'editInput',
    el: 'el-input',
    defaultValue: '',
    title: '单行输入',
    titleDesc: '',
    placeholder: '',
    verifyArr: [],
    verifyOptions: [...ruleBase]
  },
  editTextArea: {
    prop: 'editTextArea',
    el: 'el-input',
    defaultValue: '',
    title: '多行输入',
    titleDesc: '',
    placeholder: '',
    verifyArr: [],
    verifyOptions: [...ruleBase]
  },
  editInputNumber: {
    prop: 'editInputNumber',
    el: 'el-input-number',
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
    ]
  },
  slider: {
    prop: 'slider',
    el: 'el-slider',
    defaultValue: 0,
    title: '滑动条',
    titleDesc: '',
    range: {
      max: { text: '满意', value: 100 },
      min: { text: '不满意', value: 0 }
    },
    verifyArr: [],
    verifyOptions: [...ruleBase]
  },
  rate: {
    prop: 'rate',
    el: 'el-rate',
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
    verifyOptions: [...ruleBase]
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
  subForm: {},
  richtext: {}
}

export { renderingFieldsDataMap, verifyRuleMap }
