function convert(list, parentKey, currentKey, rootValue) {
    const res = {};
    res[currentKey] = rootValue;
    const children = list.filter(item => item[parentKey] === rootValue );
    if(children.length){
        res.children = children.map( item =>{
           return convert(list,'parentId','id',item[currentKey])
        })
    }
    res[parentKey] = rootValue;
    return res;
};
const list = [{
    "id": 19,
    "parentId": 0,
},
{
    "id": 18,
    "parentId": 16,
},
{
    "id": 17,
    "parentId": 16,
},
{
    "id": 16,
    "parentId": 0,
}];
const result = convert(list, 'parentId', 'id', 0);
console.log(result);