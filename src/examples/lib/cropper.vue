<template>
  <div align="left" class="wrap">
    <h3>引用</h3>
    <div class="code">
      &lt;cropper ref="cropper" :options="options"&gt;&lt;/cropper&gt;
    </div>
    <h3>Demo</h3>
    <div class="cropper-d">
      <cropper ref="cropper" :options="options" @finishData="setData" @realTime="getData"></cropper>
    </div>
    <div class="button-d" @click="doImgSrc">
      生成base64
    </div>
    <div class="base-img">
      <img :src="srcData" />
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
          autoCrop: false,
        },
        srcData: '',
      }
    },
    methods: {
      setData(val) {
        this.srcData = val;
      },
      doImgSrc() {
        this.$refs.cropper.finish('base64', this.srcData);
      },
      getData(data) {
        console.log(data.img.height);
        console.log(data.img.width);
        let x = data.img.transform.split('translate3d(')[1].split(',')[0].split('p')[0];
        let y = data.img.transform.split('translate3d(')[1].split(',')[1].split('p')[0];
        console.log(`x:${x}  y:${y}`)
        console.log(data.h);
        console.log(data.w);
      }
    }
  }
</script>
<style>
  h3 {
    margin: 10px 0;
  }

  .wrap .code {
    line-height: 30px;
    font-size: 13px;
    background-color: #dcdcdc;
    border: 1px solid #a8a8a8;
    padding: 0 5px;
  }

  .cropper-d {
    width: 500px;
    height: 500px;
    float: left;
  }

  .button-d {
    width: 120px;
    height: 30px;
    margin: 15px;
    line-height: 30px;
    background-color: rgb(89, 89, 250);
    border-radius: 4px;
    border: 1px solid rgb(46, 46, 163);
    color: #fff;
    cursor: pointer;
    text-align: center;
    float: left;
  }

  .base-img {
    float: left;
    width: 150px;
    height: 150px;
    text-align: center;
    line-height: 150px;
    box-shadow: 0 0 3px #c9c9c9;
  }

  .base-img img {
    max-height: 150px;
    max-width: 150px;
  }
</style>