<template lang='pug'>
.workbench
  c-sidebar.sidebar
  .content
    c-header
    router-view.view
</template>

<script>
import CHeader from './c-header'
import CSidebar from './c-sidebar'
import CFooter from './c-footer'

export default {
  name: 'm-workbench',
  data () {
    return {
    };
  },
  components: { CHeader, CSidebar, CFooter },
  computed: {},
  methods: {},
  mounted () {}
}

</script>
<style lang='scss' scoped>
.workbench {
  height: 100%;
  .sidebar {
    width: 15%;
    height: 100%;
    float: left;
    background: #304156;
    color: #fff;
  }
  .content {
    height: 100%;
    overflow: auto;
    .view {
      margin-top: 36px;
    }
  }
}
</style>
