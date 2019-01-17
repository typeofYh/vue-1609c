<template>
    <div>
        <list-dl v-for="(val,index) in getData()" 
        :key="index" 
        :contdata="val"></list-dl>
    </div>
</template>
<script>
import listDl from "@/listdl";
export default {
    data(){
        return{
            // listdata:[]
        }
    },
    components:{
        listDl
    },
    methods:{
        getData(){
            return this.contdata.data.filter(item=>{
                return item.type === this.title;
            })
        }
    },
    props:{
        contdata:Object,
        title:String
    }
}
</script>

