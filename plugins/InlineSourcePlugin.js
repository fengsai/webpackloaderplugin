const HtmlWebpackPlugin = require('html-webpack-plugin')
class InlineSourcePlugin {

    constructor({ match }) {
        this.match = match;
    }
    apply(compiler) {
        compiler.plugin('compilation', (compilation) => {
            console.log('The compiler is starting a new compilation...');

            compilation.plugin(
                'html-webpack-plugin-before-html-processing',
                (data, cb) => {
                   console.log(data)

                    cb(null, data)
                }
            )
        })
    }

}

module.exports = InlineSourcePlugin;