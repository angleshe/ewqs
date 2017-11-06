<template>
  <div class="register">  
    <!-- 头部div   -->
    <div class="Re_header">欢迎来到情侣说</div>  
    <!--注册模块div -->
    <div class="register">
      <div class="user username" v-show="!isLogin">
        <img src="~img/user.png"><input placeholder="用户名" v-model.trim="name"/>
      </div>
      <!--用户名文本框 模块-->
      <div class="user">
      <img src="~img/phone.png"><input type="number" placeholder="手机号" name="phone"v-model.trim="phone">
      </div>
    <!--密码文本框模块-->
      <div class="password">
        <img src="~img/password.png"><input type="number"  placeholder="短信验证码" v-model.trim="code" name="code"/><button class="GetButton" :class="codebtnClass" v-text="codeText" type="button" @click="getCode"></button>    
      </div>  
    <!--  按钮div模块-->    
    </div>

    <div class="ButtonDiv"><button class="ResButton" v-text="btnText" type="button" @click="register"></button></div>
    <!--  直接登录模块  -->
    <div class="goLogin"><span v-text="linkText" @click="checkState"></span></div>
    <div class="DirectLogin" v-show="isLogin">
      <div class="Login1"><hr class="hr1"><span>直接登录</span><hr class="hr2"></div>    
      <div  class="weixin"><img src="~img/Login1.png" ></div>
      <div class="weibo" ><img src="~img/Login2.png" ></div>
      <div class="weixin1"><span>微信</span></div>
      <div class="weibo1" ><span>微博</span></div>
    </div>  
  </div>
</template>
<script>
import verification from 'js/Verification'
import stores from 'storejs'
export default{
  name: 'register',
  data () {
    return {
      isLogin: true,
      phone: '',
      code: '',
      name: '',
      codeAble: true,
      codeText: '获取验证码',
      countdown: 60
    }
  },
  computed: {
    btnText: function () {
      return this.isLogin ? '登录' : '注册'
    },
    linkText: function () {
      return this.isLogin ? '还没账号？立即注册' : '已有账号？马上登录'
    },
    codebtnClass: function () {
      return this.codeAble ? '' : 'noButton'
    }
  },
  methods: {
    checkState () {
      this.isLogin = !this.isLogin
      this.$store.commit('setHeader', this.btnText)
    },
    register () {
      let validator
      let _this = this
      if (this.isLogin) {
        validator = (function * () {
          yield verification.phone = _this.phone
          yield verification.code = _this.code
        })()
        validator.next()
        !verification.phone || validator.next()
        !verification.code || this.$axios.login(this.phone, this.code).then(res => {
          let data = res.data
          if (data !== '') {
            stores.set('Token', data)
            this.$router.go(-1)
            this.$vux.toast.text('登录成功！', 'bottom')
          }
        })
      } else {
        validator = (function * () {
          yield verification.name = _this.name
          yield verification.phone = _this.phone
          yield verification.code = _this.code
        })()
        validator.next()
        !verification.name || validator.next()
        !verification.phone || validator.next()
        !verification.code || this.$axios.register(this.name, this.phone, this.code).then(res => {
          if (res.data) {
            this.$vux.toast.text('注册成功！', 'bottom')
          } else {
            this.$vux.toast.text('该手机已经被注册了！', 'bottom')
          }
        })
      }
    },
    getCode () {
      if (!this.codeAble) return
      let phone = this.phone
      let validator = (function * () {
        yield verification.phone = phone
      })()
      validator.next()
      if (verification.phone) {
        this.codeAble = false
        this.settime()
      }
    },
    settime () {
      if (this.countdown) {
        this.codeText = `重新发送（${this.countdown}s）`
        this.countdown--
        setTimeout(() => this.settime(), 1000)
      } else {
        this.countdown = 60
        this.codeText = '获取验证码'
        this.codeAble = true
      }
    }
  },
  created () {
    this.$store.commit('setHeader', this.btnText)
  }
}
</script>
<style lang="scss" scoped>
@import '~style/register.scss'
</style>
