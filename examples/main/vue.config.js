const path = require('path')

module.exports = {
    devServer: {
        port: 8000,
    },
    chainWebpack: config => {
        config.resolve.alias
        .set('@mx-single-spa/esm', path.join(__dirname, '../../dist/mx-single-spa.esm.js'))
    },
}