<template>
    <div align="left" class="wrap">
      <h3>引用</h3>
      <div class="code">
        &lt;cropper ref="cropper" :options="options"&gt;&lt;/cropper&gt;
      </div>
      <h3>Demo</h3>
      <div class="cropper-d">
        <cropperjs ref="cropper" :options="options" @realTime="getData"></cropperjs>
      </div>
      <button class="button-d pointer" @click="$refs.cropper.doImgSrc()">
        生成base64
      </button>
      <button class="button-d" @click="$refs.cropper.startCrop()">
        开始截图
      </button>
      <button class="button-d" @click="$refs.cropper.stopCrop()">
        停止截图
      </button>
      <button class="button-d" @click="changeImgUrl">
        改变地址
      </button>
      <div>
        <img :src="imgData"/>
        <div>x: {{x}} ; y： {{y}}  w: {{w}} ,h:{{h}} </div>
      </div>
    </div>
    
  </template>
  <script>
    export default {
      data() {
        return {
          options: {
            img: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg',
            imgHeight: 500,
            imgWidth: 500,
          },
          imgData: '',
          x: '',
          y:'',
          h: '',
          w: ''
        }
      },
      mounted() {
        
          
      },
      methods: {
        getData(data){
          this.imgData = data.imgData;
          this.x = data.x;
          this.y = data.y;
          this.h = data.height;
          this.w = data.width;
        },
        changeImgUrl(){
          this.$refs.cropper.changeImgUrl('http://ofyaji162.bkt.clouddn.com/touxiang.jpg');
        }
      }
    }
  </script>
  <style>
    
  </style>