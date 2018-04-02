// 引用组件
import cropper from './main.vue';

cropper.install = function (Vue) {
  Vue.component(cropper.name, cropper);
};

export default cropper;
