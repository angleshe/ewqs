<template>
	<div id="index">
		<div class="top">
			<img class="sao" src="~img/index-sao.png" alt="扫一扫">
			<div class="search">
				<input type="text" placeholder="搜问题、文章、咨询师...">
			</div>
			<img class="message" src="~img/index-tall.png" alt="消息">
		</div>
		<div class="ad">
			<mt-swipe>
				<mt-swipe-item><div class="adimg"></div></mt-swipe-item>
				<mt-swipe-item><div class="adimg"></div></mt-swipe-item>
				<mt-swipe-item><div class="adimg"></div></mt-swipe-item>
				<mt-swipe-item><div class="adimg"></div></mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="nav1">
			<div class="question-box">
				<div class="text">
					<h2>快速提问</h2>
					<h3>马上倾诉你的烦恼</h3>
				</div>
				<img src="~img/index-question.png" />
			</div>
			<div class="exoert-box">
				<div class="text">
					<h2>预约专家</h2>
					<h3>深度解决你的困扰</h3>
				</div>				
				<img src="~img/index-exoert.png" />
			</div>
		</div>
		<div class="nav2">
			<div class="nav-btn btn-article">
				文章
			</div>
			<div class="nav-btn btn-some">
				点滴记录
			</div>
			<div class="nav-btn btn-class">
				课程
			</div>
			<div class="nav-btn btn-radio">
				心理电台
			</div>
		</div>
		<div class="comm-main topic">
			<div class="comm-header">热门话题</div>
			<div class="comm-item">
				<h2>想要婚姻事业双丰收?</h2>
				<h4>你还需要这8个技能来傍身!</h4>
				<div class="right">
					<img src="~img/index-comment.png" />
					665
				</div>
			</div>
		</div>
		<div class="comm-main exper">
			<div class="comm-header">热门话题</div>
			<div class="comm-item">
				<img class="yuan" src=" ">
				<div class="right">
					<span class="s1">爱丽丝</span>
					<span class="s2">广州白云心里医院<span class="s3">免费</span></span>
					<span class="s4">两性、异地恋</span>
				</div>
			</div>
		</div>
		<div class="bottom">
			我是底线哦~
		</div>
	</div>
</template>
<script>
import {Swipe,SwipeItem} from 'mint-ui'
export default{
	name:'index',
	components:{
		[Swipe.name]:Swipe,
		[SwipeItem.name]:SwipeItem
	}
}
</script>
<style lang="scss" scoped>
	@import '~style/index.scss';
</style>