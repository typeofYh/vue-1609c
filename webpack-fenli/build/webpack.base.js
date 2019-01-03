const config = require('../config/index');
const configObj = {
    entry:config.entryPath,
    module:{
        rules:[{
            test:/\.(js|jsx)$/,
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env']
            }
        }]
    }
};

module.exports = configObj;