<template lang='pug'>
  div
    el-menu(router, background-color="#304156", :xcollapse="isCollapse", active-text-color="#409EFF", :default-active="defaultActiveRouter")
      template(v-for="item in menu")
        el-submenu(v-if="item.children" :index="item.url")
          template(slot="title") {{item.title}}
          template(v-for="subItem in item.children")
            el-submenu(v-if="subItem.children" :index="subItem.url")
              template(slot="title") {{subItem.title}}
              el-menu-item(v-for="subSubItem in subItem.children",  :key="subSubItem.url" :index="subSubItem.url") {{subSubItem.title}}
            el-menu-item(v-else, :index="subItem.url") {{subItem.title}}
        el-menu-item(v-else, :index="item.url") {{item.title}}
</template>

<script>
export default {
  name: 'c-sidebar',
  data () {
    return {
      menu: [
        {
          url: '/demo-1',
          title: '示例一',
          children: [
            {
              url: '/demo-1/demo-1-1',
              title: '子示例一',
              children: [
                {
                  url: '/demo-1/demo-1-1-1',
                  title: '子子示例一',
                }
              ]
            },
            {
              url: '/demo-1/demo-1-2',
              title: '子示例二'
            }
          ]
        },
        {
          url: '/demo-2',
          title: '示例二'
        },
        {
          url: '/demo-3',
          title: '示例三'
        },
        {
          url: '/demo-4',
          title: '示例四'
        },
      ],
      isCollapse: true
    };
  },
  components: {},
  computed: {
    defaultActiveRouter() {
      return this.$route.path;
    }
  },
  methods: {},
  mounted() {},
}

</script>
<style lang='scss' scoped>
.el-menu {
  border-right: 0;
  .el-submenu /deep/ .el-submenu__title, .el-menu-item {
    color: #fff;
  }
}
</style>
