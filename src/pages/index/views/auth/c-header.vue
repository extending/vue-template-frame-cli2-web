<template lang='pug'>
  .header
    .login-info 欢迎，{{$store.state.user}}
    .settings
      el-dropdown(trigger="click")
        i.el-icon-setting.el-dropdown-link
        el-dropdown-menu(slot="dropdown")
          router-link(:to="{name: 'logout'}")
            el-dropdown-item 退出
</template>

<script>
export default {
  name: 'c-header',
  data () {
    return {
    };
  },
  components: {},
  computed: {},
  methods: {},
  mounted() {},
}

</script>
<style lang='scss' scoped>
.header {
  height: 36px;
  overflow: hidden;
  padding: 0 20px;
  line-height: 36px;
  background: rgb(82, 123, 212);
  color: #fff;
  .login-info {
    float: left;
  }
  .settings {
    float: right;
    .el-icon-setting {
      color: #fff;
    }
  }
}
</style>
