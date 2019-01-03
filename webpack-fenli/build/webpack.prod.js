const config = require('../config/index');
const webpackMerge = require('webpack-merge');
const base = require('./webpack.base');
module.exports = webpackMerge(base,{
    mode:config.prod.mode,
    devtool:config.prod.devtool,
    output:{
        path:config.prod.outputPath
    }
});