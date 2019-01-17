import Vue from 'vue';
import App from "./App";
import {data,navdata} from "./mock/data";
// console.log(data);
new Vue({
    el:"#app",
    render(h){
        return h(App,{  //vnode  vue的虚拟dom节点
            props:{
                title:'网易'
            }
        })
    }
})