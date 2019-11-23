<template>
  <div class="about">
    <div class="lds-dual-ring" v-if="isLoading"></div>
    <div class="about-container" v-if="!isLoading">
 
    <h1 class="title"> {{deviceId}} </h1>
    <a :href="'https://bnjmn.uber.space/api/payloads/' + id" target="_blank" title="REST API for this device" class="apiLink">
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
          <td> {{payload.timestamp | moment("DD.MM.YYYY, HH:mm:ss") }}</td>
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
      isLoading: true,
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
    const url = 'https://bnjmn.uber.space'
    
    axios
      .get(`${url}/api/devicename/${this.id}`)
      .then(res => { 
        this.deviceId = res.data.devId
       
        }); 

    axios
      .get(`${url}/api/latestpayloads/${this.id}`)
      .then(response => {
        this.isLoading= false;
        this.payloads = response.data;
        this.tableKeys = Object.keys(this.payloads[0].payload);
        
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

/* Loading Animation */
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #f64c72;
  border-color: #f64c72 transparent #f64c72 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>

