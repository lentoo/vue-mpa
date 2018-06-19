// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import mock from 'mockjs'
import Index from './index.vue'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.prototype.$mock = mock
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Index },
  template: '<Index/>'
})
