import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import VueRouter from 'vue-router'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "animate.css"
import "material-design-icons"
import AOS from 'aos'
import "aos/dist/aos.css"

Vue.use(BootstrapVue)
Vue.use(VueRouter)

import about from './pages/about.vue'
import contact from './pages/contact.vue'
import home from './pages/home.vue'
import news from './pages/news.vue'
import portfolios from './pages/portfolios.vue'

// 2. 定義路由
// 每個路由應該應設一個組件。 其中"component" 可以是
// 通過 Vue.extend() 創建的組件構造器，
// 或者，只是一个組件配置對象。
const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/about', name: 'about', component: about },
  { path: '/contact', name: 'contact', component: contact },
  { path: '/news', name: 'news', component: news },
  { path: '/portfolios', name: 'portfolios', component: portfolios },
]

// 3. 創建 router 實例，然后傳 `routes` 配置
const router = new VueRouter({
  routes: routes
})

new Vue({
  el: '#app',
  router,
  created() {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000
    });
  },
  render: h => h(App)
})
