<template lang="pug">
.not-found
    h2 Not Found
    router-link(to="/") 返回首页
</template>

<script>
export default {
  name: 'not-found',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.not-found {
    margin-top: 50px;
    text-align: center;
}
</style>
