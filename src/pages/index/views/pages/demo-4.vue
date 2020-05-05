<template lang='pug'>
  .demo
    h2 示例四
    .example
      h4 自定义指令练习：计算显示 resize
      div(v-resize:[direction].quiet="onResize") window {{length}}
</template>

<script>
export default {
  name: 'demo-4',
  directives: {
    resize: {
      inserted (el, binding) {
        console.log(el, binding)

        const cb = binding.value
        const modifiers = binding.modifiers

        // window.addEventListener('resize', cb(window.innerWidth))
        // addEventListener 第二个参数接收的是个function，在触发时执行的。你一定要把某个参数传到这个function里的话，用闭包返回一个function
        // 因此上述写法，resize 事件未绑定到 window

        const direction = binding.arg
        const result = () => {
          const size = direction === 'vertical' ? window.innerHeight : window.innerWidth
          return (direction === 'vertical') ? (`innerHeight is：${size}`) : (`innerWidth is：${size}`)
        }
        window.addEventListener('resize', () => cb(result()))

        if (!modifiers || !modifiers.quiet) {
          cb(result())
        }

        el._onresize = cb
      },
      unbind (el) {
        console.log('unbind ', el._onresize) // cb
        if (!el._onresize) return
        window.removeEventListener('resize', el._onresize)
        delete el._onresize
      }
    }
  },
  data () {
    return {
      length: 0,
      direction: 'vertical'
    }
  },
  components: {},
  computed: {},
  methods: {
    onResize (length) {
      this.length = length
    }
  },
  mounted () {}
}

</script>
<style lang='scss' scoped>
.demo {
  height: 2000px;
  text-align: center;
  font-size: 18px;
}
</style>
