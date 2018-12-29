let ajax = (url,method='get',parmas = {}) => {
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.onload = () => { //xhr.readystate 3 - 4
            if(xhr.status >= 200 && xhr.status <= 300 || xhr.status === 304){
                resolve(xhr.responseText);
            }else{
                reject(xhr.statusText)
            }
        }
        xhr.open(method,url)
        xhr.send();
    })
}

ajax('http://localhost:8081/').then((data)=>{
    data = JSON.parse(data);
    let arr = data.map(item=> loadimg(item) );
    return Promise.all(arr);
}).catch((data)=>{
    console.log(data);
}).then((imgobj)=>{
    imgobj.forEach(item=>{
        document.body.appendChild(item);
    })
}).finally(()=>{
    console.log('end');
})

//Promise.prototype.finally  __proto__
//不管pormise最后是成功还是失败都会执行该方法

//Promise.prototype.then

//Promise.prototype.catch

//Promise.all  constructor



//Promise.all([promise,promise])