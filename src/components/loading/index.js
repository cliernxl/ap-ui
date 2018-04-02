// 引用组件
import loading from './loading.vue';

loading.install = function (Vue) {
  Vue.component(loading.name, loading);
};

export default loading;
