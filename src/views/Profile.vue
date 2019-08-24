<template>
  <div>
      <h1>This Page is protected by {{username}} </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    }
  },

  created: function() {
    this.username = this.$store.getters.getUserName;
    console.log("suprise");
    
    }
}
</script>
