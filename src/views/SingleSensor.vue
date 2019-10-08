<template>
  <div class="about">
    <div class="about-container">
 
    <h1 class="title"> {{deviceId}} </h1>
    <a :href="'http://localhost:3000/api/payloads/' + id" target="_blank" title="REST API for this device" class="apiLink">
      <i class="fa fa-download aligned"></i>   
    </a>
    <!--should generate CSV as well?-->
    <table class="dataTable">
      <thead>
        <tr>
          <th v-for="col in tableKeys" :key="col">
            {{col}}
          </th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="payload in payloads" :key="payload._id">
          <td> {{payload.timestamp}}</td>
          <td v-for="field in payload.payload" :key="field">
            {{field}}
          </td>
        </tr>
      </tbody>
    </table>
    
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
      tableKeys: ["Time"],
      deviceId: null
    };
  },

 props: {
      id: String,
    devId: String
      
  },
  
  mounted() {
    const url = 'http://localhost:3000'
    
    axios
      .get(`${url}/api/devicename/${this.id}`)
      .then(res => { 
        this.deviceId = res.data.devId
       
        }); 

    axios
      .get(`${url}/api/payloads/${this.id}`)
      .then(response => {
        this.payloads = response.data;
        this.tableKeys = Object.keys(this.payloads[0].payload)
        
        //Adds timestamp to first place in Array
        this.tableKeys.unshift("Time");
        
  
        })
    

  }
 

}

</script>

<style>
.about {
  margin-top: 3rem;
}

h1 {
  display: inline-block;
}

i {
  float:right;
  margin-right: 7rem;
  padding-top: 0.8rem;
 
}

.apiLink {
  color: black;
}
.inline {
  display:inline-block;
  margin-bottom: 2rem;

}
.dataTable th {
  text-align: center!important;
 
}

.dataTable tr td{
  padding: 1rem;

  min-width: 5rem;
  text-align: center;
}

.dataTable tr:nth-child(even) {
  background-color: #F4F5FA;
}

</style>

