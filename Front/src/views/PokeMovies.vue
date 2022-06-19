<template>
<img src="@/assets/pokemovies.png" alt="">
  <div class="container">
    <div
      v-for="movie in movies"
      :key="movies.id"
      class="card"
      @click="sendInfo(movie)"
    >
      <h3>{{ movie.title }}</h3><br>  

      <img :src="img + movie.poster_path" alt="{{movie.title}}" />
    </div>
  </div>
  <MovieModal v-if="moviesInfo" :movie_info="moviesInfo" :class="modalShow" @click="hideModal" />
</template>
<script>
import axios from "axios";
import MovieModal from "@/components/PokeMovies/MovieModal.vue";
export default {
  components: {
    MovieModal,
  },
  data() {
    return {
      movies: [],
      img: "http://image.tmdb.org/t/p/w200",
      moviesInfo: null,
      modalShow: "modal modal-close-modal",
    };
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    async getMovies() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie?api_key=d774b84c19578a42cd287690a0840e5e&query=pokemon&language=es-SPA"
      );
      console.log(response.data);
      this.movies = response.data.results;
    },
    sendInfo(moviesInfo) {
      this.showModal();
      console.log(moviesInfo);
      this.moviesInfo = moviesInfo;
    },
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
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 2.5em;
  margin: 45px;
}
.card {
  cursor: pointer;

  background: white;

  border-radius: 20px;
  width: 300px;
  padding: 30px;
  -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.51);
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.51);

  transition: 0.3s;
  width: 300px;
}

.card:hover {
  transform: scale(1.1);
  transition: 0.3s;
}

.card img {
  border-radius: 20px;
}
</style>