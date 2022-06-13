import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

axios.defaults.baseURL = 'http://localhost:27017/api'

export default pokemonApi