<template>
  <div v-if="profile">
      <div class="profileContainer">
        <div class="userMediaCard">
        <div class="profileImage"><img :src="profile.picture" /></div>
          <div class="userCreds">
            <p class="userName">{{profile.nickname}} </p>
            <p class="userMail">{{profile.email}} </p>
          </div>
        </div>
         <button class="button bluebox" @click="showModal = true">Add New App</button> 
        <AddAppModal v-if="showModal" @close="showModal = false"></AddAppModal>
  <!-- use this line to show all data   -->
      <!-- <p>{{ JSON.stringify(profile, null, 2)}} </p> -->
    </div>
    <div>
 
  </div>
</div>
</template>

<script>
import AddAppModal from '@/components/AddAppModal.vue';

export default {
  components: {
    AddAppModal
  },
  data() {
    return {
      profile: this.$auth.profile,
      showModal: false
    };
  },
  methods: {
    handleLoginEvent(data) {
      this.profile = data.profile;
    },
    placeholder() {
      alert("Coming soon!");
    }
  }
}
</script>
<style>


.profileContainer {
  padding-top: 2rem;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 3rem;
}

.profileImage {
  width: 100px;
  height: 100px;
  float: left;
  margin-bottom: 1rem;
 
}

.userMediaCard {
  float: left;
  color: #312CA3;
}


.userCreds {
  margin-left: 0;
}
.userName {
 font-size: 1.5rem;
 text-align: left;
 text-transform: uppercase;

}

.userMail {
  font-size: 1.2rem;
  text-align: left;
}

button.bluebox {
  margin-top: 8rem;
}
</style>