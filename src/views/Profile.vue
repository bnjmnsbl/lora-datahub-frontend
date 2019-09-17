<template>
  <div v-if="profile">
      <div>
      <h1>Profile page: {{profile.name}} </h1>
      <p> {{ profile.email}} </p> 
    </div>
    <div>
  <pre> {{ JSON.stringify(profile, null, 2)}} </pre>  
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
    }
  }
}
</script>
