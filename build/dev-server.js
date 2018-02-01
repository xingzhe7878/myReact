const webpack = require('webpack');
const webpackConfigServer = require('./webpack.dev.config');
const express = require('express');

//端口
let port = 8082;
//创建一个express应用
let app = express();
//编译文件
let compiler = webpack(webpackConfigServer);

//express中间件,配置内存中的文件系统,在开发阶段用作静态资源服务器
let devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: '/',
    stats: {
        colors: true,
        chunks: false
    }
})

//热更新中间件
let hotMiddleware = require('webpack-hot-middleware')(compiler)

app.use(devMiddleware)
app.use(hotMiddleware)

//静态资源路径
app.use(express.static('./dist'))

module.exports = app.listen(port, function(err) {
    if(err) {
        console.log(err)
        return
    }
    var url = 'http://localhost:'+port+'/index.html'
    console.log('listening at ' + url + '\n')
})