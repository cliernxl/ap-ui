<template>
  <div :style="{'height': options.height + 'px','width': options.width + 'px'}">
    <img id="image" :src="options.img" alt="Picture">
  </div>
</template>
<style>
</style>
<script>
  import 'cropperjs/dist/cropper.css';
  import Cropper from 'cropperjs';
  export default {
    name: 'cropperjs',
    data() {
      return {
        cropper: {},
        croppable: false,
        imgData: ''
      }
    },
    props: {
      options: {}
    },
    watch: {
      'options.img': function () {
        this.cropper.replace(this.options.img);
      }
    },
    mounted() {
      let self = this;
      var image = document.getElementById('image');

      self.cropper = new Cropper(image, {
        viewMode: 0,
        dragMode: 'move',
        guides: true,
        center: true,
        highlight: true,
        cropBoxMovable: true,
        cropBoxResizable: true,
        autoCrop: false,
        ready: function () {
          self.croppable = true;
        }
      });
    },
    methods: {
      doImgSrc() {
        let self = this;
        if (!self.croppable) {
          return;
        }
        // Crop
        let croppedCanvas = self.cropper.getCroppedCanvas();
        // Mask
        var maskWidth = self.cropper.getData().width;
        var maskHeight = self.cropper.getData().height;
        var maskTop = self.cropper.getData().y;
        var maskLeft = self.cropper.getData().x;

        self.imgData = croppedCanvas.toDataURL();

        self.$emit('realTime', {
          imgData: croppedCanvas.toDataURL(),
          x: self.cropper.getData().x,
          y: self.cropper.getData().y,
          width: self.cropper.getData().width,
          height: self.cropper.getData().height,
        });
      },
      stopCrop() {
        this.cropper.clear();
        this.cropper.setDragMode('move');
      },
      startCrop() {
        this.cropper.setDragMode('crop');
      },
      changeImgUrl(src) {
        this.cropper.replace(src);
      }
    }
  }
</script>
<style>
</style>