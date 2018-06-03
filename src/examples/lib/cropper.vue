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
    <div class="button-d" @click="$refs.cropper.startCrop()">
      开始截图
    </div>
    <div class="button-d" @click="$refs.cropper.stopCrop()">
      停止截图
    </div>
    <div class="button-d" @click="changeImgUrl">
      改变地址
    </div>
    <div  class="base-img">
      <img id="bigImg" src="http://ofyaji162.bkt.clouddn.com/touxiang.jpg"/>
      <div id="bigBox" style="border: 1px solid #000">
        <div>
          <img :src="srcData" id="smallImg"/>
        </div>
      </div>

      
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
          autoCrop: true,
          canMove: true,
          original: true,
          full: true,
          canScale: true,
          info: true
        },
        srcData: '',
        datax: {
          w: '',
          h: '',
        }
      }
    },
    mounted() {
      
        
    },
    methods: {
      changeImgUrl(){
        this.options.img = 'http://192.168.120.81:8083/group2/M00/04/B5/wKh4VFrVud2AKJgvAAEJPZmL72w944.jpg';
      },
      setData(val) {
        this.srcData = val;
        let img = new Image();
        img.src = this.srcData;
        let self = this;
        img.onload = function(){
          self.datax.w = img.width;
          self.datax.h = img.height;
        }
      },
      doImgSrc() {
        this.$refs.cropper.finish('base64', this.srcData);
      },
      getData(data) {
        document.getElementById('bigImg').style.transform = 'scale(' + data.scale + ',' + data.scale + ')'
        + 'translate3d('+ (data.x / data.scale)  + 'px,' + (data.y / data.scale) + 'px,' + '0)';

        document.getElementById('bigBox').style.width = data.w + 'px';
        document.getElementById('bigBox').style.height = data.h + 'px';

        document.getElementById('smallImg').style.width = data.cropW + 'px';
        document.getElementById('smallImg').style.height = data.cropH + 'px';
        document.getElementById('smallImg').style.transform = 'translate3d('+ data.cropOffsertX  + 'px,' + data.cropOffsertY + 'px,' + '0)';
        
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
    box-shadow: 0 0 3px #c9c9c9;
    width: 100%;
    margin-top:600px;
    margin-bottom: 20px;
    min-width: 640px;
    min-height: 640px;
    position: relative;
  }
  .base-img img{
    position: absolute;
  }
  .base-img #bigBox{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .base-img #bigBox div {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .base-img #bigBox1{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .base-img #bigBox1 div {
    position: relative;
    width: 100%;
    height: 100%;
  }
  #smallImg{
    border: 1px solid #000;
  }
  #smallImg1{
    border: 1px solid #000;
  }
</style>