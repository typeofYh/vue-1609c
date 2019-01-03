const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const bodyParser = require('body-parser');
//抽离css
const CssText = require('extract-text-webpack-plugin');
const configObj = {
    entry:path.join(__dirname,'src/app.js'),
    output:{
        filename:'[name].js'
    },
    module:{
        rules:[{
            test:/\.(js|jsx)$/,
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env']
            }
        },{
            test:/\.css$/,
            use:CssText.extract({
                fallback:'style-loader',
                use:['css-loader']
            })
        },{
            test:/\.(eot|ttf|svg|woff)$/,
            loader:'url-loader'
        },{
            test:/\.(jpg|jpeg|png|fig)$/,
            loader:'file-loader'
        }]
    },
    devServer:{
        port:8000,
        hot:true,
        setup(app){
            app.use(bodyParser.json());
            app.get('/getdata',(req,res)=>{
                // console.log(req.query);
               if(req.query.age == 13){
                    res.send({name:'zs'})
                }
            })
            app.post('/login',(req,res)=>{
                console.log(req.body);
                res.send('aaa');
            })
        }
        // contentBase:path.join(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./aa.html", //模板文件
            filename:"index.html",  //输出的文件名称
            inject:"head" //入口文件存放位置 默认 body 
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CssText('index.css')
    ]
}
module.exports = configObj;