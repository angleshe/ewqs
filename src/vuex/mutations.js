const stores=require('../assets/js/store.js')
export default {
	checkTab(state,val){
		state.TabState=val
		stores.set('TabIndex',val)
	}
}