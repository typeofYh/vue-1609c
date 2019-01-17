<template>
    <tr>
        <td>{{cont.title}}</td>
        <td><div :contenteditable="editable" @click="editable=true" @input="changevalue">{{cont.tip}}</div></td>
        <td><button @click="$emit('del',index)">删除</button></td>
    </tr>
</template>
<script>
export default {
    data(){
        return {
            editable:false,
            value:''
        }
    },
    props:{
        cont:Object,
        index:Number
    },
    methods:{
        changevalue(e){
            // console.log(e.target.innerHTML);
            this.$emit('changevalue',e.target.innerHTML,this.index);
        }
    }
}
</script>
