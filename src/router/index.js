import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import CarDetail from '../components/CarDetail'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/car-detail', component: CarDetail }
    ]
  });
}
