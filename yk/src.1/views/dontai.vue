<template>
    <div>
        <elHeader classname="dt">
            <ul>
                <li 
                v-for="val in navdata"
                :key="val.id"
                :class="{active:val.id===index}"
                @click="index=val.id">{{val.type}}</li>
            </ul>
        </elHeader> 
        <main>
            <ul>
                <message
                v-for="val in contdata()"
                :key="val.id"
                :cont="val">
                    <img :src="'../static/'+val.pic" v-if="val.type!='职言'">
                    <small v-if="val.type!='职言'" slot="small">{{val.tag}}</small>
                </message>
            </ul>
        </main>
        <elFooter></elFooter>
    </div>
</template>
<script>
import axios from "axios";
import message from "@/components/message";
export default {
    data(){
        return {
            messagedata:[],
            index:0,
            navdata:[{
                type:'好友',
                id:0
            },{
                type:'发现',
                id:1
            },{
                type:'职言',
                id:2
            }]
        }
    },
    created(){
        axios.get('/api/getdata').then(data=>{
            this.messagedata = data.data;
            this.contdata();
        })
    },
    methods:{
        contdata(){
            return this.messagedata.filter(item=>item.tag === this.navdata[this.index].type);
        }
    },
    components:{
        message
    }
}
</script>
<style>

</style>


