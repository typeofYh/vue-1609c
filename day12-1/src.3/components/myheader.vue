<template>
    <header>
        <span v-if="$slots.back">
            <slot name="back"></slot>
        </span>
        <h2 v-if="$slots.default">
            <slot name="default"></slot>
        </h2>
        <a href="javascript:;">分享</a>
    </header>
</template>
<script>
export default {
    mounted(){
        console.log(this.$slots);
        window.vm = this;
    }
}
</script>

