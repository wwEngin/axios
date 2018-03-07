import axios from 'axios' //  引入axios

export function fetch (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 30 * 1000 // 30秒超时
    })
    instance(options)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        console.log('请求异常信息：' + error)
        reject(error)
      })
  })
}
