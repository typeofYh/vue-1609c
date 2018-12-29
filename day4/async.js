const fs = require('fs');
const path = require('path');
//commonjs规范只能用在服务端  nodejs来运行

//nodejs是js的运行环境

//服务端才能操作文件

// let htmlUrl = path.join(__dirname,'all.html');
// fs.readFile(htmlUrl,'utf8',(err,data)=>{
//     if(err){
//         return err;
//     }
//     console.log(data);
// });

// console.log(fs.readFileSync(htmlUrl,'utf8'));


function readFiles(url){
    return new Promise((resolve,reject)=>{
        fs.readFile(url,'utf8',(err,data)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(data);
        })
    })
}

// readFiles(path.join(__dirname,'template.html')).then((html)=>{
//     console.log(html);
// })
// readFiles(path.join(__dirname,'style.css')).then((css)=>{
//     console.log(css);
// })

// async function concatFile(){

// }
// console.log(concatFile);

let concatFile = async function(){
    let html = await readFiles(path.join(__dirname,'template.html'));
    let css = await readFiles(path.join(__dirname,'style.css'));
    return html.replace('{{style}}',`<style>${css}</style>`); 
}
concatFile().then((str)=>{
    fs.writeFileSync('./a.html',str);
}).catch((aa)=>{
    console.log(aa);
})

//async 函数就是 Generator 函数的语法糖
//可以控制异步操作的执行顺序

//async 内部可以使用await关键字 等待promise执行成功
//async函数返回promise对象,resolve的形参得到async函数的返回值


function getNumber (time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(Math.floor(Math.random()*10))
        },time)
    })
};

async function sum(){
    let n1 = await getNumber(1000);
    let n2 = await getNumber(2000);
    let n3 = await getNumber(3000);
    return n1+n2+n3
}

sum().then((n)=>{
    console.log(n);
})



