import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/components/Shop'
import Landing from '@/components/Landing'
import Players from '@/components/Players'
import PlayerProfile from '@/components/PlayerProfile'
import Register from '@/components/Register'
import Draft from '@/components/Draft'

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
      path: '/players:id',
      name: 'players-profile',
      component: PlayerProfile
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/draft',
      name: 'draft',
      component: Draft
    }
  ]
})
