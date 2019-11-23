<template>
  <nav
    id="datahub-navbar"
    class="navbar no-height-restriction"
    role="navigation"
    aria-label="main navigation"
  >
  <div class="container">
    <div class="navbar-brand">
      <router-link
        class="navbar-item"
        to="/"
      >
        <img
          src="../assets/images/DataHub_Logo.png"
          width="224"
          height="56"
        >
        <a
          id="datahub-navbar-burger"
          role="button"
          class="navbar-burger burger blue"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </router-link>
    </div>

    <div
      id="datahub-navbar"
      class="navbar-menu"
    >
      <div class="navbar-start">
        <a class="navbar-item">
          API Docs
        </a>

        <router-link to="/about" class="navbar-item">
          About
        </router-link>
      </div>
      
       <div v-if="!isAuthenticated" class="navbar-end">
        <a class="navbar-item" @click.prevent="login">Login</a>
       </div>

      <div v-if="isAuthenticated" class="navbar-end">
         <router-link to="/profile" class="navbar-item">Profile</router-link>
          <a class="navbar-item" @click="logout">Logout</a>
      </div>
    </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isAuthenticated: false,
      profile: {}
    };
  },

   async created() {
    try {
      await this.$auth.renewTokens();
    } catch (err) {
      throw(err);
    }
  },
  
 
   methods: {
    login() {
      this.$auth.login();
    },
    logout() {
      this.$auth.logOut();
      this.$router.push({ path: "/" });
    },
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn;
      this.profile = data.profile;
    }
  }
};
</script>

<style>
.navbar {
  background-color: #F4F5FA;
  
}


.container{
  max-width: 900px;
}

#datahub-navbar .navbar-item {
  color: #312CA3;
  font-size: 1.1rem;
}

.navbar.no-height-restriction img {
   max-height: unset;
}

/* #datahub-navbar-burger {
  height: unset;
  color: #312CA3;
   margin-right: 1rem;
} */

#datahub-navbar-burger > span {
  width: 20px;

}

.navbar-burger.blue {
    
    color: #312CA3;
}

/* a#datahub-navbar-burger .navbar-burger.burger {
  height: unset;
  color: #312CA3;
} */

#datahub-navbar > div.navbar-end > div > div > a.button.is-primary {
  color: #312CA3;
  border-color: #312CA3;
  background-color: transparent;
}


#datahub-navbar > div.navbar-end > div > div > span > button {
    color: #312CA3;
    
}

</style>
