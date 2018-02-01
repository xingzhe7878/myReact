require('shelljs/global');
var webpack = require('webpack');
var path = require('path');

var vendors = [
    'react',
    'react-dom'
];

//强制删除文件
rm('-rf', path.join('dist'));

module.exports = {
    output: {
        path: path.join(__dirname, "../dist"),
        filename: '[name].min.js',
        library: '[name]',
    },
    entry: {
        vendor: vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'dist/manifest.min.json',
            name: '[name]',
            context: __dirname,
        }),
    ],
};