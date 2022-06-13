<template>
  <img
    src="https://fontmeme.com/permalink/220610/da2095bb695d0081b93aa40d7016514b.png"
    alt="fuente-pokemon"
    border="0"
  />
  <div v-if="listaArray">
    <PokeGameImg :vuekemon-id="pokemon.id" :respuesta="hayRespuesta" />
    <PokeGameOptions
      v-if="mostrarLista"
      @mi-respuesta="activarRespuesta"
      :lista-opciones="listaArray"
    />
    <h3 v-show="msg">{{ msg }} ¡Es <p> {{ pokemon.name }}!</p></h3>
    <button v-if="!mostrarLista" @click="newGame">Jugar otra vez</button>
  </div>
</template>

<script>
import getPokemonOptions from "@/helpers/vuekemonUtilidades.js";
import PokeGameImg from "@/components/pokeGame/PokeGameImg.vue";
import PokeGameOptions from "@/components/pokeGame/PokeGameOptions.vue";

export default {
  data() {
    return {
      pokemon: null,
      hayRespuesta: false,
      listaArray: null,
      msg: null,
      mostrarLista: true,
    };
  },
  components: {
    PokeGameImg,
    PokeGameOptions,
  },
  methods: {
    activarRespuesta(data) {
      this.hayRespuesta = true;
      this.mostrarLista = false;
      if (data === this.pokemon.id) {
        this.msg = `¡Correcto!`;
      } else {
        this.msg = `¡Qué pena!`;
      }
    },
    async cargar() {
      this.listaArray = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.listaArray[rndInt];
    },
    newGame() {
      (this.pokemon = null), (this.hayRespuesta = false);
      this.listaArray = null;
      this.msg = null;
      this.mostrarLista = true;
      this.cargar();
    },
  },
  mounted() {
    this.cargar();
  },
};
</script>

<style scoped>
body {
  background-image: url("../assets/background.jpg");
}

p::first-letter{
  text-transform: uppercase;
}
</style>

