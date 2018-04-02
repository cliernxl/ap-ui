<template>
  <div id="home" :style="{'height': `${clientHeight}px`}">
    <div class="head" align="center">
      <div>
        <span>ap-ui&nbsp;组件库</span>
      </div>
    </div>

    <div class="content" :style="{'height': `${clientHeight - 100}px`}">
      <div class="menu">
        <ap_menu></ap_menu>
      </div>
      <div class="link">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import ap_menu from "./menu.vue"
  export default {
    name: 'el-index',
    components: {
      ap_menu
    },
    data() {
      return {
        clientHeight: 0,
      };
    },
    mounted() {
      this.clientHeight = document.documentElement.clientHeight;
    },
    methods: {

    }
  };
</script>

<style lang="less" scoped src="./style.less"></style>