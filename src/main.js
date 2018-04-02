import Vue from 'vue';
import App from './App';
import router from './router';
import plugin from './components/index';
import $ from 'jquery';
Vue.use(plugin);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});