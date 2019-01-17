<template>
    <div class="main">
        <router-link to="/home/shop">首页商品</router-link>
        <router-link to="/home/image">首页图片</router-link>

        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'home'
}
</script>
<style lang="scss" scoped>
div{
    background: skyblue;
    width: 100px;
    height: 100px;
}
</style>

