<template lang='pug'>
  .demo
   h1 示例一
   el-button(size="mini" type="primary" @click="manualLogout") 手动退出
   el-form(ref="form" :model="form" inline label-width="140px")
    el-row
      el-form-item(label="金额转为千分位：")
        el-input(v-model="form.amount" size="small")
      el-form-item {{form.amount | toThousandFilter}}
    el-row
      el-form-item(label="平分数组：")
        span {{form.arr}}
      el-form-item {{form.arr | splitArray(3)}}
    el-row
      h2 组件通信 父组件 demo-1，子组件c-a，孙组件c-b
      h3 组件 demo-1：$attrs：A-C
      c-a(:message-a="form.messageA", :messageB="form.messageB")
      c-c
      router-view

</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import CA from './demos/c-a'
import CC from './demos/c-c'

export default {
  name: 'demo-1',
  components: { CA, CC },
  data () {
    return {
      form: {
        amount: '',
        arr: [
          { name: 'xm0', age: 30 },
          { name: 'xm1', age: 31 },
          { name: 'xm2', age: 32 },
          { name: 'xm3', age: 33 },
          { name: 'xm4', age: 34 },
          { name: 'xm5', age: 35 },
          { name: 'xm6', age: 36 },
          { name: 'xm7', age: 37 },
          { name: 'xm8', age: 38 },
          { name: 'xm9', age: 39 }
        ],
        messageA: 'this is from demo-1 message-a',
        messageB: 'this is from demo-1 message-b'
      },
      testProvide1: 'testprovide1',
      testProvide2: 'testprovide2'
    }
  },
  provide: {
    provide1: this.testProvide1 || 999999,
    provide2: this.testProvide2 || this
  },
  computed: {
    label () {
      return '用户名：';
    },
    // 向计算属性返回函数传参，查询过滤计算 store 中 state
    testIncreaseCount1 () {
      return this.$store.getters.increaseCount1(90);
    },
    ...mapState({
      xuser (state) {
        // 此处必须使用常规函数才能使用 `this` 获取局部状态，不能使用箭头函数
        return this.label + state.user
      }
    }),
    ...mapGetters([
      'totalCount'
    ])
  },
  methods: {
    ...mapMutations([
      'user'
    ]),
    manualLogout () {
      // 使用辅助函数 mapMutation 映射为组件中的 methods
      this.user({ user: null, newStateAttr: 'commit mapmutations' });
    }
  },
  mounted () {}
}

</script>
<style lang='scss' scoped>
.demo {
  height: 2000px;
  font-size: 18px;
  padding: 0 30px;
  h1 {
    text-align: center;
  }
}
</style>
