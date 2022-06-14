import {
  createRouter,
  createWebHistory
} from 'vue-router'
import PokeGame from '@/views/PokeGame.vue'
import PokeDex from '@/views/PokeDex.vue'
import PokeMerch from '@/views/PokeMerch.vue'
import Home from '@/views/Home.vue'

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

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router