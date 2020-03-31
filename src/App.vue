<template>
  <div id="app">
    <navbar></navbar>
    <home></home>
    <!-- <footer>{{'test footer'}}</footer> -->
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import home from './pages/home.vue';
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    navbar,
    home
  }
}
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  font-family: 'Microsoft JhengHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('./assets/background.jpg');
  background-size: 100% 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar { display: none; }
}
</style>
