import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Films from '../views/Home/HomeFilm.vue'
import Film from '../views/Film.vue'
import Cinemas from '../views/Home/HomeCinemas.vue'
import Cinema from '../views/Cinema.vue'
import Center from '../views/Home/HomeCenter.vue'
import City from '../views/City.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      chileren: [
        {
          path: 'center',
          component: Center
        },
        {
          path: 'films',
          component: Films
        },
        {
          path: 'cinemas',
          component: Cinemas
        },
        {
          path: '*',
          redirect: '/films'
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
