<template lang='pug'>
  .demo
   h1 子示例二
   .echarts(ref="echarts")
</template>

<script>
// let echarts = require('echarts');
import echarts from 'echarts'
import 'echarts-wordcloud'

const imageSrc = require('@/assets/bg1.png')
const maskImage = new Image()

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
      const chart = echarts.init(this.$refs.echarts);
      chart.setOption({
        series: [{
          type: 'wordCloud',

          // The shape of the "cloud" to draw. Can be any polar equation represented as a
          // callback function, or a keyword present. Available presents are circle (default),
          // cardioid (apple or heart shape curve, the most known polar equation), diamond (
          // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

          shape: 'circle',

          // A silhouette image which the white area will be excluded from drawing texts.
          // The shape option will continue to apply as the shape of the cloud to grow.

          // maskImage: maskImage,

          // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
          // Default to be put in the center and has 75% x 80% size.

          left: 'center',
          top: 'center',
          width: '70%',
          height: '80%',
          right: null,
          bottom: null,

          // Text size range which the value in data will be mapped to.
          // Default to have minimum 12px and maximum 60px size.

          sizeRange: [12, 60],

          // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

          rotationRange: [-90, 90],
          rotationStep: 45,

          // size of the grid in pixels for marking the availability of the canvas
          // the larger the grid size, the bigger the gap between words.

          gridSize: 8,

          // set to true to allow word being draw partly outside of the canvas.
          // Allow word bigger than the size of the canvas to be drawn
          drawOutOfBound: false,

          // Global text style
          textStyle: {
            normal: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              // Color can be a callback function or a color string
              color: function () {
                // Random color
                return 'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') + ')';
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },

          // Data is an array. Each array item must have name and value property.
          data: data.sort((a, b) => {
            console.log(a.name)
            return (b.value - a.value)
          })
        }]
      });
      return chart
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
