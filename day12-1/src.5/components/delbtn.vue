<template>
    <div>
        <button @click="delEvent">删除</button>
    </div>
</template>
<script>
    export default{
        props:{
            index:Number
        },
        methods:{
            delEvent(){
                // alert(this.index);
                // this.$emit('clickdelbtn',this.index)
                this.bus.$emit('clickdelbtn',this.index);
            }
        }
    }
</script>
