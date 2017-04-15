import './assets/style/reset.css'
import './assets/js/flexible.js'
import Vue from 'vue'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import {Button,Tabbar,TabItem,TabContainer,TabContainerItem,Cell} from 'mint-ui'
import router from './router/index'


Vue.use(VueRouter)
Vue.component(Button.name, Button)
Vue.component(Tabbar.name,Tabbar)
Vue.component(TabItem.name,TabItem)
Vue.component(TabContainer.name,TabContainer)
Vue.component(TabContainerItem.name,TabContainerItem)
Vue.component(Cell.name,Cell)


new Vue({
  el: '#app',
  router
})
