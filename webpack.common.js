let path = require('path');
let glob = require('glob');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let commonChunkPlugin = webpack.optimize.commonChunkPlugin;
// let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: require('./webpack-configs/entry'),

    output: require('./webpack-configs/output'),

    resolve: require('/webpack-configs/resolve'),

    externals: require('./webpack-configs/externals'),

    module: require('/webpack-configs/modules'),

    plugins: [
        /*new HtmlWebpackPlugin({}),*/
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('[name].css').replace('/js', '/css');
            },
            allChunks: true
        }),
        /*new webpack.optimize.CommonsChunkPlugin()*/
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'webpack-runtime',
            filename: 'commons/commons/webpack-runtime.[hash].js',
        }),*/
        new webpack.optimize.CommonsChunkPlugin({
            name: 'static/commons',      // 需要注意的是，chunk的name不能相同！！！
            filename: '[name]/bundle.[chunkhash:8].js',
            minChunks: 3,
        })
    ],

    performance: {
        hints: false
    },

    watch: true
};