module.exports = {
    configureWebpack: (config) => {

        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        }
    },
    devServer: {
        open: true,
        host: "localhost",
        port: 8080,
        proxy: {
            '/article': {
                target: 'http://47.113.121.50/api/',
            },
        }
    },

    lintOnSave: false
};