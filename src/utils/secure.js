// 校验当前数据在进行JSON操作时是否合法
function isValidJSON(data) {
  try {
    const parsed = JSON.parse(data)
    if (parsed === null || typeof parsed !== 'object') return false
  } catch (e) {
    return false
  }
  return true
}

export { isValidJSON }
