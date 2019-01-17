<template>
    <div>
        <elHeader>

        </elHeader>
        <div v-if="loading"></div>
        <main v-if="!loading">
            <message
                :cont="cont">
                <img src="../images/img1.jpeg" v-if="cont.type!='职言'">
                <small v-if="cont.type!='职言'" slot="small">{{cont.tag}}</small>
            </message>
            <ul class="commit-box">
                <li v-for="(val,i) in cont.commitcont"
                :key="i">
                    <dl>
                        <dt>
                            <img :src="'../static/'+val.pic">
                        </dt>
                        <dd>
                            <h2>{{val.name}}</h2>
                            <p>{{val.text}}</p>
                        </dd>
                    </dl>
                </li>
            </ul>
        </main> 
        <div>
            <textarea placeholder="请输入评论内容" v-model="text"></textarea>
            <button @click="submit">发布</button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import message from '@/components/message';
export default {
    data(){
        return{
            text:"",
            cont:{},
            name:"1609C",
            pic:"img1.jpeg",
            loading:true
        }
    },
    components:{
        message
    },
    created(){
        axios.get('/api/detail?id='+this.$route.params.id).then((data)=>{
            this.cont = data.data;
            this.loading = false;
        })
    },
    methods:{
        submit(){
            if(this.text != ''){
                this.cont.commitcont.push({
                    pic:this.pic,
                    name:this.name,
                    text:this.text
                });
                axios.post('/api/addcommit',this.cont).then(data=>{
                    console.log(data.data);
                })
            }else{
                alert('评论内容不能为空')
            }
        }
    }
}
</script>

