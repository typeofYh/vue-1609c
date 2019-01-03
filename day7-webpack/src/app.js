import Table from "./js/table";

window.onload = function(){
new Table({
    title:".tabletitle",
    cont:'.tablecont',
    classname:'active'
})
console.log(111);
}
import "./css/style.css";
import "./font/iconfont.css";

import axios from "axios";
console.log(axios);

axios.get('/getdata?age=13').then(data=>{
    console.log(data);
})

axios.post('/login',{
    name:'zs',
    pwd:1234
}).then(data=>{
    console.log(data);
})