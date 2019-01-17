import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import base from "./plugins/base";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
import axios from 'axios';
Vue.use(VueAwesomeSwiper);
Vue.use(base);
Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
