<template>
    <div>
      <el-header :backopen="true">
        <h2>留言</h2>
      </el-header>
      <main>
          <input type="checkbox" v-model="open"> 匿名评论
          <input type="text" placeholder="请输入用户名" v-model="user">
          <textarea placeholder="请输入内容" v-model="text"></textarea>
          <button @click="sendbtn">发布</button>
      </main>
    </div>
</template>
<script>
export default {
    data(){
        return{
            open:false,
            user:'',
            text:''
        }
    },
    methods:{
        sendbtn(){
            this.$http.post('/addMes',{
                type:this.open,
                user:this.user,
                text:this.text
            }).then((data)=>{
                if(data.data.code){
                    this.$router.push('/')
                }else{
                    alert(data.data.mes);
                }
            })
        }
    }
}
</script>

