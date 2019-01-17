<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding:0;
  margin: 0;
  list-style: none;
}
body,html,#app,#app>div{
  width: 100%;
  height: 100%;
}
#app>div{
  display: flex;
  flex-direction: column;
}
#app>div>main{
  flex:1;
  overflow: auto;
}
</style>
