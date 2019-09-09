import Vue from 'vue'
import App from './App.vue'
import * as Filters from './utils/filters';
import router from './router';
import axios from 'axios';
import store from './store/store';

axios.defaults.baseURL= "https://vue-boutique.firebaseio.com/";
Vue.prototype.$http = axios; 

Vue.config.productionTip = false;

Object.keys(Filters).forEach( (f) => {
  Vue.filter(f, Filters[f]);
});



new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
