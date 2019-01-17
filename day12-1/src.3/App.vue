<template>
    <div id="app">

        <my-header>
            {{page.title}}
        </my-header>
         <my-header>
            <a href="javascript:;" slot="back">></a>
            列表
        </my-header>
        
       
    </div>
</template>
<script>
export default {
    data(){
        return {
            page:{
                title:"首页"
            }
        }
    }
}


</script>

