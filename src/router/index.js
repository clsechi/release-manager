import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });

  Router.beforeEach((to, from, next) => {
    /**
     * await Firebase Auth load current user state
     * if you dont user Firebase Auth in your project you can remove this
     */
    Vue.prototype.$firebase.auth().onAuthStateChanged((currentUser) => {
      Vue.$log.debug('CurrentUser', currentUser);

      /**
       * Handle profile fetch from Firetore
       * or something that need Auth state loaded here
       */

      next();
    });
  });

  return Router;
}
