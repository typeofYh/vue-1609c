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
    render(data);
}).catch((data)=>{
    console.log(data);
})

function render(data){
    let arr = data.map(item=> loadimg(item) );
    Promise.all(arr).then((res)=>{
        res.forEach((item)=>{
            document.body.appendChild(item);
        })
    })
}

//Promise.all([promise,promise])