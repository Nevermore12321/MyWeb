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
        proxy.createProxyMiddleware('/api', {
            target: 'http://localhost:6789',
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
        }),
    );
}
