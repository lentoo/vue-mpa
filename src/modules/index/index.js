// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Index from './index.vue'

import router from './router'

if (process.env.NODE_ENV === 'development') {
  const mock = require('mockjs')
  Vue.prototype.$mock = mock
}
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Index },
  template: '<Index/>',
  router
})
