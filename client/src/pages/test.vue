<template>
  <div>
    This is a test!
  </div>
</template>
<script>
export default {
  name: 'test',
  created () {
    this.$axios.getUser().then(res => {
      console.log(res.data)
    })
  }
}
</script>
<style scoped>

</style>
