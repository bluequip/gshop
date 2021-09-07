module.exports = {

    devServer: {
        proxy: {
            '/api': {
                target: "http://127.0.0.1",// 后端接口
                changeOrigin: true, // 是否跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }

}

