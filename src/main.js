import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import style
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import Popover from 'vue-js-popover'
import carousel from 'vue-owl-carousel'
Vue.use(carousel);

import VModal from 'vue-js-modal'
Vue.use(VModal, {
    dynamicDefaults: {
        height: 'auto'
    }
});

import VueCountdownTimer from 'vuejs-countdown-timer';
Vue.use(VueCountdownTimer);

import Notifications from 'vue-notification'
import VueAWN from "vue-awesome-notifications"
Vue.use(VueAWN)
import { io } from 'socket.io-client';
import VueMomentsAgo from 'vue-moments-ago'
import InfiniteLoading from 'vue-infinite-loading';
Vue.use(VueMomentsAgo);
Vue.use(InfiniteLoading)
const moment = require('moment');
Vue.use(require('vue-moment'), { moment });

Vue.prototype.socket = io('http://34.230.149.150:3000',{autoConnect: true } );
console.log('hi',Vue.prototype.socket)
Vue.prototype.sktd = {};
//tell socket.io to never give up :)
//Vue.config.productionTip = false
import './assets/css/allcss.css'
import headers from './components/headers'
import gmfooter from './components/gmfooter'
import bmitm from './components/bmitm'
import msgrcv from './components/msgrcv'
import msgsend from './components/msgsend'
import msgftr from './components/msgftr'
import chatcom from '@/components/chatcom'
import property1 from '@/components/property1'
import property2 from '@/components/property2'
import orgcomp from '@/components/orgcomp'
import axios from 'axios'
import store from './store/index'
import VueAxios from 'vue-axios'
import ProgressBar from 'vue-simple-progress';
import vueCountdownTimer from 'vuejs-countdown-timer';
// import Swiper JS
/*  import Swiper from 'swiper'; */
Vue.use(store)
Vue.use(VueAxios, axios);
Vue.axios.defaults.headers = {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};
Vue.axios.defaults.baseURL = 'https://mafiasrival.com/api';
Vue.axios.defaults.headers.Authorization = '';
var VueTouch = require('vue-touch');
VueTouch.registerCustomEvent('doubletap', { type: 'tap', taps: 2 });
Vue.use(VueTouch, { name: 'v-touch' });
Vue.axios.interceptors.response.use(function(response) {
    if (response.data.glb) { // globle game details change/ msg or any thing else from globale
        switch (response.data.glb.sts) {
            case 'mbrk': // maintanance break 
                break;
            case 'updt': // updatee app 
                break;
            case 'usrbnd': // User band fom the app 
                break;
        }
    }
    if (response.data.error == 'Tkntfnd') {
        router.push('/login');
    }
    return response.data;
}, function(error) {
    console.log(error.response.data.error);
    if (error.response.data.error == 'Tkntfnd') {
        router.push('/login');
    }
    //  return Promise.reject(error);
});

Vue.use(vueCountdownTimer);
Vue.component('ProgressBar', ProgressBar)
Vue.component('ProgressBar', ProgressBar)
Vue.use(store)
Vue.use(Popover)
Vue.use(Notifications)
    // Vue.use(AWN)
Vue.use(router)
Vue.component('tops', headers)
Vue.component('foots', gmfooter)
Vue.component('bmitm', bmitm)
Vue.component('msgrcv', msgrcv)
Vue.component('msgsend', msgsend)
Vue.component('msgftr', msgftr)
Vue.component('chatcom', chatcom)
Vue.component('property1', property1)
Vue.component('property2', property2)
Vue.component('orgcomp', orgcomp)
Vue.prototype.usrtkn = window.localStorage.getItem("Usrtkn");
Vue.axios.defaults.headers.Authorization = 'Bearer ' + Vue.prototype.usrtkn;


import jquery from './assets/js/lib/jquery-min'
/* import fittext from './assets/js/lib/jquery.fittext'
Vue.prototype.fittext = fittext; */
window.jq = jquery;
import gmthr from './plugins/gmthr';
import mgo from './plugins/mgo';
//Vue.use(mgo);
Vue.use({
    install() {
        Vue.prototype.$gm = gmthr;
        Vue.prototype.$mgo = mgo;
    }
});
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')