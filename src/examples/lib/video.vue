<template>
  <div style="padding-left: 20px;">
    <el-button @click="getData">获取数据</el-button>
    <ap-video ref="apVideo" :options="videoData" :isScreen="true"></ap-video>
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
        }
      }
    },
    methods: {
      getData(){
        alert(`开始：${this.$refs.apVideo.allTime[0]}，结束：${this.$refs.apVideo.allTime[1]}`);
      },
    }
  }
</script>