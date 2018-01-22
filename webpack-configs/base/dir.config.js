let path = require('path');
let modExp = {};

modExp.staticRootDir = path.resolve(__dirname,'../../');//根目录
modExp.srcRootDir = path.resolve(modExp.staticRootDir,'./public/static');
modExp.vendorDir = path.resolve(modExp.staticRootDir,'./vendor');
modExp.publicDir = path.resolve(modExp.srcRootDir, './public-resource'); // 存放各个页面使用到的公共资源
modExp.componentsDir = path.resolve(modExp.publicDir, './components'); // 存放组件，可以是纯HTML，也可以包含js/css/image等，看自己需要

module.exports = modExp;