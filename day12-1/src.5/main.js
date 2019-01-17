import Vue from "vue";
import App from "./App";
import bus from "./plugins/bus";
Vue.use(bus);
new Vue({
    el:'#app',
    render:(h)=>h(App)
})
