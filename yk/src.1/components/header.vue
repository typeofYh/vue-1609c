<template>
    <header :class="classname">
        <slot></slot>
    </header>
</template>
<script>
export default {
    props:['classname']
}
</script>
<style scoped>
header{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
.dt{
    background: skyblue;      
}
.xx{
    border-bottom: 1px solid #ccc;
}
ul{
    display: flex;
    width: 80%;
    margin-left:10%;
}
li{
    flex:1;
    text-align: center;
    height: 48px;
}
li.active{
    border-bottom: 2px solid #fff;
    color:#fff;
}
</style>


