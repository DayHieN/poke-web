<template>
  <input
    type="text"
    v-model="pokemonSearch"
    name=""
    id="search"
    placeholder="buscar Pokémon..."
  />
  <div v-if="pokemonSearch" class="search-container fade-in">
    <div
      v-for="(data, index) in pokemonSearch"
      :key="index"
      class="poke-card fade-in"
    >
      <p class="search-card-title">
        {{ pokemonShow[index].name }}
        <small>#{{ pokemonShow[index].id }}</small>
      </p>
      <img
        class="sprite"
        :src="pokemonShow[index].sprite"
        @mouseover="pokemonShow[index].sprite = pokemonShow[index].shiny"
        @mouseout="pokemonShow[index].sprite = pokemonShow[index].sprite2"
        @click="sendInfo(pokemonShow)"
        :alt="pokemonShow[index].name"
      />
    </div>
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
      pokemonShow: null,
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
          weight: response.data.weight / 10,
          height: response.data.height / 10,
        };

        this.pokemons.push(pokemon);
        i++;
      }
    },
    searchPokemon() {
      let resultado = this.pokemons.filter((pokemon) =>
        pokemon.name.includes(this.pokemonSearch)
      );

      this.pokemonShow = resultado;
    },
    // searchPokemonTypes() {
    //   let resultado = this.pokemons.filter((pokemon) =>
    //     pokemon.types.type.name.includes(this.pokemonSearch)
    //   );

    //   this.pokemonShow = resultado;
    // },
  },
};
</script>
<style scoped>
#search {
  height: 40px;
  width: 200px;
  display: flex;
  margin-bottom: 40px;
  border: none;
}

.search-card-title::first-letter {
  text-transform: uppercase;
}
.search-card-title {
  background-color: chocolate;
  position: relative;
  bottom: 12px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.poke-card {
  background-color: rgb(255, 246, 223);
  color: white;
  border-radius: 20px;
  width: 10rem;
  height: 10rem;

  transition: 0.3s;

  -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.51);
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.51);
}

.poke-card:hover {
  transform: scale(1.3);
  transition: 0.3s;
}

.pkmn-name::first-letter {
  text-transform: uppercase;
}
.pkmn-name {
  background-color: chocolate;
  /* position: relative;
  bottom: 12px; */
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.sprite {
  cursor: pointer;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1.7em;
}
.search-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
}
h5::first-letter {
  text-transform: uppercase;
}
</style>