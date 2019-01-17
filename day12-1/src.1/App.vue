<template>
  <div id="app">
    <div>
      <my-dl v-for="(val,index) in list" 
      :key="index" 
      :imgpath="val.imgPath"
      :title="val.title"
      :publishTime="val.publishTime"></my-dl>
    </div>
  </div>
</template>

<script>
import MyDl from "@/mydl";
import axios from "axios";
import BScroll from "better-scroll";
export default {
  name: 'app',
  data () {
    return {
      list:[],
      BsObject:null,
      pagenum:1,
      limit:10
    }
  },
  components:{
    MyDl
  },
  mounted(){
    this.BsObject = new BScroll(this.$el,{
      probeType:2
    })
    let flag = false;
    this.BsObject.on('scroll',function(){
      if(this.y < this.maxScrollY - 20){
        flag = true;
      }else{
        flag = false;
      }
    })
    this.BsObject.on('scrollEnd',function(){
        flag = false;
    })
    this.BsObject.on('touchEnd',()=>{
        if(flag){
          this.pagenum++;
          this.getData();
        }
    })
    this.getData();
  },
  methods:{
    getData(){
        axios.get(`/getdata?pagenum=${this.pagenum}&limit=${this.limit}`).then(res=>{
          this.list = this.list.concat(res.data.data);
        });
        this.$nextTick(()=>{ //dom节点更新
          this.BsObject.refresh();
        })
    }
  }
}
</script>
<style>
@import url(./css/style.css);
</style>
