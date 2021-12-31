const path = require('path')

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [path.resolve(__dirname, './src/assets/styles/variable.less')]
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
                '@': path.resolve('src')
            }
        }
    }
}
