<template>
    <ul>
        <li>{{cont.name}}
            <div v-if="cont.files">
                <my-ul 
                v-for="val in cont.files"
                :key="val.id"
                :cont="val"></my-ul>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    name:"myUl",
    props:{
        cont:Object
    }
}
</script>

