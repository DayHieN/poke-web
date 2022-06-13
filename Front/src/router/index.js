import {
  createRouter,
  createWebHistory
} from 'vue-router'
import PokeGame from '@/views/PokeGame.vue'
import PokeDex from '@/views/PokeDex.vue'
import PokeDexGen1 from '@/components/PokeDex/gens/PokeDexGen1.vue'
import PokeDexGen2 from '@/components/PokeDex/gens/PokeDexGen2.vue'
import PokeDexGen3 from '@/components/PokeDex/gens/PokeDexGen3.vue'
import PokeDexGen4 from '@/components/PokeDex/gens/PokeDexGen4.vue'
import PokeMerch from '@/views/PokeMerch.vue'

const routes = [{
    path: '/PokeDex',
    name: 'PokeDex',
    component: PokeDex,
  },
  {
    path: '/PokeDexGen1',

    component: PokeDexGen1
  },
  {
    path: '/PokeDexGen2',

    component: PokeDexGen2
  },
  {
    path: '/PokeDexGen3',

    component: PokeDexGen3
  },
  {
    path: '/PokeDexGen4',

    component: PokeDexGen4
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