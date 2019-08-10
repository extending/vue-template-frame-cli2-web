<template lang='pug'>
  div
    el-menu(router, background-color="#304156")
      template(v-for="item in menu")
        //el-submenu(v-if="item.chidren" :index="item.url")
          template(slot="title") {{item.title}}
          template(v-for="subItem in item.chidren")
            el-submenu(v-if="subItem.chidren" :index="subItem.url")
              template(slot="title") {{item.title}}
              el-menu-item(v-for="subSubItem in subItem.chidren",  :key="subSubItem.url" :index="subSubItem.url") {{subSubItem.title}}
            el-menu-item(v-else, :index="subItem.url") {{subItem.title}}
        el-menu-item(:index="item.url") {{item.title}}
</template>

<script>
export default {
  name: 'c-sidebar',
  data () {
    return {
      menu: [
        {
          url: 'demo-1',
          title: '示例一',
          children: [
            {
              url: 'submenu-1',
              tilte: '子示例一',
              children: [
                {
                  url: 'subSubMenu-1',
                  tilte: '子子示例一',
                }
              ]
            },
            {
              url: 'submenu-2',
              tilte: '子示例二'
            }
          ]
        },
        {
          url: 'demo-2',
          title: '示例二'
        },
        {
          url: 'demo-3',
          title: '示例三'
        },
        {
          url: 'demo-4',
          title: '示例四'
        },
      ]
    };
  },
  components: {},
  computed: {},
  methods: {},
  mounted() {},
}

</script>
<style lang='scss' scoped>
.el-menu {
  border-right: 0;
  .el-menu-item {
    color: #fff;
  }
}
</style>
