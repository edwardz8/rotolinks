import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/components/Shop'
import Landing from '@/components/Landing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shop',
      component: Shop
    },
    {
      path: '/landing',
      name: 'landing',
      component: Landing
    }
  ]
})
