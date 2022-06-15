<template>
  <div class="vuopciones-container">
    <ul>
      <li
        v-for="opcion in listaOpciones"
        :key="opcion.id"
        @click="$emit('miRespuesta', opcion.id)"
      >
        {{ opcion.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    listaOpciones: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  background-color: chocolate;
  color: white;
  border-radius: 5px;
  border: 1px solid white;
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
  transition: 0.3s;
}
li::first-letter {
  text-transform: uppercase;
}
li:hover {
  transition: 0.3s;
  background-color: white;
  border-radius: 5px;
  border: 1px solid white;
  color: chocolate;
}
.correcto {
  background-color: greenyellow;
}
.vuopciones-container {
  position: relative;
  right: 18px;
  display: flex;
  justify-content: center;
}
</style>