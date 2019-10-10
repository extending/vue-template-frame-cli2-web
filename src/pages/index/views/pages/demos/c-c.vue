<template lang='pug'>
div
  //- h3 组件 c-c：这是兄弟组件 c-b 传来的数据：{{getEventBus}}
  h3 {{testNextTickMessage}}
  el-button(@click="changeMessage")
</template>

<script>
export default {
  name: 'c-c',
  data () {
    return {
      getEventBus: '',
      testNextTickMessage: ''
    };
  },
  components: {},
  computed: {},
  methods: {
    changeMessage () {
      this.testNextTickMessage = 'message';
      console.log(this.$el.textContent === 'message'); // false
      this.$nextTick(() => {
        console.log(this.$el.textContent === 'message'); // true
      })
    }
  },
  mounted () {
    this.$EventBus.$on('globalEvent', (val) => {
      console.log('val ', val)
      this.getEventBus = val;
    });
  }
}

</script>
<style lang='scss' scoped>
</style>
