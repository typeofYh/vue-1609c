import Vue from "vue";
import App from "./App"
import myHeader from "@/myheader";
Vue.component('myHeader',myHeader);
new Vue({
    el:"#app",
    render:(h)=>h(App)
})