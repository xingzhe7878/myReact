require('shelljs/global');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.build.config');
const ora = require('ora');

let spinner = ora('building for production......');
spinner.start();

webpack(webpackConfig, function(err, stats){
    if(err) throw err
    //在node中显示结果
    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n')
    spinner.stop();
})