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
    logout () {
      this.$message.success('退出成功');
      this.$store.commit({
        type: 'user',
        user: false
      });
    }
  },
  mounted () {
    this.logout();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.logout {
  text-align: center;
  padding: 50px;
}
</style>
