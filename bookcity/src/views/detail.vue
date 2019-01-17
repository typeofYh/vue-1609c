<template>
    <div>
        <el-header :goback="true" :gohome="true">
            <span>书名{{bookid}}</span>
        </el-header>
        <main>
            <div class="loading" v-if="loading">正在加载中...</div>
            <div v-if="!loading" class="content">
                <dl>
                    <dt><img :src="cont.item.cover"></dt>
                </dl>
            </div>
            <button @click="$router.push({name:'ready',query:{bookid:bookid}})">开始阅读</button>
        </main>
    </div>
</template>
<script>
export default {
    data(){
        return {
            cont:{},
            loading:true
        }
    },
    beforeRouteUpdate(to,from,next){
        this.getdetailedata();
        next();
    },
    created(){
        this.getdetailedata();
    },
    props:['bookid'],
    methods:{
        getdetailedata(){
            this.$http.get(`/api/detail?bookid=${this.bookid}`).then((data)=>{
                this.cont = data.data
                this.loading = false;
                console.log(this.cont);
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    dl{
        dt{
            width: 30%;
            img{
                width: 100%;
            }
        }
    }
</style>



