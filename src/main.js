import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "animate.css"
import AOS from 'aos'
import "aos/dist/aos.css"

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  created() {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000
    });
  },
  render: h => h(App)
})
