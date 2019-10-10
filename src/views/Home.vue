<template>
   <div>
   <div class="section">
      <article
        v-for="date in info"
        :key="date._id"
        class="media"
      >
        <AppMediaObject :data="date" />
      </article>
    </div>
   </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import AppMediaObject from '@/components/AppMediaObject.vue';

export default {
  name: 'home',
  components: {
    AppMediaObject
  },
  data() {
    return {
      msg: 'LoRa DataHub Prototype',
      info: null,
      testData: [
        {
          devices: [],
          _id: '5d227e2d91d7e4f9e9fbe2ba',
          appId: 'temp_grunewald',
          uniqueId: '1',
          description: 'Temperatures in Our Office',
          locationName: 'Berlin',
          user: 'Ben',
          __v: 0,
        },
        {
          devices: [],
          _id: '5d227e2d91d7e4f9e9fbe2bb',
          appId: 'water_temp',
          description: 'Water temperatures in the River Spree',
          uniqueId: '2',
          locationName: 'Berlin',
          user: 'Wasserbetriebe',
          __v: 0,
        },
        {
          devices: [],
          _id: '5d227e2d91d7e4f9e9fbe2bc',
          appId: 'air_quality',
          description: 'Air quality all over the City',
          uniqueId: '3',
          user: 'AirNerd',
          locationName: 'Berlin',
          __v: 0,
        },
         {
          devices: [],
          _id: '5d227e2d91d7e4f9e9fbe2bd',
          appId: 'temp_grunewald',
          uniqueId: '4',
          description: 'Temperatures in Our Office',
          locationName: 'Berlin',
          user: 'Ben',
          __v: 0,
        },
        {
          devices: [],
          _id: '5d227e2d91d7e4f9e9fbe2be',
          appId: 'water_temp',
          description: 'Water temperatures in the River Spree',
          uniqueId: '5',
          locationName: 'Berlin',
          user: 'Wasserbetriebe',
          __v: 0,
        },
        {
          devices: [],
          _id: '5d227e2d91d7e4f9e9fbe2bf',
          appId: 'air_quality',
          description: 'Air quality all over the City',
          uniqueId: '6',
          user: 'AirNerd',
          locationName: 'Berlin',
          __v: 0,
        },
      ],
    };
  },
  mounted() {
    const url = 'https://bnjmn.uber.space';
    axios
      .get(`${url}/api/apps`)
      // eslint-disable-next-line no-return-assign
      .then(response => (this.info = response.data));
  },
};
</script>
<style>
.media:nth-child(even) {
  background-color: #F4F5FA
}
</style>

