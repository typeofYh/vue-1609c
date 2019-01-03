const path = require('path');
const configObject = {
    entryPath:path.join(__dirname,"../src/app.js"),
    dev:{
        port:8080,
        mode:'development',
        devtool:'source-map'
    },
    prod:{
        mode:'production',
        outputPath:path.join(__dirname,'../dist'),
        devtool:'inline-cheap-source-map'
    }
}
module.exports = configObject;