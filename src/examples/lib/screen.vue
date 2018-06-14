<template>
  <div>
    <a id="btnCapture" @click="$refs.screen.startCapture()" class="btn">屏幕截图</a>
    <ap-screen ref="screen" :options="option" @success="getBase64"></ap-screen>
    <img :src="imgSrc" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imgSrc: '',
        option: {
          hideCurrent: 0,//自动最小化当前窗口   0   1
          captureselectSize: 0,//更多个性化   0   1
          getimagefromclipboard: 1,//从剪贴板获取图片   4   1
          showprewindow: 1,//截图时弹出提示窗口   3   1
          fullscreen: 1,//截取当前桌面  2  1
        }
      }
    },
    methods: {
      getBase64(data) {
        console.log(data);
        this.imgSrc = 'data:image/png;base64,' + data;
      }
    }
  }
</script>