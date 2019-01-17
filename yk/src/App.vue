<template>
  <div id="app">
      <div class="content">
        <div class="left">
          <h2>项目 <button @click="$router.push('/add')">+</button></h2>
          <ul>
            <router-link 
            v-for="(val,i) in navlist"
            tag="li"
            :key="i"
            :to="val.path">{{val.name}}</router-link>
          </ul>
        </div>
        <div class="right">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        navlist:[{
          name:"所有项目",
          num:0,
          path:"/all"
        },{
          name:"我创建得",
          num:0,
          path:"/create"
        },{
          name:"我参与得",
          num:0,
          path:"/share"
        },{
          name:"已归档",
          num:0,
          path:"/end"
        }]
      }
    }
}
</script>

<style>
*{
  padding:0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
body,html,#app{
  width: 100%;
  height: 100%;
}
.content{
  width: 1200px;
  height: 600px;
  background: #fff;
  margin: 10px auto;
  border:1px solid #ccc;
}
.left{
  width: 200px;
  float: left;
  height: 100%;
  border-right: 1px solid #ccc;
}
.right{
  width: 998px;
  height: 100%;
  float: left;
  overflow: auto;
}
</style>
