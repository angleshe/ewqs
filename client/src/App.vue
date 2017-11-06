<template>
  <div id="app">
    <m-common></m-common>
    <router-view></router-view>
  </div>
</template>

<script>
import MCommon from 'components/common'
export default {
  name: 'app',
  components: {
    MCommon
  },
  created () {
    this.$axios.install(this)
  }
}
</script>

<style lang="less">
a{
  text-decoration:none;
  color:#000;
}
h1, h2, h3, h4, h5, h6{
  font-weight: normal;
}
body {
  text-align: center;
  background-color:#f8f8f8;
}
@import '~vux/src/styles/reset.less';
</style>
