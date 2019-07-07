// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './index.vue'
import router from '@/pages/index/router'
import store from '@/pages/index/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Element from 'element-ui'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Element)
Vue.use(Antd)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

if (process.env.NODE_ENV !== 'production') {
}
import('@/mock')


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
