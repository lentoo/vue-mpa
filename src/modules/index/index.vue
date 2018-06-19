<template>
  <div id="app">
    <!-- <img src="@/assets/test.png"> -->
    <header>
      <h2>this is index module</h2>
    </header>
    <main>main</main>
    <footer>footer</footer>
  </div>
</template>

<script>
export default {
  components: {}
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
  header ,footer {
    line-height: .5rem;
  }
  main {
    flex: 1;
  }
}
</style>
