<style lang="less" src="./style.less"></style>
<template>
  <div :id="options.id" class="ap-audio">
    <div class="audio-view">
      <div class="audio-body">
        <div class="audio-backs">
          <div class="audio-this-time">00:00</div>
          <div class="audio-count-time">00:00</div>
          <div class="audio-setbacks">
            <i class="audio-this-setbacks">
              <span class="audio-backs-btn"></span>
            </i>
            <span class="audio-cache-setbacks">
            </span>
          </div>
        </div>
      </div>
      <div class="audio-btn">
        <div class="audio-select">
          <div action="play" data-on="icon iconfont icon-bofang" data-off="icon iconfont icon-zanting" class="icon iconfont icon-bofang"></div>
          <div action="volume" class="icon iconfont icon-shengyin">
            <div class="audio-set-volume">
              <div class="volume-box">
                <i>
                  <span class="audio-backs-btn"></span>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slider-box" v-if="isScreen">
      <el-slider ref="sliderVideo" v-model="allTime" :max="maxSlider" range show-stops @change="formatTooltip">
      </el-slider>
    </div>
  </div>
</template>
<script>
  import '../../../static/audio/js/audio.js'
  export default {
    name: 'ap-audio',
    props: {
      options: {
        default: {},
        type: Object
      },
      isScreen: {
        default: false,
        type: Boolean
      }
    },
    data() {
      return {
        audioFn: null,
        allTime: [0,0],
        maxSlider: 10,
        oldTime: [0,0]
      }
    },
    created() {

    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        let self = this;
        var setConfig = {
          id: "#" + self.options.id,
          controller: "#" + self.options.id + ' .audio-view',//外层盒子
          elem: {
            thisTime: "#" + self.options.id + ' .audio-this-time',//当前时间
            countTime: "#" + self.options.id + ' .audio-count-time',//总时长
            setbacks: "#" + self.options.id + ' .audio-setbacks',//总进度
            thisSetbacks: "#" + self.options.id + ' .audio-this-setbacks',//当前进度
            cacheSetbacks: "#" + self.options.id + ' .audio-cache-setbacks',//已加载进度
            audioBtn: "#" + self.options.id + ' .audio-select',//按钮组
            volume: "#" + self.options.id + ' .audio-set-volume'//音量
          },
          song: [
            {
              src: self.options.src,
            }
          ],
          error: function (meg) {
          }
        };
        self.audioFn = new AudioPlay(setConfig);
        if (self.audioFn) {
          self.audioFn.loadFile();
          setTimeout(function(){
            self.maxSlider = self.audioFn.getAllTime();
            self.allTime[1] = self.audioFn.getAllTime();
             self.oldTime[1] = self.audioFn.getAllTime();
          },300);
        }
      },
      formatTooltip(val) {
        let self = this;
        if (self.oldTime[0] != val[0]) {
          self.audioFn.schedule(true,val[0]);
        } else if (self.oldTime[1] != val[1]) {
          self.audioFn.schedule(true,val[1]);
        }
        self.oldTime = val;
      },
      play(flag){
        this.audioFn.play(flag);
      },
    }
  }

</script>