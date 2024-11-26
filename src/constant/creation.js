const OperateType = {
  PUSH: 'push',
  INSERT: 'insert',
  DELETE: 'delete',
  COPY: 'copy'
}

/**
 * OPERATE_STORE_DATA: 传入想要获得的creationStore中当前点击组件的数据路径，获取数据，将其变成双向绑定的数据
 * OPERATE_INPUT_DATA: 将传入的普通数据变成双向绑定的数据
 */
const ComputedType = {
  OPERATE_STORE_DATA: 'operateStoreData',
  OPERATE_INPUT_DATA: 'operateInputData'
}

export { OperateType, ComputedType }
