let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    rules: [
        {
            test: /\.js$/,
            // exclude: /node_modules/,
            exclude(path) {
                let isNpmModule = !!path.match(/node_modules|public|bootstrap/);
                return isNpmModule
            },
            loader: 'babel-loader', /*这里不能使用'use'*/
            include: [
                path.join(process.cwd(), './source')
            ],
            query: {
                presets: ['env']
            }
        },
        {
            test: /\.css$/,
            // loader: "style-loader!css-loader"
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },
        {
            test: /\.scss$/,
            // loader: 'style-loader!css-loader!sass-loader'/*打包到js文件*/
            loader: ExtractTextPlugin.extract({
                /*分离成单独文件*/
                fallback: "style-loader",
                use: "css-loader!postcss-loader!sass-loader"
            })
        },
        {
            test: /\.vue$/,
            loader: "vue-loader",
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract("css-loader"),
                    // scss: ExtractTextPlugin.extract('vue-style-loader',"css!postcss!sass")
                },
            }
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        },

    ]
};