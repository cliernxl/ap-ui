// 引用组件
import audio from './main.vue';

audio.install = function (Vue) {
  Vue.component(audio.name, audio);
};

export default audio;
