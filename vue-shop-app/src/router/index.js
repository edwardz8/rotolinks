import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/components/Shop'
import Landing from '@/components/Landing'
import Players from '@/components/Players'
import Register from '@/components/Register'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/players',
      name: 'players',
      component: Players
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
