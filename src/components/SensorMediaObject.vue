<template>
    <router-link :to="{ name: 'sensors', params: {id: data._id, devId: data.devId } }" class="appheadline blue"> 
     
    <div class="sensorContainer">
           <span class="icon is-small">
        <i class="fa fa-wifi padded" />
       <h2 class="sensorTitle"><strong>{{data.devId}}</strong></h2>
     </span>
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
    padding-top:0.75rem;
}

.padded {
  margin-left: 4rem;
  margin-right: 2rem;
  position: relative;
}
</style>