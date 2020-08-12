/*
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @file: setupProxy
 * @time: 2020/7/15 22:55
*/

const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy.createProxyMiddleware('/v1', {
            target: 'http://localhost:1234',
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^/v1': '/v1',
            },
        }),
    );
}
