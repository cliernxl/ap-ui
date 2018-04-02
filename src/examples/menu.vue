<template>
  <div id="menu">
    <ul>
      <li>
        <a :class="{'active': '/use' == activePath}" @click="goLink('/use')">
          使用指南
        </a>
      </li>
    </ul>
    <div>组件</div>
    <ul>
      <li v-for="item in resource">
        <a :class="{'active': item.path == activePath}" @click="goLink(item.path)">
          {{item.name}}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  import resource from './resource'
  export default {
    data() {
      return {
        resource: resource,
        activePath: ''
      }
    },
    mounted() {
    },
    methods: {
      goLink(val) {
        this.activePath = val;
        this.$router.push({ path: val });
      }
    }
  }
</script>

<style lang="less" scoped src="./style.less"></style>