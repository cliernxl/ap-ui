// 引用组件
import video from './main.vue';

video.install = function (Vue) {
  Vue.component(video.name, video);
};

export default video;
