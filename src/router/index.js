import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Films from '../views/Home/HomeFilms.vue'
import Film from '../views/Film.vue'
import Cinemas from '../views/Home/HomeCinemas.vue'
import Cinema from '../views/Cinema.vue'
import Center from '../views/Home/HomeCenter.vue'
import City from '../views/City.vue'
import Login from '../views/Login.vue'
import NowPlaying from '../views/Home/nowPlaying'
import ComingSoon from '../views/Home/Comingsoon'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'center',
          component: Center
        },
        {
          path: 'films',
          component: Films,
          children: [
            {
              path: 'nowplaying',
              name: 'nowplaying',
              component: NowPlaying
            },
            {
              path: 'comingsoon',
              name: 'comingsoon',
              component: ComingSoon
            },
            {
              path: '*',
              component: NowPlaying
            }
          ]
        },
        {
          path: 'cinemas',
          component: Cinemas
        },
        {
          path: '*',
          redirect: 'films/nowplaying/'
        }
      ]
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/film/:id',
      component: Film
    },
    {
      path: '/cinema/:id/film',
      component: Cinema
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
