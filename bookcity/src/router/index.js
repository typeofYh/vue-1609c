import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
    routes:[{
        path:'/',
        redirect:'/bookcity'
    },{
        path:'/bookcity',
        component:()=>import('@/views/bookcity'),
    },{
        path:'/bookshelf',
        component:()=>import('@/views/bookshelf')
    },{
        path:'/booksearch',
        component:()=>import('@/views/booksearch')
    },{
        path:'/detail/:bookid',
        name:"detail",
        props:true,
        component:()=>import('@/views/detail')
    },{
        path:'/ready',
        name:'ready',
        // beforeEnter(to,from,next){
        //     //判断是否登陆
        //     if(window.localStorage.getItem('islogin')){
        //         next();
        //     }else{
        //         next({
        //             path:"/login"
        //         })
        //     }
        // },
        props:(route)=>{
            return {aa:route.query.bookid}
        },
        component:()=>import('@/views/ready')
    },{
        path:'/login',
        name:'login',
        component:()=>import('@/views/login')
    }]
})
//beforeEach 路由全局守卫函数
//afterEach((to,from)) 
const routername = ['detail','ready']
router.beforeEach((to,from,next)=>{
    if(routername.indexOf(to.name) != -1){
        //判断是否登陆
        if(window.localStorage.getItem('islogin')){
            next();
        }else{
            next({
                path:"/login"
            })
        }
    }else{
        next();
    }
    //to 即将要进入的路由
    //from 从哪来
    //next 下一步
})
export default router;