<template>
  <div id="app">
    <Navigation />
    <router-view/>
    <!-- <div class="section">
      <article
        v-for="date in testData"
        :key="date._id"
        class="media"
      >
        <AppMediaObject :data="date" />
      </article>
    </div> -->
    
  </div>
</template>

<script>


import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,

  },
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
