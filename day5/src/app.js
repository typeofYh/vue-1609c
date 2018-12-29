//一个文件即一个模块

// let {readFile,readdir} = require('fs');
// console.log(readFile,readdir);

import {string as str,reverse,obj} from './js/a'

console.log(str);
console.log(reverse('bawei'));
console.log(obj.name);


import Showage,{number} from './js/b';

new Showage().sayAge();
console.log(number);