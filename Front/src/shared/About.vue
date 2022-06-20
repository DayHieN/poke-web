<template>
  <div class="content">
    <h3>Fuentes</h3>
    <a href="https://pokeapi.co/" target="_blank">Pokeapi</a><br />

    <a
      href="https://developers.themoviedb.org/3/getting-started/introduction"
      target="_blank"
      >TMBD api </a
    ><br />

    <a href="https://www.pokemoncenter.com/" target="_blank">Pokémon Center</a
    ><br />

    <h3>Framework</h3>
    <a href="https://vuejs.org/" target="_blank">Vue.js</a>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.content a {
  text-decoration: none;
  background-color: chocolate;
  border-radius: 20px;
  padding: 2px;
  margin: 5px;
  transition: 0.3s;
}
.content a:hover {
  background: white;
  color: chocolate;
  font-weight: bold;
  transition: 0.3s;
}
</style>