<template>
	<div>
		<div v-if="isShowHeader">
			<mt-header fixed :title="headerTitle" class="header">
				<router-link to="/" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			</mt-header>
			<div class="header-empty"></div>
		</div>
		<my-tool></my-tool>
		<router-view></router-view>
	</div>
</template>
<script>
import myTool from './components/tool.vue'
import {Header,Button} from 'mint-ui'
import {mapState} from 'vuex'
export default{
	components:{
		myTool,
		[Header.name]:Header,
		[Button.name]:Button
	},
	computed:{
		...mapState([
			'isShowHeader',
			'headerTitle'
		])
	}
}
</script>
<style lang="scss" scoped>
@import '~style/util.scss';
.header{
	height: px2rem(41+49+48);
	background-color:#fff;
	color:#000;
}
.header-empty{
	height: px2rem(41+49+48);
}
</style>
