// https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex


import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    username: localStorage.getItem('username') || '',
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },

    auth_success(state, user) {
      state.status = 'success'
      state.token = user.token
      state.user = user;
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    }
  },
  
  actions: {
    login({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        //not yet implemented
        axios({url: 'http://localhost:3000/api/notyetdefined', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
  },

  register({commit}, user){
    return new Promise((resolve, reject) => {
      commit('auth_request')

      axios({url: 'http://localhost:3000/api/users', data: user, method: 'POST' })
      .then(resp => {
        const token = resp.data.token
        const user = resp.data.user
        localStorage.setItem('token', token)
        localStorage.setItem('username', user.name)
        axios.defaults.headers.common['Authorization'] = token
        user.token = token;
        commit('auth_success', user)

        resolve(resp)
      })
      .catch(err => {
        commit('auth_error', err)
        localStorage.removeItem('token')
        reject(err)
      })
    })
  },

  logout({commit}){
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  }

  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    getUser: state => state.user,
    getUserName: state => state.username
  },
})
