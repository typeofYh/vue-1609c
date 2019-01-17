<template>
    <dl>
        <dt>
            <img :src="contdata.imgs" alt="">
        </dt>
        <dd>
            <h2>{{contdata.title}}</h2>
            <p>{{contdata.info}}<small>{{contdata.type}}</small></p>
            <b>{{contdata.price}}</b>
        </dd>
    </dl>
</template>
<script>
export default {
    props:{
        contdata:Object
    }
}
</script>
<style scoped>
    dl{
        width: 100%;
        display: flex;
    }
    dl img{
        width: 100px;
        height: 100px;
    }
    dl dd{
        flex:1;
        
    }
</style>


