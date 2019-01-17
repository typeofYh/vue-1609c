<template>
    <header>
        <a href="javascript:;" v-if="backopen" @click="$router.back()"> < </a>
        <slot></slot>
    </header>
</template>
<script>
export default {
    props:{
        backopen:Boolean
    }
}
</script>

