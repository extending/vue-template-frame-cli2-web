<template lang='pug'>
  .demo 示例一
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'demo-1',
  data() {
      return {
      }
  },
  computed: {
    label() {
      return '用户名：';
    },
    // 向计算属性返回函数传参，查询过滤计算 store 中 state
    testIncreaseCount1() {
      return this.$store.getters.increaseCount1(90);
    },
    ...mapState({
      user (state) {
        // 此处必须使用常规函数才能使用 `this` 获取局部状态，不能使用箭头函数
        return this.label + state.user
      },
    }),
    ...mapGetters([
      'totalCount'
    ])
  },
  components: {},
  methods: {},
  mounted() {},
}

</script>
<style lang='scss' scoped>
.demo {
  height: 2000px;
  text-align: center;
  font-size: 18px;
}
</style>
