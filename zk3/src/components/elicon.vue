<template>
    <div :class="cont.class+' icon'">
        <div class="bor-icon"></div>
        <div class="tip">{{cont.tip}}</div>
    </div>
</template>
<script>
export default {
    props:{
        cont:Object
    }
}
</script>
<style scoped>
.icon{
    position: relative;
}
.icon:hover .tip{
    opacity: 1;
    transform: translate(0,-50%);
}
.bor-icon{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.back .bor-icon{
    background: skyblue
}
.viber .bor-icon{
    background: pink
}
.erwei .bor-icon{
    background: yellowgreen;
}
.tip{
    position: absolute;
    right: 55px;
    top:50%;
    transform: translate(100%,-50%);
    min-width: 100px;
    background: rgba(0,0,0,.6);
    padding: 3px 10px;
    color:#fff;
    border-radius: 3px;
    opacity: 0;
    transition: transform 0.3s ,opacity 0.3s;
}
</style>


