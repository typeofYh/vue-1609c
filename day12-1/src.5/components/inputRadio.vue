<template>
    <div>
        <span>{{title}}</span>
        <input name="sex" type="radio">男
        <input name="sex" type="radio">女
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