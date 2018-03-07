# axios
axios封装成公共组件
##1.设置代理
//config/index.js
dev下添加如下代码设置代理
proxyTable: {
  '/api': {
    target: 'http://120.86.xx.xx:3001', // 通过本地服务器将你的请求转发到这个地址
    changeOrigin: true, // 设置这个参数可以避免跨域
    pathRewrite: {
      '/api': '/'
    }
  }
}
##2.进行封装
在components文件夹下新建文件夹axios(api.js,fetch.js,url.js)
文件内有详细注释
