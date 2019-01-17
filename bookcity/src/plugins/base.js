import elHeader from "@/components/elheader";
console.log(elHeader);
export default {
    install(Vue){
        Vue.component('elHeader',elHeader)
    }
}