// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { createRouter } from './router'
import { createStore } from '../store/store.js'
import titleMixin from './util/title'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.mixin(titleMixin);
/* eslint-disable no-new */

export function createApp() {
  // create router instance
  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const app = new Vue({
    router,
    store,
    // the root instance simply renders the App component.
    render: h => h(App)
  });

  return { app, router, store };
}