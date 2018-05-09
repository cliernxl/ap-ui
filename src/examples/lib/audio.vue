<template>
  <div style="width: 300px;">
    <el-button @click="getData">获取数据</el-button>
    <ap-audio ref="apAudio" :options="options1" :isScreen="false" :ishowVoice="false" :ishowProcess="true"></ap-audio>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options1: {
          src: 'http://jq22com.qiniudn.com/jq22m1.mp3',
          id: 'apAudio1',

        }
      }
    },
    methods: {
      getData() {
        // alert(`开始：${this.$refs.apAudio.allTime[0]}，结束：${this.$refs.apAudio.allTime[1]}`);
        this.$refs.apAudio.play(false)
      },
    }
  }
</script>