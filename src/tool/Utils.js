/**
 * 判断是否为字符串
 * @Author   Raychar
 * @DateTime 2017-06-15
 * @param    {object}   obj 判断对象
 * @return   {Boolean}      判断结果
 */
function isString (obj) {
  return (typeof obj === 'string') && obj.constructor === String
}
/**
 * 判断是否为整数
 * @Author   Raychar
 * @DateTime 2017-06-15
 * @param    {object}   obj 判断对象
 * @return   {Boolean}      判断结果
 */
function isInteger (obj) {
  return Math.floor(obj) === obj
}
/**
 * 获取路由的名称，level从1开始
 * @Author   Raychar
 * @DateTime 2017-06-15
 */
function getRouteName (fullRoute, level) {
  if (this.isString(fullRoute) && this.isInteger(level)) {
    let name = fullRoute.split('/')[level]
    return name === undefined ? '' : name
  }
}

export default {
  isInteger,
  isString,
  getRouteName
}
