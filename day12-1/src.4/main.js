import Vue from "vue";
import App from "./App";
Vue.directive('focus',{
    inserted(el,obj){  //当前调用该指令的dom节点渲染完成之后触发
        el.focus();
        el.value = obj.value;
        
    },
    update(){
        console.log(111);
    }
})
new Vue({
    el:'#app',
    render:(h)=>h(App)
})
