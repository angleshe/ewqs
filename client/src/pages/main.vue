<template>
  <div class="main">
    <div class="container">
      <transition :name="tranName">
        <keep-alive><router-view class="contain"></router-view></keep-alive>
      </transition>
    </div>
    <tabbar v-model="selectTab" class="footerTab">
      <tabbar-item >
        <img slot="icon" src="~img/index-tab.png">
        <img slot="icon-active" src="~img/index-set.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="~img/tall-tab.png">
        <img slot="icon-active" src="~img/tall-set.png">
        <span slot="label">社区</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="~img/service-tab.png">
        <img slot="icon-active" src="~img/service-set.png">
        <span slot="label">情侣服务</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="~img/me-tab.png">
        <img slot="icon-active" src="~img/me-set.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import {Tabbar, TabbarItem} from 'vux'
import {mapState} from 'vuex'
import stores from 'storejs'
export default {
  name: 'main',
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      tabName: ['index', 'community', 'service', 'me'],
      tranName: '',
      selectTab: 0
    }
  },
  computed: {
    ...mapState(['TabState'])
  },
  created () {
    this.$store.commit('setHeader', '')
    if (stores.has('TabState')) {
      this.$store.commit('checkTab', stores.get('TabState'))
    }
    this.selectTab = this.TabState
    this.tranName = ''
    this.$router.push({name: this.tabName[this.TabState]})
  },
  watch: {
    selectTab (to, from) {
      this.tranName = to < from ? 'slide-left' : 'slide-right'
      this.$router.push({name: this.tabName[to]})
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~style/util.scss';
.main {
  height: 100vh;
  @include mainFrame;
  position: relative;
  .container {
    overflow-x: hidden;
    .slide-left-enter, .slide-right-leave-active {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    .contain {
      height: calc(100vh - 53px);
      position: absolute;
      top: 0;
      left: 0;
      overflow-y: auto;
      transition: all 0.5s cubic-bezier(.55,0,.1,1);
      -webkit-overflow-scrolling: touch;
      @include clearFloat;
    }
  }
  .footerTab{
    background-color: #fff;
  }
}
</style>
