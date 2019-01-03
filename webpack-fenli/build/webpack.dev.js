const config = require('../config/index');
const webpackMerge = require('webpack-merge');
const base = require('./webpack.base');
module.exports = webpackMerge(base,{
    mode:config.dev.mode,
    devtool:config.dev.devtool,
    devServer:{
        port:config.dev.port,
        open:true
    }
})