<template>
	<div id="me">
		<div class="list" v-if="loginStat">
			<mt-cell is-link>
				<span slot="title" class="name">阳关下的微笑ing</span>
				<span slot="title" class="info">你若不离不弃，我必生死相依</span>
				<div class="face"></div>
			</mt-cell>
		</div>
		<div class="list" v-else>
			<mt-cell>
				<div slot="title" class="login-title">欢迎来到情侣说</div>
				<div slot="title" class="login-btn"><mt-button size="small" type="primary">马上登陆</mt-button></div>
			</mt-cell>
		</div>
		<div class="empty"></div>
		<div class="list">
			<mt-cell is-link>
				<span slot="title" class="title">我的提问</span>
				<img slot="icon" src="../assets/img/me-question.png" class="icon"/>
			</mt-cell>
		</div>
		<div class="list">
			<mt-cell is-link>
				<span slot="title" class="title">我发布的</span>
				<img slot="icon" src="../assets/img/me-release.png" class="icon"/>
			</mt-cell>
		</div>
		<div class="list">
			<mt-cell is-link>
				<span slot="title" class="title">我的关注</span>
				<img slot="icon" src="../assets/img/me-love.png" class="icon"/>
			</mt-cell>
		</div>
		<div class="list">
			<mt-cell is-link>
				<span slot="title" class="title">我的积分</span>
				<img slot="icon" src="../assets/img/me-integral.png" class="icon"/>
			</mt-cell>
		</div>
		<div class="list">
			<mt-cell is-link>
				<span slot="title" class="title">关于我们</span>
				<img slot="icon" src="../assets/img/me-me.png" class="icon"/>
			</mt-cell>
		</div>
		<div class="empty"></div>
		<div class="list">
			<mt-cell is-link>
				<span slot="title" class="title">给我们好评</span>
				<img slot="icon" src="../assets/img/me-good.png" class="icon"/>
			</mt-cell>
		</div>
		<div class="list">
			<mt-cell is-link>
				<span slot="title" class="title">帮助与反馈</span>
				<img slot="icon" src="../assets/img/me-help.png" class="icon"/>
			</mt-cell>
		</div>
		<div class="empty"></div>
		<div class="list">
			<mt-cell is-link>
				<span slot="title" class="title">设置</span>
				<img slot="icon" src="../assets/img/me-set.png" class="icon"/>
			</mt-cell>
		</div>
		
	</div>
</template>
<script>
import {Button} from 'mint-ui'
export default{
	data(){
		return{
			loaginStat:false
		}
	},
	components:{
		[Button.name]:Button
	}
}

</script>
<style lang="scss" scoped>
	@import '../assets/style/util.scss';
	#me{
		@include mainFrame;
		.list{
			text-align:left;
			.login-title{
				font-size:px2rem(72);
				color:#333;
				display:block;
				margin:px2rem(54) auto px2rem(60) px2rem(60);
				height:px2rem(67);
				line-height:px2rem(67);
				width:100%;
			}
			.login-btn{
				font-size:px2rem(48);
				margin:0 auto px2rem(54) px2rem(60);
			}
			.name{
				font-size:px2rem(72);
				display:block;
				width:px2rem(700);
				height:px2rem(90);
				line-height: px2rem(90);
				margin:px2rem(90) auto px2rem(34) px2rem(50);
				@include ellipsis;
			}
			.info{
				display:block;
				width:px2rem(700);
				height:px2rem(40);
				line-height: px2rem(40);
				margin-left:px2rem(50);
				margin-bottom: px2rem(100);
				font-size:px2rem(36);
				color:#999;
				@include ellipsis;
			}
			.face{
				width:px2rem(156);
				height:px2rem(156);
				float:right;
				background-color:#ede8e8;
				border-radius: 50%;
			}
			.title{
				font-size:px2rem(42);
				color:#333;
				letter-spacing: 1px;
			}
			.icon{
				width:px2rem(80);
				height:px2rem(60);
				margin:px2rem(40);
			}
		}
		.empty{
			height:px2rem(36);
		}
	}
</style>