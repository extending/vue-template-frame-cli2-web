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
  mounted () {}
}

</script>
<style lang='scss' scoped>
.header {
  position: fixed;
  top: 0;
  width: 85%;
  height: 36px;
  overflow: hidden;
  padding: 0 20px;
  line-height: 36px;
  background: rgb(82, 123, 212);
  color: #fff;
  z-index: 999;
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
