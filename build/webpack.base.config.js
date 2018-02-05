const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: [
            "./index.js"
        ]
    },
    output: {
        path: path.resolve(__dirname, "../dist"),       //前端文件绝对路径
        publicPath: "./",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({  //将入口文件中的less编译打包成独立文件
                    fallback: 'style-loader',
                    use: 'css-loader!less-loader'
                })
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css'
        })
    ]
}