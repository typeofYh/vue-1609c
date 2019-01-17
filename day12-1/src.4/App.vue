<template>
    <div id="app">
        <transition
        enter-active-class="animated slideOutUp"
        leave-active-class="animated slideInRight">
            <my-dialog v-if="open"></my-dialog>
        </transition>
        <button @click="func">编辑</button>

        <input type="text" v-focus="title">
    </div>
</template>
<script>
import "./css/animate.css";
import myDialog from "@/mydialog";
export default{
    data(){
        return{
            open:false,
            title:'请输入您的姓名'
        }
    },
    components:{
        myDialog
    },
    // directives:{
    //     focus:{
    //         inserted(el,obj){  //当前调用该指令的dom节点渲染完成之后触发
    //             el.focus();
    //             el.value = obj.value;
                
    //         },
    //         update(){
    //             console.log(111);
    //         }
    //     }
    // },
    methods:{
        func(){
            this.open = true;
            this.title = 'aaa';
        }
    }
}
</script>
<style>
*{
    padding:0;
    margin: 0;
    list-style: none;
}
body,html,#app{
    width: 100%;
    height: 100%;
}
.slide-enter,.slide-leave-to{
    opacity: 0;
    transform: translateY(100%);
}
.slide-enter-active{
    animation: aa 1s;
}
@keyframes aa{
    0%{
        transform: skew(100deg)
    }
    50%{
        transform: skew(50deg)
    }
    100%{
        transform: skew(0)
    }
}
.slide-leave-active{
    transition: transform 1s,opacity 1s;
}
.slide-enter-to,.slide-leave{
    opacity: 1;
    transform: translateY(0);
}

</style>


