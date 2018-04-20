<template>
  <div>
    <div id="info" v-show="showDownLoadState">
      <a @click="downloadExe">安装</a>
    </div>
  </div>
</template>
<script>
  import "../../../static/niuniu/jquery.md5.js";
  import "../../../static/niuniu/jquery.json-2.3.min.js";
  import "../../../static/niuniu/niuniucapture.js";
  export default {
    name: 'ap-screen',
    props: {
      options: {
        default: {
          hideCurrent: 0,//自动最小化当前窗口   0   1
          captureselectSize: 0,//更多个性化   0   1
          getimagefromclipboard: 1,//从剪贴板获取图片   4   1
          showprewindow: 1,//截图时弹出提示窗口   3   1
          fullscreen: 1,//截取当前桌面  2  1
        },
        type: Object
      }
    },
    data() {
      return {
        captureObj: null,
        showDownLoadState: false,
        downloadUrl: 'http://www.ggniu.cn/download/CaptureInstall.exe'
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        // if (isMacintosh()) {
        //   self.downloadUrl = 'http://www.ggniu.cn/download/CaptureInstall.dmg';
        // }
        let self = this;
        self.captureObj = new NiuniuCaptureObject();
        self.captureObj.NiuniuAuthKey = "niuniu";
        //此处可以设置相关参数 
        self.captureObj.TrackColor = self.captureObj.rgb2value(255, 0, 0);
        self.captureObj.EditBorderColor = self.captureObj.rgb2value(0, 0, 255);
        self.captureObj.WatermarkTextValue = ' ';
        self.captureObj.MagnifierLogoText = " "
        //设置工具栏的TOOLTIP  
        //captureObj.ToolTipText = "tipRectangle|tipCircle|tipArrow|tipBrush|tipGlitter|tipMosaic|tipText|tipUndo|tipSave|tipCancel|tipFinish|Finish";

        //设置控件加载完成以及截图完成的回调函数
        self.captureObj.FinishedCallback = function (type, x, y, width, height, info, content, localpath) {
          if (type < 0) {
            //需要重新安装控件
            self.ShowDownLoad();
            return;
          }
          switch (type) {
            case 1:
              {
                self.UploadCaptureData(content, localpath);
                break;
              }
            case 2:
              {
                console.log('您取消了截图');
                break;
              }
            case 3:
              {
                self.UploadCaptureData(content, localpath);
                break;
              }
            case 4:
              {
                if (info == '0') {
                  console.log('从剪贴板获取到了截图' + localpath);
                  self.UploadCaptureData(content, localpath);
                }
                else {
                  console.log('从剪贴板获取图片失败。');
                }
                break;
              }
          }
        };
        self.captureObj.VersionCallback = function () { };
        //初始化控件 
        self.captureObj.InitNiuniuCapture();
      },
      startCapture() {
        var captureRet = this.capture();
        //从返回值来解析显示  	
        if (captureRet == this.captureObj.emCaptureFailed) {
          this.ShowDownLoad();
        } else if (captureRet == this.captureObj.emCaptureUnknown) {
          this.ShowDownLoad();
        }
      },
      capture() {
        let self = this;
        var hideFlag = self.options.hideCurrent || 0;
        var autoFlag = self.options.captureselectSize || 0;
        var captureRet = true;
        if (autoFlag == 0) {
          return self.captureObj.DoCapture("1.jpg", hideFlag, 0, 0, 0, 0, 0);
        }
        else {
          autoFlag = self.options.getimagefromclipboard || 1;
          if (autoFlag == 4) {
            return self.captureObj.DoCapture("", 0, 4, 0, 0, 0, 0);
          }
          autoFlag = self.options.showprewindow || 1;
          if (autoFlag == 3) {
            //此时如果x, y, width, height全为0，则表示预截图窗口点击“开始截图”时，手工先把区域
            //x, y, width, height全为1，则表示预截图窗口点击“开始截图”时，自动截取整个桌面
            //其他情况，则自动截取 x, y, width, height 指定的区域  
            return self.captureObj.DoCapture("1.jpg", hideFlag, 3, 0, 0, 0, 0);
          }
          autoFlag = self.options.fullscreen || 1;
          if (autoFlag == 2) {
            return self.captureObj.DoCapture("1.jpg", hideFlag, 2, 0, 0, 0, 0);
          }
          else {
            return self.captureObj.DoCapture("1.jpg", hideFlag, 1, $('#xpos').val(), $('#ypos').val(), $('#width').val(), $('#height').val());
          }
        }
      },
      UploadCaptureData(content, localpath) {
        this.$emit('success', content);
      },
      ShowDownLoad() {
        this.showDownLoadState = true;
      },
      downloadExe() {
        window.open(this.downloadUrl);
        this.showDownLoadState = false;
      },
    }
  }
</script>
<style scoped>
  #info {
    position: fixed;
    right: 0;
    bottom: 0;
    height: 30px;
    line-height: 30px;
    background-color: #dedede;
    width: 100%;
  }
</style>