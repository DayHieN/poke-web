<template>
  <div :class="modalShow">
    <div class="modal-container">
      <div class="modal-img-container">
        <h1 class="modal-title">{{ prod_info.product_name }}</h1>
        <img
          class="modal-img"
          :src="prod_info.url"
          :alt="prod_info.product_name"
        />
      </div>
      <div class="modal-info">
        <h2>Description</h2>

        <p class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, odio
          repellendus? Maiores consequatur iusto fugiat debitis possimus.
          Commodi vero vitae adipisci aliquid, quisquam a id laudantium, quia
          beatae deserunt ipsam.
        </p>

        <div class="price-container">
          <h3>Price</h3>
          <p class="price">{{ prod_info.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    prod_info: null,
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
  max-width: 800px;
  max-height: 90%;
  background-color: rgb(254, 254, 254);
  border-radius: 20px;
  padding: 2em 1.5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 1.5em;

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
  display: flex;
  justify-content: center;
}
.modal-close-modal {
  opacity: 0;
  pointer-events: none;
  transition: 0.3s;
}
.modal-img {
  width: 300px;
}

.modal-title {
  position: relative;
}
.modal-title::first-letter {
  text-transform: uppercase;
}
.desc {
  color: black;
}
.modal-info {
  text-align: center;
}
.price {
  font-size: 30px;
}
</style>