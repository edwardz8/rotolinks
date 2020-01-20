import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Players from '@/components/Players'
import Register from '@/components/Register'
import Draft from '@/components/Draft'
import Leaderboard from '@/components/Leaderboard'

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
      component: Players,
    },
    {
      path: '/draft',
      name: 'draft',
      component: Draft
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: Leaderboard
    }
  ]
})
