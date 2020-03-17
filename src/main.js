import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap';
import BootstrapVue from 'bootstrap-vue';
import VueCarousel from 'vue-carousel';
import Main from './components/Main.vue';

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueCarousel);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/',
      name: 'main',
      component: Main
    },
    { path: '*', redirect: '/' }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';