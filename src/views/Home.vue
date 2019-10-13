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

