<template>
	<div id="register">
		
		<!-- 头部div   -->
		<div class="Re_header">欢迎来到情侣说</div>	
		<!--注册模块div -->
		<div class="register">
			<!--用户名文本框 模块-->
			<div class="user">
			<img src="~img/user.png"><input type="number"  placeholder="手机号" v-model.trim="phone"/>
			</div>
		<!--密码文本框模块-->
			<div class="password">
			<img src="~img/password.png"><input type="number"  placeholder="短信验证码" v-model.trim="code"/>		
			</div>
		<!--获取验证码 -->  			
		
			<div class="GetDiv">
			<button class="GetButton">获取验证码</button>
			</div>		
		<!--	按钮div模块-->		
		</div>

		<div class="ButtonDiv"><button class="ResButton" v-text="btnText" type="button" @click="register"></button></div>
		<!--	直接登录模块  -->
    	<div class="goLogin"><span v-text="linkText" @click="isLogin=!isLogin"></span></div>
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
export default{
	name:'register',
	data(){
		return{
			isLogin:true,
			phone:'',
			code:''
		}
	},
	computed:{
		btnText:function(){
			return this.isLogin?'登录':'注册'
		},
		linkText:function(){
			return this.isLogin?'还没账号？立即注册':'已有账号？马上登录'
		}
	},
	methods:{
		register(){
			if(this.phone.length===0){
				this.$store.commit('showToast','手机号码不得为空！')
				return
			}else if(this.code.length===0){
				this.$store.commit('showToast','验证码不得为空！')
				return
			}else if(!(/^1[34578]\d{9}$/.test(this.phone))){
				this.$store.commit('showToast','手机号码格式错误！')
				return
			}else if(this.code.length!=4){
				this.$store.commit('showToast','验证码格式错误！')
				return
			}
			
		}
	}
}
</script>
<style lang="scss" scoped>
@import '~style/register.scss'
</style>