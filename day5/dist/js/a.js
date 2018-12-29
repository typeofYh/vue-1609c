'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reverse = reverse;
// let string = '1609C';
// let reverse = function(str){
//     return str.split('').reverse().join('');
// }
// export {string,reverse}  推荐写法

var string = exports.string = '1609c';

function reverse(str) {
    return str.split('').reverse().join('');
}

var obj = exports.obj = {
    name: 'zs'
};