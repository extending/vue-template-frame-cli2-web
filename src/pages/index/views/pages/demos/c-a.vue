<template lang='pug'>
div
  h3 组件 c-a(props获取)：{{messageA}}
  h3 组件 c-a($attrs获取)：{{$attrs.messageB}}
  c-b(v-bind="$attrs")
</template>

<script>
import CB from './c-b'

export default {
  name: 'c-a',
  props: {
    messageA: {
      type: String,
      default: ""
    }
  },
  components: {CB},
  data () {
    return {
    };
  },
  computed: {},
  methods: {},
  mounted() {},
}

</script>
<style lang='scss' scoped>
</style>
