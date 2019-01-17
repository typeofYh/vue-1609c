<template>
    <header class="header">
        <span class="back" v-if="goback" @click="$router.back()"><</span>
        <slot></slot>
        <span class="login" v-if="gologin" @click="$router.push('login')"></span>
        <span class="home" v-if="gohome" @click="$router.push('/')"></span>
    </header>
</template>
<script>
export default {
    props:{
        goback:{
            default:false
        },
        gologin:{
            default:false
        },
        gohome:{
            default:false
        }
    }
}
</script>

<style scoped lang="scss">
header{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #ccc;
    li{
      display: inline-block;
      text-align: center;
      width:40%;
      &.router-link-active{
        color:orange;
      }
    }
    .home,.login{
        width: 30px;
        height: 30px;
        position: absolute;
        right: 5px;
        top:5px;
        background: red;
    }
    .login{
        background: pink;
    }
}

</style>

