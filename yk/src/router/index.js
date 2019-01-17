import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:'/all'
    },
    {
      path:"/add",
      name:"add",
      component:()=>import('@/views/add')
    },
    {
      path:"/all",
      name:"all",
      alias:['/create','/share','/end'],
      component:()=>import('@/views/all')
    }
  ]
})
