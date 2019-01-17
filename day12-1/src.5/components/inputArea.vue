<template>
    <div>
        <span>{{title}}</span>
        <textarea :pleaceholder="'请输入您的'+title"></textarea>
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