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
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/utils/mammoth.browser.min'
import '@/utils/rem'
import * as filters from '@/utils/filter'

// 全局事件总线
Vue.prototype.$EventBus = new Vue();

for(let item of Object.keys(filters)) {
  Vue.filter(item, filters[item]);
}

Vue.use(Element)
Vue.use(Antd)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

if (process.env.NODE_ENV !== 'production') {
  import('@/mock')
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
