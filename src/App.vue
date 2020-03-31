<template>
  <div id="app">
    <navbar></navbar>
    <home></home>
    <footer>{{'test footer'}}</footer>
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
  mounted() {},
  components: {
    navbar,
    home
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Microsoft JhengHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url('./assets/background.jpg') no-repeat 100% 100% fixed;
  background-size: 100% 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar { display: none; }
}
</style>
