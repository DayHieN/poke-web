<template>
  <div :class="modalShow">
    <div class="modal-container">
      <h1 class="modal-title">{{ poke_info.name }}</h1>
      <div class="modal-sprite-container">
        <img
          @mouseover="poke_info.sprite = poke_info.shiny"
          @mouseout="poke_info.sprite = poke_info.sprite2"
          class="modal-sprite"
          :src="poke_info.sprite"
          :alt="poke_info.name"
        />
      </div>

      <div
        class="modal-types"
        v-for="(type, index) in poke_info.types"
        :key="index"
      >
        <img
          class="modal-type"
          :src="require(`@/assets/types/${type.type.name}.png`)"
          :alt="type.type.name"
        />
      </div>
      <div class="modal-info">
        <h2>Abilities</h2>
        <div v-for="(abilities, index) in poke_info.abilities" :key="index">
          <p class="modal-abilities">
            {{ abilities.ability.name }}
          </p>
        </div>
        <div>
          <h2>Characteristics</h2>
          <p>Weight: {{ poke_info.weight }} kg</p>
          <p>Height: {{ poke_info.height }} m</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    poke_info: null,
  },
  data() {
    return {
      modalShow: "",
    };
  },
  methods: {
    hideModal() {
      this.modalShow = "modal modal-close-modal";
    },
    showModal() {
      this.modalShow = "modal modal-show";
    },
  },
};
</script>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #111111bd;
  display: flex;
  z-index: 1;
}
.modal-container {
  margin: auto;
  width: 90%;
  max-width: 600px;
  max-height: 90%;
  background-color: rgb(252, 235, 194);
  border-radius: 20px;
  padding: 2em 1.5em;

  grid-auto-columns: 100%;
  border: solid 10px chocolate;
}

.modal-close:hover {
  transition: 0.2s;
  background-color: white;
  color: #b94242;
}
.modal-show {
  opacity: 1;
  pointer-events: unset;
  transition: 0.3s;
}
.modal-close-modal {
  opacity: 0;
  pointer-events: none;
  transition: 0.3s;
}
.modal-sprite {
  width: 200px;
}
.modal-type {
  width: 8%;
}
.modal-types {
  display: inline;
}
.modal-title {
  position: relative;
}
.modal-title::first-letter {
  text-transform: uppercase;
}

/* .modal-info {
  text-align: start;
} */
</style>