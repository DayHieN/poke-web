<template>
  <!-- <label class="switch">
    <input type="checkbox" />
    <span class="slider round"></span>
  </label> -->
  <div class="nav">
    <nav class="menu-nav">
      <router-link to="/">
        <img class="logo" src="@/assets/pokeweb.png" alt="pokeweb" />
      </router-link>
      <router-link to="/PokeDex">PokéDex</router-link>
      <router-link to="/PokeMerch">PokéMerch</router-link>
      <router-link to="/PokeGame">PokéGame</router-link>
    </nav>
  </div>

  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  display: flex;
  width: 50%;
  margin: 2%;
}

.nav {
  display: flex;
  font-weight: bold;
  background-color: chocolate;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 40px;
}
.menu-nav {
  color: white;
  text-decoration: none;
  padding: 2%;
}

nav a.router-link-exact-active {
  color: #42b7b9;
}
nav a {
  text-decoration: none;
  padding: 10px;
}
</style>
