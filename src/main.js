import './assets/style/reset.css'
import './assets/js/flexible'
import Vue from 'vue'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './vuex/index'
import App from './App.vue'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  store,
  render:h=>h(App)
})


