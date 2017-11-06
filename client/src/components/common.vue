<template>
  <div class="common">
    <x-header v-if="showHeader" :title="HeaderText"></x-header>
  </div>
</template>
<script>
import {XHeader} from 'vux'
import {mapState} from 'vuex'
export default {
  name: 'MCommon',
  components: {
    XHeader
  },
  computed: {
    ...mapState(['HeaderText']),
    showHeader () {
      return this.HeaderText.length !== 0
    }
  }
}
</script>
<style scoped>

</style>
