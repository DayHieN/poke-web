<template>
  <section :class="modalShow">
    <div class="modal_container">
      <h1 class="modal_title">{{ poke_info.name }}</h1>
      <img class="modal-sprite" :src="poke_info.sprite" :alt="poke_info.name" />
      <div v-for="(type, index) in poke_info.types" :key="index">
        <img
          :src="'../../assets/types/' + type.type.name + '.png'"
          :alt="type.type.name"
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    poke_info: [],
  },
  data() {
    return {
      modalShow: "",
    };
  },
  methods: {
    hideModal() {
      this.modalShow = "modal modal_close_modal";
    },
    showModal() {
      this.modalShow = "modal modal_show";
    },
  },
};
</script>
<style>
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
.modal-sprite {
  width: 25%;
}
.modal-title::first-letter {
  text-transform: uppercase;
}
</style>