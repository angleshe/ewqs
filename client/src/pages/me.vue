<template>
  <div class="me">
    <group gutter="0">
      <cell is-link class="list" v-if="LoginState">
        <span slot="title" class="name">{{user.name}}</span>
        <span slot="title" class="info">{{info}}</span>
        <img class="face" :src="faceUrl"></img>
      </cell>
      <cell class="list" v-else>
        <div slot="title" class="login-title">欢迎来到情侣说</div>
        <div slot="title" class="login-btn"><x-button mini class="btnLogin" @click.native="goToLogin">马上登陆</x-button></div>
      </cell>
    </group>
    <group>
      <cell is-link class="list">
        <span slot="title" class="title">我的提问</span>
        <img slot="icon" src="~img/me-question.png" class="icon"/>
      </cell>
      <cell is-link  class="list">
        <span slot="title" class="title">我发布的</span>
        <img slot="icon" src="~img/me-release.png" class="icon"/>
      </cell>
      <cell is-link  class="list">
        <span slot="title" class="title">我的关注</span>
        <img slot="icon" src="~img/me-love.png" class="icon"/>
      </cell>
      <cell class="list">
        <span slot="title" class="title">我的积分</span>
        <span>{{user.integral}}</span>
        <img slot="icon" src="~img/me-integral.png" class="icon"/>
      </cell>
      <cell is-link class="list">
        <span slot="title" class="title">关于我们</span>
        <img slot="icon" src="~img/me-me.png" class="icon"/>
      </cell>
    </group>
    <group>
      <cell is-link class="list">
        <span slot="title" class="title">给我们好评</span>
        <img slot="icon" src="~img/me-good.png" class="icon"/>
      </cell>
      <cell is-link class="list">
        <span slot="title" class="title">帮助与反馈</span>
        <img slot="icon" src="~img/me-help.png" class="icon"/>
      </cell>
    </group>
    <group>
      <cell is-link class="list">
        <span slot="title" class="title">设置</span>
        <img slot="icon" src="~img/me-seting.png" class="icon"/>
      </cell>
    </group>  
  </div>
</template>
<script>
import {Group, Cell, XButton} from 'vux'
import stores from 'storejs'
export default{
  components: {
    Group,
    Cell,
    XButton
  },
  computed: {
    faceUrl () {
      return this.user.face || 'static/images/defaultFace.png'
    },
    info () {
      return this.user.info || '暂无签名'
    },
    LoginState () {
      return this.Token !== ''
    }
  },
  methods: {
    goToLogin () {
      this.$router.push('register')
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.commit('checkTab', 3)
    })
  },
  created () {
    if (stores.has('Token')) {
      this.Token = stores.get('Token')
      this.$axios.getUser().then(res => {
        let data = res.data
        this.user.face = data.faceUrl
        this.user.name = data.name
        this.user.info = data.info
        this.user.integral = data.integral
      })
    }
  },
  data () {
    return {
      user: {
        face: '',
        name: '',
        info: '',
        integral: 0
      },
      Token: ''
    }
  }
}

</script>
<style lang="scss" scoped>
  @import '~style/util.scss';
  .me{
    @include mainFrame;
    padding-bottom: px2rem(30);
    .list{
      text-align:left;
      background-color: #fff;
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
        .btnLogin{
          background-color: #85d4fd;
          color: #fff;
          font-size: px2rem(48);
        }
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
        margin:0 px2rem(40);
      }
    }
  }
</style>
