<template>
  <div id="app">
    <myLogin></myLogin>
  </div>
</template>

<script>
import myLogin from '@/components/myLogin.vue'
export default {
  name: 'App',
  components: {
    myLogin
  }
}
</script>

<style lang="less">
  html {
    background: #333;
  }
</style>
