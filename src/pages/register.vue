<template>
	<div id="register">
		
		<!-- 头部div   -->
		<div class="Re_header">欢迎来到情侣说</div>	
		<!--注册模块div -->
		<div class="register">
			<!--用户名文本框 模块-->
			<div class="user">
			<img src="~img/user.png"><input type="number"  placeholder="手机号" />
			</div>
		<!--密码文本框模块-->
			<div class="password">
			<img src="~img/password.png"><input type="number"  placeholder="短信验证码" />		
			</div>
		<!--获取验证码 -->  			
		
			<div class="GetDiv">
			<button class="GetButton">获取验证码</button>
			</div>		
		<!--	按钮div模块-->		
		</div>
		<div class="ButtonDiv"><button class="ResButton">注册</button></div>
		<!--	直接登录模块  -->
    
        	<div class="DirectLogin">
				<div class="Login1"><hr class="hr1"><span>直接登录</span><hr class="hr2">		
			</div>		
			<div  class="weixin"><img src="~img/Login1.png" ></div>
			<div class="weibo" ><img src="~img/Login2.png" ></div>
			<div class="weixin1"><span>微信</span></div>
			<div class="weibo1" ><span>微博</span></div>
		</div>	

	</div>
</template>
<script>

</script>
<style lang="scss" scoped>
@import '~style/register.scss'
</style>