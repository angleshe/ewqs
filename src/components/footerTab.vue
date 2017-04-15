<template>
	<footer id="footerTab">
		<div class="empty"></div>
		<mt-tabbar v-model="selected" :value="selected" :fixed="true">
	      <mt-tab-item id="index-tab" @click="selected='index-tab'">
	        <img slot="icon" src="../assets/img/index-tab.png">
	        首页
	      </mt-tab-item>
	      <mt-tab-item id="tall-tab" @click="selected='tall-tab'">
	        <img slot="icon" src="../assets/img/tall-tab.png">
	        社区
	      </mt-tab-item>
	      <mt-tab-item id="service-tab" @click="selected='service-tab'">
	        <img slot="icon" src="../assets/img/service-tab.png">
	        情侣服务
	      </mt-tab-item>
	      <mt-tab-item id="me-tab" @click="selected='me-tab'">
	        <img slot="icon" src="../assets/img/me-tab.png">
	        我的
	      </mt-tab-item>
	    </mt-tabbar>
	</footer>	
</template>
<script>
export default {
	name:'footerTab',
	data(){
		return{
			selected:this.select
		}
	},
	props:{
		select:{
			default:'index-tab'
		}
	},
	watch:{
		select(val){
			this.selected=val
		},
		selected(val){
			this.$emit('on-change-tab',val)
		}
	}
}
</script>
<style scoped>
.empty{
	height:55px;
}
</style>
