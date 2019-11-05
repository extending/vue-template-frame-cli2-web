<template lang='pug'>
  .demo
   h1 子示例二
   .echarts(ref="echarts")
</template>

<script>
import generateWordCloud from '@/utils/generateWordCloud'

const maskImage = new Image()
const imageSrc = require('@/assets/bg1.png')

const keywords = {
  visualMap: 22199,
  continuous: 10288,
  contoller: 620,
  series: 274470,
  gauge: 12311,
  detail: 1206,
  piecewise: 4885,
  animationDuration: 3425,
  animationDelay: 2431,
  splitNumber: 5175,
  axisLine: 12738,
  lineStyle: 19601,
  splitLine: 7133,
  axisTick: 8831,
  axisLabel: 17516,
  pointer: 590,
  color: 23426,
  title: 38497,
  formatter: 15214,
  slider: 7236,
  legend: 66514,
  grid: 28516,
  smooth: 1295,
  smoothMonotone: 696,
  sampling: 757,
  feature: 12815,
  saveAsImage: 2616,
  polar: 6279,
  calculable: 879,
  backgroundColor: 9419,
  excludeComponents: 130,
  show: 20620,
  text: 2592,
  icon: 2782,
  dimension: 478,
  inRange: 1060,
  animationEasing: 2983,
  animationDurationUpdate: 2259,
  animationDelayUpdate: 2236,
  animationEasingUpdate: 2213,
  xAxis: 89459,
  angleAxis: 5469,
  showTitle: 484,
  dataView: 2754,
  restore: 932,
  timeline: 10104,
  range: 477,
  value: 5732,
  valueIndex: 704,
  showLegendSymbol: 482,
  mapValueCalculation: 492,
  optionToContent: 264,
  handleColor: 187,
  handleSize: 271,
  showContent: 1853,
  angleAxisIndex: 406,
  endValue: 327,
  triggerOn: 1720,
  contentToOption: 169,
  buttonColor: 71,
  rotate: 1144,
  hoverLink: 335,
  outOfRange: 491,
  textareaColor: 58,
  textareaBorderColor: 58,
  textColor: 60,
  buttonTextColor: 66,
  category: 336,
  hideDelay: 786,
  brush: 3
};

const data = [];
for (const name in keywords) {
  data.push({
    name: String(name),
    value: Math.sqrt(keywords[name])
  })
}

export default {
  name: 'demo-1-2',
  components: {},
  data () {
    return {
    }
  },
  methods: {
    initNode () {
      generateWordCloud(this.$refs.echarts, maskImage, data)
    }
  },
  mounted () {
    maskImage.onload = () => {
      this.initNode()
    }
    maskImage.src = imageSrc
    document.body.getElementsByClassName('demo')[0].appendChild(maskImage)
  }
}

</script>
<style lang='scss' scoped>
.demo {
  font-size: 18px;
  padding: 0 30px;
  h1 {
    text-align: center;
  }
  .echarts {
    width: 400px;
    height: 400px;
  }
}
</style>
