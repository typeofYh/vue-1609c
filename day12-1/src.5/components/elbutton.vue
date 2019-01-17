<template>
    <button class="td" @click="$emit('clickbtn',cont)">
        {{cont.title}}
    </button>
</template>
<script>
export default {
    props:{
        cont:Object
    }
}
</script>

