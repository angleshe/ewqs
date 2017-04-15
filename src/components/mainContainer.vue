<template>
	<div id="mainContainer">
		<mt-tab-container v-model="active" :swipeable="true" :value="active">
			<mt-tab-container-item id="index">
				{{active}}
			</mt-tab-container-item>
			<mt-tab-container-item id="tall">
				{{active}}
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
import service from '../pages/service.vue'
import me from '../pages/me.vue'
export default{
	name:'mainContainer',
	data(){
		return{
			active:this.select
		}
	},
	props:{
		select:{
			default:'index'
		}
	},
	watch:{
		select(val){
			this.active=val
		},
		active(val){
			this.$emit('on-change-active',val)
		}
	},
	components:{
		service,
		me
	}
}
</script>
<style scoped>

</style>