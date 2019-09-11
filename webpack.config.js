const path = require("path")

const webpack = require("webpack")

const DonePlugin = require("./plugins/DonePlugin")
const AsyncPlugin = require("./plugins/AsyncPlugin")
const FileListPlugin = require("./plugins/FileListPlugin")
const htmlWebpackPlugin = require("html-webpack-plugin")
const miniCssPlugin=require("mini-css-extract-plugin")
const InlineSourcePlugin = require("./plugins/InlineSourcePlugin")

/**
 * loader几种查找方式
*/
// webpack({
//     resolveLoader:{
//         alias
//     }
// })
module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'loader')]
        //别名的方式
        // alias:{
        //     "loader1":path.resolve(__dirname,'loader','loade1.js')
        // }
    },
    module: {
        //loader的分类有pre{前置} post{后置} notrmal{正常}
        //loader 的执行顺序 pre + normal + inline + post
        rules: [
            {
                test:/\.css$/,
                use:[
                    miniCssPlugin.loader,
                    'css-loader'
                ]
            }
            // {
            //     test:/\.js$/,
            //     use:{
            //         loader:"banner-loader",
            //         options:{
            //             //text:"nihao",
            //             //filename:path.resolve(__dirname,'banner.js')
            //         }
            //     }
            // }
            // {
            //     test:/\.js$/,
            //     use:{
            //         loader:"babel-loader",
            //         options:{
            //             "presets":[
            //                 "@babel/preset-env"
            //             ]
            //         }
            //     }
            // }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html",
            filename:'index.html'
        }),
        new FileListPlugin({
            filename:'list.md'
        }),
        new miniCssPlugin({
            filename:'style.css'
        }),
        new InlineSourcePlugin({
            match:/\.(js|css)$/
        })
    ]
}