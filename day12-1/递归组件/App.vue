<template>
    <div id="app">

       <my-ul 
       v-for="val in menu"
       :key="val.id"
       :cont="val"></my-ul>
       
    </div>
</template>
<script>
import data from './mock/data';
import myUl from "@/myul";
export default {
    data(){
        return {
           menu:data 
        }
    },
    components:{
        myUl
    }
}


</script>

