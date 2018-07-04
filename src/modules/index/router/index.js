import VueRouter from 'vue-router'

// 路由配置
const routes = [
  {
    path: '/component-a',
    component: () => import('../components/component-a.vue')
  },
  {
    path: '/component-b',
    component: () => import('../components/component-b.vue')
  },

  {
    path: '/',
    redirect: '/component-b'
  }
]

export default new VueRouter({
  routes
})
