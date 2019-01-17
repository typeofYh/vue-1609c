<template>
  <div id="app">
    <router-view/>
    <footer>
      <router-link to="/index">首页</router-link>
      <router-link to="/shopcar">购物车<span v-if="num!=0">{{num}}</span></router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      shopcarlist:[],
      num:0
    }
  },
  created(){
      this.getdata();
      this.shownum();
      this.bus.$on('addcar',(data)=>{
          let obj = this.shopcarlist.find(item=>item.id === data.id);
            if(obj){
                obj.num++;
            }else{
                data.num=1;
                this.shopcarlist.push(data);
            };
            localStorage.setItem('shopcar',JSON.stringify(this.shopcarlist));
            //购物车数字变化
            this.shownum();
      })
      this.bus.$on('chagenum',()=>{
        this.getdata();
        this.shownum();
      })
  },
  methods:{
    getdata(){
      this.shopcarlist = JSON.parse(localStorage.getItem('shopcar')) || [];
    },
    shownum(){
        this.num = this.shopcarlist.reduce((prev,next)=>prev+next.num,0);
    }
  }
}
</script>

<style>
*{
  padding:0;
  margin: 0;
  list-style: none;
}
body,html,#app{
  width: 100%;
  height: 100%;
}
#app{
  display: flex;
  flex-direction: column;
}
#app>div{
  flex:1;
  display: flex;
  flex-direction: column;
}
footer{
  width: 100%;
  height: 50px;
  line-height: 50px;
}
#app>div>main{
  flex:1;
  overflow: auto;
}
</style>
