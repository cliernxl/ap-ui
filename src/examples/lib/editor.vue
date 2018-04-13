<template>
  <div id="editor">
    <button @click="getUEContent()">获取内容</button>
    <ap-ueditor :defaultMsg=defaultMsg :config=config ref="ue"></ap-ueditor>
  </div>
</template>
<style>
  .info {
    border-radius: 10px;
    line-height: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
  }
</style>
<script>
  export default {
    data() {
      return {
        defaultMsg: '这里是UE测试',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350
        }
      }
    },
    methods: {
      getUEContent() {
        let content = this.$refs.ue.getUEContent();
        this.$notify({
          title: '获取成功，可在控制台查看！',
          message: content,
          type: 'success'
        });
        console.log(content)
      }
    }
  };
</script>