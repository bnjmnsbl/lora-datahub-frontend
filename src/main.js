import Vue from 'vue'
import 'bulma/css/bulma.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

//this enables other components to access Axios via this.$http
Vue.prototype.$http = Axios;

const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
