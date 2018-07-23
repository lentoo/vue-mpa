<template>
  <div id="app">
    <!-- <img src="@/assets/test.png"> -->
    <header>
      <h2>this is index module</h2>
    </header>
    <main>
      main
      <p>购物车数量{{carNum}}</p>
      <button @click="updateCarNum">更新购物车数量</button>
      <router-view></router-view>
    </main>
    <footer>footer</footer>
  </div>
</template>

<script>
import store from './store'
import { getBaidu } from '@/fetch/index'
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  store,
  created () {
    this.$mock.mock('https://api.douban.com/v2/movie/in_theaters', {
      'age|18-60': 1
    })

    getBaidu().then(function (res) {
      console.log(res)
    })
  },

  computed: {
    ...mapGetters({
      carNum: 'carNum'
    })
  },

  methods: {
    updateCarNum () {
      this.$store.dispatch('UPDATE_CATNUM', this.carNum - 1)
    }
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
