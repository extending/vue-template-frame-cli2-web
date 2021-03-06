// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './index.vue'
import router from '@/pages/index/router'
import store from '@/pages/index/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/index.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/utils/mammoth.browser.min'
import '@/utils/rem'
import * as filters from '@/utils/filter'
// import * as _30s from '30-seconds-of-code'

// 全局事件总线
Vue.prototype.$EventBus = new Vue();

for(let item of Object.keys(filters)) {
  Vue.filter(item, filters[item]);
}

Vue.use(Element)
Vue.use(Antd)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
// console.log(_30s)

if (process.env.NODE_ENV !== 'production') {
  // 'import' and 'export' may only appear at the top level
  // 使用 imoort() 防止上述报错的解决办法
  // 1 此处不使用 import()
  // 2 babelrc module: false 注释掉无报错
  // 3 babelrc 不注释且添加 es2015 亦可
  // 4 不注释且将 import 语句移至 if 外部
  // import('@/mock')
  require('@/mock')
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
