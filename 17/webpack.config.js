const path = require('path');
const webpack = require('webpack');
const HtmlWebpack = require('html-webpack-plugin');
const csstext = require('extract-text-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/app.js'),
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: csstext.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader'
        }]
    },
    devServer: {
        port: 8052,
        hot: true,
        host: 'localhost'
    },
    plugins: [
        new HtmlWebpack({
            template: './index.html',
            filename: 'index.html'
        }),
        new csstext('style.css'),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}