

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  devServer: {
    open: true, //浏览器自动打开页面
    host: "localhost", //本地服务器访问的路径
    port: 8080, //本地服务器访问的端口
    proxy: {
      '/article': {
        target: 'http://jiangwei.online:8080',
        changeOrigin: true, //是否跨域，设置为true;(必须)
      },
    }
  },

  lintOnSave: false
};

