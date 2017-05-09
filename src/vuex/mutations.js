const stores=require('../assets/js/store.js')
export default {
	checkTab(state,val){
		state.TabState=val
		stores.set('TabIndex',val)
	},
	showToast(state,val){
		state.ToastText=val
		state.isShowToast=!state.isShowToast
	},
	hiddenHeader(state){
		state.isShowHeader=false
	},
	showHeader(state,val){
		state.headerTitle=val
		state.isShowHeader=true
	}
}