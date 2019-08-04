<template lang='pug'>
.workbench
  c-header
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

  components: {CHeader, CSidebar, CFooter},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
