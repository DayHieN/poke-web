<template>
  <!-- <label class="switch">
    <input type="checkbox" />
    <span class="slider round"></span>
  </label> -->
  <div class="navbar">
    <div class="logo">
      <router-link to="/">
        <img class="logo" src="@/assets/pokeweb.png" alt="pokeweb" />
      </router-link>
    </div>

    <ul class="links">
      <li>
        <router-link to="/PokeDex">PokéDex</router-link>
      </li>
      <li>
        <router-link to="/PokeMerch">PokéMerch</router-link>
      </li>
      <li>
        <router-link to="/PokeMovies">PokéMovies</router-link>
      </li>
      <li>
        <router-link to="/PokeGame">PokéGame</router-link>
      </li>
    </ul>
  </div>
  <div class="toggle">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>

  <router-view></router-view>
  <Footer />
</template>
<script>
import Footer from "@/shared/Footer.vue";
export default {
  head: {
    script: [
      {
        type: "text/javascript",
        src: "@/togglemenu.js",
        async: true,
        body: true,
      },
    ],
  },
  components: {
    Footer,
  },
};
</script>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  transition: 0.4s ease all;
}

ul {
  padding: 0;
  margin: 0;
}

.navbar {
  position: relative;
  background-image: url("@/assets/bg.png");
  color: #fff;
  padding: 15px;
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
}

.navbar::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(255, 250, 208, 1) 0%,
    rgba(255, 255, 255, 0) 99%
  );
  pointer-events: none;
}

.navbar .logo {
  cursor: pointer;
  width: 250px;
  z-index: 1;
  transition: 0.3s;
}

.navbar .logo:hover {
  transform: scale(1.05);
  transition: 0.3s;
}

.navbar ul.links {
  z-index: 1;

  list-style: none;
  display: flex;
  align-items: center;
  transition: 0.4s ease all, 0s ease background;
  margin: 20px;
}
.navbar ul.links li {
  text-transform: uppercase;
  padding: 0 15px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease all, 0s ease margin;
  background: rgba(0, 0, 0, 0.5);
}

.navbar ul.links li:first-child {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.navbar ul.links li:last-child {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.navbar ul.links li a {
  text-decoration: none;
  color: #fff;
}
.navbar ul.links li:hover {
  background: #ffc600;
  cursor: pointer;
}
.navbar ul.links li:hover a {
  color: #080808;
  font-weight: bold;
}

button {
  background: #ffc600;
  outline: none;
  font-weight: bold;
  padding: 10px 18px;
  border-radius: 25px;
  border: 1px solid #e6b200;
  letter-spacing: 1px;
}
button:hover {
  cursor: pointer;
  transform: scale(1.1);
  color: white;
  background: #222222;
  border-color: black;
}

.navbar.sticky {
  position: fixed;
  z-index: 40;
}
.navbar.sticky ~ main {
  position: relative;
  z-index: 20;
  top: 65px;
}

section {
  background: #000;
  color: #ffc600;
  padding: 20px;
  font-family: Lacquer;
  font-weight: bold;
  letter-spacing: 0.5px;
}

@media screen and (max-width: 750px) {
  .navbar .right {
    height: 0;
    overflow: hidden;
  }

  .toggle {
    position: absolute;
    top: 32.5px;
    right: 20px;
    z-index: 99;
    transform: translateY(-50%);
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .toggle > * {
    width: 80%;
    height: 2px;
    background: #fff;
    margin: 3px 0;
  }

  .navbar.collapsed .toggle .line1 {
    transform: rotate(-45deg) translate(-4px, 5px);
  }
  .navbar.collapsed .toggle .line2 {
    opacity: 0;
  }
  .navbar.collapsed .toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }

  .navbar.collapsed .logo {
    position: absolute;
    z-index: 44;
  }

  .navbar .links {
    position: fixed;
    background: #080808;
    z-index: 40;
    top: 0;
    left: -100%;
    flex-direction: column;
    width: 45vw;
    height: 100vh;
  }
  .navbar .links li:first-child {
    margin-top: 80px;
  }

  .navbar.collapsed .links {
    left: 0;
  }
  .navbar.collapsed .links a {
    color: #fff;
  }
  .navbar.collapsed .links li {
    width: 100%;
  }
  .navbar.collapsed .links li:hover a {
    color: #080808;
  }

  .navbar.collapsed .right {
    position: fixed;
    width: 45vw;
    text-align: center;
    height: auto;
    bottom: 40px;
    left: 22.5vw;
    transform: translateX(-50%);
    z-index: 45;
  }

  .navbar.collapsed ~ main {
    filter: blur(1px);
    opacity: 0.8;
  }

  .navbar.sticky {
    position: fixed;
    z-index: 40;
  }

  
}
</style>
