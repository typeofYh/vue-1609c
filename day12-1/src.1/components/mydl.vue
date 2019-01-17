<template>
    <dl>
        <dt><img :src="'http:'+imgpath+'!a-3-540x.jpg'"></dt>
        <dd>
            <p>{{title}}</p>
            <time>{{fomatTime}}</time>
        </dd>
    </dl>
</template>
<script>
    export default{
        name:'mydl',
        data(){
            return {

            }
        },
        computed:{
            fomatTime(){
                let time = this.publishTime;
                let curtime = Date.now() - time;
                if(curtime > 86400000){
                    return new Date(time).toLocaleDateString();
                }else{
                    return parseInt(curtime / 1000 / 60 / 60)+'小时前'
                }
            }
        },
        props:{
            imgpath:String,  //instanceof
            title:String,
            publishTime:Number
        }
    }
</script>
