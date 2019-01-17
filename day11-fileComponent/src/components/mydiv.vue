<template>
    <dl @click="getinfo" ref="dl">
        <dt>{{title}}</dt>
        <dd>{{info}}</dd>
        <my-p></my-p>
    </dl>
</template>
<script>
import MyP from "./myp";
export default {
    name:"MyDiv",
    data(){
        return{
            info:"list"
        }
    },
    props:['title'],
    methods:{
        getinfo(){
            // alert(this.title);
            // console.log(this.$refs);
            // console.log(this.$root);
        }
    },
    components:{
        MyP
    }
}
</script>
<style scoped>
dl{
    width: 100px;
    height: 100px;
}
</style>



