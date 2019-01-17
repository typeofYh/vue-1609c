<template>
    <div id="app">
        <div class="content">
            <div class="left">
                <component 
                v-for="(val,index) in leftCont"
                :key="index"
                :is="val.componentName"
                :title="val.title"
                :type="val.type || ''"
                :index="index"></component>
            </div>
            <div class="right">
                <el-button 
                v-for="(item,index) in butdata"
                :cont="item"
                :key="index"
                @clickbtn="pushcont"></el-button>
            </div>
        </div>
    </div>
</template>
<script>
import elButton from "@/elbutton";
import butdata from "./mock/data";
import inputText from "@/inputText"
import inputArea from "@/inputArea"
import inputRadio from "@/inputRadio"

export default{
    data(){
        return {
            butdata,
            leftCont:[]
        }
    },
    components:{
        elButton,
        inputText,
        inputArea,
        inputRadio
    },
    methods:{
        pushcont(obj){
            this.leftCont.push(obj);
            console.log(this.leftCont);
        }
    },
    mounted(){
        this.bus.$on('clickdelbtn',(i)=>{
            this.leftCont.splice(i,1);
        })
    }
}
</script>
<style>

</style>


