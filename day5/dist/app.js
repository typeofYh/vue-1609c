'use strict';

var _a = require('./js/a');

var _b = require('./js/b');

var _b2 = _interopRequireDefault(_b);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_a.string); //一个文件即一个模块

// let {readFile,readdir} = require('fs');
// console.log(readFile,readdir);

console.log((0, _a.reverse)('bawei'));
console.log(_a.obj.name);

new _b2.default().sayAge();
console.log(_b.number);