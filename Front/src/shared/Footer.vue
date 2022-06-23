<template>
  <footer>
    <div class="footer">
      <p class="yo">Gabriel Hernández Collado 2022 &#9426;</p>
      <router-link to="/About">Acerca de</router-link>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped>
.footer {
  
  background-image: url("@/assets/bg.png");
  color: #fff;
  padding: 15px;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  bottom: 0;
}

.footer p {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  padding: 10px;
  color: white;
  z-index: 1;
}

.footer a {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  padding: 10px;
  color: white;
  z-index: 1;
  text-decoration: none;
}

.footer::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 250, 208, 1) 0%,
    rgba(255, 255, 255, 0) 99%
  );
  pointer-events: none;
}
</style>