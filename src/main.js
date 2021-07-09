import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store/store';
import axios from 'axios';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';  

import 'element-ui/lib/theme-chalk/index.css';

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.common = {
  'Content-Type': 'application/json',
};

Vue.config.productionTip = false;

Vue.use(ElementUI, { locale });

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
