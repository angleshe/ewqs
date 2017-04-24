<template>
  <div id="main">
    <main-container></main-container>
    <footer-tab></footer-tab>
  </div>
</template>

<script>
import footerTab from '../components/footerTab.vue'
import mainContainer from '../components/mainContainer.vue'
import {mapMutations} from 'vuex'
const stores=require('../assets/js/store.js')

export default{
  name:'main',
  components:{
    footerTab,
    mainContainer
  },
  created(){
      if(stores.has('TabIndex')){
        this.$store.commit('checkTab',stores.get('TabIndex'))
        console.log(stores.get('TabIndex'))
      }
  }
}
</script>

<style scoped>
#main{
  text-align: center;
  background-color:#f8f8f8;
}

h1, h2 {
  font-weight: normal;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
