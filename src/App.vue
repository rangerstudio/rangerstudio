<template>
  <div id="app">
    <navbar></navbar>
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    navbar
  }
}
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('./assets/background.jpg');
  background-size: 100% 100%;
}
</style>
