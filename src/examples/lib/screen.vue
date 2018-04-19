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
        option: {}
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