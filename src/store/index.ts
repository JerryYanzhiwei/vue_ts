import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
import axios from 'axios'

Vue.prototype.$http = axios

axios.defaults.baseURL = 'http://127.0.0.1:3000/api/'

axios.defaults.timeout = 5000

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error.response.data)
  }
)

Vue.use(Vuex)

const store: Store<any> = new Vuex.Store({
  actions,
  mutations,
  getters,
  state
})

export default store
