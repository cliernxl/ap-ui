<style lang="less" src="./style.less"></style>
<template>
  <div align="left" class="ap-video">
    <div id="ap_video"></div>
    <div :style="{'width': options.outWidth}" class="slider-box" v-if="isScreen">
      <el-slider ref="sliderVideo" v-model="allTime" :max="maxSlider" range show-stops @change="formatTooltip">
      </el-slider>
    </div>
  </div>
</template>
<script>
  import '../../../static/video/js/Dvideo.js'
  export default {
    name: 'ap-video',
    props: {
      options: {
        type: Object,
        default: {
          title: '1'
        }
      },
      isScreen: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        videoWrap: null,
        video: null,
        allTime: [0,0],
        maxSlider: 10,
        oldTime: [0,0]
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        let self = this;
        self.videoWrap = document.getElementById('ap_video')
        self.video = new Dvideo({
          ele: '#ap_video',
          title: self.options.title,
          nextVideoExtend: function () {
            self.$emit('next');
          },
          showNext: self.options.showNext,
          width: self.options.outWidth,
          height: self.options.outHeight,
          src: self.options.url,
          autoplay: self.options.autoplay,
          showVideoDefinition: false,
          isDrag: self.options.isDrag,
          setVideoDefinition: function (type, e, current) {
            if (type === '0') {
              alert('你点击了标清')
              // video.setVideoInfo('這是標清','这里填写视频的标清地址',current)
            }
            if (type === '1') {
              alert('你点击了标清')
              // video.setVideoInfo('這是標清','这里填写视频的高清地址',current)
            }
            if (type === '2') {
              alert('你点击了标清')
              // video.setVideoInfo('這是標清','这里填写视频的超清地址',current)
            }
            self.video.showLoading(false)
          },
        });
        setTimeout(function(){
          self.maxSlider = Math.floor(self.video.durationT);
          self.allTime[1] = Math.floor(self.video.durationT);
          self.oldTime[1] = Math.floor(self.video.durationT);
        },300);
      },
      formatTooltip(val){
        let self = this;
        self.pause();
        if(self.oldTime[0] != val[0]){
          self.video.setVideoProcess(val[0]);
        }else if(self.oldTime[1] != val[1]){
          self.video.setVideoProcess(val[1]);
        }
        self.oldTime = val;
      },
      // 全屏
      setFullScreen() {
        this.video.launchFullScreen(videoWrap)
      },
      // 播放
      play() {
        this.video.videoPlay()
      },
      // 暂停
      pause() {
        this.video.videoPause()
      },
      // 播放暂停
      playpause() {
        this.video.videoPlayPause()
      },
      setVolume(v) {
        this.video.updateVolume(v)
      },
      setBackRate(index) {
        this.video.setPlayBackRate(index)
      },
      setVideoForward() {
        this.video.videoForward(10)
      },
      setVideoRewind() {
        this.video.videoRewind(10)
      },
      showLoading() {
        this.video.showLoading(true, '视频清晰度切换中，请稍等')
      },
      showTopBottomCtrlNotClose() {
        this.video.showTopBottomCtrl()
      },
      hideTopBottomCtrlLi() {
        this.video.hideTopBottomCtrl(true)
      },
      showTopBottomCtrl() {
        this.video.showTopBottomCtrl(true)
      },
      hideTopBottomCtrl() {
        this.video.hideTopBottomCtrl()
      },
      setVideoSize() {
        this.video.updateVideoSize(720, 480)
      },
      // bindMouser(){
      //   if(this.$refs.sliderVideo && this.$refs.sliderVideo.$children && this.$refs.sliderVideo.$children.length > 0 && this.$refs.sliderVideo.$children[0] && this.$refs.sliderVideo.$children[0].$vnode){
      //     let $sliderStart = this.$refs.sliderVideo.$children[0].$vnode.elm;
      //     let $sliderEnd = this.$refs.sliderVideo.$children[1].$vnode.elm;
      //     console.log($sliderStart);
      //     console.log($sliderEnd);
      //   }
      // },
    },
    destroyed() {
    }
  }
</script>