<template>
  <div class="about">
    <div class="about-container">
    
    <h1 class="title"> {{this.devId}} </h1>

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
      tableKeys: ["Time"]
      
    };
  },

 props: {
      id: String,
    devId: String
      
  },
  mounted() {
    const url = 'http://localhost:3000'
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

