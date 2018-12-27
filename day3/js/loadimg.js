let loadimg = (obj) => {
    let {img:url,title="该图片没描述"} = obj;
    let promise = new Promise((reslove,reject)=>{
        let img = new Image();
        img.onload = ()=>{
            reslove(img);
        }
        img.onerror = ()=>{
            reject(new Error(`找不到图片地址:${url}`))
        };
        img.src = url
        img.title = title;
    });
    return promise;
}
