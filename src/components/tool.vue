<template>
	<div id="tool">

	</div>
</template>
<script>
import {Toast} from 'mint-ui'
import {mapState} from 'vuex'
export default{
	name:'tool',
	computed:{
		...mapState([
			'ToastText',
			'isShowToast'
		])
	},
	watch:{
		isShowToast(){
			Toast({
				message:this.ToastText,
				position:'bottom',
				className:'toastStyle'
			})
		}
	}
}
</script>
<style lang="scss" scoped>
</style>