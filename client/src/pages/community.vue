<template>
  <div class="community">
    <header class="top">社区</header>
    <div class="search"><search placeholder="请输入关键字" :autoFixed="false"></search></div>
    <div class="ad">
      <swiper :list="adImgList" dots-position="center" auto loop></swiper>
    </div>
    <div class="comm-main">
      <div class="comm-header">社区话题</div>
      <div class="comm-item" v-for="item in communityTopic">
        <img :src="item.pic" class="item-img"/>
        <div class="item-title" v-text="item.title"></div>
        <div class="item-info" v-text="item.info"></div> 
      </div>
      
    </div>
  </div>
</template>
<script>
import {Swiper, Search} from 'vux'
export default{
  name: 'community',
  components: {
    Swiper,
    Search
  },
  data () {
    return {
      adImgList: [{
        url: '',
        img: '',
        title: ''
      }],
      communityTopic: [{
        id: 1,
        title: '社区话题一',
        info: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍',
        pic: 'img/face.png'
      }]
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.commit('checkTab', 1)
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
      vm.$axios.getTopic().then(res => {
        let data = res.data
        let _arr = []
        for (let i = 0; i < data.length; i++) {
          _arr.push({
            id: data[i].id,
            title: data[i].title,
            info: data[i].info,
            pic: '/server' + data[i].mainPic
          })
        }
        vm.communityTopic = _arr
      })
    })
  }
}
</script>
<style lang="scss" scoped>
@import '~style/community.scss'
</style>
