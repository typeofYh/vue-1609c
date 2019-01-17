import Vue from 'vue'
import App from './App.vue'
import base from './plugins/base';
import router from './router/index';
Vue.use(base);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
