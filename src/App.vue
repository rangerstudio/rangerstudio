<template>
  <div id="app">
    <navbar :menus="menus"></navbar>
    <home></home>
    <footerbar :menus="menus"></footerbar>
  </div>
</template>

<script>
import footerbar from './components/footerbar.vue';
import navbar from './components/navbar.vue';
import home from './pages/home.vue';
export default {
  name: 'app',
  data () {
    return {
      menus: [
        {
          chinese: "關於木目金心",
          english: "about"
        }, {
          chinese: "最新消息",
          english: "news"
        }, {
          chinese: "木目金心工作室",
          english: "home"
        }, {
          chinese: "作品集",
          english: "portfolios"
        }, {
          chinese: "聯絡我們",
          english: "contact"
        }
      ]
    }
  },
  mounted() {},
  components: {
    footerbar,
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
