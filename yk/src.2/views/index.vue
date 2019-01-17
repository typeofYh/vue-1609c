<template>
    <div>
        <swiper :options="swiperOption" class="banner">
            <swiperSlide v-for="(val,i) in swiperdata" :key="i">
                {{val}}
            </swiperSlide>
        </swiper>
        <div class="shopcarbox">
            <h2>本周特价</h2>
            <div class="scrollbox">
                <elDl 
                v-for="(val,i) in cont"
                :key="i"
                :cont="val"></elDl>
            </div>
        </div>
    </div>
</template>
<script>
import {swiper,swiperSlide} from "vue-awesome-swiper";
import 'swiper/dist/css/swiper.css'
import elDl from "@/components/eldl"
export default {
    data(){
        return{
            swiperOption:{
                loop:true,
                autoplay:true
            },
            swiperdata:['1','2'],
            cont:[{
                title:'鸡腿',
                price:15,
                img:'img0.jpeg',
                id:0
            },{
                title:'辣条',
                price:3,
                img:'img1.jpeg',
                id:2
            },{
                title:'玉米',
                price:5,
                img:'img0.jpeg',
                id:1
            },{
                title:'烤肠',
                price:3,
                img:'img1.jpeg',
                id:3
            },{
                title:'糖',
                price:3,
                img:'img1.jpeg',
                id:4
            },{
                title:'红薯',
                price:3,
                img:'img1.jpeg',
                id:5
            }]
        }
    },
    components: {
        swiper,
        swiperSlide,
        elDl
    }
}
</script>
<style>
.banner{
    width: 100%;
    height: 100px;
    text-align: center;
    background: red;
    color:#fff;
    line-height: 100px;
}
.scrollbox{
    overflow: auto;
    display: flex;
}
.shopcarbox{
    width: 100%;
    overflow: hidden;
}
::-webkit-scrollbar {
    display: none;
}
</style>


