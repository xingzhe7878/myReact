const path = require("path");

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
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    }
}