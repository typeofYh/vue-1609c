<template>
    <div class="dialog">
        <span @click="$parent.open=false">X</span>
    </div>
</template>
<script>
export default {
    name:"myUl",
    props:{
        cont:Object
    }
}
</script>
<style scoped>
div{
   width: 100%;
   height: 100%;
   background: red;
   position: absolute;
   top:0;
   left:0;
   z-index: 100; 
}
</style>


