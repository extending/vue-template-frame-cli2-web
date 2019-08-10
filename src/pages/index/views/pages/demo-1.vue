<template lang='pug'>
  .demo 示例一
</template>

<script>
export default {
  name: 'demo-1',
  data() {
      return {
        departmentOption: {
          title: {
            text: '部门统计',
            subtext: '',
            x: 'left',
            textStyle: {
              color: "#222",
              fontStyle: "normal",
              fontWeight: "600",
              fontFamily: "san-serif",
              fontSize: 16,
            }
          },
          tooltip: {
            trigger: 'item',
            /* formatter: "{a} <br/>{b} : ({c}门) {d}%"*/
            formatter: "{a} {b} : ({c}门) {d}%"
          },
          legend: {
            x: '70%',
            y: '25%',
            orient: 'vertical',
            left: 'left',
            itemWidth: 10,
            itemHeight: 10,
            selectedMode: false, //禁止点击
            textStyle: {
              fontSize: 12,
              color: "#999",
            },
            formatter: function (name) { //避免文字太长做省略处理
              return name.length > 4 ? (name.slice(0, 4) + "...") : name
            },
            data: []
          },
          series: [{
            name: '',
            type: 'pie',
            radius: '75%',
            center: ['60%', '54%'],
            hoverAnimation: false, //是否开启 hover 在扇区上的放大动画效果
            selectedMode: 'single', //选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'，'multiple'，分别表示单选还是多选。
            selectedOffset: 5, //选中扇区的偏移距离
            data: [],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: {
                    fontSize: 12
                  },
                  /* formatter: '{b} : ({c}门) \n {d}%'	*/
                  formatter: function (params) { //避免文字太长做省略处理
                    var name = params.name; //名字
                    var percent = params.percent; //占比
                    var value = params.value; //数量
                    if (name.length > 8) {
                      return name.slice(0, 7) + "..." + "\n" + "(" + value + "门)" + percent + "%";
                    } else {
                      return name + "\n" + "(" + value + "门)" + percent + "%";
                    }
                  }
                },
                labelLine: {
                  show: true
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }],
          color: ['rgb(187,140,238)', 'rgb(134,146,243)', 'rgb(60,184,255)', 'rgb(113,171,246)', 'rgb(255,193,134)'] //饼图分块颜色设置
        }
    }
  },
  components: {},
  computed: {},
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
