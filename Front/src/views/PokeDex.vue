<template>
  <input
    type="text"
    v-model="pokemonSearch"
    name=""
    id="search"
    placeholder="buscar nombre del Pokémon..."
  />
  <div v-if="pokemonSearch" class="poke-card fade-in">
    <p class="search-card-title">
      {{ pokemonShow.name }} <small>#{{ pokemonShow.id }}</small>
    </p>
    <img
      class="sprite"
      :src="pokemonShow.sprite"
      @mouseover="pokemonShow.sprite = pokemonShow.shiny"
      @mouseout="pokemonShow.sprite = pokemonShow.sprite2"
      @click="sendInfo(pokemonShow)"
      :alt="pokemonShow.name"
    />
  </div>
  <div v-if="!pokemonSearch" class="container fade-in">
    <div v-for="(data, index) in pokemons" :key="index" class="poke-card">
      <p class="pkmn-name">
        {{ data.name }}<small>#{{ data.id }}</small>
      </p>

      <img
        class="sprite"
        :src="data.sprite"
        @mouseover="data.sprite = data.shiny"
        @mouseout="data.sprite = data.sprite2"
        @click="sendInfo(data)"
        :alt="data.name"
      />
      <!-- <div v-for="(type, index) in data.types" :key="index">
        <img
          :src="'@/assets/types/' + type.type.name + '.png'"
          :alt="type.type.name"
        />
      </div> -->
    </div>
    <InfoModal :poke_info="pokemonInfo" @click="hideModal" :class="modalShow" />
  </div>
</template>
<script>
import InfoModal from "@/components/PokeDex/InfoModal.vue";
import axios from "axios";
export default {
  components: {
    InfoModal,
  },
  data() {
    return {
      pokemons: [],
      fadeIn: null,
      modalShow: "modal modal-close-modal",
      pokemonInfo: [],
      pokemonSearch: "",
      pokemonShow: {},
    };
  },
  created() {
    this.getPokemons(1, 890);
  },
  watch: {
    pokemonSearch(newData) {
      if (newData != "") {
        this.searchPokemon();
      }
    },
  },
  methods: {
    hideModal() {
      this.modalShow = "modal modal-close-modal";
    },
    showModal() {
      this.modalShow = "modal modal-show";
    },
    sendInfo(pokeInfo) {
      this.showModal();
      console.log(pokeInfo);
      this.pokemonInfo = pokeInfo;
    },

    async getPokemons(start, amount) {
      let i = start;
      let pokemons = new Array(amount);
      for await (const x of pokemons) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        );
        let pokemon = {
          sprite: response.data.sprites.front_default,
          sprite2: response.data.sprites.front_default,
          shiny: response.data.sprites.front_shiny,
          name: response.data.name,
          id: response.data.id,
          types: response.data.types,
          abilities: response.data.abilities,
          weight: response.data.weight/10,
          height: response.data.height/10,
        };
        
        this.pokemons.push(pokemon);
        i++;
      }
    },
    searchPokemon() {
      // await axios
      //   .get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonSearch}`)
      //   .then((response) => {
      //     let pokemon = {
      //       sprite: response.data.sprites.front_default,
      //       sprite2: response.data.sprites.front_default,
      //       shiny: response.data.sprites.front_shiny,
      //       name: response.data.name,
      //       id: response.data.id,
      //       types: response.data.types,
      //     };
      //     this.pokemonShow = pokemon;
      //   });
      let resultado = this.pokemons.filter((pokemon) =>
        pokemon.name.includes(this.pokemonSearch)
      );

      this.pokemonShow = resultado[0];
    },
  },
};
</script>
<style scoped>
#search {
  width: 200px;
  display: flex;
  margin: 10px;
  border-radius: 8px;
  border: solid black;
}

.search-card-title::first-letter {
  text-transform: uppercase;
}
.search-card-title {
  background-color: rgb(207, 232, 255);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.poke-card {
  background-color: aliceblue;

  border-radius: 20px;
  width: 10rem;
  height: 10rem;

  -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.51);
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.51);
}

.pkmn-name::first-letter {
  text-transform: uppercase;
}
.pkmn-name {
  background-color: rgb(207, 232, 255);
  position: relative;
  bottom: 16px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.sprite {
  cursor: pointer;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1em;
}
h5::first-letter {
  text-transform: uppercase;
}
</style>