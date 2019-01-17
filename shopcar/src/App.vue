<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/list">列表</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">

</style>
