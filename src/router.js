import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import SingleApp from './views/SingleApp.vue';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Profile from './views/Profile.vue';
import Callback from './views/Callback.vue';
import store from './store';

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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
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
      meta: {
        guest: true
      }
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
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next('/login');
  } else {
      next();
  }
});




export default router;