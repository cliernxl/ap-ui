import cropper from './cropper/index.js';
import form from './form/index.js';

const components = [
  cropper,
  form
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
  form
};
