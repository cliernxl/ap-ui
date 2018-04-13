<template>
  <!-- <div style="width: 900px;height: 900px"> -->
  <div :style="{'width': `${option.imgWidth}px`,'height': `${option.imgHeight}px`}">
    <vueCropper ref="ucropper" :img="option.img" :outputSize="option.size" :outputType="option.outputType" :info="option.info"
      :canScale="option.canScale" :autoCrop="option.autoCrop" :autoCropWidth="option.autoCropWidth" :autoCropHeight="option.autoCropHeight"
      :fixed="option.fixed" :fixedNumber="option.fixedNumber" @realTime="realTime"></vueCropper>
  </div>
</template>
<script>
  import VueCropper from "vue-cropper"
  export default {
    name: 'cropper',
    components: {
      VueCropper
    },
    props: {
      options: {
        default: {},
        type: Object
      }
    },
    data() {
      return {
        option: {
          img: '',//图片地址
          info: true, //裁剪框大小显示
          size: 1, //裁剪生成图片的质量
          outputType: 'png', //jpeg || png || webp
          canScale: true,// 图片是否允许滚动缩放
          autoCrop: true,//是否默认生成截图框
          autoCropWidth: 300,
          autoCropHeight: 250,
          fixed: false,//是否开启截图框宽高固定比例
          imgHeight: 600,
          imgWidth: 900
        }
      }
    },
    created() {
      this.option = {
        img: this.options.img || 'http://ofyaji162.bkt.clouddn.com/bg12.jpg',//图片地址
        info: this.options.info ? true : false, //裁剪框大小显示
        size: this.options.size || 1, //裁剪生成图片的质量
        outputType: this.options.outputType || 'jpeg', //jpeg || png || webp
        canScale: this.options.canScale ? true : false,// 图片是否允许滚动缩放
        autoCrop: this.options.autoCrop ? true : false,//是否默认生成截图框
        autoCropWidth: this.options.autoCropWidth || 300,
        autoCropHeight: this.options.autoCropHeight || 250,
        fixed: this.options.fixed ? true : false,//是否开启截图框宽高固定比例
        imgHeight: this.options.imgHeight || 600,
        imgWidth: this.options.imgWidth || 900
      }
    },
    methods: {
      startCrop() {
        // start
        this.crap = true
        this.$refs.ucropper.startCrop()
      },
      stopCrop() {
        //  stop
        this.crap = false
        this.$refs.ucropper.stopCrop()
      },
      clearCrop() {
        // clear
        this.$refs.ucropper.clearCrop()
      },
      realTime(data) {
        this.$emit('realTime', data);
      },
      finish(type) {
        // 输出
        let srcData = '';
        if (type === 'blob') {
          this.$refs.ucropper.getCropBlob((data) => {
            srcData = window.URL.createObjectURL(data)
            this.$emit('finishData', srcData);
          })
        } else {
          this.$refs.ucropper.getCropData((data) => {
            srcData = data
            this.$emit('finishData', srcData);
          })
        }
      },
      down(type) {
        // event.preventDefault()
        var aLink = document.createElement('a')
        aLink.download = 'demo'
        // 输出
        if (type === 'blob') {
          this.$refs.ucropper.getCropBlob((data) => {
            this.downImg = data
            aLink.href = data
            aLink.click()
          })
        } else {
          this.$refs.ucropper.getCropData((data) => {
            this.downImg = data
            aLink.href = data
            aLink.click()
          })
        }
      },
    }
  }

</script>