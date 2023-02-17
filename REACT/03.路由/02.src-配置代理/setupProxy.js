const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy('/api1', {    // 遇见/api1前缀请求就触发该代理
            target: 'http://localhost:3000',    // 请求转发给谁
            changeOrigin: true, // 控制服务器请求头中host字段
            pathRewrite: { '^/api1': '' }   // 重写请求路径
        }),
        proxy('/api2',{
            arget: 'http://localhost:3001',    
            changeOrigin: true,
            pathRewrite: { '^/api2': '' }
        })
    )
}