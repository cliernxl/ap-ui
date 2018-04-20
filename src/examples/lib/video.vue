<template>
  <div style="padding-left: 20px;">
    <el-button @click="getData">获取数据</el-button>
    <ap-video ref="apVideo" :options="videoData" :isScreen="true"></ap-video>
    <div style="margin-top: 100px;">
      <!-- <ap-video ref="apVideo2" :options="videoData1" :isScreen="false"></ap-video> -->
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        videoData: {
          title: '',
          outWidth: '580px',
          outHeight: '292px',
          url: 'http://oxyi0vk1f.bkt.clouddn.com/evn4.mp4',
          showNext: false,//是否显示下一个
          autoplay: false,//是否自动播放
          isDrag: true,//进度条是否可以拖动
          id: 'video1'
        },
        videoData1: {
          title: '',
          outWidth: '580px',
          outHeight: '292px',
          url: '',
          showNext: false,//是否显示下一个
          autoplay: false,//是否自动播放
          isDrag: true,//进度条是否可以拖动
          id: 'video2'
        },
      }
    },
    methods: {
      getData(){
        // this.videoData1.url = 'http://oxyi0vk1f.bkt.clouddn.com/evn4.mp4';
        // alert(`开始：${this.$refs.apVideo.allTime[0]}，结束：${this.$refs.apVideo.allTime[1]}`);
        this.$refs.apVideo.onPause();
      },
    }
  }
</script>