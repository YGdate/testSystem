module.exports = {
  lintOnSave: false,
  devServer: {
    host: 'localhost',
    port: '8080',
    https: false,
    hotOnly: false,
    proxy: {
      "server": {
        target: 'http://47.113.121.50/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/server': ''
        }
      }
    }
  }
}
