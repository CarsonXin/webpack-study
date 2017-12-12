let path = require('path');
let glob = require('glob');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let commonChunkPlugin = webpack.optimize.commonChunkPlugin;
// let HtmlWebpackPlugin = require('html-webpack-plugin');
let getEntry = function () {
    let entry = {};
    //首先我们先读取我们的开发目录
    glob.sync('./source/**/*.js').forEach(function (name) {
        // console.log("name", name);
        var start = name.indexOf('source/') + 7, end = name.length - 3;
        var n = name.slice(start, end);
        // console.log("n start", n);
        // n = n.slice(0, n.lastIndexOf('/'));/!*不需要这一行*!/
        // console.log("n end",n);
        entry[n] = name
    });
    //保存各个组件的入口 entry[n] = name;
    console.log('entry', entry);
    /**
     *      entry = {
     *                'crowd/index' : './source/crowd/index/index.js',
     *                'index/index' : './source/index/index/index.js'
     *              }
     **/
    //最后返回entry  给 webpack的entry
    return entry;
};

module.exports = {
    entry: require('./webpack-configs/entry'),
    // entry: getEntry(),
    output: require('./webpack-configs/output'),
    /*output: {
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: '[name].js'
    },*/
    resolve: {
        alias: {
            'vue$': './public/static/static/vue/2.3.4/vue.min.js',
            'swal$': './public/static/static/sweetalert/1.1.3/sweetalert.min.js',
            'sweetAlert$': './public/static/static/sweetalert/1.1.3/sweetalert.min.js',
        }
    },
    externals: require('./webpack-configs/externals'),
    module: {
        rules: [
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                exclude(path) {
                    let isNpmModule = !!path.match(/node_modules|public/);
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
    watch: true,
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
        ignored: [/node_modules/, /public/]
    }
};