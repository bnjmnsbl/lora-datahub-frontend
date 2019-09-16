<template>
      <router-link :to="{ name: 'sensors', params: {id: data._id } }" class="appheadline blue"> 
     
     <!-- { name: 'sensors', params: {data_id: data._id} }" class="appheadline blue"> --> 
    <div class="sensorContainer">
     
       <h2 class="sensorTitle"><strong>{{data.devId}}</strong></h2>
       
    </div>
     </router-link>
</template>

<script>


export default {
  name: 'SensorMediaObject',
  props: {
    data: Object,
  },
};
</script>
<style scoped>
.sensorContainer {
   padding: 2rem; 
}

.sensorTitle {
    text-transform: uppercase;
    font-size: 1.2rem;
}

</style>