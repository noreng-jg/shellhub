import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/devices',
      name: 'devices',

      component: () =>
          import(/* webpackChunkName: 'devices' */ './views/Devices.vue')
    },
    {
      path: '/device/:id',
      name: 'detailsDevice',
      component: () =>
          import(/* webpackChunkName: 'details-device' */ './views/DetailsDevice.vue') 
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: () =>
          import('./views/Sessions.vue')
    },
    {
      path: '/session/:id',
      name: 'detailsSession',
      component: () =>
          import(/* webpackChunkName: 'details-session' */ './views/DetailsSession.vue') 
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import('./views/Login.vue')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () =>
        import ('./views/NotFound.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.getters['auth/isLoggedIn']) {
      return next();
    }
    return next(`/login?redirect=${to.path}`);
  } else {
    if (store.getters['auth/isLoggedIn']) {
      return next('/');
    }
    return next();
  }
});

export default router;