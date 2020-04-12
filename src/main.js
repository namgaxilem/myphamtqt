import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap';
import BootstrapVue from 'bootstrap-vue';
import VueCarousel from 'vue-carousel';

import Main from './components/Main.vue';
import HomePage from './components/page/HomePage.vue';
import Product from './components/page/Product.vue';
import Brand from './components/page/Brand.vue';

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
      component: Main,
      children: [
        {
          path: '',
          name: 'homepage',
          component: HomePage
        },
        {
          path: 'trang-chu',
          name: 'homepage',
          component: HomePage
        },
        {
          path: 'san-pham',
          name: 'product',
          component: Product
        },
        {
          path: 'thuong-hieu/:id?',
          name: 'brand',
          component: Brand
        }
      ]
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