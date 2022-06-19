<template>
  <div :class="modalShow">
    <div class="modal-container">
      <div class="modal-info">
        <h1>{{ movie_info.title }}</h1><br>
        <p>{{movie_info.overview}}</p>
      </div>

      <div class="img-container">
        <img :src="img + movie_info.poster_path" alt="" />
      </div>
      <span>Fecha de lanzamiento: </span><p>{{movie_info.release_date}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    movie_info: null,
  },
  data() {
    return {
      modalShow: "",
      img: "http://image.tmdb.org/t/p/w200",
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
</style>