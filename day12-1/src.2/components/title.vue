<template>
    <p @click="func">{{text}}</p>
</template>
<script>
export default {
    props:{
        text:{
            type:String,
            default:'title'
        },
        index:{
            type:Number,
            required:true
        }
    },
    methods:{
        func(){
            // alert(this.index);
            //$emit
            this.$parent.defaultIndex = this.index;
            // this.$emit('tabelbtn',this.index);
        }
    }
}
</script>

