import Vue from 'vue';
import Router from 'vue-router';
const Index = () => import('@/examples/index.vue');
const Loading = () => import('@/examples/lib/loading.vue');
const Use = () => import('@/examples/lib/use.vue');
const Cropper = () => import('@/examples/lib/cropper.vue');

Vue.use(Router);

export default new Router({
  hashbang: false,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/loading',
          name: 'loading',
          component: Loading
        },
        {
          path: '/use',
          name: 'use',
          component: Use
        },
        {
          path: '/cropper',
          name: 'cropper',
          component: Cropper
        }
      ]
    }
  ]
});
