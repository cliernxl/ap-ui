<template>
  <div>
    <VueUeditorWrap ref="ueditor" v-model="msg" :config="myConfig" :destroy="true" @ready="ready" :init="myInit"></VueUeditorWrap>
  </div>
</template>
<script>
  import VueUeditorWrap from 'vue-ueditor-wrap'
  export default {
    components: {
      VueUeditorWrap
    },
    name: 'ap-ueditor',
    data() {
      return {
        msg: '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',
        myConfig: {
          // 如果需要上传功能,找后端小伙伴要服务器接口地址
          // serverUrl: 'http://api.demo.com/ueditor/upload',
          // 你的UEditor资源存放的路径,相对于打包后的index.html
          UEDITOR_HOME_URL: './static/UEditor/',
          // 编辑器不自动被内容撑高
          autoHeightEnabled: false,
          // 初始容器高度
          initialFrameHeight: 440,
          // 初始容器宽度
          initialFrameWidth: '100%',
          // 关闭自动保存
          enableAutoSave: false,
          toolbars: [
            ['fullscreen', 'undo', 'redo', 'bold', 'indent', 'formatmatch', 'fontsize', 'justifyleft', 'justifyright', 'justifycenter', 'justifyjustify', 'insertorderedlist',
              'insertunorderedlist']
          ],
          fontfamily: [
            { label: '', name: 'songti', val: '宋体,SimSun' },
          ]
        }
      }
    },
    props: {

    },
    mounted() {

    },
    methods: {
      ready(editorInstance) {
        console.log(`编辑器实例${editorInstance.key}: `, editorInstance)
      },
      myInit() {
        // this.$refs.ueditor.registerButton({
        //   name: 'test',
        //   icon: '/static/test-button.png',
        //   tip: 'this is a test tip',
        //   handler: (editor, name) => {
        //     editor.execCommand('inserthtml', `<span>text inserted by test button</span>`)
        //   }
        // })
      }
    },
  }
</script>