<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/PokeDex">PokéDex</router-link> |
    <router-link to="/PokeMerch">PokéMerch</router-link> |
    <router-link to="/PokeGame">PokéGame</router-link> 
    
    
  </nav>
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #b94242;
}
</style>
