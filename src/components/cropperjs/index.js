// 引用组件
import cropperjs from './main.vue';

cropperjs.install = function (Vue) {
  Vue.component(cropperjs.name, cropperjs);
};

export default cropperjs;
