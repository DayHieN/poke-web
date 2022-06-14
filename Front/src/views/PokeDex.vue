<template>
  <input type="text" v-model="pokemonSearch" name="" />
  <div
    v-if="pokemonSearch"
    v-for="(data, index) in pokemonShow"
    :key="index"
    class="poke-card fade-in"
  >
    <h5>
      {{ data.name }} <small>#{{ data.id }}</small>
    </h5>
    <img
      class="sprite"
      :src="data.sprite"
      @mouseover="data.sprite = data.shiny"
      @mouseout="data.sprite = data.sprite2"
      @click="sendInfo(data)"
      :alt="data.name"
    />
  </div>
  <div v-if="!pokemonSearch" class="container fade-in">
    <div v-for="(data, index) in pokemons" :key="index" class="poke-card">
      <h5>
        {{ data.name }} <small>#{{ data.id }}</small>
      </h5>
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
      modalShow: "modal modal_close_modal",
      pokemonInfo: [],
      pokemonSearch: "",
      pokemonShow: [],
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
      this.modalShow = "modal modal_close_modal";
    },
    showModal() {
      this.modalShow = "modal modal_show";
    },
    sendInfo(pokeInfo) {
      this.showModal();
      console.log(pokeInfo);
      this.pokemonInfo = pokeInfo;
    },
    async searchPokemon() {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonSearch}`)
        .then((response) => {
          let pokemon = {
            sprite: response.data.sprites.front_default,
            sprite2: response.data.sprites.front_default,
            shiny: response.data.sprites.front_shiny,
            name: response.data.name,
            id: response.data.id,
            types: response.data.types,
          };
          this.pokemonShow.push(pokemon);
        });
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
        };
        // console.log(pokemon.types);
        this.pokemons.push(pokemon);
        i++;
      }
    },
  },
};
</script>
<style scoped>
.poke-card {
  background-color: aliceblue;

  border-radius: 20px;
  width: 10rem;

  -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.51);
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.51);
}
.poke-card h5 {
  position: relative;
  bottom: 22px;
  background-color: rgb(207, 232, 255);

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: none;
  border-bottom-right-radius: none;
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