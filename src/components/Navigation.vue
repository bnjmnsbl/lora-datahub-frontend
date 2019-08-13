<template>
  <nav
    id="datahub-navbar"
    class="navbar no-height-restriction"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a
        class="navbar-item"
        href="/"
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
      </a>
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

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/signup" class="button is-primary">
              <strong>Sign up</strong>
            </router-link>
            <router-link to="/login" class="button is-light">
              Log in
            </router-link>
            <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
          </div>
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
      // links: [
      //   {
      //     id: 0,
      //     text: 'Hello World',
      //     page: '/HelloWorld',
      //   },
      //   {
      //     id: 1,
      //     text: 'Home',
      //     page: '/Home',
      //   },
      //   {
      //     id: 2,
      //     text: 'About',
      //     page: '/About',
      //   },
      //   {
      //     id: 3,
      //     text: 'Contact',
      //     page: '/Contact',
      //   },
      // ],
    };
  },
  computed: {
    isLoggedIn: function() {return this.$store.getters.isLoggedIn}
  },
  methods: {
    logout: function() {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/login')
      })
    }
  }
};
</script>

<style>
.navbar {
  background-color: #F4F5FA;

}

#datahub-navbar .navbar-item {
  color: #312CA3;
  font-size: 1.2em;
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
  font-size: 1.1rem;
  background-color: transparent;
}

#datahub-navbar > div.navbar-end > div > div > a.button.is-light {
    color: #312CA3;
    font-size: 1.1rem;
}
</style>
