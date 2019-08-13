<template>
  <div class="about">
    <div class="about-container">
    
    <h1 class="title"> {{ appName}} </h1>

    <article v-for="sensors in info" :key="sensors._id"> 
      <p> {{sensors.devId}}</p>
    </article>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
     data() {
    return {
      info: null,
    };
  },
  props: {
      id: String,
      appName: String
      
  },
  components: {
    
  },

  
  mounted() {
   
    let url = 'http://localhost:3000/api/devices/' + this.id;
    
    axios
      .get(url)
      // eslint-disable-next-line no-return-assign
      .then(response => (this.info = response.data));
  },
};
</script>

<style>
.about {
  margin-top: 3rem;
}

.about-container {
  max-width: 600px;
  margin: auto;
  text-align: left;
}
</style>

