<template>
  <div id="app">
   
    <Navigation />
    <router-view/>
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue';
import store from './store.js'
export default {
  name: 'App',
  components: {
    Navigation,
  },
  data() {
    return {};
  },
  computed: {
    count () {
      return store.state.count;
    }
  },

  // this function increases UX by intercepting an axios call to check for 401 unauthorized (token expired) and proceeds to logout
  created: function() {
      this.$http.interceptors.response.use(undefined, function (err) {
      // eslint-disable-next-line no-unused-vars
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
        }
        throw err;
      });
    });
  
  }
}
</script>

<style>

#app {
  font-family: 'National', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.section {
        padding: 3rem 1.5rem;
}

h1 {
  font-size: 2rem;
  }

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.blue {
  color: #312CA3;
}

.bluebox {
  border: 1px solid;
  border-color: #312CA3;
  border-radius: 0;
}

</style>
