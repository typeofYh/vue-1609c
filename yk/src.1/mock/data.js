var data = [];
var namea = ['1609C','1608B','百度云','网易','谷歌'];
var type = ['发现','职言','好友'];
var text = '评论内容';
var getindex = (min,max)=>{
    return Math.floor(Math.random()*(max-min+1)+min);
}
for(let i=0;i<20;i++){
    data.push({
        name:namea[getindex(0,namea.length-1)],
        id:i,
        tag:type[getindex(0,type.length-1)],
        text:text+i,
        pic:'img'+getindex(0,1)+'.jpeg',
        contimg:['img'+getindex(0,1)+'.jpeg'],
        commitcont:[]
    })
}
console.log(JSON.stringify(data));
