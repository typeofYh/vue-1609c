import elHeader from '@/components/elheader'
import axios from 'axios';
export default{
    install(Vue){
        Vue.component('elHeader',elHeader);
        Vue.prototype.$http = axios;
    }
}