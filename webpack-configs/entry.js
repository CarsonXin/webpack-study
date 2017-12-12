let path = require('path');
let glob = require('glob');
let entry = {};
glob.sync('./source/**/*.js').forEach(function (name) {
    var start = name.indexOf('source/') + 7, end = name.length - 3;
    var n = name.slice(start, end);
    entry[n] = name
});
// console.log('entry', entry);
module.exports = entry;