import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/dongtai'
    },
    {
      path: '/dongtai',
      name: 'dongtai',
      component: ()=>import('@/views/dontai')
    },
    {
      path: '/xiaoxi',
      name: 'xiaoxi',
      component: ()=>import('@/views/xiaoxi')
    },{
      path:'/detail/:id',
      name:'detail',
      component:()=>import('@/views/detail')
    }
  ]
})
