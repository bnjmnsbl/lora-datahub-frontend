<template>
  <div v-if="profile">
      <div class="profileContainer">
        <div class="userImgAndName">
        <img :src="profile.picture" class="profileImage" />
           <p class="userName">{{profile.name}} </p>
        </div>
         <button class="button bluebox" v-on:click="placeholder">Add New App</button> 

<!--   use this line to show all data  
      <p>{{ JSON.stringify(profile, null, 2)}} </p> -->
    </div>
    <div>
 
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      profile: this.$auth.profile
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
  max-width: 600px;
  margin: 0 auto;
}

.profileImage {
  width: 100px;
  height: 100px;
}

.userName {
  font-size: 1.5rem;
}

</style>