const webpack = require("webpack");
const merge = require("merge");
const webpackBaseConfig = require("./webpack.base.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin")

Object.keys(webpackBaseConfig.entry).forEach(function(name) {
    webpackBaseConfig.entry[name] = ['webpack-hot-middleware/client?noInfo=true&reload=true'].concat(webpackBaseConfig.entry[name])
});

module.exports = merge(webpackBaseConfig, {
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css'
        })
    ]
});


