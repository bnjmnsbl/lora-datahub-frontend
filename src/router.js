import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import SingleApp from './views/SingleApp.vue';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Profile from './views/Profile.vue';
import Callback from './views/Callback.vue';
import auth from './auth/authService';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    { path: '/app/:id', 
      name: 'apps',
      component: SingleApp,
      props: true,
     
    },
    { path: '/login', 
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    { path: '/signup', 
      name: 'signup',
      component: Signup,
    },
    { path: '/callback', 
    name: 'callback',
    component: Callback,
  
    },
    { path: '/profile', 
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    }
  ],
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (auth.isAuthenticated()) {
      return next();
    }
    auth.login({target: to.path});
  } 
  next();
});

export default router;