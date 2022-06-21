import {
  createRouter,
  createWebHistory
} from 'vue-router'
import PokeGame from '@/views/PokeGame.vue'
import PokeDex from '@/views/PokeDex.vue'
import PokeMerch from '@/views/PokeMerch.vue'
import PokeMovies from '@/views/PokeMovies.vue'
import Home from '@/views/Home.vue'
import NotFoundPage from '@/shared/NotFoundPage'
import About from '@/shared/About'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
},
{
  path: '/PokeDex',
  name: 'PokeDex',
  component: PokeDex,
},

{
  path: '/PokeGame',
  name: 'PokeGame',
  component: PokeGame
},
{
  path: '/PokeMerch',
  name: 'PokeMerch',
  component: PokeMerch
},
{
  path: '/PokeMovies',
  name: 'PokeMovies',
  component: PokeMovies
},
{
  path: '/About',
  name: 'About',
  component: About
},
{
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import( /* webpackChunkName: "notfound" */ '@/shared/NotFoundPage')
},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router