import { isNumber } from './determineDataType'

// 通过path修改对象中比较深的某个属性值
function setObjValue(obj, path, value) {
  const pathArr = path.split('.')
  const len = pathArr.length

  pathArr.reduce((prev, cur, index) => {
    if (len - 1 === index) {
      prev[cur] = value
    } else {
      return prev[cur]
    }
  }, obj)
}

// 获取对象中比较深的某个属性值
function getObjValue(obj, path) {
  const pathArr = path.split('.')
  return pathArr.reduce((prev, cur) => {
    return isNumber(prev[cur]) ? Number(prev[cur]) : prev[cur]
  }, obj)
}

export { setObjValue, getObjValue }
