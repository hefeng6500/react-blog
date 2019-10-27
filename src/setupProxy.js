const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/api', {
        target: 'http://127.0.0.1:3001/',
        pathRewrite: {
            "^/api": "/api"
        }
    }));
    app.use(proxy('/github', {
        target: 'https://api.github.com',
        changeOrigin: true,
    }));
};