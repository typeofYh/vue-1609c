<template>
    <div>
        <el-header :gologin="true">
            <ul>
                <router-link tag="li" to="/bookcity">书城</router-link>
                <router-link tag="li" to="/bookshelf">书架</router-link>
            </ul>
        </el-header>
        <main>
        <router-link to="/booksearch">瘦素</router-link>
        <div class="banner">
            <swiper :options="swiperOption">
                <swiper-slide 
                v-for="(val,i) in banner"
                :key="i"><img :src="val.ad_pic_url" /></swiper-slide>
            </swiper>
        </div>
        <h2>本周最火</h2>
        <div class="hot-cont">
            <elDl 
            v-for="(val,i) in hotdata"
            :key="i"
            :img="val.cover"
            :title="val.title"
            :id="val.fiction_id"></elDl>
        </div>
        </main>
    </div>
</template>
<script>
import elDl from "@/components/eldl";
export default {
    data(){
        return {
            banner:[],
            hotdata:[],
            swiperOption:{
                loop:true,
                autoplay:true
            }
        }
    },
    components:{
        elDl
    },
    created(){
        this.$http('/api/index').then((data)=>{
            this.banner = data.data.items[0].data.data;
            this.hotdata = data.data.items[1].data.data;
            console.log(this.hotdata);
        })
    },
    methods:{
        
    }
}
</script>
<style scoped lang="scss">
.banner{
    img{
        width:100%;
    }
}
.hot-cont{
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}
</style>

