<template>
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
</template>
<script>
export default {
  props: {
    poke_info: [],
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

.modal_close {
  background-color: #b94242;
  color: white;
  transition: 0.2s;
  border: 1px solid;
  border-radius: 6px;
  transition: 0.3s;
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