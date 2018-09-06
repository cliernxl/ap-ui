import Vue from 'vue';
import Router from 'vue-router';
const Index = () => import('@/examples/index.vue');
const Use = () => import('@/examples/lib/use.vue');
const Cropper = () => import('@/examples/lib/cropper.vue');
const Cropperjs = () => import('@/examples/lib/cropperjs.vue');
const Form = () => import('@/examples/lib/form.vue');
const Editor = () => import('@/examples/lib/editor.vue');
const Screen = () => import('@/examples/lib/screen.vue');
const Video = () => import('@/examples/lib/video.vue');
const Audio = () => import('@/examples/lib/audio.vue');
const PasteScreen = () => import('@/examples/lib/pasteScreen.vue');
const Direction = () => import('@/examples/lib/direction.vue');

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
          path: '/use',
          name: 'use',
          component: Use
        },
        {
          path: '/cropper',
          name: 'cropper',
          component: Cropper
        },
        {
          path: '/cropperjs',
          name: 'cropperjs',
          component: Cropperjs
        },
        {
          path: '/form',
          name: 'ap-form',
          component: Form
        },
        {
          path: '/editor',
          name: 'ap-editor',
          component: Editor
        },
        {
          path: '/screen',
          name: 'ap-screen',
          component: Screen
        },
        {
          path: '/video',
          name: 'ap-video',
          component: Video
        },
        {
          path: '/audio',
          name: 'ap-audio',
          component: Audio
        },
        {
          path: '/pasteScreen',
          name: 'ap-pasteScreen',
          component: PasteScreen
        },
        {
          path: '/direction',
          name: 'ap-direction',
          component: Direction
        }
      ]
    }
  ]
});
