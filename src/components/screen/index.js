// 引用组件
import screen from './main.vue';

screen.install = function (Vue) {
  Vue.component(screen.name, screen);
};

export default screen;
