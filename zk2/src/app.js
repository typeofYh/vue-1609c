import data from "javascript/data"
import "./css/style"
import Vue from "vue"
// console.log(data.data);a

let mv = new Vue({
    el:'#app',
    data:{
       list:data.data 
    },
    created(){
        this.list.forEach(item=>{
           item.sum = Object.values(item.data).map(arr=> arr.reduce((p,n)=> p.price+n.price)).reduce((p,n)=>p+n)
        //    item.open = false;
        //    this.$set(item,'open',false);
        });
    },
    methods:{
        dialogshow(i){
            this.list[i].open = !this.list[i].open;
        }
    }
})

window.mv = mv;


//.js .json