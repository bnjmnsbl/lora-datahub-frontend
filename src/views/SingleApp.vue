
<template>
  <div class="about">
    <div class="about-container">
    
    <p>Single View</p> 
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  props: {
      _id: String,

  },
  components: {
    
  },
 
  data() {
    return {
    }    
  },
  
  mounted() {
    axios
      .get('http://localhost:3000/api/apps')
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

