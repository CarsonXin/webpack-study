let path = require('path');
let glob = require('glob');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
// let HtmlWebpackPlugin = require('html-webpack-plugin');
let getEntry = function () {
    let entry = {};
    //首先我们先读取我们的开发目录
    glob.sync('./source/**/*.js').forEach(function (name) {
        var start = name.indexOf('source/') + 7, end = name.length - 3;
        var n = name.slice(start, end);
        entry[n] = name
    });
    console.log('entry', entry);
    return entry;
};

module.exports = {
    entry: getEntry(),
    output: {
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: '[name].js'
    },
    resolve: {
        alias: {
            'vue$': './public/static/static/vue/2.3.4/vue.min.js',
            'swal$': './public/static/static/sweetalert/1.1.3/sweetalert.min.js',
            'sweetAlert$': './public/static/static/sweetalert/1.1.3/sweetalert.min.js',
        }
    },
    externals: {
        jquery: 'window.jQuery||window.$',
        vue: 'window.Vue',
        lodash: 'window._'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                exclude(path){
                    let isNpmModule = !!path.match(/node_modules|public/);
                    return isNpmModule
                },
                loader: 'babel-loader', /*这里不能使用'use'*/
                include: [
                    // 只去解析运行目录下的 source 和 demo 文件夹
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
                loader: "vue-loader"
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        /*new HtmlWebpackPlugin({}),*/
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('[name].css').replace('/js', '/css');
            },
            allChunks: true
        }),
        /*new webpack.optimize.CommonsChunkPlugin()*/
    ],
    performance: {
        hints: false
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
        ignored: [/node_modules/, /public/]
    }
};