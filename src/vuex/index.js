import Vue from 'vue'
import vuex from 'vuex'
import mutations from './mutations'
Vue.use(vuex)
const state={
	TabState:'index',
	LoginState:false,
	ToastText:'',
	isShowToast:false,
	isShowHeader:false,
	headerTitle:''
}
export default new vuex.Store({
	state,
	mutations
})