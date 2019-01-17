import Vue from "vue";
import MyDiv from "./components/mydiv";
// console.log(MyDiv);
new Vue({
    el:'#app',
    data:{
        list:[{
            title:"今日头条"
        },{
            title:"网易新闻"
        }]
    },
    components:{
        MyDiv
    }
})