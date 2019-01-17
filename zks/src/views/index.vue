<template>
<div>
    <el-header :backopen="false">
        <h2>篱笆闲聊</h2>
      </el-header>
      <main>
          <ul>
            <elMessage 
            v-for="(val,i) in list"
            :key="i"
            :cont="val"></elMessage>
          </ul>
          <button @click="$router.push('publish')">发布</button>
      </main>
</div>
</template>
<script>
import elMessage from "@/components/elmessage";
export default {
  name: 'index',
  data () {
    return {
       list:[]
    }
  },
  components:{
    elMessage
  },
  created(){
    this.$http.get('/getdata').then(data=>{
       this.list = data.data.data
    })
  }
}
</script>
