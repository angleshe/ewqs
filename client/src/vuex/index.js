import Vue from 'vue'
import vuex from 'vuex'
import mutations from './mutations'

Vue.use(vuex)

const state = {
  TabState: 0,
  HeaderText: ''
}

export default new vuex.Store({
  state,
  mutations
})
