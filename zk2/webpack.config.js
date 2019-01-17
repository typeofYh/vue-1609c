const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    entry:{
        app:path.join(__dirname,'src/app.js')
    },
    output:{
        filename:"[name]-[hash].js"
    },
    module:{
        rules:[{
            test:/\.js$/,
            loader:'babel-loader'
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },{
            test:/\.(svg|ttf|woff|eot|jpg|png|gif|jpeg)$/,
            loader:'url-loader',
            options:{
                limit:3000
            }
        }]
    },
    devServer:{
        port:8000,
        host:'localhost',
        hot:true
    },
    plugins:[
        new HtmlPlugin({
            template:'./index.html',
            filename:'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js',
            'javascript':path.join(__dirname,'src/js')
        },
        extensions:['.css','.js','.json','.vue']
    }
}