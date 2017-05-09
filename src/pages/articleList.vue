<template>
	<div id="articleList">		
		<hr>
		<!--图片放置+文字 -->
		<div class="context1">
			<img src="~img/wenzhang.png" />
			<!--
            	想要婚姻事业双丰收？
            -->
            <div class="new1">
				<div class="title1">
				<strong>想要婚姻事业双丰收？</strong>
				</div>	
            </div>
			<div class="new2">
				<div class="title2"><span>你还需要这8个技能来傍身!</span></div>
				<div class="img1"><img src="~img/news.png"></div>
				<div class="number"><strong>636</strong></div>
			</div>
		</div>
		<!--生活职场模块1 -->
  	 	<div class="backgroundHr"></div>
		<div class="context2">
			<!--
            	1.div中再放置2个div
            	2.这是左边div
            -->
			<div class="Cont_left">
				<div class="info1"><span>人迷茫的时候该干什么？</span></div>
				<div class="info2"><strong>十位名人的毕业演讲告诉你：不确定的未来，我们能做些什么？</strong></div>
			</div>
			<!--
            	1.div中再放置2个div
            	2.这是右边div
            -->
			<div class="Cont_right"><img src="~img/wenzhang1.png"></div>		
			<div class="new3">
				<div class="title3"><span>生活职场</span></div>
				<img src="~img/news.png">
				<div class="title4"><strong>636</strong></div>
			</div>				
		</div>	
		<!--生活职场模块2 -->
  	 	<div class="backgroundHr"></div>
		<div class="context2">
			<!--
		    	1.div中再放置2个div
		    	2.这是左边div
		    -->
			<div class="Cont_left">
				<div class="info1"><span>人迷茫的时候该干什么？</span></div>
				<div class="info2"><strong>十位名人的毕业演讲告诉你：不确定的未来，我们能做些什么？</strong></div>
			</div>
			<!--
		    	1.div中再放置2个div
		    	2.这是右边div
		    -->
			<div class="Cont_right"><img src="~img/wenzhang1.png"></div>		
			<div class="new3">
				<div class="title3"><span>生活职场</span></div>
				<img src="~img/news.png">
				<div class="title4"><strong>636</strong></div>
			</div>				
		</div>	
		<!--生活职场模块3 -->
  	 	<div class="backgroundHr"></div>
		<div class="context2">
			<!--
            	1.div中再放置2个div
            	2.这是左边div
            -->
			<div class="Cont_left">
				<div class="info1"><span>人迷茫的时候该干什么？</span></div>
				<div class="info2"><strong>十位名人的毕业演讲告诉你：不确定的未来，我们能做些什么？</strong></div>
			</div>
			<!--
            	1.div中再放置2个div
            	2.这是右边div
            -->
			<div class="Cont_right"><img src="~img/wenzhang1.png"></div>		
			<div class="new3">
				<div class="title3"><span>生活职场</span></div>
				<img src="~img/news.png">
				<div class="title4"><strong>636</strong></div>
			</div>				
		</div>		
		<!--
        	底线模块
        -->
		<div class="foot">
			<strong>我是底线哦~</strong>
		</div>		
	</div>
</template>
<script>
export default{
	created(){
		this.$store.commit('showHeader','文章')
	}
}
</script>
<style lang="scss" scoped>
	@import '~style/articleList.scss';
</style>