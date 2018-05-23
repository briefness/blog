/**
 * 全局常量配置
 */
let httpSrc = 'http://192.168.199.208:56565'
if (process.env.NODE_ENV === 'production') {
  httpSrc = 'http://api2.retailwell.com'
}
const httpUrl = httpSrc + '/v1.0'

export default {
  httpUrl
}
