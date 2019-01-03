//入口(entry)
//输出(output)

//1.下载webpack 
//npm install webpack -g

//2.本地下载webpack

//3.引入webpack

const webpack = require('webpack');
const path = require('path');

//4. 最终要执行当前文件打包
module.exports = {
    mode:'development' , //development测试环境 production生产环境
    //5.定义你的配置项
    //entry 入口文件
    //entry:{}|pathString  绝对路径
    entry: path.join(__dirname,'src/index.js'),
    //默认输出 dist文件夹 mainjs
    output:{
        filename:'[name].js',//文件名
        path:path.join(__dirname,'build/'),//路径
    }
}


// 6 运行当前webpack配置文件
// webpack 默认查找当前目录下的webpack.config.js 去运行

