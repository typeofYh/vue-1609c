<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  mounted(){
    console.log(this.$router);
  }
}
</script>

<style lang="scss">

@import url(./scss/common.scss);


</style>
