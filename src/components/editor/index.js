// 引用组件
import editor from './main.vue';

editor.install = function (Vue) {
  Vue.component(editor.name, editor);
};

export default editor;
