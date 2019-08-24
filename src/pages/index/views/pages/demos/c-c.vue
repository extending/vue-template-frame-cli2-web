<template lang='pug'>
div
  h3 组件 c-c：这是兄弟组件 c-b 传来的数据：{{getEventBus}}
</template>

<script>
export default {
  name: 'c-c',
  data () {
    return {
      getEventBus: ''
    };
  },
  components: {},
  computed: {},
  methods: {},
  mounted() {
    this.$EventBus.$on('globalEvent', (val) => {
      console.log('val ', val)
      this.getEventBus = val;
    });
  },
}

</script>
<style lang='scss' scoped>
</style>
