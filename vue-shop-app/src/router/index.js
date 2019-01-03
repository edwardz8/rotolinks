import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/components/Shop'
import Landing from '@/components/Landing'
import Players from '@/components/Players'
import Register from '@/components/Register'
import CreateLeague from '@/components/CreateLeague'

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
      path: '/create-league',
      name: 'create-league',
      component: CreateLeague
    }
  ]
})
