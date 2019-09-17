<template>
  <div class="about">
    <div class="about-container">
    
    <h1 class="title"> {{ appName}} </h1>

    <article v-for="sensor in info" :key="sensor._id" class="sensorMediaObject"> 
       
       <SensorMediaObject :data="sensor" />
    
    </article>
   
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SensorMediaObject from '@/components/SensorMediaObject.vue';

  
export default {
  name: 'home',
  components: {
    SensorMediaObject
  },
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

  
  mounted() {
    const url = 'http://localhost:3000'
    
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

.title {
  color: #f64c72;
  text-transform: uppercase;
}
.about-container {
  max-width: 600px;
  margin: auto;
  text-align: left;
}

.sensorMediaObject:hover {
  background-color: #f64c72!important;

}

.sensorMediaObject:nth-child(even) {
    background-color: #F4F5FA;
}
</style>

