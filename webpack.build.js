let merge = require('webpack-merge');
let webpack = require('webpack');
let common = require('./webpack.common');
// let HtmlWebpackPlugin = require('html-webpack-plugin');/*???*/
module.exports = merge(common, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'static/commons',      // 需要注意的是，chunk的name不能相同！！！
            filename: '[name]/bundle.[chunkhash:8].js',
            minChunks: 3,
        })
    ],
    watchOptions: {
        aggregateTimeout: 1500,
        poll: 1000,
        ignored: [/node_modules/, /public/]
    }
});