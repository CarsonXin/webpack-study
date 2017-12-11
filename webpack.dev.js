let path = require('path');
let merge = require('webpack-merge');
let webpack = require('webpack');
let common = require('./webpack.common');

module.exports = merge(common,{
    output: {
        filename: '[name].js'
    },
    devtool : 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer : {
        /*需要有个index.html*/
        port: 9977,
        contentBase: path.join(__dirname),//本地服务器所加载的页面所在的目录
        // colors: true,//终端中输出结果为彩色,
        filename: '[name].js',
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新,
        compress: true,
        // filename:module.output.filename,
        hot: true,//热替换
        stats: {
            colors: true
        }
    }
});