<template>
    <footer>
        <ul>
            <router-link 
            :to="val.path"
            v-for="(val,i) in footer"
            tag="li"
            :key="i">
             {{val.title}}
            </router-link>
        </ul>
    </footer>
</template>
<script>
export default {
    data(){
        return{
            footer:[{
                "title":'动态',
                path:'/dongtai'
            },{
                "title":'消息',
                path:'/xiaoxi'
            }]
        }
    }
}
</script>
<style scoped>
footer{
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top:1px solid #ccc;
}
footer ul{
    display: flex
}
footer ul li{
    flex:1;
    text-align: center;
}
.router-link-active{
    color:skyblue;
}
</style>

