<template>
	<footer id="footerTab">
		<div class="empty"></div>
		<mt-tabbar v-model="active" :fixed="true">
	      <mt-tab-item id="index">
	        <img slot="icon" src="../assets/img/index-tab.png">
	        首页
	      </mt-tab-item>
	      <mt-tab-item id="tall">
	        <img slot="icon" src="../assets/img/tall-tab.png">
	        社区
	      </mt-tab-item>
	      <mt-tab-item id="service">
	        <img slot="icon" src="../assets/img/service-tab.png">
	        情侣服务
	      </mt-tab-item>
	      <mt-tab-item id="me">
	        <img slot="icon" src="../assets/img/me-tab.png">
	        我的
	      </mt-tab-item>
	    </mt-tabbar>
	</footer>	
</template>
<script>
import {Tabbar,TabItem} from 'mint-ui'
import {mapState} from 'vuex'
export default {
	name:'footerTab',
	data(){
		return{
			active:''
		}
	},
	components:{
		[Tabbar.name]:Tabbar,
		[TabItem.name]:TabItem
	},
	computed:{
		...mapState([
			'TabState'
		])
	},
	created(){
		this.active=this.TabState
	},
	watch:{
		active(val){
			this.$store.commit('checkTab',val)
		},
		TabState(val){
			this.active=val
		}
	}
}
</script>
<style scoped>
.empty{
	height:55px;
}
</style>
