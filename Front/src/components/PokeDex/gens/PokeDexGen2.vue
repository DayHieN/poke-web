<template>
  <GenNav />
  <div class="container fade-in">
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
      <h6 v-for="(type, index) in data.types" :key="index">
        {{ type.name }}
      </h6>
    </div>

    <section :class="modalShow">
      <div class="modal_container">
        <h2 class="modal_title"></h2>
        <p class="modal_p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta error
          labore ducimus ut, illum fugit, enim eveniet quidem iusto expedita,
          consectetur ipsum? Nulla, corporis a.
        </p>
        <button class="modal_close" @click="hideModal">Cerrar</button>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import GenNav from '@/components/PokeDex/gens/GenNav.vue';
export default {
  components: {
    GenNav,
  },
  props:{
    start:152,
    amount:100
  },
  data() {
    return {
      pokemons: [],
      fadeIn: null,
      modalShow: "modal modal_close_modal",
    };
  },
  async created() {
    let i = 152;
    let pokemons = new Array(100);
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
      };
      // console.log(pokemon.types);
      this.pokemons.push(pokemon);
      i++;
    }
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
    },
  },
};
</script>
<style scoped>
.poke-card {
  background-color: aliceblue;

  margin: 20px;
  border-radius: 20px;
  width: 10rem;

  -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.51);
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.51);
}
.poke-card h5 {
  display: block;
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
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #111111bd;
  display: flex;
}
.modal_container {
  margin: auto;
  width: 90%;
  max-width: 600px;
  max-height: 90%;
  background-color: white;
  border-radius: 20px;
  padding: 3em 2.5em;
  display: grid;
  grid-auto-columns: 100%;
}

.modal_close {
  background-color: #b94242;
  color: white;
  transition: 0.2s;
  border: 1px solid;
  border-radius: 6px;
  transition: 0.3s;
  cursor: pointer;
}
.modal_close:hover {
  transition: 0.2s;
  background-color: white;
  color: #b94242;
}
.modal_show {
  opacity: 1;
  pointer-events: unset;
  transition: 0.3s;
}
.modal_close_modal {
  opacity: 0;
  pointer-events: none;
  transition: 0.3s;
}
</style>