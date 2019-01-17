<template>
    <div>
        <span>{{title}}</span>
        <input :type="type" :placeholder="'请输入您的'+title">
        <del-btn :index="index"></del-btn>
    </div>
</template>
<script>
import delBtn from "@/delbtn";
 export default{
     components:{
         delBtn
     },
     props:{
         title:String,
         type:String,
         index:Number
     }
 }
</script>