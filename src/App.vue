<template>
  <div id="app" align="center">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
  #app{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
</style>
