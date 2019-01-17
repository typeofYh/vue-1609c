<template>
    <dl>
        <dt>
            <img :src="'../static/'+cont.img" alt="">
        </dt>
        <dd>
            <p>{{cont.title}}</p>
            <p>{{cont.price}}</p>
            <button @click="addshopcar">添加购物车</button>
        </dd>
    </dl>
</template>
<script>
export default {
    data(){
        return{
           
        }
    },
    props:{
        cont:Object
    },
    methods:{
        addshopcar(){
            this.bus.$emit('addcar',this.cont);
        }
    }
}
</script>
<style scoped>
    dl{
        width: 100px;
        /* height: 150px; */
        flex-shrink: 0;
    }
    dl img{
        width: 100%;
    }
</style>


