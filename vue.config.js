const path = require('path')
const proxy = 'https://decision-ci.icekredit.com'

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [path.resolve(__dirname, './src/assets/styles/variable.less'), path.resolve(__dirname, './src/assets/styles/mixin/index.less')]
        })
}

module.exports = {
    chainWebpack: (config) => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal', 'less']
        types.forEach((type) => addStyleResource(config.module.rule('less').oneOf(type)))
    },

    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve('src'),
                '@c': path.resolve('src/components'),
                '@a': path.resolve('src/assets'),
                '@u': path.resolve('src/utils')
            }
        }
    },
    devServer: {
        proxy: {
            '/ci': {
                target: proxy,
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/ci': '/'
                }
            }
        }
    }
}
