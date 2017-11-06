<template>
	<div class="articleList">		
		<hr/>
		<!--图片放置+文字 -->
		<div class="context1">
			<img :src="'/server'+hotArt.mainPic" />
			<!--想要婚姻事业双丰收？-->
      <div class="new1">
				<div class="title1"><strong v-text="hotArt.title"></strong></div>	
      </div>
			<div class="new2">
				<div class="title2"><span v-text="hotArt.info"></span></div>
				<div class="img1"><img src="~img/news.png"></div>
				<div class="number"><strong v-text="hotArt.commentCount"></strong></div>
			</div>
		</div>
		<!--生活职场模块1 -->
    <div v-for="item in articles">
    	<div class="backgroundHr"></div>
  		<div class="context2">
  			<!--
              	1.div中再放置2个div
              	2.这是左边div
              -->
  			<div class="Cont_left">
  				<div class="info1"><span v-text="item.title"></span></div>
  				<div class="info2"><strong v-text="item.info"></strong></div>
  			</div>
  			<!--
              	1.div中再放置2个div
              	2.这是右边div
              -->
  			<div class="Cont_right"><img :src="'/server'+item.mainPic"></div>		
  			<div class="new3">
  				<div class="title3"><span v-text="item.type"></span></div>
  				<img src="~img/news.png">
  				<div class="title4"><strong v-text="item.commentCount"></strong></div>
  			</div>				
  		</div>
    </div>	
	  <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
      <div class="foot" slot="no-more">
        <strong>我是底线哦~</strong>
      </div>  
    </infinite-loading>

			
	</div>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading'
export default{
  created () {
    this.$store.commit('setHeader', '文章')
    this.$axios.getArtice(0, 5).then(res => {
      let data = res.data
      this.hotArt = data.splice(0, 1)[0]
      this.articles = data
    })
  },
  data () {
    return {
      articles: [{
        mainPic: '',
        info: '',
        title: '',
        type: '',
        commentCount: 0
      }],
      hotArt: {
        mainPic: '',
        info: '',
        title: '',
        type: '',
        commentCount: 0
      }

    }
  },
  components: {
    InfiniteLoading
  },
  methods: {
    onInfinite () {
      this.$axios.getArtice(this.articles.length, 5).then(res => {
        if (res.data.length < 5) {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
          return
        }
        this.articles = this.articles.concat(res.data)
        this.$nextTick(() => {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
	@import '~style/articleList.scss';
</style>
