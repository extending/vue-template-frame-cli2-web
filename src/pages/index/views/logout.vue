<template lang="pug">
  .logout
    p
      span 已成功退出
    p
      router-link(to="/") 返回首页
  </div>
</template>

<script>

  export default {
    name: 'logout',
    data () {
      return {}
    },
    methods: {
    },
    mounted () {
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.logout {
  text-align: center;
  padding: 50px;
}
</style>
