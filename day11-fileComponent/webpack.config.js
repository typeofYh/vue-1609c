const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Vueloader = require('vue-loader/lib/plugin')
module.exports = {
    //多入口文件
    entry:{
        app:path.join(__dirname,'src/app.js')
    },
    output:{
        filename:'[name].js'
    },
    //模块
    module:{
        //加载各种文件的规则
        rules:[{
            //检测文件类型 regexp
            test:/\.(js|jsx)$/,
            loader:'babel-loader',
            options:{
                "presets":["@babel/env"]
            }
            //配置项
            //use
            //loader
        },{
            test:/\.css$/,
            //style-loader css-loader
            //css-loader 解释(interpret) @import 和 url() ，会 import/require() 后再解析(resolve)它们
            //style-loader 解析css文件
            use:['style-loader','css-loader']
        },{
            test:/\.(svg|jpg|jpeg|png|gif)$/,
            loader:'url-loader',
            options:{
                limit:3000
            }
        },{
            test:/\.vue$/,
            loader:'vue-loader'
        }]
    },
    devServer:{
        port:8080,
        hot:true
    },
    plugins:[
        new HtmlPlugin({
            template:'./index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new Vueloader() //调用该插件
    ],
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        },
        extensions:['.js','.vue','.json']
    }
}