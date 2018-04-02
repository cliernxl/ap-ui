import loading from './loading/index.js';
import cropper from './cropper/index.js';

const components = [
  loading,
  cropper
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
  loading,
  cropper
};
