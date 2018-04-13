// 引用组件
import ueditor from './main.vue';

ueditor.install = function (Vue) {
  Vue.component(ueditor.name, ueditor);
};

export default ueditor;
