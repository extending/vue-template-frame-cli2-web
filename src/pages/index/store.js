import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		user: null,
		mobile: '',
		authed: ''
  },
  mutations: {
    user(state,user) {
      state.user = user
    }
  },
  actions: {

  }
})
