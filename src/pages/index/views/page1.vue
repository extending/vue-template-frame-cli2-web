<template lang="pug">
  .page1
    h1 page1
    a(id="downlink")
    el-button.button(@click="downloadFile(stringData)") 导出 EXCEL
    p
      el-upload(:file-list="fileList", action="/" name="file" :auto-upload="false" :on-change="handleFile" ref="upload")
        el-button(type="primary" size="small") 点击上传
        el-button(type="success" size="small" style="margin-left: 10px;" disabled) 上传到服务器
        div.el-upload__tip(slot="tip") 导入 docx 文档，可被转换为 HTML 显示在下方
    p
    div(v-html="htmlString")
    div {{messages}}
  </div>
</template>

<script>
// 引入xlsx
var XLSX = require('xlsx');

export default {
  name: 'page1',
  data () {
    return {
      outFile: '', // 导出文件el
      stringData: [
        { name: 'xm', age: '22' },
        { name: 'xh', age: '23' },
        { name: 'xz', age: '24' }
      ],
      htmlString: null,
      messages: null,
      fileList: []
    }
  },
  methods: {
    downloadFile: function (rs) { // 点击导出按钮
      const data = [{}];
      let k;
      for (k of rs) {
        const ele = {};
        ele['姓名'] = k && k.name;
        ele['年龄'] = k && k.age;
        data[0]['姓名'] = '姓名';
        data[0]['年龄'] = '年龄';
        data.push(ele);
      }
      // data = data.concat(rs)
      this.downloadExl(data, '失败原因记录表');
    },
    downloadExl: function (json, downName, type) { // 导出到excel
      const keyMap = [] // 获取键
      let k;
      for (k in json[0]) {
        k && keyMap.push(k)
      }
      // console.info('keyMap', keyMap, json)
      const tmpdata = [] // 用来保存转换好的json
      json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
        v: v[k],
        position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
      }))).reduce((prev, next) => prev.concat(next)).forEach(function (v) {
        tmpdata[v.position] = {
          v: v.v
        }
      })
      const outputPos = Object.keys(tmpdata) // 设置区域,比如表格从A1到D10
      const tmpWB = {
        SheetNames: ['mySheet'], // 保存的表标题
        Sheets: {
          mySheet: Object.assign({},
            tmpdata, // 内容
            {
              '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] // 设置填充区域
            })
        }
      }
      const tmpDown = new Blob([this.s2ab(XLSX.write(tmpWB,
        { bookType: (type === undefined ? 'xlsx' : type), bookSST: false, type: 'binary' } // 这里的数据是用来定义导出的格式类型
      ))], {
        type: ''
      }) // 创建二进制对象写入转换好的字节流
      var href = URL.createObjectURL(tmpDown) // 创建对象超链接
      this.outFile.download = downName + '.xlsx' // 下载名称
      this.outFile.href = href // 绑定a标签
      this.outFile.click() // 模拟点击实现下载
      setTimeout(function () { // 延时释放
        URL.revokeObjectURL(tmpDown) // 用URL.revokeObjectURL()来释放这个object URL
      }, 100)
    },
    s2ab: function (s) { // 字符串转字符流
      var buf = new ArrayBuffer(s.length)
      var view = new Uint8Array(buf)
      for (var i = 0; i !== s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xFF
      }
      return buf
    },
    getCharCol: function (n) { // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
      let s = ''
      let m = 0
      while (n > 0) {
        m = n % 26 + 1
        s = String.fromCharCode(m + 64) + s
        n = (n - m) / 26
      }
      return s
    },
    handleFile (file, fileList) {
      this.readFileInputEventAsArrayBuffer(file.raw, arrayBuffer => {
        mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
          .then(result => {
            this.htmlString = result.value; // The generated HTML
            this.messages = result.messages; // Any messages, such as warnings during conversion
          })
          .done();
      })
    },
    readFileInputEventAsArrayBuffer (rawFile, cb) {
      // 将文档转换为 二进制数据缓冲区
      console.log(rawFile)
      const reader = new FileReader();
      reader.onload = function (loadEvent) {
        const arrayBuffer = loadEvent.target.result;
        cb(arrayBuffer);
      };
      reader.readAsArrayBuffer(rawFile);
    }
  },
  mounted () {
    this.outFile = document.getElementById('downlink');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.page1 {
  text-align: center;
  .el-table th>.cell {
    text-align: center;
  }
  .button {
    margin-bottom: 20px;
  }
}
</style>
