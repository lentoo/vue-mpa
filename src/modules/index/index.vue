<template>
  <div id="app">
    <!-- <img src="@/assets/test.png"> -->
    <header>
      <h2>this is index module</h2>
    </header>
    <main>
      main
      <router-view></router-view>
    </main>
    <footer>footer</footer>
  </div>
</template>

<script>
import { getBaidu } from '@/fetch/index'
export default {
  created () {
    this.$mock.mock('https://api.douban.com/v2/movie/in_theaters', {
      'age|18-60': 1
    })

    getBaidu().then(function (res) {
      console.log(res)
    })
  }
}
</script>

<style lang="less">
@import "../common/less/vars.less";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  .layout;
  justify-content: space-between;
  h2 {
    // font-size: 18px;
    font-size: 0.12rem;
    color: orange;
  }
  header,
  footer {
    line-height: 0.5rem;
  }
  main {
    flex: 1;
  }
}
</style>
