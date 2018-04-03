<template>
    <div class="hg-loading-wrapper">
      <el-button>sss</el-button>
    </div>
  </template>
  <script>
    export default {
      name: 'ap-form',
      components: {
      },
      props: {
        options: {
          default: {},
          type: Object
        }
      },
      data() {
        return {
          option: {
            
          }
        }
      },
      created() {
        
      },
      methods: {
        
      }
    }
  
  </script>
  <style  scoped>
    .hg-loading-wrapper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 99;
      background-color: #fff;
    }
    
    .hg-cssload-container {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      margin: auto;
      text-align: center;
    }
    
    .hg-cssload-speeding-wheel {
      margin: 0 auto;
      border-radius: 50%;
      animation: cssload-spin 575ms infinite linear;
    }
    
    @keyframes cssload-spin {
      100% {
        transform: rotate(360deg);
      }
    }
    </style>