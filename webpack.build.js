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
        })
    ],
    watchOptions: {
        aggregateTimeout: 1500,
        poll: 1000,
        ignored: [/node_modules/, /public/]
    }
});