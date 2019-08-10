import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
		user: null,
		mobile: '',
    authed: '',
    count1: 10,
    count2: 20,
  },
  getters: {
    totalCount(state) {
      return state.count1 + state.count2
    },
    // store 的计算属性返回一个函数，即可接受参数
    increaseCount1: (state) => (val) => {
      return state.count1 + val;
    }
  },
  mutations: {
    user(state,user) {
      state.user = user
    }
  },
  actions: {

  }
})
