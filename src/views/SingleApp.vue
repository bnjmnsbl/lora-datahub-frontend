<template>
  <div class="about">
    <div class="about-container">
    
    <h1 class="title"> {{ appName}} </h1>

    <article v-for="sensors in info" :key="sensors._id"> 
      <p> {{sensors.devId}}</p>
    </article>
    <p v-for="payloads in deviceData[0]" :key="payloads">{{payloads.payload}}</p>
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
      deviceData: [],
    };
  },
  props: {
      id: String,
      appName: String
      
  },
  components: {
    
  },

  
  mounted() {
    let url = 'http://localhost:3000'
    //let url = 'http://localhost:3000/api/devices/' + this.id;
   
    axios
      .get(`${url}/api/devices/${this.id}`)
      .then(response => {
        this.info = response.data;
        let apiCalls = [];
        response.data.forEach(el=> {
          apiCalls.push(axios.get(`${url}/api/payloads/${el._id}`))
        }); 
        return apiCalls;
        })
        .then(res => {   
         axios.all(res)
         .then(axios.spread((...args) => {
            for (let i = 0; i < args.length; i++) {
                  this.deviceData.push(args[i].data);
              }
          }))
       })
      .catch((err) => {
        throw(err);
      });
      

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

