<template>
    <dl @click="$router.push({name:'detail',params:{bookid:id}})">
        <dt>
            <img :src="img">
        </dt>
        <dd>
            <h2>{{title}}</h2>
        </dd>
    </dl>
</template>
<script>
export default {
    props:['img','title','id']
}
</script>
<style lang="scss" scoped>
    dl{
        width: 33.3%;
        box-sizing: border-box;
        padding: 5px;
        img{
            width: 100%;
        }
    }
</style>


