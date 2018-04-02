<template>
  <div>
    <button @click="doImgSrc">base64</button>
    <img :src="srcData" style="width: 300px;height: 300px;"/>
    <cropper ref="cropper" :options="options" @finishData="setData" @realTime="getData"></cropper>
    <div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px'}">
      <div :style="previews.div">
        <img :src="previews.url" :style="previews.img">
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
          imgWidth: 500
        },
        previews: {},
        srcData: '',
      }
    },
    methods: {
      setData(val){
        this.srcData = val;
      },
      doImgSrc(){
        this.$refs.cropper.finish('base64',this.srcData);
      },
      getData(data) {
        console.log(data.img.height);
        console.log(data.img.width);
        let x = data.img.transform.split('translate3d(')[1].split(',')[0].split('p')[0];
        let y = data.img.transform.split('translate3d(')[1].split(',')[1].split('p')[0];
        console.log(`x:${x}  y:${y}`)
        console.log(data.h);
        console.log(data.w);
        this.previews = data;
      }
    }
  }
</script>
<style>
  .btns {
    width: 100%;
    height: 30px;
  }

  .btns div {
    width: 100px;
    color: #fff;
    cursor: pointer;
    text-align: center;
    float: left;
    height: 30px;
    background-color: blue;
  }
</style>