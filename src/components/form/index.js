// 引用组件
import form from './main.vue';

form.install = function (Vue) {
  Vue.component(form.name, form);
};

export default form;
