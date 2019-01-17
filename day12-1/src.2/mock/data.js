import Mock from "mockjs";
const navdata = ['心动的鱼','心动的鱼套餐','凉菜','饮料','川菜'];
const data = Mock.mock({
    'data|10-15':[{
        'type|1':['心动的鱼','心动的鱼套餐','凉菜','饮料','川菜'],
        title:'@ctitle',
        imgs:'@image',
        'price|10-50':1,
        'info':'@cword'
    }]
});

export {data,navdata};