<template>
  <input
    type="text"
    v-model="pokemonSearch"
    name=""
    id="search"
    placeholder="buscar Pokémon..."
  />
  <div class="buttons">
    <button @click="changeGen(0)">Todos</button>
    <button @click="changeGen(1)">1º Generación</button>
    <button @click="changeGen(2)">2º Generación</button>
    <button @click="changeGen(3)">3º Generación</button>
    <button @click="changeGen(4)">4º Generación</button>
    <button @click="changeGen(5)">5º Generación</button>
    <button @click="changeGen(6)">6º Generación</button>
    <button @click="changeGen(7)">7º Generación</button>
    <button @click="changeGen(8)">8º Generación</button>
  </div>

  <!-- //search -->
  <div class="all-container">
    <div v-if="pokemonSearch" class="search-container fade-in">
      <div class="poke-card fade-in">
        <p class="search-card-title">
          {{ pokemonShow.name }}
          <small>#{{ pokemonShow.id }}</small>
        </p>
        <img
          class="sprite fade-in"
          :src="pokemonShow.sprite"
          @mouseover="pokemonShow.sprite = pokemonShow.shiny"
          @mouseout="pokemonShow.sprite = pokemonShow.sprite2"
          @click="sendInfo(pokemonShow)"
          :alt="pokemonShow.name"
        />
      </div>
    </div>
    <!-- default -->
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
          :src="require(`@/assets/types/${type.type.name}.png`)"
          :alt="type.type.name"
        />
      </div> -->
      </div>
      <InfoModal
        :poke_info="pokemonInfo"
        @click="hideModal"
        :class="modalShow"
      />
    </div>
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
      start: 1,
      amount: 890,
      gen: null,
    };
  },
  created() {
    this.getPokemons(this.start, this.amount);
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
      console.log("pokemons cargados");
    },
    searchPokemon() {
      let resultado = this.pokemons.filter((pokemon) =>
        pokemon.name.includes(this.pokemonSearch)
      );

      this.pokemonShow = resultado[0];
    },
    changeGen(gen) {
      this.pokemons = [];
      if (gen == 0) {
        this.start = 1;
        this.amount = 890;
        console.log("gen " + gen);
        console.log(this.start, this.amount);
      }
      if (gen == 1) {
        this.start = 1;
        this.amount = 151;
        console.log("gen " + gen);
        console.log(this.start, this.amount);
      }
      if (gen == 2) {
        this.start = 152;
        this.amount = 100;
        console.log("gen " + gen);
        console.log(this.start, this.amount);
      }
      if (gen == 3) {
        this.start = 252;
        this.amount = 135;
        console.log("gen " + gen);
        console.log(this.start, this.amount);
      }
      if (gen == 4) {
        this.start = 387;
        this.amount = 107;
        console.log("gen " + gen);
        console.log(this.start, this.amount);
      }
      if (gen == 5) {
        this.start = 494;
        this.amount = 156;
        console.log("gen " + gen);
        console.log(this.start, this.amount);
      }
      if (gen == 6) {
        this.start = 650;
        this.amount = 72;
        console.log("gen " + gen);
        console.log(this.start, this.amount);
      }
      if (gen == 7) {
        this.start = 722;
        this.amount = 88;
        console.log("gen " + gen);
        console.log(this.start, this.amount);
      }
      if (gen == 8) {
        this.start = 810;
        this.amount = 81;
        console.log("gen " + gen);
        console.log(this.start, this.amount);
      }
      this.getPokemons(this.start, this.amount);
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

button {
  background-color: chocolate;
  color: white;
  border-radius: 5px;
  border: 1px solid white;
  cursor: pointer;
  margin-bottom: 10px;
  height: 30px;
  width: 200px;
  transition: 0.3s;
}

button:hover {
  transition: 0.3s;
  background-color: white;
  border-radius: 5px;
  border: 1px solid white;
  color: chocolate;
}

.buttons {
  margin-bottom: 40px;
}
.all-container {
  margin: 40px;
}
.search-card-title::first-letter {
  text-transform: uppercase;
}
.search-card-title {
  background-color: chocolate;
  /* position: relative;
  bottom: 12px; */
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.poke-card {
  background-color: rgb(255, 246, 223);
  color: white;
  border-radius: 20px;
  width: 10rem;
  height: 8rem;

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
  color: white;
  /* position: relative;
  bottom: 12px; */
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}
.pkmn-name small {
  color: white;
}

.sprite {
  transition: 0.3;
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