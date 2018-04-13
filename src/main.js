import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import plugin from './components/index';
import $ from 'jquery';

import '../static/ueditor/UE/ueditor.config.js';
import '../static/ueditor/UE/ueditor.all.min.js';
import '../static/ueditor/UE/lang/zh-cn/zh-cn.js';
import '../static/ueditor/UE/ueditor.parse.min.js';

Vue.use(ElementUI);
Vue.use(plugin);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});