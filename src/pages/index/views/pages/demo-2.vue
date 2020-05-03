<template lang='pug'>
  .demo
    p(v-for="item in list") 示例二 {{item}}
</template>

<script>
export default {
  name: 'demo-2',
  data () {
    return {
      num: 100000
    }
  },
  components: {},
  computed: {
    list () {
      const arr = []
      for (let item = 0; item < 10000; item++) {
        arr.push(item)
      }
      return arr
    }
  },
  methods: {},
  mounted () {
  }
}

</script>
<style lang='scss' scoped>
.demo {
  height: 2000px;
  text-align: center;
  font-size: 18px;
}
</style>
