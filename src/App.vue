<template>
  <div id="main">
    <main-container :select="select|activeSelect" @on-change-active="changeActive"></main-container>
    <footer-tab :select="select" @on-change-tab="changeTab"></footer-tab>
  </div>
</template>

<script>
import footerTab from './components/footerTab.vue'
import mainContainer from './components/mainContainer.vue'
export default{
  name:'main',
  data(){
    return{
      select:'index-tab'
    }
  },
  components:{
    'footer-tab':footerTab,
    'main-container':mainContainer
  },
  methods:{
    changeTab(val){
      this.select=val
    },
    changeActive(val){
      this.select=val+'-tab'
    }
  },
  filters:{
    activeSelect:val=>val.substring(0,val.length-4)
  }
}
</script>

<style scoped>
#main{
  text-align: center;
}

h1, h2 {
  font-weight: normal;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
