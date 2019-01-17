<template>
    <li @click="godetail">
        <h2>
            <span><slot></slot></span>
            <p>
                <b>{{cont.name}}</b>
                <slot name="small"></slot>
            </p>
        </h2>
        <div>
            {{cont.text}}
        </div>
        <div>
            <img :src="'../static/'+val" v-for="(val,i) in cont.contimg" :key="i">
        </div>
        <div>
            <span>评论个数: {{cont.commitcont.length}}</span>
        </div>
    </li>
</template>
<script>
export default {
    data(){
        return{
            imgs:'../images/img1.jpeg'
        }
    },
    props:{
        cont:Object
    },
    methods:{
        godetail(){
            if(this.cont.tag==='职言'){
                this.$router.push({
                    name:"detail",
                    params:{
                        id:this.cont.id
                    }
                })
            }
        }
    }
}
</script>
<style scoped>
li{
    width: 100%;
    border-bottom: 1px solid #ccc;
}
h2 span{
    display: inline-block;
    
}
h2 span img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
li div img{
    width: 30%;
}
</style>


