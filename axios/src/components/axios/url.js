export default {
  //   接口代理配置
  Hallowmas: '/api',
  search: `/api/stocks/search`
}

//   也可以像下面这样，区分环境或者区分服务器等等
// let service = 'dev'
// let api = ''
// if (service === 'dev') {
//   api = '/stomatology/patient'
// } else if (service === 'prod') {
//   api = '/proxy/client'
// }
// export default {
//   search: `${api}/stocks/search`
// }
