<template>
	<div id="mainContainer">
		<mt-tab-container v-model="active" :swipeable="true">
			<mt-tab-container-item id="index">
				{{active}}
			</mt-tab-container-item>
			<mt-tab-container-item id="tall">
				<community></community>
			</mt-tab-container-item>
			<mt-tab-container-item id="service">
				<service></service>
			</mt-tab-container-item>
			<mt-tab-container-item id="me">
				<me></me>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>
<script>
import community from '../pages/community.vue'
import service from '../pages/service.vue'
import me from '../pages/me.vue'
import {TabContainer,TabContainerItem} from 'mint-ui'
import {mapState} from 'vuex'
export default{
	name:'mainContainer',
	data(){
		return{
			active:''
		}
	},
	watch:{
		active(val){
			this.$store.commit('checkTab',val)
		},
		TabState(val){
			this.active=val
		}
	},
	components:{
		community,
		service,
		me,
		[TabContainer.name]:TabContainer,
		[TabContainerItem.name]:TabContainerItem
	},
	computed:{
		...mapState([
			'TabState'
		])
	},
	created(){
		this.active=this.TabState
	}
}
</script>
<style scoped>

</style>