import Vue from 'vue';
import VueRouter from 'vue-router';
// import home from "views/home/home";
// import list from "views/list/list";  //打包时加载
import("views/home/home").then(obj=>{
    console.log(obj);
} )//运行时加载 
Vue.use(VueRouter);
const vuerouter = new VueRouter({
    routes:[{
        path:'/home',
        component:()=> import("views/home/home"),
        children:[{
            path:'shop',
            component:{
                template:'<div><aa></aa><bb></bb></div>',
                components:{
                    'aa':{
                        template:'<a>121212</a>'
                    },
                    'bb':{
                        template:'<b>bbbbb</b>'
                    }
                }
            }
            
        },{
            path:'image',
            component:{
                template:'<div>image</div>'
            }
        }]
    },{
        path:'/list',
        component:()=>import("views/list/list"),
    }]
});

//install

export default vuerouter;