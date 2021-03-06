import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import login from './modules/login'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login
  },
  getters
})

export default store;