<template>
  <div id="app">
      <div class="content">
        <div>
          <button @click="selected = !selected">新增</button>
          <ul v-show="selected">
            <li 
            v-for="(val,i) in listdata"
            :key="i"
            @click="addcont(val)">{{val.title}}</li>
          </ul>
        </div>
        <table>
          <thead>
            <tr>
              <th>类型</th>
              <th>提示信心</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
              <elTr 
              v-for="(val,i) in listcont"
              :key="i"
              :cont="val"
              :index="i"
              @changevalue="changevalue"
              @del="del"></elTr>
          </tbody>
        </table>
      </div>
      <div class="right-icon">
          <elIcon
          v-for="(val,i) in listcont"
          :key="i"
          :cont="val"></elIcon>
      </div>
  </div>
</template>

<script>
import elTr from './components/eltr.vue';
import elIcon from './components/elicon.vue';
import listdata from './mock/data';
export default {
  data(){
    return{
      listdata,
      selected:false,
      listcont:[]
    }
  },
  components:{
    elTr,
    elIcon
  },
  methods:{
    addcont(data){
      const index = this.listcont.findIndex(item=>item.id===data.id);
      if(index==-1){
         this.listcont.push(Object.create(data));
      }else{
       alert('不能添加重复')
      }
      this.selected = false;
    },
    changevalue(val,i){
      this.listcont[i].tip = val;
    },
    del(i){
      this.listcont.splice(i,1);
    }
  }
}
</script>

<style>
.right-icon{
  position: fixed;
  right: 0;
  bottom: 30px;
}
</style>
