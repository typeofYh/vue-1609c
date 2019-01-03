export default function(obj){
    return Object.entries(obj).map(item=>item[0]+'='+item[1]).join('&')
    //key=value&key=value
}

export let person = {
    name:'zs',
    age:13
}