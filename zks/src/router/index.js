import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes:[{
        path:'/',
        name:'index',
        component:()=>import('@/views/index')
    },{
        path:'/publish',
        name:'publish',
        component:()=>import('@/views/publish')
    }]
})

