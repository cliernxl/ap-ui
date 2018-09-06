<template>
  <div id="pasteScreen">
    <div>
      <input type="text" id="testInput" placeholder="截屏后粘贴到输入框中" size="30" />
    </div>
    <img :src="imgSrc" style="border: 1px solid #dcdcdc;margin-top: 10px;"/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imgSrc: ''
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        let self = this;
        var imgReader = function (item) {
          var blob = item.getAsFile(),
            reader = new FileReader();
          // 读取文件后将其显示在网页中
          reader.onload = function (e) {
            self.imgSrc = e.target.result;
          };
          // 读取文件
          reader.readAsDataURL(blob);

        };
        document.getElementById('testInput').addEventListener('paste', function (e) {
          // 添加到事件对象中的访问系统剪贴板的接口
          var clipboardData = e.clipboardData,
            i = 0,
            items, item, types;

          if (clipboardData) {
            items = clipboardData.items;
            if (!items) {
              return;
            }
            item = items[0];
            // 保存在剪贴板中的数据类型
            types = clipboardData.types || [];
            for (; i < types.length; i++) {
              if (types[i] === 'Files') {
                item = items[i];
                break;
              }
            }
            // 判断是否为图片数据
            if (item && item.kind === 'file' && item.type.match(/^image\//i)) {
              imgReader(item);
            }
          }
        });
      }
    }
  }
</script>