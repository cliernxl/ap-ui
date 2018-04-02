<template>
  <div class="wrap" align="left">
    <h3>下载（需切换 npm 不能为淘宝镜像）</h3>
    <div>
      npm install sinosoft-ap-ui
    </div>

    <h3>引用 main.js 添加</h3>
    <div>
      import 'sinosoft-ap-ui/dist/ap-ui.min.css';
      <br/> import sinosoftUI from 'sinosoft-ap-ui';
      <br/> Vue.use(sinosoftUI);
      <br/>
    </div>
    <h3>build</h3>
    <div>
      npm run build
    </div>
  </div>
</template>

<script>

  export default {
    name: 'el-loading',
    data() {
      return {
        data: {}
      };
    },
  };
</script>

<style scoped>
  h3 {
    margin: 10px 0;
  }
  
  .wrap div {
    line-height: 30px;
    font-size: 13px;
    background-color: #dcdcdc;
    border: 1px solid #a8a8a8;
    padding: 0 5px;
  }
</style>