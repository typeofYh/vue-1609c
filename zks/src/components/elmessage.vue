<template>
    <li>
        <h2 v-if="!cont.type">{{cont.user}}</h2>
        <span v-if="cont.type">匿名评论</span>
        <p>{{cont.text}}</p>
        <time>{{showtime}}</time>
    </li>
</template>
<script>
export default {
    props:{
        cont:Object
    },
    computed:{
        showtime(){
            return new Date(this.cont.time).toLocaleDateString();
        }
    }
}
</script>

