<template>
    <div>

        所有模块
    </div>
</template>
<script>
import axios from "axios";
export default {
    data(){
        return {
            type:"all",
            show:0
        }
    },
    created(){
        this.getdata()
    },
    beforeRouteUpdate(to,from,next){
        this.type = to.path.slice(1);
        this.getdata();
        next();
    },
    methods:{
        getdata(){
            axios.get(`/getdata?type=${this.type}&show=${this.show}`).then(data=>{
                console.log(data.data);
            })
        }
    }
}
</script>

