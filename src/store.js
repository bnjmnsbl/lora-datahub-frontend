// https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex

import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  //probably dont need
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    username: localStorage.getItem('username') || '',
    user: {}
  },
 
})
