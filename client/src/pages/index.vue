<template>
  <div class="index">
    <div class="top">
      <img class="sao" src="~img/index-sao.png" alt="扫一扫">
      <div class="search">
        <input type="text" placeholder="搜问题、文章、咨询师...">
      </div>
      <img class="message" src="~img/index-tall.png" alt="消息">
    </div>
    <div class="ad">
      <swiper :list="adImgList" dots-position="center" auto loop></swiper>
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
      <router-link to="/articleList">
        <div class="nav-btn btn-article">
          文章
        </div>
      </router-link>
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
      <div class="comm-item" v-for="item in hotTopic">
        <h2 v-text="item.title"></h2>
        <h4 v-text="item.info"></h4>
        <div class="right">
          <img src="~img/index-comment.png" />
          <span v-text="item.comment"></span>
        </div>
      </div>
    </div>
    <div class="comm-main exper">
      <div class="comm-header">推荐专家</div>
      <div class="comm-item" v-for="item in experts">
        <img class="yuan" :src="item.face">
        <div class="right">
          <span class="s1" v-text="item.name"></span>
          <span class="s2"><span v-text="item.address"></span><span class="s3">{{item.price | priceFilter}}</span></span>
          <span class="s4" v-text="item.info"></span>
        </div>
      </div>
    </div>
    <div class="bottom">
      我是底线哦~
    </div>
  </div>
</template>
<script>
import {Swiper} from 'vux'
export default {
  name: 'index',
  components: {
    Swiper
  },
  data () {
    return {
      adImgList: [{
        url: '',
        img: '',
        title: ''
      }],
      hotTopic: [{
        id: 0,
        title: '',
        info: '',
        comment: 0
      }],
      experts: [{
        id: 0,
        name: '',
        address: '',
        info: '',
        price: '',
        face: ''
      }]
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.commit('checkTab', 0)
      vm.$axios.getCar().then(res => {
        let data = res.data
        let _arr = []
        for (let i = 0; i < data.length; i++) {
          _arr.push({
            url: 'javascript:',
            img: '/server' + data[i].mainPic,
            title: data[i].title
          })
        }
        vm.adImgList = _arr
      })
      vm.$axios.getTopic('hot').then(res => {
        let data = res.data
        let _arr = []
        for (let i = 0; i < data.length; i++) {
          _arr.push({
            id: data[i].id,
            title: data[i].title,
            info: data[i].info,
            comment: data[i].commentCount
          })
        }
        vm.hotTopic = _arr
      })
      vm.$axios.getExpert().then(res => {
        let data = res.data
        let _arr = []
        for (let i = 0; i < data.length; i++) {
          _arr.push({
            id: data[i].id,
            name: data[i].name,
            address: data[i].address,
            info: data[i].info,
            price: data[i].price,
            face: '/server' + data[i].faceUrl
          })
        }
        vm.experts = _arr
      })
    })
  },
  filters: {
    priceFilter (val) {
      return val === 0 ? '免费' : val + '￥'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~style/index.scss';
</style>
