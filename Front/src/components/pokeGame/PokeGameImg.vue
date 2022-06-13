<template>
 
  <div class="vuekemon-container">
    <img v-if="respuesta" class="fade-in" :src="srcImg" alt="pokemon" />
    <img v-else class="fade-in hidden-vuekemon" :src="srcImg" alt="pokemon" />
  </div>
</template>
<script>
export default {
  props: {
    vuekemonId: {
      type: Number,
      required: true,
    },
    respuesta: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },

  computed: {
    srcImg: function () {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.vuekemonId}.svg`;
    },
  },
};
</script>
<style scoped>
.vuekemon-container {
  display: flex;
  justify-content: center;
  
}
img {
  height: 200px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-vuekemon {
  filter: brightness(0);
}
</style>