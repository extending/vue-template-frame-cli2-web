<template lang='pug'>
div
  h3 组件 c-b：{{messageB}} 111 {{$attrs.messageB}} 222
  h3 组件 c-b：$attrs 包含了父作用域中绑定的且子组件未作为 prop 识别(且获取)的特性。
  h3 组件 c-b：而 v-bind="$attrs" 是传递给内部组件，若包含未作为 prop 识别的特性，则子组件可使用 $attrs.propertyName 获取，可在本组件中更改 messageB 是否识别验证第一个 h3 输出的值
  div
    el-form-item(label="组件 c-b:", labelWidth="80px")
      el-input(type="primary", size="small", v-model="testEventBus", @input="testBus", placeholder="测试中央事件总线 EventBus")
</template>

<script>
export default {
  name: 'c-b',
  props: {
    messageB: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      testEventBus: ''
    };
  },
  inject: ['provide1', 'provide2'],
  components: {},
  computed: {},
  methods: {
    testBus(val) {
      console.log(val)
      this.$EventBus.$emit('globalEvent', val)
    }
  },
  mounted() {
  },
}

</script>
<style lang='scss' scoped>
</style>
