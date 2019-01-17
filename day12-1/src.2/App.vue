<template>
    <div id="app">
        <header>{{title}}</header>
        <main>
            <nav>
                <titles 
                v-for="(val,i) in navdata"
                :text="val"
                :key="i"
                :index="i"
                ></titles>
            </nav>
            <section>
                <h2>{{navdata[defaultIndex]}}</h2>
                <right-cont :contdata="contdata" :title="navdata[defaultIndex]"></right-cont>
            </section>
        </main>
    </div>
</template>
<script>
import {data,navdata} from "./mock/data";
import rightCont from "@/rightCont";
import titles from "@/title";
import "./css/common.css"

export default {
    name:'app',
    data(){
        return{
            navdata,
            contdata:data,
            defaultIndex:0
        }
    },
    components:{
        rightCont,
        titles
    },
    props:{
        title:String
    }
    // computed:{
    //     defaultIndex(){
    //         return this.$root.index;
    //     }
    // }
}
</script>



