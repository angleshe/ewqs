<template>
	<div id="community">
		<header class="top">社区</header>
		<div class="search"><mt-search placeholder="请输入关键字"></mt-search></div>
		<div class="ad">
			<mt-swipe>
				<mt-swipe-item><div class="adimg"></div></mt-swipe-item>
				<mt-swipe-item><div class="adimg"></div></mt-swipe-item>
				<mt-swipe-item><div class="adimg"></div></mt-swipe-item>
				<mt-swipe-item><div class="adimg"></div></mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="comm-main">
			<div class="comm-header">社区话题</div>
			<div class="comm-item">
				<img src="" class="item-img"/>
				<div class="item-title">社区话题一</div>
				<div class="item-info">介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</div>	
			</div>
			<div class="comm-item">
				<img src="" class="item-img"/>
				<div class="item-title">社区话题一</div>
				<div class="item-info">介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</div>	
			</div>
			<div class="comm-item">
				<img src="" class="item-img"/>
				<div class="item-title">社区话题一</div>
				<div class="item-info">介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</div>	
			</div>
			<div class="comm-item">
				<img src="" class="item-img"/>
				<div class="item-title">社区话题一</div>
				<div class="item-info">介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</div>	
			</div>
			<div class="comm-item">
				<img src="" class="item-img"/>
				<div class="item-title">社区话题一</div>
				<div class="item-info">介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</div>	
			</div>
			<div class="comm-footer">
				<a class="comm-btn" href="###">查看所有话题</a>
			</div>
		</div>
	</div>
</template>
<script>
import {Search,Swipe,SwipeItem} from 'mint-ui'
export default{
	name:'community',
	components:{
		[Search.name]:Search,
		[Swipe.name]:Swipe,
		[SwipeItem.name]:SwipeItem
	}
}
</script>
<style lang="scss" scoped>
@import '~style/community.scss'
</style>