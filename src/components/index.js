import cropper from './cropper/index.js';
import editor from './editor/index.js';
import ueditor from './ueditor/index.js';

const components = [
  cropper,
  editor,
  ueditor
];

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.1',
  install,
  cropper,
  editor,
  ueditor
};
