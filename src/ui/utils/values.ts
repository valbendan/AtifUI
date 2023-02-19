// 解析 float 字符串为 字符 [注意: 这个是用于展示的，并不是为了在程序逻辑中使用]
export function doParseFloatValue(s: string, originValue: number): number {
  const value = parseFloat(s)
  if (!isNaN(value)) {
    return value
  }
  if (s == "") {
    return 0
  }
  return originValue
}

