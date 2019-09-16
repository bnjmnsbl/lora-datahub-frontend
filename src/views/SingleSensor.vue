<template>
  <div class="about">
    <div class="about-container">
    
    <h1 class="title"> SingleSensor Name </h1>
    <p v-for="payload in payloads" :key="payload._id"> {{payload.payload}}</p>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  
  name: 'SingleSensor',
  data() {
    return {
      payloads: null,
      
    };
  },

 props: {
      id: String,

      
  },
  mounted() {
    const url = 'http://localhost:3000'
    
    axios
      .get(`${url}/api/payloads/${this.id}`)
      .then(response => {
        this.payloads = response.data;
        console.dir(this.payload);
        })
    
  }
 

}

</script>

<style>
.about {
  margin-top: 3rem;
}

</style>

