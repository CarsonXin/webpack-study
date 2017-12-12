let path = require('path');

/*path 取的是相对路径*/
module.exports = {
    path: path.resolve(__dirname, '../public'),
    publicPath: '/public/',
    filename: '[name].js'
};